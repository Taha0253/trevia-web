import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ChevronDown,
  Menu,
  X,
  ArrowUpRight,
  CornerDownRight,
  LayoutDashboard,
  Smartphone
} from 'lucide-react';
import { CMS_CAPABILITIES, EV_CAPABILITIES } from '../data/features';

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
  const [companyOpen, setCompanyOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const location = useLocation();

  const featuresRef = useRef<HTMLDivElement>(null);
  const platformRef = useRef<HTMLDivElement>(null);
  const solutionsRef = useRef<HTMLDivElement>(null);
  const companyRef = useRef<HTMLDivElement>(null);
  const resourcesRef = useRef<HTMLDivElement>(null);
  const hoverCloseTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Close dropdowns
  const closeAllMenus = () => {
    if (hoverCloseTimeout.current) clearTimeout(hoverCloseTimeout.current);
    setFeaturesOpen(false);
    setPlatformOpen(false);
    setSolutionsOpen(false);
    setCompanyOpen(false);
    setResourcesOpen(false);
    setMobileOpen(false);
  };

  // Open a dropdown immediately on hover, closing the others
  const openMenuOnHover = useCallback((menu: 'features' | 'platform' | 'solutions' | 'company' | 'resources') => {
    if (hoverCloseTimeout.current) clearTimeout(hoverCloseTimeout.current);
    setFeaturesOpen(menu === 'features');
    setPlatformOpen(menu === 'platform');
    setSolutionsOpen(menu === 'solutions');
    setCompanyOpen(menu === 'company');
    setResourcesOpen(menu === 'resources');
  }, []);

  // Small delay so moving the cursor from the trigger into the panel doesn't close it
  const scheduleMenusClose = useCallback(() => {
    if (hoverCloseTimeout.current) clearTimeout(hoverCloseTimeout.current);
    hoverCloseTimeout.current = setTimeout(() => {
      setFeaturesOpen(false);
      setPlatformOpen(false);
      setSolutionsOpen(false);
      setCompanyOpen(false);
      setResourcesOpen(false);
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
      if (companyRef.current && !companyRef.current.contains(event.target as Node)) {
        setCompanyOpen(false);
      }
      if (resourcesRef.current && !resourcesRef.current.contains(event.target as Node)) {
        setResourcesOpen(false);
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
    <header className="sticky top-0 z-50 bg-[#02060D]/90 backdrop-blur-xl border-b border-[#0E223D]/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        
        {/* Trevia Logo Button to Home */}
        <Link to="/" onClick={closeAllMenus} className="flex items-center group outline-none focus:outline-none focus-visible:outline-none">
          <img 
            src="/Trevia.png" 
            alt="Trevia EV - Return to Home" 
            loading="lazy"
            decoding="async"
            className="h-7 sm:h-8 w-auto object-contain transition-opacity duration-200 hover:opacity-90"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-xs font-semibold uppercase tracking-wider text-slate-300">

          {/* Features Mega Menu */}
          <div
            className="relative"
            ref={featuresRef}
            onMouseEnter={() => openMenuOnHover('features')}
            onMouseLeave={scheduleMenusClose}
          >
            <button
              onClick={() => {
                setFeaturesOpen(!featuresOpen);
                setPlatformOpen(false);
                setSolutionsOpen(false);
                setCompanyOpen(false);
                setResourcesOpen(false);
              }}
              className={`px-3 py-2 rounded-lg transition-colors flex items-center gap-1 ${
                featuresOpen ? 'text-[#00A09A] bg-[#0A2240]/50' : 'hover:text-white hover:bg-slate-800/40'
              }`}
            >
              <span>Features</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${featuresOpen ? 'rotate-180 text-[#00A09A]' : ''}`} />
            </button>

            {featuresOpen && (
              <div className="absolute top-full left-0 mt-2 w-[640px] bg-[#030A14] border border-[#0E2C52] rounded-2xl shadow-2xl z-50 backdrop-blur-2xl overflow-hidden">
                <div className="grid grid-cols-2">
                  {/* Trevia CMS — emphasized as the core B2B product */}
                  <div className="p-6 border-r border-[#0E2C52]/70">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-[#061426] border border-[#00A09A]/40 flex items-center justify-center text-[#00A09A] shrink-0">
                        <LayoutDashboard className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white normal-case leading-tight">Trevia CMS</div>
                        <div className="text-[10px] font-mono text-[#00A09A] uppercase tracking-wider">For CPOs & Charging Network Operators</div>
                      </div>
                    </div>
                    <p className="text-xs text-slate-400 normal-case font-normal leading-snug mb-4">
                      {FEATURE_PRODUCTS[0].tagline}
                    </p>
                    <div className="space-y-2.5 mb-5">
                      {FEATURE_PRODUCTS[0].capabilities.map((cap) => (
                        <Link
                          key={cap.slug}
                          to={`/features#${cap.slug}`}
                          onClick={closeAllMenus}
                          className="group/item flex items-center gap-1.5 text-xs font-semibold text-slate-200 normal-case hover:text-[#00A09A] transition-colors"
                        >
                          <CornerDownRight className="w-3 h-3 text-slate-600 group-hover/item:text-[#00A09A] shrink-0 transition-colors" />
                          <span>{cap.title}</span>
                        </Link>
                      ))}
                    </div>
                    <Link
                      to={FEATURE_PRODUCTS[0].cta.to}
                      onClick={closeAllMenus}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00A09A] hover:text-white normal-case transition-colors"
                    >
                      <span>{FEATURE_PRODUCTS[0].cta.label}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                  {/* Trevia EV */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-[#061426] border border-emerald-400/40 flex items-center justify-center text-emerald-400 shrink-0">
                        <Smartphone className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white normal-case leading-tight">Trevia EV</div>
                        <div className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider">For EV Drivers & Fleets</div>
                      </div>
                    </div>
                    <p className="text-xs text-slate-400 normal-case font-normal leading-snug mb-4">
                      {FEATURE_PRODUCTS[1].tagline}
                    </p>
                    <div className="space-y-2.5 mb-5">
                      {FEATURE_PRODUCTS[1].capabilities.map((cap) => (
                        <Link
                          key={cap.slug}
                          to={`/features#${cap.slug}`}
                          onClick={closeAllMenus}
                          className="group/item flex items-center gap-1.5 text-xs font-semibold text-slate-200 normal-case hover:text-emerald-400 transition-colors"
                        >
                          <CornerDownRight className="w-3 h-3 text-slate-600 group-hover/item:text-emerald-400 shrink-0 transition-colors" />
                          <span>{cap.title}</span>
                        </Link>
                      ))}
                    </div>
                    <Link
                      to={FEATURE_PRODUCTS[1].cta.to}
                      onClick={closeAllMenus}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:text-white normal-case transition-colors"
                    >
                      <span>{FEATURE_PRODUCTS[1].cta.label}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-4 px-6 py-3 border-t border-[#0E2C52]/70 bg-[#040C18]/60">
                  <div className="flex items-center gap-4 text-[10px] font-mono text-slate-500 normal-case">
                    <span className="flex items-center gap-1"><CornerDownRight className="w-3 h-3" /> Jumps to a section on this page</span>
                    <span className="flex items-center gap-1"><ArrowUpRight className="w-3 h-3" /> Opens a different page</span>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-4 px-6 py-4 border-t border-[#0E2C52]/70 bg-[#040C18]">
                  <div>
                    <div className="text-sm font-bold text-white normal-case">One Platform. Two Experiences.</div>
                    <div className="text-xs text-slate-400 normal-case font-normal">Trevia connects the infrastructure operators running charging networks with the drivers using them.</div>
                  </div>
                  <Link
                    to="/platform"
                    onClick={closeAllMenus}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00A09A] hover:text-white normal-case transition-colors shrink-0"
                  >
                    <span>Explore Trevia Platform</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
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
            <button
              onClick={() => {
                setFeaturesOpen(false);
                setPlatformOpen(!platformOpen);
                setSolutionsOpen(false);
                setCompanyOpen(false);
                setResourcesOpen(false);
              }}
              className={`px-3 py-2 rounded-lg transition-colors flex items-center gap-1 ${
                isActive('/platform') ? 'text-[#00A09A] bg-[#0A2240]/50' : 'hover:text-white hover:bg-slate-800/40'
              }`}
            >
              <span>Platform</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${platformOpen ? 'rotate-180 text-[#00A09A]' : ''}`} />
            </button>

            {platformOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-[#030A14] border border-[#0E2C52] rounded-2xl shadow-2xl p-5 z-50 backdrop-blur-2xl">
                <div className="text-[10px] font-mono text-[#00A09A] uppercase tracking-wider mb-3">
                  Platform
                </div>
                <div className="space-y-3">
                  <Link to="/platform" onClick={closeAllMenus} className="block text-sm font-semibold text-white normal-case hover:text-[#00A09A] transition-colors">
                    Platform Overview
                  </Link>
                  <Link to="/cms" onClick={closeAllMenus} className="flex items-center gap-1.5 text-sm font-semibold text-white normal-case hover:text-[#00A09A] transition-colors">
                    <span>Trevia CMS</span>
                    <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#00A09A]/20 border border-[#00A09A]/40 text-[#00A09A] font-mono normal-case">Core</span>
                  </Link>
                  <Link to="/drive" onClick={closeAllMenus} className="block text-sm font-semibold text-white normal-case hover:text-[#00A09A] transition-colors">
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
            <button
              onClick={() => {
                setFeaturesOpen(false);
                setPlatformOpen(false);
                setSolutionsOpen(!solutionsOpen);
                setCompanyOpen(false);
                setResourcesOpen(false);
              }}
              className={`px-3 py-2 rounded-lg transition-colors flex items-center gap-1 ${
                isActive('/solutions') ? 'text-[#00A09A] bg-[#0A2240]/50' : 'hover:text-white hover:bg-slate-800/40'
              }`}
            >
              <span>Solutions</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${solutionsOpen ? 'rotate-180 text-[#00A09A]' : ''}`} />
            </button>

            {solutionsOpen && (
              <div className="absolute top-full left-0 mt-2 w-[440px] bg-[#030A14] border border-[#0E2C52] rounded-2xl shadow-2xl p-5 z-50 backdrop-blur-2xl grid grid-cols-2 gap-x-8 gap-y-5">
                <div>
                  <div className="text-[10px] font-mono text-[#00A09A] uppercase tracking-wider mb-3">
                    Charging Model
                  </div>
                  <div className="space-y-3">
                    <Link to="/solutions/cpos" onClick={closeAllMenus} className="block text-sm font-semibold text-white normal-case hover:text-[#00A09A] transition-colors">
                      CPOs & Operators
                    </Link>
                    <Link to="/solutions/fleets" onClick={closeAllMenus} className="block text-sm font-semibold text-white normal-case hover:text-[#00A09A] transition-colors">
                      Fleets
                    </Link>
                    <Link to="/solutions/enterprises" onClick={closeAllMenus} className="block text-sm font-semibold text-white normal-case hover:text-[#00A09A] transition-colors">
                      Enterprises
                    </Link>
                  </div>
                </div>

                <div>
                  <div className="text-[10px] font-mono text-[#00A09A] uppercase tracking-wider mb-3">
                    Public & Utilities
                  </div>
                  <div className="space-y-3">
                    <Link to="/solutions/energy-utilities" onClick={closeAllMenus} className="block text-sm font-semibold text-white normal-case hover:text-[#00A09A] transition-colors">
                      Energy & Utilities
                    </Link>
                    <Link to="/solutions/government" onClick={closeAllMenus} className="block text-sm font-semibold text-white normal-case hover:text-[#00A09A] transition-colors">
                      Government / Public Bodies
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Company Dropdown */}
          <div
            className="relative"
            ref={companyRef}
            onMouseEnter={() => openMenuOnHover('company')}
            onMouseLeave={scheduleMenusClose}
          >
            <button
              onClick={() => {
                setFeaturesOpen(false);
                setPlatformOpen(false);
                setCompanyOpen(!companyOpen);
                setSolutionsOpen(false);
                setResourcesOpen(false);
              }}
              className={`px-3 py-2 rounded-lg transition-colors flex items-center gap-1 ${
                isActive('/about') ? 'text-[#00A09A] bg-[#0A2240]/50' : 'hover:text-white hover:bg-slate-800/40'
              }`}
            >
              <span>Company</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${companyOpen ? 'rotate-180 text-[#00A09A]' : ''}`} />
            </button>

            {companyOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-[#030A14] border border-[#0E2C52] rounded-2xl shadow-2xl p-5 z-50 backdrop-blur-2xl">
                <div className="text-[10px] font-mono text-[#00A09A] uppercase tracking-wider mb-3">
                  Company
                </div>
                <Link to="/about" onClick={closeAllMenus} className="block group">
                  <div className="text-sm font-semibold text-white normal-case group-hover:text-[#00A09A] transition-colors">
                    About Trevia
                  </div>
                  <div className="text-xs text-slate-400 normal-case font-normal leading-snug mt-0.5">
                    Our story, traction and the people building Trevia.
                  </div>
                </Link>
              </div>
            )}
          </div>

          {/* Resources Dropdown */}
          <div
            className="relative"
            ref={resourcesRef}
            onMouseEnter={() => openMenuOnHover('resources')}
            onMouseLeave={scheduleMenusClose}
          >
            <button
              onClick={() => {
                setFeaturesOpen(false);
                setPlatformOpen(false);
                setSolutionsOpen(false);
                setCompanyOpen(false);
                setResourcesOpen(!resourcesOpen);
              }}
              className={`px-3 py-2 rounded-lg transition-colors flex items-center gap-1 ${
                isActive('/resources') ? 'text-[#00A09A] bg-[#0A2240]/50' : 'hover:text-white hover:bg-slate-800/40'
              }`}
            >
              <span>Resources</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${resourcesOpen ? 'rotate-180 text-[#00A09A]' : ''}`} />
            </button>

            {resourcesOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-[#030A14] border border-[#0E2C52] rounded-2xl shadow-2xl p-5 z-50 backdrop-blur-2xl">
                <div className="text-[10px] font-mono text-[#00A09A] uppercase tracking-wider mb-3">
                  Resources
                </div>
                <Link to="/resources" onClick={closeAllMenus} className="block group">
                  <div className="text-sm font-semibold text-white normal-case group-hover:text-[#00A09A] transition-colors">
                    Knowledge Hub
                  </div>
                  <div className="text-xs text-slate-400 normal-case font-normal leading-snug mt-0.5">
                    Insights, technical guides and perspectives on EV charging infrastructure.
                  </div>
                </Link>
              </div>
            )}
          </div>
        </nav>

        {/* Right CTA Button */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/demo"
            onClick={closeAllMenus}
            className="px-5 py-2.5 rounded-full bg-transparent border border-[#00A09A] text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 hover:bg-[#00A09A] hover:text-black hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-1.5"
          >
            <span>Request a Demo</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="lg:hidden flex items-center gap-2">
          <Link
            to="/demo"
            onClick={() => setMobileOpen(false)}
            className="px-3 py-1.5 rounded-full bg-[#00A09A] text-black text-[11px] font-bold uppercase"
          >
            Demo
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 text-slate-300 hover:text-white rounded-lg bg-[#061426] border border-[#0E2C52]"
            aria-label="Toggle Menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#030A14] border-b border-[#0E2C52] px-6 py-6 space-y-4 text-xs font-semibold uppercase tracking-wider max-h-[85vh] overflow-y-auto">
          {/* Features Mobile Group */}
          <div className="py-2 border-b border-[#0E2C52]/40 space-y-4">
            <div className="text-[10px] font-mono text-[#00A09A]">Features</div>
            {FEATURE_PRODUCTS.map((product) => (
              <div key={product.key} className="pl-3 space-y-2">
                <div className="normal-case">
                  <div className="text-xs font-bold text-white">{product.name}</div>
                  <div className="text-[9px] font-mono text-slate-500">{product.icp}</div>
                </div>
                <div className="pl-1 space-y-2 normal-case font-medium">
                  {product.capabilities.map((cap) => (
                    <Link
                      key={cap.slug}
                      to={`/features#${cap.slug}`}
                      onClick={closeAllMenus}
                      className="flex items-center gap-1.5 text-slate-300 hover:text-white"
                    >
                      <CornerDownRight className="w-3 h-3 text-slate-600 shrink-0" />
                      <span>{cap.title}</span>
                    </Link>
                  ))}
                  <Link to={product.cta.to} onClick={closeAllMenus} className="flex items-center gap-1.5 text-[#00A09A] font-bold pt-1">
                    <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
                    <span>{product.cta.label}</span>
                  </Link>
                </div>
              </div>
            ))}
            <Link to="/platform" onClick={closeAllMenus} className="block pl-3 text-slate-300 hover:text-white normal-case font-medium">
              Explore Trevia Platform &rarr;
            </Link>
          </div>

          {/* Platform Mobile Group */}
          <div className="py-2 border-b border-[#0E2C52]/40 space-y-2">
            <div className="text-[10px] font-mono text-[#00A09A]">Platform</div>
            <div className="pl-3 space-y-2 normal-case font-medium">
              <Link to="/platform" onClick={closeAllMenus} className="block text-slate-300 hover:text-white">Platform Overview</Link>
              <Link to="/cms" onClick={closeAllMenus} className="flex items-center justify-between text-slate-300 hover:text-white">
                <span>Trevia CMS</span>
                <span className="text-[9px] px-2 py-0.5 rounded bg-[#00A09A]/20 text-[#00A09A]">Core</span>
              </Link>
              <Link to="/drive" onClick={closeAllMenus} className="block text-slate-300 hover:text-white">Trevia EV</Link>
            </div>
          </div>

          {/* Solutions Mobile Group */}
          <div className="py-2 border-b border-[#0E2C52]/40 space-y-2">
            <div className="text-[10px] font-mono text-[#00A09A]">Solutions</div>
            <div className="pl-3 space-y-2 normal-case font-medium">
              <Link to="/solutions/cpos" onClick={closeAllMenus} className="block text-slate-300 hover:text-white">For CPOs & Operators</Link>
              <Link to="/solutions/fleets" onClick={closeAllMenus} className="block text-slate-300 hover:text-white">For Fleets</Link>
              <Link to="/solutions/enterprises" onClick={closeAllMenus} className="block text-slate-300 hover:text-white">For Enterprises</Link>
              <Link to="/solutions/energy-utilities" onClick={closeAllMenus} className="block text-slate-300 hover:text-white">For Energy & Utilities</Link>
              <Link to="/solutions/government" onClick={closeAllMenus} className="block text-slate-300 hover:text-white">For Government / Public Bodies</Link>
            </div>
          </div>

          {/* Company Mobile Group */}
          <div className="py-2 border-b border-[#0E2C52]/40 space-y-2">
            <div className="text-[10px] font-mono text-[#00A09A]">Company</div>
            <div className="pl-3 space-y-2 normal-case font-medium">
              <Link to="/about" onClick={closeAllMenus} className="block text-slate-300 hover:text-white">About Trevia</Link>
            </div>
          </div>

          <Link to="/resources" onClick={closeAllMenus} className="block py-2 text-slate-300 hover:text-[#00A09A] border-b border-[#0E2C52]/40">
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
