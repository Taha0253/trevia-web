import React, { useState, useEffect } from 'react';
import { 
  GitFork, PlugZap, Gauge, RotateCw, MapPin, 
  Plus, X, ArrowRight, Play, Sparkles
} from 'lucide-react';
import { ApproachParticleCanvas } from '../animations/ApproachParticleCanvas';
import { fetchApproachSteps } from '../services/api';
import type { ApproachStepData } from '../types';

export const OurApproachSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [autoPlay, setAutoPlay] = useState<boolean>(true);
  const [, setStepsData] = useState<ApproachStepData[]>([]);

  useEffect(() => {
    fetchApproachSteps().then((data) => setStepsData(data));
  }, []);

  // Auto-play steps cycle every 4.5 seconds if enabled
  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev % 5) + 1);
    }, 4500);
    return () => clearInterval(interval);
  }, [autoPlay]);

  const cards = [
    {
      stepNum: '01',
      title: 'Unified integration layer',
      description: 'Connect networks, operators, and charging infrastructure through one operational layer.',
      icon: GitFork,
      techSpecs: {
        protocol: 'OCPP 1.6J / 2.0.1 WebSocket Tunnel',
        latency: '< 15ms command propagation',
        architecture: 'Decoupled edge ingesters with event streaming',
        benefit: 'Consolidates multi-vendor networks into a single pane of glass.'
      }
    },
    {
      stepNum: '02',
      title: 'Hardware agnostic',
      description: 'Work across different charger brands, models, and connected hardware.',
      icon: PlugZap,
      techSpecs: {
        oemSupport: 'ABB, Delta, Exicom, Schneider, StarCharge, Tritium',
        connectors: 'CCS2, Type 2, GB/T, CHAdeMO, AC/DC Dual Gun',
        compliance: 'ISO 15118 Plug & Charge ready',
        benefit: 'Zero hardware lock-in. Expand your network with any charger vendor.'
      }
    },
    {
      stepNum: '03',
      title: 'Live data & intelligence',
      description: 'Turn charging infrastructure into a real-time operational picture.',
      icon: Gauge,
      techSpecs: {
        frequency: 'Sub-second sensor telemetry streams',
        metrics: 'Volts, Amperes, SoC, Temperature, Power Factor, Session Revenue',
        analytics: 'AI predictive anomaly detection & peak-demand forecasting',
        benefit: 'Immediate visibility into charger health and energy flow.'
      }
    },
    {
      stepNum: '04',
      title: 'Automation & remote control',
      description: 'Reduce manual intervention with remote operations and automated workflows.',
      icon: RotateCw,
      techSpecs: {
        commands: 'Remote Start / Stop, Soft & Hard Reset, Unlock Connector, OTA Firmware',
        healing: 'Automated ground fault recovery and power-cycle heuristics',
        efficiency: 'Reduces manual technician field trips by over 75%',
        benefit: 'Maximum station uptime with minimal human dispatch.'
      }
    },
    {
      stepNum: '05',
      title: 'Scales with your network',
      description: 'Manage growing charging networks, sites, and regions from one platform.',
      icon: MapPin,
      techSpecs: {
        capacity: 'Tested to 50,000+ simultaneous connected charge points',
        multiTenant: 'Dedicated tenant isolation, custom tariffs, and sub-operator roles',
        sla: '99.99% high-availability distributed cloud cluster',
        benefit: 'Effortlessly scale from 10 chargers to nationwide mega-hubs.'
      }
    }
  ];

  return (
    <section id="approach" className="py-24 bg-[#060B09] relative overflow-hidden">
      
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-[#00A09A]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Eyebrow matching Image 4 */}
        <div className="mb-4">
          <span className="text-[#00A09A] font-mono text-xs sm:text-sm font-bold tracking-[0.25em] uppercase">
            OUR APPROACH
          </span>
        </div>

        {/* Section Heading & Subtitle matching Image 4 */}
        <div className="max-w-3xl mb-12">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.08] mb-6">
            Built to help CPOs grow and operate at scale.
          </h2>
          <p className="text-lg sm:text-xl text-neutral-300 font-normal leading-relaxed">
            Trevia brings connectivity, visibility, automation, and control together into one operational layer for charging infrastructure.
          </p>
        </div>

        {/* Autoplay & Interaction Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 bg-[#091510] border border-[#142C23] p-4 rounded-2xl">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#00A09A]/20 border border-[#00A09A]/40 text-[#00A09A] flex items-center justify-center">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-white uppercase tracking-wide">
                Interactive Operational Simulation
              </div>
              <div className="text-[11px] text-neutral-400">
                Click any step below to see its small particle movement animation.
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setAutoPlay(!autoPlay)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                autoPlay 
                  ? 'bg-[#00A09A] text-black font-bold' 
                  : 'bg-neutral-800 text-neutral-300 hover:text-white'
              }`}
            >
              <Play className={`w-3.5 h-3.5 ${autoPlay ? 'fill-current' : ''}`} />
              <span>{autoPlay ? 'Auto-Cycle Active' : 'Auto-Cycle Paused'}</span>
            </button>
          </div>
        </div>

        {/* Highlight 1: The Micro-Particle Engine Canvas for Our Approach */}
        <ApproachParticleCanvas
          activeStep={activeStep}
          onStepChange={(step) => {
            setAutoPlay(false);
            setActiveStep(step);
          }}
        />

        {/* Highlight 2: The 5 Vertical White Cards matching Image 4 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5">
          {cards.map((card, idx) => {
            const stepIndex = idx + 1;
            const Icon = card.icon;
            const isActive = activeStep === stepIndex;

            return (
              <div
                key={card.stepNum}
                onClick={() => {
                  setAutoPlay(false);
                  setActiveStep(stepIndex);
                }}
                className={`bg-white rounded-[2rem] p-6 text-neutral-900 flex flex-col justify-between cursor-pointer transition-all duration-300 relative group shadow-lg ${
                  isActive
                    ? 'ring-4 ring-[#00A09A] shadow-2xl shadow-[#00A09A]/25 -translate-y-2'
                    : 'hover:-translate-y-1 hover:shadow-xl'
                }`}
              >
                {/* Active Pill Badge */}
                {isActive && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#00A09A] text-black text-[10px] font-black uppercase tracking-wider px-3 py-0.5 rounded-full shadow-md whitespace-nowrap">
                    Active Step Simulation
                  </div>
                )}

                {/* Top Row: 01 and + button */}
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-xl font-bold text-[#008F8A] font-mono tracking-tight">
                      {card.stepNum}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setExpandedCard(expandedCard === stepIndex ? null : stepIndex);
                      }}
                      className={`w-9 h-9 rounded-xl border flex items-center justify-center transition-all ${
                        expandedCard === stepIndex
                          ? 'bg-neutral-900 text-white border-neutral-900 rotate-45'
                          : 'border-neutral-200 text-neutral-500 hover:border-neutral-900 hover:text-neutral-900'
                      }`}
                      title="Click for deep-dive technical specs"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Center Rounded Dark Square with Teal Icon */}
                  <div className="flex justify-center mb-10">
                    <div className="w-20 h-20 rounded-2xl bg-[#08120E] flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform duration-200">
                      <Icon className="w-8 h-8 text-[#00A09A]" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-neutral-900 tracking-tight leading-snug mb-3">
                    {card.title}
                  </h3>

                  {/* Teal Accent Line */}
                  <div className="w-8 h-1 bg-[#008F8A] rounded-full mb-3" />

                  {/* Description */}
                  <p className="text-xs sm:text-[13px] text-neutral-600 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {/* Bottom Step Indicator Bar */}
                <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between text-[11px] text-neutral-500">
                  <span className="font-medium">
                    {isActive ? '● Simulating' : 'View flow'}
                  </span>
                  <ArrowRight className={`w-3.5 h-3.5 text-[#008F8A] transition-transform ${isActive ? 'translate-x-1' : ''}`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal / Deep-Dive Spec Drawer when user clicks "+" */}
        {expandedCard && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setExpandedCard(null)}
          >
            <div 
              className="bg-[#0A1612] border border-[#1B3C30] rounded-3xl p-7 max-w-lg w-full text-white shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setExpandedCard(null)}
                className="absolute top-5 right-5 p-2 rounded-full text-neutral-400 hover:text-white bg-white/5 hover:bg-white/10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 text-[#00A09A] text-xs font-mono font-bold mb-2">
                <span>STEP {cards[expandedCard - 1].stepNum} ARCHITECTURAL SPECIFICATION</span>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-white">
                {cards[expandedCard - 1].title}
              </h3>
              <p className="text-sm text-neutral-300 mb-6">
                {cards[expandedCard - 1].description}
              </p>

              <div className="space-y-3 bg-[#050D0A] p-5 rounded-2xl border border-[#142C23] text-xs">
                {Object.entries(cards[expandedCard - 1].techSpecs).map(([key, val]) => (
                  <div key={key} className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-neutral-800/80 pb-2 last:border-b-0">
                    <span className="text-neutral-400 font-semibold uppercase tracking-wider text-[10px]">
                      {key}:
                    </span>
                    <span className="text-neutral-200 font-medium sm:text-right max-w-xs mt-0.5 sm:mt-0">
                      {val}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => {
                    setActiveStep(expandedCard);
                    setExpandedCard(null);
                  }}
                  className="bg-[#00A09A] text-black font-bold text-xs px-5 py-2.5 rounded-xl hover:bg-[#008F8A] transition"
                >
                  Activate Particle Simulation
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
