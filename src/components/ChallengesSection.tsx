import { motion } from 'motion/react';
import { 
  Building2, Shuffle, ShieldAlert, Cpu, FileClock, Database, ClipboardCheck, ArrowRight 
} from 'lucide-react';

export default function ChallengesSection() {
  const challenges = [
    {
      id: "legacy",
      title: "Legacy Systems",
      desc: "Outdated enterprise frameworks cannot keep pace with modern digital demands, yet replacing them entirely is extremely costly and operationally risky.",
      solution: "CSL positions secure, lightweight compliance bridges and modern API gateways that attach directly to existing ledgers without altering database tables.",
      icon: Building2
    },
    {
      id: "disconnected",
      title: "Disconnected Processes",
      desc: "Information gaps between corporate departments, warehouses, and front-desk checkouts create critical transactional errors and billing friction.",
      solution: "CSL's unified product ecosystem integrates double-entry finances, booking systems, and schedulers into a real-time data flow.",
      icon: Shuffle
    },
    {
      id: "regulatory",
      title: "Regulatory Complexity",
      desc: "Ever-shifting national tax policies, MBS guidelines, and electronic fiscal rules threaten corporations with severe non-compliance penalties.",
      solution: "Our CittaEFS middleware executes real-time pre-clearance validation, signing, and stamping of transactions before they hit government servers.",
      icon: ShieldAlert
    },
    {
      id: "inefficiency",
      title: "Operational Inefficiencies",
      desc: "Inflexible scheduling, poor resource utilization, and static project timelines directly drain corporate profitability.",
      solution: "CittaPlannerX introduces intelligent Gantt charts and automated resource leveling to maximize workforce output.",
      icon: Cpu
    },
    {
      id: "manual",
      title: "Manual Workflows",
      desc: "Manual billing, spreadsheet reconciliations, and physical paperwork slow down operations and introduce human validation errors.",
      solution: "CSL automates end-to-end data pipelines, including SFTP folder listeners and automated XML/JSON translations.",
      icon: FileClock
    },
    {
      id: "silos",
      title: "Data Silos",
      desc: "Critical performance metrics and operational statistics remain locked in department-specific software solutions, preventing strategic decision-making.",
      solution: "CittaMatrix centralizes business data into real-time analytical dashboards and corporate intelligence streams.",
      icon: Database
    },
    {
      id: "compliance",
      title: "Growing Compliance",
      desc: "The rapid global expansion of electronic invoicing and strict data privacy regulations requires constant security audits.",
      solution: "We implement AES-256 state encryption, NDPA data protection, and ISO-certified infrastructure by default.",
      icon: ClipboardCheck
    }
  ];

  return (
    <section id="challenges" className="py-20 sm:py-28 bg-white text-slate-800 relative overflow-hidden border-b border-slate-200">
      {/* Background soft glow meshes */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#2582ff]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-[#ff8e1a]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Block */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 sm:mb-24 gap-4">
          <span className="inline-block font-mono text-xs uppercase tracking-widest text-[#2582ff] font-bold bg-[#2582ff]/5 px-3.5 py-1.5 rounded-full border border-[#2582ff]/10">
            Section 03. Market Obstacles
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-none">
            The Challenges We Solve
          </h2>
          <p className="text-slate-600 text-xs sm:text-base leading-relaxed">
            Modern enterprises face a complex web of technical and regulatory hurdles. CittaERP Solutions Limited builds intelligent software designed to simplify operations, dissolve technical debt, and ensure seamless compliance.
          </p>
        </div>

        {/* Two-Column Layout: Challenges Grid on Left, Callout on Right */}
        <div className="grid lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Challenges Accordion/Cards on Left (Spans 7 columns) */}
          <div className="lg:col-span-7 space-y-6">
            {challenges.map((ch, idx) => {
              const Icon = ch.icon;
              return (
                <motion.div
                  key={ch.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  className="p-6 bg-slate-50 border border-slate-200 rounded-2xl hover:border-[#2582ff]/30 hover:bg-white transition-all duration-300 group text-left"
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-white border border-slate-200 text-[#2582ff] rounded-xl shrink-0 group-hover:bg-[#2582ff]/5 group-hover:border-[#2582ff]/20 transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-display font-bold text-base sm:text-lg text-slate-900 group-hover:text-[#2582ff] transition-colors">
                        {ch.title}
                      </h3>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                        {ch.desc}
                      </p>
                      
                      {/* Interactive slide-down Solution under the challenge */}
                      <div className="pt-2.5 mt-2 border-t border-slate-200/50 flex items-start space-x-2 text-xs text-slate-500">
                        <span className="font-mono font-bold text-[#ff8e1a] uppercase tracking-wider shrink-0 mt-0.5">CSL SOLUTION:</span>
                        <p className="leading-relaxed text-slate-600 font-medium">{ch.solution}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Large Editorial Visual Callout on Right (Spans 5 columns) */}
          <div className="lg:col-span-5 flex flex-col justify-between p-8 sm:p-10 bg-slate-900 text-white rounded-3xl border border-slate-800 shadow-2xl relative overflow-hidden">
            
            {/* Visual network overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:2rem_2rem]" />
            </div>
            <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-[#2582ff]/10 blur-[80px] rounded-full pointer-events-none" />

            <div className="space-y-6 relative z-10 text-left">
              <span className="text-[10px] font-mono text-[#ff8e1a] uppercase tracking-widest font-extrabold px-3 py-1 bg-white/5 border border-white/10 rounded-full">
                Unified Middleware Strategy
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                Dissolving Friction Without System Disruption
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Many organizations believe that achieving strict compliance or modernizing workflows requires a full replacement of their expensive core software. 
              </p>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                CSL was built on the philosophy of <strong>coexistence and elevation</strong>. We design intelligent, secure software layers that integrate into SAP, Oracle, and Microsoft Dynamics, immediately converting structural obstacles into quiet background utilities.
              </p>
            </div>

            <div className="pt-8 border-t border-white/5 mt-8 space-y-4 relative z-10 text-left">
              <div className="flex items-center space-x-3 text-xs">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                <span className="text-slate-300">Preserve existing hardware & database systems</span>
              </div>
              <div className="flex items-center space-x-3 text-xs">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                <span className="text-slate-300">Under 240ms pre-clearance validation latency</span>
              </div>
              <div className="flex items-center space-x-3 text-xs">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                <span className="text-slate-300">TLS 1.3 encryption & ISO-27001 grade protocols</span>
              </div>

              <div className="pt-4">
                <a
                  href="#contact"
                  className="inline-flex items-center space-x-2 text-xs font-bold text-[#ff8e1a] hover:underline"
                >
                  <span>Consult our integration team</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
