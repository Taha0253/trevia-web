import React from 'react';

interface PhoneMockupProps {
  label: string;
  children: React.ReactNode;
  compact?: boolean;
}

export const PhoneMockup: React.FC<PhoneMockupProps> = ({ label, children, compact = false }) => {
  const width = compact ? 'w-40' : 'w-full max-w-[220px]';
  return (
    <div className="flex flex-col items-center gap-2">
      <div className={`${width} aspect-[9/19] rounded-[2rem] border-2 border-[#0E2C52] bg-[#030A14] p-1.5 shadow-[0_0_30px_rgba(0,160,154,0.1)] relative`}>
        <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-12 h-3 rounded-full bg-[#02060D] z-10" />
        <div className="w-full h-full rounded-[1.6rem] bg-[#02060D] border border-[#0E2C52]/60 overflow-hidden flex flex-col">
          {children}
        </div>
      </div>
      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500">{label}</span>
    </div>
  );
};
