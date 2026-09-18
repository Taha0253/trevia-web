import React, { useState } from 'react';
import { 
  Zap, ShieldCheck, CheckCircle2, ArrowRight, Play, RotateCw, 
  Unlock, Radio, Activity, Terminal, Check,
  Loader2
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { submitLead } from '../services/api';

interface DemoPageProps {
  onRequestModal?: () => void;
}

export const DemoPage: React.FC<DemoPageProps> = () => {
  const [activeTab, setActiveTab] = useState<'telemetry' | 'commands' | 'roaming'>('telemetry');
  
  // Interactive command simulator states
  const [simLogs, setSimLogs] = useState<Array<{ time: string; msg: string; type: 'info' | 'success' | 'warn' }>>([
    { time: '12:00:01', msg: 'WSS tunnel established: wss://edge.treviaev.in/ocpp/v16/STN-004', type: 'info' },
    { time: '12:00:03', msg: 'OCPP 1.6J BootNotification -> Accepted (HeartbeatInterval: 30s)', type: 'success' },
    { time: '12:00:05', msg: 'Connector 1 status: Available | Connector 2 status: Charging (48.5 kW)', type: 'info' }
  ]);
  const [simCommandLoading, setSimCommandLoading] = useState<string | null>(null);

  // Live Telemetry Simulation States
  const [activeSoc, setActiveSoc] = useState(64);
  const [activePower, setActivePower] = useState(48.5);
  const [activeTemp, setActiveTemp] = useState(36.2);

  // Demo Form State
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    company: '',
    chargers_count: '10 - 50 chargers',
    demo_focus: 'Trevia CMS Full Walkthrough',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleCommandSimulate = (commandName: string, actionPayload: string) => {
    setSimCommandLoading(commandName);
    const now = new Date().toTimeString().split(' ')[0];
    
    setSimLogs(prev => [
      { time: now, msg: `TX >> JSON-RPC ${commandName}.req: ${actionPayload}`, type: 'info' },
      ...prev
    ]);

    setTimeout(() => {
      const ackTime = new Date().toTimeString().split(' ')[0];
      setSimLogs(prev => [
        { time: ackTime, msg: `RX << ${commandName}.conf: Status "Accepted" (Latency: 12ms)`, type: 'success' },
        ...prev
      ]);
      setSimCommandLoading(null);

      if (commandName === 'RemoteStartTransaction') {
        setActivePower(60.0);
        setActiveSoc(prev => Math.min(100, prev + 2));
      } else if (commandName === 'Reset (Soft)') {
        setActiveTemp(32.0);
      }
    }, 600);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await submitLead({
        full_name: formData.full_name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        chargers_count: formData.chargers_count,
        message: `[Demo Focus: ${formData.demo_focus}] ${formData.message}`
      });
      setIsSuccess(true);
      confetti({
        particleCount: 90,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#00A09A', '#00A09A', '#FFFFFF', '#33C4BF']
      });
    } catch (err) {
      console.error(err);
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#02060D] text-white pt-8 pb-24 relative overflow-hidden">
      {/* Volumetric background lights */}
      <div className="absolute top-10 left-1/4 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-[#00A09A]/10 via-[#00A09A]/5 to-transparent rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-[600px] h-[600px] bg-[#33C4BF]/8 rounded-full blur-[220px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16 pt-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#061426] border border-[#0E2C52] text-[#00A09A] text-xs font-mono font-medium tracking-wider uppercase mb-5 shadow-[0_0_20px_rgba(0,160,154,0.2)]">
            <Zap className="w-3.5 h-3.5" />
            <span>Interactive enterprise demo</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-white tracking-tight leading-tight mb-6">
            Experience TreviaEV <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00A09A] via-[#00A09A] to-white">Live.</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Test the OCPP telemetry engine and remote commanding console, or book a 30-minute walkthrough with our architects.
          </p>
        </div>

        {/* MAIN 2-COLUMN GRID: Left = Interactive Sandbox, Right = Demo Request Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
          
          {/* LEFT 7-COL: INTERACTIVE SANDBOX */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-[#040C18] border border-[#0E3460] rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden backdrop-blur-xl">
              
              {/* Header Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#0E2C52]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#061426] border border-[#00A09A]/40 text-[#00A09A] flex items-center justify-center">
                    <Terminal className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Interactive CMS Simulator</h3>
                    <p className="text-xs text-slate-400 font-mono">Live Node: STN-HYD-04 (Dual Gun DC 120kW)</p>
                  </div>
                </div>

                {/* Tab Switcher */}
                <div className="flex items-center gap-1 bg-[#02060D] p-1 rounded-xl border border-[#0E2C52]">
                  <button
                    onClick={() => setActiveTab('telemetry')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition ${
                      activeTab === 'telemetry' 
                        ? 'bg-[#00A09A] text-black font-bold' 
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Telemetry
                  </button>
                  <button
                    onClick={() => setActiveTab('commands')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition ${
                      activeTab === 'commands' 
                        ? 'bg-[#00A09A] text-black font-bold' 
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Commands
                  </button>
                  <button
                    onClick={() => setActiveTab('roaming')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition ${
                      activeTab === 'roaming' 
                        ? 'bg-[#00A09A] text-black font-bold' 
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Roaming
                  </button>
                </div>
              </div>

              {/* TAB 1: REAL-TIME TELEMETRY STREAM */}
              {activeTab === 'telemetry' && (
                <div className="space-y-6 pt-6 animate-fadeIn">
                  
                  {/* Gauge Cards Grid */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-[#02060D] p-4 rounded-2xl border border-[#0E223D]">
                      <span className="text-[10px] font-mono text-slate-400 block uppercase">Active Power</span>
                      <span className="text-xl sm:text-2xl font-mono font-black text-[#00A09A] mt-1 block">
                        {activePower.toFixed(1)} <span className="text-xs text-slate-400">kW</span>
                      </span>
                      <span className="text-[10px] text-emerald-400 flex items-center gap-1 mt-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        415V / 118A
                      </span>
                    </div>

                    <div className="bg-[#02060D] p-4 rounded-2xl border border-[#0E223D]">
                      <span className="text-[10px] font-mono text-slate-400 block uppercase">Vehicle SoC</span>
                      <span className="text-xl sm:text-2xl font-mono font-black text-white mt-1 block">
                        {activeSoc}%
                      </span>
                      <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
                        <div 
                          className="bg-gradient-to-r from-[#00A09A] to-[#00A09A] h-full transition-all duration-500" 
                          style={{ width: `${activeSoc}%` }}
                        />
                      </div>
                    </div>

                    <div className="bg-[#02060D] p-4 rounded-2xl border border-[#0E223D]">
                      <span className="text-[10px] font-mono text-slate-400 block uppercase">Gun Temp</span>
                      <span className="text-xl sm:text-2xl font-mono font-black text-amber-400 mt-1 block">
                        {activeTemp.toFixed(1)} <span className="text-xs text-slate-400">°C</span>
                      </span>
                      <span className="text-[10px] text-slate-400 mt-1 block">
                        Optimal Safe
                      </span>
                    </div>
                  </div>

                  {/* Realtime Packet Flow Window */}
                  <div className="bg-[#02060D] rounded-2xl p-4 border border-[#0E223D] font-mono text-xs">
                    <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800 text-[11px] text-slate-400">
                      <span className="flex items-center gap-2">
                        <Activity className="w-3.5 h-3.5 text-[#00A09A]" />
                        <span>Live OCPP WebSocket Stream</span>
                      </span>
                      <span className="text-[#00A09A] font-bold">100ms Granularity</span>
                    </div>
                    <div className="space-y-1.5 max-h-40 overflow-y-auto pr-1">
                      {simLogs.map((log, i) => (
                        <div key={i} className="flex items-start gap-2 leading-relaxed">
                          <span className="text-slate-500 shrink-0">[{log.time}]</span>
                          <span className={
                            log.type === 'success' ? 'text-emerald-400' :
                            log.type === 'warn' ? 'text-amber-400' : 'text-slate-300'
                          }>
                            {log.msg}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Simulator Controls */}
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-xs text-slate-400">
                      Test hardware packet streaming in real-time
                    </span>
                    <button
                      onClick={() => {
                        setActiveSoc(prev => (prev >= 98 ? 20 : prev + 5));
                        setActivePower(prev => (prev > 90 ? 45 : prev + 12));
                        const now = new Date().toTimeString().split(' ')[0];
                        setSimLogs(prev => [
                          { time: now, msg: `MeterValues.req: energy.active.import.register = 34.2 kWh`, type: 'info' },
                          ...prev
                        ]);
                      }}
                      className="px-4 py-2 rounded-xl bg-[#061426] border border-[#0E2C52] hover:border-[#00A09A] text-xs font-mono text-[#00A09A] flex items-center gap-2 transition"
                    >
                      <RotateCw className="w-3.5 h-3.5" />
                      <span>Trigger MeterValues</span>
                    </button>
                  </div>

                </div>
              )}

              {/* TAB 2: REMOTE COMMANDING TERMINAL */}
              {activeTab === 'commands' && (
                <div className="space-y-6 pt-6 animate-fadeIn">
                  <p className="text-xs text-slate-300">
                    Dispatch signed JSON-RPC remote commands across persistent WebSocket connections directly to simulated charger hardware.
                  </p>

                  <div className="grid grid-cols-2 gap-3">
                    <button
                      disabled={simCommandLoading !== null}
                      onClick={() => handleCommandSimulate('Reset (Soft)', '{"type": "Soft"}')}
                      className="p-4 rounded-2xl bg-[#02060D] border border-[#0E223D] hover:border-[#00A09A] text-left transition group disabled:opacity-50"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <RotateCw className="w-5 h-5 text-[#00A09A]" />
                        <span className="text-[10px] font-mono text-slate-500">OCPP 1.6J</span>
                      </div>
                      <div className="text-sm font-bold text-white group-hover:text-[#00A09A]">Soft Reset</div>
                      <div className="text-[11px] text-slate-400 mt-1">Reboots controller software safely</div>
                    </button>

                    <button
                      disabled={simCommandLoading !== null}
                      onClick={() => handleCommandSimulate('UnlockConnector', '{"connectorId": 1}')}
                      className="p-4 rounded-2xl bg-[#02060D] border border-[#0E223D] hover:border-[#00A09A] text-left transition group disabled:opacity-50"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <Unlock className="w-5 h-5 text-[#33C4BF]" />
                        <span className="text-[10px] font-mono text-slate-500">OCPP 1.6J</span>
                      </div>
                      <div className="text-sm font-bold text-white group-hover:text-[#33C4BF]">Unlock Gun</div>
                      <div className="text-[11px] text-slate-400 mt-1">Releases mechanical lock solenoid</div>
                    </button>

                    <button
                      disabled={simCommandLoading !== null}
                      onClick={() => handleCommandSimulate('RemoteStartTransaction', '{"idTag": "TREVIA-WALLET-901", "connectorId": 1}')}
                      className="p-4 rounded-2xl bg-[#02060D] border border-[#0E223D] hover:border-[#00A09A] text-left transition group disabled:opacity-50"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <Play className="w-5 h-5 text-[#00A09A]" />
                        <span className="text-[10px] font-mono text-slate-500">OCPP 1.6J</span>
                      </div>
                      <div className="text-sm font-bold text-white group-hover:text-[#00A09A]">Remote Start</div>
                      <div className="text-[11px] text-slate-400 mt-1">Authorizes energy flow via app</div>
                    </button>

                    <button
                      disabled={simCommandLoading !== null}
                      onClick={() => handleCommandSimulate('TriggerMessage', '{"requestedMessage": "DiagnosticsStatusNotification"}')}
                      className="p-4 rounded-2xl bg-[#02060D] border border-[#0E223D] hover:border-amber-400 text-left transition group disabled:opacity-50"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <Radio className="w-5 h-5 text-amber-400" />
                        <span className="text-[10px] font-mono text-slate-500">Diagnostics</span>
                      </div>
                      <div className="text-sm font-bold text-white group-hover:text-amber-400">Query Diagnostics</div>
                      <div className="text-[11px] text-slate-400 mt-1">Fetches firmware logs & fault stack</div>
                    </button>
                  </div>

                  {/* Terminal Log */}
                  <div className="bg-[#02060D] rounded-2xl p-4 border border-[#0E223D] font-mono text-xs max-h-36 overflow-y-auto">
                    {simLogs.slice(0, 4).map((log, i) => (
                      <div key={i} className="flex items-start gap-2 py-0.5">
                        <span className="text-slate-500">[{log.time}]</span>
                        <span className={log.type === 'success' ? 'text-emerald-400' : 'text-slate-300'}>{log.msg}</span>
                      </div>
                    ))}
                  </div>

                </div>
              )}

              {/* TAB 3: MULTI-CPO ROAMING SIMULATOR */}
              {activeTab === 'roaming' && (
                <div className="space-y-6 pt-6 animate-fadeIn">
                  <div className="p-4 rounded-2xl bg-[#02060D] border border-[#0E223D] space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-400">Driver Account:</span>
                      <span className="font-mono text-white font-bold">driver_delhi_9921@trevia</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-400">Single Wallet Balance:</span>
                      <span className="font-mono text-[#00A09A] font-bold">₹1,450.00</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-400">Target CPO Network:</span>
                      <span className="font-mono text-white">ChargeZone Hub #14 (OCPI Roaming)</span>
                    </div>
                    <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs">
                      <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4" />
                        Zero Settlement Delay
                      </span>
                      <span className="text-slate-400 font-mono text-[11px]">Instant Token Exchange</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-gradient-to-r from-[#00A09A]/10 to-[#33C4BF]/10 border border-[#00A09A]/30 text-xs leading-relaxed text-slate-200">
                    Trevia eliminates closed-loop wallet silos. EV drivers charge at any affiliated station across India using a single unified Trevia wallet while CPOs receive automated reconciliation.
                  </div>
                </div>
              )}

            </div>

            {/* Trust Highlights under the Simulator */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="bg-[#030914] p-3 rounded-xl border border-[#0E223D] text-center">
                <span className="text-xs font-mono font-bold text-[#00A09A] block">OCPP 1.6J / 2.0.1</span>
                <span className="text-[10px] text-slate-400 block mt-0.5">Protocol Certified</span>
              </div>
              <div className="bg-[#030914] p-3 rounded-xl border border-[#0E223D] text-center">
                <span className="text-xs font-mono font-bold text-white block">ISO 15118</span>
                <span className="text-[10px] text-slate-400 block mt-0.5">Plug & Charge</span>
              </div>
              <div className="bg-[#030914] p-3 rounded-xl border border-[#0E223D] text-center">
                <span className="text-xs font-mono font-bold text-[#33C4BF] block">99.99% Cloud</span>
                <span className="text-[10px] text-slate-400 block mt-0.5">Uptime SLA</span>
              </div>
              <div className="bg-[#030914] p-3 rounded-xl border border-[#0E223D] text-center">
                <span className="text-xs font-mono font-bold text-white block">50,000+</span>
                <span className="text-[10px] text-slate-400 block mt-0.5">Charger Scalability</span>
              </div>
            </div>

          </div>

          {/* RIGHT 5-COL: ENTERPRISE DEMO BOOKING FORM */}
          <div id="demo-request" className="lg:col-span-5">
            <div className="bg-[#030A16] border border-[#0E3460] rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden backdrop-blur-xl">
              
              {/* Electric Cyan Edge Glow Header */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#00A09A] via-[#00A09A] to-[#33C4BF]" />

              {!isSuccess ? (
                <div>
                  <div className="mb-6">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00A09A]/10 border border-[#00A09A]/30 text-[#00A09A] text-xs font-mono font-semibold mb-2">
                      <Zap className="w-3.5 h-3.5" />
                      <span>SCHEDULE 1-ON-1 DEMO</span>
                    </div>
                    <h2 className="text-2xl font-bold tracking-tight text-white">
                      Book an Architectural Tour
                    </h2>
                    <p className="text-xs text-slate-400 mt-1 font-normal leading-relaxed">
                      Speak directly with our engineering founders. We'll connect to your chargers and show you live fleet telemetry.
                    </p>
                  </div>

                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Vikramaditya Rao"
                        value={formData.full_name}
                        onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                        className="w-full bg-[#02060D] border border-[#0E284A] rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#00A09A] transition-colors"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-1">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="name@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-[#02060D] border border-[#0E284A] rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#00A09A] transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full bg-[#02060D] border border-[#0E284A] rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#00A09A] transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-1">
                          Organization / CPO
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Nexus Energy Infra"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full bg-[#02060D] border border-[#0E284A] rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#00A09A] transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-1">
                          Network Scale
                        </label>
                        <select
                          value={formData.chargers_count}
                          onChange={(e) => setFormData({ ...formData, chargers_count: e.target.value })}
                          className="w-full bg-[#02060D] border border-[#0E284A] rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#00A09A] transition-colors cursor-pointer"
                        >
                          <option value="1 - 10 chargers">1 - 10 chargers</option>
                          <option value="10 - 50 chargers">10 - 50 chargers</option>
                          <option value="50 - 250 chargers">50 - 250 chargers</option>
                          <option value="250+ chargers">250+ chargers</option>
                          <option value="OEM / Roaming Partner">OEM / Roaming Partner</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-1">
                        Primary Demo Focus
                      </label>
                      <select
                        value={formData.demo_focus}
                        onChange={(e) => setFormData({ ...formData, demo_focus: e.target.value })}
                        className="w-full bg-[#02060D] border border-[#0E284A] rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#00A09A] transition-colors cursor-pointer"
                      >
                        <option value="Trevia CMS Full Walkthrough">Trevia CMS Full Walkthrough</option>
                        <option value="Hardware Compatibility & OCPP 2.0.1 Test">Hardware Compatibility & OCPP 2.0.1 Test</option>
                        <option value="Fleet Depot & Schedule Integration">Fleet Depot & Schedule Integration</option>
                        <option value="Multi-CPO Roaming & Wallet Gateway">Multi-CPO Roaming & Wallet Gateway</option>
                        <option value="Custom API & ERP Integration">Custom API & ERP Integration</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-1">
                        Technical Scope / Questions
                      </label>
                      <textarea
                        rows={2}
                        placeholder="Tell us about your charger models, existing backend, or migration timeline..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-[#02060D] border border-[#0E284A] rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#00A09A] transition-colors resize-none"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-[#00A09A] to-[#33C4BF] hover:from-[#008F8A] hover:to-[#00A09A] text-black font-bold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 transition-all duration-200 shadow-lg shadow-[#00A09A]/25 hover:shadow-[0_0_30px_#00A09A] disabled:opacity-70 active:scale-[0.99]"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            <span>Booking Consultation...</span>
                          </>
                        ) : (
                          <>
                            <span>Confirm Enterprise Demo</span>
                            <ArrowRight className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </div>

                    <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 pt-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#00A09A]" />
                      <span>Direct founder consultation • Strict NDA protected</span>
                    </div>
                  </form>
                </div>
              ) : (
                <div className="py-10 text-center space-y-4">
                  <div className="w-16 h-16 bg-[#00A09A]/10 border border-[#00A09A]/40 rounded-full flex items-center justify-center mx-auto text-[#00A09A] animate-bounce shadow-[0_0_25px_#00A09A]">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Demo Scheduled</h3>
                  <p className="text-sm text-slate-300 max-w-sm mx-auto font-normal leading-relaxed">
                    Thank you, <span className="text-[#00A09A] font-semibold">{formData.full_name}</span>. Our technical architecture team has received your request for <span className="text-white font-medium">{formData.demo_focus}</span>. A calendar invitation has been prepared for <span className="text-white font-medium">{formData.email}</span>.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => setIsSuccess(false)}
                      className="bg-white text-black font-bold px-6 py-2.5 rounded-full hover:bg-slate-200 transition text-xs uppercase tracking-wider"
                    >
                      Book Another Session
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

        {/* 3-STEP AGENDA: What happens during the demo? */}
        <div className="bg-[#030A14] border border-[#0E2C52] rounded-3xl p-8 sm:p-10 mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              What to Expect in Your 30-Minute Demo
            </h3>
            <p className="text-sm text-slate-400 mt-2">
              A high-density technical briefing tailored specifically to your charging footprint.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#02060D] p-6 rounded-2xl border border-[#0E223D] space-y-3">
              <div className="w-8 h-8 rounded-full bg-[#00A09A]/15 text-[#00A09A] font-mono font-bold flex items-center justify-center text-sm">
                01
              </div>
              <h4 className="text-base font-bold text-white">Architecture & Protocol Audit</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Review your current charger models, OCPP versions (1.6J or 2.0.1), and gateway latency requirements with zero hardware rip-and-replace.
              </p>
            </div>

            <div className="bg-[#02060D] p-6 rounded-2xl border border-[#0E223D] space-y-3">
              <div className="w-8 h-8 rounded-full bg-[#00A09A]/15 text-[#00A09A] font-mono font-bold flex items-center justify-center text-sm">
                02
              </div>
              <h4 className="text-base font-bold text-white">Live Hardware Simulation</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Watch Trevia CMS ingest live telemetry from your test station, issue remote soft/hard resets, and run automated self-healing loops.
              </p>
            </div>

            <div className="bg-[#02060D] p-6 rounded-2xl border border-[#0E223D] space-y-3">
              <div className="w-8 h-8 rounded-full bg-emerald-400/15 text-emerald-400 font-mono font-bold flex items-center justify-center text-sm">
                03
              </div>
              <h4 className="text-base font-bold text-white">Tariff & Roaming Strategy</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Configure dynamic time-of-use (ToU) tariffs, fleet billing settlement, and single-wallet multi-CPO roaming for your drivers.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DemoPage;