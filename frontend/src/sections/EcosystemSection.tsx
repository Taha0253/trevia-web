import React from 'react';
import { Sparkles } from 'lucide-react';

export const EcosystemSection: React.FC = () => {
  const partners = [
    {
      name: 'T-Hub',
      category: 'Innovation Incubator',
      icon: <img src="/thub.png" alt="T-Hub" loading="lazy" decoding="async" className="w-10 h-10 object-contain" />,
      description: 'Incubated at India\'s premier tech incubator'
    },
    {
      name: 'GCP',
      category: 'Cloud Infrastructure',
      icon: <img src="/GCP.png" alt="Google Cloud Platform" loading="lazy" decoding="async" className="w-10 h-10 object-contain" />,
      description: 'Google Cloud high-availability clusters'
    },
    {
      name: 'Firebase',
      category: 'Realtime Telemetry',
      icon: <img src="/firebase.webp" alt="Firebase" loading="lazy" decoding="async" className="w-10 h-10 object-contain" />,
      description: 'Sub-second real-time event distribution'
    },
    {
      name: 'Docker',
      category: 'Edge Containers',
      icon: <img src="/Docker.webp" alt="Docker" loading="lazy" decoding="async" className="w-10 h-10 object-contain" />,
      description: 'Isolated microservices & depot runtime'
    },
    {
      name: 'GitHub',
      category: 'DevOps & CI/CD',
      icon: <img src="/git-hub.png" alt="GitHub" loading="lazy" decoding="async" className="w-10 h-10 object-contain" />,
      description: 'Enterprise code integrity & OTA versions'
    },
    {
      name: 'OCPP 2.0.1',
      category: 'Open Protocol',
      icon: <img src="/OCPP.png" alt="OCPP 2.0.1" loading="lazy" decoding="async" className="w-10 h-10 object-contain" />,
      description: 'Open Charge Point Protocol certification'
    }
  ];

  return (
    <section className="py-24 bg-[#02060D] relative overflow-hidden border-t border-b border-[#081528]">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#00A8FF]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        
        {/* Eyebrow */}
        <div className="mb-3">
          <span className="text-[#00F0FF] font-mono text-xs font-semibold tracking-[0.25em] uppercase">
            CONNECTED ECOSYSTEM
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extralight text-white tracking-tight max-w-3xl mx-auto leading-tight mb-4">
          Built to work with the{' '}
          <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00A8FF] to-[#00F0FF]">
            technologies you already use.
          </span>
        </h2>

        {/* Subtitle */}
        <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto mb-14 font-normal">
          Open infrastructure. Interoperable technology. Connected networks.
        </p>

        {/* Partner Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="group flex flex-col items-center justify-center p-6 rounded-2xl bg-[#030914] hover:bg-[#061426] border border-[#0E223D] hover:border-[#00A8FF]/50 transition-all duration-300 hover:-translate-y-1 shadow-lg"
            >
              <div className="mb-3 transition-transform duration-300 group-hover:scale-110">
                {partner.icon}
              </div>
              <span className="text-sm font-bold text-white tracking-wide">
                {partner.name}
              </span>
              <span className="text-[11px] text-slate-400 mt-1 font-mono">
                {partner.category}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom Tag */}
        <div className="mt-12 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#040E1C] border border-[#0F2644] text-xs text-slate-300">
          <Sparkles className="w-3.5 h-3.5 text-[#00F0FF]" />
          <span>Recognized by DPIIT • Incubated at T-Hub • Serving 12,000+ EV charging sessions</span>
        </div>

      </div>
    </section>
  );
};
