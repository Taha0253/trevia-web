import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ChevronDown,
  Lightbulb,
  RefreshCw,
  Network,
  Target,
  Eye,
  Flag,
  Sunrise,
  MessageSquare,
  Zap,
  Hourglass,
  ExternalLink,
} from 'lucide-react';
import { CmsDashboardMock } from '../../components/CmsDashboardMock';

interface AboutPageProps {
  onRequestDemo: () => void;
}

const STORY_STEPS = [
  { label: 'Idea', desc: 'A simpler way to charge, for EV drivers.' },
  { label: 'Pivot', desc: 'The real bottleneck was the infrastructure layer.' },
  { label: 'Trevia Ecosystem', desc: 'Trevia CMS — the operating layer for charging networks.' },
];

const TRACTION = [
  { value: '170', label: 'Charging Stations', desc: 'Commercial pilot secured' },
  { value: 'CPOs', label: 'Enterprise Discussions', desc: 'Additional commercial opportunities in progress' },
  { value: 'Ecosystem', label: 'T-Hub • DPIIT • Google for Startups', desc: 'Incubation & program support' },
  // { value: 'MoU', label: 'Pilot Signing', desc: 'Underway' },
];

const PRINCIPLES = [
  { icon: Flag, title: 'Founder Mindset', desc: 'Take ownership. Think like a founder, act like an owner, and solve problems beyond your job description.' },
  { icon: Sunrise, title: 'Day 0 Mentality', desc: 'Stay hungry, move fast, and keep questioning what can be built better. Never become comfortable with "the way it’s always been done."' },
  { icon: MessageSquare, title: 'Radical Openness', desc: 'Give and receive honest feedback. Challenge ideas, not people, and keep the best argument — not the loudest voice.' },
  { icon: Zap, title: 'Bias for Action', desc: 'Learn by doing. Make informed decisions, execute quickly, measure the outcome, and iterate.' },
  { icon: Hourglass, title: 'Build for the Long Term', desc: 'Prioritize what creates lasting value over short-term appearances. Build relationships, products and systems that compound.' },
];

const MILESTONES = [
  { year: '2025', text: 'Trevia founded and incubated at T-Hub' },
  { year: '2025', text: 'Pivoted toward EV charging infrastructure software' },
  { year: '2026', text: 'Trevia CMS developed' },
  { year: '2026', text: '170-station commercial pilot secured' },
  { year: '2026', text: 'Enterprise CPO discussions underway' },
];

