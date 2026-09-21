import React from 'react';
import { Shield } from 'lucide-react';

export const TermsPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 sm:py-24 space-y-8">
      <div className="space-y-3 pb-6 border-b border-[#0E2C52]">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#061426] border border-[#0E2C52] text-[#00A09A] text-xs font-mono uppercase">
          <Shield className="w-3.5 h-3.5" /> Legal Document
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold text-white">Terms of Use</h1>
        <p className="text-xs font-mono text-slate-400">Last updated: September 2025 • Trevia EV Technologies</p>
      </div>

      <div className="prose prose-invert max-w-none text-slate-300 text-sm space-y-6 leading-relaxed">
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-white">1. Acceptance of Terms</h2>
          <p>
            By accessing or using the Trevia EV Technologies platform, websites, and APIs (including Trevia CMS and Trevia EV), you agree to be bound by these Terms of Use and all applicable laws and regulations.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-white">2. Permitted Use</h2>
          <p>
            Trevia CMS is provided for authorized charging management operations, telemetry analysis, and charger orchestration. You agree not to misuse the platform, reverse engineer the communication protocols, or disrupt network integrity.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-white">3. Intellectual Property</h2>
          <p>
            All software code, user interface designs, architecture trademarks, and branding associated with Trevia EV Technologies remain the exclusive property of Trevia EV Technologies.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-white">4. Inquiries</h2>
          <p>
            For legal inquiries, contact{' '}
            {/* PLACEHOLDER — replace admin@trevia.com with the real legal contact */}
            <a href="mailto:admin@trevia.com" className="text-[#00A09A] underline">admin@trevia.com</a>.
          </p>
        </section>
      </div>
    </div>
  );
};
