import React from 'react';
import { FileText, ArrowRight, BookOpen, ShieldCheck, Zap } from 'lucide-react';

interface ResourcesPageProps {
  onRequestDemo: () => void;
}

export const ResourcesPage: React.FC<ResourcesPageProps> = ({ onRequestDemo }) => {
  return (
    <div className="space-y-24 md:space-y-36 pb-24">
      
      {/* Hero */}
      <section className="relative pt-12 pb-16 md:pt-24 md:pb-24 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-[#00A09A]/10 rounded-full blur-[200px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#061426] border border-[#0E2C52] text-[#00A09A] text-xs font-mono font-medium tracking-wider uppercase">
              <FileText className="w-3.5 h-3.5 text-[#00A09A]" />
              <span>Resources — Knowledge Hub</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-light text-white tracking-tight leading-[1.08]">
              Technical documentation & industry{' '}
              <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00A09A] via-[#00A09A] to-white">
                insights.
              </span>
            </h1>

            <p className="text-lg text-slate-300 font-normal leading-relaxed">
              Explore technical guides, OCPP protocol overviews, and EV charging infrastructure playbooks authored by the Trevia engineering team.
            </p>

          </div>
        </div>
      </section>

      {/* Featured Resources Grid */}
      <section className="max-w-7xl mx-auto px-6 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="p-8 rounded-3xl bg-[#030A14] border border-[#0E2C52] hover:border-[#00A09A] transition-all space-y-4 flex flex-col justify-between group">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#061426] border border-[#0E2C52] flex items-center justify-center text-[#00A09A]">
                <BookOpen className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#00A09A] font-bold">Whitepaper</span>
              <h4 className="text-lg font-bold text-white group-hover:text-[#00A09A] transition-colors">
                The Operating Layer for Multi-Vendor EV Charging
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                An architectural analysis of how OCPP 1.6J JSON-over-WebSocket solves multi-site operational fragmentation.
              </p>
            </div>
            <div className="pt-4 border-t border-[#0E2C52] flex items-center justify-between text-xs font-mono text-[#00A09A]">
              <span>Read Summary</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-[#030A14] border border-[#0E2C52] hover:border-[#00A09A] transition-all space-y-4 flex flex-col justify-between group">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#061426] border border-[#0E2C52] flex items-center justify-center text-[#00A09A]">
                <Zap className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#00A09A] font-bold">Guide</span>
              <h4 className="text-lg font-bold text-white group-hover:text-[#00A09A] transition-colors">
                CPO Hardware Transition Playbook
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Step-by-step methodology for migrating legacy charging units to an open, vendor-neutral CMS.
              </p>
            </div>
            <div className="pt-4 border-t border-[#0E2C52] flex items-center justify-between text-xs font-mono text-[#00A09A]">
              <span>Read Guide</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-[#030A14] border border-[#0E2C52] hover:border-emerald-400 transition-all space-y-4 flex flex-col justify-between group">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#061426] border border-[#0E2C52] flex items-center justify-center text-emerald-400">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 font-bold">Standard</span>
              <h4 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
                OCPP 1.6J vs OCPP 2.0.1 Comparison
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Technical breakdown of transaction mechanisms, device management, and security profiles.
              </p>
            </div>
            <div className="pt-4 border-t border-[#0E2C52] flex items-center justify-between text-xs font-mono text-emerald-400">
              <span>View Technical Note</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="rounded-3xl bg-[#061426] border border-[#00A09A]/40 p-8 sm:p-12 text-center space-y-6">
          <h2 className="text-2xl sm:text-4xl font-bold text-white">
            Have technical questions about Trevia CMS?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
            Our infrastructure engineering team is available for technical discussions.
          </p>
          <div className="flex justify-center gap-4 pt-2">
            <button
              onClick={onRequestDemo}
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#00A09A] to-[#33C4BF] text-black font-bold text-xs uppercase tracking-wider"
            >
              Request a Technical Demo
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
