import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onRequestDemo?: () => void;
}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="bg-[#010408] border-t border-[#0E223D] text-slate-400 text-sm relative z-20 pt-10 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 5-Column Sitemap Link Matrix (Section B.3) */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-y-10 gap-x-10 md:gap-x-14 lg:gap-x-20 pb-10">
          
          {/* Col 1: Product */}
          <div className="space-y-5">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">Product</h4>
            <ul className="space-y-4 text-xs">
              <li>
                <Link to="/cms" className="hover:text-[#00A09A] transition-colors flex items-center gap-1">
                  <span>Trevia CMS</span>
                  <span className="text-[9px] px-1 py-0.2 bg-[#00A09A]/15 text-[#00A09A] rounded font-mono">Core</span>
                </Link>
              </li>
              <li>
                <Link to="/drive" className="hover:text-[#00A09A] transition-colors">Trevia Drive</Link>
              </li>
              <li>
                <Link to="/platform" className="hover:text-[#00A09A] transition-colors">Platform Architecture</Link>
              </li>
            </ul>
          </div>

          {/* Col 2: Solutions */}
          <div className="space-y-5">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">Solutions</h4>
            <ul className="space-y-4 text-xs">
              <li>
                <Link to="/solutions/cpos" className="hover:text-[#00A09A] transition-colors">CPOs & Operators</Link>
              </li>
              <li>
                <Link to="/solutions/fleets" className="hover:text-[#00A09A] transition-colors">Commercial Fleets</Link>
              </li>
              <li>
                <Link to="/solutions/enterprises" className="hover:text-[#00A09A] transition-colors">Workplace & Real Estate</Link>
              </li>
              <li>
                <Link to="/solutions/energy-utilities" className="hover:text-[#00A09A] transition-colors">Energy & Utilities</Link>
              </li>
              <li>
                <Link to="/solutions/government" className="hover:text-[#00A09A] transition-colors">Government & Public Bodies</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Technology */}
          <div className="space-y-5">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">Technology</h4>
            <ul className="space-y-4 text-xs">
              <li>
                <Link to="/technology" className="hover:text-[#00A09A] transition-colors">OCPP & Interoperability</Link>
              </li>
              <li>
                <Link to="/technology/apis" className="hover:text-[#00A09A] transition-colors">APIs & Integrations</Link>
              </li>
              <li>
                <Link to="/technology#websockets" className="hover:text-[#00A09A] transition-colors">WebSocket Engine</Link>
              </li>
              <li>
                <Link to="/technology#telemetry" className="hover:text-[#00A09A] transition-colors">Telemetry & Sessions</Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Company */}
          <div className="space-y-5">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">Company</h4>
            <ul className="space-y-4 text-xs">
              <li>
                <Link to="/about" className="hover:text-[#00A09A] transition-colors">About Trevia</Link>
              </li>
              <li>
                <Link to="/traction" className="hover:text-[#00A09A] transition-colors">Traction & Journey</Link>
              </li>
              <li>
                <Link to="/resources" className="hover:text-[#00A09A] transition-colors">Resources & Insights</Link>
              </li>
              <li>
                <a href="mailto:contact@treviaev.in" className="hover:text-[#00A09A] transition-colors">Contact Founder</a>
              </li>
            </ul>
          </div>

          {/* Col 5: Legal */}
          <div className="space-y-5">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">Legal</h4>
            <ul className="space-y-4 text-xs">
              <li>
                <Link to="/privacy" className="hover:text-[#00A09A] transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-[#00A09A] transition-colors">Terms of Use</Link>
              </li>
              <li>
                <a href="https://treviaev.in" target="_blank" rel="noopener noreferrer" className="hover:text-[#00A09A] transition-colors flex items-center gap-1">
                  <span>treviaev.in</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#0E223D]/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2">
            <span className="text-white font-bold">Trevia EV Technologies</span>
            <span>— The operating system for EV charging infrastructure.</span>
          </div>
          <div className="text-slate-500 font-mono text-[11px]">
            © 2026 Trevia EV Technologies. Incorporated Sept 2025. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
};
