import React from 'react';
import { Link } from 'react-router-dom';
import { Landmark, ArrowRight, CheckCircle2, AlertTriangle, Layers, MapPin, Activity, Users, BarChart3, Radio } from 'lucide-react';

interface SolutionPageProps {
  onRequestDemo: () => void;
}

const CAPABILITIES = [
  { icon: MapPin, title: 'Geographical Charging Visibility', desc: 'View connected charging infrastructure across locations and regions.' },
  { icon: Activity, title: 'Availability & Network Activity', desc: 'Understand charger availability and charging activity across connected networks.' },
  { icon: Users, title: 'Multi-Operator Data', desc: 'Bring charging information from connected networks into a common view.' },
  { icon: BarChart3, title: 'Infrastructure Coverage', desc: 'Identify areas with limited charging infrastructure using available network data.' },
  { icon: Layers, title: 'Network Reporting', desc: 'Use charging infrastructure data to support planning and reporting.' },
  { icon: Radio, title: 'Open Integration Layer', desc: 'Connect charging data through available APIs and integrations.' },
];

const REGIONS = [
  { name: 'Hyderabad Metro', operators: 6, coverage: '82%' },
  { name: 'Bengaluru Corridor', operators: 5, coverage: '74%' },
  { name: 'NH44 Highway Belt', operators: 4, coverage: '58%' },
  { name: 'Pune Industrial Zone', operators: 3, coverage: '61%' },
];

export const GovernmentPage: React.FC<SolutionPageProps> = ({ onRequestDemo }) => {
  return (
    <div className="space-y-16 pb-24">

      {/* Header */}
      <section className="border-b border-[#0E2C52]/80 bg-[#030A14] py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-6 space-y-3 max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-indigo-400">Solutions</span>
            <span>/</span>
            <span className="text-white font-semibold">Government & Public Bodies</span>
          </div>

          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-indigo-400">
            Solutions — For Government & Public Bodies
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#061426] border border-indigo-500/40 flex items-center justify-center text-indigo-400">
              <Landmark className="w-4 h-4" />
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
              A Data-Driven View of Public EV Charging Infrastructure
            </h1>
          </div>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Bring charging infrastructure data from connected networks into a unified view to support public charging planning and deployment decisions.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={onRequestDemo}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#00A09A] to-[#33C4BF] text-black font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(0,160,154,0.3)] flex items-center gap-2"
            >
              <span>Discuss Infrastructure</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
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
            <h3 className="text-base font-bold text-white">Fragmented Public Charging Data</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Public charging infrastructure can span multiple operators, locations and hardware systems, making network-wide visibility difficult.
            </p>
          </div>

          <div className="p-6 sm:p-7 rounded-2xl bg-[#061426] border-2 border-indigo-500/50 space-y-2 shadow-[0_0_25px_rgba(99,102,241,0.12)] md:scale-105">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-400 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5" /> Trevia Solution
            </div>
            <h3 className="text-base font-bold text-white">Unified Charging Data</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Trevia can bring data from connected charging infrastructure into a unified view to support infrastructure planning and analysis.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#030A14] border border-emerald-900/50 space-y-2">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" /> Business Outcome
            </div>
            <h3 className="text-base font-bold text-white">Evidence-Based Planning</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Use network data to understand charging availability, deployment coverage and infrastructure activity.
            </p>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="max-w-7xl mx-auto px-6 space-y-8">
        <div>
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-indigo-400 mb-1">
            Public Planning Features
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            Public Charging Intelligence
          </h2>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-xs font-mono text-slate-400">
          <span className="px-3 py-1.5 rounded-lg bg-[#061426] border border-[#0E2C52]">Multiple Operators</span>
          <ArrowRight className="w-3.5 h-3.5 text-indigo-400 rotate-90 sm:rotate-0" />
          <span className="px-3 py-1.5 rounded-lg bg-[#061426] border border-[#0E2C52]">Charging Data</span>
          <ArrowRight className="w-3.5 h-3.5 text-indigo-400 rotate-90 sm:rotate-0" />
          <span className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-indigo-400 to-[#00A09A] text-black font-bold">Trevia Platform</span>
          <ArrowRight className="w-3.5 h-3.5 text-indigo-400 rotate-90 sm:rotate-0" />
          <span className="px-3 py-1.5 rounded-lg bg-[#061426] border border-[#0E2C52]">Regional View</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {CAPABILITIES.map((cap) => (
              <div key={cap.title} className="p-4 rounded-xl bg-[#030A14] border border-[#0E2C52] space-y-2">
                <div className="w-8 h-8 rounded-lg bg-[#061426] border border-[#0E2C52] flex items-center justify-center text-indigo-400">
                  <cap.icon className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-white">{cap.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>

          {/* Regional data visualization */}
          <div className="lg:col-span-3 bg-[#030A14] border border-[#0E2C52] rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(99,102,241,0.08)]">
            <div className="flex items-center justify-between px-4 py-3 border-b border-[#0E2C52] bg-[#061426]">
              <div className="flex items-center gap-2 text-indigo-400">
                <MapPin className="w-3.5 h-3.5" />
                <span className="text-[10px] font-mono uppercase tracking-wider font-semibold">Regional Charging Coverage</span>
              </div>
              <span className="text-[9px] font-mono text-indigo-300 bg-indigo-500/10 px-2 py-0.5 rounded-full border border-indigo-500/30">
                Multi-Operator
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2 p-4">
              <div className="bg-[#061426] border border-[#0E2C52]/70 rounded-xl p-3">
                <div className="text-[9px] font-mono uppercase text-slate-500 mb-1">Regions Tracked</div>
                <div className="text-lg font-bold text-white font-mono">4</div>
              </div>
              <div className="bg-[#061426] border border-[#0E2C52]/70 rounded-xl p-3">
                <div className="text-[9px] font-mono uppercase text-slate-500 mb-1">Connected Operators</div>
                <div className="text-lg font-bold text-white font-mono">6</div>
              </div>
              <div className="bg-[#061426] border border-[#0E2C52]/70 rounded-xl p-3">
                <div className="text-[9px] font-mono uppercase text-slate-500 mb-1">Avg. Coverage</div>
                <div className="text-lg font-bold text-indigo-400 font-mono">69%</div>
              </div>
            </div>

            <div className="px-4 pb-4 space-y-1.5">
              {REGIONS.map((r) => (
                <div key={r.name} className="flex items-center justify-between px-3 py-2 rounded-lg bg-[#061426]/60 border border-[#0E2C52]/50">
                  <div className="flex items-center gap-2 text-xs text-slate-200">
                    <MapPin className="w-3 h-3 text-slate-500" />
                    <span>{r.name}</span>
                  </div>
                  <div className="flex items-center gap-3 text-[10px] font-mono text-slate-400">
                    <span>{r.operators} operators</span>
                    <span className="px-2 py-0.5 rounded-full border border-indigo-500/30 text-indigo-300 bg-indigo-500/10">{r.coverage} coverage</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="rounded-2xl bg-[#061426] border border-indigo-500/40 p-8 text-center space-y-4">
          <h3 className="text-xl font-bold text-white">
            Plan Coordinated Public EV Infrastructure
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto">
            Discuss how Trevia's data layer supports regional infrastructure planning.
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
