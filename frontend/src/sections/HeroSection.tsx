import React from 'react';
import { ArrowRight, Zap, Coffee } from 'lucide-react';

interface HeroSectionProps {
  onExplore: () => void;
  onPartner: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExplore, onPartner }) => {
  return (
    <section className="relative pt-6 pb-12 md:pt-8 md:pb-16 overflow-hidden">
      
      {/* Background radial energy gradient */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1300px] h-[750px] bg-gradient-to-b from-[#00A8FF]/12 via-[#00F0FF]/6 to-transparent rounded-full blur-[240px] pointer-events-none" />

      {/* Hero Layout */}
      <div className="w-full pl-6 sm:pl-10 md:pl-14 lg:pl-16 xl:pl-24 pr-0 relative z-10">
        
        {/* Eyebrow */}
        <div className="mb-6 flex items-center gap-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#061426] border border-[#0E2C52] text-[#00F0FF] text-xs font-mono font-medium tracking-wider uppercase shadow-[0_0_20px_rgba(0,240,255,0.18)]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>India's Unified EV Network</span>
          </div>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-0 items-center -translate-y-[20px]">
          
          {/* Left Column: Editorial Typography & Actions */}
          <div className="lg:col-span-5 space-y-7 z-10 lg:pr-6 max-w-xl">
            <div className="space-y-1.5">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[74px] font-extralight text-white tracking-tight leading-[1.06]">
                Redefining
              </h1>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[74px] font-extralight text-white tracking-tight leading-[1.06]">
                the{' '}
                <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00A8FF] via-[#00F0FF] to-white drop-shadow-[0_0_30px_rgba(0,168,255,0.6)]">
                  CHARGE.
                </span>
              </h1>
            </div>

            <p className="text-base sm:text-lg text-slate-300/90 font-normal leading-relaxed">
              Say goodbye to range anxiety and juggling 10 different charging apps. Trevia connects India's EV chargers into one effortless map and wallet — so you can plug in, grab a coffee, and drive with confidence.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <button
                onClick={onExplore}
                className="group px-8 py-3.5 rounded-full bg-gradient-to-r from-[#00A8FF] to-[#00D2C4] hover:from-[#1B84FF] hover:to-[#00F0FF] text-black font-bold text-sm tracking-wide transition-all duration-300 shadow-[0_0_25px_rgba(0,168,255,0.4)] hover:shadow-[0_0_40px_rgba(0,240,255,0.6)] hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
              >
                <span>Explore Trevia</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={onPartner}
                className="px-8 py-3.5 rounded-full bg-[#040C18]/80 hover:bg-[#08172D] border border-[#0E2C52] hover:border-[#00A8FF] text-slate-200 hover:text-white font-medium text-sm tracking-wide transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
              >
                Partner with Trevia
              </button>
            </div>

            {/* Humanized Trust Chips */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1 text-xs text-slate-300">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#030A14] border border-[#0E284A]">
                <Zap className="w-3.5 h-3.5 text-[#00F0FF]" />
                <span>1-Tap UPI Auto-Pay</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#030A14] border border-[#0E284A]">
                <Coffee className="w-3.5 h-3.5 text-amber-400" />
                <span>Cafes &amp; Restrooms Listed</span>
              </div>
            </div>

            {/* Quick Metrics */}
            <div className="pt-6 border-t border-[#0E223D]/70 flex items-center gap-6 sm:gap-8 text-xs text-slate-400">
              <div>
                <div className="text-lg font-bold text-white flex items-center gap-1">
                  <span>99.8%</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                </div>
                <div className="mt-0.5 text-slate-400 font-medium">Session Reliability</div>
              </div>
              <div className="w-px h-8 bg-[#0E223D]" />
              <div>
                <div className="text-lg font-bold text-[#00F0FF]">1 App &amp; Wallet</div>
                <div className="mt-0.5 text-slate-400 font-medium">All 45+ Networks</div>
              </div>
              <div className="w-px h-8 bg-[#0E223D]" />
              <div>
                <div className="text-lg font-bold text-white">0 Wait Time</div>
                <div className="mt-0.5 text-slate-400 font-medium">Live Slot Booking</div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean hero visual without text overlays */}
          <div className="lg:col-span-7 flex justify-end items-center relative w-full pr-0 overflow-visible">
            
            {/* Ambient Volumetric Backglows matching latest.png charging aura */}
            <div className="absolute top-1/4 right-[45%] w-64 h-80 bg-[#00A8FF]/20 blur-[110px] rounded-full pointer-events-none" />
            <div className="absolute top-1/3 right-4 w-96 h-72 bg-[#00F0FF]/18 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-6 right-[20%] w-[480px] h-32 bg-[#00F0FF]/25 blur-[80px] rounded-full pointer-events-none" />

            {/* Main Visual Frame with Smooth Feathered Edges */}
            <div className="relative flex justify-end items-center w-full overflow-hidden">
              <img
                src="/latest.png"
                alt="TreviaEV High-Speed Charging Station and Connected Vehicle"
                loading="lazy"
                decoding="async"
                className="w-full max-w-[720px] lg:max-w-[800px] xl:max-w-[875px] h-auto object-contain object-right select-none pointer-events-none drop-shadow-[0_25px_80px_rgba(0,168,255,0.35)]"
                style={{
                  maskImage: 'radial-gradient(ellipse 92% 88% at 52% 48%, black 72%, transparent 100%)',
                  WebkitMaskImage: 'radial-gradient(ellipse 92% 88% at 52% 48%, black 72%, transparent 100%)'
                }}
                draggable={false}
              />

              {/* Feathered Edge Blends: Soft transition into #02060D background */}
              <div className="absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-[#02060D] via-[#02060D]/60 to-transparent pointer-events-none" />
              <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-[#02060D] via-[#02060D]/70 to-transparent pointer-events-none" />
              <div className="absolute top-0 inset-x-0 h-10 bg-gradient-to-b from-[#02060D] to-transparent pointer-events-none" />
              <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#02060D] to-transparent pointer-events-none" />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
