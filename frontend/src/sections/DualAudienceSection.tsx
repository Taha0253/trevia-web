import React from 'react';
import { User, Building2, CheckCircle, ArrowRight } from 'lucide-react';

interface DualAudienceSectionProps {
  onRequestDemo: () => void;
}

export const DualAudienceSection: React.FC<DualAudienceSectionProps> = ({ onRequestDemo }) => {
  return (
    <section className="py-24 bg-[#02060D] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-[#00A09A] text-xs font-mono font-semibold uppercase tracking-[0.25em] mb-3">
            <span>BUILT FOR REAL PEOPLE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extralight text-white tracking-tight">
            Designed for <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00A09A] to-[#00A09A]">Drivers &amp; Operators Alike.</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-3 font-normal">
            Whether you're behind the wheel or managing a nationwide charging network, Trevia removes the friction.
          </p>
        </div>

        {/* Dual Column Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Column 1: For Drivers */}
          <div id="drivers" className="bg-[#030914] border border-[#0E2644] hover:border-[#00A09A]/50 rounded-3xl p-8 sm:p-10 transition-all duration-300 relative group flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#00A09A]/10 border border-[#00A09A]/30 text-[#00A09A] flex items-center justify-center mb-6">
                <User className="w-6 h-6" />
              </div>
              <div className="text-xs font-mono uppercase text-[#00A09A] tracking-wider mb-1 font-semibold">
                FOR EVERYDAY EV DRIVERS
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4">
                One App. One Wallet. Total Freedom.
              </h3>
              <p className="text-sm text-slate-300/90 leading-relaxed mb-6 font-normal">
                No more downloading 10 different apps or creating multiple prepaid wallets. Trevia gives you a live charging map, guaranteed stall reservations, and seamless UPI auto-pay anywhere you drive in India.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  'Roam across 45+ charging networks with a single account',
                  'Live socket availability & 15-minute stall hold reservation',
                  'Plug & Charge support — start charging automatically',
                  'Instant UPI wallet and automated GST invoices'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-slate-300">
                    <CheckCircle className="w-4 h-4 text-[#00A09A] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#0A1A2E]">
              <button
                onClick={onRequestDemo}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#00A09A] group-hover:text-white transition"
              >
                <span>Join Driver App Waitlist</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Column 2: For CPOs */}
          <div id="cpos" className="bg-[#030914] border border-[#0E2644] hover:border-[#00A09A]/50 rounded-3xl p-8 sm:p-10 transition-all duration-300 relative group flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#00A09A]/10 border border-[#00A09A]/30 text-[#00A09A] flex items-center justify-center mb-6">
                <Building2 className="w-6 h-6" />
              </div>
              <div className="text-xs font-mono uppercase text-[#00A09A] tracking-wider mb-1 font-semibold">
                FOR CHARGING OPERATORS &amp; FLEETS
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4">
                Run Your Entire Network Without the Chaos.
              </h3>
              <p className="text-sm text-slate-300/90 leading-relaxed mb-6 font-normal">
                Manage any charger brand over standard OCPP. Automate driver billing, set time-of-day tariffs, resolve faults remotely, and maximize station uptime without adding field staff.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  'Zero hardware lock-in — connect ABB, Delta, Exicom, Schneider & more',
                  'Live station pulse, error diagnostics, and remote soft-reboot',
                  'Smart load management to prevent electrical overload',
                  'Automated monthly driver settlements and payout reconciliations'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-slate-300">
                    <CheckCircle className="w-4 h-4 text-[#00A09A] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#0A1A2E]">
              <button
                onClick={onRequestDemo}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#00A09A] group-hover:text-white transition"
              >
                <span>Schedule a Platform Walkthrough</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
