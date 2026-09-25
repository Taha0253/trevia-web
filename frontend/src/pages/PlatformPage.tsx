import React from 'react';
import { Link } from 'react-router-dom';
import {
  
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
      <section className="border-b border-edge/80 bg-surface py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-6 space-y-3 max-w-3xl">


          <div className="flex items-center gap-3">

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-ink tracking-tight">
              The Digital Infrastructure for EV Charging
            </h1>
          </div>

          <p className="text-base sm:text-lg text-ink2 max-w-2xl mx-auto mt-4 font-normal leading-relaxed">
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
          <h2 className="text-xl sm:text-2xl font-bold text-ink">
            How Trevia Connects EV Charging
          </h2>
        </div>

        <ArchitectureFlow />
      </section>

      {/* Two-Sided Model */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          <div className="p-6 sm:p-8 rounded-2xl bg-surface border-2 border-[#00A09A]/50 shadow-[0_0_25px_rgba(0,160,154,0.08)] space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-wider px-2.5 py-0.5 rounded bg-[#00A09A]/20 text-[#00A09A] font-bold">
                Operator Layer
              </span>
              <Radio className="w-5 h-5 text-[#00A09A]" />
            </div>

            <h3 className="text-xl font-bold text-ink">Trevia CMS</h3>
            <p className="text-xs sm:text-sm text-ink2 leading-relaxed">
              The operating software for CPOs and charging network operators to connect, monitor and manage multi-vendor charging infrastructure.
            </p>

            <ul className="space-y-2 text-xs text-ink2">
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

          <div className="p-6 sm:p-8 rounded-2xl bg-surface border border-edge space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-wider px-2.5 py-0.5 rounded bg-surface2 text-ink2 font-bold">
                Driver Layer
              </span>
              <Smartphone className="w-5 h-5 text-emerald-400" />
            </div>

            <h3 className="text-xl font-bold text-ink">Trevia EV</h3>
            <p className="text-xs sm:text-sm text-ink2 leading-relaxed">
              A charging aggregation platform that brings connected charging networks into one experience for EV drivers.
            </p>

            <ul className="space-y-2 text-xs text-ink2">
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
                  <div className="h-3 rounded bg-surface2 border border-edge" />
                  <div className="h-3 rounded bg-emerald-500/10 border border-emerald-500/30" />
                  <div className="h-3 rounded bg-surface2 border border-edge" />
                </div>
              </PhoneMockup>
              <PhoneMockup label="Plan" compact>
                <div className="flex-1 p-2 space-y-1.5">
                  <div className="h-3 rounded bg-surface2 border border-edge" />
                  <div className="h-3 rounded bg-surface2 border border-edge" />
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
          <h2 className="text-xl sm:text-2xl font-bold text-ink">
            How Trevia Fits the Charging Stack
          </h2>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-edge bg-surface">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-edge bg-surface2 text-ink3 font-mono text-xs uppercase">
                <th className="p-4">Category</th>
                <th className="p-4">Typical Role</th>
                <th className="p-4 text-[#00A09A]">Trevia</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#0E2C52]/60 text-ink2">
              <tr>
                <td className="p-4 font-bold text-ink">Charger Hardware</td>
                <td className="p-4 text-ink3">Physical charging infrastructure</td>
                <td className="p-4 text-ink2">Connect through the software layer</td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-ink">CPO Platforms</td>
                <td className="p-4 text-ink3">Operate a specific charging network</td>
                <td className="p-4 text-ink2">Multi-vendor CMS layer</td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-ink">Charging Aggregators</td>
                <td className="p-4 text-ink3">Discover and access charging networks</td>
                <td className="p-4 text-ink2">Trevia EV aggregation layer</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-xs sm:text-sm text-ink3">
          Trevia connects the operational layer with the charging experience through one platform.
        </p>
      </section>

    </div>
  );
};
