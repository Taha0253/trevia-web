import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Smartphone, 
  MapPin, 
  Search, 
  CheckCircle2, 
  HelpCircle, 
  AlertCircle
} from 'lucide-react';

interface TreviaDrivePageProps {
  onRequestDemo: () => void;
}

export const TreviaDrivePage: React.FC<TreviaDrivePageProps> = ({ onRequestDemo }) => {
  const [activeFilter, setActiveFilter] = useState('all');

  return (
    <div className="space-y-16 pb-24">
      
      {/* 1. Header */}
      <section className="border-b border-[#0E2C52]/80 bg-[#030A14] py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-3 max-w-3xl">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
                <span>/</span>
                <span className="text-[#00A09A]">Product</span>
                <span>/</span>
                <span className="text-white font-semibold">Trevia Drive</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#061426] border border-[#00A09A]/40 flex items-center justify-center text-[#00A09A]">
                  <Smartphone className="w-4 h-4" />
                </div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
                  Trevia Drive — Effortless EV Charging Discovery
                </h1>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                One friendly app to find, reserve, and pay at any EV charger across India. No more juggling ten different operator apps or showing up to a broken charging plug.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                onClick={onRequestDemo}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#00A09A] to-[#33C4BF] text-black font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(0,160,154,0.3)]"
              >
                Join Waitlist / Partner
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Problem & Solution */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 sm:p-8 rounded-2xl bg-[#030A14] border border-[#0E2C52] space-y-3">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-rose-400 flex items-center gap-2">
              <AlertCircle className="w-4 h-4" /> The Problem
            </div>
            <h3 className="text-lg font-bold text-white">
              App Fatigue &amp; Ghost Chargers
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              EV drivers currently have to juggle 8 to 10 different apps just to plan a simple drive. Worse, chargers marked as 'available' often turn out to be occupied, offline, or broken when you arrive.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-[#061426] border border-[#00A09A]/40 space-y-3">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#00A09A] flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" /> The Solution
            </div>
            <h3 className="text-lg font-bold text-white">
              One App, Every Network, Total Peace of Mind
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Trevia Drive brings all charging networks into a single, reliable experience with verified live socket status, upfront pricing, guaranteed stall holds, and one-tap UPI payment.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Interactive Discovery Mock */}
      <section className="max-w-7xl mx-auto px-6 space-y-4">
        <div>
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#00A09A] mb-1">
            Interface Preview
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            Unified Station Discovery
          </h2>
        </div>

        <div className="bg-[#030A14] border border-[#0E2C52] rounded-2xl p-6 space-y-6">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1 relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                readOnly
                value="Hitec City, Hyderabad • Fast DC Chargers"
                className="w-full bg-[#061426] border border-[#0E2C52] rounded-xl pl-11 pr-4 py-2.5 text-xs text-slate-200 font-mono focus:outline-none cursor-default"
              />
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setActiveFilter('all')}
                className={`px-3.5 py-2 rounded-xl text-xs font-mono font-semibold transition-all ${
                  activeFilter === 'all' ? 'bg-[#00A09A] text-black' : 'bg-[#061426] text-slate-300 border border-[#0E2C52]'
                }`}
              >
                All (12)
              </button>
              <button
                onClick={() => setActiveFilter('dc')}
                className={`px-3.5 py-2 rounded-xl text-xs font-mono font-semibold transition-all ${
                  activeFilter === 'dc' ? 'bg-[#00A09A] text-black' : 'bg-[#061426] text-slate-300 border border-[#0E2C52]'
                }`}
              >
                CCS2 DC (8)
              </button>
              <button
                onClick={() => setActiveFilter('ac')}
                className={`px-3.5 py-2 rounded-xl text-xs font-mono font-semibold transition-all ${
                  activeFilter === 'ac' ? 'bg-[#00A09A] text-black' : 'bg-[#061426] text-slate-300 border border-[#0E2C52]'
                }`}
              >
                AC Type 2 (4)
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-[#061426] border border-[#00A09A]/40 space-y-3 shadow-lg">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  AVAILABLE NOW
                </span>
                <span className="text-[11px] font-mono text-slate-400">1.2 km away</span>
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Trevia Hub — Cyber Towers</h4>
                <p className="text-xs text-slate-400">60 kW Dual Gun CCS2 DC Fast Charger</p>
              </div>
              <div className="flex flex-wrap gap-1.5 text-[10px] text-slate-300">
                <span className="bg-[#030914] px-2 py-0.5 rounded-md border border-[#0E2C52]">☕ Blue Tokai (60m)</span>
                <span className="bg-[#030914] px-2 py-0.5 rounded-md border border-[#0E2C52]">🍽️ Food Court</span>
                <span className="bg-[#030914] px-2 py-0.5 rounded-md border border-[#0E2C52]">⭐ 4.9 (142)</span>
              </div>
              <div className="pt-2 border-t border-[#0E2C52] flex items-center justify-between text-xs font-mono">
                <span className="text-[#00A09A] font-semibold">2 of 2 Free</span>
                <span className="text-white font-bold">₹18.50 / kWh</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#061426] border border-[#0E2C52] space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-amber-500/20 text-amber-400">
                  1 IN USE • 1 FREE
                </span>
                <span className="text-[11px] font-mono text-slate-400">3.4 km away</span>
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Knowledge City Hub — DC02</h4>
                <p className="text-xs text-slate-400">120 kW Ultra-Fast CCS2 DC Charger</p>
              </div>
              <div className="flex flex-wrap gap-1.5 text-[10px] text-slate-300">
                <span className="bg-[#030914] px-2 py-0.5 rounded-md border border-[#0E2C52]">☕ Starbucks (40m)</span>
                <span className="bg-[#030914] px-2 py-0.5 rounded-md border border-[#0E2C52]">🚻 Clean Restrooms</span>
                <span className="bg-[#030914] px-2 py-0.5 rounded-md border border-[#0E2C52]">⭐ 4.8 (98)</span>
              </div>
              <div className="pt-2 border-t border-[#0E2C52] flex items-center justify-between text-xs font-mono">
                <span className="text-amber-400 font-semibold">1 of 2 Free</span>
                <span className="text-white font-bold">₹21.00 / kWh</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#061426] border border-[#0E2C52] space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  AVAILABLE NOW
                </span>
                <span className="text-[11px] font-mono text-slate-400">4.1 km away</span>
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Gachibowli Tech Park — AC</h4>
                <p className="text-xs text-slate-400">22 kW Type-2 AC Destination Charger</p>
              </div>
              <div className="flex flex-wrap gap-1.5 text-[10px] text-slate-300">
                <span className="bg-[#030914] px-2 py-0.5 rounded-md border border-[#0E2C52]">🏢 Office Covered Parking</span>
                <span className="bg-[#030914] px-2 py-0.5 rounded-md border border-[#0E2C52]">⭐ 4.9 (64)</span>
              </div>
              <div className="pt-2 border-t border-[#0E2C52] flex items-center justify-between text-xs font-mono">
                <span className="text-[#00A09A] font-semibold">4 of 4 Free</span>
                <span className="text-white font-bold">₹14.00 / kWh</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Core Features */}
      <section className="max-w-7xl mx-auto px-6 space-y-4">
        <div>
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#00A09A] mb-1">
            Driver Benefits
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            What Trevia Drive Delivers
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="p-5 rounded-xl bg-[#030A14] border border-[#0E2C52] space-y-2">
            <div className="w-8 h-8 rounded-lg bg-[#061426] border border-[#0E2C52] flex items-center justify-center text-[#00A09A]">
              <MapPin className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-bold text-white">Multi-Network Aggregation</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Discover charging stations across multiple networks and operators in one place without needing a separate app for each charging company.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#030A14] border border-[#0E2C52] space-y-2">
            <div className="w-8 h-8 rounded-lg bg-[#061426] border border-[#0E2C52] flex items-center justify-center text-emerald-400">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-bold text-white">Unified Experience</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              A unified experience in place of switching between operator-specific apps, giving you trusted status visibility before you arrive.
            </p>
          </div>
        </div>
      </section>

      {/* 5. FAQ */}
      <section className="max-w-4xl mx-auto px-6 space-y-4">
        <div className="p-5 rounded-xl bg-[#030A14] border border-[#0E2C52] space-y-2">
          <h4 className="text-sm font-bold text-white flex items-center gap-2">
            <HelpCircle className="w-4 h-4 text-[#00A09A]" />
            Is Trevia Drive connected to Trevia CMS?
          </h4>
          <p className="text-xs text-slate-300 leading-relaxed pl-6">
            Yes — both run on Trevia's underlying charging infrastructure layer, which is what allows Trevia Drive to surface charger data from connected networks.
          </p>
        </div>
      </section>

      {/* 6. CTA */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="rounded-2xl bg-[#061426] border border-[#00A09A]/40 p-8 text-center space-y-4">
          <h3 className="text-xl font-bold text-white">
            Looking for enterprise charging management?
          </h3>
          <p className="text-xs text-slate-300 max-w-lg mx-auto">
            If you are a charge point operator or fleet manager, explore Trevia CMS — our primary commercial software.
          </p>
          <div className="pt-2">
            <Link
              to="/cms"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#00A09A] to-[#33C4BF] text-black font-bold text-xs uppercase tracking-wider inline-block"
            >
              Explore Trevia CMS
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
