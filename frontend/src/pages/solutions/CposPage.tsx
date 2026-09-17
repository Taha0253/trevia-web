import React from 'react';
import { Link } from 'react-router-dom';
import { Radio, ArrowRight, CheckCircle2, AlertTriangle, Layers, Activity, Sliders, ShieldCheck } from 'lucide-react';

interface SolutionPageProps {
  onRequestDemo: () => void;
}

export const CposPage: React.FC<SolutionPageProps> = ({ onRequestDemo }) => {
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
                <span className="text-[#00F0FF]">Solutions</span>
                <span>/</span>
                <span className="text-white font-semibold">CPOs & Operators</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#061426] border border-[#00A8FF]/40 flex items-center justify-center text-[#00F0FF]">
                  <Radio className="w-4 h-4" />
                </div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
                  For Charge Point Operators (CPOs)
                </h1>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Centralised control across chargers, sites, and hardware vendors. Trevia CMS eliminates multi-dashboard chaos with one unified operating layer.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                onClick={onRequestDemo}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#00A8FF] to-[#00D2C4] text-black font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(0,168,255,0.3)] flex items-center gap-2"
              >
                <span>Request a Demo</span>
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
            <h3 className="text-base font-bold text-white">Operational Fragmentation</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Operational fragmentation across sites, hardware vendors, and network environments makes charging infrastructure harder to run as scale increases.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#061426] border border-[#00A8FF]/40 space-y-2 shadow-[0_0_20px_rgba(0,168,255,0.1)]">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#00F0FF] flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5" /> Trevia Solution
            </div>
            <h3 className="text-base font-bold text-white">One Centralised Operating Layer</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Trevia CMS gives operators centralised, OCPP-based monitoring and control across every connected charger — one operating layer instead of one dashboard per vendor.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#030A14] border border-emerald-900/50 space-y-2">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" /> Business Outcome
            </div>
            <h3 className="text-base font-bold text-white">Scale Without Overhead</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Operators add sites and hardware without adding operational complexity, and act on faults and utilisation data instead of discovering issues after the fact.
            </p>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="max-w-7xl mx-auto px-6 space-y-4">
        <div>
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#00F0FF] mb-1">
            Operator Features
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            Core Operational Tools for CPOs
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-xl bg-[#030A14] border border-[#0E2C52] space-y-2">
            <Activity className="w-5 h-5 text-[#00F0FF]" />
            <h4 className="text-sm font-bold text-white">Real-Time Telemetry</h4>
            <p className="text-xs text-slate-400">Live voltage, current, power draw, and connector states from every connected charger.</p>
          </div>
          <div className="p-5 rounded-xl bg-[#030A14] border border-[#0E2C52] space-y-2">
            <Sliders className="w-5 h-5 text-[#00A8FF]" />
            <h4 className="text-sm font-bold text-white">Remote Commands</h4>
            <p className="text-xs text-slate-400">Reboot hardware, unlock connectors, and trigger configuration changes without field visits.</p>
          </div>
          <div className="p-5 rounded-xl bg-[#030A14] border border-[#0E2C52] space-y-2">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            <h4 className="text-sm font-bold text-white">Fault Visibility</h4>
            <p className="text-xs text-slate-400">Instant alarms on hardware errors, ground faults, and unresponsive chargers before users complain.</p>
          </div>
          <div className="p-5 rounded-xl bg-[#030A14] border border-[#0E2C52] space-y-2">
            <Layers className="w-5 h-5 text-amber-400" />
            <h4 className="text-sm font-bold text-white">Tariff Management</h4>
            <p className="text-xs text-slate-400">Configure flat, time-of-day, or site-specific tariffs centrally with automated session reconciliation.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="rounded-2xl bg-[#061426] border border-[#00A8FF]/40 p-8 text-center space-y-4">
          <h3 className="text-xl font-bold text-white">
            Transform your CPO operations
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto">
            See how Trevia CMS replaces vendor-locked dashboards with one robust operating layer.
          </p>
          <div className="pt-2">
            <button
              onClick={onRequestDemo}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#00A8FF] to-[#00D2C4] text-black font-bold text-xs uppercase tracking-wider"
            >
              Request a Demo
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
