import React, { useEffect, useRef } from 'react';
import { ArrowRight, Zap, ShieldCheck, Globe, Activity } from 'lucide-react';

interface HeroSectionProps {
  onExplore: () => void;
  onPartner: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExplore, onPartner }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // 3D/2D Interconnected EV Charging Network Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = canvas.parentElement?.clientWidth || 700);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 550);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener('resize', handleResize);

    // Nodes representing charging stations across India
    const nodes = [
      { id: 'delhi', name: 'Delhi-NCR Hub', x: 0.48, y: 0.22, chargers: 84, active: true },
      { id: 'mumbai', name: 'Mumbai Express', x: 0.28, y: 0.52, chargers: 120, active: true },
      { id: 'bengaluru', name: 'Bengaluru Tech Corridor', x: 0.42, y: 0.78, chargers: 95, active: true },
      { id: 'hyderabad', name: 'Hyderabad T-Hub', x: 0.52, y: 0.60, chargers: 62, active: true },
      { id: 'chennai', name: 'Chennai Coastal Port', x: 0.58, y: 0.82, chargers: 45, active: true },
      { id: 'pune', name: 'Pune Auto Belt', x: 0.35, y: 0.58, chargers: 38, active: true },
      { id: 'kolkata', name: 'Kolkata Metro', x: 0.76, y: 0.44, chargers: 34, active: true },
      { id: 'ahmedabad', name: 'Ahmedabad Industrial', x: 0.24, y: 0.42, chargers: 40, active: true },
      { id: 'jaipur', name: 'Jaipur Supercharger', x: 0.38, y: 0.32, chargers: 28, active: true },
    ];

    // Core energy center
    const core = { x: 0.46, y: 0.52 };

    // Travelling energy pulses
    const pulses: Array<{ from: number; to: number; progress: number; speed: number }> = [];
    const connections = [
      [0, 1], [0, 8], [0, 6], [1, 5], [1, 7], [5, 3], [3, 2], [2, 4], [3, 6], [8, 7]
    ];

    for (let i = 0; i < 8; i++) {
      const connIdx = Math.floor(Math.random() * connections.length);
      pulses.push({
        from: connections[connIdx][0],
        to: connections[connIdx][1],
        progress: Math.random(),
        speed: Math.random() * 0.008 + 0.004
      });
    }

    let animId: number;
    let angle = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      angle += 0.01;

      const cx = width * core.x;
      const cy = height * core.y;

      // Draw subtle orbital rings around central core
      for (let r = 70; r <= 220; r += 50) {
        ctx.strokeStyle = 'rgba(0, 168, 255, 0.08)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Draw glowing central energy core
      const coreGrad = ctx.createRadialGradient(cx, cy, 2, cx, cy, 90);
      coreGrad.addColorStop(0, 'rgba(0, 240, 255, 0.55)');
      coreGrad.addColorStop(0.4, 'rgba(0, 168, 255, 0.25)');
      coreGrad.addColorStop(1, 'rgba(2, 6, 13, 0)');
      ctx.fillStyle = coreGrad;
      ctx.beginPath();
      ctx.arc(cx, cy, 90, 0, Math.PI * 2);
      ctx.fill();

      // Draw network connection lines
      connections.forEach(([i, j]) => {
        const n1 = nodes[i];
        const n2 = nodes[j];
        const x1 = n1.x * width;
        const y1 = n1.y * height;
        const x2 = n2.x * width;
        const y2 = n2.y * height;

        ctx.strokeStyle = 'rgba(0, 168, 255, 0.22)';
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      });

      // Update & draw traveling energy pulses along lines
      pulses.forEach((p) => {
        p.progress += p.speed;
        if (p.progress >= 1) {
          p.progress = 0;
          const nextConn = connections[Math.floor(Math.random() * connections.length)];
          p.from = nextConn[0];
          p.to = nextConn[1];
        }

        const n1 = nodes[p.from];
        const n2 = nodes[p.to];
        const px = n1.x * width + (n2.x * width - n1.x * width) * p.progress;
        const py = n1.y * height + (n2.y * height - n1.y * height) * p.progress;

        ctx.save();
        ctx.shadowColor = '#00F0FF';
        ctx.shadowBlur = 10;
        ctx.fillStyle = '#FFFFFF';
        ctx.beginPath();
        ctx.arc(px, py, 2.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      // Draw charging station nodes
      nodes.forEach((n, idx) => {
        const nx = n.x * width;
        const ny = n.y * height;
        const pulseOffset = Math.sin(angle * 2 + idx) * 2;

        // Outer glow
        ctx.save();
        ctx.shadowColor = '#00A8FF';
        ctx.shadowBlur = 14;
        ctx.fillStyle = 'rgba(0, 240, 255, 0.25)';
        ctx.beginPath();
        ctx.arc(nx, ny, 7 + pulseOffset, 0, Math.PI * 2);
        ctx.fill();

        // Inner solid node
        ctx.fillStyle = '#00A8FF';
        ctx.beginPath();
        ctx.arc(nx, ny, 3.5, 0, Math.PI * 2);
        ctx.fill();

        // Node center white pip
        ctx.fillStyle = '#FFFFFF';
        ctx.beginPath();
        ctx.arc(nx, ny, 1.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        // City labels (editorial small typography)
        ctx.fillStyle = 'rgba(226, 232, 240, 0.7)';
        ctx.font = '500 9px Manrope, sans-serif';
        ctx.fillText(n.name, nx + 10, ny + 3);
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <section className="relative pt-16 pb-24 md:pt-24 md:pb-36 overflow-hidden">
      
      {/* Background radial energy gradient */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-[#00A8FF]/10 via-[#00F0FF]/5 to-transparent rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Eyebrow / Brand positioning */}
        <div className="mb-6 flex items-center gap-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#061426] border border-[#0E2C52] text-[#00F0FF] text-xs font-mono font-medium tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] animate-ping" />
            <span>India's Unified EV Charging Platform</span>
          </div>
        </div>

        {/* Two-Column Editorial Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Oversized Editorial Typography */}
          <div className="lg:col-span-7 space-y-8">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[80px] font-extralight text-white tracking-tight leading-[1.05]">
              Redefining Each{' '}
              <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00A8FF] via-[#00F0FF] to-white">
                CHARGE.
              </span>
              <br />
              <span className="font-light text-slate-200">
                within One platform.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-xl">
              Find, access and pay at charging stations across multiple CPO networks with one seamless platform and one wallet.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onExplore}
                className="group px-8 py-3.5 rounded-full bg-gradient-to-r from-[#00A8FF] to-[#00D2C4] hover:from-[#1B84FF] hover:to-[#00F0FF] text-black font-bold text-sm tracking-wide transition-all duration-300 shadow-[0_0_25px_rgba(0,168,255,0.4)] hover:shadow-[0_0_40px_rgba(0,240,255,0.6)] hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
              >
                <span>Explore Trevia</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={onPartner}
                className="px-8 py-3.5 rounded-full bg-[#040C18]/60 hover:bg-[#08172D] border border-[#0E2C52] hover:border-[#00A8FF] text-slate-200 hover:text-white font-medium text-sm tracking-wide transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
              >
                Partner with Trevia
              </button>
            </div>

            {/* Quick Metrics */}
            <div className="pt-6 border-t border-[#0E223D]/60 flex items-center gap-8 text-xs text-slate-400">
              <div>
                <div className="text-base font-bold text-white">100%</div>
                <div>OCPP 2.0.1 Ready</div>
              </div>
              <div className="w-px h-8 bg-[#0E223D]" />
              <div>
                <div className="text-base font-bold text-[#00F0FF]">Single Wallet</div>
                <div>Multi-CPO Roaming</div>
              </div>
              <div className="w-px h-8 bg-[#0E223D]" />
              <div>
                <div className="text-base font-bold text-white">&lt; 14ms</div>
                <div>Telemetry Latency</div>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Visualization of Network + Translucent Product Card */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Canvas Container */}
            <div className="w-full h-[460px] sm:h-[520px] rounded-3xl relative overflow-hidden bg-[#030814]/80 border border-[#0E223D] shadow-2xl flex items-center justify-center">
              
              {/* Background grid */}
              <div className="absolute inset-0 bg-[radial-gradient(#0E2A4D_1px,transparent_1px)] [background-size:24px_24px] opacity-25" />
              
              <canvas ref={canvasRef} className="w-full h-full block" />

              {/* Floating Translucent Product Card per prompt requirement */}
              <div className="absolute bottom-5 left-5 right-5 sm:left-6 sm:right-6 p-4 rounded-2xl bg-[#030A14]/80 backdrop-blur-xl border border-[#00A8FF]/30 shadow-[0_8px_32px_rgba(0,0,0,0.6)] animate-float">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-[#00A8FF]/20 border border-[#00A8FF]/40 text-[#00F0FF] flex items-center justify-center">
                      <Zap className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white tracking-tight">Unified Charging</h4>
                      <p className="text-[10px] text-slate-400">Inter-network protocol routing</p>
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#00F0FF]/10 text-[#00F0FF] text-[10px] font-mono font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] animate-pulse" />
                    <span>Live Mesh</span>
                  </div>
                </div>

                <div className="text-xs text-slate-300 font-medium pt-1 border-t border-[#0E223D]">
                  One wallet • Multiple CPOs • Real-time availability
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
