import React from 'react';
import { Link } from 'react-router-dom';
import { Truck, ArrowRight, CheckCircle2, AlertTriangle, Layers, Clock, Zap, BarChart2 } from 'lucide-react';

interface SolutionPageProps {
  onRequestDemo: () => void;
}

export const FleetsPage: React.FC<SolutionPageProps> = ({ onRequestDemo }) => {
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
                <span className="text-[#00A09A]">Solutions</span>
                <span>/</span>
                <span className="text-white font-semibold">Fleets</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#061426] border border-[#00A09A]/40 flex items-center justify-center text-[#00A09A]">
                  <Truck className="w-4 h-4" />
                </div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
                  For Commercial & Logistics Fleets
                </h1>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Charging visibility and utilisation data tied directly to commercial fleet operations, depot turnaround times, and route planning.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                onClick={onRequestDemo}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#00A09A] to-[#33C4BF] text-black font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(0,160,154,0.3)] flex items-center gap-2"
              >
                <span>Talk to Sales</span>
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
            <h3 className="text-base font-bold text-white">Lack of Charging Visibility</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Fleet operators need to plan around charging availability, cost, and utilisation, but often lack visibility into how their vehicles are actually charging.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#061426] border border-[#00A09A]/40 space-y-2 shadow-[0_0_20px_rgba(0,160,154,0.1)]">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#00A09A] flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5" /> Trevia Solution
            </div>
            <h3 className="text-base font-bold text-white">Telemetry Tied to Fleet Ops</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Trevia CMS surfaces charging session, energy, and utilisation data tied directly to fleet operations, alongside centralised visibility into the chargers fleets depend on.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#030A14] border border-emerald-900/50 space-y-2">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" /> Business Outcome
            </div>
            <h3 className="text-base font-bold text-white">Data-Driven Fleet Planning</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Better data supports planning for routes, costs, and charger deployment, rather than managing fleet charging on assumptions.
            </p>
          </div>
        </div>
      </section>

      {/* Fleet Capabilities */}
      <section className="max-w-7xl mx-auto px-6 space-y-4">
        <div>
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#00A09A] mb-1">
            Fleet Tools
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            High-Turnaround Depot Operations
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="p-5 rounded-xl bg-[#030A14] border border-[#0E2C52] space-y-2">
            <Clock className="w-5 h-5 text-[#00A09A]" />
            <h4 className="text-sm font-bold text-white">Depot Turnaround Scheduling</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Track real-time charging status across all depot bays to ensure delivery vans and transit vehicles meet shift departure deadlines.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#030A14] border border-[#0E2C52] space-y-2">
            <Zap className="w-5 h-5 text-[#00A09A]" />
            <h4 className="text-sm font-bold text-white">Energy Cost Accounting</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Reconcile exact kWh consumption, peak tariff costs, and charging durations per vehicle identification tag or RFID fob.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#030A14] border border-[#0E2C52] space-y-2">
            <BarChart2 className="w-5 h-5 text-emerald-400" />
            <h4 className="text-sm font-bold text-white">Fleet Telematics API Export</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Export session telemetry directly to your telematics and ERP systems via Trevia's standard REST and Webhook APIs.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="rounded-2xl bg-[#061426] border border-[#00A09A]/40 p-8 text-center space-y-4">
          <h3 className="text-xl font-bold text-white">
            Optimize your fleet charging operations
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto">
            Speak with our infrastructure team to explore customized fleet charging deployments.
          </p>
          <div className="pt-2">
            <button
              onClick={onRequestDemo}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#00A09A] to-[#33C4BF] text-black font-bold text-xs uppercase tracking-wider"
            >
              Talk to Sales
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
