import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const StarMark: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 16 16" className={className} fill="none" aria-hidden="true">
    <path
      d="M8 0.6 9.4 6.2 15.4 8 9.4 9.8 8 15.4 6.6 9.8 0.6 8 6.6 6.2 8 0.6Z"
      fill="#00A09A"
    />
  </svg>
);

const staticRings = ['w-[40%] h-[40%]', 'w-[64%] h-[64%]', 'w-[88%] h-[88%]'];
const sonarRings = [0, 1, 2, 3];
const orbits = [
  { size: 'w-[46%] h-[46%]', duration: '16s', reverse: false, dots: 1 },
  { size: 'w-[68%] h-[68%]', duration: '26s', reverse: true, dots: 2 },
  { size: 'w-[92%] h-[92%]', duration: '38s', reverse: false, dots: 1 },
];

interface LiveDemoCtaSectionProps {
  onCta: () => void;
}

export const LiveDemoCtaSection: React.FC<LiveDemoCtaSectionProps> = ({ onCta }) => {
  return (
    <section className="relative overflow-hidden flex flex-col items-center justify-center py-16 sm:py-20">
      <div className="relative w-[min(92vw,680px)] aspect-square flex items-center justify-center">
        <div className="demo-core-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

        <div className="absolute inset-0 pointer-events-none">
          {/* Rotating radar sweep */}
          <div className="demo-radar-sweep absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[94%] h-[94%] rounded-full" />

          {/* Static reference rings */}
          {staticRings.map((size, index) => (
            <div
              key={`static-${index}`}
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#00A09A]/20 ${size}`}
            />
          ))}

          {/* Continuous sonar pings, staggered so one is always mid-expansion */}
          {sonarRings.map((index) => (
            <span
              key={`sonar-${index}`}
              className="demo-sonar-ring absolute top-1/2 left-1/2 rounded-full border border-[#00A09A]/50"
              style={{ animationDelay: `${index * 1}s` }}
            />
          ))}

          {/* Dots orbiting the core at different radii/speeds */}
          {orbits.map((orbit, index) => (
            <div
              key={`orbit-${index}`}
              className={`demo-orbit absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full ${orbit.size}`}
              style={{
                animationDuration: orbit.duration,
                animationDirection: orbit.reverse ? 'reverse' : 'normal'
              }}
            >
              <span className="demo-orbit-dot" style={{ top: 0, left: '50%' }} />
              {orbit.dots > 1 && (
                <span className="demo-orbit-dot" style={{ top: '100%', left: '50%' }} />
              )}
            </div>
          ))}
        </div>

        <div className="relative z-10 flex flex-col items-center text-center px-10 sm:px-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight leading-[1.08]">
            <span className="block">See your charging infrastructure </span>
            <span className="block">operate as one network.</span>
          </h2>
          <p className="mt-4 max-w-md text-sm sm:text-base text-slate-400 leading-relaxed">
            Explore Trevia CMS through a live walkthrough of OCPP connectivity, telemetry, remote operations and network management.
          </p>

          <button
            type="button"
            onClick={onCta}
            className="group relative mt-7 inline-flex items-center justify-center gap-2 rounded-full border border-[#7EE8E0] bg-[#7EE8E0] px-8 py-3.5 font-bold text-sm text-[#022824] transition-all duration-300 hover:bg-white hover:border-white"
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
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs sm:text-sm text-slate-500 px-6">
        <Link to="/drive" className="hover:text-[#00A09A] transition-colors">
          See Trevia Drive
        </Link>
        <Link to="/platform" className="hover:text-[#00A09A] transition-colors">
          Explore the platform
        </Link>
      </div>
    </section>
  );
};
