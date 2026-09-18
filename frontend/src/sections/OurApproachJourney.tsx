import React, { useState, useEffect, useRef } from 'react';
import { 
  Compass, Navigation, Zap, CreditCard, Network, 
  ArrowRight, Play, Pause, ChevronRight, CheckCircle2
} from 'lucide-react';

export const OurApproachJourney: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const steps = [
    {
      num: '01',
      id: 'discover',
      title: 'Discover',
      tagline: 'Multi-Network Aggregation',
      icon: Compass,
      desc: 'One unified radar maps every charging station in real time across fragmented CPO networks, eliminating the need to toggle between 10 different apps.',
      metric: '99.4% Station Accuracy',
      pill: 'OCPI 2.2 Protocol',
      details: ['Aggregates 45+ regional & national CPOs', 'Real-time connector status (Available / Occupied / Faulted)', 'Filter by speed, plug type (CCS2, Type 2), and amenities']
    },
    {
      num: '02',
      id: 'navigate',
      title: 'Navigate',
      tagline: 'Predictive Range & Routing',
      icon: Navigation,
      desc: 'Intelligent route calculation factors in your EV’s real-time battery degradation, terrain elevation, weather, and queues at the destination charger.',
      metric: 'Dynamic Port Hold',
      pill: 'AI Route Telemetry',
      details: ['Reserve your charging plug 15 minutes ahead', 'Optimal speed-adjusted arrival SOC prediction', 'Turn-by-turn turnoff guidance to exact depot bay']
    },
    {
      num: '03',
      id: 'charge',
      title: 'Charge',
      tagline: 'Plug & Charge Simplicity',
      icon: Zap,
      desc: 'Seamless handshake over OCPP 2.0.1 and ISO 15118. Just plug in, and energy starts flowing instantly with sub-second hardware handshake.',
      metric: '0.38s Protocol Handshake',
      pill: 'High-Voltage Transfer',
      details: ['Sub-second handshake without RFID cards or app hunting', 'Sub-second real-time kW & temperature telemetry', 'Active battery thermal health safeguarding']
    },
    {
      num: '04',
      id: 'pay',
      title: 'Pay',
      tagline: 'Single Unified Wallet',
      icon: CreditCard,
      desc: 'One single balance settles charging across any vendor. No holding separate wallets with each CPO; seamless auto-debit with corporate GST invoicing.',
      metric: 'Zero-Lockin Wallet',
      pill: 'Instant UPI Settlement',
      details: ['Universal payment across all partnered networks', 'Auto-generated GST tax invoices in one dashboard', 'Corporate fleet expense management & monthly invoicing']
    },
    {
      num: '05',
      id: 'connect',
      title: 'Connect',
      tagline: 'Ecosystem Intelligence',
      icon: Network,
      desc: 'Every charging session syncs back into Trevia’s cloud mesh, optimizing local grid feeder loads and building a nationwide connected energy web.',
      metric: '50k+ Node Cloud Mesh',
      pill: 'Grid Smart Balancing',
      details: ['Automated OpenADR 2.0b grid demand response', 'Earn green mobility credits and driver loyalty perks', 'Fleet depot telematics integration with vehicle OEMs']
    }
  ];

  // Auto-play steps progression every 5 seconds
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev % 5) + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  // Dynamic Canvas Visualizer for each step
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = canvas.parentElement?.clientWidth || 600);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 420);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener('resize', handleResize);

    let frame = 0;
    let animId: number;

    const render = () => {
      frame++;
      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;

      if (activeStep === 1) {
        // STEP 1: Discover (Concentric Radar Sweep & Station Nodes)
        // Radar circles
        for (let r = 50; r <= 180; r += 45) {
          ctx.strokeStyle = 'rgba(0, 160, 154, 0.15)';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.arc(cx, cy, r, 0, Math.PI * 2);
          ctx.stroke();
        }

        // Sweeping radar beam
        const radarAngle = (frame * 0.03) % (Math.PI * 2);
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(radarAngle);
        const beamGrad = ctx.createRadialGradient(0, 0, 10, 0, 0, 190);
        beamGrad.addColorStop(0, 'rgba(0, 160, 154, 0.45)');
        beamGrad.addColorStop(0.8, 'rgba(0, 160, 154, 0.08)');
        beamGrad.addColorStop(1, 'transparent');
        ctx.fillStyle = beamGrad;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.arc(0, 0, 190, 0, Math.PI / 4);
        ctx.closePath();
        ctx.fill();
        ctx.restore();

        // Discovered stations popping with pulse
        const stations = [
          { x: cx - 90, y: cy - 60, name: 'Tata Power (60kW)', status: 'Available' },
          { x: cx + 110, y: cy - 40, name: 'Jio-bp (120kW)', status: 'Available' },
          { x: cx - 60, y: cy + 90, name: 'Statiq Hub (50kW)', status: 'Occupied' },
          { x: cx + 80, y: cy + 70, name: 'Zeon Fast (150kW)', status: 'Available' }
        ];

        stations.forEach((st, idx) => {
          const isGlowing = Math.sin(frame * 0.05 + idx) > 0;
          ctx.fillStyle = isGlowing ? '#00A09A' : '#00A09A';
          ctx.beginPath();
          ctx.arc(st.x, st.y, 4, 0, Math.PI * 2);
          ctx.fill();

          ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
          ctx.font = '600 10px Manrope, sans-serif';
          ctx.fillText(st.name, st.x + 8, st.y + 3);

          ctx.fillStyle = st.status === 'Available' ? '#00A09A' : '#94A3B8';
          ctx.font = '500 8px monospace';
          ctx.fillText(`● ${st.status}`, st.x + 8, st.y + 14);
        });

      } else if (activeStep === 2) {
        // STEP 2: Navigate (Predictive Curved Trajectory & Highway Energy Route)
        ctx.strokeStyle = 'rgba(0, 160, 154, 0.2)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(60, height - 80);
        ctx.bezierCurveTo(width * 0.3, height * 0.2, width * 0.7, height * 0.8, width - 80, 80);
        ctx.stroke();

        // Animated energy trail along route
        const t = (frame * 0.008) % 1;
        const p0 = { x: 60, y: height - 80 };
        const p1 = { x: width * 0.3, y: height * 0.2 };
        const p2 = { x: width * 0.7, y: height * 0.8 };
        const p3 = { x: width - 80, y: 80 };

        // Cubic bezier point calculation
        const cxPoint = Math.pow(1-t, 3)*p0.x + 3*Math.pow(1-t, 2)*t*p1.x + 3*(1-t)*Math.pow(t, 2)*p2.x + Math.pow(t, 3)*p3.x;
        const cyPoint = Math.pow(1-t, 3)*p0.y + 3*Math.pow(1-t, 2)*t*p1.y + 3*(1-t)*Math.pow(t, 2)*p2.y + Math.pow(t, 3)*p3.y;

        // Vehicle marker
        ctx.save();
        ctx.shadowColor = '#00A09A';
        ctx.shadowBlur = 18;
        ctx.fillStyle = '#FFFFFF';
        ctx.beginPath();
        ctx.arc(cxPoint, cyPoint, 7, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        // HUD overlay on destination
        ctx.fillStyle = '#061628';
        ctx.strokeStyle = '#00A09A';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.roundRect(width - 200, 40, 150, 60, 10);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = '#FFFFFF';
        ctx.font = '700 11px Manrope';
        ctx.fillText('BAY #3 RESERVED', width - 185, 62);
        ctx.fillStyle = '#00A09A';
        ctx.font = '500 10px monospace';
        ctx.fillText('ETA: 8 min • Arr. SOC: 32%', width - 185, 80);

      } else if (activeStep === 3) {
        // STEP 3: Charge (High Voltage Flowing Cable into Battery Pack)
        // Charger box left
        ctx.fillStyle = '#061324';
        ctx.strokeStyle = '#00A09A';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.roundRect(60, cy - 80, 80, 160, 12);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = '#00A09A';
        ctx.font = '700 12px Manrope';
        ctx.fillText('DC FAST', 76, cy - 50);
        ctx.fillStyle = '#FFFFFF';
        ctx.font = '600 18px Manrope';
        ctx.fillText('150', 84, cy - 15);
        ctx.fillStyle = '#64748B';
        ctx.font = '500 10px Manrope';
        ctx.fillText('kW', 94, cy + 5);

        // Vehicle battery right
        ctx.fillStyle = '#061324';
        ctx.strokeStyle = '#00A09A';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.roundRect(width - 160, cy - 80, 100, 160, 12);
        ctx.fill();
        ctx.stroke();

        // Battery level fill animated
        const batteryPct = 0.4 + (Math.sin(frame * 0.02) + 1) * 0.25;
        ctx.fillStyle = 'rgba(0, 160, 154, 0.35)';
        ctx.fillRect(width - 155, cy + 70 - 140 * batteryPct, 90, 140 * batteryPct);

        ctx.fillStyle = '#FFFFFF';
        ctx.font = '700 14px Manrope';
        ctx.fillText(`${Math.round(batteryPct * 100)}%`, width - 125, cy);
        ctx.fillStyle = '#00A09A';
        ctx.font = '500 9px monospace';
        ctx.fillText('800V CHARGING', width - 145, cy + 20);

        // Flowing electric cable with high-speed particles
        ctx.strokeStyle = 'rgba(0, 160, 154, 0.4)';
        ctx.lineWidth = 6;
        ctx.beginPath();
        ctx.moveTo(140, cy);
        ctx.bezierCurveTo(width * 0.35, cy + 70, width * 0.65, cy - 70, width - 160, cy);
        ctx.stroke();

        // Charged energy particles racing through cable
        for (let i = 0; i < 16; i++) {
          const particleT = ((frame * 0.015 + i * 0.065) % 1);
          const px = 140 + (width - 300) * particleT;
          const py = cy + Math.sin(particleT * Math.PI * 2) * 35;

          ctx.save();
          ctx.shadowColor = '#00A09A';
          ctx.shadowBlur = 12;
          ctx.fillStyle = '#FFFFFF';
          ctx.beginPath();
          ctx.arc(px, py, 3.5, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }

      } else if (activeStep === 4) {
        // STEP 4: Pay (Unified Digital Settlement Hub)
        // Center wallet shield
        ctx.save();
        ctx.shadowColor = '#00A09A';
        ctx.shadowBlur = 25;
        ctx.fillStyle = '#061426';
        ctx.strokeStyle = '#00A09A';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(cx, cy, 75, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.restore();

        ctx.fillStyle = '#FFFFFF';
        ctx.font = '800 20px Manrope';
        ctx.textAlign = 'center';
        ctx.fillText('TREVIA', cx, cy - 10);
        ctx.fillStyle = '#00A09A';
        ctx.font = '700 12px monospace';
        ctx.fillText('UNIFIED WALLET', cx, cy + 12);
        ctx.fillStyle = '#94A3B8';
        ctx.font = '500 10px Manrope';
        ctx.fillText('Instant UPI & Auto-Debit', cx, cy + 28);
        ctx.textAlign = 'left';

        // Surrounding 4 CPO network chips sending settled receipts
        const cpos = ['Tata Power', 'Jio-bp', 'Statiq', 'Zeon'];
        const cpoCoords = [
          { x: cx - 130, y: cy - 70 },
          { x: cx + 130, y: cy - 70 },
          { x: cx - 130, y: cy + 70 },
          { x: cx + 130, y: cy + 70 }
        ];

        cpoCoords.forEach((pos, idx) => {
          ctx.strokeStyle = 'rgba(0, 160, 154, 0.3)';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(pos.x, pos.y);
          ctx.lineTo(cx, cy);
          ctx.stroke();

          ctx.fillStyle = '#040C18';
          ctx.strokeStyle = '#0E2C52';
          ctx.beginPath();
          ctx.roundRect(pos.x - 45, pos.y - 15, 90, 30, 8);
          ctx.fill();
          ctx.stroke();

          ctx.fillStyle = '#E2E8F0';
          ctx.font = '600 10px Manrope';
          ctx.textAlign = 'center';
          ctx.fillText(cpos[idx], pos.x, pos.y + 4);
          ctx.textAlign = 'left';
        });

      } else if (activeStep === 5) {
        // STEP 5: Connect (Pan-India Connected Mesh & Green Grid)
        // Nationwide mesh nodes
        const meshNodes = [
          { x: cx, y: cy - 90 },
          { x: cx - 110, y: cy - 20 },
          { x: cx + 110, y: cy - 20 },
          { x: cx - 70, y: cy + 80 },
          { x: cx + 70, y: cy + 80 },
          { x: cx, y: cy + 20 }
        ];

        // Draw mesh lines
        ctx.strokeStyle = 'rgba(0, 160, 154, 0.2)';
        ctx.lineWidth = 1;
        for (let i = 0; i < meshNodes.length; i++) {
          for (let j = i + 1; j < meshNodes.length; j++) {
            ctx.beginPath();
            ctx.moveTo(meshNodes[i].x, meshNodes[i].y);
            ctx.lineTo(meshNodes[j].x, meshNodes[j].y);
            ctx.stroke();
          }
        }

        // Draw animated energy pulses traveling across the mesh
        const pulseT = (frame * 0.02) % 1;
        const p1 = meshNodes[0];
        const p2 = meshNodes[5];
        const px = p1.x + (p2.x - p1.x) * pulseT;
        const py = p1.y + (p2.y - p1.y) * pulseT;

        ctx.save();
        ctx.shadowColor = '#00A09A';
        ctx.shadowBlur = 14;
        ctx.fillStyle = '#00A09A';
        ctx.beginPath();
        ctx.arc(px, py, 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        // Node markers
        meshNodes.forEach((n, idx) => {
          ctx.fillStyle = '#00A09A';
          ctx.beginPath();
          ctx.arc(n.x, n.y, 4, 0, Math.PI * 2);
          ctx.fill();

          ctx.fillStyle = 'rgba(0, 160, 154, 0.3)';
          ctx.beginPath();
          ctx.arc(n.x, n.y, 8 + Math.sin(frame * 0.05 + idx) * 2, 0, Math.PI * 2);
          ctx.fill();
        });

        // Center badge
        ctx.fillStyle = '#040C1A';
        ctx.strokeStyle = '#00A09A';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.roundRect(cx - 75, cy - 14, 150, 28, 8);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = '#FFFFFF';
        ctx.font = '700 10px Manrope';
        ctx.textAlign = 'center';
        ctx.fillText('DYNAMIC GRID BALANCED', cx, cy + 4);
        ctx.textAlign = 'left';
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
    };
  }, [activeStep]);

  return (
    <section id="approach" className="py-28 bg-[#02060D] relative overflow-hidden">
      
      {/* Background radial blue glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[700px] bg-gradient-to-b from-[#00A09A]/8 via-[#00A09A]/4 to-transparent rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 text-[#00A09A] text-xs font-mono font-semibold uppercase tracking-[0.25em] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00A09A] animate-pulse" />
              <span>THE SIGNATURE JOURNEY</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-white tracking-tight leading-tight">
              Our <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00A09A] via-[#00A09A] to-white">Approach.</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-400 max-w-xl mt-3 font-normal">
              An uninterrupted, 5-stage energy journey that harmonizes discovery, navigation, charging, payments, and grid intelligence.
            </p>
          </div>

          {/* Controls: Play/Pause and Step Jump */}
          <div className="flex items-center gap-3 self-start md:self-auto bg-[#06101E] border border-[#0E223D] px-4 py-2 rounded-full">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex items-center gap-2 text-xs font-semibold text-slate-200 hover:text-white transition"
            >
              {isPlaying ? (
                <>
                  <Pause className="w-3.5 h-3.5 text-[#00A09A]" />
                  <span>Cycle Active</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 text-[#00A09A]" />
                  <span>Cycle Paused</span>
                </>
              )}
            </button>
            <div className="w-px h-4 bg-[#0E223D]" />
            <span className="text-[11px] font-mono text-[#00A09A]">
              Step 0{activeStep} of 05
            </span>
          </div>
        </div>

        {/* The 5-Step Continuous Energy Conductor Line (SVG + Interactive Magnetic Nodes) */}
        <div className="relative mb-14">
          
          {/* Connecting SVG Power Line */}
          <div className="hidden lg:block absolute top-7 left-[8%] right-[8%] h-1 pointer-events-none">
            {/* Dark base track */}
            <div className="w-full h-0.5 bg-[#0E223D]" />
            {/* Active illuminated electric wire track */}
            <div 
              className="h-0.5 bg-gradient-to-r from-[#00A09A] to-[#00A09A] transition-all duration-700 absolute top-0 left-0 shadow-[0_0_12px_#00A09A]"
              style={{ width: `${((activeStep - 1) / 4) * 100}%` }}
            />
          </div>

          {/* 5 Milestone Step Nodes */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 relative z-10">
            {steps.map((s, idx) => {
              const stepIndex = idx + 1;
              const isActive = activeStep === stepIndex;
              const isPast = activeStep > stepIndex;
              const Icon = s.icon;

              return (
                <div
                  key={s.id}
                  onClick={() => {
                    setIsPlaying(false);
                    setActiveStep(stepIndex);
                  }}
                  className={`p-5 rounded-2xl cursor-pointer transition-all duration-300 relative group flex flex-col justify-between ${
                    isActive
                      ? 'bg-[#071324] border-2 border-[#00A09A] shadow-[0_0_30px_rgba(0,160,154,0.25)] -translate-y-1.5'
                      : isPast
                      ? 'bg-[#040C18]/80 border border-[#0E2C52] hover:border-[#00A09A]'
                      : 'bg-[#030914]/60 border border-[#0A1A2E] hover:border-[#0E2C52]'
                  }`}
                >
                  {/* Top Node Header: Number + Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className={`text-xl font-mono font-extrabold ${isActive ? 'text-[#00A09A]' : isPast ? 'text-[#00A09A]' : 'text-slate-600'}`}>
                        {s.num}
                      </span>
                    </div>

                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all ${
                      isActive 
                        ? 'bg-[#00A09A] text-black shadow-[0_0_15px_#00A09A]' 
                        : isPast 
                        ? 'bg-[#0E2C52] text-[#00A09A]' 
                        : 'bg-[#061426] text-slate-500 group-hover:text-slate-300'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <div>
                    <h3 className="text-base font-bold text-white tracking-tight">
                      {s.title}
                    </h3>
                    <p className="text-[11px] text-[#00A09A] font-medium mt-0.5">
                      {s.tagline}
                    </p>
                  </div>

                  {/* Active Indicator Bar */}
                  <div className="mt-4 pt-3 border-t border-[#0E223D]/60 flex items-center justify-between text-[10px] text-slate-400">
                    <span className={isActive ? 'text-[#00A09A] font-semibold' : ''}>
                      {isActive ? '● Stage Active' : isPast ? '✓ Completed' : 'Pending'}
                    </span>
                    <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isActive ? 'text-[#00A09A] translate-x-1' : 'text-slate-600'}`} />
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* The Central Stage: Deep Dive Visualizer & Technical Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#040B17] border border-[#0E2644] rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          
          {/* Subtle background circuit pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(#00A09A_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />

          {/* Left Column: Step Editorial Details */}
          <div className="lg:col-span-6 space-y-6 relative z-10">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-[#00A09A]/10 border border-[#00A09A]/30 text-[#00A09A] text-xs font-mono font-semibold">
                STAGE {steps[activeStep - 1].num} • {steps[activeStep - 1].pill}
              </span>
              <span className="text-xs text-slate-400">
                {steps[activeStep - 1].metric}
              </span>
            </div>

            <div>
              <h3 className="text-3xl sm:text-4xl font-extralight text-white tracking-tight mb-1">
                {steps[activeStep - 1].title}{' '}
                <span className="font-extrabold text-[#00A09A]">
                  Architecture
                </span>
              </h3>
              <p className="text-sm font-medium text-[#00A09A]">
                {steps[activeStep - 1].tagline}
              </p>
            </div>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              {steps[activeStep - 1].desc}
            </p>

            {/* Micro-spec bullet list */}
            <div className="space-y-2.5 pt-2">
              {steps[activeStep - 1].details.map((item, i) => (
                <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                  <div className="w-4 h-4 rounded-full bg-[#00A09A]/10 text-[#00A09A] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Navigation buttons */}
            <div className="pt-4 flex items-center gap-3">
              <button
                onClick={() => setActiveStep(activeStep === 1 ? 5 : activeStep - 1)}
                className="px-4 py-2 rounded-xl bg-[#061222] border border-[#0E2A4D] hover:border-[#00A09A] text-xs font-semibold text-slate-300 hover:text-white transition"
              >
                ← Previous Stage
              </button>
              <button
                onClick={() => setActiveStep((activeStep % 5) + 1)}
                className="px-5 py-2 rounded-xl bg-gradient-to-r from-[#00A09A] to-[#33C4BF] text-black text-xs font-bold transition flex items-center gap-1.5 shadow-md shadow-[#00A09A]/20"
              >
                <span>Next Stage</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: Dynamic Stage Canvas Simulation */}
          <div className="lg:col-span-6 relative z-10">
            <div className="w-full h-[380px] sm:h-[420px] rounded-2xl bg-[#020710] border border-[#0E223D] overflow-hidden relative shadow-inner flex items-center justify-center">
              
              {/* Top Simulation HUD indicator */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-slate-400 pointer-events-none z-20">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#00A09A] animate-ping" />
                  <span className="text-white font-semibold uppercase">SIMULATION: {steps[activeStep - 1].title}</span>
                </div>
                <div className="text-[#00A09A]">
                  60 FPS • HIGH PRECISION
                </div>
              </div>

              {/* Step Simulation Canvas */}
              <canvas ref={canvasRef} className="w-full h-full block" />

              {/* Bottom Telemetry Bar */}
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[10px] font-mono text-slate-400 bg-[#040C1A]/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-[#0E223D]">
                <span>Status: Optimal Handshake</span>
                <span className="text-[#00A09A]">Latency: 12ms</span>
                <span>OCPP 2.0.1 Encrypted</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
