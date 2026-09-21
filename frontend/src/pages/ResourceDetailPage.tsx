import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Clock, User, Calendar, Radio } from 'lucide-react';
import { RESOURCES, CATEGORY_LABELS } from '../data/resources';

export const ResourceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const resource = RESOURCES.find((r) => r.slug === slug);

  if (!resource) {
    return <Navigate to="/resources" replace />;
  }

  const headings = resource.body.filter((b) => b.type === 'h2') as { type: 'h2'; text: string }[];
  const related = RESOURCES.filter((r) => r.slug !== resource.slug).slice(0, 2);

  return (
    <div className="pb-24">

      {/* Header */}
      <section className="border-b border-edge/80 bg-surface py-10 sm:py-14">
        <div className="max-w-5xl mx-auto px-6 space-y-4">
          <Link to="/resources" className="inline-flex items-center gap-1.5 text-xs font-mono text-ink3 hover:text-ink transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Resources</span>
          </Link>

          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#00A09A]">
            {CATEGORY_LABELS[resource.category]} — {resource.badge}
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-ink tracking-tight leading-tight">
            {resource.title}
          </h1>

          <p className="text-sm sm:text-base text-ink2 leading-relaxed max-w-2xl">
            {resource.description}
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs text-ink3 font-mono pt-1">
            <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" />{new Date(resource.publishedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{resource.readingTime}</span>
            <span className="flex items-center gap-1.5"><User className="w-3.5 h-3.5" />{resource.author}</span>
            {resource.protocolVersion && (
              <span className="flex items-center gap-1.5"><Radio className="w-3.5 h-3.5 text-[#00A09A]" />{resource.protocolVersion}</span>
            )}
          </div>
        </div>
      </section>

      {/* Content + TOC */}
      <section className="max-w-5xl mx-auto px-6 pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          <article className="lg:col-span-3 space-y-5 prose-invert">
            {resource.body.map((block, i) => {
              if (block.type === 'h2') {
                const anchor = block.text.toLowerCase().replace(/[^a-z0-9]+/g, '-');
                return (
                  <h2 key={i} id={anchor} className="text-lg sm:text-xl font-bold text-ink pt-4 scroll-mt-24">
                    {block.text}
                  </h2>
                );
              }
              if (block.type === 'p') {
                return (
                  <p key={i} className="text-sm text-ink2 leading-relaxed">
                    {block.text}
                  </p>
                );
              }
              if (block.type === 'list') {
                return (
                  <ul key={i} className="space-y-2 text-sm text-ink2 leading-relaxed list-disc pl-5">
                    {block.items.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                );
              }
              if (block.type === 'code') {
                return (
                  <pre key={i} className="bg-surface border border-edge rounded-xl p-4 overflow-x-auto text-xs font-mono text-[#00A09A] leading-relaxed">
                    <code>{block.code}</code>
                  </pre>
                );
              }
              return null;
            })}
          </article>

          {/* Table of Contents */}
          {headings.length > 0 && (
            <aside className="hidden lg:block lg:col-span-1">
              <div className="sticky top-28 space-y-3 p-5 rounded-xl bg-surface border border-edge">
                <div className="text-[10px] font-mono uppercase tracking-wider text-ink4">On This Page</div>
                <div className="space-y-2">
                  {headings.map((h, i) => {
                    const anchor = h.text.toLowerCase().replace(/[^a-z0-9]+/g, '-');
                    return (
                      <a
                        key={i}
                        href={`#${anchor}`}
                        className="block text-xs text-ink3 hover:text-[#00A09A] transition-colors leading-snug"
                      >
                        {h.text}
                      </a>
                    );
                  })}
                </div>
              </div>
            </aside>
          )}
        </div>
      </section>

      {/* Related Resources */}
      {related.length > 0 && (
        <section className="max-w-5xl mx-auto px-6 pt-16 space-y-4">
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#00A09A]">
            Related Resources
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {related.map((r) => (
              <Link
                key={r.slug}
                to={`/resources/${r.slug}`}
                className="p-5 rounded-xl bg-surface border border-edge hover:border-[#00A09A]/50 transition-all space-y-2 group"
              >
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#00A09A]">{r.badge}</span>
                <h4 className="text-sm font-bold text-ink group-hover:text-[#00A09A] transition-colors leading-snug">{r.title}</h4>
                <span className="inline-flex items-center gap-1 text-xs font-mono text-ink3 group-hover:text-ink transition-colors">
                  <span>Read</span>
                  <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}

    </div>
  );
};
