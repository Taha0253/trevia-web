import React, { useState } from 'react';
import {
  GitFork, PlugZap, Gauge, RotateCw, MapPin,
  Radio, Layers, Wifi, Server, Cable, BatteryCharging, Zap,
  Activity, Thermometer, BarChart3, Bell, Unlock, Wrench,
  Shield, RefreshCw, Building2, Globe, Users, TrendingUp, type LucideIcon
} from 'lucide-react';

interface ApproachCard {
  stepNum: string;
  id: string;
  title: string;
  subtitle: string;
  shortDesc: string;
  icon: LucideIcon;
  satellites: { icon: LucideIcon; top: string; left: string }[];
}

const cards: ApproachCard[] = [
  {
    stepNum: '01',
    id: 'unified-layer',
    title: 'Unified Network Layer',
    subtitle: 'Every charger, one roof',
    shortDesc: 'Connects all chargers over OCPP into one seamless control center.',
    icon: GitFork,
    satellites: [
      { icon: Radio, top: '18%', left: '22%' },
      { icon: Wifi, top: '28%', left: '78%' },
      { icon: Layers, top: '58%', left: '16%' },
      { icon: Server, top: '62%', left: '74%' },
    ],
  },
  {
    stepNum: '02',
    id: 'hardware-agnostic',
    title: 'Hardware Freedom',
    subtitle: 'Any brand, any plug',
    shortDesc: 'Works with major AC & DC charger brands — no hardware lock-in.',
    icon: PlugZap,
    satellites: [
      { icon: Zap, top: '16%', left: '30%' },
      { icon: Cable, top: '22%', left: '72%' },
      { icon: BatteryCharging, top: '56%', left: '20%' },
      { icon: PlugZap, top: '60%', left: '76%' },
    ],
  },
  {
    stepNum: '03',
    id: 'live-data',
    title: 'Live Station Pulse',
    subtitle: 'Zero ghost chargers',
    shortDesc: 'Live power, voltage, and socket status so drivers never hit a dead charger.',
    icon: Gauge,
    satellites: [
      { icon: Activity, top: '14%', left: '50%' },
      { icon: Thermometer, top: '28%', left: '18%' },
      { icon: BarChart3, top: '28%', left: '82%' },
      { icon: Bell, top: '58%', left: '24%' },
      { icon: Radio, top: '58%', left: '76%' },
    ],
  },
  {
    stepNum: '04',
    id: 'automation-control',
    title: 'Smart Self-Healing',
    subtitle: 'Fixes without site trips',
    shortDesc: 'Reboot, unlock, and recover chargers remotely in seconds.',
    icon: RotateCw,
    satellites: [
      { icon: RefreshCw, top: '16%', left: '26%' },
      { icon: Unlock, top: '20%', left: '74%' },
      { icon: Wrench, top: '54%', left: '18%' },
      { icon: Shield, top: '58%', left: '78%' },
    ],
  },
  {
    stepNum: '05',
    id: 'scales-network',
    title: 'Grows With You',
    subtitle: '1 station to 50,000+',
    shortDesc: 'Add cities, depots, and highway hubs without adding complexity.',
    icon: MapPin,
    satellites: [
      { icon: Globe, top: '18%', left: '24%' },
      { icon: Building2, top: '22%', left: '76%' },
      { icon: Users, top: '56%', left: '20%' },
      { icon: TrendingUp, top: '60%', left: '74%' },
    ],
  },
];

const cardFrame = [
  { height: 'md:h-[340px] md:w-[230px] lg:w-[250px] xl:w-[270px]', z: 'md:z-10' },
  { height: 'md:h-[400px] md:w-[250px] lg:w-[270px] xl:w-[290px]', z: 'md:z-20' },
  { height: 'md:h-[480px] md:w-[280px] lg:w-[300px] xl:w-[320px]', z: 'md:z-30' },
  { height: 'md:h-[400px] md:w-[250px] lg:w-[270px] xl:w-[290px]', z: 'md:z-20' },
  { height: 'md:h-[340px] md:w-[230px] lg:w-[250px] xl:w-[270px]', z: 'md:z-10' },
];

