import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Layers, 
  ArrowRight, 
  Radio, 
  Smartphone, 
  CheckCircle2
} from 'lucide-react';
import { ArchitectureFlow } from '../components/ArchitectureFlow';

interface PlatformPageProps {
  onRequestDemo: () => void;
}

export const PlatformPage: React.FC<PlatformPageProps> = ({ onRequestDemo }) => {
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
                <span className="text-[#00F0FF]">Architecture</span>
                <span>/</span>
                <span className="text-white font-semibold">Platform Layer</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#061426] border border-[#00A8FF]/40 flex items-center justify-center text-[#00F0FF]">
                  <Layers className="w-4 h-4" />
                </div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
                  Platform Architecture — Digital Infrastructure
                </h1>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Trevia operates in EV charging digital infrastructure — the software layer that sits between charging hardware and the operators, fleets, enterprises, and drivers who depend on it.
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

      {/* End-to-End Architecture */}
      <section className="max-w-7xl mx-auto px-6 space-y-4">
        <div>
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#00F0FF] mb-1">
            Topology
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            How Trevia Connects the Ecosystem
          </h2>
        </div>

        <ArchitectureFlow />
      </section>

      {/* Two-Sided Model */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          <div className="p-6 sm:p-8 rounded-2xl bg-[#030A14] border border-[#00A8FF]/40 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-wider px-2.5 py-0.5 rounded bg-[#00A8FF]/20 text-[#00F0FF] font-bold">
                Operator Layer
              </span>
              <Radio className="w-5 h-5 text-[#00A8FF]" />
            </div>

            <h3 className="text-xl font-bold text-white">Trevia CMS</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              The operational software that lets a charge point operator or fleet run its charging network as one connected system rather than a set of disconnected vendor tools.
            </p>

            <ul className="space-y-2 text-xs text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00F0FF]" />
                <span>OCPP 1.6J multi-vendor charger connectivity</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00F0FF]" />
                <span>Real-time telemetry, session state & power monitoring</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00F0FF]" />
                <span>Remote operations: Reset, Unlock & Diagnostics</span>
              </li>
            </ul>

            <div className="pt-2">
              <Link to="/cms" className="text-xs font-mono text-[#00F0FF] hover:underline inline-flex items-center gap-1">
                <span>View Trevia CMS</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-[#030A14] border border-[#0E2C52] space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-wider px-2.5 py-0.5 rounded bg-slate-800 text-slate-300 font-bold">
                Driver Layer
              </span>
              <Smartphone className="w-5 h-5 text-[#00F0FF]" />
            </div>

            <h3 className="text-xl font-bold text-white">Trevia Drive</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Extends the same connected infrastructure to EV drivers, bringing charging discovery from multiple networks into a single, unified experience.
            </p>

            <ul className="space-y-2 text-xs text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Discover chargers across multiple networks on one map</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Live availability powered by real-time telemetry</span>
              </li>
            </ul>

            <div className="pt-2">
              <Link to="/drive" className="text-xs font-mono text-slate-300 hover:text-white hover:underline inline-flex items-center gap-1">
                <span>View Trevia Drive</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Structural Differentiation */}
      <section className="max-w-7xl mx-auto px-6 space-y-4">
        <div>
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#00F0FF] mb-1">
            Category Matrix
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            Structural Advantage
          </h2>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-[#0E2C52] bg-[#030A14]">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-[#0E2C52] bg-[#061426] text-slate-400 font-mono text-xs uppercase">
                <th className="p-4">Category</th>
                <th className="p-4">Typical Approach</th>
                <th className="p-4 text-[#00F0FF]">Trevia's Structural Advantage</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#0E2C52]/60 text-slate-300">
              <tr>
                <td className="p-4 font-bold text-white">Hardware Vendors</td>
                <td className="p-4 text-slate-400">Sell equipment paired with vendor-locked software.</td>
                <td className="p-4 text-white bg-[#0A2240]/20">
                  <strong>Hardware-agnostic:</strong> Runs chargers across multiple hardware OEMs.
                </td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-white">Closed CPO Platforms</td>
                <td className="p-4 text-slate-400">Proprietary software for one operator network.</td>
                <td className="p-4 text-white bg-[#0A2240]/20">
                  <strong>Interoperable:</strong> Software layer any operator or fleet can deploy on.
                </td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-white">Consumer Aggregators</td>
                <td className="p-4 text-slate-400">Discovery-only app with no operational software.</td>
                <td className="p-4 text-white bg-[#0A2240]/20">
                  <strong>Two-sided:</strong> Combines driver discovery with the live operational layer.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

    </div>
  );
};
