import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { Sparkles, ShieldCheck, Database, Layers, ArrowUpRight } from 'lucide-react';
import { useCountUp } from '../hooks/useCountUp';

// GradientMesh background glow
export function GradientMesh({ colorTheme = 'blue' }: { colorTheme?: 'blue' | 'orange' }) {
  const isBlue = colorTheme === 'blue';
  const glowColor1 = isBlue ? 'bg-[#2582ff]/10' : 'bg-[#ff8e1a]/10';
  const glowColor2 = isBlue ? 'bg-[#1d63ed]/5' : 'bg-[#e67500]/5';
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <motion.div 
        animate={{
          x: [0, 40, -40, 0],
          y: [0, -50, 50, 0],
          scale: [1, 1.15, 0.9, 1]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className={`absolute top-[-10%] left-[20%] w-[500px] h-[500px] rounded-full blur-[120px] ${glowColor1}`}
      />
      <motion.div 
        animate={{
          x: [0, -30, 30, 0],
          y: [0, 60, -40, 0],
          scale: [1, 0.9, 1.1, 1]
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className={`absolute bottom-[-10%] right-[10%] w-[600px] h-[600px] rounded-full blur-[140px] ${glowColor2}`}
      />
    </div>
  );
}

// Floating Particles
export function FloatingParticles({ count = 20 }) {
  const [particles, setParticles] = useState<{ id: number; x: number; y: number; size: number; duration: number; delay: number }[]>([]);
  
  useEffect(() => {
    const pts = Array.from({ length: count }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 15 + 15,
      delay: Math.random() * -10
    }));
    setParticles(pts);
  }, [count]);

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          style={{
            position: 'absolute',
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: 'rgba(37, 130, 255, 0.25)',
            borderRadius: '50%',
          }}
          animate={{
            y: ['0%', '-150%'],
            opacity: [0, 0.8, 0.8, 0]
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
}

// Network Grid with node intersections and drawing patterns
export function NetworkGrid() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-[0.06]">
      {/* Underlying CSS Blueprint grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:3.5rem_3.5rem]" />
      
      {/* Animated network connector overlay */}
      <svg className="absolute inset-0 w-full h-full">
        <motion.circle 
          cx="30%" cy="40%" r="3" fill="#2582ff"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.circle 
          cx="70%" cy="55%" r="3.5" fill="#ff8e1a"
          animate={{ opacity: [0.2, 0.9, 0.2] }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        />
        <motion.line 
          x1="30%" y1="40%" x2="70%" y2="55%" stroke="#2582ff" strokeWidth="0.75" strokeDasharray="5,5"
          animate={{ strokeDashoffset: [0, -30] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
      </svg>
    </div>
  );
}

// AnimatedBridge - represents the central EFS design motif (data packets, light nodes, cables, cryptopulse)
export function AnimatedBridge() {
  return (
    <div className="relative w-full aspect-[21/9] max-h-[420px] bg-slate-950 border border-slate-900 rounded-3xl overflow-hidden flex flex-col justify-between p-6 sm:p-8 text-slate-400 font-mono text-[10px] sm:text-xs">
      {/* Background stars */}
      <FloatingParticles count={25} />
      
      {/* Subtle blueprint grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:2rem_2rem]" />
      
      {/* Header bar of visual */}
      <div className="flex items-center justify-between border-b border-white/5 pb-3 sm:pb-4 z-10">
        <div className="flex items-center space-x-2">
          <div className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
          <span className="text-white font-bold tracking-wider">CITTA_EFS_COMPLIANCE_BRIDGE</span>
        </div>
        <div className="flex items-center space-x-3 text-[9px] text-slate-500">
          <span>SECURE PROTOCOL v2.1</span>
          <span className="hidden sm:inline">STATE: CLEAR</span>
        </div>
      </div>

      {/* Main vector representation of the bridge cables and moving packets */}
      <div className="relative flex-1 flex items-center justify-center my-6 z-10">
        <svg className="w-full h-full max-h-[220px]" viewBox="0 0 800 200" fill="none">
          {/* Bridge Cables */}
          <path d="M50,150 Q400,20 750,150" stroke="rgba(37,130,255,0.25)" strokeWidth="2.5" />
          <path d="M50,165 Q400,60 750,165" stroke="rgba(37,130,255,0.15)" strokeWidth="1.5" />
          
          {/* Deck */}
          <line x1="40" y1="170" x2="760" y2="170" stroke="rgba(255,255,255,0.15)" strokeWidth="4" />
          
          {/* Vertical piers representing structural stability */}
          <line x1="200" y1="100" x2="200" y2="170" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" />
          <line x1="400" y1="52" x2="400" y2="170" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
          <line x1="600" y1="100" x2="600" y2="170" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" />

          {/* Glowing node clusters (End-Points) */}
          <circle cx="50" cy="150" r="6" fill="#2582ff" className="animate-pulse" />
          <circle cx="750" cy="150" r="6" fill="#ff8e1a" className="animate-pulse" />

          {/* Cryptographic pulsing waves */}
          <motion.circle 
            cx="400" cy="52" r="12" stroke="#2582ff" strokeWidth="1"
            animate={{ scale: [1, 2.5], opacity: [0.8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }}
          />
          <circle cx="400" cy="52" r="4" fill="#2582ff" />

          {/* Packet 1: ERP to bridge core */}
          <motion.circle 
            r="4.5" fill="#2582ff"
            animate={{
              x: [50, 400],
              y: [150, 52]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Packet 2: Core to Tax gateway */}
          <motion.circle 
            r="4" fill="#ff8e1a"
            animate={{
              x: [400, 750],
              y: [52, 150]
            }}
            transition={{
              duration: 4,
              delay: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Vertical compliance streams / lasers */}
          <motion.line 
            x1="400" y1="52" x2="400" y2="170" stroke="#ff8e1a" strokeWidth="1.5"
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </svg>

        {/* Labels overlay */}
        <div className="absolute left-4 top-2/3 bg-slate-900 border border-white/5 p-2 rounded text-[8px] sm:text-[9px]">
          <span className="block text-slate-400 uppercase tracking-widest text-[7px] mb-0.5">SOURCE</span>
          <span className="text-white block font-semibold">ERP NETWORKS (SAP/Oracle)</span>
        </div>
        
        <div className="absolute right-4 top-2/3 bg-slate-900 border border-white/5 p-2 rounded text-[8px] sm:text-[9px] text-right">
          <span className="block text-slate-400 uppercase tracking-widest text-[7px] mb-0.5">DESTINATION</span>
          <span className="text-[#ff8e1a] block font-semibold">TAX AUTHORITIES (NRS)</span>
        </div>
      </div>

      {/* Footer statistics readout */}
      <div className="flex flex-col sm:flex-row items-center justify-between border-t border-white/5 pt-3 text-[8px] sm:text-[9px] text-slate-500 gap-2">
        <div className="flex items-center space-x-3">
          <span>ENCRYPTION: AES-256-GCM</span>
          <span>COMPLIANCE RATING: 100%</span>
        </div>
        <span>SYSTEM PACKETS PROCESSED: SECURE & STAMPED</span>
      </div>
    </div>
  );
}

// SVG Section Separator Dividers
export function SVGDivider({ type = 'wave', colorTheme = 'blue' }: { type?: 'wave' | 'slant' | 'curve', colorTheme?: 'blue' | 'orange' }) {
  const isBlue = colorTheme === 'blue';
  const strokeColor = isBlue ? '#2582ff' : '#ff8e1a';

  if (type === 'slant') {
    return (
      <div className="w-full overflow-hidden leading-none z-10 pointer-events-none relative -mt-1">
        <svg className="relative block w-full h-[30px] sm:h-[50px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M1200 120L0 16V0h1200v120z" fill="#f8fafc" />
        </svg>
      </div>
    );
  }

  return (
    <div className="w-full overflow-hidden leading-none z-10 pointer-events-none relative -mt-1">
      <svg className="relative block w-full h-[30px] sm:h-[40px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V0H0v115.79c36-21.31 77.41-42.66 121.39-59.35z" fill="#f8fafc" />
      </svg>
    </div>
  );
}

// Interactive Product Ecosystem Card
export function ProductCard({ 
  name, tagline, description, businessValue, badge, capability, icon: Icon, onClick, isFeatured = false, isBlue = true, href
}: {
  name: string;
  tagline: string;
  description: string;
  businessValue?: string;
  badge: string;
  capability: string;
  icon: any;
  onClick?: () => void;
  isFeatured?: boolean;
  isBlue?: boolean;
  href?: string;
}) {
  const highlightTextColor = isBlue ? 'text-emerald-600' : 'text-teal-600';
  const highlightBg = isBlue ? 'bg-emerald-50 border-emerald-200' : 'bg-teal-50 border-teal-200';
  const borderHoverClass = isBlue ? 'hover:border-emerald-500/30 hover:shadow-emerald-500/5' : 'hover:border-teal-500/30 hover:shadow-teal-500/5';
  
  const Component = href ? motion.a : motion.div;
  const extraProps = href ? { href, target: "_blank", rel: "noopener noreferrer" } : { onClick };

  return (
    <Component
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      {...extraProps}
      className={`p-6 sm:p-8 rounded-3xl border transition-all cursor-pointer flex flex-col justify-between text-left h-full ${
        isFeatured 
          ? `bg-slate-900 text-white border-slate-800 ${isBlue ? 'ring-1 ring-emerald-500/20' : 'ring-1 ring-teal-500/20'} md:col-span-2 shadow-xl` 
          : 'bg-white text-slate-800 border-slate-200 hover:shadow-xl ' + borderHoverClass
      }`}
    >
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className={`text-[10px] font-mono uppercase tracking-widest font-bold px-3 py-1 rounded-full border ${
            isFeatured 
              ? 'text-white bg-white/10 border-white/10' 
              : isBlue 
                ? 'text-emerald-800 bg-emerald-50 border-emerald-100' 
                : 'text-teal-800 bg-teal-50 border-teal-100'
          }`}>
            {badge}
          </span>
          <ArrowUpRight className={`w-5 h-5 ${isFeatured ? 'text-slate-400' : 'text-slate-400 hover:text-slate-600'}`} />
        </div>

        <div className="flex items-center space-x-3.5">
          <div className={`p-3 rounded-2xl ${
            isFeatured 
              ? 'bg-white/10 text-[#2582ff]' 
              : isBlue 
                ? 'bg-emerald-50 text-emerald-600' 
                : 'bg-teal-50 text-teal-600'
          }`}>
            <Icon className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-display font-bold text-lg sm:text-xl">
              {name}
            </h3>
            <span className={`block text-[10px] font-mono tracking-wider uppercase opacity-80 ${isFeatured ? 'text-slate-400' : 'text-slate-500'}`}>
              {capability}
            </span>
          </div>
        </div>

        <p className={`text-xs sm:text-sm leading-relaxed ${isFeatured ? 'text-slate-300' : 'text-slate-600'}`}>
          {description}
        </p>

        {businessValue && (
          <div className="pt-3 border-t border-slate-100/50">
            <span className="block text-[8px] font-mono uppercase tracking-wider text-slate-400 mb-1">Business Value</span>
            <p className={`text-xs leading-relaxed font-semibold ${isFeatured ? 'text-emerald-300' : 'text-emerald-700'}`}>
              {businessValue}
            </p>
          </div>
        )}
      </div>

      <div className="pt-6">
        <span className={`text-xs font-semibold inline-flex items-center space-x-1.5 hover:underline ${
          isFeatured ? 'text-white' : highlightTextColor
        }`}>
          <span>{href ? `Visit ${name} Website` : `Learn more about ${name}`}</span>
          <span className="font-mono">{href ? '↗' : '→'}</span>
        </span>
      </div>
    </Component>
  );
}

// Enterprise dynamic metrics indicator
export function EnterpriseStat({ label, value, suffix = "", prefix = "" }: { label: string; value: number; suffix?: string; prefix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const count = useCountUp(isInView ? value : 0, 1800);

  return (
    <div ref={ref} className="bg-slate-50 border border-slate-200 rounded-2xl p-5 text-center space-y-1">
      <div className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 tracking-tight">
        {prefix}{count}{suffix}
      </div>
      <div className="text-[10px] sm:text-xs text-slate-500 uppercase font-mono tracking-wider">
        {label}
      </div>
    </div>
  );
}
