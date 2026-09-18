import React from 'react';
import { ArrowRight, Server, Zap, Cpu, Layers, ShieldCheck, Database } from 'lucide-react';

export const ArchitectureFlow: React.FC = () => {
  return (
    <div className="w-full bg-[#030A14]/90 border border-[#0E2C52] rounded-2xl p-6 sm:p-8 backdrop-blur-xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#00A09A]/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 relative z-10">
        
        {/* Step 1: Multi-Vendor Hardware */}
        <div className="flex-1 w-full p-4 rounded-xl bg-[#061426] border border-[#0E2C52]/80 group hover:border-[#00A09A]/50 transition-all">
          <div className="flex items-center gap-2 mb-2 text-[#00A09A]">
            <Zap className="w-4 h-4" />
            <span className="text-[11px] font-mono uppercase tracking-wider font-semibold">Physical Layer</span>
          </div>
          <h4 className="text-sm font-bold text-white mb-1">Multi-Vendor Hardware</h4>
          <p className="text-xs text-slate-400">AC/DC Fast Chargers, Depot units, & Destination hardware</p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            <span className="text-[10px] px-2 py-0.5 rounded bg-[#0A2240] text-slate-300 font-mono">AC Type 2</span>
            <span className="text-[10px] px-2 py-0.5 rounded bg-[#0A2240] text-slate-300 font-mono">CCS2 DC</span>
            <span className="text-[10px] px-2 py-0.5 rounded bg-[#0A2240] text-slate-300 font-mono">Bharat AC001</span>
          </div>
        </div>

        {/* Protocol arrow 1 */}
        <div className="flex md:flex-col items-center justify-center gap-1 text-[#00A09A] py-2 md:py-0">
          <span className="text-[10px] font-mono font-bold tracking-tight bg-[#0A2240] px-2 py-0.5 rounded border border-[#00A09A]/30">OCPP 1.6J / WSS</span>
          <ArrowRight className="w-4 h-4 rotate-90 md:rotate-0 hidden md:block" />
        </div>

        {/* Step 2: Operating Layer (Trevia CMS) */}
        <div className="flex-[1.2] w-full p-5 rounded-xl bg-gradient-to-b from-[#0A2240] to-[#061426] border-2 border-[#00A09A]/60 shadow-[0_0_30px_rgba(0,160,154,0.15)] relative">
          <div className="absolute -top-2.5 right-4 bg-gradient-to-r from-[#00A09A] to-[#33C4BF] text-black text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full">
            Operating Layer
          </div>
          <div className="flex items-center gap-2 mb-2 text-[#00A09A]">
            <Layers className="w-4 h-4" />
            <span className="text-[11px] font-mono uppercase tracking-wider font-semibold">Trevia CMS Core</span>
          </div>
          <h4 className="text-sm font-bold text-white mb-1">Centralised Orchestration</h4>
          <p className="text-xs text-slate-300 mb-3">Persistent WebSockets, real-time telemetry, session state machine, tariffs & fault engine.</p>
          <div className="grid grid-cols-2 gap-1.5 text-[10px] font-mono text-slate-300">
            <div className="bg-[#030A14] p-1.5 rounded border border-[#0E2C52]/60 flex items-center gap-1">
              <Cpu className="w-3 h-3 text-[#00A09A]" /> Telemetry Ingestion
            </div>
            <div className="bg-[#030A14] p-1.5 rounded border border-[#0E2C52]/60 flex items-center gap-1">
              <Server className="w-3 h-3 text-[#00A09A]" /> Remote Ops & Reset
            </div>
            <div className="bg-[#030A14] p-1.5 rounded border border-[#0E2C52]/60 flex items-center gap-1">
              <Database className="w-3 h-3 text-[#00A09A]" /> Tariff & Billing
            </div>
            <div className="bg-[#030A14] p-1.5 rounded border border-[#0E2C52]/60 flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-emerald-400" /> Fault Isolation
            </div>
          </div>
        </div>

        {/* Protocol arrow 2 */}
        <div className="flex md:flex-col items-center justify-center gap-1 text-[#00A09A] py-2 md:py-0">
          <span className="text-[10px] font-mono font-bold tracking-tight bg-[#0A2240] px-2 py-0.5 rounded border border-[#00A09A]/30">REST / Webhooks</span>
          <ArrowRight className="w-4 h-4 rotate-90 md:rotate-0 hidden md:block" />
        </div>

        {/* Step 3: Consumers & Applications */}
        <div className="flex-1 w-full p-4 rounded-xl bg-[#061426] border border-[#0E2C52]/80 group hover:border-[#00A09A]/50 transition-all">
          <div className="flex items-center gap-2 mb-2 text-[#00A09A]">
            <Server className="w-4 h-4" />
            <span className="text-[11px] font-mono uppercase tracking-wider font-semibold">Consumption Layer</span>
          </div>
          <h4 className="text-sm font-bold text-white mb-1">Operational Endpoints</h4>
          <p className="text-xs text-slate-400">Applications consuming live telemetry and operations</p>
          <div className="mt-3 space-y-1.5 text-xs text-slate-300">
            <div className="flex items-center justify-between px-2 py-1 bg-[#0A2240]/60 rounded text-[11px]">
              <span>CPO Operations Suite</span>
              <span className="text-[#00A09A] font-mono">Trevia CMS</span>
            </div>
            <div className="flex items-center justify-between px-2 py-1 bg-[#0A2240]/60 rounded text-[11px]">
              <span>Fleet & Enterprise ERP</span>
              <span className="text-slate-400 font-mono">Open APIs</span>
            </div>
            <div className="flex items-center justify-between px-2 py-1 bg-[#0A2240]/60 rounded text-[11px]">
              <span>Driver Discovery App</span>
              <span className="text-[#00A09A] font-mono">Trevia Drive</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
