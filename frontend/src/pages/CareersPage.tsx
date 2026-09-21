import React from 'react';
import {
  Rocket,
  Flag,
  Zap,
  Users,
  Mail,
  ArrowRight,
} from 'lucide-react';

const CULTURE = [
  { icon: Flag, title: 'Founder Mindset', desc: 'Take ownership. Think like a founder, act like an owner, and solve problems beyond your job description.' },
  { icon: Rocket, title: 'Day 0 Mentality', desc: 'Stay hungry, move fast, and keep questioning what can be built better as we scale.' },
  { icon: Users, title: 'Small, Dense Team', desc: 'A lean team based out of T-Hub where every hire shapes the product and the culture.' },
  { icon: Zap, title: 'Bias for Action', desc: 'Learn by doing. Make informed decisions, execute quickly, and iterate on real infrastructure.' },
];

export const CareersPage: React.FC = () => {
  return (
    <div className="space-y-20 pb-24">

      {/* 1. Hero */}
      <section className="border-b border-edge/80 bg-surface py-14 sm:py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ink tracking-tight leading-[1.15] mb-6">
            Help build the infrastructure behind EV charging.
          </h1>

          <p className="text-base sm:text-lg text-ink2 font-normal leading-relaxed max-w-xl mx-auto">
            We're a small team based out of T-Hub, working on the operating layer connecting chargers, operators and drivers across India. We don't have open roles listed yet — if you'd like to build with us, reach out directly.
          </p>

          <div className="flex justify-center pt-8">
            <a
              href="mailto:careers@treviaev.in"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#00A09A] to-[#33C4BF] text-black font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(0,160,154,0.3)] flex items-center gap-2"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>careers@treviaev.in</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* 2. Culture */}
      <section className="max-w-7xl mx-auto px-6 space-y-8">
        <div>
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#00A09A] mb-1">
            Why Trevia
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-ink">
            A small team, building real infrastructure.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CULTURE.map((c) => (
            <div key={c.title} className="p-5 rounded-xl bg-surface border border-edge space-y-2.5">
              <div className="w-9 h-9 rounded-lg bg-surface2 border border-edge flex items-center justify-center text-[#00A09A]">
                <c.icon className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold text-ink">{c.title}</h4>
              <p className="text-xs text-ink3 leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Final CTA */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="rounded-2xl bg-surface2 border border-[#00A09A]/40 p-8 sm:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-ink mb-4">
            Think you'd be a fit, even without an open role?
          </h2>
          <p className="text-base sm:text-lg text-ink2 font-normal leading-relaxed max-w-xl mx-auto">
            We're always open to hearing from exceptional people who want to build the infrastructure layer for EV charging in India.
          </p>
          <p className="text-base sm:text-lg text-ink2 font-normal leading-relaxed mt-3">
            Send us your resume/portfolio at{' '}
            <a href="mailto:careers@treviaev.in" className="text-[#00A09A] font-semibold hover:text-ink transition-colors">
              careers@treviaev.in
            </a>{' '}
            to join our team.
          </p>
        </div>
      </section>

    </div>
  );
};

export default CareersPage;
