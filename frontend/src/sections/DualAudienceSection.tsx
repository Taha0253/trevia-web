import React from 'react';
import { User, Building2, CheckCircle, ArrowRight } from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';

const CMS_TAGS = ['OCPP', 'Telemetry', 'Remote Commands', 'Tariffs', 'Billing', 'Analytics'];

interface DualAudienceSectionProps {
  onRequestDemo: () => void;
}

export const DualAudienceSection: React.FC<DualAudienceSectionProps> = ({ onRequestDemo }) => {
  return (
    <section className="py-24 bg-base relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-[#00A09A] text-xs font-mono font-semibold uppercase tracking-[0.25em] mb-3">
            <span>ONE PLATFORM, EVERY LAYER</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extralight text-ink tracking-tight">
            One Platform. <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00A09A] to-[#33C4BF]">Built for Charging Operators, Fleets &amp; Drivers.</span>
          </h2>
          <p className="text-sm sm:text-base text-ink3 mt-3 font-normal">
            Trevia CMS runs the network. Trevia's driver layer connects the people who use it.
          </p>
        </ScrollReveal>

        {/* Dual Column Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

          {/* Column 1: For CPOs / Fleets — the core CMS product, visually dominant */}
          <ScrollReveal direction="left" as="div" id="cpos" className="lg:col-span-3 bg-surface border-2 border-[#00A09A]/40 hover:border-[#00A09A]/70 rounded-3xl p-8 sm:p-10 transition-all duration-300 relative group flex flex-col justify-between shadow-[0_0_40px_rgba(0,160,154,0.1)]">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#00A09A]/10 border border-[#00A09A]/30 text-[#00A09A] flex items-center justify-center">
                  <Building2 className="w-6 h-6" />
                </div>
                <span className="text-[9px] px-2.5 py-1 rounded-full bg-[#00A09A]/15 border border-[#00A09A]/40 text-[#00A09A] font-mono font-bold uppercase tracking-wider">
                  Core Product
                </span>
              </div>
              <div className="text-xs font-mono uppercase text-[#00A09A] tracking-wider mb-1 font-semibold">
                TREVIA CMS — FOR CPOs, OPERATORS &amp; FLEETS
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-ink tracking-tight mb-4">
                Run your charging network from one control layer.
              </h3>
              <p className="text-sm text-ink2/90 leading-relaxed mb-5 font-normal">
                Manage multi-vendor chargers, monitor live telemetry, remotely diagnose issues, configure tariffs and automate charging operations through one CMS.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {CMS_TAGS.map((tag) => (
                  <span key={tag} className="text-[10px] font-mono px-2.5 py-1 rounded-lg bg-surface2/70 border border-edge text-ink2">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="space-y-3 pt-2">
                {[
                  'Zero hardware lock-in — connect ABB, Delta, Exicom, Schneider & more',
                  'Live station pulse, error diagnostics, and remote soft-reboot',
                  'Smart load management to prevent electrical overload',
                  'Automated monthly driver settlements and payout reconciliations'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-ink2">
                    <CheckCircle className="w-4 h-4 text-[#00A09A] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-edge2">
              <button
                onClick={onRequestDemo}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#00A09A] group-hover:text-ink transition"
              >
                <span>Schedule a Platform Walkthrough</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </ScrollReveal>

          {/* Column 2: Driver layer — positioned second */}
          <ScrollReveal direction="right" delay={150} as="div" id="drivers" className="lg:col-span-2 bg-surface border border-edge2 hover:border-[#00A09A]/50 rounded-3xl p-8 sm:p-10 transition-all duration-300 relative group flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#00A09A]/10 border border-[#00A09A]/30 text-[#00A09A] flex items-center justify-center mb-6">
                <User className="w-6 h-6" />
              </div>
              <div className="text-xs font-mono uppercase text-[#00A09A] tracking-wider mb-1 font-semibold">
                THE DRIVER LAYER
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-ink tracking-tight mb-4">
                One charging experience across connected networks.
              </h3>
              <p className="text-sm text-ink2/90 leading-relaxed mb-6 font-normal">
                Drivers on any Trevia-connected network get a live charging map, guaranteed stall reservations, and seamless UPI auto-pay — powered by the same CMS.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  'Roam across 45+ charging networks with a single account',
                  'Live socket availability & 15-minute stall hold reservation',
                  'Plug & Charge support — start charging automatically',
                  'Instant UPI wallet and automated GST invoices'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-ink2">
                    <CheckCircle className="w-4 h-4 text-[#00A09A] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-edge2">
              <button
                onClick={onRequestDemo}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#00A09A] group-hover:text-ink transition"
              >
                <span>Join Driver App Waitlist</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </ScrollReveal>

        </div>

      </div>
    </section>
  );
};
