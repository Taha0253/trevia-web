import React from 'react';
import { Layers, Cloud, GitBranch, Building2 } from 'lucide-react';

const stack = [
  { icon: Layers, name: 'OCPP 1.6J / 2.0.1', desc: 'Standards-based connectivity for any compliant AC/DC charger hardware.' },
  { icon: Cloud, name: 'Google Cloud & AWS', desc: 'Cloud infrastructure powering Trevia CMS uptime and telemetry ingestion.' },
  { icon: GitBranch, name: 'GitHub', desc: 'Version control and CI/CD for every Trevia CMS release.' },
  { icon: Building2, name: 'T-Hub & DPIIT', desc: 'Incubation and recognition supporting Trevia\'s product development.' },
];

export const IntegrationsPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 sm:py-24 space-y-8">
      <div className="space-y-3 pb-6 border-b border-edge">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface2 border border-edge text-[#00A09A] text-xs font-mono uppercase">
          <Layers className="w-3.5 h-3.5" /> Integrations
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold text-ink">Integrations & Ecosystem</h1>
        <p className="text-sm text-ink3 max-w-2xl">
          Trevia CMS is built to plug into your existing infrastructure rather than replace it — from charger hardware to cloud and dev tooling.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        {stack.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.name} className="p-5 rounded-2xl bg-surface border border-edge2">
              <Icon className="w-5 h-5 text-[#00A09A] mb-3" />
              <h3 className="text-sm font-bold text-ink mb-1">{item.name}</h3>
              <p className="text-xs text-ink3 leading-relaxed">{item.desc}</p>
            </div>
          );
        })}
      </div>

      <div className="p-5 rounded-2xl bg-surface border border-edge2 text-sm text-ink3 leading-relaxed">
        Looking to integrate your dispatch, ERP, or billing system with Trevia CMS? See our{' '}
        <a href="/technology/apis" className="text-[#00A09A] underline">API & Webhooks documentation</a>, or{' '}
        <a href="mailto:contact@treviaev.in" className="text-[#00A09A] underline">reach out to our team</a>.
      </div>
    </div>
  );
};
