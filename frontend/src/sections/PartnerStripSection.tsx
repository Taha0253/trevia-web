import React from 'react';

const GoogleG: React.FC = () => (
  <svg viewBox="0 0 24 24" className="h-9 w-9" aria-hidden="true">
    <path fill="#4285F4" d="M23.5 12.27c0-.82-.07-1.6-.21-2.36H12v4.47h6.46a5.52 5.52 0 0 1-2.4 3.62v3h3.88c2.27-2.09 3.56-5.17 3.56-8.73Z" />
    <path fill="#34A853" d="M12 24c3.24 0 5.96-1.07 7.95-2.9l-3.88-3c-1.08.72-2.46 1.15-4.07 1.15-3.13 0-5.78-2.11-6.73-4.96H1.27v3.09C3.25 21.3 7.31 24 12 24Z" />
    <path fill="#FBBC05" d="M5.27 14.29A7.2 7.2 0 0 1 4.89 12c0-.8.14-1.57.38-2.29V6.62H1.27A12 12 0 0 0 0 12c0 1.94.46 3.77 1.27 5.38l4-3.09Z" />
    <path fill="#EA4335" d="M12 4.75c1.76 0 3.34.6 4.58 1.79l3.44-3.44C17.95 1.14 15.23 0 12 0 7.31 0 3.25 2.7 1.27 6.62l4 3.09C6.22 6.86 8.87 4.75 12 4.75Z" />
  </svg>
);

const GitHubMark: React.FC = () => (
  <svg viewBox="0 0 24 24" className="h-9 w-9 text-white" fill="currentColor" aria-hidden="true">
    <path d="M12 .3C5.37.3 0 5.67 0 12.3c0 5.3 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58 0-.28-.01-1.04-.02-2.04-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22 0 1.6-.01 2.89-.01 3.28 0 .32.21.7.82.58C20.56 22.1 24 17.6 24 12.3 24 5.67 18.63.3 12 .3Z" />
  </svg>
);

const GcpMark: React.FC = () => (
  <img src="/GCP.png" alt="Google Cloud Platform" loading="lazy" decoding="async" className="h-9 w-9 object-contain" />
);

const AwsMark: React.FC = () => (
  <svg viewBox="0 0 100 58" className="h-8 w-14" aria-hidden="true">
    <text x="50" y="30" textAnchor="middle" fill="#fff" fontSize="30" fontWeight="700" fontFamily="Arial, sans-serif" letterSpacing="-1">
      aws
    </text>
    <path
      fill="none"
      stroke="#FF9900"
      strokeWidth="3.4"
      strokeLinecap="round"
      d="M4 40c18 12 74 12 92 0"
    />
    <path fill="#FF9900" d="M92 34.5 100 38l-9.5 4.5 1.5-4Z" />
  </svg>
);

const ThubMark: React.FC = () => (
  <img src="/thub.png" alt="T-Hub" loading="lazy" decoding="async" className="h-9 w-9 object-contain" />
);

const DpiitMark: React.FC = () => (
  <svg viewBox="0 0 32 32" className="h-9 w-9" aria-hidden="true">
    <circle cx="16" cy="16" r="15" fill="#0B1F3A" stroke="#E8B84A" strokeWidth="1.4" />
    <circle cx="16" cy="16" r="12.4" fill="none" stroke="#FF671F" strokeWidth="1.1" />
    <circle cx="16" cy="16" r="10.8" fill="none" stroke="#046A38" strokeWidth="1.1" />
    <text x="16" y="14.2" textAnchor="middle" fill="#fff" fontSize="5.2" fontWeight="700" fontFamily="Manrope, sans-serif">DPIIT</text>
    <text x="16" y="20.4" textAnchor="middle" fill="#E8B84A" fontSize="3.4" fontWeight="600" fontFamily="Manrope, sans-serif">INDIA</text>
  </svg>
);

const partners = [
  { name: 'T-Hub', Icon: ThubMark },
  { name: 'Google for Startups', Icon: GoogleG },
  { name: 'GitHub', Icon: GitHubMark },
  { name: 'Google Cloud', Icon: GcpMark },
  { name: 'AWS', Icon: AwsMark },
  { name: 'DPIIT', Icon: DpiitMark },
];

export const PartnerStripSection: React.FC = () => {
  const loop = [...partners, ...partners];

  return (
    <section className="relative py-16 sm:py-20 bg-[#02060D] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
        <div className="mb-3">
          <span className="text-[#00A09A] font-mono text-[11px] font-semibold tracking-[0.28em] uppercase">
            Connected Ecosystem
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extralight text-white tracking-tight leading-tight">
          Built to work with the
          <br />
          <span className="font-extrabold">technologies you already use.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-sm sm:text-base leading-7 text-slate-400">
          Open infrastructure. Interoperable technology. Connected networks.
        </p>
      </div>

      <div className="relative w-full overflow-hidden mt-10">
        <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-20 bg-gradient-to-r from-[#02060D] to-transparent md:w-40" />
        <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-20 bg-gradient-to-l from-[#02060D] to-transparent md:w-40" />

        <div className="flex w-max animate-logo-marquee hover:[animation-play-state:paused] motion-reduce:animate-none">
          {loop.map((partner, index) => {
            const Icon = partner.Icon;
            return (
              <div
                key={`${partner.name}-${index}`}
                className="flex h-32 w-48 shrink-0 flex-col items-center justify-center gap-4 md:w-56"
              >
                <div className="flex size-12 items-center justify-center opacity-70 transition-all duration-300 hover:scale-110 hover:opacity-100">
                  <Icon />
                </div>
                <span className="text-sm font-medium text-white">{partner.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
