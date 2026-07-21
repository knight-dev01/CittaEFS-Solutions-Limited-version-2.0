import { ArrowRight, ChevronRight, Cpu, Database, Landmark, Layers, Calendar, Link2 } from 'lucide-react';
import { motion } from 'motion/react';

interface CSLHeroProps {
  onExploreEcosystem: () => void;
  onExploreEFS: () => void;
  onRequestDemo: () => void;
}

export default function CSLHero({ onExploreEcosystem, onExploreEFS, onRequestDemo }: CSLHeroProps) {
  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 lg:pt-44 lg:pb-36 bg-white text-slate-800 overflow-hidden border-b border-slate-200">
      
      {/* 1. Clean blueprint grid overlay for a high-end engineering feel */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-[0.05]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      {/* 2. Soft pastel gradient glows in the background (using theme colors: corporate blue and orange) */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 30, -30, 0],
            y: [0, -40, 40, 0],
            scale: [1, 1.1, 0.95, 1]
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-[-10%] left-[10%] w-[500px] h-[500px] rounded-full bg-[#2582ff]/6 blur-[120px]"
        />
        <motion.div
          animate={{
            x: [0, -25, 25, 0],
            y: [0, 40, -30, 0],
            scale: [1, 0.95, 1.05, 1]
          }}
          transition={{
            duration: 26,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-[-10%] right-[10%] w-[600px] h-[600px] rounded-full bg-[#ff8e1a]/4 blur-[130px]"
        />
      </div>

      {/* 3. Bespoke Minimalist Network Node Graph Background (visible on md screens, collapses gracefully) */}
      <div className="absolute inset-0 pointer-events-none z-0 hidden md:block">
        <svg className="w-full h-full" viewBox="0 0 1440 800" fill="none">
          {/* Node Connections */}
          {/* Left Wing Connections */}
          <line x1="150" y1="200" x2="280" y2="420" stroke="rgba(37, 130, 255, 0.14)" strokeWidth="1" />
          <line x1="280" y1="420" x2="180" y2="600" stroke="rgba(37, 130, 255, 0.14)" strokeWidth="1" />
          <line x1="150" y1="200" x2="180" y2="600" stroke="rgba(37, 130, 255, 0.06)" strokeWidth="1" strokeDasharray="3,3" />
          
          {/* Right Wing Connections */}
          <line x1="1290" y1="220" x2="1160" y2="440" stroke="rgba(255, 142, 26, 0.14)" strokeWidth="1" />
          <line x1="1160" y1="440" x2="1260" y2="620" stroke="rgba(255, 142, 26, 0.14)" strokeWidth="1" />
          <line x1="1290" y1="220" x2="1260" y2="620" stroke="rgba(255, 142, 26, 0.06)" strokeWidth="1" strokeDasharray="3,3" />

          {/* Central Bridging System & Cross-Symmetry Connections */}
          <line x1="280" y1="420" x2="1160" y2="440" stroke="rgba(37, 130, 255, 0.08)" strokeWidth="1.5" strokeDasharray="5,5" />
          <line x1="150" y1="200" x2="1160" y2="440" stroke="rgba(37, 130, 255, 0.04)" strokeWidth="1" strokeDasharray="4,4" />
          <line x1="280" y1="420" x2="1290" y2="220" stroke="rgba(255, 142, 26, 0.04)" strokeWidth="1" strokeDasharray="4,4" />

          {/* Left Wing Nodes */}
          {/* Node 1: Ledger Engine */}
          <g>
            <circle cx="150" cy="200" r="4.5" fill="#2582ff" />
            <motion.circle cx="150" cy="200" r="10" stroke="#2582ff" strokeWidth="1" animate={{ scale: [1, 2.2], opacity: [0.6, 0] }} transition={{ duration: 3, repeat: Infinity }} />
            <text x="162" y="204" fill="#64748b" className="font-mono text-[9px] font-bold tracking-wider">LEDGER_CORE_A1</text>
          </g>

          {/* Node 2: Matrix ERP */}
          <g>
            <circle cx="280" cy="420" r="5.5" fill="#2582ff" />
            <motion.circle cx="280" cy="420" r="14" stroke="#2582ff" strokeWidth="1.2" animate={{ scale: [1, 2.4], opacity: [0.5, 0] }} transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }} />
            <text x="294" y="424" fill="#475569" className="font-mono text-[10px] font-extrabold tracking-wide">CITTAMATRIX_NODE</text>
          </g>

          {/* Node 3: Scheduler Router */}
          <g>
            <circle cx="180" cy="600" r="4.5" fill="#2582ff" />
            <motion.circle cx="180" cy="600" r="9.5" stroke="#2582ff" strokeWidth="1" animate={{ scale: [1, 2], opacity: [0.6, 0] }} transition={{ duration: 4, repeat: Infinity, delay: 1 }} />
            <text x="192" y="604" fill="#64748b" className="font-mono text-[9px] font-bold tracking-wider">PLANNER_SYNC_B7</text>
          </g>

          {/* Right Wing Nodes */}
          {/* Node 4: Compliance Gateway */}
          <g>
            <circle cx="1290" cy="220" r="4.5" fill="#ff8e1a" />
            <motion.circle cx="1290" cy="220" r="11" stroke="#ff8e1a" strokeWidth="1" animate={{ scale: [1, 2.2], opacity: [0.6, 0] }} transition={{ duration: 3.2, repeat: Infinity, delay: 0.2 }} />
            <text x="1150" y="224" fill="#64748b" className="font-mono text-[9px] font-bold tracking-wider text-right">CITTAEFS_NRS</text>
          </g>

          {/* Node 5: Gateway Central Hub */}
          <g>
            <circle cx="1160" cy="440" r="6" fill="#ff8e1a" />
            <motion.circle cx="1160" cy="440" r="15" stroke="#ff8e1a" strokeWidth="1.2" animate={{ scale: [1, 2.5], opacity: [0.5, 0] }} transition={{ duration: 3.8, repeat: Infinity, delay: 0.8 }} />
            <text x="1015" y="444" fill="#475569" className="font-mono text-[10px] font-extrabold tracking-wide text-right">NEXUS_API_GATEWAY</text>
          </g>

          {/* Node 6: PMS Client terminal */}
          <g>
            <circle cx="1260" cy="620" r="4.5" fill="#ff8e1a" />
            <motion.circle cx="1260" cy="620" r="9.5" stroke="#ff8e1a" strokeWidth="1" animate={{ scale: [1, 2], opacity: [0.6, 0] }} transition={{ duration: 4.2, repeat: Infinity, delay: 1.2 }} />
            <text x="1135" y="624" fill="#64748b" className="font-mono text-[9px] font-bold tracking-wider text-right">HOSPITALITY_P8</text>
          </g>

          {/* Sliding Data Packets (Pulsing Signals moving down connections) */}
          {/* Left Wing Packets */}
          <motion.circle r="3" fill="#2582ff"
            animate={{
              cx: [150, 280],
              cy: [200, 420]
            }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
          />
          <motion.circle r="2.5" fill="#2582ff"
            animate={{
              cx: [280, 180],
              cy: [420, 600]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 1 }}
          />
          <motion.circle r="2" fill="#2582ff"
            animate={{
              cx: [180, 150],
              cy: [600, 200]
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear", delay: 0.5 }}
          />

          {/* Right Wing Packets */}
          <motion.circle r="3" fill="#ff8e1a"
            animate={{
              cx: [1290, 1160],
              cy: [220, 440]
            }}
            transition={{ duration: 3.8, repeat: Infinity, ease: "linear" }}
          />
          <motion.circle r="2.5" fill="#ff8e1a"
            animate={{
              cx: [1160, 1260],
              cy: [440, 620]
            }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "linear", delay: 0.5 }}
          />
          <motion.circle r="2" fill="#ff8e1a"
            animate={{
              cx: [1260, 1290],
              cy: [620, 220]
            }}
            transition={{ duration: 5.2, repeat: Infinity, ease: "linear", delay: 1.2 }}
          />

          {/* Cross Sliding packets (Bridges) */}
          <motion.circle r="3.5" fill="#2582ff"
            animate={{
              cx: [280, 1160],
              cy: [420, 440]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          />
          <motion.circle r="2" fill="#ff8e1a"
            animate={{
              cx: [1160, 280],
              cy: [440, 420]
            }}
            transition={{ duration: 7, repeat: Infinity, ease: "linear", delay: 3 }}
          />
          <motion.circle r="1.5" fill="#2582ff"
            animate={{
              cx: [150, 1160],
              cy: [200, 440]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear", delay: 2 }}
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Tagline / Sub-badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center space-x-2.5 px-4 py-1.5 bg-[#2582ff]/5 border border-[#2582ff]/15 rounded-full text-[11px] sm:text-xs font-mono text-[#2582ff] tracking-wide"
          >
            <span className="h-2 w-2 rounded-full bg-[#2582ff] animate-ping" />
            <span className="font-extrabold uppercase">CSL Enterprise Software Ecosystem</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-slate-900 select-none"
          >
            Engineering the Future of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2582ff] via-slate-800 to-[#ff8e1a] animate-gradient">
              Enterprise Digital Transformation
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl mx-auto font-medium"
          >
            CSL builds enterprise software that helps organisations modernise operations, simplify compliance, and accelerate digital transformation.
          </motion.p>

          {/* Buttons Row */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2"
          >
            <a
              href="#products"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById('products');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold tracking-wide text-white bg-[#2582ff] hover:bg-[#1a73e8] transition-all duration-300 cursor-pointer flex items-center justify-center space-x-2 shadow-lg shadow-[#2582ff]/20 w-full sm:w-auto hover:scale-105"
            >
              <span>Explore Our Solutions</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold tracking-wide text-slate-700 bg-slate-50 border border-slate-200 hover:bg-slate-100 hover:text-slate-900 transition-all duration-300 flex items-center justify-center space-x-1.5 w-full sm:w-auto hover:scale-105"
            >
              <span>Request a Consultation</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </motion.div>

        </div>

        {/* Floating Quick Feature Strip */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 sm:mt-24 max-w-5xl mx-auto p-4 sm:p-6 bg-white/80 border border-slate-200/80 rounded-3xl backdrop-blur-md grid grid-cols-2 md:grid-cols-4 gap-6 text-left shadow-xl shadow-slate-100/70"
        >
          <div className="space-y-1">
            <span className="text-[10px] font-mono text-[#2582ff] uppercase tracking-widest font-extrabold">01. COMPLIANCE</span>
            <h4 className="font-extrabold text-sm text-slate-800">Regulatory Shield</h4>
            <p className="text-[11px] text-slate-500">Secure real-time transaction clearing & ledger protection.</p>
          </div>
          <div className="space-y-1">
            <span className="text-[10px] font-mono text-[#ff8e1a] uppercase tracking-widest font-extrabold">02. PERFORMANCE</span>
            <h4 className="font-extrabold text-sm text-slate-800">High-Velocity</h4>
            <p className="text-[11px] text-slate-500">Under 240ms end-to-end data validation & transit.</p>
          </div>
          <div className="space-y-1">
            <span className="text-[10px] font-mono text-[#2582ff] uppercase tracking-widest font-extrabold">03. ARCHITECTURE</span>
            <h4 className="font-extrabold text-sm text-slate-800">Modular ERP</h4>
            <p className="text-[11px] text-slate-500">Attach seamlessly to SAP, Oracle, and Dynamics.</p>
          </div>
          <div className="space-y-1">
            <span className="text-[10px] font-mono text-[#ff8e1a] uppercase tracking-widest font-extrabold">04. AI AUTOMATION</span>
            <h4 className="font-extrabold text-sm text-slate-800">Forecasting Core</h4>
            <p className="text-[11px] text-slate-500">Simulate financial cash flows and stock levels.</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
