import React from 'react';
import { TrendingUp, ArrowRight } from 'lucide-react';

interface TractionPageProps {
  onRequestDemo: () => void;
}

export const TractionPage: React.FC<TractionPageProps> = ({ onRequestDemo }) => {
  return (
    <div className="space-y-24 md:space-y-36 pb-24">
      
      {/* Hero */}
      <section className="relative pt-12 pb-16 md:pt-24 md:pb-24 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-emerald-500/10 rounded-full blur-[200px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#061426] border border-[#0E2C52] text-emerald-400 text-xs font-mono font-medium tracking-wider uppercase">
              <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
              <span>Company — Trust & Traction</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-light text-white tracking-tight leading-[1.08]">
              Milestone framework & verified{' '}
              <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-[#00A09A] to-white">
                progress.
              </span>
            </h1>

            <p className="text-lg text-slate-300 font-normal leading-relaxed">
              Trevia is an early-stage company building and validating Trevia CMS. We structure our progress around concrete engineering and ecosystem milestones.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onRequestDemo}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-[#00A09A] to-[#33C4BF] text-black font-bold text-sm tracking-wide transition-all shadow-[0_0_30px_rgba(0,160,154,0.4)] flex items-center gap-2"
              >
                <span>Request a Demo</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* Verified Milestone Table (Section I) */}
      <section className="max-w-7xl mx-auto px-6 space-y-8">
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#00A09A] mb-2">
            Verified Milestones
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4">
            Ecosystem & Platform Milestones
          </h2>
          <p className="text-slate-300 text-sm leading-relaxed">
            All milestones reflect verified organizational confirmations and ecosystem engagements.
          </p>
        </div>

        <div className="overflow-x-auto rounded-3xl border border-[#0E2C52] bg-[#030A14]">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-[#0E2C52] bg-[#061426] text-slate-400 font-mono text-xs uppercase">
                <th className="p-4 sm:p-5">Milestone Item</th>
                <th className="p-4 sm:p-5">Public Framing</th>
                <th className="p-4 sm:p-5 text-emerald-400">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#0E2C52]/60 text-slate-300">
              <tr>
                <td className="p-4 sm:p-5 font-bold text-white whitespace-nowrap">Company Incorporation</td>
                <td className="p-4 sm:p-5">Incorporated September 2025 in Hyderabad, India</td>
                <td className="p-4 sm:p-5">
                  <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 font-mono text-xs font-bold">
                    Confirmed
                  </span>
                </td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-bold text-white whitespace-nowrap">DPIIT Recognition</td>
                <td className="p-4 sm:p-5">DPIIT-recognised startup under Government of India Startup India initiative</td>
                <td className="p-4 sm:p-5">
                  <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 font-mono text-xs font-bold">
                    Confirmed
                  </span>
                </td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-bold text-white whitespace-nowrap">T-Hub Incubation</td>
                <td className="p-4 sm:p-5">T-Hub incubated / T-Hub Blitz Cohort 3 participant</td>
                <td className="p-4 sm:p-5">
                  <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 font-mono text-xs font-bold">
                    Active Cohort
                  </span>
                </td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-bold text-white whitespace-nowrap">Google for Startups</td>
                <td className="p-4 sm:p-5">Engaged with Google for Startups / Google Cloud Program</td>
                <td className="p-4 sm:p-5">
                  <span className="px-2.5 py-1 rounded-full bg-[#00A09A]/20 text-[#00A09A] font-mono text-xs font-bold">
                    Ecosystem
                  </span>
                </td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-bold text-white whitespace-nowrap">AWS Startups</td>
                <td className="p-4 sm:p-5">Engaged with AWS Startups Program</td>
                <td className="p-4 sm:p-5">
                  <span className="px-2.5 py-1 rounded-full bg-[#00A09A]/20 text-[#00A09A] font-mono text-xs font-bold">
                    Ecosystem
                  </span>
                </td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-bold text-white whitespace-nowrap">Trevia CMS Development</td>
                <td className="p-4 sm:p-5">Core platform developed and undergoing validation</td>
                <td className="p-4 sm:p-5">
                  <span className="px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-400 font-mono text-xs font-bold">
                    Validation Stage
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="rounded-3xl bg-[#061426] border border-[#00A09A]/40 p-8 sm:p-12 text-center space-y-6">
          <h2 className="text-2xl sm:text-4xl font-bold text-white">
            Partner with Trevia on our journey
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
            Schedule a platform walkthrough to see our validated CMS in action.
          </p>
          <div className="flex justify-center gap-4 pt-2">
            <button
              onClick={onRequestDemo}
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#00A09A] to-[#33C4BF] text-black font-bold text-xs uppercase tracking-wider"
            >
              Request a Demo
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
