import React, { useState, useEffect, useRef } from 'react';
import { 
  GitFork, PlugZap, Gauge, RotateCw, MapPin, 
  Plus, X, ArrowRight, ArrowLeft, Play, Pause, 
  CheckCircle2, Radio, Cpu, Sparkles, ExternalLink
} from 'lucide-react';

interface ComponentData {
  stepNum: string;
  id: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  angle: number; // degrees on the dial (0-360)
  shortDesc: string;
  longDesc: string;
  pdfHighlights: string[];
  specs: {
    protocol: string;
    throughput: string;
    compatibility: string;
    operationalGain: string;
  };
  deepDiveModal: {
    systemRole: string;
    architectureOverview: string;
    dataFlow: string[];
    technicalCapabilities: { label: string; detail: string }[];
    governanceNote: string;
  };
}

export const OurApproachDialSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [isDialHovered, setIsDialHovered] = useState<boolean>(false);
  const [isLockedOpen, setIsLockedOpen] = useState<boolean>(true); // Keeps slide-in visible and interactive once engaged
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(false);
  const [expandedModalStep, setExpandedModalStep] = useState<number | null>(null);
  const [hoveredDialNode, setHoveredDialNode] = useState<number | null>(null);

  const containerRef = useRef<HTMLDivElement | null>(null);

  // 5 Components directly derived from the user screenshot and 2026 PDF
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
      deepDiveModal: {
        systemRole: 'Core Ingestion & Communication Gateway',
        architectureOverview: 'Chargers establish secure, persistent WebSocket connections (WSS) to the Trevia Edge Ingestion cluster. Each connected charger authenticates with credentials and exchanges periodic heartbeat signals, allowing Trevia CMS to instantly detect dropped connections or line anomalies.',
        dataFlow: [
          'Charger initiates WebSocket handshake over OCPP 1.6J',
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
      deepDiveModal: {
        systemRole: 'Hardware Normalization & Interoperability Engine',
        architectureOverview: 'By implementing strict protocol compliance at the protocol boundary, Trevia decouples hardware vendor firmware quirks from operator workflows. Operators can freely procure and deploy whatever hardware offers the best price and availability.',
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
      deepDiveModal: {
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
      deepDiveModal: {
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
      deepDiveModal: {
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

  // Auto-play cycle if enabled
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
      ref={containerRef}
      className="py-24 md:py-32 bg-[#02060D] relative overflow-hidden select-none"
    >
      {/* Ambient background volumetric glow */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[750px] bg-gradient-to-b from-[#00A8FF]/8 via-[#00F0FF]/4 to-transparent rounded-full blur-[240px] pointer-events-none" />
      <div className="absolute -bottom-20 right-10 w-96 h-96 bg-[#00D2C4]/8 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header with exact style from user screenshot */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 relative">
          <div>
            <div className="inline-flex items-center gap-2 text-[#00F0FF] text-xs font-mono font-semibold uppercase tracking-[0.25em] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] animate-pulse" />
              <span>THE SIGNATURE JOURNEY</span>
            </div>
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-light text-white tracking-tight leading-tight">
              Our <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00A8FF] via-[#00F0FF] to-white drop-shadow-[0_0_35px_rgba(0,168,255,0.5)]">Approach.</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-400 max-w-xl mt-3 font-normal leading-relaxed">
              An uninterrupted energy operating layer that harmonizes charger connectivity, real-time intelligence, remote control, and network scalability.
            </p>
          </div>

          {/* Controls Bar: Cycle mode & Active Stage Indicator */}
          <div className="flex items-center gap-3 self-start md:self-auto bg-[#040C18] border border-[#0E2C52] px-4 py-2 rounded-full shadow-lg shrink-0">
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
              {activeComponent.stepNum} / 05
            </span>
          </div>
        </div>

        {/* MAIN INTERACTIVE STAGE: Rotary Dial + Slide-In Component Showcase */}
        <div 
          onMouseEnter={() => {
            setIsDialHovered(true);
            setIsLockedOpen(true);
          }}
          onMouseLeave={() => {
            setIsDialHovered(false);
          }}
          className={`relative rounded-3xl border border-[#0E2C52] bg-[#030914]/90 backdrop-blur-2xl p-6 sm:p-10 shadow-2xl overflow-hidden transition-all duration-500 min-h-[580px] flex flex-col justify-center ${
            isDialHovered || isLockedOpen
              ? 'shadow-[0_0_60px_rgba(0,168,255,0.18)] border-[#0E3A68]'
              : 'border-[#0E223D]'
          }`}
        >
          {/* Subtle circuit background grid */}
          <div className="absolute inset-0 bg-[radial-gradient(#00A8FF_1px,transparent_1px)] [background-size:28px_28px] opacity-10 pointer-events-none" />

          {/* Interactive Workspace: Dial on Left (minimizes), Sliding Component on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            
            {/* THE ROTARY COMMAND DIAL CONTAINER (Desktop: 5 cols or centered; Mobile: Full width) */}
            <div className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col items-center justify-center relative ${
              isDialHovered || isLockedOpen 
                ? 'lg:col-span-5 scale-95 lg:scale-100' 
                : 'lg:col-span-12 scale-100'
            }`}>
              
              {/* Dial Title / Helper when expanded */}
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-widest text-[#00F0FF] mb-1">
                  <Sparkles className="w-3 h-3 animate-spin text-[#00F0FF]" />
                  <span>ROTARY COMMAND DIAL</span>
                </div>
                <p className="text-xs text-slate-400">
                  Hover or click any icon on the dial to explore specifications
                </p>
              </div>

              {/* ROTARY DIAL INTERACTIVE SVG CONTROLLER */}
              <div className="relative w-[300px] h-[300px] sm:w-[340px] sm:h-[340px] flex items-center justify-center">
                
                {/* Dial Base Glow & Outer Rings */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#00A8FF]/10 via-[#00F0FF]/5 to-transparent blur-2xl pointer-events-none" />
                
                {/* SVG Degree Track & Pointer Needle */}
                <svg className="w-full h-full absolute inset-0 pointer-events-none select-none" viewBox="0 0 340 340">
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
                    <filter id="laserGlow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="3" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>

                  {/* Outer Dashed Orbit Track */}
                  <circle
                    cx="170"
                    cy="170"
                    r="140"
                    fill="none"
                    stroke="#0E2C52"
                    strokeWidth="1.5"
                    strokeDasharray="4 6"
                  />

                  {/* Inner Solid Track */}
                  <circle
                    cx="170"
                    cy="170"
                    r="115"
                    fill="none"
                    stroke="url(#dialTrackGradient)"
                    strokeWidth="2"
                    opacity="0.5"
                  />

                  {/* Precision Angular Degree Ticks */}
                  {Array.from({ length: 36 }).map((_, i) => {
                    const angleDeg = i * 10;
                    const rad = (angleDeg * Math.PI) / 180;
                    const r1 = i % 3 === 0 ? 128 : 133;
                    const r2 = 138;
                    const x1 = 170 + r1 * Math.cos(rad);
                    const y1 = 170 + r1 * Math.sin(rad);
                    const x2 = 170 + r2 * Math.cos(rad);
                    const y2 = 170 + r2 * Math.sin(rad);
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

                  {/* Dynamic Pointer Needle rotating to active angle */}
                  <g 
                    style={{
                      transformOrigin: '170px 170px',
                      transform: `rotate(${activeAngle + 90}deg)`,
                      transition: 'transform 0.65s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                  >
                    {/* Glowing Laser Pointer Beam */}
                    <line
                      x1="170"
                      y1="170"
                      x2="170"
                      y2="58"
                      stroke="#00F0FF"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      filter="url(#laserGlow)"
                    />
                    {/* Beam Tip Indicator Arrow */}
                    <polygon
                      points="170,50 166,60 174,60"
                      fill="#00F0FF"
                      filter="url(#laserGlow)"
                    />
                  </g>

                  {/* Central Rotary Hub */}
                  <circle
                    cx="170"
                    cy="170"
                    r="52"
                    fill="url(#hubGradient)"
                    stroke="#00F0FF"
                    strokeWidth="1.5"
                    className="shadow-2xl"
                  />
                  <circle
                    cx="170"
                    cy="170"
                    r="45"
                    fill="none"
                    stroke="#0E2C52"
                    strokeWidth="1"
                    strokeDasharray="2 3"
                  />
                </svg>

                {/* Central Hub Interactive Content */}
                <div 
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  className="absolute z-20 w-24 h-24 rounded-full flex flex-col items-center justify-center cursor-pointer group"
                  title="Click to toggle auto-cycle"
                >
                  <span className="text-[10px] font-mono text-slate-400 group-hover:text-white transition uppercase tracking-wider">
                    STAGE
                  </span>
                  <span className="text-2xl font-mono font-black text-transparent bg-clip-text bg-gradient-to-r from-[#00A8FF] to-[#00F0FF] drop-shadow-[0_0_10px_rgba(0,240,255,0.7)]">
                    {activeComponent.stepNum}
                  </span>
                  <span className="text-[9px] font-mono text-[#00F0FF] uppercase tracking-tighter mt-0.5">
                    {isAutoPlaying ? 'ROTATING' : 'LOCKED'}
                  </span>
                </div>

                {/* 5 ROTARY DIAL INTERACTIVE NODES (Positioned along circumference) */}
                {components.map((comp, idx) => {
                  const stepIndex = idx + 1;
                  const isActive = activeStep === stepIndex;
                  const isHovered = hoveredDialNode === stepIndex;
                  const Icon = comp.icon;

                  // Node center coordinates on circle with radius 115px
                  const rad = (comp.angle * Math.PI) / 180;
                  const nodeRadius = 115;
                  const leftPct = 50 + ((nodeRadius * Math.cos(rad)) / 170) * 50;
                  const topPct = 50 + ((nodeRadius * Math.sin(rad)) / 170) * 50;

                  return (
                    <button
                      key={comp.id}
                      onClick={() => {
                        setIsAutoPlaying(false);
                        setActiveStep(stepIndex);
                        setIsLockedOpen(true);
                      }}
                      onMouseEnter={() => {
                        setHoveredDialNode(stepIndex);
                        setActiveStep(stepIndex);
                        setIsLockedOpen(true);
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
                      {/* Node Squircle Button (Styled like the screenshot's dark icon square!) */}
                      <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center transition-all duration-300 relative ${
                        isActive
                          ? 'bg-[#07172C] border-2 border-[#00F0FF] shadow-[0_0_25px_rgba(0,240,255,0.7)]'
                          : isHovered
                          ? 'bg-[#091E38] border border-[#00A8FF] shadow-[0_0_15px_rgba(0,168,255,0.4)]'
                          : 'bg-[#050E1A] border border-[#0E2C52] hover:border-slate-400'
                      }`}>
                        {/* Number Badge Tag */}
                        <div className={`absolute -top-2 -right-2 w-5 h-5 rounded-full font-mono text-[10px] font-black flex items-center justify-center transition-all ${
                          isActive
                            ? 'bg-[#00F0FF] text-black shadow-md'
                            : 'bg-[#0A1A2E] text-slate-400 border border-[#0E2C52]'
                        }`}>
                          {comp.stepNum}
                        </div>

                        {/* Centered Glowing Icon */}
                        <Icon className={`w-5 h-5 sm:w-6 sm:h-6 transition-all duration-300 ${
                          isActive 
                            ? 'text-[#00F0FF] drop-shadow-[0_0_10px_#00F0FF]' 
                            : 'text-slate-400 group-hover:text-slate-100'
                        }`} />
                      </div>

                      {/* Tooltip Label on Hover/Active */}
                      <div className={`absolute left-1/2 -translate-x-1/2 top-full mt-1 px-2 py-0.5 rounded-md bg-[#040C18] border border-[#0E2C52] text-[10px] font-bold text-white whitespace-nowrap pointer-events-none transition-all duration-200 ${
                        isActive ? 'opacity-100 translate-y-0 text-[#00F0FF]' : 'opacity-0 -translate-y-1'
                      }`}>
                        {comp.title}
                      </div>
                    </button>
                  );
                })}

              </div>

              {/* Bottom Quick Jump Dial Selector */}
              <div className="flex items-center gap-2 mt-6">
                <button
                  onClick={() => setActiveStep(activeStep === 1 ? 5 : activeStep - 1)}
                  className="p-2 rounded-xl bg-[#061426] border border-[#0E2C52] hover:border-[#00A8FF] text-slate-400 hover:text-white transition"
                  title="Previous Step"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                </button>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#040C18] border border-[#0E2C52] text-xs font-mono text-slate-300">
                  <span className="text-[#00F0FF] font-bold">STAGE {activeComponent.stepNum}</span>
                  <span className="text-slate-600">/</span>
                  <span>05</span>
                </div>
                <button
                  onClick={() => setActiveStep((activeStep % 5) + 1)}
                  className="p-2 rounded-xl bg-[#061426] border border-[#0E2C52] hover:border-[#00A8FF] text-slate-400 hover:text-white transition"
                  title="Next Step"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

            {/* THE SLIDING SIDE COMPONENT SHOWCASE (Slides into screen with smooth ease and glow!) */}
            <div className={`transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isDialHovered || isLockedOpen
                ? 'lg:col-span-7 opacity-100 translate-x-0'
                : 'lg:col-span-7 opacity-90 lg:opacity-100 translate-x-0'
            }`}>
              
              {/* Card Container (Clean, smooth edges, matching the screenshot's structural elegance) */}
              <div className="bg-[#050F1E]/95 border border-[#0E3460] rounded-3xl p-6 sm:p-8 shadow-[0_0_50px_rgba(0,168,255,0.22)] relative overflow-hidden backdrop-blur-xl">
                
                {/* Electric Cyan Edge Glow Header */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#00F0FF] to-transparent opacity-80" />

                {/* Top Row: 01 number + Expand deep-dive '+' button (Exactly matching screenshot!) */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl sm:text-3xl font-mono font-black text-[#00F0FF] tracking-tight">
                      {activeComponent.stepNum}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-[#00F0FF]/10 border border-[#00F0FF]/30 text-[#00F0FF] text-xs font-mono font-semibold">
                      TREVIA ARCHITECTURE
                    </span>
                  </div>

                  {/* '+' Button: Opens Architectural Deep Dive Specification Modal */}
                  <button
                    onClick={() => setExpandedModalStep(activeStep)}
                    className="group w-10 h-10 rounded-2xl bg-[#061426] hover:bg-[#00F0FF] border border-[#0E2C52] hover:border-[#00F0FF] text-slate-300 hover:text-black flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-[0_0_20px_#00F0FF] hover:rotate-90"
                    title="Click for full technical specification from 2026 PDF"
                  >
                    <Plus className="w-5 h-5 transition-transform" />
                  </button>
                </div>

                {/* Center Hero Row: Dark Squircle with Cyan Icon (from screenshot) + Heading */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mb-6 pb-6 border-b border-[#0E2C52]/70">
                  {/* Rounded Dark Square with Glowing Cyan Icon */}
                  <div className="w-20 h-20 rounded-2xl bg-[#030A14] border border-[#0E3A68] flex items-center justify-center shrink-0 shadow-[0_0_25px_rgba(0,240,255,0.25)] relative group">
                    <div className="absolute inset-0 rounded-2xl bg-[#00F0FF]/10 blur-sm pointer-events-none" />
                    {React.createElement(activeComponent.icon, {
                      className: "w-9 h-9 text-[#00F0FF] relative z-10 drop-shadow-[0_0_12px_#00F0FF]"
                    })}
                  </div>

                  <div className="space-y-1.5 flex-1">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                      {activeComponent.title}
                    </h3>
                    {/* Teal / Cyan Accent Line (Matching screenshot) */}
                    <div className="w-12 h-1 bg-gradient-to-r from-[#00F0FF] to-[#00A8FF] rounded-full" />
                    <p className="text-xs sm:text-sm font-medium text-[#00A8FF] pt-1">
                      {activeComponent.subtitle}
                    </p>
                  </div>
                </div>

                {/* Authoritative Narrative from 2026 PDF */}
                <div className="space-y-4 mb-6">
                  <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                    {activeComponent.longDesc}
                  </p>

                  {/* Bullet Highlights from 2026 PDF */}
                  <div className="space-y-2.5 pt-1">
                    {activeComponent.pdfHighlights.map((highlight, i) => (
                      <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                        <div className="w-4 h-4 rounded-full bg-[#00F0FF]/15 text-[#00F0FF] flex items-center justify-center shrink-0 mt-0.5">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                        </div>
                        <span className="leading-snug">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technical Telemetry Matrix Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-[#0E2C52]/70">
                  <div className="bg-[#030914] p-3 rounded-xl border border-[#0E223D]">
                    <span className="text-[10px] font-mono text-slate-400 block uppercase">Protocol</span>
                    <span className="text-xs font-bold text-white block mt-0.5 truncate">{activeComponent.specs.protocol}</span>
                  </div>
                  <div className="bg-[#030914] p-3 rounded-xl border border-[#0E223D]">
                    <span className="text-[10px] font-mono text-slate-400 block uppercase">Throughput</span>
                    <span className="text-xs font-bold text-[#00F0FF] block mt-0.5 truncate">{activeComponent.specs.throughput}</span>
                  </div>
                  <div className="bg-[#030914] p-3 rounded-xl border border-[#0E223D]">
                    <span className="text-[10px] font-mono text-slate-400 block uppercase">Compatibility</span>
                    <span className="text-xs font-bold text-white block mt-0.5 truncate">{activeComponent.specs.compatibility}</span>
                  </div>
                  <div className="bg-[#030914] p-3 rounded-xl border border-[#0E223D]">
                    <span className="text-[10px] font-mono text-slate-400 block uppercase">Benefit</span>
                    <span className="text-xs font-bold text-[#00D2C4] block mt-0.5 truncate">{activeComponent.specs.operationalGain}</span>
                  </div>
                </div>

                {/* Bottom CTA Row: Open Technical Deep Dive */}
                <div className="mt-6 pt-4 border-t border-[#0E2C52]/60 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-mono flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#00F0FF] animate-ping" />
                    <span>State Active • Live Synchronized</span>
                  </span>

                  <button
                    onClick={() => setExpandedModalStep(activeStep)}
                    className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#00A8FF] to-[#00D2C4] hover:from-[#1B84FF] hover:to-[#00F0FF] text-black font-bold text-xs flex items-center gap-2 transition-all shadow-[0_0_20px_rgba(0,168,255,0.3)] hover:shadow-[0_0_30px_rgba(0,240,255,0.5)] active:scale-95"
                  >
                    <span>Inspect Full Specs</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* TECHNICAL SPECIFICATION MODAL (Triggered by the '+' button from screenshot) */}
      {expandedModalStep !== null && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md transition-all animate-fadeIn"
          onClick={() => setExpandedModalStep(null)}
        >
          <div 
            className="bg-[#040C18] border border-[#0E3460] rounded-3xl p-6 sm:p-8 max-w-2xl w-full text-white shadow-[0_0_80px_rgba(0,168,255,0.35)] relative overflow-hidden max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Accent Line */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#00A8FF] via-[#00F0FF] to-[#00D2C4]" />

            {/* Close Button */}
            <button
              onClick={() => setExpandedModalStep(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/5 hover:bg-white/15 text-slate-400 hover:text-white flex items-center justify-center transition"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-3 mb-2">
              <span className="px-3 py-1 rounded-full bg-[#00F0FF]/10 border border-[#00F0FF]/30 text-[#00F0FF] text-xs font-mono font-bold">
                STAGE {components[expandedModalStep - 1].stepNum} • 2026 ARCHITECTURAL SPECIFICATION
              </span>
            </div>

            <div className="flex items-center gap-4 my-4">
              <div className="w-14 h-14 rounded-2xl bg-[#061426] border border-[#00F0FF]/40 text-[#00F0FF] flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(0,240,255,0.3)]">
                {React.createElement(components[expandedModalStep - 1].icon, { className: "w-7 h-7" })}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  {components[expandedModalStep - 1].title}
                </h3>
                <p className="text-xs font-mono text-[#00A8FF]">
                  {components[expandedModalStep - 1].deepDiveModal.systemRole}
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              {components[expandedModalStep - 1].deepDiveModal.architectureOverview}
            </p>

            {/* Execution Sequence from PDF */}
            <div className="mb-6">
              <h4 className="text-xs font-mono font-bold text-[#00F0FF] uppercase tracking-wider mb-3 flex items-center gap-2">
                <Radio className="w-3.5 h-3.5 text-[#00F0FF]" />
                <span>Protocol Data Flow & Sequence</span>
              </h4>
              <div className="space-y-2 bg-[#02060D] p-4 rounded-2xl border border-[#0E223D]">
                {components[expandedModalStep - 1].deepDiveModal.dataFlow.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs text-slate-300">
                    <span className="font-mono text-[#00F0FF] font-bold">0{idx + 1}.</span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Capabilities Matrix */}
            <div className="mb-6">
              <h4 className="text-xs font-mono font-bold text-[#00F0FF] uppercase tracking-wider mb-3 flex items-center gap-2">
                <Cpu className="w-3.5 h-3.5 text-[#00F0FF]" />
                <span>Enterprise Technical Capabilities</span>
              </h4>
              <div className="grid grid-cols-1 gap-2.5">
                {components[expandedModalStep - 1].deepDiveModal.technicalCapabilities.map((item, idx) => (
                  <div key={idx} className="bg-[#06101E] p-3 rounded-xl border border-[#0E223D] flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <span className="text-xs font-mono font-bold text-white">{item.label}</span>
                    <span className="text-xs text-slate-300">{item.detail}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="pt-4 border-t border-[#0E223D] flex items-center justify-between">
              <span className="text-[11px] text-slate-500 font-mono">
                {components[expandedModalStep - 1].deepDiveModal.governanceNote}
              </span>
              <button
                onClick={() => setExpandedModalStep(null)}
                className="px-5 py-2 rounded-xl bg-[#00F0FF] text-black font-bold text-xs hover:bg-[#36B7FF] transition"
              >
                Close Specification
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

export default OurApproachDialSection;
