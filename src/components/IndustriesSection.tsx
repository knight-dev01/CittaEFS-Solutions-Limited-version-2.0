import { useState } from 'react';
import { 
  Factory, ShoppingBag, Landmark, HeartPulse, ShieldCheck, 
  Truck, Building, Hotel, GraduationCap, Zap, ChevronRight 
} from 'lucide-react';

export default function IndustriesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const industries = [
    {
      title: "Manufacturing & Heavy Industry",
      sub: "SAP/Oracle & Rounding Shield",
      desc: "Automatically reconciles complex bills of materials, rounding line-items to regulatory decimals to guarantee seamless pre-clearance.",
      icon: Factory,
      metric: "99.98% Clear Rate",
      highlight: "SAP/Oracle Integrated",
      gridSpan: "md:col-span-2 lg:col-span-2",
      color: "from-emerald-500/5 to-emerald-600/5",
      accent: "text-slate-600 bg-slate-100/80 group-hover:text-emerald-700 group-hover:bg-emerald-50 border border-slate-200/50 group-hover:border-emerald-200"
    },
    {
      title: "Retail & High-Volume F&B",
      sub: "Micro-Checkout API & Queues",
      desc: "Sub-second validation API. Supports offline transactional queue storage so checkouts continue even during regulatory offline periods.",
      icon: ShoppingBag,
      metric: "<300ms Latency",
      highlight: "Offline Queues Ready",
      gridSpan: "md:col-span-2 lg:col-span-2",
      color: "from-emerald-500/5 to-emerald-600/5",
      accent: "text-slate-600 bg-slate-100/80 group-hover:text-emerald-700 group-hover:bg-emerald-50 border border-slate-200/50 group-hover:border-emerald-200"
    },
    {
      title: "Financial Services & Insurance",
      sub: "Core Banking Integration",
      desc: "Integrate with core transactional ledgers, mainframes, or cloud architectures with bank-grade TLS 1.3 encryption.",
      icon: Landmark,
      metric: "Bank-Grade Security",
      highlight: "Full TLS 1.3 Encryption",
      gridSpan: "col-span-1",
      color: "from-emerald-500/5 to-emerald-600/5",
      accent: "text-slate-600 bg-slate-100/80 group-hover:text-emerald-700 group-hover:bg-emerald-50 border border-slate-200/50 group-hover:border-emerald-200"
    },
    {
      title: "Healthcare & Pharmaceuticals",
      sub: "NDPA '23 Patient Privacy Shield",
      desc: "Safely handles medical and clinical financial billing data while keeping patient sensitive diagnostics anonymized under NDPA 2023 guidelines.",
      icon: HeartPulse,
      metric: "NDPA Compliant",
      highlight: "Data Confidentiality",
      gridSpan: "col-span-1",
      color: "from-emerald-500/5 to-emerald-600/5",
      accent: "text-slate-600 bg-slate-100/80 group-hover:text-emerald-700 group-hover:bg-emerald-50 border border-slate-200/50 group-hover:border-emerald-200"
    },
    {
      title: "Logistics & Supply Chain",
      sub: "Dynamic QR & Transport Code",
      desc: "Generates transport-ready compliance QR stamps instantly onto waybills to bypass delay-prone regulatory checkpoints.",
      icon: Truck,
      metric: "Instant Waybills",
      highlight: "Frictionless Cargo",
      gridSpan: "col-span-1",
      color: "from-emerald-500/5 to-emerald-600/5",
      accent: "text-slate-600 bg-slate-100/80 group-hover:text-emerald-700 group-hover:bg-emerald-50 border border-slate-200/50 group-hover:border-emerald-200"
    },
    {
      title: "Government & Utilities",
      sub: "High-Throughput Public Ledger",
      desc: "Supports municipal billing configurations, utility payment processing, and comprehensive state audit logs.",
      icon: ShieldCheck,
      metric: "Audit Ledger",
      highlight: "State-Wide Systems",
      gridSpan: "col-span-1",
      color: "from-emerald-500/5 to-emerald-600/5",
      accent: "text-slate-600 bg-slate-100/80 group-hover:text-emerald-700 group-hover:bg-emerald-50 border border-slate-200/50 group-hover:border-emerald-200"
    },
    {
      title: "Telecommunications & Media",
      sub: "Asynchronous Bulk Billing",
      desc: "Process millions of monthly cellular utility and subscription billing lines in micro-batches with minimal pipeline load.",
      icon: Zap,
      metric: "Million+ Scalability",
      highlight: "Bulk File Middleware",
      gridSpan: "col-span-1",
      color: "from-emerald-500/5 to-emerald-600/5",
      accent: "text-slate-600 bg-slate-100/80 group-hover:text-emerald-700 group-hover:bg-emerald-50 border border-slate-200/50 group-hover:border-emerald-200"
    },
    {
      title: "Construction & Infrastructure",
      sub: "Milestone Contract Validation",
      desc: "Handles multi-stage billing schedules and complex long-term contract invoicing with robust VAT tax calculations.",
      icon: Building,
      metric: "Milestone Ledger",
      highlight: "Contract Integration",
      gridSpan: "col-span-1",
      color: "from-emerald-500/5 to-emerald-600/5",
      accent: "text-slate-600 bg-slate-100/80 group-hover:text-emerald-700 group-hover:bg-emerald-50 border border-slate-200/50 group-hover:border-emerald-200"
    },
    {
      title: "Education & Research",
      sub: "Grant & Student Ledger Integration",
      desc: "Integrates with modern university ERPs for fast student fee validation, research grants, and state scholarship clearances.",
      icon: GraduationCap,
      metric: "Student Ledger Ready",
      highlight: "Academic Billing",
      gridSpan: "col-span-1",
      color: "from-emerald-500/5 to-emerald-600/5",
      accent: "text-slate-600 bg-slate-100/80 group-hover:text-emerald-700 group-hover:bg-emerald-50 border border-slate-200/50 group-hover:border-emerald-200"
    },
    {
      title: "Hospitality & Tourism",
      sub: "POS Restaurant System Sync",
      desc: "Connect POS checkouts directly, validating dynamic accommodation service tax rates automatically for instant billing clearance.",
      icon: Hotel,
      metric: "POS Synced",
      highlight: "Real-time Audits",
      gridSpan: "col-span-1",
      color: "from-emerald-500/5 to-emerald-600/5",
      accent: "text-slate-600 bg-slate-100/80 group-hover:text-emerald-700 group-hover:bg-emerald-50 border border-slate-200/50 group-hover:border-emerald-200"
    }
  ];

  return (
    <section className="pt-28 pb-12 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-36 bg-slate-50 text-slate-800 relative overflow-hidden">
      {/* Background Decorative Mesh Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(var(--color-emerald-500)_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.04] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12 sm:mb-20 gap-4 sm:gap-6">
          <span className="inline-block font-mono text-xs uppercase tracking-widest text-emerald-800 font-bold bg-emerald-100/60 px-3.5 py-1.5 rounded-full border border-emerald-200">
            06. Sector Blueprints
          </span>
          <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
            CSL Unified Industry Architectures
          </h2>
          <p className="text-slate-600 text-xs sm:text-base leading-relaxed">
            Different industries present distinct transactional profiles and operational loads. <strong>CittaERP Solutions Limited (CSL)</strong> acts as the central parent brand, deploying specialized software ecosystems like <strong>CittaEFS</strong>, <strong>CittaMatrix</strong>, <strong>CittaHospitalityX</strong>, <strong>CittaPlannerX</strong>, and <strong>CittaNexus</strong> to fit each sector's exact regulations.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {industries.map((ind, idx) => {
            const Icon = ind.icon;
            const isHovered = hoveredIndex === idx;
            
            return (
              <div
                key={idx}
                id={`ind-card-${idx}`}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`relative group bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-lg hover:border-emerald-300 hover:-translate-y-1 ${
                  ind.gridSpan
                }`}
              >
                {/* Subtle Illustration background element representing standard industry grid pattern */}
                <div className="absolute right-0 top-0 w-28 h-28 opacity-[0.03] group-hover:opacity-[0.07] transition-all duration-500 pointer-events-none">
                  {idx % 3 === 0 ? (
                    /* Tech Concentric Rings illustration */
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                      <circle cx="100" cy="0" r="30" stroke="currentColor" strokeWidth="2" fill="none" />
                      <circle cx="100" cy="0" r="50" stroke="currentColor" strokeWidth="2" fill="none" />
                      <circle cx="100" cy="0" r="70" stroke="currentColor" strokeWidth="2" fill="none" />
                      <circle cx="100" cy="0" r="90" stroke="currentColor" strokeWidth="2" fill="none" />
                    </svg>
                  ) : idx % 3 === 1 ? (
                    /* Dotted Matrix illustration */
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                      <defs>
                        <pattern id={`dotPattern-${idx}`} x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
                          <circle cx="3" cy="3" r="1.5" fill="currentColor" />
                        </pattern>
                      </defs>
                      <rect width="100" height="100" fill={`url(#dotPattern-${idx})`} />
                    </svg>
                  ) : (
                    /* Isometric Grid Lines illustration */
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                      <line x1="0" y1="20" x2="100" y2="20" stroke="currentColor" strokeWidth="1" />
                      <line x1="0" y1="40" x2="100" y2="40" stroke="currentColor" strokeWidth="1" />
                      <line x1="0" y1="60" x2="100" y2="60" stroke="currentColor" strokeWidth="1" />
                      <line x1="0" y1="80" x2="100" y2="80" stroke="currentColor" strokeWidth="1" />
                      <line x1="20" y1="0" x2="20" y2="100" stroke="currentColor" strokeWidth="1" />
                      <line x1="40" y1="0" x2="40" y2="100" stroke="currentColor" strokeWidth="1" />
                      <line x1="60" y1="0" x2="60" y2="100" stroke="currentColor" strokeWidth="1" />
                      <line x1="80" y1="0" x2="80" y2="100" stroke="currentColor" strokeWidth="1" />
                    </svg>
                  )}
                </div>

                {/* Subtle visual glow accent based on industry color */}
                <div className={`absolute -right-10 -top-10 w-24 h-24 bg-gradient-to-br ${ind.color} blur-2xl rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500`} />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-2xl transition-all duration-300 ${ind.accent}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-slate-400 bg-slate-50 border border-slate-100 px-2 py-1 rounded-lg">
                      {ind.metric}
                    </span>
                  </div>

                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block mb-1">
                    {ind.sub}
                  </span>
                  
                  <h3 className="font-display text-lg font-bold text-slate-900 mb-2 leading-snug group-hover:text-emerald-800 transition-colors">
                    {ind.title}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                    {ind.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-500 group-hover:text-emerald-700 transition-colors">
                  <span>{ind.highlight}</span>
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1 duration-200" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
