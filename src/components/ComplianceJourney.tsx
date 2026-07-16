import React from 'react';
import { motion } from 'motion/react';
import { Database, ShieldCheck, Cpu, Cloud, Sparkles, Check, ArrowRight } from 'lucide-react';

interface JourneyStep {
  num: string;
  title: string;
  stage: string;
  desc: string;
  icon: React.ComponentType<any>;
  badge: string;
  metric: string;
}

export default function ComplianceJourney() {
  const journeySteps: JourneyStep[] = [
    {
      num: "01",
      stage: "Source Generation",
      title: "The ERP Edge",
      desc: "Your internal database (SAP, Oracle, Dynamics, or Excel spreadsheets) compiles standard raw invoicing transactions. Data is still unstructured and vulnerable to compliance math errors.",
      icon: Database,
      badge: "Legacy Output",
      metric: "Raw JSON / Excel"
    },
    {
      num: "02",
      stage: "Pre-Clearance Shield",
      title: "CittaEFS Validation Buffer",
      desc: "Our intelligent middleware instantly intercepts raw data. The Validation Shield checks active customer TIN formats, runs mathematical VAT checks, and blocks rounding discrepancies before transmission.",
      icon: ShieldCheck,
      badge: "Real-time Buffer",
      metric: "Sub-5ms Sandbox Check"
    },
    {
      num: "03",
      stage: "Cryptographic Seal",
      title: "Accredited APP Stamping",
      desc: "A secure certificate envelope signs the verified payload. It generates a legally compliant, unique Invoice Reference Number (IRN) and embeds high-density regulatory verification QR codes.",
      icon: Cpu,
      badge: "Cryptographic Seal",
      metric: "SHA-256 Stamped Signature"
    },
    {
      num: "04",
      stage: "State Clearance",
      title: "NRS Portal Synchronization",
      desc: "The fully validated, stamped, and non-repudiated invoice handshakes with the National Revenue Service clearing nodes. Seamless compliance achieved with zero system downtime.",
      icon: Cloud,
      badge: "NRS Cleared",
      metric: "100% SLA Confirmed"
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.25
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: [0.16, 1, 0.3, 1] 
      }
    }
  };

  return (
    <section id="compliance-journey-section" className="py-12 sm:py-24 bg-gradient-to-b from-slate-900 via-navy-dark to-slate-950 text-white relative overflow-hidden">
      
      {/* Decorative cyber grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b12_1px,transparent_1px),linear-gradient(to_bottom,#1e293b12_1px,transparent_1px)] bg-[size:24px_24px] opacity-20" />
      
      {/* Ambient background glows representing the bridge arches */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-emerald-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 w-[400px] h-[400px] rounded-full bg-teal-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-20 space-y-3 sm:space-y-4">
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="font-mono text-xs uppercase tracking-widest text-emerald-400 font-bold bg-emerald-950/60 border border-emerald-500/20 px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>04. End-to-End Fiscal Lifecycle</span>
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight"
          >
            The CittaEFS Digital Compliance Bridge
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-slate-400 text-xs sm:text-base leading-relaxed"
          >
            Follow the journey of a transaction packet as CittaEFS transforms legacy ERP billings into clean, secure, and officially cleared national fiscal records.
          </motion.p>
        </div>

        {/* The Graphic SVG Bridge Metaphor Line */}
        <div className="relative w-full hidden lg:block h-28 mb-4">
          {/* Main Bridge Arch Curve */}
          <svg className="absolute inset-0 w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1000 100">
            {/* The main physical deck of the bridge */}
            <path 
              d="M 50 85 Q 500 15 950 85" 
              stroke="#1e293b" 
              strokeWidth="4" 
              strokeLinecap="round" 
            />
            
            {/* Glowing animated path representing moving electronic data */}
            <motion.path 
              d="M 50 85 Q 500 15 950 85" 
              stroke="url(#bridge-glow-gradient)" 
              strokeWidth="4" 
              strokeLinecap="round"
              strokeDasharray="15, 150"
              animate={{ strokeDashoffset: [-165, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
            />

            {/* Vertical suspension hangers representing compliance validation cables */}
            <line x1="175" y1="78" x2="175" y2="100" stroke="#1e293b" strokeWidth="1" strokeDasharray="2, 2" />
            <line x1="300" y1="65" x2="300" y2="100" stroke="#1e293b" strokeWidth="1" strokeDasharray="2, 2" />
            <line x1="425" y1="52" x2="425" y2="100" stroke="#1e293b" strokeWidth="1" strokeDasharray="2, 2" />
            <line x1="575" y1="52" x2="575" y2="100" stroke="#1e293b" strokeWidth="1" strokeDasharray="2, 2" />
            <line x1="700" y1="65" x2="700" y2="100" stroke="#1e293b" strokeWidth="1" strokeDasharray="2, 2" />
            <line x1="825" y1="78" x2="825" y2="100" stroke="#1e293b" strokeWidth="1" strokeDasharray="2, 2" />

            {/* Gradients definition */}
            <defs>
              <linearGradient id="bridge-glow-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="var(--color-emerald-500)" stopOpacity="0" />
                <stop offset="50%" stopColor="var(--color-teal-500)" stopOpacity="1" />
                <stop offset="100%" stopColor="var(--color-emerald-600)" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>

          {/* Dynamic Floating labels representing the payload traveling */}
          <motion.div 
            className="absolute left-1/4 top-4 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-[9px] px-2 py-0.5 rounded-full flex items-center space-x-1"
            animate={{ y: [-2, 2, -2] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          >
            <span className="h-1 w-1 rounded-full bg-emerald-400 animate-pulse" />
            <span>PRE-CHECK OK</span>
          </motion.div>

          <motion.div 
            className="absolute right-1/4 top-4 bg-teal-500/10 border border-teal-500/30 text-teal-400 font-mono text-[9px] px-2 py-0.5 rounded-full flex items-center space-x-1"
            animate={{ y: [2, -2, 2] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 1 }}
          >
            <span className="h-1 w-1 rounded-full bg-teal-400 animate-pulse" />
            <span>CRYPT-SIGNED</span>
          </motion.div>
        </div>

        {/* Scroll-Triggered Steps Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative"
        >
          {journeySteps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                className="bg-slate-900/60 border border-slate-800/80 rounded-3xl p-6 relative flex flex-col justify-between group hover:border-emerald-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-950/20"
              >
                {/* Glow behind step numbers */}
                <div className="absolute top-0 right-0 h-24 w-24 bg-gradient-to-br from-emerald-500/5 to-transparent rounded-tr-3xl rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />

                <div>
                  {/* Step Bubble Indicator */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-extrabold font-mono text-emerald-500/10 group-hover:text-emerald-500/20 transition-colors">
                      {step.num}
                    </span>
                    <div className="p-3 bg-slate-950/80 border border-slate-800 rounded-2xl text-emerald-400 group-hover:text-emerald-300 group-hover:border-emerald-500/40 transition-colors shadow-sm">
                      <Icon className="w-5.5 h-5.5" />
                    </div>
                  </div>

                  {/* Header info */}
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-widest block">
                      {step.stage}
                    </span>
                    <h3 className="font-display text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed pt-2">
                      {step.desc}
                    </p>
                  </div>
                </div>

                {/* Bottom Stats / Action representation */}
                <div className="mt-8 pt-4 border-t border-slate-800/80 flex flex-col gap-2">
                  <div className="flex items-center justify-between text-[10px] font-mono">
                    <span className="text-slate-500 uppercase">Key Metric</span>
                    <span className="text-emerald-400 font-bold">{step.metric}</span>
                  </div>
                  <div className="flex items-center justify-between text-[10px] font-mono">
                    <span className="text-slate-500 uppercase">Status</span>
                    <span className="text-slate-300 bg-slate-950 border border-slate-800/80 px-2 py-0.5 rounded text-[9px]">
                      {step.badge}
                    </span>
                  </div>
                </div>

                {/* Arrow connecting mobile/tablet steps layout */}
                {idx < 3 && (
                  <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 rotate-90 md:hidden z-20 bg-slate-950 p-1.5 rounded-full border border-slate-800 text-emerald-500 animate-pulse">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Footnote Endorsement with visual metric */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 bg-slate-950/80 border border-slate-800/80 rounded-2xl p-5 sm:p-6 text-center max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl"
        >
          <div className="flex items-center space-x-3 text-left">
            <div className="p-2.5 bg-emerald-500/10 rounded-xl text-emerald-400 border border-emerald-500/20">
              <Check className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white font-display">Bridge Security Protocols Activated</p>
              <p className="text-xs text-slate-400">All data pipelines are protected using TLS 1.3 encryption and fully compliant under FIRS regulatory directives.</p>
            </div>
          </div>
          <button 
            onClick={() => {
              const element = document.getElementById('contact-section');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-all cursor-pointer shadow-md shadow-emerald-500/10 hover:scale-102 shrink-0"
          >
            Connect My Systems
          </button>
        </motion.div>

      </div>
    </section>
  );
}
