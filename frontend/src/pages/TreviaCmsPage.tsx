import React from 'react';
import {
  ArrowRight,
  Layers, 
  Activity, 
  RefreshCw, 
  ShieldCheck, 
  Sliders, 
  Database, 
  Code2, 
  BarChart3, 
  Lock, 
  CheckCircle2, 
  HelpCircle, 
  Zap, 
  AlertCircle 
} from 'lucide-react';
import { EnterpriseDashboard } from '../sections/EnterpriseDashboard';
import { ArchitectureFlow } from '../components/ArchitectureFlow';

interface TreviaCmsPageProps {
  onRequestDemo: () => void;
}

export const TreviaCmsPage: React.FC<TreviaCmsPageProps> = ({ onRequestDemo }) => {
  return (
    <div className="space-y-16 pb-24">
      
      {/* 1. Sleek Enterprise Header */}
      <section className="border-b border-edge/80 bg-surface py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-3 max-w-3xl">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-ink tracking-tight">
                Trevia CMS — Charging Management Software
              </h1>

              <p className="text-sm sm:text-base text-ink2 leading-relaxed">
                The central nervous system for your EV charging business. Monitor every station in real time, automate driver billing, and resolve faults with a click — across any hardware brand and location.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                onClick={onRequestDemo}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#00A09A] to-[#33C4BF] hover:from-[#008F8A] hover:to-[#00A09A] text-black font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(0,160,154,0.3)] flex items-center gap-2"
              >
                <span>Request a Demo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <a
                href="#capabilities"
                className="px-5 py-3 rounded-xl bg-surface2 hover:bg-surface2 border border-edge text-ink2 text-xs font-semibold uppercase tracking-wider transition-all"
              >
                Capabilities
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Problem & Solution Contrast */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 sm:p-8 rounded-2xl bg-surface border border-edge space-y-3">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-rose-400 flex items-center gap-2">
              <AlertCircle className="w-4 h-4" /> The Problem
            </div>
            <h3 className="text-lg font-bold text-ink">
              The Headache of Multi-Vendor Portals
            </h3>
            <p className="text-xs sm:text-sm text-ink2 leading-relaxed">
              Managing chargers from three or four different manufacturers usually means juggling separate dashboards, clunky spreadsheets, and inconsistent reports. When a charger goes down, identifying the problem takes hours.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-surface2 border border-[#00A09A]/40 space-y-3 shadow-[0_0_20px_rgba(0,160,154,0.1)]">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#00A09A] flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" /> The Solution
            </div>
            <h3 className="text-lg font-bold text-ink">
              One Clean, Unified Command Center
            </h3>
            <p className="text-xs sm:text-sm text-ink2 leading-relaxed">
              Trevia CMS connects all your chargers into one intuitive dashboard. See live station status, automate driver billing, manage tariffs, and fix glitches remotely in seconds.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Live Dashboard Interactive View */}
      <section id="network-visibility" className="max-w-7xl mx-auto px-6 space-y-4 scroll-mt-24">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#00A09A]">
              Live Interface Preview
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-ink">
              CPO Network Command Console
            </h2>
          </div>
          <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/30">
            Real-Time Telemetry Active
          </span>
        </div>

        <EnterpriseDashboard />
      </section>

      {/* 4. Core Capabilities Grid */}
      <section id="capabilities" className="max-w-7xl mx-auto px-6 space-y-8 scroll-mt-24">
        <div>
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#00A09A] mb-1">
            Product Specifications
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-ink">
            Core Operational Capabilities
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          
          <div id="ocpp-connectivity" className="p-5 rounded-2xl bg-surface border border-edge space-y-3 scroll-mt-28">
            <div className="w-9 h-9 rounded-lg bg-surface2 border border-edge flex items-center justify-center text-[#00A09A]">
              <Layers className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-bold text-ink">Charger Connectivity & OCPP 1.6J</h4>
            <p className="text-xs text-ink2 leading-relaxed">
              Chargers connect to Trevia CMS using OCPP 1.6J, the open protocol supported across most charger hardware manufacturers — allowing Trevia CMS to operate hardware from multiple vendors on one platform.
            </p>
          </div>

          <div id="real-time-monitoring" className="p-5 rounded-2xl bg-surface border border-edge space-y-3 scroll-mt-28">
            <div className="w-9 h-9 rounded-lg bg-surface2 border border-edge flex items-center justify-center text-[#00A09A]">
              <Activity className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-bold text-ink">Real-Time Monitoring</h4>
            <p className="text-xs text-ink2 leading-relaxed">
              Charger status, connectivity, and health are visible in real time across every connected site, so operators see problems as they happen rather than after a driver reports a failed charge.
            </p>
          </div>

          <div id="remote-operations" className="p-5 rounded-2xl bg-surface border border-edge space-y-3 scroll-mt-28">
            <div className="w-9 h-9 rounded-lg bg-surface2 border border-edge flex items-center justify-center text-emerald-400">
              <RefreshCw className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-bold text-ink">Remote Operations</h4>
            <p className="text-xs text-ink2 leading-relaxed">
              Where supported by the connected hardware, operators can issue remote commands — for example, resetting an unresponsive charger or querying its live status — without a site visit.
            </p>
          </div>

          <div id="sessions-transactions" className="p-5 rounded-2xl bg-surface border border-edge space-y-3 scroll-mt-28">
            <div className="w-9 h-9 rounded-lg bg-surface2 border border-edge flex items-center justify-center text-amber-400">
              <Database className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-bold text-ink">Sessions & Transactions</h4>
            <p className="text-xs text-ink2 leading-relaxed">
              Every charging session is tracked from start to finish, with transaction-level data — energy delivered, duration, and status — available for reporting and reconciliation.
            </p>
          </div>

          <div id="fault-visibility" className="p-5 rounded-2xl bg-surface border border-edge space-y-3 scroll-mt-28">
            <div className="w-9 h-9 rounded-lg bg-surface2 border border-edge flex items-center justify-center text-rose-400">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-bold text-ink">Fault & Error Visibility</h4>
            <p className="text-xs text-ink2 leading-relaxed">
              Faults and errors reported by connected chargers are surfaced to the operator directly, rather than requiring a physical site check to discover a charger has gone down.
            </p>
          </div>

          <div id="multi-site-management" className="p-5 rounded-2xl bg-surface border border-edge space-y-3 scroll-mt-28">
            <div className="w-9 h-9 rounded-lg bg-surface2 border border-edge flex items-center justify-center text-indigo-400">
              <Sliders className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-ink">Multi-Location Management</h4>
            <p className="text-xs text-ink2 leading-relaxed">
              Operators running chargers across multiple sites manage them from one platform — the number of sites or vendors does not multiply the number of tools required to run the network.
            </p>
          </div>

          <div id="tariff-management" className="p-5 rounded-2xl bg-surface border border-edge space-y-3 scroll-mt-28">
            <div className="w-9 h-9 rounded-lg bg-surface2 border border-edge flex items-center justify-center text-[#00A09A]">
              <Zap className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-bold text-ink">Tariff Management</h4>
            <p className="text-xs text-ink2 leading-relaxed">
              Trevia CMS supports configuring and managing charging tariffs across sites and charger types, so pricing can be set and adjusted centrally rather than per-site.
            </p>
          </div>

          <div id="apis-integrations" className="p-5 rounded-2xl bg-surface border border-edge space-y-3 scroll-mt-28">
            <div className="w-9 h-9 rounded-lg bg-surface2 border border-edge flex items-center justify-center text-[#00A09A]">
              <Code2 className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-bold text-ink">APIs & Integrations</h4>
            <p className="text-xs text-ink2 leading-relaxed">
              Trevia CMS is designed to expose charging, session, and operational data via APIs, so operators can integrate that data into their own reporting, billing, or fleet-management systems.
            </p>
          </div>

          <div id="analytics" className="p-5 rounded-2xl bg-surface border border-edge space-y-3 scroll-mt-28">
            <div className="w-9 h-9 rounded-lg bg-surface2 border border-edge flex items-center justify-center text-purple-400">
              <BarChart3 className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-bold text-ink">Analytics & Reporting</h4>
            <p className="text-xs text-ink2 leading-relaxed">
              Operational and energy data collected across the network is available in aggregate for reporting and planning — turning day-to-day charging activity into data operators can act on.
            </p>
          </div>

        </div>
      </section>

      {/* 5. End-to-End Pipeline */}
      <section id="hardware-agnostic" className="max-w-7xl mx-auto px-6 space-y-4 scroll-mt-24">
        <div>
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#00A09A] mb-1">
            Architecture
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-ink">
            End-to-End Operating Pipeline
          </h2>
        </div>

        <ArchitectureFlow />
      </section>

      {/* 6. Built for CPO Ops & Scalability */}
      <section id="digital-infrastructure" className="max-w-7xl mx-auto px-6 scroll-mt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 sm:p-8 rounded-2xl bg-surface border border-edge space-y-2">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#00A09A]">
              Operations First
            </div>
            <h3 className="text-lg font-bold text-ink">Built for CPO Operations</h3>
            <p className="text-xs sm:text-sm text-ink2 leading-relaxed">
              Trevia CMS is built around the day-to-day reality of running a charge point business: multiple sites, multiple hardware vendors, and the need for one operational view rather than one per vendor.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-surface border border-edge space-y-2">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
              Linear Overhead Elimination
            </div>
            <h3 className="text-lg font-bold text-ink">Scalability</h3>
            <p className="text-xs sm:text-sm text-ink2 leading-relaxed">
              The platform is designed so that adding chargers, sites, or hardware vendors does not add operational complexity — new connections extend the same operating layer rather than requiring a separate system.
            </p>
          </div>
        </div>
      </section>

      {/* 7. Security Note */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="p-6 rounded-2xl bg-surface2/50 border border-edge flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-mono text-[#00A09A]">
              <Lock className="w-3.5 h-3.5" />
              <span>Security & Reliability</span>
            </div>
            <p className="text-xs text-ink2">
              Enterprise WSS authentication, persistent heartbeat monitoring, and TLS encryption across all connected chargers.
            </p>
          </div>
          <span className="text-[11px] font-mono text-ink3 px-3 py-1 bg-surface rounded-lg border border-edge">
            OCPP 1.6J JSON/WSS
          </span>
        </div>
      </section>

      {/* 8. FAQ */}
      <section className="max-w-4xl mx-auto px-6 space-y-6">
        <div>
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#00A09A] mb-1">
            FAQ
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-ink">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          <div className="p-5 rounded-xl bg-surface border border-edge space-y-2">
            <h4 className="text-sm font-bold text-ink flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-[#00A09A]" />
              Does Trevia CMS work with our existing charger hardware?
            </h4>
            <p className="text-xs text-ink2 leading-relaxed pl-6">
              Trevia CMS connects to chargers over OCPP 1.6J, the open protocol supported by most major charger hardware manufacturers, so it is designed to work across vendors rather than requiring specific hardware.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-surface border border-edge space-y-2">
            <h4 className="text-sm font-bold text-ink flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-[#00A09A]" />
              Can Trevia CMS manage chargers across multiple sites?
            </h4>
            <p className="text-xs text-ink2 leading-relaxed pl-6">
              Yes — multi-site, multi-vendor management is a core design goal of the platform.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-surface border border-edge space-y-2">
            <h4 className="text-sm font-bold text-ink flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-[#00A09A]" />
              Is there an API available for enterprise integration?
            </h4>
            <p className="text-xs text-ink2 leading-relaxed pl-6">
              Trevia CMS is designed to expose data via APIs for integration into operators' own billing, ERP, and fleet management systems.
            </p>
          </div>
        </div>
      </section>

      {/* 9. Final CTA */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="rounded-2xl bg-surface2 border border-[#00A09A]/40 p-8 text-center space-y-4">
          <h3 className="text-xl sm:text-2xl font-bold text-ink">
            Request a Demo of Trevia CMS
          </h3>
          <p className="text-xs sm:text-sm text-ink2 max-w-lg mx-auto">
            Experience the operating layer built for multi-vendor, multi-site EV charging networks.
          </p>
          <div className="pt-2">
            <button
              onClick={onRequestDemo}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#00A09A] to-[#33C4BF] text-black font-bold text-xs uppercase tracking-wider"
            >
              Request a Demo
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
