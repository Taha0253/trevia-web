import React, { useState } from 'react';
import { 
  Layers, Share2, Gauge, Sliders, Code2, Monitor, Smartphone 
} from 'lucide-react';

export const DigitalInfrastructureSection: React.FC = () => {
  const [activeQuadrant, setActiveQuadrant] = useState<number>(1);

  return (
    <section id="infrastructure" className="py-24 bg-[#060B09] relative overflow-hidden border-t border-[#0F1E19]">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00A09A]/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Eyebrow matching Image 5 */}
        <div className="mb-4">
          <span className="text-[#00A09A] font-mono text-xs sm:text-sm font-bold tracking-[0.25em] uppercase">
            DIGITAL INFRASTRUCTURE
          </span>
        </div>

        {/* Headline and Subtitle Grid matching Image 5 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-20">
          <div className="lg:col-span-7">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
              The layer <br />
              behind <br />
              connected <br />
              charging.
            </h2>
          </div>
          <div className="lg:col-span-5 pb-2">
            <p className="text-base sm:text-lg text-neutral-300 font-normal leading-relaxed">
              Trevia connects charging infrastructure, operational systems, and digital experiences through one intelligent infrastructure layer.
            </p>
          </div>
        </div>

        {/* Concentric Radar / Orbital Infrastructure Graphic matching Image 5 */}
        <div className="relative max-w-5xl mx-auto py-12">
          
          {/* Circular Rings Background */}
          <div className="relative flex items-center justify-center min-h-[540px]">
            
            {/* Outer Ring 3 */}
            <div className="absolute w-[500px] h-[500px] sm:w-[560px] sm:h-[560px] rounded-full border border-[#00A09A]/15 pointer-events-none" />
            
            {/* Middle Ring 2 */}
            <div className="absolute w-[360px] h-[360px] sm:w-[420px] sm:h-[420px] rounded-full border border-[#00A09A]/20 pointer-events-none" />
            
            {/* Inner Ring 1 */}
            <div className="absolute w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] rounded-full border border-[#00A09A]/30 pointer-events-none bg-[#07130F]/40" />

            {/* Radar Sweep Effect */}
            <div className="absolute w-[460px] h-[460px] rounded-full pointer-events-none animate-radar">
              <div className="w-1/2 h-1/2 bg-gradient-to-br from-[#00A09A]/20 to-transparent rounded-tl-full origin-bottom-right" />
            </div>

            {/* Crosshair Axes */}
            <div className="absolute w-full max-w-[620px] h-px bg-[#00A09A]/15 pointer-events-none" />
            <div className="absolute h-full max-h-[620px] w-px bg-[#00A09A]/15 pointer-events-none" />

            {/* Center Core: TREVIA Infrastructure */}
            <div className="relative z-20 w-36 h-36 rounded-full bg-[#050D0A] border-2 border-[#00A09A] shadow-[0_0_40px_rgba(0,160,154,0.3)] flex flex-col items-center justify-center p-4 text-center group cursor-pointer">
              <div className="w-10 h-10 rounded-xl bg-[#00A09A]/10 flex items-center justify-center text-[#00A09A] mb-1">
                <Layers className="w-6 h-6 animate-pulse" />
              </div>
              <span className="text-sm font-extrabold tracking-wider text-white trevia-brand-text">
                TREVIA
              </span>
              <span className="text-[11px] font-medium text-[#00A09A]">
                Infrastructure
              </span>
            </div>

            {/* 4 Quadrants Overlayed around the ring */}
            <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-14 pointer-events-auto">
              
              {/* Quadrant 01 - Top Left: Connectivity */}
              <div 
                onClick={() => setActiveQuadrant(1)}
                className={`cursor-pointer transition-all duration-300 p-5 rounded-2xl flex flex-col justify-start md:pr-12 ${
                  activeQuadrant === 1 ? 'bg-[#0A1A14]/80 border border-[#00A09A]/40' : 'hover:bg-white/[0.02]'
                }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-full bg-[#0E2720] border border-[#00A09A]/40 flex items-center justify-center text-[#00A09A]">
                    <Share2 className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-mono font-bold text-[#00A09A]">01</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Connectivity</h4>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Connect networks, operators, and charging infrastructure through one digital layer.
                </p>
              </div>

              {/* Quadrant 02 - Top Right: Real-time data */}
              <div 
                onClick={() => setActiveQuadrant(2)}
                className={`cursor-pointer transition-all duration-300 p-5 rounded-2xl flex flex-col justify-start md:pl-12 text-left ${
                  activeQuadrant === 2 ? 'bg-[#0A1A14]/80 border border-[#00A09A]/40' : 'hover:bg-white/[0.02]'
                }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-full bg-[#0E2720] border border-[#00A09A]/40 flex items-center justify-center text-[#00A09A]">
                    <Gauge className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-mono font-bold text-[#00A09A]">02</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Real-time data</h4>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Bring charger status, sessions, faults, and network activity into a real-time operational view.
                </p>
              </div>

              {/* Quadrant 03 - Bottom Left: Digital operations */}
              <div 
                onClick={() => setActiveQuadrant(3)}
                className={`cursor-pointer transition-all duration-300 p-5 rounded-2xl flex flex-col justify-end md:pr-12 ${
                  activeQuadrant === 3 ? 'bg-[#0A1A14]/80 border border-[#00A09A]/40' : 'hover:bg-white/[0.02]'
                }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-full bg-[#0E2720] border border-[#00A09A]/40 flex items-center justify-center text-[#00A09A]">
                    <Sliders className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-mono font-bold text-[#00A09A]">03</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Digital operations</h4>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Monitor, configure, troubleshoot, and operate charging infrastructure remotely.
                </p>
              </div>

              {/* Quadrant 04 - Bottom Right: APIs & integrations */}
              <div 
                onClick={() => setActiveQuadrant(4)}
                className={`cursor-pointer transition-all duration-300 p-5 rounded-2xl flex flex-col justify-end md:pl-12 text-left ${
                  activeQuadrant === 4 ? 'bg-[#0A1A14]/80 border border-[#00A09A]/40' : 'hover:bg-white/[0.02]'
                }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-full bg-[#0E2720] border border-[#00A09A]/40 flex items-center justify-center text-[#00A09A]">
                    <Code2 className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-mono font-bold text-[#00A09A]">04</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-2">APIs & integrations</h4>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Connect Trevia with the systems, applications, and workflows already used across your business.
                </p>
              </div>

            </div>

          </div>

          {/* Bottom Connectors Leading to CMS and EV App matching Image 5 */}
          <div className="mt-14 flex flex-col items-center">
            
            {/* Vertical connector line */}
            <div className="w-px h-12 bg-gradient-to-b from-[#00A09A]/50 to-[#00A09A]/10" />

            {/* Horizontal branch line */}
            <div className="w-48 h-px bg-[#00A09A]/30" />

            {/* Two Endpoints: Trevia CMS & Trevia EV App */}
            <div className="grid grid-cols-2 gap-12 sm:gap-24 pt-6 text-center">
              
              {/* Trevia CMS */}
              <div className="flex flex-col items-center group cursor-pointer">
                <div className="w-12 h-12 rounded-2xl bg-[#091813] border border-[#143D30] text-[#00A09A] flex items-center justify-center mb-3 shadow-lg group-hover:border-[#00A09A] group-hover:scale-110 transition-all">
                  <Monitor className="w-6 h-6" />
                </div>
                <span className="text-base font-bold text-white">Trevia CMS</span>
                <span className="text-xs text-neutral-400 mt-0.5">Operator experience</span>
              </div>

              {/* Trevia EV App */}
              <div className="flex flex-col items-center group cursor-pointer">
                <div className="w-12 h-12 rounded-2xl bg-[#091813] border border-[#143D30] text-[#00A09A] flex items-center justify-center mb-3 shadow-lg group-hover:border-[#00A09A] group-hover:scale-110 transition-all">
                  <Smartphone className="w-6 h-6" />
                </div>
                <span className="text-base font-bold text-white">Trevia EV App</span>
                <span className="text-xs text-neutral-400 mt-0.5">Driver experience</span>
              </div>

            </div>

            {/* Bottom Tagline matching Image 5 */}
            <div className="mt-12 text-center">
              <p className="text-xs sm:text-sm text-neutral-400 max-w-xl mx-auto">
                One infrastructure layer powering connected experiences across the charging ecosystem.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
