import React from 'react';
import { Link } from 'react-router-dom';
import { Info, ArrowRight, Layers, Zap, Building } from 'lucide-react';

interface AboutPageProps {
  onRequestDemo: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onRequestDemo }) => {
  return (
    <div className="space-y-24 md:space-y-36 pb-24">
      
      {/* Hero */}
      <section className="relative pt-12 pb-16 md:pt-24 md:pb-24 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-[#00A8FF]/10 rounded-full blur-[200px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#061426] border border-[#0E2C52] text-[#00F0FF] text-xs font-mono font-medium tracking-wider uppercase">
              <Info className="w-3.5 h-3.5 text-[#00F0FF]" />
              <span>Company — About Trevia</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-light text-white tracking-tight leading-[1.08]">
              Building the digital infrastructure behind{' '}
              <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00A8FF] via-[#00F0FF] to-white">
                EV charging.
              </span>
            </h1>

            <p className="text-lg text-slate-300 font-normal leading-relaxed">
              Trevia EV Technologies is a software infrastructure company for India's EV charging ecosystem. Its primary product, Trevia CMS, is the operating layer that connects charging hardware to the people who run it.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onRequestDemo}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-[#00A8FF] to-[#00D2C4] text-black font-bold text-sm tracking-wide transition-all shadow-[0_0_30px_rgba(0,168,255,0.4)] flex items-center gap-2"
              >
                <span>Partner With Trevia</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <Link
                to="/traction"
                className="px-8 py-4 rounded-full bg-[#040C18] border border-[#0E2C52] text-slate-200 hover:text-white font-medium text-sm tracking-wide transition-all"
              >
                View Traction & Milestones
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Category Definition & Mission */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="p-8 sm:p-10 rounded-3xl bg-[#030A14] border border-[#0E2C52] space-y-4">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#00F0FF]">
              Category Definition
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              What We Do
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Trevia operates in EV charging digital infrastructure — the software layer that sits between charging hardware and the operators, fleets, enterprises, and drivers who depend on it. Trevia is not a hardware vendor, not a charge point operator, and not a single-sided consumer app.
            </p>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-[#030A14] border border-[#0E2C52] space-y-4">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
              Core Purpose
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Our Vision
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              To become the core operating layer for EV charging infrastructure across India, extending the same interoperability model into adjacent energy-mobility infrastructure as the market matures.
            </p>
          </div>

        </div>
      </section>

      {/* Core Engineering Principles */}
      <section className="max-w-7xl mx-auto px-6 space-y-8">
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#00F0FF] mb-2">
            Engineering Principles
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4">
            How We Build Software
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-[#030A14] border border-[#0E2C52] space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#061426] border border-[#0E2C52] flex items-center justify-center text-[#00F0FF]">
              <Layers className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-white">Interoperability First</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Built natively on open OCPP standards to ensure operators maintain total freedom over their hardware procurement.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#030A14] border border-[#0E2C52] space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#061426] border border-[#0E2C52] flex items-center justify-center text-[#00A8FF]">
              <Zap className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-white">Operational Reliability</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Engineered with persistent WebSockets and automated fault detection to maximize charging uptime across every site.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#030A14] border border-[#0E2C52] space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#061426] border border-[#0E2C52] flex items-center justify-center text-emerald-400">
              <Building className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-white">Hyderabad Grounded</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Headquartered in Hyderabad, India, incubated at T-Hub, building software directly tailored to India's charging market.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="rounded-3xl bg-[#061426] border border-[#00A8FF]/40 p-8 sm:p-12 text-center space-y-6">
          <h2 className="text-2xl sm:text-4xl font-bold text-white">
            Connect with Trevia EV Technologies
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
            Whether you are a CPO, fleet operator, or investor, we welcome the opportunity to collaborate.
          </p>
          <div className="flex justify-center gap-4 pt-2">
            <button
              onClick={onRequestDemo}
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#00A8FF] to-[#00D2C4] text-black font-bold text-xs uppercase tracking-wider"
            >
              Contact Team
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
