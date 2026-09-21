import React from 'react';
import { Radio, Zap, AlertTriangle, Activity } from 'lucide-react';

const STATIONS = [
  { name: 'Gachibowli Hub', status: 'Charging', tone: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30' },
  { name: 'Cyber Towers', status: 'Available', tone: 'text-[#00A09A] bg-[#00A09A]/10 border-[#00A09A]/30' },
  { name: 'Knowledge City', status: 'Fault', tone: 'text-rose-400 bg-rose-500/10 border-rose-500/30' },
  { name: 'Kondapur Depot', status: 'Charging', tone: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30' },
];

interface CmsDashboardMockProps {
  compact?: boolean;
}

export const CmsDashboardMock: React.FC<CmsDashboardMockProps> = ({ compact = false }) => {
  return (
    <div className="w-full bg-[#030A14] border border-[#0E2C52] rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(0,160,154,0.08)]">
      <div className="flex items-center justify-between px-4 py-3 border-b border-[#0E2C52] bg-[#061426]">
        <div className="flex items-center gap-2 text-[#00A09A]">
          <Radio className="w-3.5 h-3.5" />
          <span className="text-[10px] font-mono uppercase tracking-wider font-semibold">Trevia CMS — Network Console</span>
        </div>
        <span className="text-[9px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/30">
          Live
        </span>
      </div>

      <div className={`grid grid-cols-3 gap-2 p-4 ${compact ? '' : 'sm:gap-3'}`}>
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
      </div>

      <div className="px-4 pb-4 space-y-1.5">
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
        <div className="px-4 pb-4 flex items-center gap-4 text-[10px] font-mono text-slate-500">
          <span className="flex items-center gap-1"><Activity className="w-3 h-3 text-[#00A09A]" /> Telemetry streaming</span>
          <span className="flex items-center gap-1"><AlertTriangle className="w-3 h-3 text-rose-400" /> Auto fault alerts</span>
        </div>
      )}
    </div>
  );
};
