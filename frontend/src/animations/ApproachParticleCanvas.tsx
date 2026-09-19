import React, { useEffect, useRef, useState } from 'react';
import { Play, Pause, Cpu, Activity, Zap } from 'lucide-react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  alpha: number;
  life: number;
  maxLife: number;
  originNode?: number;
  targetNode?: number;
  angle?: number;
  orbitRadius?: number;
}

interface ApproachParticleCanvasProps {
  activeStep: number; // 1 to 5
  onStepChange?: (step: number) => void;
}

export const ApproachParticleCanvas: React.FC<ApproachParticleCanvasProps> = ({
  activeStep,
  onStepChange
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animFrameRef = useRef<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  // Step names and telemetry descriptors
  const stepTitles = [
    { num: '01', title: 'Unified Integration Layer', desc: 'Micro-particles from multiple networks & operators converge into a unified operational pipeline.' },
    { num: '02', title: 'Hardware Agnostic Protocol Flow', desc: 'Particles adapt dynamically across different charger OEM adapters and protocol standards.' },
    { num: '03', title: 'Live Data & Telemetry Intelligence', desc: 'Real-time telemetry particles burst into active waveform monitors and sensor telemetry.' },
    { num: '04', title: 'Automation & Remote Healing Loop', desc: 'Automated circular feedback loops self-heal faults and trigger instant remote commands.' },
    { num: '05', title: 'Expansive Scalable Network Grid', desc: 'Constellation particles branch across growing sites, cities, and multi-tenant regions.' },
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = canvas.parentElement?.clientWidth || 900);
    let height = (canvas.height = 360);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = 360;
    };
    window.addEventListener('resize', handleResize);

    const particles: Particle[] = [];
    const maxParticles = 180;
    const colors = ['#00A09A', '#008F8A', '#4DBDB8', '#FFFFFF', '#66D4CF'];

    // Initialize particles
    for (let i = 0; i < maxParticles; i++) {
      particles.push(createParticle(activeStep, width, height, colors));
    }

    function createParticle(step: number, w: number, h: number, palette: string[]): Particle {
      const color = palette[Math.floor(Math.random() * palette.length)];
      const size = Math.random() * 2.5 + 1.2;

      if (step === 1) {
        // Step 1: Convergent Flow towards center
        const startFrom = Math.floor(Math.random() * 4);
        let x = 0, y = 0;
        if (startFrom === 0) { x = Math.random() * 40; y = Math.random() * h; }
        else if (startFrom === 1) { x = w - Math.random() * 40; y = Math.random() * h; }
        else if (startFrom === 2) { x = Math.random() * w; y = Math.random() * 30; }
        else { x = Math.random() * w; y = h - Math.random() * 30; }

        const targetX = w / 2;
        const targetY = h / 2;
        const angle = Math.atan2(targetY - y, targetX - x);
        const speed = Math.random() * 2.2 + 1.4;

        return {
          x, y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size,
          color,
          alpha: Math.random() * 0.7 + 0.3,
          life: 0,
          maxLife: 100
        };
      } else if (step === 2) {
        // Step 2: Stream through 4 multi-protocol gates
        const lane = Math.floor(Math.random() * 4);
        const y = (h / 5) * (lane + 1) + (Math.random() * 16 - 8);
        return {
          x: Math.random() * 60,
          y,
          vx: Math.random() * 2.8 + 2.0,
          vy: (Math.random() - 0.5) * 0.4,
          size,
          color,
          alpha: Math.random() * 0.8 + 0.2,
          life: 0,
          maxLife: 120
        };
      } else if (step === 3) {
        // Step 3: Upward telemetry bursts
        return {
          x: Math.random() * (w - 100) + 50,
          y: h - 10 - Math.random() * 20,
          vx: (Math.random() - 0.5) * 0.8,
          vy: -(Math.random() * 3.2 + 1.5),
          size,
          color,
          alpha: 0.9,
          life: 0,
          maxLife: Math.floor(Math.random() * 70) + 40
        };
      } else if (step === 4) {
        // Step 4: Dual orbital feedback loops
        const center = Math.random() > 0.5 ? { x: w * 0.35, y: h * 0.5 } : { x: w * 0.65, y: h * 0.5 };
        const angle = Math.random() * Math.PI * 2;
        const orbitRadius = Math.random() * 65 + 30;
        return {
          x: center.x + Math.cos(angle) * orbitRadius,
          y: center.y + Math.sin(angle) * orbitRadius,
          vx: 0,
          vy: 0,
          angle,
          orbitRadius,
          originNode: center.x,
          targetNode: center.y,
          size,
          color,
          alpha: Math.random() * 0.8 + 0.2,
          life: 0,
          maxLife: 150
        };
      } else {
        // Step 5: Expansive constellation grid spreading outwards
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 1.8 + 0.8;
        return {
          x: w / 2 + (Math.random() - 0.5) * 50,
          y: h / 2 + (Math.random() - 0.5) * 50,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size,
          color,
          alpha: 0.8,
          life: 0,
          maxLife: 110
        };
      }
    }

    let frameCount = 0;

    const render = () => {
      frameCount++;
      ctx.clearRect(0, 0, width, height);

      // Draw subtle background grid lines
      ctx.strokeStyle = 'rgba(0, 160, 154, 0.04)';
      ctx.lineWidth = 1;
      const gridSize = 40;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Step-specific visual guides & architecture nodes
      if (activeStep === 1) {
        // Central Unified Hub
        const cx = width / 2;
        const cy = height / 2;

        // Glowing center core
        const grad = ctx.createRadialGradient(cx, cy, 5, cx, cy, 70);
        grad.addColorStop(0, 'rgba(0, 160, 154, 0.35)');
        grad.addColorStop(0.5, 'rgba(0, 143, 138, 0.15)');
        grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(cx, cy, 70, 0, Math.PI * 2);
        ctx.fill();

        // Hub border
        ctx.strokeStyle = 'rgba(0, 160, 154, 0.6)';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(cx, cy, 32, 0, Math.PI * 2);
        ctx.stroke();

        ctx.fillStyle = '#FFFFFF';
        ctx.font = '600 11px Inter, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('TREVIA CORE', cx, cy - 4);
        ctx.fillStyle = '#00A09A';
        ctx.font = '500 9px monospace';
        ctx.fillText('OCPP 2.0.1', cx, cy + 10);

        // 4 Outer Ingress Nodes
        const nodes = [
          { label: 'CPO Networks', x: 80, y: 70 },
          { label: 'Site Operators', x: width - 90, y: 70 },
          { label: 'Grid Feeders', x: 80, y: height - 70 },
          { label: 'Charger Fleet', x: width - 90, y: height - 70 }
        ];

        nodes.forEach((n) => {
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
          ctx.beginPath();
          ctx.moveTo(n.x, n.y);
          ctx.lineTo(cx, cy);
          ctx.stroke();

          ctx.fillStyle = 'rgba(11, 35, 28, 0.8)';
          ctx.strokeStyle = 'rgba(0, 160, 154, 0.4)';
          ctx.beginPath();
          ctx.roundRect(n.x - 55, n.y - 14, 110, 28, 6);
          ctx.fill();
          ctx.stroke();

          ctx.fillStyle = '#E5E7EB';
          ctx.font = '500 10px Inter, sans-serif';
          ctx.fillText(n.label, n.x, n.y + 4);
        });

      } else if (activeStep === 2) {
        // 4 Horizontal protocol lanes with adapter gateways
        const adapters = ['ABB Terra 54 (CCS2)', 'Delta Ultra (Type 2)', 'Exicom Spin (GB/T)', 'Schneider EVlink (CHAdeMO)'];
        adapters.forEach((adapter, idx) => {
          const y = (height / 5) * (idx + 1);
          ctx.strokeStyle = 'rgba(0, 160, 154, 0.12)';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(50, y);
          ctx.lineTo(width - 50, y);
          ctx.stroke();

          // Gateway pill
          ctx.fillStyle = 'rgba(10, 25, 20, 0.9)';
          ctx.strokeStyle = 'rgba(0, 160, 154, 0.4)';
          ctx.beginPath();
          ctx.roundRect(width / 2 - 90, y - 13, 180, 26, 6);
          ctx.fill();
          ctx.stroke();

          ctx.fillStyle = '#00A09A';
          ctx.font = '500 9px monospace';
          ctx.textAlign = 'center';
          ctx.fillText(`⚡ AUTO-TRANSLATE: ${adapter}`, width / 2, y + 4);
        });

      } else if (activeStep === 3) {
        // Telemetry waveform & sensor points
        ctx.strokeStyle = 'rgba(0, 160, 154, 0.25)';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        for (let x = 0; x < width; x += 10) {
          const y = height / 2 + Math.sin((x + frameCount * 3) * 0.03) * 35;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();

        // HUD indicators
        ctx.fillStyle = 'rgba(13, 30, 25, 0.85)';
        ctx.strokeStyle = 'rgba(0, 160, 154, 0.5)';
        ctx.beginPath();
        ctx.roundRect(40, 30, 220, 50, 8);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = '#FFFFFF';
        ctx.font = '600 11px Inter, sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText('● LIVE SENSOR TELEMETRY', 55, 50);
        ctx.fillStyle = '#00A09A';
        ctx.font = '500 10px monospace';
        ctx.fillText('99.98% Voltage/Power Precision', 55, 68);

      } else if (activeStep === 4) {
        // Automation loops
        const loops = [
          { cx: width * 0.35, cy: height * 0.5, label: 'Remote Diagnostics & Healing' },
          { cx: width * 0.65, cy: height * 0.5, label: 'Automated Load Balancing' }
        ];

        loops.forEach((l) => {
          ctx.strokeStyle = 'rgba(0, 160, 154, 0.25)';
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.arc(l.cx, l.cy, 65, 0, Math.PI * 2);
          ctx.stroke();

          ctx.fillStyle = 'rgba(10, 22, 18, 0.9)';
          ctx.strokeStyle = 'rgba(0, 160, 154, 0.5)';
          ctx.beginPath();
          ctx.roundRect(l.cx - 75, l.cy - 12, 150, 24, 6);
          ctx.fill();
          ctx.stroke();

          ctx.fillStyle = '#FFFFFF';
          ctx.font = '500 9px Inter, sans-serif';
          ctx.textAlign = 'center';
          ctx.fillText(l.label, l.cx, l.cy + 4);
        });

      } else if (activeStep === 5) {
        // Scaling Constellation Nodes
        const clusters = [
          { x: width * 0.2, y: height * 0.3, label: 'North Hub (Delhi-NCR)' },
          { x: width * 0.45, y: height * 0.25, label: 'West Hub (Mumbai)' },
          { x: width * 0.75, y: height * 0.35, label: 'East Hub (Kolkata)' },
          { x: width * 0.35, y: height * 0.75, label: 'South Hub (Bengaluru)' },
          { x: width * 0.65, y: height * 0.7, label: 'Central Hub (Hyderabad)' }
        ];

        ctx.strokeStyle = 'rgba(0, 160, 154, 0.15)';
        ctx.lineWidth = 1;
        for (let i = 0; i < clusters.length; i++) {
          for (let j = i + 1; j < clusters.length; j++) {
            ctx.beginPath();
            ctx.moveTo(clusters[i].x, clusters[i].y);
            ctx.lineTo(clusters[j].x, clusters[j].y);
            ctx.stroke();
          }
        }

        clusters.forEach((c) => {
          ctx.fillStyle = '#00A09A';
          ctx.beginPath();
          ctx.arc(c.x, c.y, 4, 0, Math.PI * 2);
          ctx.fill();

          ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
          ctx.font = '500 9px Inter, sans-serif';
          ctx.textAlign = 'center';
          ctx.fillText(c.label, c.x, c.y - 8);
        });
      }

      // Update and draw micro-particles
      particles.forEach((p, idx) => {
        p.life++;

        if (activeStep === 4) {
          // Circular motion in Step 4
          p.angle = (p.angle || 0) + 0.035;
          const cx = p.originNode || width / 2;
          const cy = p.targetNode || height / 2;
          const r = p.orbitRadius || 50;
          p.x = cx + Math.cos(p.angle) * r;
          p.y = cy + Math.sin(p.angle) * r;
        } else {
          p.x += p.vx;
          p.y += p.vy;
        }

        // Draw particle with glow
        ctx.save();
        ctx.shadowColor = p.color;
        ctx.shadowBlur = p.size * 3;
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0, p.alpha * (1 - p.life / p.maxLife)) * 0.6;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        // Respawn expired or out of bounds
        if (
          p.life >= p.maxLife ||
          p.x < 0 || p.x > width ||
          p.y < 0 || p.y > height
        ) {
          particles[idx] = createParticle(activeStep, width, height, colors);
        }
      });

      if (isPlaying) {
        animFrameRef.current = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, [activeStep, isPlaying]);

  return (
    <div className="w-full bg-[#08120E] rounded-3xl border border-[#163328] p-4 sm:p-6 shadow-2xl relative overflow-hidden mb-12">
      
      {/* Top Simulation Header & Telemetry Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#142B22]">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-[#00A09A]/10 border border-[#00A09A]/30 text-[#00A09A] flex items-center justify-center">
            <Cpu className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-[#00A09A] uppercase tracking-wider">
                STEP {stepTitles[activeStep - 1].num} SIMULATION
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#00A09A] animate-ping" />
            </div>
            <h4 className="text-sm sm:text-base font-bold text-white tracking-tight">
              {stepTitles[activeStep - 1].title}
            </h4>
          </div>
        </div>

        {/* Live Simulation Metric Badges */}
        <div className="flex items-center flex-wrap gap-2 text-xs">
          <div className="bg-[#0D221A] border border-[#1A3D30] px-3 py-1.5 rounded-lg text-neutral-300 flex items-center gap-1.5">
            <Activity className="w-3.5 h-3.5 text-[#00A09A]" />
            <span>180 Micro-Particles Flowing</span>
          </div>
          <div className="bg-[#0D221A] border border-[#1A3D30] px-3 py-1.5 rounded-lg text-neutral-300 flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 text-[#4DBDB8]" />
            <span>Telemetry: 14ms ping</span>
          </div>
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-1.5 rounded-lg bg-[#00A09A] hover:bg-[#008F8A] text-[#060B09] font-bold transition"
            title={isPlaying ? "Pause Simulation" : "Play Simulation"}
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Description of what particles are showing */}
      <div className="pt-3 pb-2 text-xs text-neutral-400 font-medium">
        <span className="text-[#00A09A] font-semibold">Visualizing Operation: </span>
        {stepTitles[activeStep - 1].desc}
      </div>

      {/* Canvas Viewport */}
      <div className="relative w-full h-[360px] rounded-2xl overflow-hidden bg-[#040806] border border-[#10241C] mt-2">
        <canvas ref={canvasRef} className="w-full h-full block" />
      </div>

      {/* Bottom Step Switcher Buttons */}
      <div className="mt-4 pt-4 border-t border-[#142B22] flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-xs font-semibold text-neutral-400">
          <span>Jump to Step Particle Choreography:</span>
        </div>
        <div className="flex items-center gap-1.5 sm:gap-2">
          {[1, 2, 3, 4, 5].map((step) => (
            <button
              key={step}
              onClick={() => onStepChange?.(step)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 ${
                activeStep === step
                  ? 'bg-[#00A09A] text-black shadow-md shadow-[#00A09A]/30 scale-105'
                  : 'bg-[#0D221A] text-neutral-400 hover:text-white hover:bg-[#133025]'
              }`}
            >
              Step 0{step}
            </button>
          ))}
        </div>
      </div>

    </div>
  );
};
