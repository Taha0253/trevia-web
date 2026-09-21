import React from 'react';
import { Link } from 'react-router-dom';
import { Truck, ArrowRight, CheckCircle2, AlertTriangle, Layers, MapPin, Activity, Zap, RefreshCw, Code2 } from 'lucide-react';
import { CmsDashboardMock } from '../../components/CmsDashboardMock';

interface SolutionPageProps {
  onRequestDemo: () => void;
}

const CAPABILITIES = [
  { icon: MapPin, title: 'Depot Charging Visibility', desc: 'Monitor charger availability and charging activity across depot sites.' },
  { icon: Activity, title: 'Real-Time Sessions', desc: 'Track active and completed charging sessions.' },
  { icon: Zap, title: 'Energy & Usage Data', desc: 'View energy consumption and charging duration across connected infrastructure.' },
  { icon: AlertTriangle, title: 'Charger Status', desc: 'Identify unavailable or disconnected chargers quickly.' },
  { icon: RefreshCw, title: 'Remote Operations', desc: 'Execute supported charger commands without visiting the site.' },
  { icon: Code2, title: 'APIs & Integrations', desc: 'Connect charging data with existing fleet or enterprise systems.' },
];

export const FleetsPage: React.FC<SolutionPageProps> = ({ onRequestDemo }) => {
  return (
    <div className="space-y-16 pb-24">

      {/* Header */}
      <section className="border-b border-[#0E2C52]/80 bg-[#030A14] py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
            <div className="lg:col-span-3 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
                <span>/</span>
                <span className="text-[#00A09A]">Solutions</span>
                <span>/</span>
                <span className="text-white font-semibold">Fleets</span>
              </div>

              <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#00A09A]">
                Solutions — For Commercial Fleets
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#061426] border border-[#00A09A]/40 flex items-center justify-center text-[#00A09A]">
                  <Truck className="w-4 h-4" />
                </div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
                  Make Fleet Charging Visible and Manageable
                </h1>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Connect fleet charging infrastructure with real-time visibility into charger status, charging sessions, energy usage and depot operations.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={onRequestDemo}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#00A09A] to-[#33C4BF] text-black font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(0,160,154,0.3)] flex items-center gap-2"
                >
                  <span>Talk to Sales</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-2">
              <CmsDashboardMock compact />
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
            <h3 className="text-base font-bold text-white">Limited Charging Visibility</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Fleet operators need reliable visibility into charger availability, charging sessions and energy usage across their depots.
            </p>
          </div>

          <div className="p-6 sm:p-7 rounded-2xl bg-[#061426] border-2 border-[#00A09A]/50 space-y-2 shadow-[0_0_25px_rgba(0,160,154,0.15)] md:scale-105">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#00A09A] flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5" /> Trevia Solution
            </div>
            <h3 className="text-base font-bold text-white">Connected Fleet Charging</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Trevia CMS provides centralized visibility into the charging infrastructure fleets depend on, across supported chargers and sites.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#030A14] border border-emerald-900/50 space-y-2">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" /> Business Outcome
            </div>
            <h3 className="text-base font-bold text-white">Better Charging Operations</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Use charging and session data to understand depot activity and improve day-to-day fleet charging operations.
            </p>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="max-w-7xl mx-auto px-6 space-y-8">
        <div>
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#00A09A] mb-1">
            Fleet Tools
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            Fleet Charging Operations
          </h2>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-xs font-mono text-slate-400">
          <span className="px-3 py-1.5 rounded-lg bg-[#061426] border border-[#0E2C52]">Fleet</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#00A09A] rotate-90 sm:rotate-0" />
          <span className="px-3 py-1.5 rounded-lg bg-[#061426] border border-[#0E2C52]">Depot</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#00A09A] rotate-90 sm:rotate-0" />
          <span className="px-3 py-1.5 rounded-lg bg-[#061426] border border-[#0E2C52]">Chargers</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#00A09A] rotate-90 sm:rotate-0" />
          <span className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-[#00A09A] to-[#33C4BF] text-black font-bold">Trevia CMS</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#00A09A] rotate-90 sm:rotate-0" />
          <span className="px-3 py-1.5 rounded-lg bg-[#061426] border border-[#0E2C52]">Data</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {CAPABILITIES.map((cap) => (
              <div key={cap.title} className="p-4 rounded-xl bg-[#030A14] border border-[#0E2C52] space-y-2">
                <div className="w-8 h-8 rounded-lg bg-[#061426] border border-[#0E2C52] flex items-center justify-center text-[#00A09A]">
                  <cap.icon className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-white">{cap.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>
          <div className="lg:col-span-3">
            <CmsDashboardMock />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="rounded-2xl bg-[#061426] border border-[#00A09A]/40 p-8 text-center space-y-4">
          <h3 className="text-xl font-bold text-white">
            Connect Your Fleet Charging Infrastructure
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto">
            Talk to our team about your fleet charging requirements.
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
