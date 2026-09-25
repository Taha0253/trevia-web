import React from 'react';
import { ScrollReveal } from '../components/ScrollReveal';

const LOGO_SIZE = 'h-14 w-14 object-contain';
const WORDMARK_SIZE = 'h-[72px] w-auto max-w-[190px] object-contain';

const GoogleForStartupsMark: React.FC = () => (
  <>
    <img
      src="/google-for-startups-white.png"
      alt="Google for Startups"
      loading="lazy"
      decoding="async"
      className={`${WORDMARK_SIZE} logo-dark-only`}
    />
    <img
      src="/google-for-startups-color.png"
      alt="Google for Startups"
      loading="lazy"
      decoding="async"
      className={`${WORDMARK_SIZE} logo-light-only`}
    />
  </>
);

const GitHubMark: React.FC = () => (
  <>
    <img
      src="/github-white.png"
      alt="GitHub"
      loading="lazy"
      decoding="async"
      className="h-[64px] w-auto max-w-[130px] object-contain logo-dark-only"
    />
    <img
      src="/github-light.png"
      alt="GitHub"
      loading="lazy"
      decoding="async"
      className="h-[64px] w-auto max-w-[130px] object-contain logo-light-only"
    />
  </>
);

const GcpMark: React.FC = () => (
  <>
    <img
      src="/gcp-logo-dark.png"
      alt="Google Cloud Platform"
      loading="lazy"
      decoding="async"
      className="h-[62px] w-auto max-w-[150px] object-contain logo-dark-only"
    />
    <img
      src="/gcp-logo-light.png"
      alt="Google Cloud Platform"
      loading="lazy"
      decoding="async"
      className="h-[62px] w-auto max-w-[150px] object-contain logo-light-only"
    />
  </>
);

const AwsMark: React.FC = () => (
  <>
    <img
      src="/aws-startups-white.png"
      alt="AWS"
      loading="lazy"
      decoding="async"
      className={`${WORDMARK_SIZE} logo-dark-only`}
    />
    <img
      src="/aws-startups-dark.png"
      alt="AWS"
      loading="lazy"
      decoding="async"
      className={`${WORDMARK_SIZE} logo-light-only`}
    />
  </>
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


        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extralight text-ink tracking-tight leading-tight">
          Backed by the ecosystem
          <br />
          <span className="font-extrabold text-gradient-teal">building India's EV future.</span>
        </h2>
        <p className="text-base sm:text-lg text-ink2 max-w-2xl mx-auto mt-4 font-normal leading-relaxed">
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
