import React from 'react';
import { SOCIAL_LINKS, type SocialLinkItem } from '../data/socials';

export const InstagramIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export const LinkedInIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

export const XIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export const SocialIcon: React.FC<{ id: SocialLinkItem['id']; className?: string }> = ({
  id,
  className = 'w-4 h-4',
}) => {
  switch (id) {
    case 'linkedin':
      return <LinkedInIcon className={className} />;
    case 'x':
      return <XIcon className={className} />;
    case 'instagram':
      return <InstagramIcon className={className} />;
  }
};

interface SocialLinksProps {
  variant?: 'icons-only' | 'pills' | 'compact-pills';
  className?: string;
}

export const SocialLinks: React.FC<SocialLinksProps> = ({
  variant = 'icons-only',
  className = '',
}) => {
  if (variant === 'pills') {
    return (
      <div className={`flex flex-wrap items-center gap-2.5 ${className}`}>
        {SOCIAL_LINKS.map((item) => (
          <a
            key={item.id}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.ariaLabel}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface2 border border-edge text-ink2 text-xs font-medium hover:text-[#00A09A] hover:border-[#00A09A] hover:bg-[#00A09A]/10 transition-all duration-200 group shadow-sm"
          >
            <SocialIcon id={item.id} className="w-3.5 h-3.5 transition-transform duration-200 group-hover:scale-110" />
            <span>{item.name}</span>
          </a>
        ))}
      </div>
    );
  }

  if (variant === 'compact-pills') {
    return (
      <div className={`flex flex-wrap items-center gap-2 ${className}`}>
        {SOCIAL_LINKS.map((item) => (
          <a
            key={item.id}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.ariaLabel}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-surface border border-edge text-ink3 text-[11px] hover:text-[#00A09A] hover:border-[#00A09A] transition-all duration-200 group"
          >
            <SocialIcon id={item.id} className="w-3 h-3 transition-transform duration-200 group-hover:scale-110" />
            <span>{item.name}</span>
          </a>
        ))}
      </div>
    );
  }

  // Default: icons-only with sleek circular button styling
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {SOCIAL_LINKS.map((item) => (
        <a
          key={item.id}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.ariaLabel}
          title={item.ariaLabel}
          className="w-9 h-9 rounded-full bg-surface border border-edge flex items-center justify-center text-ink3 hover:text-ink hover:border-[#00A09A] hover:bg-[#00A09A]/15 hover:shadow-[0_0_15px_rgba(0,160,154,0.3)] transition-all duration-200 group"
        >
          <SocialIcon id={item.id} className="w-4 h-4 transition-transform duration-200 group-hover:scale-115 text-current" />
        </a>
      ))}
    </div>
  );
};
