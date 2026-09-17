import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, ArrowRight, CheckCircle2, AlertTriangle, Layers, Activity, Gauge, Server } from 'lucide-react';

interface SolutionPageProps {
  onRequestDemo: () => void;
}

export const UtilitiesPage: React.FC<SolutionPageProps> = ({ onRequestDemo }) => {
  return (
    <div className="space-y-16 pb-24">
      
      {/* Header */}
      <section className="border-b border-[#0E2C52]/80 bg-[#030A14] py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-3 max-w-3xl">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
                <span>/</span>
                <span className="text-amber-400">Solutions</span>
                <span>/</span>
                <span className="text-white font-semibold">Energy & Utilities</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#061426] border border-amber-500/40 flex items-center justify-center text-amber-400">
                  <Zap className="w-4 h-4" />
                </div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
                  For Energy Providers & Utilities
                </h1>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Network-level visibility and interoperable telemetry designed to manage public charging infrastructure with the same operational rigor as traditional grid assets.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                onClick={onRequestDemo}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#00A8FF] to-[#00D2C4] text-black font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(0,168,255,0.3)] flex items-center gap-2"
              >
                <span>Discuss Infrastructure</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem / Solution / Outcome */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="p-6 rounded-2xl bg-[#030A14] border border-rose-900/40 space-y-2">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-rose-400 flex items-center gap-1.5">
              <AlertTriangle className="w-3.5 h-3.5" /> Problem
            </div>
            <h3 className="text-base font-bold text-white">Scaling Beyond Individual Sites</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              As utilities and energy companies expand into EV charging, they need infrastructure-level visibility and data that scales with public charging networks, not just individual sites.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#061426] border border-[#00A8FF]/40 space-y-2 shadow-[0_0_20px_rgba(0,168,255,0.1)]">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5" /> Trevia Solution
            </div>
            <h3 className="text-base font-bold text-white">Interoperable Grid-Scale Data</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Trevia CMS offers network-level visibility, interoperable data across hardware vendors, and a platform designed to scale with public charging deployments.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#030A14] border border-emerald-900/50 space-y-2">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" /> Business Outcome
            </div>
            <h3 className="text-base font-bold text-white">Operational Rigor</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Utilities can manage charging infrastructure with the same operational rigor as other grid-connected assets, using comparable data across the network.
            </p>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="max-w-7xl mx-auto px-6 space-y-4">
        <div>
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-amber-400 mb-1">
            Grid & Telemetry Features
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            Infrastructure-Grade Telemetry
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="p-5 rounded-xl bg-[#030A14] border border-[#0E2C52] space-y-2">
            <Gauge className="w-5 h-5 text-amber-400" />
            <h4 className="text-sm font-bold text-white">Aggregated Load Visibility</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Monitor active kW power demand and cumulative MWh load profiles across distribution feeders in real time.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#030A14] border border-[#0E2C52] space-y-2">
            <Server className="w-5 h-5 text-[#00F0FF]" />
            <h4 className="text-sm font-bold text-white">Standardised Data Pipelines</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Normalize telemetry feeds across disparate hardware models into consistent time-series database schemas.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#030A14] border border-[#0E2C52] space-y-2">
            <Activity className="w-5 h-5 text-[#00A8FF]" />
            <h4 className="text-sm font-bold text-white">High-Availability Architecture</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Resilient WebSocket ingestion built to handle continuous telemetry across distributed geographical networks.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="rounded-2xl bg-[#061426] border border-amber-500/40 p-8 text-center space-y-4">
          <h3 className="text-xl font-bold text-white">
            Discuss utility-scale charging infrastructure
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto">
            Connect with our engineering team to plan and scale your network-level deployments.
          </p>
          <div className="pt-2">
            <button
              onClick={onRequestDemo}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#00A8FF] to-[#00D2C4] text-black font-bold text-xs uppercase tracking-wider"
            >
              Discuss Infrastructure
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
