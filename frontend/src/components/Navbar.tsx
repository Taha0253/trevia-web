import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onRequestDemo: () => void;
  onExplore: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onRequestDemo, onExplore }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#02060D]/80 backdrop-blur-xl border-b border-[#0E223D]/60 transition-all">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* TreviaEV Brand Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#00A8FF] to-[#00F0FF] p-[1px] shadow-sm group-hover:shadow-[0_0_20px_rgba(0,168,255,0.4)] transition-all">
            <div className="w-full h-full bg-[#030A12] rounded-[7px] flex items-center justify-center">
              <span className="text-[#00F0FF] font-black text-sm tracking-tighter">⚡</span>
            </div>
          </div>
          <span className="text-xl font-bold tracking-tight text-white group-hover:text-white transition-colors">
            Trevia<span className="text-[#00F0FF]">EV</span>
          </span>
        </a>

        {/* Desktop Links: Platform, For Drivers, For CPOs, Our Approach */}
        <nav className="hidden md:flex items-center gap-9 text-sm font-medium text-slate-300">
          <a 
            href="#platform" 
            className="hover:text-[#00F0FF] transition-colors tracking-wide text-xs uppercase"
          >
            Platform
          </a>
          <a 
            href="#drivers" 
            className="hover:text-[#00F0FF] transition-colors tracking-wide text-xs uppercase"
          >
            For Drivers
          </a>
          <a 
            href="#cpos" 
            className="hover:text-[#00F0FF] transition-colors tracking-wide text-xs uppercase"
          >
            For CPOs
          </a>
          <a 
            href="#approach" 
            className="hover:text-[#00F0FF] transition-colors tracking-wide text-xs uppercase flex items-center gap-1.5"
          >
            <span>Our Approach</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] animate-pulse" />
          </a>
        </nav>

        {/* Right CTA Buttons */}
        <div className="hidden sm:flex items-center gap-4">
          <button
            onClick={onRequestDemo}
            className="px-5 py-2 rounded-full border border-[#0E2C52] hover:border-[#00A8FF] text-xs font-semibold uppercase tracking-wider text-slate-200 hover:text-white transition-all duration-200 hover:bg-[#00A8FF]/10 active:scale-95"
          >
            Contact
          </button>
          <button
            onClick={onExplore}
            className="px-5 py-2 rounded-full bg-gradient-to-r from-[#00A8FF] to-[#00D2C4] hover:from-[#1B84FF] hover:to-[#00F0FF] text-black text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-[0_0_20px_rgba(0,168,255,0.3)] hover:shadow-[0_0_30px_rgba(0,240,255,0.5)] active:scale-95 flex items-center gap-1"
          >
            <span>Explore</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile menu hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={onRequestDemo}
            className="px-3.5 py-1.5 rounded-full border border-[#00A8FF]/40 text-xs font-semibold text-[#00F0FF]"
          >
            Contact
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 text-slate-400 hover:text-white"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <div className="md:hidden bg-[#030A12] border-b border-[#0E223D] px-6 py-5 space-y-4 text-xs font-semibold uppercase tracking-wider">
          <a href="#platform" onClick={() => setMobileOpen(false)} className="block py-1 text-slate-300 hover:text-[#00F0FF]">Platform</a>
          <a href="#drivers" onClick={() => setMobileOpen(false)} className="block py-1 text-slate-300 hover:text-[#00F0FF]">For Drivers</a>
          <a href="#cpos" onClick={() => setMobileOpen(false)} className="block py-1 text-slate-300 hover:text-[#00F0FF]">For CPOs</a>
          <a href="#approach" onClick={() => setMobileOpen(false)} className="block py-1 text-slate-300 hover:text-[#00F0FF]">Our Approach</a>
          <div className="pt-2 flex gap-3">
            <button
              onClick={() => { setMobileOpen(false); onRequestDemo(); }}
              className="flex-1 py-2.5 rounded-full border border-[#0E2C52] text-center text-slate-200 font-bold"
            >
              Contact
            </button>
            <button
              onClick={() => { setMobileOpen(false); onExplore(); }}
              className="flex-1 py-2.5 rounded-full bg-gradient-to-r from-[#00A8FF] to-[#00D2C4] text-black font-bold text-center"
            >
              Explore
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
