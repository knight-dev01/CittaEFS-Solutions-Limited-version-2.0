import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';

/**
 * Interactive 3D Card wrapper with dynamic cursor perspective tilt,
 * holographic glare flare, and smooth physics damping.
 */
interface TiltCard3DProps {
  children: React.ReactNode;
  key?: React.Key;
  className?: string;
  maxTilt?: number;
  perspective?: number;
  glareEffect?: boolean;
  scaleHover?: number;
}

export function TiltCard3D({
  children,
  className = '',
  maxTilt = 10,
  perspective = 1000,
  glareEffect = true,
  scaleHover = 1.02,
}: TiltCard3DProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50, opacity: 0 });

  const springConfig = { damping: 20, stiffness: 260 };
  const smoothRotateX = useSpring(rotateX, springConfig);
  const smoothRotateY = useSpring(rotateY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = (mouseX / width) * 100;
    const yPct = (mouseY / height) * 100;

    // Calculate rotation (-maxTilt to +maxTilt)
    const rotX = -((mouseY - height / 2) / (height / 2)) * maxTilt;
    const rotY = ((mouseX - width / 2) / (width / 2)) * maxTilt;

    setRotateX(rotX);
    setRotateY(rotY);
    if (glareEffect) {
      setGlarePosition({ x: xPct, y: yPct, opacity: 0.15 });
    }
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setGlarePosition((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      style={{ perspective: `${perspective}px` }}
      className={`relative w-full h-full ${className}`}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX: smoothRotateX,
          rotateY: smoothRotateY,
          transformStyle: 'preserve-3d',
        }}
        whileHover={{ scale: scaleHover }}
        transition={{ duration: 0.2 }}
        className="relative w-full h-full"
      >
        {/* Child content rendered in 3D space */}
        <div style={{ transform: 'translateZ(10px)' }} className="w-full h-full">
          {children}
        </div>

        {/* Dynamic Holographic Glare Flare */}
        {glareEffect && (
          <motion.div
            animate={{ opacity: glarePosition.opacity }}
            transition={{ duration: 0.2 }}
            style={{
              background: `radial-gradient(circle 240px at ${glarePosition.x}% ${glarePosition.y}%, rgba(255,255,255,0.75), transparent 70%)`,
            }}
            className="pointer-events-none absolute inset-0 mix-blend-overlay z-20 rounded-2xl"
          />
        )}
      </motion.div>
    </div>
  );
}

/**
 * 3D Floating Geometric Polyhedra and Orb mesh canvas.
 * Interactive ambient 3D geometric objects that float, spin, and react to depth.
 */
