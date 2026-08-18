import { motion } from 'motion/react';
import { 
  Eye, Cpu, CheckCircle2, ShieldCheck, ChevronRight, ArrowDown 
} from 'lucide-react';

export default function ApproachSection() {
  const steps = [
    {
      step: "01",
      title: "Discovery & Mapping",
      desc: "We analyze your existing corporate ledger configurations and operational targets to establish perfect strategic alignment before implementation.",
      icon: Eye,
      accent: "text-[#2582ff] bg-blue-50 border-blue-200 group-hover:bg-[#2582ff] group-hover:text-white"
    },
    {
      step: "02",
      title: "Architecture & Integration",
      desc: "Our engineers design a secure, non-intrusive modular system layer that protects your core database while unlocking new transaction capabilities.",
      icon: Cpu,
      accent: "text-[#ff8e1a] bg-orange-50 border-orange-200 group-hover:bg-[#ff8e1a] group-hover:text-white"
    },
    {
      step: "03",
      title: "Validation & Auditing",
      desc: "We perform rigorous scenario trials and transaction dry-runs to guarantee continuous, automatic tax clearances with absolute compliance integrity.",
      icon: CheckCircle2,
      accent: "text-emerald-700 bg-emerald-50 border-emerald-200 group-hover:bg-emerald-600 group-hover:text-white"
    },
    {
      step: "04",
      title: "Operational Readiness",
      desc: "We partner with your team for a smooth system activation, ensuring long-term operational confidence, continuous uptime, and active SLA support.",
      icon: ShieldCheck,
      accent: "text-purple-700 bg-purple-50 border-purple-200 group-hover:bg-purple-600 group-hover:text-white"
    }
  ];

  return (
    <section id="approach" className="py-16 sm:py-24 bg-white text-slate-800 relative overflow-hidden border-b border-slate-200">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-[#2582ff]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#ff8e1a]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Block */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12 sm:mb-18 gap-3 sm:gap-4">
          <span className="inline-block font-mono text-xs uppercase tracking-widest text-[#2582ff] font-bold bg-[#2582ff]/5 px-3.5 py-1.5 rounded-full border border-[#2582ff]/10">
            Section 07. Methodology
          </span>
          <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Our Approach
          </h2>
          <p className="text-slate-600 text-xs sm:text-base leading-relaxed max-w-2xl">
            Our systematic, client-first implementation roadmap ensures technical precision, zero operational disruption, and absolute compliance alignment.
          </p>
        </div>

        {/* Steps flow with crisp cards and mobile-friendly connectors */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-6 relative items-stretch">
          
          {/* Animated flowing data highway (Desktop only) */}
          <div className="hidden md:block absolute top-[52px] left-[12%] right-[12%] h-[2px] bg-slate-200 z-0 overflow-hidden">
            <motion.div
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              className="w-1/3 h-full bg-gradient-to-r from-transparent via-[#2582ff] to-transparent shadow-[0_0_8px_#2582ff]"
            />
          </div>

          {steps.map((st, idx) => {
            const Icon = st.icon;
            return (
              <motion.div
                key={st.step}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                viewport={{ once: true }}
                className="relative z-10 text-center flex flex-col items-center justify-between p-6 sm:p-7 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-slate-300 hover:bg-white shadow-xs hover:shadow-lg transition-all duration-200 group h-full"
              >
                {/* Step indicator circle with high contrast */}
                <div className="relative mb-4">
                  <div className={`w-16 h-16 sm:w-18 sm:h-18 rounded-2xl border flex items-center justify-center transition-all duration-200 shadow-xs ${st.accent}`}>
                    <Icon className="w-7 h-7 sm:w-8 sm:h-8" />
                  </div>
                  
                  {/* Step number badge */}
                  <span className="absolute -top-2 -right-2 bg-slate-900 text-white font-mono text-[10px] font-extrabold px-2 py-0.5 rounded-full shadow-xs">
                    {st.step}
                  </span>
                </div>

                <div className="space-y-2 flex-1 flex flex-col justify-start">
                  <h3 className="font-display font-bold text-base sm:text-lg text-slate-900 group-hover:text-[#2582ff] transition-colors">
                    {st.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {st.desc}
                  </p>
                </div>

                {/* Mobile visual downward flow indicator */}
                {idx < 3 && (
                  <div className="md:hidden pt-4 text-slate-300">
                    <ArrowDown className="w-4 h-4 mx-auto animate-bounce text-slate-400" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
