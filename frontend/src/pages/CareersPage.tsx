import React from 'react';
import { Briefcase } from 'lucide-react';

export const CareersPage: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 sm:py-24 space-y-6 text-center">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#061426] border border-[#0E2C52] text-[#00A09A] text-xs font-mono uppercase">
        <Briefcase className="w-3.5 h-3.5" /> Careers
      </div>
      <h1 className="text-3xl sm:text-5xl font-bold text-white">Building the operating system for EV charging.</h1>
      <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-xl mx-auto">
        We're a small team based out of T-Hub, working on the infrastructure layer connecting chargers, operators, and drivers across India.
        We don't have open roles listed yet — if you'd like to build with us, reach out directly.
      </p>
      {/* PLACEHOLDER — replace careers@trevia.com with the real careers email */}
      <a
        href="mailto:careers@trevia.com"
        className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#00A09A] to-[#33C4BF] text-black font-bold text-sm tracking-wide transition-all duration-300 hover:-translate-y-0.5"
      >
        careers@trevia.com
      </a>
    </div>
  );
};
