import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ChevronDown,
  Menu,
  X,
  ArrowUpRight
} from 'lucide-react';

interface FeatureItem {
  title: string;
  desc: string;
  to: string;
}

const FEATURE_COLUMNS: { heading: string; items: FeatureItem[] }[] = [
  {
    heading: 'Highlights',
    items: [
      { title: 'OCPP Connectivity', desc: 'Connect and communicate with chargers.', to: '/cms#ocpp-connectivity' },
      { title: 'Real-Time Monitoring', desc: 'See charging activity as it happens.', to: '/cms#real-time-monitoring' },
      { title: 'Remote Operations', desc: 'Control and manage charging remotely.', to: '/cms#remote-operations' },
      { title: 'Fault Visibility', desc: 'Identify charger issues quickly.', to: '/cms#fault-visibility' },
    ],
  },
  {
    heading: 'Public Charging',
    items: [
      { title: 'Sessions & Transactions', desc: 'Track sessions and charging activity.', to: '/cms#sessions-transactions' },
      { title: 'Multi-Site Management', desc: 'Manage charging sites from one place.', to: '/cms#multi-site-management' },
      { title: 'Tariff Management', desc: 'Configure flexible charging tariffs.', to: '/cms#tariff-management' },
      { title: 'Analytics', desc: 'Turn charging data into insights.', to: '/cms#analytics' },
    ],
  },
  {
    heading: 'Fleet Charging',
    items: [
      { title: 'APIs & Integrations', desc: 'Connect Trevia with your systems.', to: '/cms#apis-integrations' },
      { title: 'Hardware Agnostic', desc: 'Work across different charger hardware.', to: '/cms#hardware-agnostic' },
      { title: 'Digital Infrastructure', desc: 'Build scalable charging operations.', to: '/cms#digital-infrastructure' },
      { title: 'Network Visibility', desc: 'Get visibility across your network.', to: '/cms#network-visibility' },
    ],
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
  const [techOpen, setTechOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const location = useLocation();

  const featuresRef = useRef<HTMLDivElement>(null);
  const platformRef = useRef<HTMLDivElement>(null);
  const solutionsRef = useRef<HTMLDivElement>(null);
  const techRef = useRef<HTMLDivElement>(null);
  const companyRef = useRef<HTMLDivElement>(null);
  const hoverCloseTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Close dropdowns
  const closeAllMenus = () => {
    if (hoverCloseTimeout.current) clearTimeout(hoverCloseTimeout.current);
    setFeaturesOpen(false);
    setPlatformOpen(false);
    setSolutionsOpen(false);
    setTechOpen(false);
    setCompanyOpen(false);
    setMobileOpen(false);
  };

  // Open a dropdown immediately on hover, closing the others
  const openMenuOnHover = useCallback((menu: 'features' | 'platform' | 'solutions' | 'technology' | 'company') => {
    if (hoverCloseTimeout.current) clearTimeout(hoverCloseTimeout.current);
    setFeaturesOpen(menu === 'features');
    setPlatformOpen(menu === 'platform');
    setSolutionsOpen(menu === 'solutions');
    setTechOpen(menu === 'technology');
    setCompanyOpen(menu === 'company');
  }, []);

  // Small delay so moving the cursor from the trigger into the panel doesn't close it
  const scheduleMenusClose = useCallback(() => {
    if (hoverCloseTimeout.current) clearTimeout(hoverCloseTimeout.current);
    hoverCloseTimeout.current = setTimeout(() => {
      setFeaturesOpen(false);
      setPlatformOpen(false);
      setSolutionsOpen(false);
      setTechOpen(false);
      setCompanyOpen(false);
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
      if (techRef.current && !techRef.current.contains(event.target as Node)) {
        setTechOpen(false);
      }
      if (companyRef.current && !companyRef.current.contains(event.target as Node)) {
        setCompanyOpen(false);
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
        <Link to="/" onClick={closeAllMenus} className="flex items-center group">
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
                setTechOpen(false);
                setCompanyOpen(false);
              }}
              className={`px-3 py-2 rounded-lg transition-colors flex items-center gap-1 ${
                featuresOpen ? 'text-[#00A09A] bg-[#0A2240]/50' : 'hover:text-white hover:bg-slate-800/40'
              }`}
            >
              <span>Features</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${featuresOpen ? 'rotate-180 text-[#00A09A]' : ''}`} />
            </button>

            {featuresOpen && (
              <div className="absolute top-full left-0 mt-2 w-[720px] bg-[#030A14] border border-[#0E2C52] rounded-2xl shadow-2xl z-50 backdrop-blur-2xl overflow-hidden">
                <div className="grid grid-cols-3 gap-x-8 p-6">
                  {FEATURE_COLUMNS.map((col) => (
                    <div key={col.heading}>
                      <div className="text-[10px] font-mono text-[#00A09A] uppercase tracking-wider mb-4">
                        {col.heading}
                      </div>
                      <div className="space-y-4">
                        {col.items.map((item) => (
                          <Link
                            key={item.title}
                            to={item.to}
                            onClick={closeAllMenus}
                            className="block group"
                          >
                            <div className="text-sm font-semibold text-white normal-case group-hover:text-[#00A09A] transition-colors">
                              {item.title}
                            </div>
                            <div className="text-xs text-slate-400 normal-case font-normal leading-snug mt-0.5">
                              {item.desc}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between px-6 py-4 border-t border-[#0E2C52]/70 bg-[#040C18]">
                  <div>
                    <div className="text-sm font-bold text-white normal-case">Trevia Platform</div>
                    <div className="text-xs text-slate-400 normal-case font-normal">The operating layer for EV charging.</div>
                  </div>
                  <Link
                    to="/cms#capabilities"
                    onClick={closeAllMenus}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00A09A] hover:text-white normal-case transition-colors"
                  >
                    <span>See all features</span>
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
                setTechOpen(false);
                setCompanyOpen(false);
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
                    Driver Platform
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
                setTechOpen(false);
                setCompanyOpen(false);
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

          {/* Technology Dropdown */}
          <div
            className="relative"
            ref={techRef}
            onMouseEnter={() => openMenuOnHover('technology')}
            onMouseLeave={scheduleMenusClose}
          >
            <button
              onClick={() => {
                setFeaturesOpen(false);
                setPlatformOpen(false);
                setTechOpen(!techOpen);
                setSolutionsOpen(false);
                setCompanyOpen(false);
              }}
              className={`px-3 py-2 rounded-lg transition-colors flex items-center gap-1 ${
                isActive('/technology') ? 'text-[#00A09A] bg-[#0A2240]/50' : 'hover:text-white hover:bg-slate-800/40'
              }`}
            >
              <span>Technology</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${techOpen ? 'rotate-180 text-[#00A09A]' : ''}`} />
            </button>

            {techOpen && (
              <div className="absolute top-full left-0 mt-2 w-56 bg-[#030A14] border border-[#0E2C52] rounded-2xl shadow-2xl p-5 z-50 backdrop-blur-2xl">
                <div className="text-[10px] font-mono text-[#00A09A] uppercase tracking-wider mb-3">
                  Technology
                </div>
                <div className="space-y-3">
                  <Link to="/technology" onClick={closeAllMenus} className="block text-sm font-semibold text-white normal-case hover:text-[#00A09A] transition-colors">
                    OCPP & Interoperability
                  </Link>
                  <Link to="/technology/apis" onClick={closeAllMenus} className="block text-sm font-semibold text-white normal-case hover:text-[#00A09A] transition-colors">
                    APIs & Integrations
                  </Link>
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
                setTechOpen(false);
              }}
              className={`px-3 py-2 rounded-lg transition-colors flex items-center gap-1 ${
                isActive('/about') || isActive('/traction') ? 'text-[#00A09A] bg-[#0A2240]/50' : 'hover:text-white hover:bg-slate-800/40'
              }`}
            >
              <span>Company</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${companyOpen ? 'rotate-180 text-[#00A09A]' : ''}`} />
            </button>

            {companyOpen && (
              <div className="absolute top-full left-0 mt-2 w-56 bg-[#030A14] border border-[#0E2C52] rounded-2xl shadow-2xl p-5 z-50 backdrop-blur-2xl">
                <div className="text-[10px] font-mono text-[#00A09A] uppercase tracking-wider mb-3">
                  Company
                </div>
                <div className="space-y-3">
                  <Link to="/about" onClick={closeAllMenus} className="block text-sm font-semibold text-white normal-case hover:text-[#00A09A] transition-colors">
                    About Trevia
                  </Link>
                  <Link to="/traction" onClick={closeAllMenus} className="block text-sm font-semibold text-white normal-case hover:text-[#00A09A] transition-colors">
                    Traction & Journey
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Resources */}
          {/* Resources */}
          <Link
            to="/resources"
            onClick={closeAllMenus}
            className={`px-3 py-2 rounded-lg transition-colors ${
              isActive('/resources') ? 'text-[#00A09A] bg-[#0A2240]/50' : 'hover:text-white hover:bg-slate-800/40'
            }`}
          >
            Resources
          </Link>
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
          <div className="py-2 border-b border-[#0E2C52]/40 space-y-3">
            <div className="text-[10px] font-mono text-[#00A09A]">Features</div>
            {FEATURE_COLUMNS.map((col) => (
              <div key={col.heading} className="pl-3 space-y-2">
                <div className="text-[9px] font-mono text-slate-500 normal-case">{col.heading}</div>
                <div className="pl-1 space-y-2 normal-case font-medium">
                  {col.items.map((item) => (
                    <Link key={item.title} to={item.to} onClick={closeAllMenus} className="block text-slate-300 hover:text-white">
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
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
              <Link to="/drive" onClick={closeAllMenus} className="block text-slate-300 hover:text-white">Driver Platform</Link>
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

          {/* Technology Mobile Group */}
          <div className="py-2 border-b border-[#0E2C52]/40 space-y-2">
            <div className="text-[10px] font-mono text-[#00A09A]">Technology</div>
            <div className="pl-3 space-y-2 normal-case font-medium">
              <Link to="/technology" onClick={closeAllMenus} className="block text-slate-300 hover:text-white">OCPP & Interoperability</Link>
              <Link to="/technology/apis" onClick={closeAllMenus} className="block text-slate-300 hover:text-white">APIs & Integrations</Link>
            </div>
          </div>

          {/* Company Mobile Group */}
          <div className="py-2 border-b border-[#0E2C52]/40 space-y-2">
            <div className="text-[10px] font-mono text-[#00A09A]">Company</div>
            <div className="pl-3 space-y-2 normal-case font-medium">
              <Link to="/about" onClick={closeAllMenus} className="block text-slate-300 hover:text-white">About Trevia</Link>
              <Link to="/traction" onClick={closeAllMenus} className="block text-slate-300 hover:text-white">Traction & Journey</Link>
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
