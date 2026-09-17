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
      title: 'Unified integration layer',
      subtitle: 'The Digital Operating Layer for EV Networks',
      icon: GitFork,
      angle: 270, // 12 o'clock (top)
      shortDesc: 'Connects chargers over OCPP 1.6J and gives operators one centralized place to monitor, run, and grow their charging infrastructure.',
      longDesc: 'Trevia operates as the critical digital infrastructure layer sitting between physical charging hardware and the operators, fleets, enterprises, and drivers who depend on it. By establishing persistent WebSocket connections directly to chargers, Trevia CMS replaces fragmented vendor dashboards with a single interoperable operating layer.',
      pdfHighlights: [
        'Persistent WebSocket tunnel over OCPP 1.6J / 2.0.1 for instant real-time telemetry',
        'Eliminates multi-vendor portal sprawl by consolidating all sites into one operating view',
        'Standardized bi-directional APIs expose charging, session, and operational data directly to ERP and fleet systems'
      ],
      specs: {
        protocol: 'OCPP 1.6J / 2.0.1 JSON',
        throughput: '< 14ms WebSocket Latency',
        compatibility: 'Multi-Network Aggregation',
        operationalGain: 'Zero Vendor Dashboard Sprawl'
      },
      deepDive: {
        systemRole: 'Core Ingestion & Communication Gateway',
        architectureOverview: 'Chargers establish secure, persistent WebSocket connections (WSS) to the Trevia Edge Ingestion cluster. Each connected charger authenticates with credentials and exchanges periodic heartbeat signals, allowing Trevia CMS to instantly detect dropped connections or line anomalies.',
        dataFlow: [
          'Charger initiates WebSocket handshake over OCPP 1.6J / 2.0.1',
          'Trevia Authentication Gatekeeper verifies charger identity and station UUID',
          'Bi-directional event loop streams heartbeats, meter values, and status notifications',
          'Enterprise REST & WebSocket APIs broadcast synchronized state to operator consoles'
        ],
        technicalCapabilities: [
          { label: 'Transport Layer', detail: 'Encrypted WSS / TLS 1.3 with automated certificate rotation' },
          { label: 'Event Streaming', detail: 'Distributed message broker pipeline processing >1,500 msgs/sec' },
          { label: 'State Sync', detail: 'Sub-second reconciliation between physical charger hardware and cloud state' }
        ],
        governanceNote: 'Complies with 2026 Trevia Digital Infrastructure Architecture specifications.'
      }
    },
    {
      stepNum: '02',
      id: 'hardware-agnostic',
      title: 'Hardware agnostic',
      subtitle: 'Open Protocols Across Every Manufacturer',
      icon: PlugZap,
      angle: 342, // ~2 o'clock
      shortDesc: 'Works across diverse charger brands, power classes, and connector types rather than locking operators into a single vendor ecosystem.',
      longDesc: 'Trevia CMS communicates using open, standardized protocols so charge point operators are never hostage to proprietary hardware vendors. Whether managing 3.3kW AC destination chargers or 360kW DC ultra-fast highway dispensers, Trevia normalizes hardware telemetry and commands into one unified interface.',
      pdfHighlights: [
        'Vendor-neutral connectivity compatible with ABB, Delta, Exicom, Schneider, StarCharge, and Tritium',
        'Universal connector support: CCS2, Type 2, GB/T, CHAdeMO, and dual-gun AC/DC configurations',
        'ISO 15118 Plug & Charge ready for seamless automated vehicle authentication without RFIDs'
      ],
      specs: {
        protocol: 'Open Standard OCPP 1.6J / ISO 15118',
        throughput: '0.38s Protocol Handshake',
        compatibility: '100% Vendor Independent',
        operationalGain: 'Zero Hardware Lock-In'
      },
      deepDive: {
        systemRole: 'Hardware Normalization & Interoperability Engine',
        architectureOverview: 'By implementing strict protocol compliance at the boundary, Trevia decouples hardware vendor firmware quirks from operator workflows. Operators can freely procure and deploy whatever hardware offers the best price and availability.',
        dataFlow: [
          'OEM-specific message payloads are parsed through Trevia protocol normalizers',
          'Connector states (Available, Preparing, Charging, SuspendedEVSE, Faulted) mapped to standard schema',
          'Dynamic power profiles negotiated across variable AC/DC gun allocations',
          'Diagnostic logs normalized for consistent multi-vendor troubleshooting'
        ],
        technicalCapabilities: [
          { label: 'Supported OEMs', detail: 'ABB, Delta, Exicom, Schneider Electric, StarCharge, Tritium, etc.' },
          { label: 'Connector Support', detail: 'CCS2 (Combined Charging System 2), Type 2 Mennekes, GB/T, CHAdeMO' },
          { label: 'Plug & Charge', detail: 'ISO 15118 V2G and TLS contract certificate handling ready' }
        ],
        governanceNote: 'Hardware agnostic by design; zero proprietary hardware lock-in.'
      }
    },
    {
      stepNum: '03',
      id: 'live-data',
      title: 'Live data & intelligence',
      subtitle: 'Real-Time Monitoring & Telemetry Visibility',
      icon: Gauge,
      angle: 54, // ~4 o'clock
      shortDesc: 'Charger status, connectivity, and health are visible in real time so operators see problems as they happen rather than after a failed charge.',
      longDesc: 'Trevia transforms raw charging equipment into an actionable real-time operational picture. The platform ingests telemetry (voltage, current, temperature, energy delivered, and error codes) and tracks every charging session from initiation to completion, ensuring zero untracked sessions or revenue leakage.',
      pdfHighlights: [
        'Sub-second electrical telemetry: Volts, Amperes, SoC, Temperature, and Power Factor',
        'Direct fault and error visibility surfaced instantly to operators, eliminating physical site checks',
        'Complete end-to-end session reconciliation with transaction-level energy metering'
      ],
      specs: {
        protocol: 'Sub-Second Real-Time Telemetry',
        throughput: '100ms Sampling Granularity',
        compatibility: 'Direct OCPP Fault Codes',
        operationalGain: 'Immediate Failure Detection'
      },
      deepDive: {
        systemRole: 'Telemetry Processing & Session Ledger',
        architectureOverview: 'Every connected charger continuously reports energy meter values and operational parameters. Trevia ingests this stream, performs real-time anomaly detection, and compiles an immutable ledger for audit, revenue reconciliation, and preventive maintenance.',
        dataFlow: [
          'MeterValues.req ingested at configurable intervals (1s to 60s)',
          'Voltage sag, thermal escalation, and ground resistance evaluated against safety thresholds',
          'Session duration, energy delivered (kWh), and instantaneous kW mapped to active driver transaction',
          'Faulted state triggers instant notification webhooks and operator triage queues'
        ],
        technicalCapabilities: [
          { label: 'Telemetry Metrics', detail: 'Active Power (kW), Voltage (V), Current (A), Energy (kWh), SoC (%), Temp (°C)' },
          { label: 'Fault Codes', detail: 'Native OCPP ErrorCodes (GroundFailure, OverVoltage, HighTemperature, EVCommunicationError)' },
          { label: 'Audit Trail', detail: 'Transaction-level billing reconciliation with zero untracked kilowatt-hours' }
        ],
        governanceNote: 'Operational visibility grounded in protocol-level accuracy.'
      }
    },
    {
      stepNum: '04',
      id: 'automation-control',
      title: 'Automation & remote control',
      subtitle: 'Centralized Commanding & Automated Self-Healing',
      icon: RotateCw,
      angle: 126, // ~8 o'clock
      shortDesc: 'Where supported by hardware, operators issue remote commands—resetting chargers or querying live status—without costly site visits.',
      longDesc: 'Operational fragmentation makes charging networks expensive to run when technicians must be dispatched for minor glitches. Trevia CMS empowers operators to issue remote commands (Soft/Hard Reset, Remote Start/Stop, Unlock Connector, OTA Firmware updates) and leverages automated self-healing routines to restore uptime autonomously.',
      pdfHighlights: [
        'Issue remote commands: Soft Reset, Hard Reset, Unlock Connector, and Diagnostic Queries without site visits',
        'Automated self-healing heuristics resolve transient ground and network faults autonomously',
        'Reduces manual technician field trips and operational dispatch costs by over 75%'
      ],
      specs: {
        protocol: 'Bi-Directional Command RPC',
        throughput: '< 250ms Command ACK',
        compatibility: 'Soft/Hard Reset & Connector Unlock',
        operationalGain: '> 75% Fewer Truck Rolls'
      },
      deepDive: {
        systemRole: 'Remote Operations & Autonomous Heuristics Dispatcher',
        architectureOverview: 'When chargers enter an anomalous or unresponsive state, Trevia can either execute automated healing policies or allow operations personnel to dispatch remote commands directly from the dashboard, restoring stations without vehicle travel.',
        dataFlow: [
          'Operator dispatches command (e.g. Reset.req or UnlockConnector.req) from CMS console',
          'Trevia command router sends signed JSON-RPC payload across persistent WebSocket',
          'Charger returns Confirmation (Accepted / Rejected / Scheduled)',
          'Automated fallback loop initiates staged soft-reboot if communication timeouts occur'
        ],
        technicalCapabilities: [
          { label: 'Remote Commands', detail: 'RemoteStartTransaction, RemoteStopTransaction, Reset (Soft/Hard), UnlockConnector, ChangeConfiguration' },
          { label: 'Self-Healing', detail: 'Automated heartbeat timeout recovery and connector lock watchdog' },
          { label: 'Firmware Management', detail: 'Centralized OTA firmware push with verification checksums and rollback safeguards' }
        ],
        governanceNote: 'Minimizes physical intervention; maximizes charger availability.'
      }
    },
    {
      stepNum: '05',
      id: 'scales-network',
      title: 'Scales with your network',
      subtitle: 'Multi-Site & Multi-Tenant Infrastructure',
      icon: MapPin,
      angle: 198, // ~10 o'clock
      shortDesc: 'Adding chargers, sites, or hardware vendors does not add operational complexity—new connections extend the same operating layer.',
      longDesc: 'Trevia CMS is built around the day-to-day reality of running an enterprise charging business: multi-city deployments, multiple hardware vendors, and the imperative for one operational view rather than one per vendor. Its multi-tenant, cloud-native architecture expands effortlessly from 5 to 50,000+ chargers.',
      pdfHighlights: [
        'Single pane of glass across distributed geographic sites, fleets, and regional hub depots',
        'Multi-tenant enterprise access control with granular site-level and role-based permissions',
        'Centralized tariff configuration, session settlements, and multi-network fleet routing'
      ],
      specs: {
        protocol: 'Distributed Multi-Tenant Cloud',
        throughput: '50,000+ Concurrent Charge Points',
        compatibility: 'Multi-Region & Depot Ready',
        operationalGain: 'Linear Effortless Scaling'
      },
      deepDive: {
        systemRole: 'Enterprise Multi-Site Cloud Hierarchy',
        architectureOverview: 'The platform architecture is fully decoupled, utilizing elastic microservices and distributed database partitioning so scaling across geographies or adding hundreds of chargers never degrades dashboard responsiveness or command latency.',
        dataFlow: [
          'Hierarchical grouping by Organization -> Region -> Charging Hub -> Charger Bay -> Connector',
          'Role-based access control (CPO SuperAdmin, Site Manager, Fleet Dispatcher, Billing Officer)',
          'Centralized tariff engine applies time-of-use (ToU), per-kWh, or peak penalty rates dynamically',
          'Aggregated analytics pipeline compiles enterprise reports across all vendors and locations'
        ],
        technicalCapabilities: [
          { label: 'Cluster Capacity', detail: 'Tested for 50,000+ concurrent active OCPP connections with zero packet loss' },
          { label: 'Multi-Tenancy', detail: 'Secure logical isolation of operator data, custom branding, and billing accounts' },
          { label: 'High Availability', detail: '99.99% cloud uptime SLA with multi-zone redundancy and automatic failover' }
        ],
        governanceNote: 'Engineered for India’s expanding EV charging landscape.'
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
