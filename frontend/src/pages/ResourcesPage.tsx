import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FileText, ArrowRight, Code2, TrendingUp, Building2 } from 'lucide-react';
import { RESOURCES, CATEGORY_LABELS } from '../data/resources';
import type { ResourceCategory } from '../data/resources';

interface ResourcesPageProps {
  onRequestDemo: () => void;
}

const CATEGORIES: { key: ResourceCategory; icon: React.ComponentType<{ className?: string }>; desc: string }[] = [
  { key: 'technical', icon: Code2, desc: 'OCPP, CMS architecture, integrations and charging infrastructure.' },
  { key: 'industry', icon: TrendingUp, desc: 'EV charging trends, CPO operations, infrastructure and ecosystem insights.' },
  { key: 'trevia', icon: Building2, desc: 'Company perspectives, product updates and lessons from building in EV infrastructure.' },
];

const FILTERS: { key: 'all' | ResourceCategory; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'technical', label: 'Technical' },
  { key: 'industry', label: 'Industry' },
  { key: 'trevia', label: 'Trevia' },
];

export const ResourcesPage: React.FC<ResourcesPageProps> = ({ onRequestDemo }) => {
  const [filter, setFilter] = useState<'all' | ResourceCategory>('all');
  const filtered = filter === 'all' ? RESOURCES : RESOURCES.filter((r) => r.category === filter);

  return (
    <div className="space-y-16 pb-24">

      {/* Hero */}
      <section className="border-b border-[#0E2C52]/80 bg-[#030A14] py-8 sm:py-10">
        <div className="max-w-7xl mx-auto px-6 space-y-3 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#061426] border border-[#0E2C52] text-[#00A09A] text-xs font-mono font-medium tracking-wider uppercase">
            <FileText className="w-3.5 h-3.5 text-[#00A09A]" />
            <span>Resources — Knowledge Hub</span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
            Insights for the EV charging ecosystem.
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Practical insights, technical explainers and perspectives on EV charging infrastructure, software and the evolving charging ecosystem.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-6 space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {CATEGORIES.map((cat) => (
            <div key={cat.key} className="p-5 rounded-xl bg-[#030A14] border border-[#0E2C52] space-y-2">
              <div className="w-8 h-8 rounded-lg bg-[#061426] border border-[#0E2C52] flex items-center justify-center text-[#00A09A]">
                <cat.icon className="w-4 h-4" />
              </div>
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#00A09A]">{CATEGORY_LABELS[cat.key]}</div>
              <p className="text-xs text-slate-400 leading-relaxed">{cat.desc}</p>
            </div>
          ))}
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap items-center gap-2">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`px-4 py-1.5 rounded-full text-xs font-mono font-semibold uppercase tracking-wider transition-all ${
                filter === f.key
                  ? 'bg-[#00A09A] text-black'
                  : 'bg-[#061426] text-slate-300 border border-[#0E2C52] hover:border-[#00A09A]/50'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </section>

      {/* Resource Grid */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filtered.map((resource) => (
            <Link
              key={resource.slug}
              to={`/resources/${resource.slug}`}
              className="p-6 rounded-2xl bg-[#030A14] border border-[#0E2C52] hover:border-[#00A09A]/50 transition-all space-y-3 flex flex-col justify-between group"
            >
              <div className="space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#00A09A] font-bold">
                  {CATEGORY_LABELS[resource.category]} · {resource.badge}
                </span>
                <h4 className="text-base font-bold text-white group-hover:text-[#00A09A] transition-colors leading-snug">
                  {resource.title}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {resource.description}
                </p>
              </div>
              <div className="pt-3 border-t border-[#0E2C52] flex items-center justify-between text-xs font-mono text-[#00A09A]">
                <span>Read</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="rounded-2xl bg-[#061426] border border-[#00A09A]/40 p-8 sm:p-12 text-center space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            Want to talk about EV charging infrastructure?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
            Have a technical, commercial or integration question? Let's discuss how Trevia can fit into your charging ecosystem.
          </p>
          <div className="pt-2">
            <button
              onClick={onRequestDemo}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#00A09A] to-[#33C4BF] text-black font-bold text-xs uppercase tracking-wider"
            >
              <span>Request a Demo</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
