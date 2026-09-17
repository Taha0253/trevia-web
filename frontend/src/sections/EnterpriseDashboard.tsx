import React, { useState, useEffect } from 'react';
import { 
  LayoutDashboard, Users, Truck, Radio, Zap, 
  CreditCard, Tag, Sparkles, HelpCircle, Bell, 
  ShieldAlert, MapPin, IndianRupee, Wifi, Activity, Terminal
} from 'lucide-react';
import { fetchDashboardStats } from '../services/api';
import type { DashboardStats } from '../types';

export const EnterpriseDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [timeRange, setTimeRange] = useState<'7D' | '30D' | '3M'>('7D');
  const [hoveredBar, setHoveredBar] = useState<number | null>(null);
  const [stats, setStats] = useState<DashboardStats | null>(null);

  useEffect(() => {
    fetchDashboardStats().then((data) => setStats(data));
  }, []);

  const tabs = [
    { name: 'Dashboard', icon: LayoutDashboard },
    { name: 'Consumer Analytics', icon: Users },
    { name: 'Fleets', icon: Truck },
    { name: 'Stations', icon: Radio },
    { name: 'Sessions', icon: Zap },
    { name: 'Settlements', icon: CreditCard },
    { name: 'Tariffs', icon: Tag },
    { name: 'Offers & Promos', icon: Sparkles, isNew: true },
    { name: 'Support', icon: HelpCircle },
    { name: 'Alerts', icon: Bell },
    { name: 'Admin Access', icon: ShieldAlert },
  ];

  return (
    <section id="platform" className="py-24 bg-[#02060D] relative overflow-hidden border-t border-[#09182D]">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-[#00A8FF]/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-[#00F0FF] text-xs font-mono font-semibold uppercase tracking-[0.25em] mb-3">
            <Activity className="w-3.5 h-3.5" />
            <span>ENTERPRISE OPERATIONAL CONSOLE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extralight text-white tracking-tight">
            Next-Gen <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00A8FF] to-[#00F0FF]">CPO Command Center.</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-3 font-normal">
            Monitor every charging station in real time, resolve glitches remotely, and automate driver billing from one intuitive, unified command center.
          </p>
        </div>

        {/* The Pure Black Enterprise Dashboard Frame */}
        <div className="bg-[#030814] rounded-3xl p-5 sm:p-8 border border-[#0E2442] shadow-[0_25px_70px_rgba(0,0,0,0.8)] relative">
          
          {/* Top Pill Navigation Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 scrollbar-none text-xs font-medium border-b border-[#0A1D36]">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.name;
              return (
                <button
                  key={tab.name}
                  onClick={() => setActiveTab(tab.name)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl whitespace-nowrap transition-all duration-200 ${
                    isActive
                      ? 'bg-[#00A8FF]/15 text-[#00F0FF] border border-[#00A8FF]/40 font-semibold shadow-[0_0_15px_rgba(0,168,255,0.2)]'
                      : 'hover:bg-white/5 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.name}</span>
                  {tab.isNew && (
                    <span className="bg-[#00F0FF] text-black text-[9px] font-black px-1.5 py-0.2 rounded uppercase">
                      NEW
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Banner Header: Black Carbon Card with Electric Blue Highlights */}
          <div className="bg-[#040C1A] border border-[#0F2D54] rounded-2xl p-6 mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4 relative overflow-hidden">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {stats?.greeting || "Good afternoon, Admin"}
                </h3>
                <span className="px-2 py-0.5 rounded bg-[#00A8FF]/20 border border-[#00A8FF]/40 text-[#00F0FF] text-[10px] font-mono font-bold">
                  PROD CUSTODIAN
                </span>
              </div>
              <p className="text-xs text-slate-400 font-mono">
                {stats?.admin_status || "Active since Friday, 1 May 2026"} • Node: ap-south-1 (Mumbai)
              </p>
            </div>

            <div className="flex items-center flex-wrap gap-2.5">
              <div className="bg-[#020712] border border-[#0E284A] px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-300 flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-[#00F0FF]" />
                <span>{stats?.live_sessions ?? 0} Live Sessions</span>
              </div>
              <div className="bg-[#020712] border border-[#0E284A] px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-300 flex items-center gap-1.5">
                <span>{stats ? `${stats.available_stations} of ${stats.total_stations}` : '4 of 7'} Available</span>
              </div>
              <div className="bg-[#020712] border border-[#00F0FF]/40 px-3 py-1.5 rounded-full text-xs font-semibold text-[#00F0FF] flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#00F0FF] animate-ping" />
                <span>Live Telemetry</span>
              </div>
            </div>
          </div>

          {/* 4 Metric KPI Cards in Pure Black Obsidian */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            
            {/* Total Stations */}
            <div className="bg-[#040C1A] rounded-2xl p-5 border border-[#0E2644] hover:border-[#00A8FF]/40 transition-colors flex items-center justify-between">
              <div>
                <div className="text-xs font-medium text-slate-400 mb-1">Total Stations</div>
                <div className="text-3xl font-extrabold text-white font-mono">{stats?.total_stations ?? 7}</div>
              </div>
              <div className="w-10 h-10 rounded-xl bg-[#00A8FF]/10 text-[#00F0FF] flex items-center justify-center border border-[#00A8FF]/30">
                <MapPin className="w-5 h-5" />
              </div>
            </div>

            {/* Total Lifetime Revenue */}
            <div className="bg-[#040C1A] rounded-2xl p-5 border border-[#0E2644] hover:border-[#00A8FF]/40 transition-colors flex items-center justify-between">
              <div>
                <div className="text-xs font-medium text-slate-400 mb-1">Lifetime Network Revenue</div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">
                  {stats?.lifetime_revenue_formatted || "₹3,29,272.65"}
                </div>
              </div>
              <div className="w-10 h-10 rounded-xl bg-[#00A8FF]/10 text-[#00F0FF] flex items-center justify-center border border-[#00A8FF]/30">
                <IndianRupee className="w-5 h-5" />
              </div>
            </div>

            {/* Avg Network Uptime */}
            <div className="bg-[#040C1A] rounded-2xl p-5 border border-[#0E2644] hover:border-[#00A8FF]/40 transition-colors flex items-center justify-between">
              <div className="flex-1 pr-3">
                <div className="text-xs font-medium text-slate-400 mb-1">Network Uptime SLA</div>
                <div className="flex items-center gap-3">
                  <span className="text-3xl font-extrabold text-white font-mono">100%</span>
                  <div className="flex-1 max-w-[80px] h-1.5 bg-[#08182D] rounded-full overflow-hidden">
                    <div className="h-full bg-[#00F0FF] rounded-full w-full shadow-[0_0_8px_#00F0FF]" />
                  </div>
                </div>
              </div>
              <div className="w-10 h-10 rounded-xl bg-[#00A8FF]/10 text-[#00F0FF] flex items-center justify-center border border-[#00A8FF]/30 shrink-0">
                <Wifi className="w-5 h-5" />
              </div>
            </div>

            {/* Daily Sessions */}
            <div className="bg-[#040C1A] rounded-2xl p-5 border border-[#0E2644] hover:border-[#00A8FF]/40 transition-colors flex items-center justify-between">
              <div>
                <div className="text-xs font-medium text-slate-400 mb-1">Daily Sessions</div>
                <div className="text-3xl font-extrabold text-white font-mono">{stats?.daily_sessions ?? 0}</div>
              </div>
              <div className="w-10 h-10 rounded-xl bg-[#00A8FF]/10 text-[#00F0FF] flex items-center justify-center border border-[#00A8FF]/30">
                <Zap className="w-5 h-5" />
              </div>
            </div>

          </div>

          {/* 2 Main Visual Chart Cards in Black Glass */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Revenue Overview (Left Card) */}
            <div className="lg:col-span-7 bg-[#040C1A] rounded-2xl p-6 border border-[#0E2644]">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h4 className="text-base font-bold text-white tracking-tight">Revenue Overview</h4>
                  <p className="text-xs text-slate-400 font-mono">
                    Last 7 days • ₹{stats?.revenue_overview_7d_total ?? 1.71} total
                  </p>
                </div>
                <div className="flex items-center bg-[#020712] border border-[#0E2644] p-1 rounded-xl text-xs font-semibold text-slate-400">
                  {(['7D', '30D', '3M'] as const).map((r) => (
                    <button
                      key={r}
                      onClick={() => setTimeRange(r)}
                      className={`px-3 py-1 rounded-lg transition-all ${
                        timeRange === r
                          ? 'bg-[#00A8FF] text-black font-bold shadow-[0_0_12px_rgba(0,168,255,0.4)]'
                          : 'hover:text-white'
                      }`}
                    >
                      {r}
                    </button>
                  ))}
                </div>
              </div>

              {/* Bar Chart */}
              <div className="h-64 flex items-end justify-between pt-4 pb-2 px-2 border-b border-[#0A1A2E] relative">
                
                {/* Y-axis labels */}
                <div className="absolute left-0 top-0 bottom-6 flex flex-col justify-between text-[11px] font-mono text-slate-500 pointer-events-none">
                  <span>₹1.8</span>
                  <span>₹1.35</span>
                  <span>₹0.9</span>
                  <span>₹0.45</span>
                  <span>₹0</span>
                </div>

                {/* Bars */}
                <div className="w-full ml-12 h-full flex items-end justify-around gap-2">
                  {[
                    { day: 'Mon', val: 0.02 },
                    { day: 'Tue', val: 0.02 },
                    { day: 'Wed', val: 0.02 },
                    { day: 'Thu', val: 0.95, highlight: true, amount: '₹1.71' },
                    { day: 'Fri', val: 0.02 },
                    { day: 'Sat', val: 0.02 },
                    { day: 'Sun', val: 0.02 },
                  ].map((item, idx) => (
                    <div
                      key={item.day}
                      className="flex-1 flex flex-col items-center h-full justify-end group cursor-pointer relative"
                      onMouseEnter={() => setHoveredBar(idx)}
                      onMouseLeave={() => setHoveredBar(null)}
                    >
                      {/* Tooltip */}
                      {hoveredBar === idx && (
                        <div className="absolute -top-9 bg-[#00F0FF] text-black text-[10px] font-bold px-2 py-1 rounded shadow-lg whitespace-nowrap z-20 pointer-events-none">
                          {item.amount || '₹0.00'}
                        </div>
                      )}

                      {/* Bar */}
                      <div
                        className={`w-full max-w-[48px] rounded-t-lg transition-all duration-300 ${
                          item.highlight
                            ? 'bg-gradient-to-t from-[#00A8FF] to-[#00F0FF] shadow-[0_0_15px_rgba(0,240,255,0.4)]'
                            : 'bg-[#08172D] hover:bg-[#0E284A]'
                        }`}
                        style={{ height: `${item.val * 100}%` }}
                      />

                      {/* Day Label */}
                      <span className="text-xs font-mono text-slate-400 mt-3">
                        {item.day}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Charger Network Donut (Right Card) */}
            <div className="lg:col-span-5 bg-[#040C1A] rounded-2xl p-6 border border-[#0E2644] flex flex-col justify-between">
              <div>
                <h4 className="text-base font-bold text-white tracking-tight">Charger Network Status</h4>
                <p className="text-xs text-slate-400 font-mono">Live multi-depot distribution</p>
              </div>

              {/* Donut Chart Visual */}
              <div className="my-6 flex items-center justify-center relative">
                <svg className="w-52 h-52 transform -rotate-90" viewBox="0 0 100 100">
                  {/* Background Track */}
                  <circle
                    cx="50"
                    cy="50"
                    r="38"
                    stroke="#071324"
                    strokeWidth="15"
                    fill="transparent"
                  />
                  {/* Segment: Available (4 of 7 -> 57%) - Electric Cyan #00F0FF */}
                  <circle
                    cx="50"
                    cy="50"
                    r="38"
                    stroke="#00F0FF"
                    strokeWidth="15"
                    strokeDasharray="136 238"
                    strokeDashoffset="0"
                    fill="transparent"
                    className="transition-all duration-500 hover:stroke-[#38BDF8] cursor-pointer drop-shadow-[0_0_10px_rgba(0,240,255,0.4)]"
                  />
                  {/* Segment: Offline (2 of 7 -> 28%) - Slate Blue #334155 */}
                  <circle
                    cx="50"
                    cy="50"
                    r="38"
                    stroke="#334155"
                    strokeWidth="15"
                    strokeDasharray="68 238"
                    strokeDashoffset="-136"
                    fill="transparent"
                    className="transition-all duration-500 cursor-pointer"
                  />
                  {/* Segment: Faulted (1 of 7 -> 14%) - Rose/Red #F43F5E */}
                  <circle
                    cx="50"
                    cy="50"
                    r="38"
                    stroke="#F43F5E"
                    strokeWidth="15"
                    strokeDasharray="34 238"
                    strokeDashoffset="-204"
                    fill="transparent"
                    className="transition-all duration-500 cursor-pointer drop-shadow-[0_0_10px_rgba(244,63,94,0.4)]"
                  />
                </svg>

                {/* Center Badge */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
                  <span className="text-4xl font-extrabold text-white font-mono">7</span>
                  <span className="text-xs text-slate-400 font-mono uppercase">Total</span>
                </div>
              </div>

              {/* Legend */}
              <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs font-medium text-slate-300 pt-3 border-t border-[#0A1A2E]">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#00F0FF] shadow-[0_0_6px_#00F0FF]" />
                  <span>Available 4</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#00A8FF]" />
                  <span>Occupied 0</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#F43F5E]" />
                  <span>Faulted 1</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#334155]" />
                  <span>Offline 2</span>
                </div>
              </div>
            </div>

          </div>

          {/* Sub-second WebSocket Telemetry Log (Enterprise feature) */}
          <div className="mt-6 pt-4 border-t border-[#0A1D36] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono text-slate-400">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-[#00F0FF]" />
              <span className="text-white font-semibold">Real-time Stream:</span>
              <span>Station #04 - Gachibowli Hub: Heartbeat ACK (14ms)</span>
            </div>
            <div className="flex items-center gap-4 text-[11px]">
              <span className="text-[#00F0FF]">● OCPP 2.0.1 Secure WebSocket</span>
              <span className="text-slate-500">TLS 1.3 Encryption</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
