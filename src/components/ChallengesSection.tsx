import React, { useState, useRef } from 'react';
import { motion, useSpring, useMotionValue } from 'motion/react';
import { 
  Building2, Shuffle, ShieldAlert, Cpu, FileClock, CheckCircle2, ArrowRight,
  Database, ShieldCheck, Zap, Layers, Server, RefreshCcw, Move3d
} from 'lucide-react';

/**
 * Scalable Interactive 3D Architecture Stack
 * Perfectly responsive on all screen sizes (mobile 320px up to 4K displays).
 * Supports mouse drag, touch drag, and layer expansion with zero overflow.
 */
function Interactive3DMiddlewareStack() {
  const [isExploded, setIsExploded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // 3D Rotation with smooth spring physics
  const rotateXVal = useMotionValue(-15);
  const rotateYVal = useMotionValue(25);
  const springConfig = { damping: 25, stiffness: 200 };
  const smoothRotateX = useSpring(rotateXVal, springConfig);
  const smoothRotateY = useSpring(rotateYVal, springConfig);

  const isDragging = useRef(false);
  const startPos = useRef({ x: 0, y: 0 });
  const startRot = useRef({ x: -15, y: 25 });

  const handlePointerDown = (e: React.PointerEvent) => {
    isDragging.current = true;
    startPos.current = { x: e.clientX, y: e.clientY };
    startRot.current = { x: rotateXVal.get(), y: rotateYVal.get() };
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current) return;
    const deltaX = e.clientX - startPos.current.x;
    const deltaY = e.clientY - startPos.current.y;
    
    // Clamp rotation angles for pleasing isometric perspective
    const newRotY = Math.max(-60, Math.min(60, startRot.current.y + deltaX * 0.4));
    const newRotX = Math.max(-40, Math.min(10, startRot.current.x - deltaY * 0.4));
    
    rotateYVal.set(newRotY);
    rotateXVal.set(newRotX);
  };

  const handlePointerUp = () => {
    isDragging.current = false;
  };

  const resetRotation = () => {
    rotateXVal.set(-15);
    rotateYVal.set(25);
  };

  return (
    <div className="w-full max-w-full flex flex-col items-center select-none">
      
      {/* 3D Stage Controls */}
      <div className="w-full flex items-center justify-between px-2 mb-3 sm:mb-4">
        <div className="flex items-center space-x-1.5 text-slate-400 font-mono text-[10px] sm:text-xs">
          <Move3d className="w-3.5 h-3.5 text-[#2582ff]" />
          <span className="hidden xs:inline">Drag to Rotate in 3D</span>
          <span className="xs:hidden">3D Interactive</span>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={() => setIsExploded(!isExploded)}
            className={`px-2.5 py-1 rounded-lg text-[10px] sm:text-xs font-mono font-bold transition-all border ${
              isExploded 
                ? 'bg-[#2582ff] text-white border-[#2582ff] shadow-sm' 
                : 'bg-slate-800 text-slate-300 border-slate-700 hover:text-white'
            }`}
          >
            {isExploded ? 'Collapse Stack' : 'Explode Layers'}
          </button>
          
          <button
            onClick={resetRotation}
            title="Reset Angle"
            className="p-1 rounded-lg bg-slate-800 text-slate-400 hover:text-white border border-slate-700 transition-all"
          >
            <RefreshCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* 3D Viewport Box */}
      <div 
        ref={containerRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        style={{ perspective: 1200 }}
        className="w-full aspect-square max-w-[280px] xs:max-w-[320px] sm:max-w-[360px] md:max-w-[380px] rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800/80 p-4 flex items-center justify-center cursor-grab active:cursor-grabbing relative overflow-hidden touch-none shadow-inner"
      >
        {/* Subtle background radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,130,255,0.12),transparent_70%)] pointer-events-none" />

        {/* 3D Scene Root */}
        <motion.div
          style={{
            rotateX: smoothRotateX,
            rotateY: smoothRotateY,
            transformStyle: 'preserve-3d',
          }}
          className="w-40 h-40 sm:w-48 sm:h-48 relative flex items-center justify-center"
        >

          {/* LAYER 1 (Top / Clearance Gateway): Translates up */}
          <motion.div
            animate={{
              y: isExploded ? -68 : -32,
              opacity: 1,
            }}
            transition={{ type: 'spring', damping: 20, stiffness: 180 }}
            style={{ transformStyle: 'preserve-3d' }}
            className="absolute w-36 h-36 sm:w-44 sm:h-44 rounded-2xl bg-gradient-to-br from-emerald-950/90 to-slate-900/95 border-2 border-emerald-500/60 shadow-[0_0_20px_rgba(16,185,129,0.3)] p-3 flex flex-col justify-between"
          >
            <div className="flex justify-between items-center text-[9px] font-mono text-emerald-400 font-bold">
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                LAYER 03
              </span>
              <span className="bg-emerald-900/60 px-1.5 py-0.5 rounded text-[8px] border border-emerald-700/50">
                NTAA VERIFIED
              </span>
            </div>
            
            <div className="text-center space-y-0.5">
              <ShieldCheck className="w-6 h-6 sm:w-7 sm:h-7 text-emerald-400 mx-auto" />
              <div className="font-display text-xs sm:text-sm font-bold text-white tracking-tight">
                Tax &amp; Fiscal Gateway
              </div>
              <div className="text-[8px] sm:text-[9px] font-mono text-slate-300">
                Automatic Pre-Clearance
              </div>
            </div>

            <div className="flex justify-between items-center text-[8px] font-mono text-emerald-300/80 pt-1 border-t border-emerald-900/50">
              <span>NTAA SEC 23</span>
              <span>100% VALIDATED</span>
            </div>
          </motion.div>


          {/* LAYER 2 (Middle / CSL Unified Middleware Engine) */}
          <motion.div
            animate={{
              y: 0,
              scale: isExploded ? 1.05 : 1,
            }}
            transition={{ type: 'spring', damping: 20, stiffness: 180 }}
            style={{ transformStyle: 'preserve-3d' }}
            className="absolute w-40 h-40 sm:w-48 sm:h-48 rounded-2xl bg-gradient-to-br from-[#0c2a5e]/95 to-slate-950/98 border-2 border-[#2582ff] shadow-[0_0_30px_rgba(37,130,255,0.4)] p-3.5 flex flex-col justify-between z-10"
          >
            <div className="flex justify-between items-center text-[9px] font-mono text-[#2582ff] font-bold">
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2582ff] animate-ping" />
                LAYER 02
              </span>
              <span className="bg-blue-900/70 text-blue-200 px-1.5 py-0.5 rounded text-[8px] border border-blue-600/50">
                CSL CORE
              </span>
            </div>

            <div className="text-center space-y-1">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#2582ff] text-white flex items-center justify-center mx-auto shadow-md">
                <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="font-display text-xs sm:text-sm font-extrabold text-white tracking-tight">
                CSL Unified Middleware
              </div>
              <div className="text-[8px] sm:text-[9px] font-mono text-blue-200">
                TLS 1.3 • Real-Time Hashing
              </div>
            </div>

            <div className="flex justify-between items-center text-[8px] font-mono text-blue-300 pt-1 border-t border-blue-900/60">
              <span>LATENCY: &lt;150ms</span>
              <span>ZERO DISRUPTION</span>
            </div>
          </motion.div>


          {/* LAYER 3 (Bottom / Enterprise ERPs & Systems): Translates down */}
          <motion.div
            animate={{
              y: isExploded ? 68 : 32,
              opacity: 1,
            }}
            transition={{ type: 'spring', damping: 20, stiffness: 180 }}
            style={{ transformStyle: 'preserve-3d' }}
            className="absolute w-36 h-36 sm:w-44 sm:h-44 rounded-2xl bg-gradient-to-br from-slate-900/95 to-slate-950/98 border-2 border-slate-700/80 shadow-[0_0_20px_rgba(0,0,0,0.5)] p-3 flex flex-col justify-between"
          >
            <div className="flex justify-between items-center text-[9px] font-mono text-slate-400 font-bold">
              <span>LAYER 01</span>
              <span className="bg-slate-800 text-slate-300 px-1.5 py-0.5 rounded text-[8px]">
                SOURCE ERPs
              </span>
            </div>

            <div className="text-center space-y-0.5">
              <Database className="w-6 h-6 sm:w-7 sm:h-7 text-[#ff8e1a] mx-auto" />
              <div className="font-display text-xs sm:text-sm font-bold text-white tracking-tight">
                Enterprise Core Ledgers
              </div>
              <div className="text-[8px] sm:text-[9px] font-mono text-slate-400">
                SAP • Oracle • MS Dynamics • Odoo
              </div>
            </div>

            <div className="flex justify-between items-center text-[8px] font-mono text-slate-400 pt-1 border-t border-slate-800">
              <span>HOSTED LEDGER</span>
              <span>100% PRESERVED</span>
            </div>
          </motion.div>

        </motion.div>
      </div>

      {/* Layer legend beneath visualizer for mobile clarity */}
      <div className="grid grid-cols-3 gap-2 w-full max-w-[380px] mt-3 text-center">
        <div className="p-1.5 rounded-lg bg-slate-900/70 border border-slate-800">
          <span className="block text-[8px] font-mono text-slate-400 font-bold">01. ERPs</span>
          <span className="block text-[9px] text-slate-300 truncate">Protected</span>
        </div>
        <div className="p-1.5 rounded-lg bg-blue-950/40 border border-blue-900/60">
          <span className="block text-[8px] font-mono text-[#2582ff] font-bold">02. CSL Hub</span>
          <span className="block text-[9px] text-blue-200 truncate">Middleware</span>
        </div>
        <div className="p-1.5 rounded-lg bg-emerald-950/40 border border-emerald-900/60">
          <span className="block text-[8px] font-mono text-emerald-400 font-bold">03. NTAA</span>
          <span className="block text-[9px] text-emerald-300 truncate">Compliant</span>
        </div>
      </div>

    </div>
  );
}

