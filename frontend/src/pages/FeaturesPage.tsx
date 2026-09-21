import React from 'react';
import { Link } from 'react-router-dom';
import {
  AlertCircle,
  CheckCircle2,
  ArrowRight,
  Radio,
  Activity,
  RefreshCw,
  Sliders,
  Database,
  Code2,
  MapPin,
  Navigation,
  Route as RouteIcon,
  CalendarClock,
  Wallet,
  Zap,
  Compass,
} from 'lucide-react';
import { PhoneMockup } from '../components/PhoneMockup';
import { CmsDashboardMock } from '../components/CmsDashboardMock';

interface FeaturesPageProps {
  onRequestDemo: () => void;
}

const CMS_CAPABILITIES = [
  { icon: Radio, title: 'OCPP Connectivity', desc: 'Connect supported multi-vendor chargers through OCPP.' },
  { icon: Activity, title: 'Real-Time Monitoring', desc: 'Monitor charger status, connectivity and network activity in real time.' },
  { icon: RefreshCw, title: 'Remote Operations', desc: 'Execute supported charger commands remotely and reduce unnecessary site visits.' },
  { icon: Sliders, title: 'Multi-Site Management', desc: 'Manage charging infrastructure across multiple locations from one platform.' },
  { icon: Database, title: 'Sessions & Transactions', desc: 'Track charging sessions, energy, duration and transaction data.' },
  { icon: Code2, title: 'APIs & Integrations', desc: 'Connect charging operations with existing enterprise systems.' },
];

const EV_CAPABILITIES = [
  { icon: MapPin, title: 'Charger Discovery', desc: 'Find compatible charging stations across connected networks.' },
  { icon: Activity, title: 'Real-Time Availability', desc: 'See charger availability and station status before you arrive.' },
  { icon: Compass, title: 'AI Trip Planner', desc: 'Plan EV journeys with charging stops based on route and charging requirements.' },
  { icon: RouteIcon, title: 'Smart Route Planning', desc: 'Identify practical charging stops along your journey.' },
  { icon: Navigation, title: 'Reserve & Navigate', desc: 'Reserve supported chargers and navigate directly to the station.' },
  { icon: Wallet, title: 'Unified Payments', desc: 'Manage charging payments across connected networks through one experience.' },
];

const FlowStep: React.FC<{ label: string; highlight?: boolean }> = ({ label, highlight }) => (
  <div
    className={`px-4 py-2.5 rounded-xl text-xs font-semibold text-center whitespace-nowrap ${
      highlight
        ? 'bg-gradient-to-r from-[#00A09A] to-[#33C4BF] text-black shadow-[0_0_20px_rgba(0,160,154,0.35)]'
        : 'bg-[#061426] border border-[#0E2C52] text-slate-200'
    }`}
  >
    {label}
  </div>
);

const FlowArrow: React.FC = () => (
  <ArrowRight className="w-4 h-4 text-[#00A09A] shrink-0 rotate-90 sm:rotate-0" />
);

