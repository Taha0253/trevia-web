import React from 'react';
import { Shield } from 'lucide-react';

export const PrivacyPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 sm:py-24 space-y-8">
      <div className="space-y-3 pb-6 border-b border-[#0E2C52]">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#061426] border border-[#0E2C52] text-[#00A09A] text-xs font-mono uppercase">
          <Shield className="w-3.5 h-3.5" /> Legal Document
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold text-white">Privacy Policy</h1>
        <p className="text-xs font-mono text-slate-400">Last updated: September 2025 • Trevia EV Technologies</p>
      </div>

      <div className="prose prose-invert max-w-none text-slate-300 text-sm space-y-6 leading-relaxed">
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-white">1. Overview</h2>
          <p>
            Trevia EV Technologies (“Trevia”, “we”, “our”, or “us”) respects your privacy and is committed to protecting the telemetry, transactional, and personal data processed through our enterprise charging management software (Trevia CMS) and discovery services (Trevia EV).
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-white">2. Data We Process</h2>
          <p>
            In operating charging infrastructure, Trevia processes:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-slate-400">
            <li>Charger telemetry data (meter values, voltage, current, error codes, connector states).</li>
            <li>Charging session records (start/stop timestamps, energy delivered in kWh, transaction IDs).</li>
            <li>Operator account and authentication credentials.</li>
            <li>General technical usage and diagnostic log metrics.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-white">3. Data Security & Storage</h2>
          <p>
            All data streams are encrypted in transit using TLS 1.3 / WSS protocols and stored in compliant cloud infrastructure. We enforce role-based access control and never sell operator or customer data to third parties.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-white">4. Contact Us</h2>
          <p>
            If you have questions regarding this Privacy Policy, contact us at{' '}
            {/* PLACEHOLDER — replace admin@trevia.com with the real privacy contact */}
            <a href="mailto:admin@trevia.com" className="text-[#00A09A] underline">admin@trevia.com</a>.
          </p>
        </section>
      </div>
    </div>
  );
};
