import React from 'react';
import { Link } from 'react-router-dom';
import {
  Layers,
  Radio,
  Smartphone,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { ArchitectureFlow } from '../components/ArchitectureFlow';
import { CmsDashboardMock } from '../components/CmsDashboardMock';
import { PhoneMockup } from '../components/PhoneMockup';

interface PlatformPageProps {
  onRequestDemo: () => void;
}

export const PlatformPage: React.FC<PlatformPageProps> = ({ onRequestDemo: _onRequestDemo }) => {
  return (
    <div className="space-y-16 pb-24">

      {/* Header */}
      <section className="border-b border-[#0E2C52]/80 bg-[#030A14] py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-6 space-y-3 max-w-3xl">
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#00A09A]">
            Platform Architecture
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#061426] border border-[#00A09A]/40 flex items-center justify-center text-[#00A09A]">
              <Layers className="w-4 h-4" />
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
              The Digital Infrastructure for EV Charging
            </h1>
          </div>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Trevia connects charging hardware, network operations and charging experiences through a unified software platform.
          </p>
        </div>
      </section>

      {/* End-to-End Architecture */}
      <section className="max-w-7xl mx-auto px-6 space-y-4">
        <div>
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#00A09A] mb-1">
            Topology
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            How Trevia Connects EV Charging
          </h2>
        </div>

        <ArchitectureFlow />
      </section>

      {/* Two-Sided Model */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          <div className="p-6 sm:p-8 rounded-2xl bg-[#030A14] border-2 border-[#00A09A]/50 shadow-[0_0_25px_rgba(0,160,154,0.08)] space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-wider px-2.5 py-0.5 rounded bg-[#00A09A]/20 text-[#00A09A] font-bold">
                Operator Layer
              </span>
              <Radio className="w-5 h-5 text-[#00A09A]" />
            </div>

            <h3 className="text-xl font-bold text-white">Trevia CMS</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              The operating software for CPOs and charging network operators to connect, monitor and manage multi-vendor charging infrastructure.
            </p>

            <ul className="space-y-2 text-xs text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00A09A]" />
                <span>OCPP 1.6J multi-vendor charger connectivity</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00A09A]" />
                <span>Real-time charger and session monitoring</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00A09A]" />
                <span>Remote operations and network management</span>
              </li>
            </ul>

            <div className="pt-2">
              <Link to="/cms" className="text-xs font-mono text-[#00A09A] hover:underline inline-flex items-center gap-1">
                <span>Explore Trevia CMS</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="pt-2">
              <CmsDashboardMock compact />
            </div>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-[#030A14] border border-[#0E2C52] space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-wider px-2.5 py-0.5 rounded bg-slate-800 text-slate-300 font-bold">
                Driver Layer
              </span>
              <Smartphone className="w-5 h-5 text-emerald-400" />
            </div>

            <h3 className="text-xl font-bold text-white">Trevia EV</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              A charging aggregation platform that brings connected charging networks into one experience for EV drivers.
            </p>

            <ul className="space-y-2 text-xs text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Discover chargers across connected networks</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>View real-time availability</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Plan journeys with charging stops</span>
              </li>
            </ul>

            <div className="pt-2">
              <Link to="/drive" className="text-xs font-mono text-emerald-400 hover:underline inline-flex items-center gap-1">
                <span>Explore Trevia EV</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="pt-2 flex items-center justify-center gap-4">
              <PhoneMockup label="Discover" compact>
                <div className="flex-1 p-2 space-y-1.5">
                  <div className="h-3 rounded bg-[#061426] border border-[#0E2C52]" />
                  <div className="h-3 rounded bg-emerald-500/10 border border-emerald-500/30" />
                  <div className="h-3 rounded bg-[#061426] border border-[#0E2C52]" />
                </div>
              </PhoneMockup>
              <PhoneMockup label="Plan" compact>
                <div className="flex-1 p-2 space-y-1.5">
                  <div className="h-3 rounded bg-[#061426] border border-[#0E2C52]" />
                  <div className="h-3 rounded bg-[#061426] border border-[#0E2C52]" />
                  <div className="h-3 rounded bg-emerald-500/10 border border-emerald-500/30" />
                </div>
              </PhoneMockup>
            </div>
          </div>

        </div>
      </section>

      {/* How Trevia Fits the Charging Stack */}
      <section className="max-w-7xl mx-auto px-6 space-y-4">
        <div>
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#00A09A] mb-1">
            Category Matrix
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            How Trevia Fits the Charging Stack
          </h2>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-[#0E2C52] bg-[#030A14]">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-[#0E2C52] bg-[#061426] text-slate-400 font-mono text-xs uppercase">
                <th className="p-4">Category</th>
                <th className="p-4">Typical Role</th>
                <th className="p-4 text-[#00A09A]">Trevia</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#0E2C52]/60 text-slate-300">
              <tr>
                <td className="p-4 font-bold text-white">Charger Hardware</td>
                <td className="p-4 text-slate-400">Physical charging infrastructure</td>
                <td className="p-4 text-slate-200">Connect through the software layer</td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-white">CPO Platforms</td>
                <td className="p-4 text-slate-400">Operate a specific charging network</td>
                <td className="p-4 text-slate-200">Multi-vendor CMS layer</td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-white">Charging Aggregators</td>
                <td className="p-4 text-slate-400">Discover and access charging networks</td>
                <td className="p-4 text-slate-200">Trevia EV aggregation layer</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-xs sm:text-sm text-slate-400">
          Trevia connects the operational layer with the charging experience through one platform.
        </p>
      </section>

    </div>
  );
};