export const AboutPage: React.FC<AboutPageProps> = ({ onRequestDemo: _onRequestDemo }) => {
  return (
    <div className="space-y-20 pb-24">

      {/* 1. Hero */}
      <section className="border-b border-edge/80 bg-surface py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
            <div className="lg:col-span-3 space-y-4">


              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ink tracking-tight leading-[1.15]">
                Building the <span className="font-extrabold text-gradient-teal">digital infrastructure</span> behind EV charging.
              </h1>

              <p className="text-base sm:text-lg text-ink2 max-w-2xl mx-auto mt-4 font-normal leading-relaxed">
                Trevia is building the operating system for EV charging infrastructure, connecting multi-vendor charging hardware through an interoperable software layer for CPOs, fleets and charging networks.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/careers"
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#00A09A] to-[#33C4BF] text-black font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(0,160,154,0.3)] flex items-center gap-2"
                >
                  <span>Join Trevia</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <a
                  href="#traction"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-ink2 hover:text-ink transition-colors uppercase tracking-wider"
                >
                  <span>View Our Traction</span>
                  <ChevronDown className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-2">
              <CmsDashboardMock compact />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Our Story */}
      <section className="max-w-5xl mx-auto px-6 space-y-8">
        <div>
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#00A09A] mb-1">
            Our Story
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-ink">
            From an EV charging idea to infrastructure software.
          </h2>
        </div>

        <p className="text-sm text-ink2 leading-relaxed">
          Trevia started with a simple question: why should EV charging infrastructure remain fragmented across hardware vendors, networks and software systems? We evolved from building around the charging experience to building the digital operating layer behind it. Today, Trevia CMS connects multi-vendor chargers through OCPP, giving charging operators a unified platform to monitor and operate their networks.
        </p>

        <div className="flex flex-col sm:flex-row items-stretch gap-3">
          {STORY_STEPS.map((step, i) => (
            <React.Fragment key={step.label}>
              <div className="flex-1 p-4 rounded-xl bg-surface border border-edge space-y-1.5">
                <div className="w-7 h-7 rounded-lg bg-surface2 border border-[#00A09A]/40 flex items-center justify-center text-[#00A09A]">
                  {i === 0 ? <Lightbulb className="w-3.5 h-3.5" /> : i === 1 ? <RefreshCw className="w-3.5 h-3.5" /> : <Network className="w-3.5 h-3.5" />}
                </div>
                <div className="text-xs font-mono uppercase tracking-wider text-[#00A09A]">{step.label}</div>
                <p className="text-xs text-ink3 leading-relaxed">{step.desc}</p>
              </div>
              {i < STORY_STEPS.length - 1 && (
                <div className="hidden sm:flex items-center justify-center text-[#00A09A]">
                  <ArrowRight className="w-4 h-4" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* 3. Mission & Vision */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 sm:p-8 rounded-2xl bg-surface border border-edge space-y-3">
            <div className="w-9 h-9 rounded-lg bg-surface2 border border-edge flex items-center justify-center text-[#00A09A]">
              <Target className="w-4 h-4" />
            </div>
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#00A09A]">Mission</div>
            <p className="text-sm text-ink2 leading-relaxed">
              Make EV charging infrastructure easier to connect, operate and scale.
            </p>
          </div>
          <div className="p-6 sm:p-8 rounded-2xl bg-surface border border-edge space-y-3">
            <div className="w-9 h-9 rounded-lg bg-surface2 border border-edge flex items-center justify-center text-[#00A09A]">
              <Eye className="w-4 h-4" />
            </div>
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#00A09A]">Vision</div>
            <p className="text-sm text-ink2 leading-relaxed">
              A connected EV charging ecosystem where infrastructure can operate across hardware and networks without fragmentation.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Traction */}
      <section id="traction" className="max-w-7xl mx-auto px-6 space-y-8 scroll-mt-24">
        <div>
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#00A09A] mb-1">
            Traction
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-ink">
            From product development to commercial validation.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {TRACTION.map((t) => (
            <div
              key={t.label}
              className="p-6 rounded-2xl bg-surface2 border border-[#00A09A]/30 text-center space-y-2 flex flex-col justify-center"
            >
              <div className="text-3xl font-black text-ink font-mono">{t.value}</div>
              <div className="text-xs font-bold text-ink">{t.label}</div>
              <div className="text-[11px] text-ink3">{t.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. What We Believe */}
      <section className="max-w-7xl mx-auto px-6 space-y-8">
        <div>
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#00A09A] mb-1">
            Our Principles
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-ink">
            Built around how infrastructure actually works.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
          {PRINCIPLES.map((p, idx) => (
            <div
              key={p.title}
              className={`p-5 rounded-xl bg-surface border border-edge transition-colors hover:border-[#00A09A]/40 ${
                idx < 3 ? 'md:col-span-2' : 'md:col-span-3'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-surface2 border border-edge flex items-center justify-center text-[#00A09A] shrink-0">
                  <p.icon className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-ink">{p.title}</h4>
              </div>
              {/* <p className="text-xs text-ink3 leading-relaxed">{p.desc}</p> */}
            </div>
          ))}
        </div>
      </section>

      {/* 6. Founder + Milestones */}
      <section className="max-w-5xl mx-auto px-6 space-y-10">
        <div className="space-y-6">
          <div>
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#00A09A] mb-1">
              Founder
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-ink">
              Building Trevia from the ground up.
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-start gap-8 p-8 sm:p-12 rounded-2xl bg-surface border border-edge">
            <img
              src="/John.jpeg"
              alt="John Garapati, Founder & CEO of Trevia EV Technologies"
              loading="lazy"
              decoding="async"
              className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl object-cover border border-edge shrink-0"
            />
            <div className="space-y-4">
              <p className="text-base text-ink2 leading-relaxed">
                John Garapati is the Founder &amp; CEO of Trevia EV Technologies, building software infrastructure for the rapidly evolving EV charging ecosystem. He leads Trevia across product, GTM, partnerships, sales &amp; marketing.
              </p>
              <div>
                <div className="text-base font-bold text-ink">John Garapati</div>
                <div className="text-sm text-ink3">Founder &amp; CEO, Trevia EV Technologies</div>
              </div>
              <a
                href="https://www.linkedin.com/in/johnkiran7/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-[#00A09A] hover:text-ink transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Connect on LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Milestones */}
        <div className="space-y-4">
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#00A09A]">
            Journey
          </div>
          <div className="flex flex-col sm:flex-row items-stretch gap-2">
            {MILESTONES.map((m, i) => (
              <div key={i} className="flex-1 p-4 rounded-lg bg-surface border border-edge text-center">
                <div className="text-sm font-mono font-bold text-[#00A09A] mb-1.5">{m.year}</div>
                <div className="text-sm text-ink2 leading-snug">{m.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Final CTA */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="rounded-2xl bg-surface2 border border-[#00A09A]/40 p-8 sm:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-ink mb-4">
            Building the future of EV charging infrastructure together.
          </h2>
          <p className="text-base sm:text-lg text-ink2 font-normal leading-relaxed max-w-xl mx-auto">
            Whether you operate charging infrastructure, build charging hardware, or are building the next layer of EV mobility, let's connect.
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
