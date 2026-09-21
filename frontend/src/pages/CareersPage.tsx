import React from 'react';
import { Briefcase } from 'lucide-react';

export const CareersPage: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 sm:py-24 space-y-6 text-center">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface2 border border-edge text-[#00A09A] text-xs font-mono uppercase">
        <Briefcase className="w-3.5 h-3.5" /> Careers
      </div>
      <p className="text-sm sm:text-base text-ink3 leading-relaxed max-w-xl mx-auto">
        We're a small team based out of T-Hub, working on the infrastructure layer connecting chargers, operators, and drivers across India.
        We don't have open roles listed yet — if you'd like to build with us, reach out directly.
      </p>
      <p className="text-ink2 text-sm sm:text-base">
        Send us your resume/portfolio at{' '}
        <a href="mailto:careers@treviaev.in" className="text-[#00A09A] font-semibold hover:text-ink transition-colors">
          careers@treviaev.in
        </a>{' '}
        to join our team.
      </p>
    </div>
  );
};
