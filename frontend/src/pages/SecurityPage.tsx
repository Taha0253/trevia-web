import React from 'react';
import { ShieldCheck, Lock, Server, Eye } from 'lucide-react';

export const SecurityPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 sm:py-24 space-y-8">
      <div className="space-y-3 pb-6 border-b border-edge">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface2 border border-edge text-[#00A09A] text-xs font-mono uppercase">
          <ShieldCheck className="w-3.5 h-3.5" /> Security
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold text-ink">Security at Trevia</h1>
        <p className="text-sm text-ink3 max-w-2xl">
          Trevia CMS sits between live charging hardware and the operators who depend on it. Here's how we protect that connection.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div className="p-5 rounded-2xl bg-surface border border-edge2">
          <Lock className="w-5 h-5 text-[#00A09A] mb-3" />
          <h3 className="text-sm font-bold text-ink mb-1">Encrypted in Transit</h3>
          <p className="text-xs text-ink3 leading-relaxed">All charger and dashboard traffic runs over TLS/WSS, including OCPP WebSocket connections.</p>
        </div>
        <div className="p-5 rounded-2xl bg-surface border border-edge2">
          <Server className="w-5 h-5 text-[#00A09A] mb-3" />
          <h3 className="text-sm font-bold text-ink mb-1">Role-Based Access</h3>
          <p className="text-xs text-ink3 leading-relaxed">Operator accounts are scoped by role, so field staff, dispatch, and admins see only what they need.</p>
        </div>
        <div className="p-5 rounded-2xl bg-surface border border-edge2">
          <Eye className="w-5 h-5 text-[#00A09A] mb-3" />
          <h3 className="text-sm font-bold text-ink mb-1">Session-Level Audit Trail</h3>
          <p className="text-xs text-ink3 leading-relaxed">Every remote command, tariff change, and charging session is logged against an operator identity.</p>
        </div>
        <div className="p-5 rounded-2xl bg-surface border border-edge2">
          <ShieldCheck className="w-5 h-5 text-[#00A09A] mb-3" />
          <h3 className="text-sm font-bold text-ink mb-1">Isolated Fault Handling</h3>
          <p className="text-xs text-ink3 leading-relaxed">Charger faults are isolated at the connector level so one failing unit can't take down a station.</p>
        </div>
      </div>

      <div className="p-5 rounded-2xl bg-surface border border-edge2 text-sm text-ink3 leading-relaxed">
        We're formalizing our compliance program as we scale with enterprise CPOs and fleets. If your security or procurement team needs a
        detailed questionnaire, architecture review, or NDA-covered documentation, reach out at{' '}
        {/* PLACEHOLDER — replace security@trevia.com with the real security contact */}
        <a href="mailto:security@trevia.com" className="text-[#00A09A] underline">security@trevia.com</a>.
      </div>
    </div>
  );
};