export const FeaturesPage: React.FC<FeaturesPageProps> = ({ onRequestDemo }) => {
  return (
    <div className="space-y-20 pb-24">

      {/* Header */}
      <section className="border-b border-[#0E2C52]/80 bg-[#030A14] py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-4">
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#00A09A]">
            Features
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
            One Platform. Two Experiences.
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Trevia connects the infrastructure operators running charging networks with the drivers using them.
          </p>
        </div>
      </section>

      {/* TREVIA CMS */}
      <section id="cms" className="max-w-7xl mx-auto px-6 space-y-10 scroll-mt-24">
        <div className="max-w-2xl">
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#00A09A] mb-2">
            For CPOs & Charging Network Operators
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            One Operating Layer for Your Charging Network
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 sm:p-8 rounded-2xl bg-[#030A14] border border-[#0E2C52] space-y-3">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-rose-400 flex items-center gap-2">
              <AlertCircle className="w-4 h-4" /> The Problem
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Multi-vendor chargers create fragmented dashboards, inconsistent data and complex operational workflows.
            </p>
          </div>
          <div className="p-6 sm:p-8 rounded-2xl bg-[#061426] border border-[#00A09A]/40 space-y-3 shadow-[0_0_20px_rgba(0,160,154,0.1)]">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#00A09A] flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" /> The Solution
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Trevia CMS connects multi-vendor charging infrastructure through OCPP, giving operators one platform to monitor, manage and operate their charging network.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <FlowStep label="Multiple Vendors" />
          <FlowArrow />
          <FlowStep label="Trevia CMS" highlight />
          <FlowArrow />
          <FlowStep label="Unified Operations" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {CMS_CAPABILITIES.map((cap) => (
              <div key={cap.title} className="p-4 rounded-xl bg-[#030A14] border border-[#0E2C52] space-y-2">
                <div className="w-8 h-8 rounded-lg bg-[#061426] border border-[#0E2C52] flex items-center justify-center text-[#00A09A]">
                  <cap.icon className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-white">{cap.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>

          <div className="lg:col-span-3 lg:sticky lg:top-28 self-start">
            <CmsDashboardMock />
          </div>
        </div>

        <div>
          <Link
            to="/cms"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#00A09A] hover:text-white transition-colors"
          >
            <span>Explore Trevia CMS</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* TREVIA EV */}
      <section id="ev" className="max-w-7xl mx-auto px-6 space-y-10 scroll-mt-24">
        <div className="max-w-2xl">
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-400 mb-2">
            For EV Drivers & Fleets
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            One Charging Experience Across Networks
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 sm:p-8 rounded-2xl bg-[#030A14] border border-[#0E2C52] space-y-3">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-rose-400 flex items-center gap-2">
              <AlertCircle className="w-4 h-4" /> The Problem
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Charging is fragmented across networks, making it harder to find available chargers, plan journeys and manage charging across different operators.
            </p>
          </div>
          <div className="p-6 sm:p-8 rounded-2xl bg-[#0A2410] border border-emerald-500/40 space-y-3 shadow-[0_0_20px_rgba(16,185,129,0.1)]">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" /> The Solution
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Trevia EV brings connected charging networks together so drivers can discover, plan and charge from one platform.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <FlowStep label="Discover" />
          <FlowArrow />
          <FlowStep label="Plan" />
          <FlowArrow />
          <FlowStep label="Navigate" />
          <FlowArrow />
          <FlowStep label="Charge" highlight />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">
          <div className="lg:col-span-3 flex items-center justify-center gap-4 sm:gap-6 flex-wrap order-2 lg:order-1">
            <PhoneMockup label="Discover">
              <div className="flex-1 p-2.5 space-y-2">
                <div className="h-6 rounded-lg bg-[#061426] border border-[#0E2C52] flex items-center px-2 gap-1.5">
                  <MapPin className="w-2.5 h-2.5 text-emerald-400" />
                  <div className="h-1 flex-1 rounded bg-[#0E2C52]" />
                </div>
                {['Trevia Hub', 'Cyber Towers', 'Knowledge City'].map((s) => (
                  <div key={s} className="p-1.5 rounded-lg bg-[#061426] border border-[#0E2C52]/70 flex items-center justify-between">
                    <span className="text-[8px] text-slate-300">{s}</span>
                    <span className="text-[7px] font-mono text-emerald-400">Open</span>
                  </div>
                ))}
              </div>
            </PhoneMockup>
            <PhoneMockup label="Station">
              <div className="flex-1 p-2.5 space-y-2">
                <div className="h-14 rounded-lg bg-[#061426] border border-[#0E2C52]" />
                <div className="text-[8px] text-white font-semibold">Cyber Towers Hub</div>
                <div className="flex gap-1">
                  <span className="text-[7px] font-mono px-1.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">CCS2</span>
                  <span className="text-[7px] font-mono px-1.5 py-0.5 rounded-full bg-[#00A09A]/10 text-[#00A09A] border border-[#00A09A]/30">4/6 Free</span>
                </div>
              </div>
            </PhoneMockup>
            <PhoneMockup label="Plan">
              <div className="flex-1 p-2.5 space-y-2">
                <div className="flex items-center gap-1">
                  <RouteIcon className="w-2.5 h-2.5 text-[#00A09A]" />
                  <div className="h-1 flex-1 rounded bg-[#0E2C52]" />
                </div>
                <div className="p-1.5 rounded-lg bg-[#061426] border border-[#0E2C52]/70 flex items-center gap-1.5">
                  <CalendarClock className="w-2.5 h-2.5 text-slate-400" />
                  <span className="text-[7px] text-slate-300">1 stop · 18 min charge</span>
                </div>
                <div className="p-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center gap-1.5">
                  <Navigation className="w-2.5 h-2.5 text-emerald-400" />
                  <span className="text-[7px] text-emerald-300">Navigate to stop</span>
                </div>
              </div>
            </PhoneMockup>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 order-1 lg:order-2">
            {EV_CAPABILITIES.map((cap) => (
              <div key={cap.title} className="p-4 rounded-xl bg-[#030A14] border border-[#0E2C52] space-y-2">
                <div className="w-8 h-8 rounded-lg bg-[#061426] border border-[#0E2C52] flex items-center justify-center text-emerald-400">
                  <cap.icon className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-white">{cap.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <Link
            to="/drive"
            className="inline-flex items-center gap-2 text-sm font-bold text-emerald-400 hover:text-white transition-colors"
          >
            <span>Explore Trevia EV</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* HOW TREVIA CONNECTS THE ECOSYSTEM */}
      <section id="connect" className="max-w-7xl mx-auto px-6 space-y-8 scroll-mt-24">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#00A09A]">
            How Trevia Connects the Ecosystem
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            From Charging Infrastructure to Charging Experience
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Trevia connects the systems operating charging infrastructure with the platforms and drivers using it.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 flex-wrap">
          <FlowStep label="Multi-Vendor Chargers" />
          <FlowArrow />
          <FlowStep label="Trevia CMS" highlight />
          <FlowArrow />
          <FlowStep label="Connected Charging Networks" />
          <FlowArrow />
          <FlowStep label="Trevia EV / Mobility Platforms / Fleets" />
          <FlowArrow />
          <FlowStep label="EV Drivers" />
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-4">
          <div className="w-full max-w-sm">
            <CmsDashboardMock compact />
          </div>
          <div className="flex items-center gap-4">
            <PhoneMockup label="Trevia EV" compact>
              <div className="flex-1 p-2 space-y-1.5">
                <div className="h-4 rounded bg-[#061426] border border-[#0E2C52]" />
                <div className="h-4 rounded bg-[#061426] border border-[#0E2C52]" />
                <div className="h-4 rounded bg-emerald-500/10 border border-emerald-500/30" />
              </div>
            </PhoneMockup>
            <PhoneMockup label="Fleets" compact>
              <div className="flex-1 p-2 space-y-1.5">
                <div className="h-4 rounded bg-[#061426] border border-[#0E2C52]" />
                <div className="h-4 rounded bg-emerald-500/10 border border-emerald-500/30" />
                <div className="h-4 rounded bg-[#061426] border border-[#0E2C52]" />
              </div>
            </PhoneMockup>
          </div>
        </div>

        <p className="text-center text-xs sm:text-sm text-slate-400 font-medium max-w-xl mx-auto">
          Operate the infrastructure. Connect the networks. Simplify the charging experience.
        </p>
      </section>

      {/* Bottom: One Platform, Two Experiences */}
      <section className="w-full bg-[#030A14] border-y border-[#0E2C52]/80 py-14">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            One Platform. Two Experiences.
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Trevia connects the infrastructure operators running charging networks with the drivers using them.
          </p>
          <div className="pt-2">
            <Link
              to="/platform"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#00A09A] to-[#33C4BF] hover:from-[#008F8A] hover:to-[#00A09A] text-black font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(0,160,154,0.3)]"
            >
              <span>Explore Trevia Platform</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
