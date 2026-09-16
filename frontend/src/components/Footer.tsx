import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Zap } from 'lucide-react';

interface FooterProps {
  onRequestDemo: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onRequestDemo }) => {
  const [apiStatus, setApiStatus] = useState<string>('checking');

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/health')
      .then((res) => (res.ok ? setApiStatus('online') : setApiStatus('degraded')))
      .catch(() => setApiStatus('offline'));
  }, []);

  return (
    <footer className="bg-[#010408] border-t border-[#09182D] text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#0A1D36]">
          
          {/* Company Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold tracking-tight text-white">
                Trevia<span className="text-[#00F0FF]">EV</span>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed font-normal">
              India’s unified EV charging platform. Discover, access, and pay across multiple EV charging networks with one seamless platform and one wallet.
            </p>

            <div className="pt-2 flex items-center gap-2 flex-wrap">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#040F1E] border border-[#0E284A] text-[#00F0FF] text-xs font-semibold">
                <Zap className="w-3.5 h-3.5" />
                <span>Incubated at T-Hub</span>
              </span>
              
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#040F1E] border border-[#0E284A] text-xs font-semibold text-slate-300">
                <span className={`w-2 h-2 rounded-full ${apiStatus === 'online' ? 'bg-[#00F0FF] animate-pulse' : 'bg-amber-400'}`} />
                <span>FastAPI Mesh: {apiStatus}</span>
              </span>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="lg:col-span-2 space-y-3">
            <h5 className="text-xs font-mono font-bold text-white uppercase tracking-wider">Platform</h5>
            <ul className="space-y-2 text-xs">
              <li><a href="#platform" className="hover:text-[#00F0FF] transition">Enterprise Console</a></li>
              <li><a href="#approach" className="hover:text-[#00F0FF] transition">Signature Journey</a></li>
              <li><a href="#drivers" className="hover:text-[#00F0FF] transition">For EV Drivers</a></li>
              <li><a href="#cpos" className="hover:text-[#00F0FF] transition">For Network CPOs</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-3">
            <h5 className="text-xs font-mono font-bold text-white uppercase tracking-wider">Protocol</h5>
            <ul className="space-y-2 text-xs">
              <li><span className="text-slate-400">OCPP 2.0.1 Certified</span></li>
              <li><span className="text-slate-400">OCPI 2.2 Roaming</span></li>
              <li><span className="text-slate-400">ISO 15118 Ready</span></li>
              <li><span className="text-slate-400">OpenADR 2.0b</span></li>
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-3">
            <h5 className="text-xs font-mono font-bold text-white uppercase tracking-wider">Ecosystem</h5>
            <ul className="space-y-2 text-xs">
              <li><span className="text-slate-400">T-Hub Hyderabad</span></li>
              <li><span className="text-slate-400">DPIIT Recognized</span></li>
              <li><span className="text-slate-400">Google Cloud Infra</span></li>
              <li><span className="text-slate-400">Pan-India Depots</span></li>
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-3">
            <h5 className="text-xs font-mono font-bold text-white uppercase tracking-wider">Get In Touch</h5>
            <p className="text-xs text-slate-400 font-normal">
              Join India's unified charging network.
            </p>
            <button
              onClick={onRequestDemo}
              className="mt-2 inline-flex items-center gap-1.5 bg-gradient-to-r from-[#00A8FF] to-[#00D2C4] text-black text-xs font-bold px-4 py-2 rounded-full transition shadow-md shadow-[#00A8FF]/20 hover:shadow-[0_0_20px_#00F0FF]"
            >
              <span>Connect with us</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <div>
            © {new Date().getFullYear()} TreviaEV Platforms Inc. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition">Privacy Notice</a>
            <a href="#" className="hover:text-white transition">Security Architecture</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
