import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ChevronDown,
  Menu,
  X,
  ArrowUpRight,
  LayoutDashboard,
  Smartphone
} from 'lucide-react';
import { CMS_CAPABILITIES, EV_CAPABILITIES } from '../data/features';
import { ThemeToggle } from './ThemeToggle';

interface FeatureProduct {
  key: 'cms' | 'ev';
  name: string;
  icp: string;
  tagline: string;
  capabilities: typeof CMS_CAPABILITIES;
  cta: { label: string; to: string };
}

const FEATURE_PRODUCTS: FeatureProduct[] = [
  {
    key: 'cms',
    name: 'Trevia CMS',
    icp: 'For CPOs & Charging Network Operators',
    tagline: 'One operating layer for multi-vendor charging infrastructure.',
    capabilities: CMS_CAPABILITIES,
    cta: { label: 'Explore Trevia CMS', to: '/cms' },
  },
  {
    key: 'ev',
    name: 'Trevia EV',
    icp: 'For EV Drivers & Fleets',
    tagline: 'One charging experience across connected networks.',
    capabilities: EV_CAPABILITIES,
    cta: { label: 'Explore Trevia EV', to: '/drive' },
  },
];

interface NavbarProps {
  onRequestDemo: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onRequestDemo }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [platformOpen, setPlatformOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const location = useLocation();

  const featuresRef = useRef<HTMLDivElement>(null);
  const platformRef = useRef<HTMLDivElement>(null);
  const solutionsRef = useRef<HTMLDivElement>(null);
  const hoverCloseTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Close dropdowns
  const closeAllMenus = () => {
    if (hoverCloseTimeout.current) clearTimeout(hoverCloseTimeout.current);
    setFeaturesOpen(false);
    setPlatformOpen(false);
    setSolutionsOpen(false);
    setMobileOpen(false);
  };

  // Open a dropdown immediately on hover, closing the others
  const openMenuOnHover = useCallback((menu: 'features' | 'platform' | 'solutions') => {
    if (hoverCloseTimeout.current) clearTimeout(hoverCloseTimeout.current);
    setFeaturesOpen(menu === 'features');
    setPlatformOpen(menu === 'platform');
    setSolutionsOpen(menu === 'solutions');
  }, []);

  // Small delay so moving the cursor from the trigger into the panel doesn't close it
  const scheduleMenusClose = useCallback(() => {
    if (hoverCloseTimeout.current) clearTimeout(hoverCloseTimeout.current);
    hoverCloseTimeout.current = setTimeout(() => {
      setFeaturesOpen(false);
      setPlatformOpen(false);
      setSolutionsOpen(false);
    }, 120);
  }, []);

  // Click outside to close desktop dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (featuresRef.current && !featuresRef.current.contains(event.target as Node)) {
        setFeaturesOpen(false);
      }
      if (platformRef.current && !platformRef.current.contains(event.target as Node)) {
        setPlatformOpen(false);
      }
      if (solutionsRef.current && !solutionsRef.current.contains(event.target as Node)) {
        setSolutionsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-50 bg-base/90 backdrop-blur-xl border-b border-edge2/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">

        {/* Trevia Logo Button to Home */}
        <Link
  to="/"
  onClick={closeAllMenus}
  className="relative flex items-center w-[160px] h-10 group"
>
  {/* Dark mode */}
  <img
    src="/Trevia.png"
    alt="Trevia"
    className="logo-dark-only absolute left-0 top-1/2 -translate-y-1/2 w-[160px] h-auto object-contain"
  />

  {/* Light mode */}
  <img
    src="/Trevia-black.png"
    alt="Trevia"
    className="logo-light-only absolute left-0 top-1/2 -translate-y-1/2 w-[160px] h-auto object-contain"
  />
</Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-xs font-semibold uppercase tracking-wider text-ink2">

          {/* Features Mega Menu */}
          <div
            className="relative"
            ref={featuresRef}
            onMouseEnter={() => openMenuOnHover('features')}
            onMouseLeave={scheduleMenusClose}
          >
            <div
              className={`rounded-lg transition-colors flex items-center ${featuresOpen ? 'text-[#00A09A] bg-surface2/50' : 'hover:text-ink hover:bg-surface2/60'
                }`}
            >
              <Link to="/features" onClick={closeAllMenus} className="pl-3 pr-1 py-2 flex items-center">
                <span>Features</span>
              </Link>
              <button
                type="button"
                aria-label="Toggle Features menu"
                onClick={() => {
                  setFeaturesOpen(!featuresOpen);
                  setPlatformOpen(false);
                  setSolutionsOpen(false);
                }}
                className="pl-1 pr-3 py-2 flex items-center"
              >
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${featuresOpen ? 'rotate-180 text-[#00A09A]' : ''}`} />
              </button>
            </div>

            {featuresOpen && (
              <div className="absolute top-full left-0 mt-2 w-[640px] bg-surface border border-edge rounded-2xl shadow-2xl z-50 backdrop-blur-2xl overflow-hidden">
                <div className="grid grid-cols-2">
                  {/* Trevia CMS — emphasized as the core B2B product */}
                  <div className="p-6 border-r border-edge/70">
                    <Link
                      to="/cms"
                      onClick={closeAllMenus}
                      className="group/header flex items-center gap-2 mb-3 cursor-pointer"
                    >
                      <div className="w-8 h-8 rounded-lg bg-surface2 border border-[#00A09A]/40 flex items-center justify-center text-[#00A09A] shrink-0 group-hover/header:border-[#00A09A] group-hover/header:bg-[#00A09A]/10 transition-colors">
                        <LayoutDashboard className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-ink group-hover/header:text-[#00A09A] transition-colors normal-case leading-tight">Trevia CMS</div>
                        <div className="text-[10px] font-mono text-[#00A09A] uppercase tracking-wider">For CPOs & Charging Network Operators</div>
                      </div>
                    </Link>
                    <p className="text-xs text-ink3 normal-case font-normal leading-snug mb-4">
                      {FEATURE_PRODUCTS[0].tagline}
                    </p>
                    <div className="space-y-2.5">
                      {FEATURE_PRODUCTS[0].capabilities.map((cap) => (
                        <div
                          key={cap.slug}
                          className="flex items-center gap-1.5 text-xs font-semibold text-ink2 normal-case"
                        >
                          <span className="w-1 h-1 rounded-full bg-slate-600 shrink-0" />
                          <span>{cap.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Trevia EV */}
                  <div className="p-6">
                    <Link
                      to="/drive"
                      onClick={closeAllMenus}
                      className="group/header flex items-center gap-2 mb-3 cursor-pointer"
                    >
                      <div className="w-8 h-8 rounded-lg bg-surface2 border border-[#00A09A]/40 flex items-center justify-center text-[#00A09A] shrink-0 group-hover/header:border-[#00A09A] group-hover/header:bg-[#00A09A]/10 transition-colors">
                        <Smartphone className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-ink group-hover/header:text-[#00A09A] transition-colors normal-case leading-tight">Trevia EV</div>
                        <div className="text-[10px] font-mono text-[#00A09A] uppercase tracking-wider">For EV Drivers & Fleets</div>
                      </div>
                    </Link>
                    <p className="text-xs text-ink3 normal-case font-normal leading-snug mb-4">
                      {FEATURE_PRODUCTS[1].tagline}
                    </p>
                    <div className="space-y-2.5">
                      {FEATURE_PRODUCTS[1].capabilities.map((cap) => (
                        <div
                          key={cap.slug}
                          className="flex items-center gap-1.5 text-xs font-semibold text-ink2 normal-case"
                        >
                          <span className="w-1 h-1 rounded-full bg-slate-600 shrink-0" />
                          <span>{cap.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Platform Dropdown */}
          <div
            className="relative"
            ref={platformRef}
            onMouseEnter={() => openMenuOnHover('platform')}
            onMouseLeave={scheduleMenusClose}
          >
            <div
              className={`rounded-lg transition-colors flex items-center ${isActive('/platform') ? 'text-[#00A09A] bg-surface2/50' : 'hover:text-ink hover:bg-surface2/60'
                }`}
            >
              <Link to="/platform" onClick={closeAllMenus} className="pl-3 pr-1 py-2 flex items-center">
                <span>Platform</span>
              </Link>
              <button
                type="button"
                aria-label="Toggle Platform menu"
                onClick={() => {
                  setFeaturesOpen(false);
                  setPlatformOpen(!platformOpen);
                  setSolutionsOpen(false);
                }}
                className="pl-1 pr-3 py-2 flex items-center"
              >
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${platformOpen ? 'rotate-180 text-[#00A09A]' : ''}`} />
              </button>
            </div>

            {platformOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-surface border border-edge rounded-2xl shadow-2xl p-5 z-50 backdrop-blur-2xl">
                <div className="text-[10px] font-mono text-[#00A09A] uppercase tracking-wider mb-3">
                  Platform
                </div>
                <div className="space-y-3">
                  <Link to="/platform" onClick={closeAllMenus} className="block text-sm font-semibold text-ink normal-case hover:text-[#00A09A] transition-colors">
                    Platform Overview
                  </Link>
                  <Link to="/cms" onClick={closeAllMenus} className="flex items-center gap-1.5 text-sm font-semibold text-ink normal-case hover:text-[#00A09A] transition-colors">
                    <span>Trevia CMS</span>
                    <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#00A09A]/20 border border-[#00A09A]/40 text-[#00A09A] font-mono normal-case">Core</span>
                  </Link>
                  <Link to="/drive" onClick={closeAllMenus} className="block text-sm font-semibold text-ink normal-case hover:text-[#00A09A] transition-colors">
                    Trevia EV
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Solutions Dropdown */}
          <div
            className="relative"
            ref={solutionsRef}
            onMouseEnter={() => openMenuOnHover('solutions')}
            onMouseLeave={scheduleMenusClose}
          >
            <div
              className={`rounded-lg transition-colors flex items-center ${isActive('/solutions') ? 'text-[#00A09A] bg-surface2/50' : 'hover:text-ink hover:bg-surface2/60'
                }`}
            >
              <Link to="/solutions/cpos" onClick={closeAllMenus} className="pl-3 pr-1 py-2 flex items-center">
                <span>Solutions</span>
              </Link>
              <button
                type="button"
                aria-label="Toggle Solutions menu"
                onClick={() => {
                  setFeaturesOpen(false);
                  setPlatformOpen(false);
                  setSolutionsOpen(!solutionsOpen);
                }}
                className="pl-1 pr-3 py-2 flex items-center"
              >
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${solutionsOpen ? 'rotate-180 text-[#00A09A]' : ''}`} />
              </button>
            </div>

            {solutionsOpen && (
              <div className="absolute top-full left-0 mt-2 w-[440px] bg-surface border border-edge rounded-2xl shadow-2xl p-5 z-50 backdrop-blur-2xl grid grid-cols-2 gap-x-8 gap-y-5">
                <div>
                  <div className="text-[10px] font-mono text-[#00A09A] uppercase tracking-wider mb-3">
                    Charging Model
                  </div>
                  <div className="space-y-3">
                    <Link to="/solutions/cpos" onClick={closeAllMenus} className="block text-sm font-semibold text-ink normal-case hover:text-[#00A09A] transition-colors">
                      CPOs & Operators
                    </Link>
                    <Link to="/solutions/fleets" onClick={closeAllMenus} className="block text-sm font-semibold text-ink normal-case hover:text-[#00A09A] transition-colors">
                      Fleets
                    </Link>
                    <Link to="/solutions/enterprises" onClick={closeAllMenus} className="block text-sm font-semibold text-ink normal-case hover:text-[#00A09A] transition-colors">
                      Enterprises
                    </Link>
                  </div>
                </div>

                <div>
                  <div className="text-[10px] font-mono text-[#00A09A] uppercase tracking-wider mb-3">
                    Public & Utilities
                  </div>
                  <div className="space-y-3">
                    <Link to="/solutions/energy-utilities" onClick={closeAllMenus} className="block text-sm font-semibold text-ink normal-case hover:text-[#00A09A] transition-colors">
                      Energy & Utilities
                    </Link>
                    <Link to="/solutions/government" onClick={closeAllMenus} className="block text-sm font-semibold text-ink normal-case hover:text-[#00A09A] transition-colors">
                      Government / Public Bodies
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Company */}
          <Link
            to="/about"
            onClick={closeAllMenus}
            className={`px-3 py-2 rounded-lg transition-colors ${isActive('/about') ? 'text-[#00A09A] bg-surface2/50' : 'hover:text-ink hover:bg-surface2/60'
              }`}
          >
            Company
          </Link>

          {/* Resources */}
          <Link
            to="/resources"
            onClick={closeAllMenus}
            className={`px-3 py-2 rounded-lg transition-colors ${isActive('/resources') ? 'text-[#00A09A] bg-surface2/50' : 'hover:text-ink hover:bg-surface2/60'
              }`}
          >
            Resources
          </Link>
        </nav>

        {/* Right CTA Button */}
        <div className="hidden lg:flex items-center gap-4">
          <ThemeToggle />
          <Link
            to="/demo"
            onClick={closeAllMenus}
            className="px-5 py-2.5 rounded-full bg-transparent border border-[#00A09A] text-ink text-xs font-bold uppercase tracking-wider transition-all duration-300 hover:bg-[#00A09A] hover:text-black hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-1.5"
          >
            <span>Request a Demo</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="lg:hidden flex items-center gap-2">
          <ThemeToggle />
          <Link
            to="/demo"
            onClick={() => setMobileOpen(false)}
            className="px-3 py-1.5 rounded-full bg-[#00A09A] text-black text-[11px] font-bold uppercase"
          >
            Demo
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 text-ink2 hover:text-ink rounded-lg bg-surface2 border border-edge"
            aria-label="Toggle Menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-surface border-b border-edge px-6 py-6 space-y-4 text-xs font-semibold uppercase tracking-wider max-h-[85vh] overflow-y-auto">
          {/* Features Mobile Group */}
          <div className="py-2 border-b border-edge/40 space-y-2">
            <div className="text-[10px] font-mono text-[#00A09A]">Features</div>
            <div className="pl-3 space-y-2 normal-case font-medium">
              <Link to="/features" onClick={closeAllMenus} className="block text-ink2 hover:text-[#00A09A]">
                Features Overview
              </Link>
              <Link to="/cms" onClick={closeAllMenus} className="flex items-center justify-between text-ink2 hover:text-[#00A09A]">
                <span>Trevia CMS</span>
                <span className="text-[9px] px-2 py-0.5 rounded bg-[#00A09A]/20 text-[#00A09A]">Core</span>
              </Link>
              <Link to="/drive" onClick={closeAllMenus} className="flex items-center justify-between text-ink2 hover:text-[#00A09A]">
                <span>Trevia EV</span>
                <span className="text-[9px] px-2 py-0.5 rounded bg-[#00A09A]/20 text-[#00A09A]">Drivers</span>
              </Link>
            </div>
          </div>

          {/* Platform Mobile Group */}
          <div className="py-2 border-b border-edge/40 space-y-2">
            <div className="text-[10px] font-mono text-[#00A09A]">Platform</div>
            <div className="pl-3 space-y-2 normal-case font-medium">
              <Link to="/platform" onClick={closeAllMenus} className="block text-ink2 hover:text-ink">Platform Overview</Link>
              <Link to="/cms" onClick={closeAllMenus} className="flex items-center justify-between text-ink2 hover:text-ink">
                <span>Trevia CMS</span>
                <span className="text-[9px] px-2 py-0.5 rounded bg-[#00A09A]/20 text-[#00A09A]">Core</span>
              </Link>
              <Link to="/drive" onClick={closeAllMenus} className="block text-ink2 hover:text-ink">Trevia EV</Link>
            </div>
          </div>

          {/* Solutions Mobile Group */}
          <div className="py-2 border-b border-edge/40 space-y-2">
            <div className="text-[10px] font-mono text-[#00A09A]">Solutions</div>
            <div className="pl-3 space-y-2 normal-case font-medium">
              <Link to="/solutions/cpos" onClick={closeAllMenus} className="block text-ink2 hover:text-ink">For CPOs & Operators</Link>
              <Link to="/solutions/fleets" onClick={closeAllMenus} className="block text-ink2 hover:text-ink">For Fleets</Link>
              <Link to="/solutions/enterprises" onClick={closeAllMenus} className="block text-ink2 hover:text-ink">For Enterprises</Link>
              <Link to="/solutions/energy-utilities" onClick={closeAllMenus} className="block text-ink2 hover:text-ink">For Energy & Utilities</Link>
              <Link to="/solutions/government" onClick={closeAllMenus} className="block text-ink2 hover:text-ink">For Government / Public Bodies</Link>
            </div>
          </div>

          {/* Company Mobile Group */}
          <div className="py-2 border-b border-edge/40 space-y-2">
            <div className="text-[10px] font-mono text-[#00A09A]">Company</div>
            <div className="pl-3 space-y-2 normal-case font-medium">
              <Link to="/about" onClick={closeAllMenus} className="block text-ink2 hover:text-ink">About Trevia</Link>
            </div>
          </div>

          <Link to="/resources" onClick={closeAllMenus} className="block py-2 text-ink2 hover:text-[#00A09A] border-b border-edge/40">
            Resources
          </Link>

          <div className="pt-2">
            <button
              onClick={() => {
                closeAllMenus();
                onRequestDemo();
              }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#00A09A] to-[#33C4BF] text-black font-bold uppercase tracking-wider text-center"
            >
              Request a Demo
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
