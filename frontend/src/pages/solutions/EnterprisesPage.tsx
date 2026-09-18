import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, ArrowRight, CheckCircle2, AlertTriangle, Layers, ShieldCheck, DollarSign, LayoutDashboard } from 'lucide-react';

interface SolutionPageProps {
  onRequestDemo: () => void;
}

export const EnterprisesPage: React.FC<SolutionPageProps> = ({ onRequestDemo }) => {
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
                <span className="text-emerald-400">Solutions</span>
                <span>/</span>
                <span className="text-white font-semibold">Enterprises</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#061426] border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                  <Building2 className="w-4 h-4" />
                </div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
                  For Enterprises & Real Estate
                </h1>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Manage workplace and destination charging as one unified asset class across corporate parks, commercial facilities, and retail properties.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                onClick={onRequestDemo}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#00A09A] to-[#33C4BF] text-black font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(0,160,154,0.3)] flex items-center gap-2"
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
            <h3 className="text-base font-bold text-white">Vendor Spread & Afterthoughts</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Workplace and destination charging is often managed as an afterthought, spread across whichever vendor installed each site's hardware.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#061426] border border-[#00A09A]/40 space-y-2 shadow-[0_0_20px_rgba(0,160,154,0.1)]">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5" /> Trevia Solution
            </div>
            <h3 className="text-base font-bold text-white">Unified Asset Portfolio</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Trevia CMS provides a single operational view across all of an enterprise's charging assets, regardless of which vendor installed them.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#030A14] border border-emerald-900/50 space-y-2">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" /> Business Outcome
            </div>
            <h3 className="text-base font-bold text-white">Streamlined Facilities Ops</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Charging becomes a manageable, visible part of facilities operations rather than a collection of disconnected vendor relationships.
            </p>
          </div>
        </div>
      </section>

      {/* Enterprise Capabilities */}
      <section className="max-w-7xl mx-auto px-6 space-y-4">
        <div>
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-400 mb-1">
            Enterprise Features
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            Workplace & Commercial Control
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="p-5 rounded-xl bg-[#030A14] border border-[#0E2C52] space-y-2">
            <LayoutDashboard className="w-5 h-5 text-emerald-400" />
            <h4 className="text-sm font-bold text-white">Multi-Property Dashboard</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Oversee charging units across offices, commercial parks, and retail malls from one centralized corporate view.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#030A14] border border-[#0E2C52] space-y-2">
            <DollarSign className="w-5 h-5 text-[#00A09A]" />
            <h4 className="text-sm font-bold text-white">Employee vs Guest Tariffs</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Set differentiated tariffs for staff, VIPs, and public visitors with automated billing and authentication.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#030A14] border border-[#0E2C52] space-y-2">
            <ShieldCheck className="w-5 h-5 text-[#00A09A]" />
            <h4 className="text-sm font-bold text-white">Zero Vendor Lock-in</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Expand your facilities with bids from any hardware manufacturer without replacing your software operating layer.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="rounded-2xl bg-[#061426] border border-emerald-500/40 p-8 text-center space-y-4">
          <h3 className="text-xl font-bold text-white">
            Modernize your enterprise charging infrastructure
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto">
            Unify multiple campus and facility charging assets under Trevia CMS.
          </p>
          <div className="pt-2">
            <button
              onClick={onRequestDemo}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#00A09A] to-[#33C4BF] text-black font-bold text-xs uppercase tracking-wider"
            >
              Discuss Infrastructure
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
