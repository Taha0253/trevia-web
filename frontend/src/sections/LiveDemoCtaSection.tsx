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

const rings = [
  { size: 'w-[48%] h-[48%]', delay: '0s', dots: [{ t: '6%', l: '50%' }] },
  { size: 'w-[64%] h-[64%]', delay: '0.16s', dots: [{ t: '18%', l: '12%' }, { t: '78%', l: '86%' }] },
  { size: 'w-[80%] h-[80%]', delay: '0.32s', dots: [{ t: '12%', l: '72%' }, { t: '88%', l: '28%' }] },
  { size: 'w-[96%] h-[96%]', delay: '0.48s', dots: [{ t: '30%', l: '6%' }, { t: '70%', l: '94%' }] },
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
          {rings.map((ring, index) => (
            <div
              key={index}
              className={`demo-ring-cycle absolute rounded-full border border-[#00A09A]/35 ${ring.size}`}
              style={{ animationDelay: ring.delay }}
            >
              {ring.dots.map((dot, dotIndex) => (
                <span
                  key={dotIndex}
                  className="demo-orbit-dot"
                  style={{ top: dot.t, left: dot.l }}
                />
              ))}
            </div>
          ))}
        </div>

        <div className="relative z-10 flex flex-col items-center text-center px-10 sm:px-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight leading-[1.08]">
            <span className="block">See your chargers</span>
            <span className="block">run as one network.</span>
          </h2>
          <p className="mt-4 max-w-md text-sm sm:text-base text-slate-400 leading-relaxed">
            Spend 30 minutes in the live sandbox — OCPP telemetry, remote commands, and roaming — then book a walkthrough on your own stations.
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
              Book a live demo
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
