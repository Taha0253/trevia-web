import React, { useState, useEffect } from 'react';
import { 
  GitFork, PlugZap, Gauge, RotateCw, MapPin, 
  CheckCircle2, Radio, Cpu, Sparkles, ArrowRight, ArrowLeft, Play, Pause,
  Layers, FileText
} from 'lucide-react';

interface ComponentData {
  stepNum: string;
  id: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  angle: number; // degrees on the dial
  shortDesc: string;
  longDesc: string;
  pdfHighlights: string[];
  specs: {
    protocol: string;
    throughput: string;
    compatibility: string;
    operationalGain: string;
  };
  deepDive: {
    systemRole: string;
    architectureOverview: string;
    dataFlow: string[];
    technicalCapabilities: { label: string; detail: string }[];
    governanceNote: string;
  };
}

export const OurApproachDialSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(false);
  const [cardView, setCardView] = useState<'overview' | 'specs'>('overview');
  const [hoveredDialNode, setHoveredDialNode] = useState<number | null>(null);

  const components: ComponentData[] = [
    {
      stepNum: '01',
      id: 'unified-layer',
      title: 'Unified Network Layer',
      subtitle: 'Bringing Every Charger Under One Roof',
      icon: GitFork,
      angle: 270, // 12 o'clock (top)
      shortDesc: 'Connects all chargers over OCPP into one seamless control center. No more juggling fragmented portals or messy spreadsheets.',
      longDesc: 'Running an EV network shouldn\'t mean logging into five different dashboards. Trevia acts as the intelligent digital bridge between physical charging hardware and the people who rely on it every day — operators, fleet dispatchers, and drivers.',
      pdfHighlights: [
        'Instant, persistent live connection over OCPP 1.6J / 2.0.1 for real-time station health',
        'Replaces vendor portal sprawl with one clean, unified command center',
        'Standardized open APIs that plug directly into your existing ERP and fleet software'
      ],
      specs: {
        protocol: 'OCPP 1.6J / 2.0.1 Open JSON',
        throughput: '< 14ms Live Response',
        compatibility: 'Universal Multi-CPO Roaming',
        operationalGain: 'Zero Portal Chaos'
      },
      deepDive: {
        systemRole: 'Core Ingestion & Communication Gateway',
        architectureOverview: 'Chargers establish secure, persistent WebSocket connections (WSS) directly with Trevia. Each station is verified in milliseconds, with automatic heartbeat monitoring to spot offline units or line drops before drivers even arrive.',
        dataFlow: [
          'Charger initiates instant secure handshake over OCPP',
          'Trevia Gatekeeper verifies station identity and security certificates',
          'Live event stream relays heartbeats, meter values, and socket availability',
          'Operator consoles and driver apps receive real-time, synchronized updates'
        ],
        technicalCapabilities: [
          { label: 'Secure Transport', detail: 'Encrypted TLS 1.3 with automatic certificate renewal' },
          { label: 'High Throughput', detail: 'Processes over 1,500 charging events every second with zero lag' },
          { label: 'State Sync', detail: 'Sub-second sync between physical charger guns and live mobile apps' }
        ],
        governanceNote: 'Engineered to open national standards for reliable Indian EV infrastructure.'
      }
    },
    {
      stepNum: '02',
      id: 'hardware-agnostic',
      title: 'Hardware Freedom',
      subtitle: 'Works With Any Charger, Any Brand',
      icon: PlugZap,
      angle: 342, // ~2 o'clock
      shortDesc: 'Never get locked into a single charger manufacturer. Trevia works seamlessly with all major AC & DC charger brands and plug types.',
      longDesc: 'You should have the freedom to buy whatever charging hardware fits your budget and timeline best. Whether managing 3.3kW slow AC destination chargers or 360kW ultra-fast DC highway dispensers, Trevia unifies them all into one consistent, friendly experience.',
      pdfHighlights: [
        'Works out of the box with ABB, Delta, Exicom, Schneider, StarCharge, Tritium, and more',
        'Universal connector support: CCS2, Type 2, GB/T, CHAdeMO, and dual-gun setups',
        'Plug & Charge ready (ISO 15118) — drivers simply plug in and energy flows automatically'
      ],
      specs: {
        protocol: 'Open Standard OCPP & ISO 15118',
        throughput: '0.38s Hardware Handshake',
        compatibility: '100% Brand Agnostic',
        operationalGain: 'Zero Hardware Lock-In'
      },
      deepDive: {
        systemRole: 'Hardware Normalization & Interoperability Engine',
        architectureOverview: 'Trevia standardizes different manufacturer quirks and firmware behaviors at the software layer, giving operators complete freedom to mix and match charger brands across their network without friction.',
        dataFlow: [
          'Hardware-specific message formats are normalized into clean, unified events',
          'Connector states (Available, Charging, Preparing, Faulted) mapped in real time',
          'Dynamic power sharing managed smoothly across multi-gun dispensers',
          'Diagnostic logs translated into plain, actionable troubleshooting tips'
        ],
        technicalCapabilities: [
          { label: 'Supported Brands', detail: 'ABB, Delta, Exicom, Schneider Electric, StarCharge, Tritium, and any OCPP-compliant unit' },
          { label: 'Connector Types', detail: 'CCS2, Type 2 Mennekes, GB/T, CHAdeMO, and AC slow-charge sockets' },
          { label: 'Seamless Charging', detail: 'ISO 15118 Plug & Charge auto-handshake and secure contract certificates' }
        ],
        governanceNote: 'True hardware independence — invest in the equipment that suits your business.'
      }
    },
    {
      stepNum: '03',
      id: 'live-data',
      title: 'Live Station Pulse',
      subtitle: 'Real-Time Health & Zero Ghost Chargers',
      icon: Gauge,
      angle: 54, // ~4 o'clock
      shortDesc: 'Know the exact power, voltage, and socket availability at every station so drivers never show up to a dead or broken charger.',
      longDesc: 'EV drivers and operators deserve complete transparency. Trevia transforms raw electrical telemetry into clear, visual station health. Track every session live, see real delivered kWh, and eliminate revenue loss and driver frustration forever.',
      pdfHighlights: [
        'Live electrical monitoring: Voltage, Current, Battery SoC, and Temperature',
        'Automatic fault detection alerts you to issues before a driver reports them',
        'Flawless session billing with transaction-level energy metering'
      ],
      specs: {
        protocol: 'Sub-Second Live Telemetry',
        throughput: '100ms Sensor Precision',
        compatibility: 'Instant Smart Fault Alerts',
        operationalGain: 'Zero Ghost Chargers'
      },
      deepDive: {
        systemRole: 'Telemetry Processing & Session Ledger',
        architectureOverview: 'Connected chargers continuously broadcast energy usage and operating stats. Trevia turns this data stream into instant operational insights, fraud protection, and transparent driver billing.',
        dataFlow: [
          'High-frequency power and energy meter readings ingested securely',
          'Voltage fluctuations, overheating, or ground faults evaluated automatically',
          'Charging speed (kW), energy added (kWh), and cost calculated live for the driver',
          'Smart alerts instantly notify site managers if a charger trips'
        ],
        technicalCapabilities: [
          { label: 'Live Metrics', detail: 'Power (kW), Voltage (V), Amperage (A), Energy (kWh), Battery SoC (%), and Temp (°C)' },
          { label: 'Smart Error Codes', detail: 'Instant diagnostics for ground faults, over-voltage, temperature surges, and EV communication drops' },
          { label: 'Audit Precision', detail: 'Tamper-proof transaction records ensuring every kilowatt-hour is accurately billed' }
        ],
        governanceNote: 'Built on transparent, verifiable energy metering for complete trust.'
      }
    },
    {
      stepNum: '04',
      id: 'automation-control',
      title: 'Smart Self-Healing',
      subtitle: 'Instant Remote Fixes Without Site Trips',
      icon: RotateCw,
      angle: 126, // ~8 o'clock
      shortDesc: 'Reboot frozen chargers, unlock stubborn connectors, and fix common glitches in seconds right from your screen — saving costly field visits.',
      longDesc: 'Sending technicians into the field for minor software hiccups is expensive and slow. Trevia gives operators one-click remote controls and automated self-healing routines that resolve temporary charger glitches in seconds, keeping uptime above 99.8%.',
      pdfHighlights: [
        'One-click remote reboot, connector unlock, and instant diagnostics from anywhere',
        'Automated self-healing algorithms fix temporary network and ground drops autonomously',
        'Cuts emergency technician visits and field maintenance costs by more than 75%'
      ],
      specs: {
        protocol: 'Instant Cloud-to-Charger Commands',
        throughput: '< 250ms Command Execution',
        compatibility: 'Remote Reboot & Unlocking',
        operationalGain: '> 75% Fewer Site Visits'
      },
      deepDive: {
        systemRole: 'Remote Operations & Self-Healing Engine',
        architectureOverview: 'When a charger runs into an anomaly or temporary lockup, Trevia\'s self-healing layer can automatically attempt soft recoveries, or allow support teams to trigger fixes remotely with zero travel time.',
        dataFlow: [
          'Operator triggers a command (e.g., Soft Reboot or Unlock Gun) from the web dashboard',
          'Trevia sends a cryptographically signed command payload to the charger',
          'Charger executes the instruction and confirms success in under a second',
          'Automated fallback kicks in if the hardware is unresponsive to restore connection'
        ],
        technicalCapabilities: [
          { label: 'Remote Actions', detail: 'Start/Stop Charging, Soft/Hard Reboot, Connector Unlock, and Remote Config Tuning' },
          { label: 'Self-Healing Routines', detail: 'Automated reconnect watchdogs and stuck connector safeties' },
          { label: 'Over-the-Air Updates', detail: 'Safe, scheduled firmware deployment with instant rollback protection' }
        ],
        governanceNote: 'Maximizes station uptime while keeping maintenance overhead minimal.'
      }
    },
    {
      stepNum: '05',
      id: 'scales-network',
      title: 'Grows With Your Ambition',
      subtitle: 'From 1 Station to 50,000+ Nationwide',
      icon: MapPin,
      angle: 198, // ~10 o'clock
      shortDesc: 'Expanding to new cities, fleet depots, or highway hubs is effortless. Add chargers in minutes without adding administrative complexity.',
      longDesc: 'Whether you\'re a local business installing your first two customer chargers or a national energy enterprise rolling out thousands of highway hubs, Trevia\'s high-speed cloud architecture scales with you without slowdowns or surprises.',
      pdfHighlights: [
        'Clear visibility across multi-city charging hubs, highway stations, and private fleet depots',
        'Granular role-based permissions for site managers, accountants, and field techs',
        'Flexible tariff rules: time-of-day pricing, peak surge rates, and fleet discounts'
      ],
      specs: {
        protocol: 'High-Availability Multi-Tenant Cloud',
        throughput: '50,000+ Concurrent Chargers',
        compatibility: 'Multi-City & Hub Ready',
        operationalGain: 'Effortless Scaling'
      },
      deepDive: {
        systemRole: 'Enterprise Multi-Site Cloud Architecture',
        architectureOverview: 'Designed from day one for massive scale, Trevia uses distributed cloud microservices so expanding across India never slows down your dashboard or delays driver transactions.',
        dataFlow: [
          'Organized hierarchy: Organization → City / Hub → Charging Station → Individual Plug',
          'Role-based access controls for admins, site managers, fleet coordinators, and billing',
          'Dynamic tariff manager applies time-of-use rates and parking penalty fees automatically',
          'Consolidated financial and energy analytics across all locations and charger brands'
        ],
        technicalCapabilities: [
          { label: 'Network Capacity', detail: 'Tested for 50,000+ active charging points with continuous zero-downtime reliability' },
          { label: 'Multi-Tenancy', detail: 'Secure isolation for private operator data, custom branding, and payouts' },
          { label: 'High Availability', detail: '99.99% cloud uptime SLA with redundant multi-zone Indian cloud hosting' }
        ],
        governanceNote: 'Built to power India\'s rapidly accelerating clean electric mobility future.'
      }
    }
  ];

  // Auto-cycle if enabled
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev % 5) + 1);
    }, 4500);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const activeComponent = components[activeStep - 1];
  const activeAngle = activeComponent.angle;

  return (
    <section 
      id="approach" 
      className="py-14 sm:py-18 md:py-20 bg-[#02060D] relative overflow-hidden select-none"
    >
      {/* Ambient background volumetric glow */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[650px] bg-gradient-to-b from-[#00A8FF]/8 via-[#00F0FF]/4 to-transparent rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-[#00F0FF] text-xs font-mono font-semibold uppercase tracking-[0.25em] mb-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] animate-pulse" />
              <span>THE SIGNATURE JOURNEY</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-white tracking-tight leading-tight">
              Our <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00A8FF] via-[#00F0FF] to-white drop-shadow-[0_0_35px_rgba(0,168,255,0.4)]">Approach.</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-400 max-w-xl mt-2 font-normal leading-relaxed">
              An uninterrupted energy operating layer that harmonizes charger connectivity, real-time intelligence, remote control, and network scalability.
            </p>
          </div>

          {/* Controls Bar: Cycle mode & Active Stage Indicator */}
          <div className="flex items-center gap-3 bg-[#040C18] border border-[#0E2C52] px-4 py-2 rounded-full shadow-lg shrink-0 self-start md:self-auto">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white transition"
              title="Toggle automatic stage rotation"
            >
              {isAutoPlaying ? (
                <>
                  <Pause className="w-3.5 h-3.5 text-[#00F0FF]" />
                  <span>Auto-Rotation</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 text-[#00A8FF]" />
                  <span>Interactive Mode</span>
                </>
              )}
            </button>
            <div className="w-px h-4 bg-[#0E2C52]" />
            <span className="text-[11px] font-mono text-[#00F0FF] font-bold">
              STAGE {activeComponent.stepNum} / 05
            </span>
          </div>
        </div>

        {/* MAIN INTERACTIVE CONTAINER: Rotary Dial on Left, Card Showcase with Embedded Specs on Right */}
        <div className="rounded-3xl border border-[#0E3460] bg-[#030914]/95 backdrop-blur-2xl p-6 sm:p-8 shadow-[0_0_50px_rgba(0,168,255,0.16)] relative overflow-hidden">
          
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(#00A8FF_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* THE ROTARY COMMAND DIAL (Desktop: 5 cols) */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
              
              <div className="text-center mb-4">
                <div className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-[#00F0FF] mb-0.5">
                  <Sparkles className="w-3 h-3 text-[#00F0FF]" />
                  <span>ROTARY COMMAND DIAL</span>
                </div>
                <p className="text-xs text-slate-400">
                  Click or hover any stage node to command the dial
                </p>
              </div>

              {/* ROTARY DIAL INTERACTIVE SVG CONTROLLER */}
              <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] flex items-center justify-center">
                
                {/* Ambient glow */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#00A8FF]/15 via-[#00F0FF]/8 to-transparent blur-2xl pointer-events-none" />
                
                {/* SVG Degree Track & Pointer Needle */}
                <svg className="w-full h-full absolute inset-0 pointer-events-none select-none" viewBox="0 0 320 320">
                  <defs>
                    <linearGradient id="dialTrackGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#00A8FF" stopOpacity="0.4" />
                      <stop offset="50%" stopColor="#00F0FF" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#00D2C4" stopOpacity="0.3" />
                    </linearGradient>
                    <radialGradient id="hubGradient" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#081E38" />
                      <stop offset="80%" stopColor="#030A14" />
                      <stop offset="100%" stopColor="#02060D" />
                    </radialGradient>
                  </defs>

                  {/* Outer Orbit Track */}
                  <circle
                    cx="160"
                    cy="160"
                    r="132"
                    fill="none"
                    stroke="#0E2C52"
                    strokeWidth="1.5"
                    strokeDasharray="4 6"
                  />

                  {/* Inner Solid Track */}
                  <circle
                    cx="160"
                    cy="160"
                    r="108"
                    fill="none"
                    stroke="url(#dialTrackGradient)"
                    strokeWidth="2"
                    opacity="0.5"
                  />

                  {/* Precision Angular Degree Ticks */}
                  {Array.from({ length: 36 }).map((_, i) => {
                    const angleDeg = i * 10;
                    const rad = (angleDeg * Math.PI) / 180;
                    const r1 = i % 3 === 0 ? 120 : 124;
                    const r2 = 130;
                    const x1 = 160 + r1 * Math.cos(rad);
                    const y1 = 160 + r1 * Math.sin(rad);
                    const x2 = 160 + r2 * Math.cos(rad);
                    const y2 = 160 + r2 * Math.sin(rad);
                    const isMajor = i % 3 === 0;

                    return (
                      <line
                        key={i}
                        x1={x1}
                        y1={y1}
                        x2={x2}
                        y2={y2}
                        stroke={isMajor ? '#00F0FF' : '#0E2C52'}
                        strokeWidth={isMajor ? '1.5' : '1'}
                        opacity={isMajor ? '0.75' : '0.4'}
                      />
                    );
                  })}

                  {/* Dynamic Pointer Needle */}
                  <g 
                    style={{
                      transformOrigin: '160px 160px',
                      transform: `rotate(${activeAngle + 90}deg)`,
                      transition: 'transform 0.65s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                  >
                    <line
                      x1="160"
                      y1="160"
                      x2="160"
                      y2="54"
                      stroke="#00F0FF"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                    <polygon
                      points="160,46 156,56 164,56"
                      fill="#00F0FF"
                    />
                  </g>

                  {/* Central Hub */}
                  <circle
                    cx="160"
                    cy="160"
                    r="48"
                    fill="url(#hubGradient)"
                    stroke="#00F0FF"
                    strokeWidth="1.5"
                  />
                  <circle
                    cx="160"
                    cy="160"
                    r="42"
                    fill="none"
                    stroke="#0E2C52"
                    strokeWidth="1"
                    strokeDasharray="2 3"
                  />
                </svg>

                {/* Central Hub Interactive Content */}
                <div 
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  className="absolute z-20 w-20 h-20 rounded-full flex flex-col items-center justify-center cursor-pointer group"
                  title="Click to toggle auto-rotation"
                >
                  <span className="text-[9px] font-mono text-slate-400 group-hover:text-white uppercase tracking-wider">
                    STAGE
                  </span>
                  <span className="text-xl font-mono font-black text-[#00F0FF] drop-shadow-[0_0_10px_rgba(0,240,255,0.7)]">
                    {activeComponent.stepNum}
                  </span>
                  <span className="text-[8px] font-mono text-slate-400 uppercase tracking-tighter">
                    {isAutoPlaying ? 'ROTATING' : 'LOCKED'}
                  </span>
                </div>

                {/* 5 ROTARY DIAL INTERACTIVE NODES */}
                {components.map((comp, idx) => {
                  const stepIndex = idx + 1;
                  const isActive = activeStep === stepIndex;
                  const isHovered = hoveredDialNode === stepIndex;
                  const Icon = comp.icon;

                  const rad = (comp.angle * Math.PI) / 180;
                  const nodeRadius = 108;
                  const leftPct = 50 + ((nodeRadius * Math.cos(rad)) / 160) * 50;
                  const topPct = 50 + ((nodeRadius * Math.sin(rad)) / 160) * 50;

                  return (
                    <button
                      key={comp.id}
                      onClick={() => {
                        setIsAutoPlaying(false);
                        setActiveStep(stepIndex);
                      }}
                      onMouseEnter={() => {
                        setHoveredDialNode(stepIndex);
                        setActiveStep(stepIndex);
                      }}
                      onMouseLeave={() => setHoveredDialNode(null)}
                      style={{
                        left: `${leftPct}%`,
                        top: `${topPct}%`,
                        transform: 'translate(-50%, -50%)'
                      }}
                      className={`absolute z-30 group transition-all duration-300 focus:outline-none ${
                        isActive ? 'scale-110 z-40' : 'hover:scale-105'
                      }`}
                      title={`${comp.stepNum}: ${comp.title}`}
                    >
                      <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center transition-all duration-300 relative ${
                        isActive
                          ? 'bg-[#07172C] border-2 border-[#00F0FF] shadow-[0_0_20px_rgba(0,240,255,0.7)]'
                          : isHovered
                          ? 'bg-[#091E38] border border-[#00A8FF] shadow-[0_0_12px_rgba(0,168,255,0.4)]'
                          : 'bg-[#050E1A] border border-[#0E2C52] hover:border-slate-400'
                      }`}>
                        {/* Number Badge Tag */}
                        <div className={`absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full font-mono text-[9px] font-black flex items-center justify-center ${
                          isActive
                            ? 'bg-[#00F0FF] text-black shadow-md'
                            : 'bg-[#0A1A2E] text-slate-400 border border-[#0E2C52]'
                        }`}>
                          {comp.stepNum}
                        </div>

                        <Icon className={`w-5 h-5 transition-all duration-300 ${
                          isActive 
                            ? 'text-[#00F0FF] drop-shadow-[0_0_8px_#00F0FF]' 
                            : 'text-slate-400 group-hover:text-slate-100'
                        }`} />
                      </div>
                    </button>
                  );
                })}

              </div>

              {/* Bottom Quick Jump Selector */}
              <div className="flex items-center gap-2 mt-4">
                <button
                  onClick={() => setActiveStep(activeStep === 1 ? 5 : activeStep - 1)}
                  className="p-1.5 rounded-lg bg-[#061426] border border-[#0E2C52] hover:border-[#00A8FF] text-slate-400 hover:text-white transition"
                  title="Previous Step"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                </button>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#040C18] border border-[#0E2C52] text-xs font-mono text-slate-300">
                  <span className="text-[#00F0FF] font-bold">STAGE {activeComponent.stepNum}</span>
                  <span className="text-slate-600">/</span>
                  <span>05</span>
                </div>
                <button
                  onClick={() => setActiveStep((activeStep % 5) + 1)}
                  className="p-1.5 rounded-lg bg-[#061426] border border-[#0E2C52] hover:border-[#00A8FF] text-slate-400 hover:text-white transition"
                  title="Next Step"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

            {/* THE CARD SHOWCASE (Desktop: 7 cols) - CONTAINS THE MORE PAGE DIRECTLY WITHIN THE CARD */}
            <div className="lg:col-span-7">
              <div className="bg-[#050F1E] border border-[#0E3460] rounded-2xl p-5 sm:p-7 shadow-xl relative overflow-hidden backdrop-blur-xl">
                
                {/* Top Accent Line */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#00A8FF] via-[#00F0FF] to-[#00D2C4]" />

                {/* Top Navigation Row: Stage tag + View Switcher (Overview vs Full Specs) */}
                <div className="flex items-center justify-between gap-2 mb-5 pb-3 border-b border-[#0E2C52]">
                  <div className="flex items-center gap-2.5">
                    <span className="text-2xl font-mono font-black text-[#00F0FF]">
                      {activeComponent.stepNum}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#00F0FF]/10 border border-[#00F0FF]/30 text-[#00F0FF] text-[11px] font-mono font-semibold">
                      TREVIA ARCHITECTURE
                    </span>
                  </div>

                  {/* Inline Toggle: Overview vs Technical Specs */}
                  <div className="flex items-center gap-1 bg-[#02060D] p-1 rounded-xl border border-[#0E2C52]">
                    <button
                      onClick={() => setCardView('overview')}
                      className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono font-semibold transition ${
                        cardView === 'overview'
                          ? 'bg-[#00F0FF] text-black shadow-md'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      <Layers className="w-3.5 h-3.5" />
                      <span>Overview</span>
                    </button>
                    <button
                      onClick={() => setCardView('specs')}
                      className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono font-semibold transition ${
                        cardView === 'specs'
                          ? 'bg-[#00F0FF] text-black shadow-md'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>Full Specs</span>
                    </button>
                  </div>
                </div>

                {/* VIEW 1: OVERVIEW CARD */}
                {cardView === 'overview' && (
                  <div className="space-y-4 animate-fadeIn">
                    {/* Header Row */}
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-xl bg-[#030A14] border border-[#0E3A68] flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(0,240,255,0.2)]">
                        {React.createElement(activeComponent.icon, {
                          className: "w-7 h-7 text-[#00F0FF] drop-shadow-[0_0_8px_#00F0FF]"
                        })}
                      </div>
                      <div className="space-y-0.5 flex-1">
                        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                          {activeComponent.title}
                        </h3>
                        <p className="text-xs font-medium text-[#00A8FF]">
                          {activeComponent.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                      {activeComponent.longDesc}
                    </p>

                    {/* PDF Highlights */}
                    <div className="space-y-2 pt-1">
                      {activeComponent.pdfHighlights.map((hl, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                          <div className="w-3.5 h-3.5 rounded-full bg-[#00F0FF]/15 text-[#00F0FF] flex items-center justify-center shrink-0 mt-0.5">
                            <CheckCircle2 className="w-3 h-3" />
                          </div>
                          <span className="leading-snug">{hl}</span>
                        </div>
                      ))}
                    </div>

                    {/* Telemetry Matrix Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-3 border-t border-[#0E2C52]">
                      <div className="bg-[#030914] p-2.5 rounded-lg border border-[#0E223D]">
                        <span className="text-[9px] font-mono text-slate-400 block uppercase">Protocol</span>
                        <span className="text-xs font-bold text-white block truncate">{activeComponent.specs.protocol}</span>
                      </div>
                      <div className="bg-[#030914] p-2.5 rounded-lg border border-[#0E223D]">
                        <span className="text-[9px] font-mono text-slate-400 block uppercase">Latency</span>
                        <span className="text-xs font-bold text-[#00F0FF] block truncate">{activeComponent.specs.throughput}</span>
                      </div>
                      <div className="bg-[#030914] p-2.5 rounded-lg border border-[#0E223D]">
                        <span className="text-[9px] font-mono text-slate-400 block uppercase">Scope</span>
                        <span className="text-xs font-bold text-white block truncate">{activeComponent.specs.compatibility}</span>
                      </div>
                      <div className="bg-[#030914] p-2.5 rounded-lg border border-[#0E223D]">
                        <span className="text-[9px] font-mono text-slate-400 block uppercase">Benefit</span>
                        <span className="text-xs font-bold text-[#00D2C4] block truncate">{activeComponent.specs.operationalGain}</span>
                      </div>
                    </div>

                    {/* Bottom CTA to View Specs directly inside card */}
                    <div className="pt-2 flex items-center justify-between">
                      <span className="text-[11px] text-slate-400 font-mono flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] animate-pulse" />
                        <span>Live Synchronized Layer</span>
                      </span>
                      <button
                        onClick={() => setCardView('specs')}
                        className="px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-[#00A8FF] to-[#00D2C4] hover:from-[#1B84FF] hover:to-[#00F0FF] text-black font-bold text-xs flex items-center gap-1.5 transition-all shadow-md active:scale-95"
                      >
                        <span>Inspect Specs</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                )}

                {/* VIEW 2: FULL ARCHITECTURAL SPECIFICATION EMBEDDED INSIDE THE CARD */}
                {cardView === 'specs' && (
                  <div className="space-y-4 animate-fadeIn max-h-[440px] overflow-y-auto pr-1">
                    
                    <div>
                      <span className="text-xs font-mono text-[#00A8FF] font-bold block mb-1">
                        {activeComponent.deepDive.systemRole}
                      </span>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {activeComponent.deepDive.architectureOverview}
                      </p>
                    </div>

                    {/* Sequence */}
                    <div>
                      <h4 className="text-[11px] font-mono font-bold text-[#00F0FF] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                        <Radio className="w-3 h-3 text-[#00F0FF]" />
                        <span>Protocol Data Flow & Sequence</span>
                      </h4>
                      <div className="space-y-1.5 bg-[#02060D] p-3 rounded-xl border border-[#0E223D]">
                        {activeComponent.deepDive.dataFlow.map((step, idx) => (
                          <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                            <span className="font-mono text-[#00F0FF] font-bold shrink-0">0{idx + 1}.</span>
                            <span className="leading-snug">{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Enterprise Capabilities */}
                    <div>
                      <h4 className="text-[11px] font-mono font-bold text-[#00F0FF] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                        <Cpu className="w-3 h-3 text-[#00F0FF]" />
                        <span>Enterprise Technical Capabilities</span>
                      </h4>
                      <div className="grid grid-cols-1 gap-1.5">
                        {activeComponent.deepDive.technicalCapabilities.map((item, idx) => (
                          <div key={idx} className="bg-[#02060D] p-2.5 rounded-lg border border-[#0E223D] flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs">
                            <span className="font-mono font-bold text-white shrink-0">{item.label}</span>
                            <span className="text-slate-300 sm:text-right">{item.detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Footer inside Specs */}
                    <div className="pt-2 border-t border-[#0E223D] flex items-center justify-between">
                      <span className="text-[10px] text-slate-500 font-mono">
                        {activeComponent.deepDive.governanceNote}
                      </span>
                      <button
                        onClick={() => setCardView('overview')}
                        className="px-3 py-1 rounded-lg bg-[#061426] border border-[#0E2C52] text-xs font-mono text-slate-300 hover:text-white transition"
                      >
                        ← Return to Overview
                      </button>
                    </div>

                  </div>
                )}

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default OurApproachDialSection;
