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
      sub: "Streamlined Logistics & Tax Compliance",
      desc: "Unifies complex bill-of-materials and ledger reconciliations, instantly syncing heavy production runs with tax clearances to eliminate supply-chain transit hold-ups.",
      icon: Factory,
      metric: "Zero Logistics Delay",
      highlight: "Uninterrupted Operations",
      gridSpan: "md:col-span-2 lg:col-span-2",
      color: "from-blue-500/5 to-indigo-600/5",
      accent: "text-[#2582ff] bg-blue-50 border-blue-100/50 group-hover:bg-[#2582ff] group-hover:text-white group-hover:border-blue-300"
    },
    {
      title: "Retail & High-Volume F&B",
      sub: "Continuous Transactional Velocity",
      desc: "Guarantees retail checkouts run at full capacity under all network conditions, protecting sales and ensuring flawless operational continuity during high-traffic seasons.",
      icon: ShoppingBag,
      metric: "<240ms Verification",
      highlight: "Offline Transaction Protection",
      gridSpan: "md:col-span-2 lg:col-span-2",
      color: "from-orange-500/5 to-amber-600/5",
      accent: "text-[#ff8e1a] bg-orange-50 border-orange-100/50 group-hover:bg-[#ff8e1a] group-hover:text-white group-hover:border-orange-300"
    },
    {
      title: "Financial Services & Insurance",
      sub: "Trust & Ledger Security",
      desc: "Protects high-value transactional ledgers with institutional safety protocols, ensuring absolute record accuracy, audit-readiness, and flawless regulatory compliance.",
      icon: Landmark,
      metric: "Enterprise Trust",
      highlight: "Absolute Ledger Accuracy",
      gridSpan: "col-span-1",
      color: "from-blue-500/5 to-blue-600/5",
      accent: "text-[#2582ff] bg-blue-50 border-blue-100/50 group-hover:bg-[#2582ff] group-hover:text-white group-hover:border-blue-300"
    },
    {
      title: "Healthcare & Pharmaceuticals",
      sub: "Safe Patient Administration",
      desc: "Streamlines clinical fee billing and multi-site insurance allocations while keeping patient financial data completely confidential under privacy guidelines.",
      icon: HeartPulse,
      metric: "Regulated Secrecy",
      highlight: "Continuous Data Protection",
      gridSpan: "col-span-1",
      color: "from-[#2582ff]/5 to-indigo-500/5",
      accent: "text-[#2582ff] bg-blue-50 border-blue-100/50 group-hover:bg-[#2582ff] group-hover:text-white group-hover:border-blue-300"
    },
    {
      title: "Logistics & Supply Chain",
      sub: "Uninterrupted Cargo Execution",
      desc: "Embeds automatic compliance validation directly into transport manifests, ensuring freight flows freely past inspections to arrive on schedule.",
      icon: Truck,
      metric: "Frictionless Transit",
      highlight: "On-Time Supply Lines",
      gridSpan: "col-span-1",
      color: "from-[#ff8e1a]/5 to-orange-500/5",
      accent: "text-[#ff8e1a] bg-orange-50 border-orange-100/50 group-hover:bg-[#ff8e1a] group-hover:text-white group-hover:border-orange-300"
    },
    {
      title: "Government & Utilities",
      sub: "Unified Revenue Assurance",
      desc: "Improves local government collection rates and utility payment processing by consolidating complex public billing programs onto a secure ledger.",
      icon: ShieldCheck,
      metric: "Public Integrity",
      highlight: "High-Throughput Processing",
      gridSpan: "col-span-1",
      color: "from-blue-500/5 to-blue-600/5",
      accent: "text-[#2582ff] bg-blue-50 border-blue-100/50 group-hover:bg-[#2582ff] group-hover:text-white group-hover:border-blue-300"
    },
    {
      title: "Telecommunications & Media",
      sub: "Bulk Account Management",
      desc: "Processes millions of monthly customer utility and service billing files with minimal administrative overhead, driving cash-flow predictability.",
      icon: Zap,
      metric: "Million+ Scalability",
      highlight: "Bulk File Automation",
      gridSpan: "col-span-1",
      color: "from-orange-500/5 to-orange-600/5",
      accent: "text-[#ff8e1a] bg-orange-50 border-orange-100/50 group-hover:bg-[#ff8e1a] group-hover:text-white group-hover:border-orange-300"
    },
    {
      title: "Construction & Infrastructure",
      sub: "Milestone-Driven Cash Flow",
      desc: "Aligns multi-stage builder draws and progressive invoicing structures, ensuring correct tax compliance on long-term capital contracts.",
      icon: Building,
      metric: "Milestone Clearance",
      highlight: "Contract Integrity",
      gridSpan: "col-span-1",
      color: "from-[#2582ff]/5 to-blue-500/5",
      accent: "text-[#2582ff] bg-blue-50 border-blue-100/50 group-hover:bg-[#2582ff] group-hover:text-white group-hover:border-blue-300"
    },
    {
      title: "Education & Academy Management",
      sub: "Integrated Campus Ledger",
      desc: "Streamlines tuition billing, scholarship disbursements, and state-backed educational grants under a secure central portal.",
      icon: GraduationCap,
      metric: "Student Ledger Ready",
      highlight: "Consolidated Billing",
      gridSpan: "col-span-1",
      color: "from-[#ff8e1a]/5 to-orange-500/5",
      accent: "text-[#ff8e1a] bg-orange-50 border-orange-100/50 group-hover:bg-[#ff8e1a] group-hover:text-white group-hover:border-orange-300"
    },
    {
      title: "Hospitality & Tourism Group",
      sub: "Direct Folio Sync",
      desc: "Integrates guest booking systems and on-site checkout terminals to prevent revenue leaks and maximize group accommodation yields.",
      icon: Hotel,
      metric: "Synced Operations",
      highlight: "Zero Revenue Leakage",
      gridSpan: "col-span-1",
      color: "from-blue-500/5 to-indigo-600/5",
      accent: "text-[#2582ff] bg-blue-50 border-blue-100/50 group-hover:bg-[#2582ff] group-hover:text-white group-hover:border-blue-300"
    }
  ];

  return (
    <section id="industries" className="py-20 sm:py-28 bg-slate-50 text-slate-800 relative overflow-hidden border-b border-slate-200">
      {/* Background Decorative Mesh Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#2582ff_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 sm:mb-24 gap-4">
          <span className="inline-block font-mono text-xs uppercase tracking-widest text-[#2582ff] font-bold bg-[#2582ff]/5 px-3.5 py-1.5 rounded-full border border-[#2582ff]/10">
            Section 07. Sector Blueprints
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Industries We Serve
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Different sectors present distinct transactional profiles and regulatory structures. <strong>CittaERP Solutions Limited (CSL)</strong> acts as the enterprise partner, deploying specialized systems to solve exact industry requirements.
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
