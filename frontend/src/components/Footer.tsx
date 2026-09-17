import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Shield, ArrowUpRight, Globe, Mail } from 'lucide-react';

interface FooterProps {
  onRequestDemo?: () => void;
}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="bg-[#010408] border-t border-[#0E223D] text-slate-400 text-sm relative z-20 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Top Banner / Trust Badges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pb-12 border-b border-[#0E223D]/80">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#061426] border border-[#0E2C52] flex items-center justify-center text-[#00F0FF]">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <div className="text-white text-xs font-bold">DPIIT-Recognised</div>
              <div className="text-[11px] text-slate-400">Government of India Startup</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#061426] border border-[#0E2C52] flex items-center justify-center text-[#00A8FF]">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <div className="text-white text-xs font-bold">T-Hub Blitz Cohort 3</div>
              <div className="text-[11px] text-slate-400">Incubated & Accelerated</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#061426] border border-[#0E2C52] flex items-center justify-center text-emerald-400">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <div className="text-white text-xs font-bold">OCPP 1.6J Open Protocol</div>
              <div className="text-[11px] text-slate-400">Hardware-Agnostic Core</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#061426] border border-[#0E2C52] flex items-center justify-center text-amber-400">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <div className="text-white text-xs font-bold">Hyderabad, India</div>
              <div className="text-[11px] text-slate-400">contact@treviaev.in</div>
            </div>
          </div>
        </div>

        {/* 5-Column Sitemap Link Matrix (Section B.3) */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 py-12">
          
          {/* Col 1: Product */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">Product</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/cms" className="hover:text-[#00F0FF] transition-colors flex items-center gap-1">
                  <span>Trevia CMS</span>
                  <span className="text-[9px] px-1 py-0.2 bg-[#00F0FF]/15 text-[#00F0FF] rounded font-mono">Core</span>
                </Link>
              </li>
              <li>
                <Link to="/drive" className="hover:text-[#00F0FF] transition-colors">Trevia Drive</Link>
              </li>
              <li>
                <Link to="/platform" className="hover:text-[#00F0FF] transition-colors">Platform Architecture</Link>
              </li>
              <li>
                <Link to="/demo" className="hover:text-[#00F0FF] text-left transition-colors font-medium text-[#00F0FF] flex items-center gap-1">
                  <span>Interactive Live Demo</span>
                  <span className="text-[9px] px-1 py-0.2 bg-[#00F0FF]/15 text-[#00F0FF] rounded font-mono">Live</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 2: Solutions */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">Solutions</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/solutions/cpos" className="hover:text-[#00F0FF] transition-colors">CPOs & Operators</Link>
              </li>
              <li>
                <Link to="/solutions/fleets" className="hover:text-[#00F0FF] transition-colors">Commercial Fleets</Link>
              </li>
              <li>
                <Link to="/solutions/enterprises" className="hover:text-[#00F0FF] transition-colors">Workplace & Real Estate</Link>
              </li>
              <li>
                <Link to="/solutions/energy-utilities" className="hover:text-[#00F0FF] transition-colors">Energy & Utilities</Link>
              </li>
              <li>
                <Link to="/solutions/government" className="hover:text-[#00F0FF] transition-colors">Government & Public Bodies</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Technology */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">Technology</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/technology" className="hover:text-[#00F0FF] transition-colors">OCPP & Interoperability</Link>
              </li>
              <li>
                <Link to="/technology/apis" className="hover:text-[#00F0FF] transition-colors">APIs & Integrations</Link>
              </li>
              <li>
                <Link to="/technology#websockets" className="hover:text-[#00F0FF] transition-colors">WebSocket Engine</Link>
              </li>
              <li>
                <Link to="/technology#telemetry" className="hover:text-[#00F0FF] transition-colors">Telemetry & Sessions</Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Company */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">Company</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/about" className="hover:text-[#00F0FF] transition-colors">About Trevia</Link>
              </li>
              <li>
                <Link to="/traction" className="hover:text-[#00F0FF] transition-colors">Traction & Journey</Link>
              </li>
              <li>
                <Link to="/resources" className="hover:text-[#00F0FF] transition-colors">Resources & Insights</Link>
              </li>
              <li>
                <a href="mailto:contact@treviaev.in" className="hover:text-[#00F0FF] transition-colors">Contact Founder</a>
              </li>
            </ul>
          </div>

          {/* Col 5: Legal */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">Legal</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/privacy" className="hover:text-[#00F0FF] transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-[#00F0FF] transition-colors">Terms of Use</Link>
              </li>
              <li>
                <a href="https://treviaev.in" target="_blank" rel="noopener noreferrer" className="hover:text-[#00F0FF] transition-colors flex items-center gap-1">
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
            <span>— The operating layer for your charging network.</span>
          </div>
          <div className="text-slate-500 font-mono text-[11px]">
            © 2026 Trevia EV Technologies. Incorporated Sept 2025. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
};
