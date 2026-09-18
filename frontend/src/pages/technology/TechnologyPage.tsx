import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Layers, 
  ArrowRight, 
  HelpCircle
} from 'lucide-react';
import { ArchitectureFlow } from '../../components/ArchitectureFlow';

interface TechnologyPageProps {
  onRequestDemo: () => void;
}

export const TechnologyPage: React.FC<TechnologyPageProps> = ({ onRequestDemo }) => {
  return (
    <div className="space-y-24 md:space-y-36 pb-24">
      
      {/* Hero */}
      <section className="relative pt-12 pb-16 md:pt-24 md:pb-24 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-[#00A09A]/10 rounded-full blur-[200px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#061426] border border-[#0E2C52] text-[#00A09A] text-xs font-mono font-medium tracking-wider uppercase">
              <Layers className="w-3.5 h-3.5 text-[#00A09A]" />
              <span>Technology — OCPP & Interoperability</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-light text-white tracking-tight leading-[1.08]">
              Built for interoperability, not a{' '}
              <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00A09A] via-[#00A09A] to-white">
                single vendor.
              </span>
            </h1>

            <p className="text-lg text-slate-300 font-normal leading-relaxed">
              Trevia CMS speaks the open protocols that connect charging hardware, so operators are not locked into one manufacturer's ecosystem.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onRequestDemo}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-[#00A09A] to-[#33C4BF] text-black font-bold text-sm tracking-wide transition-all shadow-[0_0_30px_rgba(0,160,154,0.4)] flex items-center gap-2"
              >
                <span>Talk to Our Team</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <Link
                to="/technology/apis"
                className="px-8 py-4 rounded-full bg-[#040C18] border border-[#0E2C52] text-slate-200 hover:text-white font-medium text-sm tracking-wide transition-all"
              >
                Explore APIs & Integrations
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Architecture Overview */}
      <section className="max-w-7xl mx-auto px-6 space-y-8">
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#00A09A] mb-2">
            System Topology
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4">
            Architecture Overview
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Charger → OCPP → Trevia CMS → APIs/Integrations → Operator, Fleet, and Enterprise applications. Each connected charger communicates with Trevia CMS over OCPP; the platform processes that data and makes it available to operators directly and, where integrated, to third-party systems via API.
          </p>
        </div>

        <ArchitectureFlow />
      </section>

      {/* Technical Specifications Grid */}
      <section className="max-w-7xl mx-auto px-6 space-y-8">
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#00A09A] mb-2">
            Protocol Engineering
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4">
            Core Protocol Stack
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* OCPP 1.6J */}
          <div className="p-6 rounded-2xl bg-[#030A14] border border-[#0E2C52] space-y-3">
            <div className="text-[#00A09A] font-mono text-xs font-bold uppercase">Open Standard</div>
            <h4 className="text-lg font-bold text-white">OCPP 1.6J</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Trevia CMS communicates with chargers using OCPP 1.6J, the open protocol most widely supported across charger hardware manufacturers — the foundation of Trevia's hardware-agnostic positioning.
            </p>
          </div>

          {/* WebSocket Connectivity */}
          <div className="p-6 rounded-2xl bg-[#030A14] border border-[#0E2C52] space-y-3">
            <div className="text-[#00A09A] font-mono text-xs font-bold uppercase">Networking</div>
            <h4 className="text-lg font-bold text-white">WebSocket Connectivity</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Chargers maintain a persistent WebSocket connection to Trevia CMS, enabling real-time status updates rather than periodic polling.
            </p>
          </div>

          {/* Authentication & Heartbeats */}
          <div className="p-6 rounded-2xl bg-[#030A14] border border-[#0E2C52] space-y-3">
            <div className="text-emerald-400 font-mono text-xs font-bold uppercase">Reliability</div>
            <h4 className="text-lg font-bold text-white">Authentication & Heartbeats</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Each connected charger authenticates with the platform and sends periodic heartbeat signals, letting Trevia CMS detect when a charger goes offline or becomes unresponsive.
            </p>
          </div>

          {/* Commands & Remote Operations */}
          <div className="p-6 rounded-2xl bg-[#030A14] border border-[#0E2C52] space-y-3">
            <div className="text-amber-400 font-mono text-xs font-bold uppercase">Control Plane</div>
            <h4 className="text-lg font-bold text-white">Commands & Remote Ops</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Where supported by the connected hardware, Trevia CMS can issue remote commands — for example, resetting a charger or querying its current status.
            </p>
          </div>

          {/* Telemetry, Sessions & Transactions */}
          <div className="p-6 rounded-2xl bg-[#030A14] border border-[#0E2C52] space-y-3">
            <div className="text-indigo-400 font-mono text-xs font-bold uppercase">Data Stream</div>
            <h4 className="text-lg font-bold text-white">Telemetry & Sessions</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              The platform ingests telemetry (status, faults, energy readings), tracks charging sessions from initiation to completion, and records transaction-level data for reporting and reconciliation.
            </p>
          </div>

          {/* APIs & Integrations */}
          <div className="p-6 rounded-2xl bg-[#030A14] border border-[#0E2C52] space-y-3">
            <div className="text-rose-400 font-mono text-xs font-bold uppercase">Integration</div>
            <h4 className="text-lg font-bold text-white">APIs & Integrations</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Trevia CMS is designed to expose data via APIs for operators' own reporting, billing, or fleet-management integrations.
            </p>
          </div>

        </div>
      </section>

      {/* Protocol Message Format Snippet */}
      <section className="max-w-7xl mx-auto px-6 space-y-6">
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#00A09A] mb-2">
            Protocol Schema
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            OCPP 1.6J JSON Over WebSocket Payload
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm">
            Standard bidirectional packet flow processed in under 15ms by the Trevia ingestion pipeline.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-[#030A14] border border-[#0E2C52] font-mono text-xs text-slate-300 overflow-x-auto">
          <div className="flex items-center justify-between pb-3 border-b border-[#0E2C52] mb-3 text-slate-400">
            <span className="text-[#00A09A]">Heartbeat & MeterValues Schema</span>
            <span>WSS /ocpp/v16/chargepoint_01</span>
          </div>
          <pre className="text-[#00A09A] leading-relaxed">
{`[
  2,
  "msg-948192-meter",
  "MeterValues",
  {
    "connectorId": 1,
    "transactionId": 82014,
    "meterValue": [
      {
        "timestamp": "2026-09-17T09:44:20Z",
        "sampledValue": [
          { "value": "242.4", "context": "Sample.Periodic", "measurand": "Voltage", "unit": "V" },
          { "value": "31.8", "context": "Sample.Periodic", "measurand": "Current.Import", "unit": "A" },
          { "value": "7.7", "context": "Sample.Periodic", "measurand": "Power.Active.Import", "unit": "kW" },
          { "value": "18.42", "context": "Sample.Periodic", "measurand": "Energy.Active.Import.Register", "unit": "kWh" }
        ]
      }
    ]
  }
]`}
          </pre>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-6 space-y-8">
        <div className="text-center space-y-2">
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#00A09A]">
            Technical FAQ
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          <div className="p-6 rounded-2xl bg-[#030A14] border border-[#0E2C52] space-y-2">
            <h4 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-[#00A09A]" />
              What protocol does Trevia CMS use to connect to chargers?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-6">
              OCPP 1.6J, the industry-standard open protocol supported by most charger hardware manufacturers.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#030A14] border border-[#0E2C52] space-y-2">
            <h4 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-[#00A09A]" />
              Can our existing systems integrate with Trevia CMS?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-6">
              Trevia CMS is designed to expose data via APIs for integration with third-party billing, ERP, and fleet platforms.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="rounded-3xl bg-[#061426] border border-[#00A09A]/40 p-8 sm:p-12 text-center space-y-6">
          <h2 className="text-2xl sm:text-4xl font-bold text-white">
            Discuss technical integration
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
            Connect with our engineering team to review hardware compatibility or API requirements.
          </p>
          <div className="flex justify-center gap-4 pt-2">
            <button
              onClick={onRequestDemo}
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#00A09A] to-[#33C4BF] text-black font-bold text-xs uppercase tracking-wider"
            >
              Talk to Our Team
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