export function Floating3DObjects() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none">
      {/* 3D Isometric Cube 1 (Top Left) */}
      <motion.div
        animate={{
          y: [0, -22, 0],
          rotateX: [15, 35, 15],
          rotateY: [25, 65, 25],
          rotateZ: [0, 10, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{ transformStyle: 'preserve-3d', perspective: 800 }}
        className="absolute top-[12%] left-[4%] w-16 h-16 sm:w-20 sm:h-20 opacity-30 sm:opacity-45 hidden sm:block"
      >
        <div className="w-full h-full relative">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#2582ff]/40 to-[#2582ff]/5 border border-[#2582ff]/30 backdrop-blur-xs transform rotate-45 shadow-[0_10px_30px_rgba(37,130,255,0.2)]" />
          <div className="absolute inset-2 rounded-xl border border-white/40 transform rotate-12" />
        </div>
      </motion.div>

      {/* 3D Golden Torus / Ring (Top Right) */}
      <motion.div
        animate={{
          y: [0, 25, 0],
          rotateX: [45, 15, 45],
          rotateY: [10, 80, 10],
          scale: [0.95, 1.05, 0.95],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{ transformStyle: 'preserve-3d' }}
        className="absolute top-[18%] right-[6%] w-20 h-20 sm:w-28 sm:h-28 opacity-25 sm:opacity-40 hidden md:block"
      >
        <div className="w-full h-full rounded-full border-4 border-dashed border-[#ff8e1a]/40 bg-gradient-to-tr from-[#ff8e1a]/10 to-transparent shadow-[0_10px_40px_rgba(255,142,26,0.15)]" />
      </motion.div>

      {/* 3D Floating Prism / Octahedron Node (Bottom Center-Left) */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          x: [0, 15, 0],
          rotateZ: [0, 180, 360],
          rotateX: [20, 60, 20],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-[20%] left-[8%] w-14 h-14 sm:w-16 sm:h-16 opacity-20 sm:opacity-35 hidden lg:block"
      >
        <div className="w-full h-full bg-gradient-to-bl from-[#2582ff]/30 to-[#ff8e1a]/20 rounded-xl transform rotate-45 border border-white/30 backdrop-blur-xs shadow-lg" />
      </motion.div>

      {/* 3D Glowing Energy Sphere (Bottom Right) */}
      <motion.div
        animate={{
          y: [0, 20, -15, 0],
          x: [0, -20, 15, 0],
          scale: [1, 1.15, 0.9, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-[14%] right-[8%] w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gradient-to-tr from-[#2582ff]/15 via-[#ff8e1a]/10 to-transparent blur-xl pointer-events-none"
      />
    </div>
  );
}

/**
 * 3D Fluid Interactive Particles Canvas
 * High-performance HTML5 Canvas simulation creating fluid, undulating particle ribbons & nodes
 * that subtly react to mouse position or fluid time oscillations.
 */
export function FluidCanvasBackground({ className = '' }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 600);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize, { passive: true });

    // Interactive mouse tracking with fluid inertia
    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = mouseX;
    let targetMouseY = mouseY;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      targetMouseX = e.clientX - rect.left;
      targetMouseY = e.clientY - rect.top;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Fluid particles setup
    const particleCount = Math.min(38, Math.floor(width / 35));
    const particles = Array.from({ length: particleCount }).map((_, i) => ({
      x: (width / particleCount) * i + Math.random() * 20,
      y: Math.random() * height,
      baseX: (width / particleCount) * i,
      baseY: Math.random() * height,
      radius: Math.random() * 2.5 + 1.2,
      speed: Math.random() * 0.002 + 0.001,
      amplitude: Math.random() * 35 + 20,
      phase: Math.random() * Math.PI * 2,
      color: i % 3 === 0 ? 'rgba(255, 142, 26, 0.45)' : 'rgba(37, 130, 255, 0.45)',
    }));

    let time = 0;

    const render = () => {
      time += 0.015;
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // Render flowing ribbon curves connecting nearest particles
      ctx.lineWidth = 1;
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        
        // Fluid wave oscillation
        p1.y = p1.baseY + Math.sin(time + p1.phase) * p1.amplitude + (mouseY - height / 2) * 0.04;
        p1.x = p1.baseX + Math.cos(time * 0.8 + p1.phase) * (p1.amplitude * 0.5) + (mouseX - width / 2) * 0.04;

        // Draw particle node
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
        ctx.fillStyle = p1.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = p1.color;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Draw fluid mesh bridges between nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 180) {
            const alpha = (1 - dist / 180) * 0.22;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            
            // Bezier fluid control point
            const midX = (p1.x + p2.x) / 2 + Math.sin(time * 2 + i) * 15;
            const midY = (p1.y + p2.y) / 2 + Math.cos(time * 2 + j) * 15;
            ctx.quadraticCurveTo(midX, midY, p2.x, p2.y);
            
            ctx.strokeStyle = i % 2 === 0 
              ? `rgba(37, 130, 255, ${alpha})` 
              : `rgba(255, 142, 26, ${alpha * 0.9})`;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none z-0 opacity-80 ${className}`}
    />
  );
}

/**
 * 3D Isometric Interactive Data Flow Cube with animated packet pulses
 */
export function Isometric3DFlowCube({ className = '' }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center py-2 ${className}`}>
      <motion.div
        animate={{
          rotateY: [0, 360],
          rotateX: [12, 22, 12],
        }}
        transition={{
          rotateY: { duration: 22, repeat: Infinity, ease: 'linear' },
          rotateX: { duration: 7, repeat: Infinity, ease: 'easeInOut' },
        }}
        style={{
          transformStyle: 'preserve-3d',
          perspective: 1000,
        }}
        className="w-44 h-44 sm:w-48 sm:h-48 relative cursor-grab active:cursor-grabbing"
      >
        {/* Front Face (Matrix Ledger) */}
        <div
          style={{ transform: 'translateZ(86px)' }}
          className="absolute inset-0 rounded-2xl bg-gradient-to-br from-slate-900/95 to-slate-950/98 border border-[#2582ff]/60 backdrop-blur-md p-4 flex flex-col justify-between shadow-[0_0_25px_rgba(37,130,255,0.25)] select-none"
        >
          <div className="flex justify-between items-center text-[10px] font-mono text-[#2582ff]">
            <span>NODE_CORE</span>
            <span className="w-2 h-2 rounded-full bg-[#2582ff] animate-ping" />
          </div>
          <div className="font-mono text-xs text-white font-bold tracking-wider">
            CITTAMATRIX ERP
          </div>
          <div className="text-[9px] font-mono text-slate-400">
            LEDGER_PRE_CLEAR: ACTIVE
          </div>
        </div>

        {/* Back Face (EFS NRS Gateway) */}
        <div
          style={{ transform: 'rotateY(180deg) translateZ(86px)' }}
          className="absolute inset-0 rounded-2xl bg-gradient-to-br from-slate-900/95 to-slate-950/98 border border-[#ff8e1a]/60 backdrop-blur-md p-4 flex flex-col justify-between shadow-[0_0_25px_rgba(255,142,26,0.25)] select-none"
        >
          <div className="flex justify-between items-center text-[10px] font-mono text-[#ff8e1a]">
            <span>FISCAL_SIGN</span>
            <span className="w-2 h-2 rounded-full bg-[#ff8e1a] animate-pulse" />
          </div>
          <div className="font-mono text-xs text-white font-bold tracking-wider">
            CITTAEFS GATEWAY
          </div>
          <div className="text-[9px] font-mono text-slate-400">
            SHA-256 HASH: VALID
          </div>
        </div>

        {/* Right Face (Hospitality & Planner) */}
        <div
          style={{ transform: 'rotateY(90deg) translateZ(86px)' }}
          className="absolute inset-0 rounded-2xl bg-gradient-to-br from-slate-900/95 to-slate-950/98 border border-emerald-500/50 backdrop-blur-md p-4 flex flex-col justify-between select-none shadow-[0_0_20px_rgba(16,185,129,0.15)]"
        >
          <div className="flex justify-between items-center text-[10px] font-mono text-emerald-400">
            <span>PMS_SYNC</span>
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
          </div>
          <div className="font-mono text-xs text-white font-bold tracking-wider">
            HOSPITALITY X
          </div>
          <div className="text-[9px] font-mono text-slate-400">
            ROOM_FOLIO: SYNCED
          </div>
        </div>

        {/* Left Face (Nexus Mesh) */}
        <div
          style={{ transform: 'rotateY(-90deg) translateZ(86px)' }}
          className="absolute inset-0 rounded-2xl bg-gradient-to-br from-slate-900/95 to-slate-950/98 border border-purple-500/50 backdrop-blur-md p-4 flex flex-col justify-between select-none shadow-[0_0_20px_rgba(168,85,247,0.15)]"
        >
          <div className="flex justify-between items-center text-[10px] font-mono text-purple-400">
            <span>MESH_ROUTER</span>
            <span className="w-2 h-2 rounded-full bg-purple-400" />
          </div>
          <div className="font-mono text-xs text-white font-bold tracking-wider">
            CITTANEXUS API
          </div>
          <div className="text-[9px] font-mono text-slate-400">
            CIRCUIT: OK (0.24ms)
          </div>
        </div>

        {/* Top Face */}
        <div
          style={{ transform: 'rotateX(90deg) translateZ(86px)' }}
          className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[#2582ff]/20 to-slate-950 border border-white/10"
        />

        {/* Bottom Face */}
        <div
          style={{ transform: 'rotateX(-90deg) translateZ(86px)' }}
          className="absolute inset-0 rounded-2xl bg-gradient-to-t from-[#ff8e1a]/20 to-slate-950 border border-white/10"
        />
      </motion.div>
    </div>
  );
}

/**
 * 3D Fluid Stream Section Divider with undulating wave layers
 */
export function Fluid3DStreamDivider({
  colorTheme = 'blue',
  reverse = false,
}: {
  colorTheme?: 'blue' | 'orange' | 'dual';
  reverse?: boolean;
}) {
  const isDual = colorTheme === 'dual';
  const isBlue = colorTheme === 'blue';

  return (
    <div
      className={`relative w-full overflow-hidden leading-none z-10 pointer-events-none py-2 ${
        reverse ? 'rotate-180' : ''
      }`}
    >
      <motion.div
        animate={{
          x: [0, -40, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="w-[120%] -ml-[10%]"
      >
        <svg
          viewBox="0 0 1440 90"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-12 sm:h-16 block"
          preserveAspectRatio="none"
        >
          <path
            d="M0,32 C240,75 480,10 720,48 C960,86 1200,20 1440,54 L1440,90 L0,90 Z"
            fill={
              isDual
                ? 'url(#dualGradient)'
                : isBlue
                ? 'rgba(37, 130, 255, 0.04)'
                : 'rgba(255, 142, 26, 0.04)'
            }
          />
          <path
            d="M0,45 C280,15 540,65 800,30 C1060, -5 1280,50 1440,35 L1440,90 L0,90 Z"
            fill={
              isDual
                ? 'url(#dualGradient2)'
                : isBlue
                ? 'rgba(37, 130, 255, 0.07)'
                : 'rgba(255, 142, 26, 0.07)'
            }
          />
          <defs>
            <linearGradient id="dualGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#2582ff" stopOpacity="0.04" />
              <stop offset="50%" stopColor="#ff8e1a" stopOpacity="0.03" />
              <stop offset="100%" stopColor="#2582ff" stopOpacity="0.04" />
            </linearGradient>
            <linearGradient id="dualGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#2582ff" stopOpacity="0.07" />
              <stop offset="50%" stopColor="#ff8e1a" stopOpacity="0.06" />
              <stop offset="100%" stopColor="#2582ff" stopOpacity="0.07" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>
    </div>
  );
}
