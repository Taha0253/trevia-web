import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseVx: number;
  baseVy: number;
  size: number;
  color: string;
  alpha: number;
  charge: number; // For flickering electric feel
}

export const ChargedParticlesBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Mouse tracking
    const mouse = {
      x: -1000,
      y: -1000,
      radius: 180,
      active: false
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    // Create particles with higher density and hero concentration
    const particleCount = Math.min(Math.floor((width * height) / 7000), 170);
    const particles: Particle[] = [];
    const colors = ['#00A09A', '#33C4BF', '#5EE0D8', '#8AF0E8', '#B8FFF8', '#FFFFFF'];

    for (let i = 0; i < particleCount; i++) {
      const vx = (Math.random() - 0.5) * 0.5;
      const vy = (Math.random() - 0.5) * 0.5;
      
      // 40% of particles spawn initially in upper half (Hero zone)
      const initialY = Math.random() < 0.4 ? Math.random() * (height * 0.6) : Math.random() * height;
      
      particles.push({
        x: Math.random() * width,
        y: initialY,
        vx,
        vy,
        baseVx: vx,
        baseVy: vy,
        size: Math.random() * 2.0 + 0.8,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.6 + 0.25,
        charge: Math.random() * Math.PI * 2
      });
    }

    let animFrameId: number;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw faint proximity connection lines between particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            const lineAlpha = (1 - dist / 130) * 0.22;
            ctx.strokeStyle = `rgba(0, 160, 154, ${lineAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Update & render particles
      particles.forEach((p) => {
        p.charge += 0.035;
        const currentAlpha = p.alpha + Math.sin(p.charge) * 0.2;

        // Mouse interaction: repulsion and energy filament reaction
        if (mouse.active) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouse.radius && dist > 0) {
            // Repulsion force
            const force = (1 - dist / mouse.radius) * 2.4;
            const angle = Math.atan2(dy, dx);
            p.vx += Math.cos(angle) * force * 0.28;
            p.vy += Math.sin(angle) * force * 0.28;

            // Draw interactive luminous energy filament from cursor to particle
            const lineAlpha = (1 - dist / mouse.radius) * 0.55;
            ctx.strokeStyle = `rgba(0, 160, 154, ${lineAlpha})`;
            ctx.lineWidth = 1.2;
            ctx.beginPath();
            ctx.moveTo(mouse.x, mouse.y);
            ctx.lineTo(p.x, p.y);
            ctx.stroke();

            // Glow burst around reacting particles
            ctx.save();
            ctx.shadowColor = '#00A09A';
            ctx.shadowBlur = 12;
            ctx.fillStyle = '#FFFFFF';
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size * 1.5, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
          }
        }

        // Return smoothly towards base velocity
        p.vx = p.vx * 0.94 + p.baseVx * 0.06;
        p.vy = p.vy * 0.94 + p.baseVy * 0.06;

        p.x += p.vx;
        p.y += p.vy;

        // Wrap around viewport edges
        if (p.x < 0) p.x = width;
        else if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        else if (p.y > height) p.y = 0;

        // Draw particle with electric glow
        ctx.save();
        ctx.shadowColor = p.color;
        ctx.shadowBlur = p.size * 5;
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0.15, Math.min(0.95, currentAlpha));
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      animFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.95 }}
    />
  );
};
