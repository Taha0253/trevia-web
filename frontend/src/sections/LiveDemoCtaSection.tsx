import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ScrollReveal } from '../components/ScrollReveal';

const StarMark: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 16 16" className={className} fill="none" aria-hidden="true">
    <path
      d="M8 0.6 9.4 6.2 15.4 8 9.4 9.8 8 15.4 6.6 9.8 0.6 8 6.6 6.2 8 0.6Z"
      fill="#00A09A"
    />
  </svg>
);

interface LiveDemoCtaSectionProps {
  onCta: () => void;
}

export const LiveDemoCtaSection: React.FC<LiveDemoCtaSectionProps> = ({ onCta }) => {
  return (
    <section className="relative overflow-hidden flex flex-col items-center justify-center py-20 sm:py-28">
      {/* Faint animated grid + soft breathing glow, matching the hero's treatment */}
      <div className="absolute inset-0 hero-grid-pattern-center pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-br from-[#00A09A]/18 via-[#00A09A]/6 to-transparent rounded-full blur-[160px] pointer-events-none animate-hero-glow" />

      <ScrollReveal className="relative z-10 flex flex-col items-center text-center px-6 max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight leading-[1.15]">
          See your charging infrastructure operate as one network.
        </h2>
        <p className="mt-4 max-w-md text-sm sm:text-base text-slate-400 leading-relaxed">
          Explore Trevia CMS through a live walkthrough of OCPP connectivity, telemetry, remote operations and network management.
        </p>

        <button
          type="button"
          onClick={onCta}
          className="group relative mt-7 inline-flex items-center justify-center gap-2 rounded-full border border-[#00A09A] bg-transparent px-8 py-3.5 font-bold text-sm text-white transition-all duration-300 hover:bg-[#00A09A] hover:text-black hover:-translate-y-0.5 active:translate-y-0"
        >
          <StarMark className="demo-star demo-star-tl w-4 h-4" />
          <StarMark className="demo-star demo-star-tr w-4 h-4" />
          <StarMark className="demo-star demo-star-bl w-3.5 h-3.5" />
          <StarMark className="demo-star demo-star-br w-3.5 h-3.5" />

          <span className="relative z-10 flex items-center gap-2">
            Book a CMS demo
            <ArrowRight className="w-4 h-4" />
          </span>
        </button>
      </ScrollReveal>

      <div className="relative z-10 mt-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs sm:text-sm text-slate-500 px-6">
        <Link to="/drive" className="hover:text-[#00A09A] transition-colors">
          See Trevia EV
        </Link>
        <Link to="/platform" className="hover:text-[#00A09A] transition-colors">
          Explore the platform
        </Link>
      </div>
    </section>
  );
};
