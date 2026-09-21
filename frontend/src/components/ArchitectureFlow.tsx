import React from 'react';
import { ArrowRight, Server, Zap, Radio, Activity, RefreshCw, Layers, Database, Smartphone, Building2, Webhook } from 'lucide-react';

export const ArchitectureFlow: React.FC = () => {
  return (
    <div className="w-full bg-surface/90 border border-edge rounded-2xl p-6 sm:p-8 backdrop-blur-xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#00A09A]/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 relative z-10">
        
        {/* Step 1: Charging Infrastructure */}
        <div className="flex-1 w-full p-4 rounded-xl bg-surface2 border border-edge/80 group hover:border-[#00A09A]/50 transition-all">
          <div className="flex items-center gap-2 mb-2 text-[#00A09A]">
            <Zap className="w-4 h-4" />
            <span className="text-[11px] font-mono uppercase tracking-wider font-semibold">Charging Infrastructure</span>
          </div>
          <h4 className="text-sm font-bold text-ink mb-1">Multi-Vendor Chargers</h4>
          <p className="text-xs text-ink3">AC, DC Fast & Depot Chargers</p>
        </div>

        {/* Protocol arrow 1 */}
        <div className="flex md:flex-col items-center justify-center gap-1 text-[#00A09A] py-2 md:py-0">
          <span className="text-[10px] font-mono font-bold tracking-tight bg-surface2 px-2 py-0.5 rounded border border-[#00A09A]/30">OCPP 1.6J / WSS</span>
          <ArrowRight className="w-4 h-4 rotate-90 md:rotate-0 hidden md:block" />
        </div>

        {/* Step 2: Operating Layer (Trevia CMS) */}
        <div className="flex-[1.2] w-full p-5 rounded-xl bg-gradient-to-b from-surface2 to-surface border-2 border-[#00A09A]/60 shadow-[0_0_30px_rgba(0,160,154,0.15)] relative">
          <div className="absolute -top-2.5 right-4 bg-gradient-to-r from-[#00A09A] to-[#33C4BF] text-black text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full">
            Operating Layer
          </div>
          <div className="flex items-center gap-2 mb-2 text-[#00A09A]">
            <Layers className="w-4 h-4" />
            <span className="text-[11px] font-mono uppercase tracking-wider font-semibold">Trevia CMS</span>
          </div>
          <h4 className="text-sm font-bold text-ink mb-1">Unified Charging Operations</h4>
          <p className="text-xs text-ink2 mb-3">Connects, monitors and operates supported charging infrastructure.</p>
          <div className="grid grid-cols-2 gap-1.5 text-[10px] font-mono text-ink2">
            <div className="bg-surface p-1.5 rounded border border-edge/60 flex items-center gap-1">
              <Radio className="w-3 h-3 text-[#00A09A]" /> OCPP Connectivity
            </div>
            <div className="bg-surface p-1.5 rounded border border-edge/60 flex items-center gap-1">
              <Activity className="w-3 h-3 text-[#00A09A]" /> Real-Time Monitoring
            </div>
            <div className="bg-surface p-1.5 rounded border border-edge/60 flex items-center gap-1">
              <RefreshCw className="w-3 h-3 text-[#00A09A]" /> Remote Operations
            </div>
            <div className="bg-surface p-1.5 rounded border border-edge/60 flex items-center gap-1">
              <Database className="w-3 h-3 text-[#00A09A]" /> Sessions & Transactions
            </div>
          </div>
        </div>

        {/* Protocol arrow 2 */}
        <div className="flex md:flex-col items-center justify-center gap-1 text-[#00A09A] py-2 md:py-0">
          <span className="text-[10px] font-mono font-bold tracking-tight bg-surface2 px-2 py-0.5 rounded border border-[#00A09A]/30">APIs / Webhooks</span>
          <ArrowRight className="w-4 h-4 rotate-90 md:rotate-0 hidden md:block" />
        </div>

        {/* Step 3: Application & Integration Layer */}
        <div className="flex-1 w-full p-4 rounded-xl bg-surface2 border border-edge/80 group hover:border-[#00A09A]/50 transition-all">
          <div className="flex items-center gap-2 mb-2 text-[#00A09A]">
            <Server className="w-4 h-4" />
            <span className="text-[11px] font-mono uppercase tracking-wider font-semibold">Application & Integration Layer</span>
          </div>
          <h4 className="text-sm font-bold text-ink mb-1">Applications & Integrations</h4>
          <p className="text-xs text-ink3">Products and systems consuming Trevia CMS data</p>
          <div className="mt-3 space-y-1.5 text-xs text-ink2">
            <div className="flex items-center gap-2 px-2 py-1.5 bg-surface2/60 rounded text-[11px]">
              <Smartphone className="w-3.5 h-3.5 text-[#00A09A]" />
              <span>Trevia EV</span>
            </div>
            <div className="flex items-center gap-2 px-2 py-1.5 bg-surface2/60 rounded text-[11px]">
              <Building2 className="w-3.5 h-3.5 text-[#00A09A]" />
              <span>Fleet & Enterprise Systems</span>
            </div>
            <div className="flex items-center gap-2 px-2 py-1.5 bg-surface2/60 rounded text-[11px]">
              <Webhook className="w-3.5 h-3.5 text-[#00A09A]" />
              <span>APIs & Webhooks</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
