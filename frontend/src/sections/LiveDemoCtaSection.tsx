import React from 'react';
import { ArrowRight } from 'lucide-react';

import { ScrollReveal } from '../components/ScrollReveal';

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
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-ink tracking-tight leading-[1.15]">
          See your charging infrastructure <span className="font-extrabold text-gradient-teal">operate as one network.</span>
        </h2>
        <p className="mt-5 max-w-md text-base sm:text-lg text-ink2 font-normal leading-relaxed">
          Explore Trevia CMS through a live walkthrough of OCPP connectivity, telemetry, remote operations and network management.
        </p>

        <button
          type="button"
          onClick={onCta}
          className="group relative mt-7 inline-flex items-center justify-center gap-2 rounded-full border border-[#00A09A] bg-transparent px-8 py-3.5 font-bold text-sm text-ink transition-all duration-300 hover:bg-[#00A09A] hover:text-black hover:-translate-y-0.5 active:translate-y-0"
        >
          <span className="relative z-10 flex items-center gap-2">
            Book a demo
            <ArrowRight className="w-4 h-4" />
          </span>
        </button>
      </ScrollReveal>


    </section>
  );
};
