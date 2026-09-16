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
          <div className="inline-flex items-center gap-2 text-[#00F0FF] text-xs font-mono font-semibold uppercase tracking-[0.25em] mb-3">
            <span>TAILORED INFRASTRUCTURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extralight text-white tracking-tight">
            Designed for <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00A8FF] to-[#00F0FF]">Drivers and Operators.</span>
          </h2>
        </div>

        {/* Dual Column Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Column 1: For Drivers */}
          <div id="drivers" className="bg-[#030914] border border-[#0E2644] hover:border-[#00A8FF]/50 rounded-3xl p-8 sm:p-10 transition-all duration-300 relative group flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#00A8FF]/10 border border-[#00A8FF]/30 text-[#00F0FF] flex items-center justify-center mb-6">
                <User className="w-6 h-6" />
              </div>
              <div className="text-xs font-mono uppercase text-[#00F0FF] tracking-wider mb-1 font-semibold">
                DRIVER EXPERIENCE
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4">
                One App. One Wallet. Any Charger.
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-6 font-normal">
                End the chaos of maintaining 10 different CPO apps. Trevia gives EV drivers unified map discovery, live connector status, and seamless auto-debit across India.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  'Unified roaming across 45+ national & highway CPOs',
                  'Predictive arrival battery % and port hold reservation',
                  'ISO 15118 Plug & Charge auto-handshake',
                  'Instant UPI wallet and automated GST tax invoices'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-slate-300">
                    <CheckCircle className="w-4 h-4 text-[#00F0FF] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#0A1A2E]">
              <button
                onClick={onRequestDemo}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#00F0FF] group-hover:text-white transition"
              >
                <span>Download Driver App Waitlist</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Column 2: For CPOs */}
          <div id="cpos" className="bg-[#030914] border border-[#0E2644] hover:border-[#00F0FF]/50 rounded-3xl p-8 sm:p-10 transition-all duration-300 relative group flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#00F0FF]/10 border border-[#00F0FF]/30 text-[#00F0FF] flex items-center justify-center mb-6">
                <Building2 className="w-6 h-6" />
              </div>
              <div className="text-xs font-mono uppercase text-[#00A8FF] tracking-wider mb-1 font-semibold">
                CPO & ENTERPRISE FLEETS
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4">
                Hardware-Agnostic CMS & Roaming Engine.
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-6 font-normal">
                Manage any charger brand over OCPP 2.0.1. Streamline billing, tariff scheduling, automated ground-fault recovery, and multi-tenant fleet operations.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  'Zero hardware vendor lock-in (ABB, Delta, Exicom, Schneider)',
                  'Sub-second telemetry and remote firmware OTA dispatch',
                  'Dynamic OpenADR 2.0b smart grid load balancing',
                  'Automated monthly CPO cross-network settlement payouts'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-slate-300">
                    <CheckCircle className="w-4 h-4 text-[#00A8FF] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#0A1A2E]">
              <button
                onClick={onRequestDemo}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#00A8FF] group-hover:text-white transition"
              >
                <span>Schedule CPO Platform Walkthrough</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
