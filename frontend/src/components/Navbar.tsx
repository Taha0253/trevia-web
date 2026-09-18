import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  ChevronDown, 
  Menu, 
  X, 
  Layers, 
  Radio, 
  Truck, 
  Building2, 
  Zap, 
  Landmark, 
  Code2, 
  TrendingUp, 
  Info, 
  ArrowUpRight
} from 'lucide-react';

interface NavbarProps {
  onRequestDemo: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onRequestDemo }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [techOpen, setTechOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const location = useLocation();

  const solutionsRef = useRef<HTMLDivElement>(null);
  const techRef = useRef<HTMLDivElement>(null);
  const companyRef = useRef<HTMLDivElement>(null);

  // Close dropdowns
  const closeAllMenus = () => {
    setSolutionsOpen(false);
    setTechOpen(false);
    setCompanyOpen(false);
    setMobileOpen(false);
  };

  // Click outside to close desktop dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
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
          
          {/* Platform */}
          <Link
            to="/platform"
            onClick={closeAllMenus}
            className={`px-3 py-2 rounded-lg transition-colors ${
              isActive('/platform') ? 'text-[#00F0FF] bg-[#0A2240]/50' : 'hover:text-white hover:bg-slate-800/40'
            }`}
          >
            Platform
          </Link>

          {/* Trevia CMS (Primary Product) */}
          <Link
            to="/cms"
            onClick={closeAllMenus}
            className={`px-3 py-2 rounded-lg transition-all flex items-center gap-1.5 ${
              isActive('/cms') 
                ? 'text-[#00F0FF] bg-[#0A2240]/70 border border-[#00A8FF]/40' 
                : 'text-white hover:text-[#00F0FF] hover:bg-slate-800/40'
            }`}
          >
            <span>Trevia CMS</span>
            <span className="text-[9px] px-1.5 py-0.5 rounded bg-gradient-to-r from-[#00A8FF]/20 to-[#00F0FF]/20 border border-[#00F0FF]/40 text-[#00F0FF] font-mono normal-case">
              Core
            </span>
          </Link>

          {/* Trevia Drive */}
          <Link
            to="/drive"
            onClick={closeAllMenus}
            className={`px-3 py-2 rounded-lg transition-colors ${
              isActive('/drive') ? 'text-[#00F0FF] bg-[#0A2240]/50' : 'hover:text-white hover:bg-slate-800/40'
            }`}
          >
            Trevia Drive
          </Link>

          {/* Solutions Dropdown */}
          <div className="relative" ref={solutionsRef}>
            <button
              onClick={() => {
                setSolutionsOpen(!solutionsOpen);
                setTechOpen(false);
                setCompanyOpen(false);
              }}
              className={`px-3 py-2 rounded-lg transition-colors flex items-center gap-1 ${
                isActive('/solutions') ? 'text-[#00F0FF] bg-[#0A2240]/50' : 'hover:text-white hover:bg-slate-800/40'
              }`}
            >
              <span>Solutions</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${solutionsOpen ? 'rotate-180 text-[#00F0FF]' : ''}`} />
            </button>

            {solutionsOpen && (
              <div className="absolute top-full left-0 mt-2 w-80 bg-[#030A14] border border-[#0E2C52] rounded-2xl shadow-2xl p-2 z-50 backdrop-blur-2xl">
                <div className="text-[10px] font-mono text-slate-400 px-3 py-1.5 uppercase tracking-wider border-b border-[#0E2C52]/50">
                  Buyer-Specific Solutions
                </div>
                <div className="space-y-1 mt-1">
                  <Link
                    to="/solutions/cpos"
                    onClick={closeAllMenus}
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#0A2240]/70 transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-[#061426] border border-[#0E2C52] text-[#00F0FF] group-hover:border-[#00A8FF]">
                      <Radio className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white normal-case">For CPOs & Operators</div>
                      <div className="text-[11px] text-slate-400 normal-case font-normal leading-tight">Centralised control across chargers, sites & vendors</div>
                    </div>
                  </Link>

                  <Link
                    to="/solutions/fleets"
                    onClick={closeAllMenus}
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#0A2240]/70 transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-[#061426] border border-[#0E2C52] text-[#00A8FF] group-hover:border-[#00A8FF]">
                      <Truck className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white normal-case">For Fleets</div>
                      <div className="text-[11px] text-slate-400 normal-case font-normal leading-tight">Charging visibility & telemetry tied to fleet schedules</div>
                    </div>
                  </Link>

                  <Link
                    to="/solutions/enterprises"
                    onClick={closeAllMenus}
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#0A2240]/70 transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-[#061426] border border-[#0E2C52] text-emerald-400 group-hover:border-emerald-400">
                      <Building2 className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white normal-case">For Enterprises</div>
                      <div className="text-[11px] text-slate-400 normal-case font-normal leading-tight">Workplace & destination charging as a managed asset</div>
                    </div>
                  </Link>

                  <Link
                    to="/solutions/energy-utilities"
                    onClick={closeAllMenus}
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#0A2240]/70 transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-[#061426] border border-[#0E2C52] text-amber-400 group-hover:border-amber-400">
                      <Zap className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white normal-case">For Energy & Utilities</div>
                      <div className="text-[11px] text-slate-400 normal-case font-normal leading-tight">Network-level grid visibility & interoperable data</div>
                    </div>
                  </Link>

                  <Link
                    to="/solutions/government"
                    onClick={closeAllMenus}
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#0A2240]/70 transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-[#061426] border border-[#0E2C52] text-indigo-400 group-hover:border-indigo-400">
                      <Landmark className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white normal-case">For Government / Public Bodies</div>
                      <div className="text-[11px] text-slate-400 normal-case font-normal leading-tight">Coordinated oversight for public charging rollouts</div>
                    </div>
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Technology Dropdown */}
          <div className="relative" ref={techRef}>
            <button
              onClick={() => {
                setTechOpen(!techOpen);
                setSolutionsOpen(false);
                setCompanyOpen(false);
              }}
              className={`px-3 py-2 rounded-lg transition-colors flex items-center gap-1 ${
                isActive('/technology') ? 'text-[#00F0FF] bg-[#0A2240]/50' : 'hover:text-white hover:bg-slate-800/40'
              }`}
            >
              <span>Technology</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${techOpen ? 'rotate-180 text-[#00F0FF]' : ''}`} />
            </button>

            {techOpen && (
              <div className="absolute top-full left-0 mt-2 w-72 bg-[#030A14] border border-[#0E2C52] rounded-2xl shadow-2xl p-2 z-50 backdrop-blur-2xl">
                <Link
                  to="/technology"
                  onClick={closeAllMenus}
                  className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#0A2240]/70 transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-[#061426] border border-[#0E2C52] text-[#00F0FF] group-hover:border-[#00A8FF]">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white normal-case">OCPP & Interoperability</div>
                    <div className="text-[11px] text-slate-400 normal-case font-normal">OCPP 1.6J WebSocket architecture</div>
                  </div>
                </Link>
                <Link
                  to="/technology/apis"
                  onClick={closeAllMenus}
                  className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#0A2240]/70 transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-[#061426] border border-[#0E2C52] text-[#00A8FF] group-hover:border-[#00A8FF]">
                    <Code2 className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white normal-case">APIs & Integrations</div>
                    <div className="text-[11px] text-slate-400 normal-case font-normal">REST telemetry, webhooks & exports</div>
                  </div>
                </Link>
              </div>
            )}
          </div>

          {/* Company Dropdown */}
          <div className="relative" ref={companyRef}>
            <button
              onClick={() => {
                setCompanyOpen(!companyOpen);
                setSolutionsOpen(false);
                setTechOpen(false);
              }}
              className={`px-3 py-2 rounded-lg transition-colors flex items-center gap-1 ${
                isActive('/about') || isActive('/traction') ? 'text-[#00F0FF] bg-[#0A2240]/50' : 'hover:text-white hover:bg-slate-800/40'
              }`}
            >
              <span>Company</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${companyOpen ? 'rotate-180 text-[#00F0FF]' : ''}`} />
            </button>

            {companyOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-[#030A14] border border-[#0E2C52] rounded-2xl shadow-2xl p-2 z-50 backdrop-blur-2xl">
                <Link
                  to="/about"
                  onClick={closeAllMenus}
                  className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#0A2240]/70 transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-[#061426] border border-[#0E2C52] text-[#00F0FF] group-hover:border-[#00A8FF]">
                    <Info className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white normal-case">About Trevia</div>
                    <div className="text-[11px] text-slate-400 normal-case font-normal">Mission, category & foundation</div>
                  </div>
                </Link>
                <Link
                  to="/traction"
                  onClick={closeAllMenus}
                  className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#0A2240]/70 transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-[#061426] border border-[#0E2C52] text-emerald-400 group-hover:border-emerald-400">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white normal-case">Traction & Journey</div>
                    <div className="text-[11px] text-slate-400 normal-case font-normal">DPIIT, T-Hub & verified milestones</div>
                  </div>
                </Link>
              </div>
            )}
          </div>

          {/* Resources */}
          {/* Resources */}
          <Link
            to="/resources"
            onClick={closeAllMenus}
            className={`px-3 py-2 rounded-lg transition-colors ${
              isActive('/resources') ? 'text-[#00F0FF] bg-[#0A2240]/50' : 'hover:text-white hover:bg-slate-800/40'
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
            className="px-5 py-2.5 rounded-full bg-transparent border border-[#00A09A] text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 hover:bg-[#00A09A] hover:border-[#00A09A] hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-1.5"
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
            className="px-3 py-1.5 rounded-full bg-[#00A8FF] text-black text-[11px] font-bold uppercase"
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
          <Link to="/demo" onClick={closeAllMenus} className="block py-2 text-[#00F0FF] hover:text-white border-b border-[#0E2C52]/40 flex items-center justify-between">
            <span>Interactive Demo & Sandbox</span>
            <span className="text-[9px] px-2 py-0.5 rounded bg-[#00F0FF]/20 text-[#00F0FF]">Live</span>
          </Link>
          <Link to="/platform" onClick={closeAllMenus} className="block py-2 text-slate-300 hover:text-[#00F0FF] border-b border-[#0E2C52]/40">
            Platform
          </Link>
          <Link to="/cms" onClick={closeAllMenus} className="block py-2 text-white hover:text-[#00F0FF] border-b border-[#0E2C52]/40 flex items-center justify-between">
            <span>Trevia CMS</span>
            <span className="text-[9px] px-2 py-0.5 rounded bg-[#00F0FF]/20 text-[#00F0FF]">Core Product</span>
          </Link>
          <Link to="/drive" onClick={closeAllMenus} className="block py-2 text-slate-300 hover:text-[#00F0FF] border-b border-[#0E2C52]/40">
            Trevia Drive
          </Link>

          {/* Solutions Mobile Group */}
          <div className="py-2 border-b border-[#0E2C52]/40 space-y-2">
            <div className="text-[10px] font-mono text-[#00F0FF]">Solutions</div>
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
            <div className="text-[10px] font-mono text-[#00F0FF]">Technology</div>
            <div className="pl-3 space-y-2 normal-case font-medium">
              <Link to="/technology" onClick={closeAllMenus} className="block text-slate-300 hover:text-white">OCPP & Interoperability</Link>
              <Link to="/technology/apis" onClick={closeAllMenus} className="block text-slate-300 hover:text-white">APIs & Integrations</Link>
            </div>
          </div>

          {/* Company Mobile Group */}
          <div className="py-2 border-b border-[#0E2C52]/40 space-y-2">
            <div className="text-[10px] font-mono text-[#00F0FF]">Company</div>
            <div className="pl-3 space-y-2 normal-case font-medium">
              <Link to="/about" onClick={closeAllMenus} className="block text-slate-300 hover:text-white">About Trevia</Link>
              <Link to="/traction" onClick={closeAllMenus} className="block text-slate-300 hover:text-white">Traction & Journey</Link>
            </div>
          </div>

          <Link to="/resources" onClick={closeAllMenus} className="block py-2 text-slate-300 hover:text-[#00F0FF] border-b border-[#0E2C52]/40">
            Resources
          </Link>

          <div className="pt-2">
            <button
              onClick={() => {
                closeAllMenus();
                onRequestDemo();
              }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#00A8FF] to-[#00D2C4] text-black font-bold uppercase tracking-wider text-center"
            >
              Request a Demo
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
