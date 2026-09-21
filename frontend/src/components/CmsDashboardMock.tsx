import React from 'react';
import { Radio, Zap, AlertTriangle, Activity, Clock } from 'lucide-react';

const STATIONS = [
  { name: 'Gachibowli Hub', status: 'Charging', tone: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30' },
  { name: 'Cyber Towers', status: 'Available', tone: 'text-[#00A09A] bg-[#00A09A]/10 border-[#00A09A]/30' },
  { name: 'Knowledge City', status: 'Fault', tone: 'text-rose-400 bg-rose-500/10 border-rose-500/30' },
  { name: 'Kondapur Depot', status: 'Charging', tone: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30' },
];

const SESSIONS = [
  { id: '#SES-2291', station: 'Gachibowli Hub · Bay 02', energy: '18.4 kWh', duration: '00:24:10' },
  { id: '#SES-2288', station: 'Kondapur Depot · Bay 01', energy: '9.7 kWh', duration: '00:11:42' },
  { id: '#SES-2284', station: 'Madhapur Square · Bay 04', energy: '31.2 kWh', duration: '00:48:03' },
];

const FAULTS = [
  { station: 'Knowledge City · Bay 03', issue: 'Connector lock fault', age: '6 min ago' },
  { station: 'Hitec City Plaza · Bay 02', issue: 'Offline — heartbeat lost', age: '22 min ago' },
];

const TELEMETRY_BARS = [30, 55, 40, 70, 62, 85, 48, 72, 90, 58, 66, 75];

interface CmsDashboardMockProps {
  compact?: boolean;
}

export const CmsDashboardMock: React.FC<CmsDashboardMockProps> = ({ compact = false }) => {
  return (
    <div className="relative w-full">
      {/* Soft gradient glow behind the card */}
      <div className="absolute -inset-6 sm:-inset-10 -z-10 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-56 h-56 bg-indigo-400/20 rounded-full blur-[80px]" />
        <div className="absolute bottom-0 right-1/4 w-56 h-56 bg-[#00A09A]/20 rounded-full blur-[80px]" />
        <div className="absolute top-1/3 right-0 w-40 h-40 bg-violet-400/15 rounded-full blur-[70px]" />
      </div>

      {/* Gradient outline frame */}
      <div className="p-px rounded-2xl bg-gradient-to-br from-white/15 via-[#00A09A]/25 to-indigo-400/20 shadow-[0_0_40px_rgba(0,160,154,0.1)]">
        <div className="w-full bg-[#030A14] rounded-2xl overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 border-b border-[#0E2C52] bg-[#061426]">
            <div className="flex items-center gap-2 text-[#00A09A]">
              <Radio className="w-3.5 h-3.5" />
              <span className="text-[10px] font-mono uppercase tracking-wider font-semibold">Trevia CMS — Network Console</span>
            </div>
            <span className="text-[9px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/30">
              Live
            </span>
          </div>

      {/* Network overview */}
      <div className={`grid grid-cols-4 gap-2 p-4 ${compact ? 'grid-cols-3' : 'sm:gap-3'}`}>
        <div className="bg-[#061426] border border-[#0E2C52]/70 rounded-xl p-3">
          <div className="text-[9px] font-mono uppercase text-slate-500 mb-1">Stations</div>
          <div className="text-lg font-bold text-white font-mono">128</div>
        </div>
        <div className="bg-[#061426] border border-[#0E2C52]/70 rounded-xl p-3">
          <div className="text-[9px] font-mono uppercase text-slate-500 mb-1">Active</div>
          <div className="text-lg font-bold text-white font-mono">74</div>
        </div>
        <div className="bg-[#061426] border border-[#0E2C52]/70 rounded-xl p-3">
          <div className="text-[9px] font-mono uppercase text-slate-500 mb-1">Faults</div>
          <div className="text-lg font-bold text-rose-400 font-mono">2</div>
        </div>
        {!compact && (
          <div className="bg-[#061426] border border-[#0E2C52]/70 rounded-xl p-3">
            <div className="text-[9px] font-mono uppercase text-slate-500 mb-1">Uptime</div>
            <div className="text-lg font-bold text-[#00A09A] font-mono">99.4%</div>
          </div>
        )}
      </div>

      {/* Charger status */}
      <div className="px-4 pb-4 space-y-1.5">
        <div className="text-[9px] font-mono uppercase tracking-wider text-slate-500 mb-1.5">Charger Status</div>
        {(compact ? STATIONS.slice(0, 2) : STATIONS).map((s) => (
          <div key={s.name} className="flex items-center justify-between px-3 py-2 rounded-lg bg-[#061426]/60 border border-[#0E2C52]/50">
            <div className="flex items-center gap-2 text-xs text-slate-200">
              <Zap className="w-3 h-3 text-slate-500" />
              <span>{s.name}</span>
            </div>
            <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${s.tone}`}>
              {s.status}
            </span>
          </div>
        ))}
      </div>

      {!compact && (
        <>
          {/* Active sessions */}
          <div className="px-4 pb-4 space-y-1.5">
            <div className="text-[9px] font-mono uppercase tracking-wider text-slate-500 mb-1.5">Active Sessions</div>
            {SESSIONS.map((s) => (
              <div key={s.id} className="flex items-center justify-between px-3 py-2 rounded-lg bg-[#061426]/60 border border-[#0E2C52]/50">
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                  <span className="font-mono text-[10px] text-slate-500">{s.id}</span>
                  <span>{s.station}</span>
                </div>
                <div className="flex items-center gap-2 text-[10px] font-mono text-slate-400 shrink-0">
                  <span className="text-[#00A09A]">{s.energy}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{s.duration}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Faults */}
          <div className="px-4 pb-4 space-y-1.5">
            <div className="text-[9px] font-mono uppercase tracking-wider text-slate-500 mb-1.5">Faults</div>
            {FAULTS.map((f) => (
              <div key={f.station} className="flex items-center justify-between px-3 py-2 rounded-lg bg-rose-500/5 border border-rose-500/20">
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <AlertTriangle className="w-3 h-3 text-rose-400 shrink-0" />
                  <span>{f.station}</span>
                  <span className="text-slate-500">— {f.issue}</span>
                </div>
                <span className="text-[10px] font-mono text-slate-500 shrink-0">{f.age}</span>
              </div>
            ))}
          </div>

          {/* Telemetry */}
          <div className="px-4 pb-4">
            <div className="text-[9px] font-mono uppercase tracking-wider text-slate-500 mb-2">Network Telemetry — Load (24h)</div>
            <div className="flex items-end gap-1 h-16 bg-[#061426]/60 border border-[#0E2C52]/50 rounded-lg p-2">
              {TELEMETRY_BARS.map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-sm bg-gradient-to-t from-[#00A09A]/30 to-[#00A09A]"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>

          <div className="px-4 pb-4 flex items-center gap-4 text-[10px] font-mono text-slate-500">
            <span className="flex items-center gap-1"><Activity className="w-3 h-3 text-[#00A09A]" /> Telemetry streaming</span>
            <span className="flex items-center gap-1"><AlertTriangle className="w-3 h-3 text-rose-400" /> Auto fault alerts</span>
          </div>
        </>
      )}
        </div>
      </div>
    </div>
  );
};
