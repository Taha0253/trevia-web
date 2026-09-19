import React from 'react';
import { ArrowRight, Zap, Coffee } from 'lucide-react';

interface HeroSectionProps {
  onExplore: () => void;
  onPartner: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExplore, onPartner }) => {
  return (
    <section className="relative min-h-[calc(100svh-5rem)] flex items-center overflow-hidden pt-4 pb-8 lg:pt-0 lg:pb-0">
      {/* Faint animated grid + soft breathing glow behind the headline */}
      <div className="absolute inset-0 hero-grid-pattern pointer-events-none" />
      <div className="absolute top-1/2 left-[28%] w-[900px] h-[900px] bg-gradient-to-br from-[#00A09A]/16 via-[#00A09A]/6 to-transparent rounded-full blur-[180px] pointer-events-none animate-hero-glow" />

      <div className="w-full pl-6 sm:pl-10 md:pl-14 lg:pl-16 xl:pl-20 pr-0 relative z-10">
        <div className="mb-5 flex items-center gap-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#061426] border border-[#0E2C52] text-[#00A09A] text-xs font-mono font-medium tracking-wider uppercase shadow-[0_0_20px_rgba(0,160,154,0.18)]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>India's Unified EV Network</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-4 lg:gap-0">
          <div className="lg:col-span-5 space-y-6 z-10 lg:pr-2 max-w-xl">
            <div className="space-y-1">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[58px] font-extralight text-white tracking-tight leading-[1.15]">
                The Operating System for{' '}
                <span className="font-extrabold text-[#00A09A]">
                  EV charging Infrastructure.
                </span>
              </h1>
            </div>

            <p className="text-base sm:text-lg text-slate-300/90 font-normal leading-relaxed">
              Trevia connects multi-vendor charging infrastructure through an interoperable operating layer for CPOs, fleets and charging networks.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-1">
              <button
                onClick={onExplore}
                className="group px-8 py-3.5 rounded-full bg-gradient-to-r from-[#00A09A] to-[#33C4BF] hover:from-[#008F8A] hover:to-[#00A09A] text-black font-bold text-sm tracking-wide transition-all duration-300 shadow-[0_0_25px_rgba(0,160,154,0.4)] hover:shadow-[0_0_40px_rgba(0,160,154,0.6)] hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
              >
                <span>Explore Trevia</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={onPartner}
                className="px-8 py-3.5 rounded-full bg-[#040C18]/80 hover:bg-[#08172D] border border-[#0E2C52] hover:border-[#00A09A] text-slate-200 hover:text-white font-medium text-sm tracking-wide transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
              >
                Partner with Trevia
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-2.5 pt-1 text-xs text-slate-300">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#030A14] border border-[#0E284A]">
                <Zap className="w-3.5 h-3.5 text-[#00A09A]" />
                <span>1-Tap UPI Auto-Pay</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#030A14] border border-[#0E284A]">
                <Coffee className="w-3.5 h-3.5 text-amber-400" />
                <span>Cafes &amp; Restrooms Listed</span>
              </div>
            </div>

            <div className="pt-5 border-t border-[#0E223D]/70 flex items-center gap-6 sm:gap-8 text-xs text-slate-400">
              <div>
                <div className="text-lg font-bold text-white flex items-center gap-1">
                  <span>OCPP</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                </div>
                <div className="mt-0.5 text-slate-400 font-medium">Native</div>
              </div>
              <div className="w-px h-8 bg-[#0E223D]" />
              <div>
                <div className="text-lg font-bold text-white">Multi-Vendor </div>
                <div className="mt-0.5 text-slate-400 font-medium">Infrastructure </div>
              </div>
              <div className="w-px h-8 bg-[#0E223D]" />
              <div>
                <div className="text-lg font-bold text-white">Real-Time</div>
                <div className="mt-0.5 text-slate-400 font-medium">Telemetry</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 relative w-full -ml-2 sm:-ml-4 lg:-ml-10 xl:-ml-14">
            <div className="absolute top-1/4 right-[30%] w-64 h-64 bg-[#00A09A]/12 blur-[100px] rounded-full pointer-events-none" />

            <div className="relative flex justify-end items-center w-full">
              <img
                src="/hero-ev-dark.png"
                alt="Electric vehicle charging at a Trevia-connected station"
                loading="eager"
                decoding="async"
                className="w-full max-w-none h-auto lg:h-[min(68vh,620px)] object-contain object-right select-none pointer-events-none"
                style={{
                  maskImage: 'radial-gradient(ellipse 90% 86% at 58% 50%, black 74%, transparent 100%)',
                  WebkitMaskImage: 'radial-gradient(ellipse 90% 86% at 58% 50%, black 74%, transparent 100%)'
                }}
                draggable={false}
              />

              <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#02060D] to-transparent pointer-events-none" />
              <div className="absolute bottom-0 inset-x-0 h-14 bg-gradient-to-t from-[#02060D] via-[#02060D]/70 to-transparent pointer-events-none" />
              <div className="absolute top-0 inset-x-0 h-10 bg-gradient-to-b from-[#02060D] to-transparent pointer-events-none" />
              <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#02060D] to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
