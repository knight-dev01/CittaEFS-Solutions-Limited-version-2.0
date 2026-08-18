import { motion } from 'motion/react';
import { 
  Building2, Shuffle, ShieldAlert, Cpu, FileClock, CheckCircle2, ArrowRight 
} from 'lucide-react';
import { TiltCard3D, Isometric3DFlowCube } from './ThreeDimensionalFlow';

export default function ChallengesSection() {
  const challenges = [
    {
      id: "legacy",
      num: "01",
      title: "Legacy System Agility",
      category: "System Resilience",
      desc: "Outdated enterprise software structures cannot keep pace with dynamic digital needs, yet replacing them entirely poses extreme operational risks and prohibitive capital costs.",
      solution: "Fully modernized system capabilities, restored operational agility, and secure transaction workflows without replacing or disrupting your trusted legacy database systems.",
      icon: Building2
    },
    {
      id: "disconnected",
      num: "02",
      title: "Operational Disconnection",
      category: "Data Integrity",
      desc: "Information gaps between corporate departments, remote warehouses, and transactional channels lead to invoicing friction, resource overlap, and critical database errors.",
      solution: "A unified, real-time data flow that bridges corporate divisions, eliminates transactional leakages, and establishes a single source of operational truth.",
      icon: Shuffle
    },
    {
      id: "regulatory",
      num: "03",
      title: "Regulatory Volatility",
      category: "Fiscal Governance",
      desc: "Dynamic national tax codes, electronic reporting mandates, and changing compliance rules threaten large enterprises with severe non-compliance risks and administrative overhead.",
      solution: "Continuous, friction-free regulatory alignment that automatically secures full tax clearance without affecting transactional throughput or ledger speed.",
      icon: ShieldAlert
    },
    {
      id: "inefficiency",
      num: "04",
      title: "Resource Over-Allocation",
      category: "Resource Leveling",
      desc: "Static scheduling tools, mismanaged supply paths, and team overallocation lead to delayed project milestones and directly erode corporate profit margins.",
      solution: "Optimal workforce utilization, balanced multi-site scheduling, and predictable project deliveries achieved through intelligent resource leveling.",
      icon: Cpu
    },
    {
      id: "manual",
      num: "05",
      title: "Manual Workflow Bottlenecks",
      category: "Process Automation",
      desc: "Manual reconciliations, spreadsheet dependencies, and offline paper tracking slow down transaction cycles and introduce significant human billing errors.",
      solution: "Complete administrative workflow automation that speeds up transaction cycles, eliminates spreadsheet errors, and reclaims weekly staff hours.",
      icon: FileClock
    }
  ];

  return (
    <section id="challenges" className="py-20 sm:py-28 bg-white text-slate-800 relative overflow-hidden border-b border-slate-200">
      {/* Background soft glow meshes */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#2582ff]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-[#ff8e1a]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Block */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 sm:mb-20 gap-4">
          <span className="inline-block font-mono text-xs uppercase tracking-widest text-[#2582ff] font-bold bg-[#2582ff]/5 px-3.5 py-1.5 rounded-full border border-[#2582ff]/10">
            Section 03. Market Obstacles
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-none">
            The Challenges We Solve
          </h2>
          <p className="text-slate-600 text-xs sm:text-base leading-relaxed">
            Modern enterprises face a complex web of technical and regulatory hurdles. CSL builds intelligent middleware and business systems engineered to dissolve technical debt, streamline operations, and guarantee effortless compliance.
          </p>
        </div>

        {/* Two-Column Layout: Challenges Grid on Left (7 cols), Sticky Callout on Right (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Challenges with 3D Tilt Flow on Left (Spans 7 columns on desktop) */}
          <div className="lg:col-span-7 space-y-5">
            {challenges.map((ch, idx) => {
              const Icon = ch.icon;
              return (
                <TiltCard3D key={ch.id} maxTilt={4} scaleHover={1.01} className="w-full">
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    viewport={{ once: true }}
                    className="p-6 sm:p-7 bg-slate-50 border border-slate-200/90 rounded-2xl hover:border-[#2582ff]/50 hover:bg-white transition-all duration-300 group text-left shadow-xs hover:shadow-xl flex flex-col justify-between"
                  >
                    {/* Top Row: Category tag, number, and problem title */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#2582ff] bg-[#2582ff]/10 px-2.5 py-0.5 rounded-md border border-[#2582ff]/15">
                            {ch.category}
                          </span>
                        </div>
                        <span className="font-mono text-xs text-slate-400 font-bold">
                          {ch.num} / 05
                        </span>
                      </div>

                      <div className="flex items-start space-x-4 pt-1">
                        <div className="p-3 bg-white border border-slate-200 text-[#2582ff] rounded-xl shrink-0 group-hover:bg-[#2582ff] group-hover:text-white group-hover:border-[#2582ff] transition-all shadow-xs">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className="space-y-1.5 flex-1">
                          <h3 className="font-display font-bold text-lg text-slate-900 group-hover:text-[#2582ff] transition-colors">
                            {ch.title}
                          </h3>
                          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                            {ch.desc}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Distinct CSL Solution Banner */}
                    <div className="mt-4 pt-4 border-t border-slate-200/70">
                      <div className="p-3.5 bg-gradient-to-br from-blue-50/80 to-slate-50 border border-blue-100/90 rounded-xl flex items-start space-x-3">
                        <div className="p-1 bg-[#2582ff] text-white rounded-md shrink-0 mt-0.5 shadow-xs">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                        </div>
                        <div className="space-y-0.5 flex-1">
                          <span className="font-mono font-bold text-[#2582ff] text-[10px] uppercase tracking-wider block">
                            CSL RESOLUTION
                          </span>
                          <p className="text-slate-700 text-xs sm:text-sm font-medium leading-relaxed">
                            {ch.solution}
                          </p>
                        </div>
                      </div>
                    </div>

                  </motion.div>
                </TiltCard3D>
              );
            })}
          </div>

          {/* Large Editorial Visual Callout on Right (Spans 5 columns on desktop with sticky positioning) */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <div className="flex flex-col justify-between p-7 sm:p-9 bg-slate-900 text-white rounded-3xl border border-slate-800 shadow-2xl relative overflow-hidden">
              
              {/* Visual network background overlay */}
              <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:2rem_2rem]" />
              </div>
              <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-[#2582ff]/15 blur-[80px] rounded-full pointer-events-none" />
              <div className="absolute -left-10 -top-10 w-48 h-48 bg-[#ff8e1a]/10 blur-[70px] rounded-full pointer-events-none" />

              <div className="space-y-5 relative z-10 text-left">
                <span className="inline-flex items-center space-x-2 text-[10px] font-mono text-[#ff8e1a] uppercase tracking-widest font-extrabold px-3 py-1 bg-white/5 border border-white/10 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ff8e1a] animate-pulse" />
                  <span>Unified Middleware Strategy</span>
                </span>

                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white leading-snug">
                  Dissolving Friction Without System Disruption
                </h3>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  Many organizations believe that achieving strict compliance or modernizing workflows requires a full replacement of their expensive core software.
                </p>

                {/* 3D Flow Isometric Cube Showcase */}
                <div className="py-2 flex justify-center items-center">
                  <Isometric3DFlowCube />
                </div>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  CSL was built on the philosophy of <strong>coexistence and elevation</strong>. We design intelligent, secure software layers that integrate into SAP, Oracle, Odoo, and Microsoft Dynamics, immediately converting structural obstacles into quiet background utilities.
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 mt-6 space-y-3 relative z-10 text-left">
                <div className="flex items-center space-x-3 text-xs">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 shrink-0 shadow-[0_0_8px_#34d399]" />
                  <span className="text-slate-200 font-medium">Preserve existing hardware &amp; database systems</span>
                </div>
                <div className="flex items-center space-x-3 text-xs">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 shrink-0 shadow-[0_0_8px_#34d399]" />
                  <span className="text-slate-200 font-medium">Real-time pre-clearance validation latency</span>
                </div>
                <div className="flex items-center space-x-3 text-xs">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 shrink-0 shadow-[0_0_8px_#34d399]" />
                  <span className="text-slate-200 font-medium">TLS 1.3 encryption &amp; ISO-27001 grade protocols</span>
                </div>

                <div className="pt-3">
                  <a
                    href="#contact"
                    className="inline-flex items-center space-x-2 text-xs font-bold text-[#ff8e1a] hover:text-[#ffa742] transition-colors group"
                  >
                    <span>Consult our integration team</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