const Constellation: React.FC<{ card: ApproachCard; featured: boolean }> = ({ card, featured }) => {
  const Hub = card.icon;

  return (
    <div className="relative flex-1 min-h-[200px] md:min-h-0">
      <div
        className={`absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#00A09A]/20 ${
          featured ? 'w-[78%] aspect-square' : 'w-[70%] aspect-square'
        }`}
      />
      <div
        className={`absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#00A09A]/12 ${
          featured ? 'w-[50%] aspect-square' : 'w-[44%] aspect-square'
        }`}
      />

      {card.satellites.map((node, i) => {
        const NodeIcon = node.icon;
        return (
          <div
            key={`${card.id}-sat-${i}`}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ top: node.top, left: node.left }}
          >
            <div className="w-7 h-7 rounded-full bg-[#04110F] border border-[#00A09A]/35 flex items-center justify-center shadow-[0_0_12px_rgba(0,160,154,0.35)]">
              <NodeIcon className="w-3 h-3 text-[#00A09A]" />
            </div>
          </div>
        );
      })}

      <div className="absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2">
        <div
          className={`rounded-full bg-[#04110F] border border-[#00A09A] flex items-center justify-center shadow-[0_0_28px_rgba(0,160,154,0.55)] ${
            featured ? 'w-14 h-14' : 'w-11 h-11'
          }`}
        >
          <Hub className={`text-[#00A09A] ${featured ? 'w-6 h-6' : 'w-5 h-5'}`} />
        </div>
      </div>
    </div>
  );
};

export const OurApproachDialSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(2);

  return (
    <section
      id="approach"
      className="py-16 sm:py-20 md:py-24 bg-[#02060D] relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[650px] bg-gradient-to-b from-[#00A09A]/8 via-[#00A09A]/4 to-transparent rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-10 md:mb-14">
          <div className="inline-flex border border-white/15 rounded-full px-4 py-1.5 mb-4">
            <span className="text-slate-400 text-[11px] font-mono font-semibold tracking-[0.28em] uppercase">
              The Signature Journey
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[44px] font-light text-white tracking-tight leading-[1.15]">
            Five layers. One operating system.
            <br className="hidden md:block" />
            <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00A09A] to-white">
              {' '}Our Approach.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto mt-4 font-normal leading-relaxed">
            An uninterrupted energy operating layer that harmonizes charger connectivity, real-time intelligence, remote control, and network scalability.
          </p>
        </div>

        <div className="mt-8 md:mt-12 flex flex-col items-center gap-6 md:flex-row md:items-end md:justify-center md:gap-0 md:-space-x-5 xl:-space-x-8">
          {cards.map((card, index) => {
            const featured = index === activeIndex;
            const frame = cardFrame[index];

            return (
              <article
                key={card.id}
                onClick={() => setActiveIndex(index)}
                className={`
                  relative flex flex-col origin-bottom overflow-hidden rounded-2xl cursor-pointer
                  bg-[linear-gradient(to_bottom_right,#04080C_82%,#00A09A)]
                  transition-all duration-500 ease-out
                  hover:shadow-[0px_0px_54px_0px_rgba(0,160,154,0.4)]
                  w-full max-w-[340px] h-[420px]
                  ${frame.height} ${frame.z}
                  ${featured ? 'shadow-[0px_0px_40px_0px_rgba(0,160,154,0.28)]' : ''}
                `}
              >
                <Constellation card={card} featured={featured} />

                <div className="relative z-10 px-5 pb-6 pt-2">
                  <h3 className={`font-semibold text-white tracking-tight ${featured ? 'text-lg md:text-xl' : 'text-base md:text-lg'}`}>
                    {card.title}
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {card.shortDesc}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurApproachDialSection;