export default function ChallengesSection() {
  const challenges = [
    {
      id: "legacy",
      num: "01",
      title: "Legacy System Agility",
      category: "System Resilience",
      desc: "Outdated enterprise software structures cannot keep pace with dynamic digital needs, yet replacing them entirely poses extreme operational risks and prohibitive capital costs.",
      solution: "Fully modernized system capabilities, restored operational agility, and secure transaction workflows without replacing or disrupting your trusted legacy database systems.",
      icon: Building2,
      accent: "text-[#2582ff] bg-blue-50 border-blue-200"
    },
    {
      id: "disconnected",
      num: "02",
      title: "Operational Disconnection",
      category: "Data Integrity",
      desc: "Information gaps between corporate departments, remote warehouses, and transactional channels lead to invoicing friction, resource overlap, and critical database errors.",
      solution: "A unified, real-time data flow that bridges corporate divisions, eliminates transactional leakages, and establishes a single source of operational truth.",
      icon: Shuffle,
      accent: "text-purple-600 bg-purple-50 border-purple-200"
    },
    {
      id: "regulatory",
      num: "03",
      title: "Regulatory Volatility",
      category: "Fiscal Governance",
      desc: "Dynamic national tax codes, electronic reporting mandates, and changing compliance rules threaten large enterprises with severe non-compliance risks and administrative overhead.",
      solution: "Continuous, friction-free regulatory alignment that automatically secures full tax clearance without affecting transactional throughput or ledger speed.",
      icon: ShieldAlert,
      accent: "text-emerald-700 bg-emerald-50 border-emerald-200"
    },
    {
      id: "inefficiency",
      num: "04",
      title: "Resource Over-Allocation",
      category: "Resource Leveling",
      desc: "Static scheduling tools, mismanaged supply paths, and team overallocation lead to delayed project milestones and directly erode corporate profit margins.",
      solution: "Optimal workforce utilization, balanced multi-site scheduling, and predictable project deliveries achieved through intelligent resource leveling.",
      icon: Cpu,
      accent: "text-amber-700 bg-amber-50 border-amber-200"
    },
    {
      id: "manual",
      num: "05",
      title: "Manual Workflow Bottlenecks",
      category: "Process Automation",
      desc: "Manual reconciliations, spreadsheet dependencies, and offline paper tracking slow down transaction cycles and introduce significant human billing errors.",
      solution: "Complete administrative workflow automation that speeds up transaction cycles, eliminates spreadsheet errors, and reclaims weekly staff hours.",
      icon: FileClock,
      accent: "text-teal-700 bg-teal-50 border-teal-200"
    }
  ];

  return (
    <section id="challenges" className="py-14 sm:py-22 bg-white text-slate-800 relative overflow-hidden border-b border-slate-200">
      {/* Background subtle light ambient effects */}
      <div className="absolute top-1/4 left-0 w-80 sm:w-96 h-80 sm:h-96 bg-[#2582ff]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full overflow-hidden">
        
        {/* Title Block */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10 sm:mb-16 gap-3 sm:gap-4">
          <span className="inline-block font-mono text-xs uppercase tracking-widest text-[#2582ff] font-bold bg-[#2582ff]/5 px-3.5 py-1.5 rounded-full border border-[#2582ff]/10">
            Section 03. Market Obstacles
          </span>
          <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            The Challenges We Solve
          </h2>
          <p className="text-slate-600 text-xs sm:text-base leading-relaxed max-w-2xl">
            Modern enterprises face a complex web of technical and regulatory hurdles. CSL builds intelligent middleware and business systems engineered to dissolve technical debt, streamline operations, and guarantee effortless compliance.
          </p>
        </div>

        {/* 1. Grid of 5 Challenge Cards (Optimized for Mobile and Desktop with Crystal Clarity) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-16">
          {challenges.map((ch, idx) => {
            const Icon = ch.icon;
            const isLastOnDesktop = idx === 4;

            return (
              <motion.div
                key={ch.id}
                initial={{ opacity: 1, y: 0 }}
                className={`p-5 sm:p-6 bg-slate-50 border border-slate-200/90 hover:border-[#2582ff]/60 hover:bg-white rounded-2xl transition-all duration-200 group text-left shadow-xs hover:shadow-md flex flex-col justify-between ${
                  isLastOnDesktop ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                {/* Top: Category tag, index number, and icon */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#2582ff] bg-[#2582ff]/10 px-2.5 py-0.5 rounded-md border border-[#2582ff]/15">
                      {ch.category}
                    </span>
                    <span className="font-mono text-xs text-slate-400 font-bold">
                      {ch.num} / 05
                    </span>
                  </div>

                  <div className="flex items-start space-x-3 pt-1">
                    <div className={`p-2.5 rounded-xl border shrink-0 group-hover:bg-[#2582ff] group-hover:text-white group-hover:border-[#2582ff] transition-colors ${ch.accent}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="space-y-1 flex-1 min-w-0">
                      <h3 className="font-display font-bold text-base sm:text-lg text-slate-900 group-hover:text-[#2582ff] transition-colors break-words">
                        {ch.title}
                      </h3>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                        {ch.desc}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom: Crisp CSL Resolution Box */}
                <div className="mt-4 pt-4 border-t border-slate-200/70">
                  <div className="p-3 bg-gradient-to-br from-blue-50/80 to-slate-50 border border-blue-100/90 rounded-xl flex items-start space-x-2.5">
                    <div className="p-1 bg-[#2582ff] text-white rounded-md shrink-0 mt-0.5 shadow-xs">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <div className="space-y-0.5 flex-1 min-w-0">
                      <span className="font-mono font-bold text-[#2582ff] text-[9px] sm:text-[10px] uppercase tracking-wider block">
                        CSL RESOLUTION
                      </span>
                      <p className="text-slate-700 text-xs font-medium leading-relaxed">
                        {ch.solution}
                      </p>
                    </div>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* 2. Unified Middleware Strategy: Full-Width Feature Card Following the Challenges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-slate-950 text-white border border-slate-800 shadow-2xl p-5 sm:p-8 lg:p-12 relative overflow-hidden w-full max-w-full"
        >
          {/* Subtle geometric background grid */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:2rem_2rem]" />
          </div>
          <div className="absolute -right-16 -bottom-16 w-80 h-80 bg-[#2582ff]/15 blur-[90px] rounded-full pointer-events-none" />
          <div className="absolute -left-16 -top-16 w-64 h-64 bg-emerald-500/10 blur-[80px] rounded-full pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10 w-full max-w-full">
            
            {/* Left side: Strategic Narrative & Assurances */}
            <div className="lg:col-span-6 text-left space-y-4 sm:space-y-5 w-full">
              <span className="inline-flex items-center space-x-2 text-[10px] font-mono text-[#ff8e1a] uppercase tracking-widest font-extrabold px-3 py-1 bg-white/5 border border-white/10 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff8e1a] animate-pulse" />
                <span>Unified Middleware Strategy</span>
              </span>

              <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-snug break-words">
                Dissolving Friction Without System Disruption
              </h3>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Many organizations believe that achieving strict compliance or modernizing workflows requires a full replacement of their expensive core software.
              </p>

              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                CSL was built on the philosophy of <strong className="text-white">coexistence and elevation</strong>. We design intelligent, secure middleware layers that integrate into SAP, Oracle, Odoo, and Microsoft Dynamics, immediately converting structural obstacles into quiet background utilities.
              </p>

              {/* Trust Checkpoints */}
              <div className="pt-2 space-y-2.5">
                <div className="flex items-center space-x-2.5 text-xs text-slate-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0 shadow-[0_0_6px_#34d399]" />
                  <span>Preserves existing hardware, ERPs &amp; database assets</span>
                </div>
                <div className="flex items-center space-x-2.5 text-xs text-slate-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0 shadow-[0_0_6px_#34d399]" />
                  <span>Sub-200ms real-time pre-clearance validation throughput</span>
                </div>
                <div className="flex items-center space-x-2.5 text-xs text-slate-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0 shadow-[0_0_6px_#34d399]" />
                  <span>TLS 1.3 encryption &amp; ISO-27001 grade protocols</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center space-x-2 text-xs font-bold text-[#ff8e1a] hover:text-[#ffa742] transition-colors group"
                >
                  <span>Consult our integration team</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Right side: Scalable Interactive 3D Architecture Visualizer */}
            <div className="lg:col-span-6 w-full flex justify-center items-center overflow-hidden">
              <Interactive3DMiddlewareStack />
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
