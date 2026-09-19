import React from 'react';
import { Rocket } from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';
import { AnimatedCounter } from '../components/AnimatedCounter';

export const DriverStoriesSection: React.FC = () => {
  const milestones = [
    {
      value: <><AnimatedCounter value={170} />-station</>,
      label: 'commercial pilot secured'
    },
    {
      value: 'CMS',
      label: 'in final testing'
    },
    {
      value: 'Enterprise CPO',
      label: 'discussions underway'
    },
    {
      value: 'T-Hub Incubated',
      label: 'DPIIT Recognised'
    }
  ];

  return (
    <section className="py-20 sm:py-24 bg-[#02060D] relative overflow-hidden border-t border-[#0A1D36]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gradient-to-b from-[#00A09A]/6 to-transparent rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#040E1C] border border-[#0E284A] text-[#00A09A] text-xs font-mono font-semibold uppercase tracking-[0.2em] mb-4">
            <Rocket className="w-3.5 h-3.5 text-[#00A09A]" />
            <span>OUR MOMENTUM</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extralight text-white tracking-tight">
            Built on{' '}
            <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00A09A] to-[#00A09A]">
              real traction.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300/85 mt-3 max-w-2xl mx-auto font-normal">
            Milestones that show where Trevia stands today, from field pilots to platform readiness.
          </p>
        </ScrollReveal>

        {/* Milestones Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {milestones.map((milestone, idx) => (
            <ScrollReveal
              key={idx}
              delay={idx * 100}
              className="bg-[#030914] border border-[#0E2644] hover:border-[#00A09A]/40 rounded-2xl p-6 flex flex-col items-center text-center gap-2 hover:-translate-y-1"
            >
              <div className="text-lg sm:text-xl font-black text-white tracking-tight leading-snug">
                {milestone.value}
              </div>
              <div className="text-xs text-slate-400 font-medium">{milestone.label}</div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};
