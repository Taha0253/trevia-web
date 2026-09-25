import React from 'react';
import { Radio, Zap, AlertTriangle, Activity, Clock } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

interface Station {
  name: string;
  status: string;
  toneDark: string;
  toneLight: string;
}

const STATIONS: Station[] = [
  { 
    name: 'Gachibowli Hub', 
    status: 'Charging', 
    toneDark: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
    toneLight: 'text-emerald-700 bg-emerald-50 border-emerald-300 font-semibold'
  },
  { 
    name: 'Cyber Towers', 
    status: 'Available', 
    toneDark: 'text-[#00A09A] bg-[#00A09A]/10 border-[#00A09A]/30',
    toneLight: 'text-[#007B76] bg-[#00A09A]/10 border-[#00A09A]/30 font-semibold'
  },
  { 
    name: 'Knowledge City', 
    status: 'Fault', 
    toneDark: 'text-rose-400 bg-rose-500/10 border-rose-500/30',
    toneLight: 'text-rose-700 bg-rose-50 border-rose-300 font-semibold'
  },
  { 
    name: 'Kondapur Depot', 
    status: 'Charging', 
    toneDark: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
    toneLight: 'text-emerald-700 bg-emerald-50 border-emerald-300 font-semibold'
  },
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
  const { theme } = useTheme();
  // Console theme is always the opposite of the website theme
  const consoleTheme = theme === 'dark' ? 'light' : 'dark';
  const isLight = consoleTheme === 'light';

  return (
    <div className="relative w-full">
      {/* Soft gradient glow behind the card */}
      <div className="absolute -inset-6 sm:-inset-10 -z-10 pointer-events-none">
        <div className={`absolute top-0 left-1/4 w-56 h-56 rounded-full blur-[80px] transition-colors duration-300 ${
          isLight ? 'bg-indigo-300/20' : 'bg-indigo-400/20'
        }`} />
        <div className={`absolute bottom-0 right-1/4 w-56 h-56 rounded-full blur-[80px] transition-colors duration-300 ${
          isLight ? 'bg-[#00A09A]/15' : 'bg-[#00A09A]/20'
        }`} />
        <div className={`absolute top-1/3 right-0 w-40 h-40 rounded-full blur-[70px] transition-colors duration-300 ${
          isLight ? 'bg-teal-300/15' : 'bg-violet-400/15'
        }`} />
      </div>

      {/* Gradient outline frame */}
      <div className={`p-px rounded-2xl transition-all duration-300 ${
        isLight
          ? 'bg-gradient-to-br from-slate-200/90 via-[#00A09A]/35 to-slate-300/90 shadow-[0_20px_50px_rgba(0,0,0,0.45),0_0_35px_rgba(0,160,154,0.18)]'
          : 'bg-gradient-to-br from-white/15 via-[#00A09A]/25 to-indigo-400/20 shadow-[0_20px_50px_rgba(0,0,0,0.25),0_0_40px_rgba(0,160,154,0.1)]'
      }`}>
        <div
          data-theme={consoleTheme}
          className={`w-full rounded-2xl overflow-hidden transition-colors duration-300 ${
            isLight ? 'bg-[#F8FAFC]' : 'bg-surface'
          }`}
        >
          {/* Header */}
          <div className={`flex items-center justify-between px-4 py-3 border-b transition-colors duration-300 ${
            isLight ? 'border-slate-200/90 bg-white' : 'border-edge bg-surface2'
          }`}>
            <div className={`flex items-center gap-2 ${isLight ? 'text-[#007B76]' : 'text-[#00A09A]'}`}>
              <Radio className="w-3.5 h-3.5" />
              <span className="text-[10px] font-mono uppercase tracking-wider font-semibold">
                Trevia CMS — Network Console
              </span>
            </div>
            <span className={`text-[9px] font-mono px-2 py-0.5 rounded-full border ${
              isLight
                ? 'text-emerald-700 bg-emerald-50 border-emerald-300 font-semibold'
                : 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30'
            }`}>
              Live
            </span>
          </div>

          {/* Network overview */}
          <div className={`grid grid-cols-4 gap-2 p-4 ${compact ? 'grid-cols-3' : 'sm:gap-3'}`}>
            <div className={`border rounded-xl p-3 transition-colors ${
              isLight ? 'bg-white border-slate-200/80 shadow-sm' : 'bg-surface2 border-edge/70'
            }`}>
              <div className={`text-[9px] font-mono uppercase mb-1 ${
                isLight ? 'text-slate-500 font-medium' : 'text-ink4'
              }`}>Stations</div>
              <div className={`text-lg font-bold font-mono ${
                isLight ? 'text-slate-900' : 'text-ink'
              }`}>128</div>
            </div>

            <div className={`border rounded-xl p-3 transition-colors ${
              isLight ? 'bg-white border-slate-200/80 shadow-sm' : 'bg-surface2 border-edge/70'
            }`}>
              <div className={`text-[9px] font-mono uppercase mb-1 ${
                isLight ? 'text-slate-500 font-medium' : 'text-ink4'
              }`}>Active</div>
              <div className={`text-lg font-bold font-mono ${
                isLight ? 'text-slate-900' : 'text-ink'
              }`}>74</div>
            </div>

            <div className={`border rounded-xl p-3 transition-colors ${
              isLight ? 'bg-white border-slate-200/80 shadow-sm' : 'bg-surface2 border-edge/70'
            }`}>
              <div className={`text-[9px] font-mono uppercase mb-1 ${
                isLight ? 'text-slate-500 font-medium' : 'text-ink4'
              }`}>Faults</div>
              <div className={`text-lg font-bold font-mono ${
                isLight ? 'text-rose-600' : 'text-rose-400'
              }`}>2</div>
            </div>

            {!compact && (
              <div className={`border rounded-xl p-3 transition-colors ${
                isLight ? 'bg-white border-slate-200/80 shadow-sm' : 'bg-surface2 border-edge/70'
              }`}>
                <div className={`text-[9px] font-mono uppercase mb-1 ${
                  isLight ? 'text-slate-500 font-medium' : 'text-ink4'
                }`}>Uptime</div>
                <div className={`text-lg font-bold font-mono ${
                  isLight ? 'text-[#007B76]' : 'text-[#00A09A]'
                }`}>99.4%</div>
              </div>
            )}
          </div>

          {/* Charger status */}
          <div className="px-4 pb-4 space-y-1.5">
            <div className={`text-[9px] font-mono uppercase tracking-wider mb-1.5 ${
              isLight ? 'text-slate-500 font-medium' : 'text-ink4'
            }`}>
              Charger Status
            </div>
            {(compact ? STATIONS.slice(0, 2) : STATIONS).map((s) => (
              <div
                key={s.name}
                className={`flex items-center justify-between px-3 py-2 rounded-lg border transition-colors ${
                  isLight
                    ? 'bg-white/90 border-slate-200 shadow-sm'
                    : 'bg-surface2/60 border-edge/50'
                }`}
              >
                <div className={`flex items-center gap-2 text-xs ${
                  isLight ? 'text-slate-700' : 'text-ink2'
                }`}>
                  <Zap className={`w-3 h-3 ${isLight ? 'text-slate-400' : 'text-ink4'}`} />
                  <span className={isLight ? 'font-medium' : ''}>{s.name}</span>
                </div>
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                  isLight ? s.toneLight : s.toneDark
                }`}>
                  {s.status}
                </span>
              </div>
            ))}
          </div>

          {!compact && (
            <>
              {/* Active sessions */}
              <div className="px-4 pb-4 space-y-1.5">
                <div className={`text-[9px] font-mono uppercase tracking-wider mb-1.5 ${
                  isLight ? 'text-slate-500 font-medium' : 'text-ink4'
                }`}>
                  Active Sessions
                </div>
                {SESSIONS.map((s) => (
                  <div
                    key={s.id}
                    className={`flex items-center justify-between px-3 py-2 rounded-lg border transition-colors ${
                      isLight
                        ? 'bg-white/90 border-slate-200 shadow-sm'
                        : 'bg-surface2/60 border-edge/50'
                    }`}
                  >
                    <div className={`flex items-center gap-2 text-xs ${
                      isLight ? 'text-slate-700' : 'text-ink2'
                    }`}>
                      <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                        isLight ? 'bg-emerald-600' : 'bg-emerald-400 animate-pulse'
                      }`} />
                      <span className={`font-mono text-[10px] ${
                        isLight ? 'text-slate-400' : 'text-ink4'
                      }`}>
                        {s.id}
                      </span>
                      <span className={isLight ? 'font-medium' : ''}>{s.station}</span>
                    </div>
                    <div className={`flex items-center gap-2 text-[10px] font-mono shrink-0 ${
                      isLight ? 'text-slate-600' : 'text-ink3'
                    }`}>
                      <span className={`font-bold ${isLight ? 'text-[#007B76]' : 'text-[#00A09A]'}`}>
                        {s.energy}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className={`w-3 h-3 ${isLight ? 'text-slate-400' : ''}`} />
                        {s.duration}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Faults */}
              <div className="px-4 pb-4 space-y-1.5">
                <div className={`text-[9px] font-mono uppercase tracking-wider mb-1.5 ${
                  isLight ? 'text-slate-500 font-medium' : 'text-ink4'
                }`}>
                  Faults
                </div>
                {FAULTS.map((f) => (
                  <div
                    key={f.station}
                    className={`flex items-center justify-between px-3 py-2 rounded-lg border transition-colors ${
                      isLight
                        ? 'bg-rose-50/80 border-rose-200 shadow-sm'
                        : 'bg-rose-500/5 border-rose-500/20'
                    }`}
                  >
                    <div className={`flex items-center gap-2 text-xs ${
                      isLight ? 'text-slate-800' : 'text-ink2'
                    }`}>
                      <AlertTriangle className={`w-3 h-3 shrink-0 ${
                        isLight ? 'text-rose-600' : 'text-rose-400'
                      }`} />
                      <span className={isLight ? 'font-medium' : ''}>{f.station}</span>
                      <span className={isLight ? 'text-slate-500' : 'text-ink4'}>— {f.issue}</span>
                    </div>
                    <span className={`text-[10px] font-mono shrink-0 ${
                      isLight ? 'text-slate-500' : 'text-ink4'
                    }`}>
                      {f.age}
                    </span>
                  </div>
                ))}
              </div>

              {/* Telemetry */}
              <div className="px-4 pb-4">
                <div className={`text-[9px] font-mono uppercase tracking-wider mb-2 ${
                  isLight ? 'text-slate-500 font-medium' : 'text-ink4'
                }`}>
                  Network Telemetry — Load (24h)
                </div>
                <div className={`flex items-end gap-1 h-16 border rounded-lg p-2 transition-colors ${
                  isLight
                    ? 'bg-white/90 border-slate-200'
                    : 'bg-surface2/60 border-edge/50'
                }`}>
                  {TELEMETRY_BARS.map((h, i) => (
                    <div
                      key={i}
                      className={`flex-1 rounded-sm ${
                        isLight
                          ? 'bg-gradient-to-t from-[#00A09A]/40 to-[#00A09A]'
                          : 'bg-gradient-to-t from-[#00A09A]/30 to-[#00A09A]'
                      }`}
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>

              <div className={`px-4 pb-4 flex items-center gap-4 text-[10px] font-mono ${
                isLight ? 'text-slate-500' : 'text-ink4'
              }`}>
                <span className="flex items-center gap-1">
                  <Activity className={`w-3 h-3 ${isLight ? 'text-[#007B76]' : 'text-[#00A09A]'}`} /> Telemetry streaming
                </span>
                <span className="flex items-center gap-1">
                  <AlertTriangle className={`w-3 h-3 ${isLight ? 'text-rose-600' : 'text-rose-400'}`} /> Auto fault alerts
                </span>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
