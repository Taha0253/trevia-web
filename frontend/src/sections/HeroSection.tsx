import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  onExplore: () => void;
  onPartner: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExplore, onPartner }) => {
  return (
    <section className="relative overflow-hidden min-h-[calc(100vh-5rem)] min-h-[calc(100dvh-5rem)] flex flex-col justify-center py-6 sm:py-8 md:py-10">
      {/* Soft breathing glow behind the headline */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-[#00A09A]/18 via-[#00A09A]/6 to-transparent rounded-full blur-[200px] pointer-events-none animate-hero-glow" />

      {/* Centered subtle background grid pattern */}
      <div className="absolute inset-0 hero-grid-pattern-center pointer-events-none opacity-40" />

      <div className="max-w-5xl mx-auto px-6 relative z-10 flex flex-col items-center text-center my-auto w-full">
        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[76px] font-extralight text-ink tracking-tight leading-[1.1] max-w-4xl mx-auto">
          The{' '}
          <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-ink via-[#00A09A] to-[#33C4BF]">
            Operating System
          </span>{' '}
          for EV charging Infrastructure.
        </h1>

        {/* Subtitle */}
        <p className="mt-5 sm:mt-6 text-base sm:text-lg md:text-xl text-ink2 font-normal leading-relaxed max-w-2xl mx-auto">
          Trevia connects multi-vendor charging infrastructure through an interoperable operating layer for CPOs, fleets and charging networks.
        </p>

        {/* CTAs */}
        <div className="mt-7 sm:mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-5">
          <button
            onClick={onExplore}
            className="group px-7 py-3 rounded-full bg-gradient-to-r from-[#00A09A] to-[#33C4BF] hover:from-[#008F8A] hover:to-[#00A09A] text-black font-bold text-sm tracking-wide transition-all duration-300 shadow-[0_0_25px_rgba(0,160,154,0.4)] hover:shadow-[0_0_40px_rgba(0,160,154,0.6)] hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 cursor-pointer"
          >
            <span>Explore Trevia</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          <button
            onClick={onPartner}
            className="px-7 py-3 rounded-full bg-surface3/80 hover:bg-surface2 border border-edge hover:border-[#00A09A] text-ink2 hover:text-ink font-medium text-sm tracking-wide transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            Partner with Trevia
          </button>
        </div>

        {/* Quick Metrics Strip */}
        <div className="mt-8 sm:mt-10 pt-6 sm:pt-7 border-t border-edge2/70 flex flex-wrap items-center justify-center gap-8 sm:gap-14 text-xs text-ink3 w-full max-w-2xl mx-auto">
          <div className="flex flex-col items-center">
            <div className="text-lg sm:text-xl font-bold text-ink flex items-center gap-1.5">
              <span>OCPP</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
            </div>
            <div className="mt-0.5 text-[11px] sm:text-xs text-ink3 font-medium tracking-wide uppercase font-mono">Native</div>
          </div>
          <div className="hidden sm:block w-px h-8 bg-surface2" />
          <div className="flex flex-col items-center">
            <div className="text-lg sm:text-xl font-bold text-ink">Multi-Vendor</div>
            <div className="mt-0.5 text-[11px] sm:text-xs text-ink3 font-medium tracking-wide uppercase font-mono">Infrastructure</div>
          </div>
          <div className="hidden sm:block w-px h-8 bg-surface2" />
          <div className="flex flex-col items-center">
            <div className="text-lg sm:text-xl font-bold text-ink">Real-Time</div>
            <div className="mt-0.5 text-[11px] sm:text-xs text-ink3 font-medium tracking-wide uppercase font-mono">Telemetry</div>
          </div>
        </div>
      </div>
    </section>
  );
};
