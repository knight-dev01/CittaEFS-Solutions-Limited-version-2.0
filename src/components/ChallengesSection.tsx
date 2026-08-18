import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Building2, Shuffle, ShieldAlert, Cpu, FileClock, CheckCircle2, ArrowRight,
  Database, ShieldCheck, Zap, Layers, Server, RefreshCcw, Activity, Check, Sparkles
} from 'lucide-react';

/**
 * Interactive, Responsive 3D-Style SVG Architecture Animation
 * Scales smoothly across all viewports with zero overflow and pure vector sharpness.
 */
function Interactive3DSvgMiddlewareHighway() {
  const [selectedSource, setSelectedSource] = useState<'all' | 'sap' | 'oracle' | 'dynamics'>('all');
  const [speedMultiplier, setSpeedMultiplier] = useState<number>(1);
  const [activePacketsCount, setActivePacketsCount] = useState<number>(24);

  // Deliberate, executive-grade animation duration multiplier (calm, slower flow)
  const baseDurationIn = 6.2 / speedMultiplier;
  const baseDurationOut = 5.4 / speedMultiplier;

  const sources = [
    { id: 'sap', name: 'SAP S/4HANA', type: 'Core ERP', color: '#2582ff', y: 100 },
    { id: 'oracle', name: 'Oracle Cloud', type: 'Financials', color: '#ff8e1a', y: 240 },
    { id: 'dynamics', name: 'MS Dynamics / Odoo', type: 'Operations', color: '#a855f7', y: 380 },
  ];

  const targets = [
    { id: 'ntaa', name: 'National Tax Gateway', rule: 'NTAA Sec 23', color: '#10b981', y: 100 },
    { id: 'vault', name: 'Fiscal Audit Vault', rule: 'SHA-256 Sealed', color: '#06b6d4', y: 240 },
    { id: 'bi', name: 'Enterprise BI Ledger', rule: 'Real-Time Sync', color: '#818cf8', y: 380 },
  ];

  return (
    <div className="w-full max-w-full flex flex-col items-center select-none">
      
      {/* Interactive Top Control Bar */}
      <div className="w-full flex flex-wrap items-center justify-between gap-2.5 px-1 sm:px-2 mb-3 sm:mb-4">
        
        {/* Source System Filter Tabs */}
        <div className="flex items-center space-x-1 sm:space-x-1.5 bg-slate-900/90 p-1 rounded-xl border border-slate-800 text-[10px] sm:text-xs font-mono">
          <span className="text-slate-400 px-1.5 hidden sm:inline">Source:</span>
          {(['all', 'sap', 'oracle', 'dynamics'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedSource(tab)}
              className={`px-2 sm:px-2.5 py-1 rounded-lg font-bold transition-all ${
                selectedSource === tab
                  ? 'bg-[#2582ff] text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {tab === 'all' ? 'All Channels' : tab === 'sap' ? 'SAP' : tab === 'oracle' ? 'Oracle' : 'Dynamics'}
            </button>
          ))}
        </div>

        {/* Speed & Live Status Badge */}
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setSpeedMultiplier(prev => prev === 1 ? 2 : 1)}
            className="px-2.5 py-1 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white text-[10px] sm:text-xs font-mono font-bold flex items-center space-x-1 transition-all"
          >
            <Activity className="w-3 h-3 text-[#ff8e1a]" />
            <span>Speed: {speedMultiplier}x</span>
          </button>

          <div className="hidden xs:flex items-center space-x-1.5 px-2.5 py-1 rounded-xl bg-emerald-950/60 border border-emerald-800/60 text-emerald-400 font-mono text-[10px] sm:text-xs font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Real-Time Flow</span>
          </div>
        </div>

      </div>

      {/* SVG Canvas Container with Viewport Scaling */}
      <div className="w-full relative rounded-2xl bg-gradient-to-b from-slate-900/95 to-slate-950/98 border border-slate-800/90 shadow-2xl p-2 sm:p-4 overflow-hidden">
        
        {/* Subtle Ambient Radial Glows */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-64 h-64 bg-[#2582ff]/10 blur-[80px] rounded-full pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-64 h-64 bg-emerald-500/10 blur-[80px] rounded-full pointer-events-none" />

        <svg
          viewBox="0 0 880 480"
          className="w-full h-auto max-h-[460px] overflow-visible"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            {/* Glow Filters */}
            <filter id="glow-blue" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <filter id="glow-emerald" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <filter id="glow-orange" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <filter id="glow-purple" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>

            {/* Linear Gradients for 3D Isometric Node Plates */}
            <linearGradient id="grad-sap" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e3a8a" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#0f172a" stopOpacity="0.95" />
            </linearGradient>

            <linearGradient id="grad-oracle" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7c2d12" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#0f172a" stopOpacity="0.95" />
            </linearGradient>

            <linearGradient id="grad-dynamics" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#581c87" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#0f172a" stopOpacity="0.95" />
            </linearGradient>

            <linearGradient id="grad-csl-core" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0284c7" />
              <stop offset="50%" stopColor="#2582ff" />
              <stop offset="100%" stopColor="#1d4ed8" />
            </linearGradient>

            <linearGradient id="grad-target-ntaa" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#064e3b" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#0f172a" stopOpacity="0.95" />
            </linearGradient>

            <linearGradient id="grad-target-vault" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#155e75" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#0f172a" stopOpacity="0.95" />
            </linearGradient>

            <linearGradient id="grad-target-bi" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#312e81" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#0f172a" stopOpacity="0.95" />
            </linearGradient>
          </defs>

          {/* 3D Grid / Isometric Floor Perspective Lines */}
          <g opacity="0.12" stroke="#64748b" strokeWidth="1">
            <line x1="60" y1="440" x2="820" y2="440" />
            <line x1="120" y1="410" x2="760" y2="410" />
            <line x1="180" y1="380" x2="700" y2="380" />
            <line x1="60" y1="440" x2="220" y2="350" />
            <line x1="820" y1="440" x2="660" y2="350" />
            <line x1="440" y1="440" x2="440" y2="370" />
          </g>

          {/* ========================================================
              CONNECTING BEZIER HIGHWAY TRACKS (SOURCE -> CORE -> TARGET)
             ======================================================== */}
          {/* Inbound Track: SAP -> Core */}
          <path
            id="path-sap-core"
            d="M 210 100 C 330 100, 330 225, 380 232"
            fill="none"
            stroke="#2582ff"
            strokeWidth={selectedSource === 'all' || selectedSource === 'sap' ? '2.5' : '1'}
            strokeOpacity={selectedSource === 'all' || selectedSource === 'sap' ? '0.6' : '0.15'}
            strokeDasharray="4 4"
          />

          {/* Inbound Track: Oracle -> Core */}
          <path
            id="path-oracle-core"
            d="M 210 240 C 310 240, 330 240, 380 240"
            fill="none"
            stroke="#ff8e1a"
            strokeWidth={selectedSource === 'all' || selectedSource === 'oracle' ? '2.5' : '1'}
            strokeOpacity={selectedSource === 'all' || selectedSource === 'oracle' ? '0.6' : '0.15'}
            strokeDasharray="4 4"
          />

          {/* Inbound Track: Dynamics -> Core */}
          <path
            id="path-dynamics-core"
            d="M 210 380 C 330 380, 330 255, 380 248"
            fill="none"
            stroke="#a855f7"
            strokeWidth={selectedSource === 'all' || selectedSource === 'dynamics' ? '2.5' : '1'}
            strokeOpacity={selectedSource === 'all' || selectedSource === 'dynamics' ? '0.6' : '0.15'}
            strokeDasharray="4 4"
          />

          {/* Outbound Track: Core -> NTAA */}
          <path
            id="path-core-ntaa"
            d="M 500 232 C 550 225, 550 100, 670 100"
            fill="none"
            stroke="#10b981"
            strokeWidth="2.5"
            strokeOpacity="0.6"
            strokeDasharray="4 4"
          />

          {/* Outbound Track: Core -> Vault */}
          <path
            id="path-core-vault"
            d="M 500 240 C 550 240, 570 240, 670 240"
            fill="none"
            stroke="#06b6d4"
            strokeWidth="2.5"
            strokeOpacity="0.6"
            strokeDasharray="4 4"
          />

          {/* Outbound Track: Core -> BI */}
          <path
            id="path-core-bi"
            d="M 500 248 C 550 255, 550 380, 670 380"
            fill="none"
            stroke="#818cf8"
            strokeWidth="2.5"
            strokeOpacity="0.6"
            strokeDasharray="4 4"
          />

          {/* ========================================================
              ANIMATED PACKETS (FRAMER MOTION TRAVELING PARTICLES)
             ======================================================== */}
          {/* SAP Data Packets */}
          {(selectedSource === 'all' || selectedSource === 'sap') && (
            <>
              {[0, 2.0, 4.0].map((delayOffset, idx) => (
                <motion.g
                  key={`sap-pkt-${idx}`}
                  animate={{
                    offsetDistance: ['0%', '100%'],
                  }}
                  transition={{
                    duration: baseDurationIn,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: delayOffset / speedMultiplier,
                  }}
                  style={{
                    offsetPath: 'path("M 210 100 C 330 100, 330 225, 380 232")',
                  }}
                >
                  <circle r="5.5" fill="#60a5fa" filter="url(#glow-blue)" />
                  <circle r="2.5" fill="#ffffff" />
                </motion.g>
              ))}
            </>
          )}

          {/* Oracle Data Packets */}
          {(selectedSource === 'all' || selectedSource === 'oracle') && (
            <>
              {[0.7, 2.7, 4.7].map((delayOffset, idx) => (
                <motion.g
                  key={`oracle-pkt-${idx}`}
                  animate={{
                    offsetDistance: ['0%', '100%'],
                  }}
                  transition={{
                    duration: baseDurationIn * 0.95,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: delayOffset / speedMultiplier,
                  }}
                  style={{
                    offsetPath: 'path("M 210 240 C 310 240, 330 240, 380 240")',
                  }}
                >
                  <circle r="5.5" fill="#fb923c" filter="url(#glow-orange)" />
                  <circle r="2.5" fill="#ffffff" />
                </motion.g>
              ))}
            </>
          )}

          {/* Dynamics Data Packets */}
          {(selectedSource === 'all' || selectedSource === 'dynamics') && (
            <>
              {[1.4, 3.4, 5.4].map((delayOffset, idx) => (
                <motion.g
                  key={`dyn-pkt-${idx}`}
                  animate={{
                    offsetDistance: ['0%', '100%'],
                  }}
                  transition={{
                    duration: baseDurationIn,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: delayOffset / speedMultiplier,
                  }}
                  style={{
                    offsetPath: 'path("M 210 380 C 330 380, 330 255, 380 248")',
                  }}
                >
                  <circle r="5.5" fill="#c084fc" filter="url(#glow-purple)" />
                  <circle r="2.5" fill="#ffffff" />
                </motion.g>
              ))}
            </>
          )}

          {/* Outbound Verified Packets: Core -> NTAA Gateway (Emerald) */}
          {[0.5, 2.3, 4.1].map((delayOffset, idx) => (
            <motion.g
              key={`ntaa-pkt-${idx}`}
              animate={{
                offsetDistance: ['0%', '100%'],
              }}
              transition={{
                duration: baseDurationOut,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: delayOffset / speedMultiplier,
              }}
              style={{
                offsetPath: 'path("M 500 232 C 550 225, 550 100, 670 100")',
              }}
            >
              <circle r="6" fill="#34d399" filter="url(#glow-emerald)" />
              <circle r="2.5" fill="#ffffff" />
            </motion.g>
          ))}

          {/* Outbound Verified Packets: Core -> Vault (Cyan) */}
          {[1.1, 2.9, 4.7].map((delayOffset, idx) => (
            <motion.g
              key={`vault-pkt-${idx}`}
              animate={{
                offsetDistance: ['0%', '100%'],
              }}
              transition={{
                duration: baseDurationOut * 0.95,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: delayOffset / speedMultiplier,
              }}
              style={{
                offsetPath: 'path("M 500 240 C 550 240, 570 240, 670 240")',
              }}
            >
              <circle r="5.5" fill="#22d3ee" filter="url(#glow-blue)" />
              <circle r="2.5" fill="#ffffff" />
            </motion.g>
          ))}

          {/* Outbound Verified Packets: Core -> BI Ledger (Indigo) */}
          {[1.7, 3.5, 5.3].map((delayOffset, idx) => (
            <motion.g
              key={`bi-pkt-${idx}`}
              animate={{
                offsetDistance: ['0%', '100%'],
              }}
              transition={{
                duration: baseDurationOut,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: delayOffset / speedMultiplier,
              }}
              style={{
                offsetPath: 'path("M 500 248 C 550 255, 550 380, 670 380")',
              }}
            >
              <circle r="5.5" fill="#a5b4fc" filter="url(#glow-purple)" />
              <circle r="2.5" fill="#ffffff" />
            </motion.g>
          ))}

          {/* ========================================================
              LEFT COLUMN: 3 SOURCE SYSTEM 3D ISOMETRIC NODES
             ======================================================== */}
          {/* Header Label Left */}
          <text x="110" y="44" fill="#94a3b8" fontSize="11" fontFamily="monospace" fontWeight="bold" letterSpacing="1">
            SOURCE SYSTEMS (ERPs)
          </text>

          {/* Node 1: SAP S/4HANA */}
          <g
            onClick={() => setSelectedSource('sap')}
            className="cursor-pointer transition-transform hover:scale-[1.02]"
            transform="translate(10, 65)"
          >
            {/* 3D Isometric Plate Shadow & Base */}
            <rect x="10" y="6" width="190" height="60" rx="14" fill="#091326" />
            <rect
              x="10"
              y="0"
              width="190"
              height="60"
              rx="14"
              fill="url(#grad-sap)"
              stroke="#2582ff"
              strokeWidth={selectedSource === 'sap' ? '2.5' : '1.5'}
              strokeOpacity={selectedSource === 'sap' || selectedSource === 'all' ? '0.9' : '0.4'}
            />
            {/* Indicator Light */}
            <circle cx="32" cy="30" r="10" fill="#1e3a8a" stroke="#3b82f6" strokeWidth="1.5" />
            <circle cx="32" cy="30" r="4" fill="#60a5fa" />
            <text x="50" y="27" fill="#ffffff" fontSize="13" fontWeight="bold" fontFamily="sans-serif">
              SAP S/4HANA
            </text>
            <text x="50" y="44" fill="#93c5fd" fontSize="10" fontFamily="monospace">
              Financial Core • Ingestion
            </text>
            <circle cx="185" cy="30" r="4" fill="#3b82f6" />
          </g>

          {/* Node 2: Oracle Cloud */}
          <g
            onClick={() => setSelectedSource('oracle')}
            className="cursor-pointer transition-transform hover:scale-[1.02]"
            transform="translate(10, 205)"
          >
            {/* 3D Isometric Plate Base */}
            <rect x="10" y="6" width="190" height="60" rx="14" fill="#1c0e08" />
            <rect
              x="10"
              y="0"
              width="190"
              height="60"
              rx="14"
              fill="url(#grad-oracle)"
              stroke="#ff8e1a"
              strokeWidth={selectedSource === 'oracle' ? '2.5' : '1.5'}
              strokeOpacity={selectedSource === 'oracle' || selectedSource === 'all' ? '0.9' : '0.4'}
            />
            <circle cx="32" cy="30" r="10" fill="#7c2d12" stroke="#fb923c" strokeWidth="1.5" />
            <circle cx="32" cy="30" r="4" fill="#fdba74" />
            <text x="50" y="27" fill="#ffffff" fontSize="13" fontWeight="bold" fontFamily="sans-serif">
              Oracle Cloud
            </text>
            <text x="50" y="44" fill="#fdba74" fontSize="10" fontFamily="monospace">
              GL Ledgers • Ingestion
            </text>
            <circle cx="185" cy="30" r="4" fill="#fb923c" />
          </g>

          {/* Node 3: MS Dynamics / Odoo */}
          <g
            onClick={() => setSelectedSource('dynamics')}
            className="cursor-pointer transition-transform hover:scale-[1.02]"
            transform="translate(10, 345)"
          >
            {/* 3D Isometric Plate Base */}
            <rect x="10" y="6" width="190" height="60" rx="14" fill="#160826" />
            <rect
              x="10"
              y="0"
              width="190"
              height="60"
              rx="14"
              fill="url(#grad-dynamics)"
              stroke="#a855f7"
              strokeWidth={selectedSource === 'dynamics' ? '2.5' : '1.5'}
              strokeOpacity={selectedSource === 'dynamics' || selectedSource === 'all' ? '0.9' : '0.4'}
            />
            <circle cx="32" cy="30" r="10" fill="#581c87" stroke="#c084fc" strokeWidth="1.5" />
            <circle cx="32" cy="30" r="4" fill="#e9d5ff" />
            <text x="50" y="27" fill="#ffffff" fontSize="13" fontWeight="bold" fontFamily="sans-serif">
              MS Dynamics / Odoo
            </text>
            <text x="50" y="44" fill="#d8b4fe" fontSize="10" fontFamily="monospace">
              Operations • Ingestion
            </text>
            <circle cx="185" cy="30" r="4" fill="#c084fc" />
          </g>


          {/* ========================================================
              CENTER SECTION: CSL UNIFIED MIDDLEWARE 3D CORE ENGINE
             ======================================================== */}
          {/* Header Label Center */}
          <text x="440" y="44" textAnchor="middle" fill="#38bdf8" fontSize="11" fontFamily="monospace" fontWeight="bold" letterSpacing="1">
            CSL MIDDLEWARE CORE
          </text>

          {/* Core Outer Rotating 3D Rings */}
          <g transform="translate(440, 240)">
            {/* Pulsing Back Glow */}
            <circle r="72" fill="#2582ff" fillOpacity="0.08" />

            {/* Rotating Outer Dashed Circuit Ring - Calm, deliberate rotation */}
            <motion.circle
              r="68"
              fill="none"
              stroke="#0284c7"
              strokeWidth="2"
              strokeDasharray="8 6"
              animate={{ rotate: 360 }}
              transition={{ duration: 36, repeat: Infinity, ease: 'linear' }}
            />

            {/* Counter-rotating Inner Hex Ring - Slower rotation */}
            <motion.polygon
              points="0,-52 45,-26 45,26 0,52 -45,26 -45,-26"
              fill="none"
              stroke="#38bdf8"
              strokeWidth="1.5"
              strokeOpacity="0.5"
              animate={{ rotate: -360 }}
              transition={{ duration: 44, repeat: Infinity, ease: 'linear' }}
            />

            {/* 3D Center Core Capsule */}
            <rect
              x="-46"
              y="-46"
              width="92"
              height="92"
              rx="22"
              fill="url(#grad-csl-core)"
              filter="url(#glow-blue)"
              stroke="#93c5fd"
              strokeWidth="2"
            />

            {/* Zap Icon Symbol */}
            <path
              d="M 2 -20 L -14 2 L -2 2 L -6 20 L 14 -2 L 2 -2 Z"
              fill="#ffffff"
              filter="url(#glow-blue)"
            />

            {/* Core Status Overlay Text */}
            <text y="32" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold" fontFamily="monospace" letterSpacing="0.5">
              TLS 1.3 | &lt;150ms
            </text>
          </g>

          {/* Sub-label under Core */}
          <text x="440" y="340" textAnchor="middle" fill="#94a3b8" fontSize="10" fontFamily="monospace" fontWeight="bold">
            Real-Time Pre-Clearance Matrix
          </text>
          <text x="440" y="356" textAnchor="middle" fill="#38bdf8" fontSize="9" fontFamily="monospace">
            Zero Ledger Disruption Guarantee
          </text>


          {/* ========================================================
              RIGHT COLUMN: 3 VERIFIED TARGET 3D ISOMETRIC NODES
             ======================================================== */}
          {/* Header Label Right */}
          <text x="770" y="44" textAnchor="end" fill="#34d399" fontSize="11" fontFamily="monospace" fontWeight="bold" letterSpacing="1">
            VERIFIED TARGETS
          </text>

          {/* Target 1: National Tax Authority (NTAA Sec 23) */}
          <g transform="translate(670, 65)">
            <rect x="10" y="6" width="190" height="60" rx="14" fill="#04231a" />
            <rect
              x="10"
              y="0"
              width="190"
              height="60"
              rx="14"
              fill="url(#grad-target-ntaa)"
              stroke="#10b981"
              strokeWidth="2"
              strokeOpacity="0.9"
            />
            <circle cx="32" cy="30" r="10" fill="#064e3b" stroke="#34d399" strokeWidth="1.5" />
            <circle cx="32" cy="30" r="4" fill="#6ee7b7" />
            <text x="50" y="27" fill="#ffffff" fontSize="13" fontWeight="bold" fontFamily="sans-serif">
              National Tax Gateway
            </text>
            <text x="50" y="44" fill="#6ee7b7" fontSize="10" fontFamily="monospace">
              NTAA Sec 23 • Validated
            </text>
            <circle cx="185" cy="30" r="4" fill="#34d399" />
          </g>

          {/* Target 2: Certified Fiscal Audit Vault */}
          <g transform="translate(670, 205)">
            <rect x="10" y="6" width="190" height="60" rx="14" fill="#082530" />
            <rect
              x="10"
              y="0"
              width="190"
              height="60"
              rx="14"
              fill="url(#grad-target-vault)"
              stroke="#06b6d4"
              strokeWidth="2"
              strokeOpacity="0.9"
            />
            <circle cx="32" cy="30" r="10" fill="#155e75" stroke="#22d3ee" strokeWidth="1.5" />
            <circle cx="32" cy="30" r="4" fill="#67e8f9" />
            <text x="50" y="27" fill="#ffffff" fontSize="13" fontWeight="bold" fontFamily="sans-serif">
              Fiscal Audit Vault
            </text>
            <text x="50" y="44" fill="#67e8f9" fontSize="10" fontFamily="monospace">
              SHA-256 Sealed Record
            </text>
            <circle cx="185" cy="30" r="4" fill="#22d3ee" />
          </g>

          {/* Target 3: Enterprise BI Ledger */}
          <g transform="translate(670, 345)">
            <rect x="10" y="6" width="190" height="60" rx="14" fill="#12102b" />
            <rect
              x="10"
              y="0"
              width="190"
              height="60"
              rx="14"
              fill="url(#grad-target-bi)"
              stroke="#818cf8"
              strokeWidth="2"
              strokeOpacity="0.9"
            />
            <circle cx="32" cy="30" r="10" fill="#312e81" stroke="#a5b4fc" strokeWidth="1.5" />
            <circle cx="32" cy="30" r="4" fill="#c7d2fe" />
            <text x="50" y="27" fill="#ffffff" fontSize="13" fontWeight="bold" fontFamily="sans-serif">
              Enterprise BI Ledger
            </text>
            <text x="50" y="44" fill="#c7d2fe" fontSize="10" fontFamily="monospace">
              Executive Analytics Stream
            </text>
            <circle cx="185" cy="30" r="4" fill="#818cf8" />
          </g>

        </svg>
      </div>

      {/* Bottom Live Metrics Strip */}
      <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mt-3 sm:mt-4 text-left font-mono">
        <div className="p-2 sm:p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center space-x-2">
          <div className="w-2 h-2 rounded-full bg-[#2582ff]" />
          <div>
            <span className="text-[8px] text-slate-400 block">ENCRYPTION</span>
            <span className="text-[10px] sm:text-xs font-bold text-slate-200">TLS 1.3 &amp; AES-256</span>
          </div>
        </div>

        <div className="p-2 sm:p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center space-x-2">
          <div className="w-2 h-2 rounded-full bg-emerald-400" />
          <div>
            <span className="text-[8px] text-slate-400 block">PRE-CLEARANCE</span>
            <span className="text-[10px] sm:text-xs font-bold text-emerald-400">100% NTAA Ready</span>
          </div>
        </div>

        <div className="p-2 sm:p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center space-x-2">
          <div className="w-2 h-2 rounded-full bg-[#ff8e1a]" />
          <div>
            <span className="text-[8px] text-slate-400 block">PROCESSING TIME</span>
            <span className="text-[10px] sm:text-xs font-bold text-[#ff8e1a]">&lt; 150ms Average</span>
          </div>
        </div>

        <div className="p-2 sm:p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center space-x-2">
          <div className="w-2 h-2 rounded-full bg-purple-400" />
          <div>
            <span className="text-[8px] text-slate-400 block">ERP RETENTION</span>
            <span className="text-[10px] sm:text-xs font-bold text-purple-300">Zero Replacement</span>
          </div>
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
                className={`p-5 sm:p-6 bg-slate-50 border border-slate-200/90 hover:border-[#2582ff]/60 hover:bg-white rounded-2xl transition-all duration-300 delay-75 ease-out group text-left shadow-xs hover:shadow-md flex flex-col justify-between ${
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
                    <div className={`p-2.5 rounded-xl border shrink-0 group-hover:bg-[#2582ff] group-hover:text-white group-hover:border-[#2582ff] transition-all duration-300 delay-75 ease-out ${ch.accent}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="space-y-1 flex-1 min-w-0">
                      <h3 className="font-display font-bold text-base sm:text-lg text-slate-900 group-hover:text-[#2582ff] transition-colors duration-300 delay-75 ease-out break-words">
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
            <div className="lg:col-span-5 text-left space-y-4 sm:space-y-5 w-full">
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

            {/* Right side: Interactive, Responsive 3D-Style SVG Architecture Animation */}
            <div className="lg:col-span-7 w-full flex justify-center items-center overflow-hidden">
              <Interactive3DSvgMiddlewareHighway />
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
