import React from 'react';
import { ScrollReveal } from '../components/ScrollReveal';

const LOGO_SIZE = 'h-14 w-14 object-contain';
const WORDMARK_SIZE = 'h-[72px] w-auto max-w-[190px] object-contain';

const GoogleForStartupsMark: React.FC = () => (
  <img src="/google-for-startups-white.png" alt="Google for Startups" loading="lazy" decoding="async" className={WORDMARK_SIZE} />
);

const GitHubMark: React.FC = () => (
  <svg viewBox="0 0 24 24" className={`${LOGO_SIZE} text-ink`} fill="currentColor" aria-hidden="true">
    <path d="M12 .3C5.37.3 0 5.67 0 12.3c0 5.3 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58 0-.28-.01-1.04-.02-2.04-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22 0 1.6-.01 2.89-.01 3.28 0 .32.21.7.82.58C20.56 22.1 24 17.6 24 12.3 24 5.67 18.63.3 12 .3Z" />
  </svg>
);

const GcpMark: React.FC = () => (
  <img src="/GCP.png" alt="Google Cloud Platform" loading="lazy" decoding="async" className={LOGO_SIZE} />
);

const AwsMark: React.FC = () => (
  <img src="/aws-startups-white.png" alt="AWS" loading="lazy" decoding="async" className={WORDMARK_SIZE} />
);

const ThubMark: React.FC = () => (
  <img src="/thub.png" alt="T-Hub" loading="lazy" decoding="async" className={LOGO_SIZE} />
);

const DpiitMark: React.FC = () => (
  <img src="/dpiit-recognized-transparent.png" alt="DPIIT Recognised" loading="lazy" decoding="async" className={LOGO_SIZE} />
);

const partners = [
  { name: 'T-Hub', Icon: ThubMark },
  { name: 'Google for Startups', Icon: GoogleForStartupsMark },
  { name: 'GitHub', Icon: GitHubMark },
  { name: 'Google Cloud', Icon: GcpMark },
  { name: 'AWS', Icon: AwsMark },
  { name: 'DPIIT', Icon: DpiitMark },
];

export const PartnerStripSection: React.FC = () => {
  const loop = [...partners, ...partners];

  return (
    <section className="relative py-16 sm:py-20 bg-base overflow-hidden">
      <ScrollReveal className="max-w-6xl mx-auto px-6 relative z-10 text-center">
        <div className="mb-3">
          <span className="text-[#00A09A] font-mono text-[11px] font-semibold tracking-[0.28em] uppercase">
            Connected Ecosystem
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extralight text-ink tracking-tight leading-tight">
          Backed by the ecosystem
          <br />
          <span className="font-extrabold">building India's EV future.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-sm sm:text-base leading-7 text-ink3">
          Recognised by government bodies, incubators, and the platforms powering our infrastructure.
        </p>
      </ScrollReveal>

      <div className="relative w-full overflow-hidden mt-10">
        <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-20 bg-gradient-to-r from-base to-transparent md:w-40" />
        <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-20 bg-gradient-to-l from-base to-transparent md:w-40" />

        <div className="flex w-max animate-logo-marquee hover:[animation-play-state:paused] motion-reduce:animate-none">
          {loop.map((partner, index) => {
            const Icon = partner.Icon;
            return (
              <div
                key={`${partner.name}-${index}`}
                className="flex h-32 w-48 shrink-0 flex-col items-center justify-center md:w-56"
              >
                <div className="flex h-[72px] max-w-full items-center justify-center px-2 opacity-100">
                  <Icon />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
