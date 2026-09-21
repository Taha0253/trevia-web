import React from 'react';
import { ArrowRight, CheckCircle2, AlertTriangle, Layers, LayoutDashboard, Activity, Zap, RefreshCw, Radio, Code2 } from 'lucide-react';
import { CmsDashboardMock } from '../../components/CmsDashboardMock';

interface SolutionPageProps {
  onRequestDemo: () => void;
}

const CAPABILITIES = [
  { icon: LayoutDashboard, title: 'Multi-Site Management', desc: 'Monitor charging infrastructure across multiple properties from one platform.' },
  { icon: Activity, title: 'Charger Monitoring', desc: 'Track charger status, connectivity and charging activity.' },
  { icon: Zap, title: 'Access & Charging Sessions', desc: 'Monitor charging sessions across workplace and destination sites.' },
  { icon: RefreshCw, title: 'Remote Operations', desc: 'Execute supported charger commands remotely.' },
  { icon: Radio, title: 'Multi-Vendor Connectivity', desc: 'Connect supported charging hardware through OCPP.' },
  { icon: Code2, title: 'APIs & Integrations', desc: 'Connect charging operations with existing enterprise systems.' },
];

export const EnterprisesPage: React.FC<SolutionPageProps> = ({ onRequestDemo }) => {
  return (
    <div className="space-y-16 pb-24">

      {/* Header */}
      <section className="border-b border-edge/80 bg-surface py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
            <div className="lg:col-span-3 space-y-3">


              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-ink tracking-tight">
                Manage Workplace & Destination Charging
              </h1>

              <p className="text-sm sm:text-base text-ink2 leading-relaxed">
                Manage charging infrastructure across offices, commercial properties and other facilities through one operational layer.
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

            <div className="lg:col-span-2">
              <CmsDashboardMock compact />
            </div>
          </div>
        </div>
      </section>

      {/* Problem / Solution / Outcome */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="p-6 rounded-2xl bg-surface border border-rose-900/40 space-y-2">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-rose-400 flex items-center gap-1.5">
              <AlertTriangle className="w-3.5 h-3.5" /> Problem
            </div>
            <h3 className="text-base font-bold text-ink">Fragmented Charging Assets</h3>
            <p className="text-xs text-ink2 leading-relaxed">
              Charging infrastructure installed across different properties or vendors can create fragmented operational workflows.
            </p>
          </div>

          <div className="p-6 sm:p-7 rounded-2xl bg-surface2 border-2 border-emerald-500/50 space-y-2 shadow-[0_0_25px_rgba(16,185,129,0.15)] md:scale-105">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5" /> Trevia Solution
            </div>
            <h3 className="text-base font-bold text-ink">One Operational View</h3>
            <p className="text-xs text-ink2 leading-relaxed">
              Trevia CMS provides centralized visibility and management across supported charging infrastructure, regardless of hardware vendor.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-surface border border-emerald-900/50 space-y-2">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" /> Business Outcome
            </div>
            <h3 className="text-base font-bold text-ink">Simpler Facilities Operations</h3>
            <p className="text-xs text-ink2 leading-relaxed">
              Manage charging assets as part of your broader facility infrastructure rather than through separate vendor systems.
            </p>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="max-w-7xl mx-auto px-6 space-y-8">
        <div>
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-400 mb-1">
            Enterprise Features
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-ink">
            Workplace & Commercial Charging
          </h2>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-xs font-mono text-ink3">
          <span className="px-3 py-1.5 rounded-lg bg-surface2 border border-edge">Portfolio of Properties</span>
          <ArrowRight className="w-3.5 h-3.5 text-emerald-400 rotate-90 sm:rotate-0" />
          <span className="px-3 py-1.5 rounded-lg bg-surface2 border border-edge">Chargers</span>
          <ArrowRight className="w-3.5 h-3.5 text-emerald-400 rotate-90 sm:rotate-0" />
          <span className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-[#00A09A] to-[#33C4BF] text-black font-bold">Trevia CMS</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {CAPABILITIES.map((cap) => (
              <div key={cap.title} className="p-4 rounded-xl bg-surface border border-edge space-y-2">
                <div className="w-8 h-8 rounded-lg bg-surface2 border border-edge flex items-center justify-center text-emerald-400">
                  <cap.icon className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-ink">{cap.title}</h4>
                <p className="text-xs text-ink3 leading-relaxed">{cap.desc}</p>
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
        <div className="rounded-2xl bg-surface2 border border-emerald-500/40 p-8 text-center space-y-4">
          <h3 className="text-xl font-bold text-ink">
            Modernize Your Charging Infrastructure
          </h3>
          <p className="text-xs sm:text-sm text-ink2 max-w-lg mx-auto">
            Bring workplace and destination charging assets into one operational layer.
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
