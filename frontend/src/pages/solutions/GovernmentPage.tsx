import React from 'react';
import { Landmark, ArrowRight, CheckCircle2, AlertTriangle, Layers, MapPin, BarChart3, Shield } from 'lucide-react';

interface SolutionPageProps {
  onRequestDemo: () => void;
}

export const GovernmentPage: React.FC<SolutionPageProps> = ({ onRequestDemo }) => {
  return (
    <div className="space-y-24 md:space-y-36 pb-24">
      
      {/* Hero */}
      <section className="relative pt-12 pb-16 md:pt-24 md:pb-24 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-indigo-500/10 rounded-full blur-[200px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#061426] border border-[#0E2C52] text-indigo-400 text-xs font-mono font-medium tracking-wider uppercase">
              <Landmark className="w-3.5 h-3.5 text-indigo-400" />
              <span>Solutions — For Government & Public Bodies</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-light text-white tracking-tight leading-[1.08]">
              A coordinated, data-driven view of{' '}
              <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-[#00F0FF] to-white">
                public charging infrastructure.
              </span>
            </h1>

            <p className="text-lg text-slate-300 font-normal leading-relaxed">
              Equip municipal bodies, transit authorities, and state infrastructure agencies with macro-level visibility into public EV charging availability and regional deployment health.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onRequestDemo}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-[#00A8FF] to-[#00D2C4] text-black font-bold text-sm tracking-wide transition-all shadow-[0_0_30px_rgba(0,168,255,0.4)] flex items-center gap-2"
              >
                <span>Discuss Infrastructure</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* Problem / Solution / Business Outcome Framework */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="p-8 rounded-3xl bg-[#0F0808] border border-rose-900/40 space-y-4">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-rose-400 flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4" /> Problem
            </div>
            <h3 className="text-xl font-bold text-white">Uncoordinated Deployments</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Public charging infrastructure is typically deployed by multiple operators with no central visibility, making coordinated planning difficult.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[#041224] border border-[#00A8FF]/40 space-y-4 shadow-[0_0_20px_rgba(0,168,255,0.1)]">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-400 flex items-center gap-1.5">
              <Layers className="w-4 h-4" /> Trevia Solution
            </div>
            <h3 className="text-xl font-bold text-white">Coordinated Oversight Layer</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Trevia CMS supports a coordinated, data-driven view of public charging infrastructure spanning multiple operators — supporting planning rather than operating any single network.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[#041A14] border border-emerald-900/50 space-y-4">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" /> Business Outcome
            </div>
            <h3 className="text-xl font-bold text-white">Evidence-Based Decisions</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Public-sector stakeholders can make infrastructure decisions based on actual network data rather than operator-by-operator reporting.
            </p>
          </div>

        </div>
      </section>

      {/* Capabilities */}
      <section className="max-w-7xl mx-auto px-6 space-y-8">
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-indigo-400 mb-2">
            Public Planning Features
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4">
            Regional EV Charging Visibility
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-[#030A14] border border-[#0E2C52] space-y-3">
            <MapPin className="w-6 h-6 text-indigo-400" />
            <h4 className="text-base font-bold text-white">Geographical Density Mapping</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Identify underserved corridors and high-demand transit nodes with cross-operator geospatial heatmaps.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#030A14] border border-[#0E2C52] space-y-3">
            <BarChart3 className="w-6 h-6 text-[#00F0FF]" />
            <h4 className="text-base font-bold text-white">Utilization & Uptime Reporting</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Track macro network uptime and charger availability metrics across concession zones.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#030A14] border border-[#0E2C52] space-y-3">
            <Shield className="w-6 h-6 text-emerald-400" />
            <h4 className="text-base font-bold text-white">Open Standards Alignment</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Built natively on open OCPP standards to ensure public funds support interoperable infrastructure without vendor lock-in.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="rounded-3xl bg-[#061426] border border-indigo-500/40 p-8 sm:p-12 text-center space-y-6">
          <h2 className="text-2xl sm:text-4xl font-bold text-white">
            Plan coordinated public EV infrastructure
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
            Discuss how Trevia's open software layer supports regional infrastructure planning.
          </p>
          <div className="flex justify-center gap-4 pt-2">
            <button
              onClick={onRequestDemo}
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#00A8FF] to-[#00D2C4] text-black font-bold text-xs uppercase tracking-wider"
            >
              Discuss Infrastructure
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
