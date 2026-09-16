import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  onExplore: () => void;
  onPartner: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExplore, onPartner }) => {
  return (
    <section className="relative pt-16 pb-20 md:pt-28 md:pb-36 overflow-hidden">
      
      {/* Background radial energy gradient */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1300px] h-[750px] bg-gradient-to-b from-[#00A8FF]/12 via-[#00F0FF]/6 to-transparent rounded-full blur-[240px] pointer-events-none" />

      {/* Hero Layout: Left has generous padding, Right goes completely edge-to-edge (0 right padding) */}
      <div className="w-full pl-6 sm:pl-10 md:pl-14 lg:pl-16 xl:pl-24 pr-0 relative z-10">
        
        {/* Eyebrow / Brand positioning */}
        <div className="mb-8 flex items-center gap-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#061426] border border-[#0E2C52] text-[#00F0FF] text-xs font-mono font-medium tracking-wider uppercase shadow-[0_0_20px_rgba(0,240,255,0.18)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] animate-ping" />
            <span>India's Unified EV Charging Platform</span>
          </div>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-center">
          
          {/* Left Column: Editorial Typography & Actions */}
          <div className="lg:col-span-5 space-y-8 z-10 lg:pr-8 max-w-xl">
            <div className="space-y-2">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[76px] font-extralight text-white tracking-tight leading-[1.08]">
                Redefining
              </h1>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[76px] font-extralight text-white tracking-tight leading-[1.08]">
                the{' '}
                <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00A8FF] via-[#00F0FF] to-white drop-shadow-[0_0_30px_rgba(0,168,255,0.6)]">
                  CHARGE.
                </span>
              </h1>
            </div>

            <p className="text-base sm:text-lg text-slate-300/85 font-normal leading-relaxed">
              Find, access and pay at charging stations across multiple CPO networks with one seamless platform and one wallet.
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

            {/* Quick Metrics */}
            <div className="pt-8 border-t border-[#0E223D]/70 flex items-center gap-8 text-xs text-slate-400">
              <div>
                <div className="text-base font-bold text-white">100%</div>
                <div className="mt-0.5 text-slate-400">OCPP 2.0.1 Ready</div>
              </div>
              <div className="w-px h-8 bg-[#0E223D]" />
              <div>
                <div className="text-base font-bold text-[#00F0FF]">Single Wallet</div>
                <div className="mt-0.5 text-slate-400">Multi-CPO Roaming</div>
              </div>
              <div className="w-px h-8 bg-[#0E223D]" />
              <div>
                <div className="text-base font-bold text-white">&lt; 14ms</div>
                <div className="mt-0.5 text-slate-400">Telemetry Latency</div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean hero visual flush against the right edge */}
          <div className="lg:col-span-7 flex justify-end items-center relative w-full pr-0 overflow-visible">
            
            {/* Ambient Volumetric Backglows */}
            <div className="absolute top-1/4 right-[25%] w-64 h-80 bg-[#00F0FF]/15 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute top-1/3 right-0 w-96 h-72 bg-[#00A8FF]/18 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-8 right-[30%] w-72 h-36 bg-[#00F0FF]/10 blur-[80px] rounded-full pointer-events-none" />

            {/* Main Visual Frame: 0 Right Padding, Flush to Screen Right */}
            <div className="relative flex justify-end items-center w-full">
              <img
                src="/landed.png"
                alt="TreviaEV High-Speed Charging Station and Electric Vehicle"
                className="w-full max-w-[760px] lg:max-w-[840px] xl:max-w-[920px] h-auto object-contain object-right select-none pointer-events-none drop-shadow-[0_20px_70px_rgba(0,168,255,0.25)]"
                draggable={false}
              />
              
              {/* Ground fade gradient */}
              <div className="absolute bottom-0 inset-x-0 h-10 bg-gradient-to-t from-[#02060D] via-[#02060D]/30 to-transparent pointer-events-none" />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
