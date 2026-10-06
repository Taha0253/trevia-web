export interface SocialLinkItem {
  id: 'linkedin' | 'x' | 'instagram';
  name: string;
  handle: string;
  url: string;
  ariaLabel: string;
}

export const SOCIAL_LINKS: SocialLinkItem[] = [
  {
    id: 'linkedin',
    name: 'LinkedIn',
    handle: 'trevia-ev',
    url: 'https://www.linkedin.com/company/trevia-ev/',
    ariaLabel: 'Follow Trevia EV on LinkedIn',
  },
  {
    id: 'x',
    name: 'X',
    handle: '@TreviaEV_India',
    url: 'https://x.com/TreviaEV_India',
    ariaLabel: 'Follow Trevia EV on X (formerly Twitter)',
  },
  {
    id: 'instagram',
    name: 'Instagram',
    handle: '@trevia.ev',
    url: 'https://www.instagram.com/trevia.ev/',
    ariaLabel: 'Follow Trevia EV on Instagram',
  },
];
