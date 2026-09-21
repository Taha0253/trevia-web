import React from 'react';
import { Code2, ArrowRight } from 'lucide-react';

interface ApisPageProps {
  onRequestDemo: () => void;
}

export const ApisPage: React.FC<ApisPageProps> = ({ onRequestDemo }) => {
  return (
    <div className="space-y-24 md:space-y-36 pb-24">
      
      {/* Hero */}
      <section className="relative pt-12 pb-16 md:pt-24 md:pb-24 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-[#00A09A]/10 rounded-full blur-[200px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface2 border border-edge text-[#00A09A] text-xs font-mono font-medium tracking-wider uppercase">
              <Code2 className="w-3.5 h-3.5 text-[#00A09A]" />
              <span>Technology — APIs & Integrations</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-light text-ink tracking-tight leading-[1.08]">
              Programmatic access to your{' '}
              <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00A09A] via-[#00A09A] to-white">
                charging data.
              </span>
            </h1>

            <p className="text-lg text-ink2 font-normal leading-relaxed">
              Trevia CMS is designed to expose charging, session, and operational data via standard APIs, so operators can integrate directly into ERP, billing, and fleet platforms.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onRequestDemo}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-[#00A09A] to-[#33C4BF] text-black font-bold text-sm tracking-wide transition-all shadow-[0_0_30px_rgba(0,160,154,0.4)] flex items-center gap-2"
              >
                <span>Request API Access</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* Core API Endpoints Reference */}
      <section className="max-w-7xl mx-auto px-6 space-y-8">
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#00A09A] mb-2">
            API Endpoints
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-ink mb-4">
            REST & Telemetry Endpoints
          </h2>
          <p className="text-ink2 text-sm leading-relaxed">
            Standard JSON payloads with bearer token authentication for real-time state, session history, and remote operations.
          </p>
        </div>

        <div className="space-y-6">
          
          {/* Endpoint 1 */}
          <div className="p-6 rounded-2xl bg-surface border border-edge space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-edge">
              <div className="flex items-center gap-3 font-mono text-xs">
                <span className="px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-400 font-bold">GET</span>
                <span className="text-ink font-bold">/v1/chargers/telemetry</span>
              </div>
              <span className="text-ink3 text-xs font-mono">Live status & power metrics across fleet</span>
            </div>
            <pre className="p-4 bg-base rounded-xl text-xs font-mono text-ink2 overflow-x-auto leading-relaxed">
{`{
  "status": "success",
  "data": [
    {
      "chargerId": "TRV-HYD-041",
      "status": "CHARGING",
      "activePowerKw": 58.4,
      "voltageV": 415.2,
      "currentA": 81.3,
      "energyDeliveredKwh": 24.8,
      "socPercent": 68,
      "lastHeartbeat": "2026-09-17T15:10:04Z"
    }
  ]
}`}
            </pre>
          </div>

          {/* Endpoint 2 */}
          <div className="p-6 rounded-2xl bg-surface border border-edge space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-edge">
              <div className="flex items-center gap-3 font-mono text-xs">
                <span className="px-2.5 py-1 rounded bg-[#00A09A]/20 text-[#00A09A] font-bold">POST</span>
                <span className="text-ink font-bold">/v1/remote/reset</span>
              </div>
              <span className="text-ink3 text-xs font-mono">Execute soft/hard remote reboot</span>
            </div>
            <pre className="p-4 bg-base rounded-xl text-xs font-mono text-ink2 overflow-x-auto leading-relaxed">
{`{
  "chargerId": "TRV-HYD-041",
  "type": "Soft",
  "reason": "Operator maintenance cycle"
}`}
            </pre>
          </div>

        </div>
      </section>

      {/* Webhooks Section */}
      <section className="max-w-7xl mx-auto px-6 space-y-8">
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#00A09A] mb-2">
            Event Streams
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-ink mb-4">
            Real-Time Webhooks
          </h2>
          <p className="text-ink2 text-sm leading-relaxed">
            Subscribe to instant event notifications triggered directly from OCPP WebSocket heartbeats and session state transitions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
          <div className="p-4 rounded-xl bg-surface border border-edge space-y-1.5">
            <div className="text-[#00A09A] font-bold">session.started</div>
            <div className="text-ink3">Triggered when transaction is authorized and connector lock is engaged.</div>
          </div>
          <div className="p-4 rounded-xl bg-surface border border-edge space-y-1.5">
            <div className="text-emerald-400 font-bold">session.completed</div>
            <div className="text-ink3">Triggered on unplug with final kWh, duration, and tariff calculation.</div>
          </div>
          <div className="p-4 rounded-xl bg-surface border border-edge space-y-1.5">
            <div className="text-rose-400 font-bold">charger.fault_detected</div>
            <div className="text-ink3">Triggered immediately when hardware reports an internal or connector error.</div>
          </div>
          <div className="p-4 rounded-xl bg-surface border border-edge space-y-1.5">
            <div className="text-amber-400 font-bold">charger.offline</div>
            <div className="text-ink3">Triggered if consecutive heartbeat pings fail WebSocket timeout thresholds.</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="rounded-3xl bg-surface2 border border-[#00A09A]/40 p-8 sm:p-12 text-center space-y-6">
          <h2 className="text-2xl sm:text-4xl font-bold text-ink">
            Integrate Trevia into your software stack
          </h2>
          <p className="text-ink2 text-sm sm:text-base max-w-xl mx-auto">
            Contact our engineering team to request developer sandbox credentials and API specifications.
          </p>
          <div className="flex justify-center gap-4 pt-2">
            <button
              onClick={onRequestDemo}
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#00A09A] to-[#33C4BF] text-black font-bold text-xs uppercase tracking-wider"
            >
              Request API Access
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
