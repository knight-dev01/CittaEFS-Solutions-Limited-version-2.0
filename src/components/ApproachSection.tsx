import { motion } from 'motion/react';
import { 
  Eye, Cpu, CheckCircle2, ShieldCheck, ChevronRight, ArrowDown 
} from 'lucide-react';
import { TiltCard3D } from './ThreeDimensionalFlow';

export default function ApproachSection() {
  const steps = [
    {
      step: "01",
      title: "Discovery & Mapping",
      desc: "We analyze your existing corporate ledger configurations and operational targets to establish perfect strategic alignment before implementation.",
      icon: Eye,
      color: "border-[#2582ff]/20 bg-[#2582ff]/5 text-[#2582ff]"
    },
    {
      step: "02",
      title: "Architecture & Integration",
      desc: "Our engineers design a secure, non-intrusive modular system layer that protects your core database while unlocking new transaction capabilities.",
      icon: Cpu,
      color: "border-[#ff8e1a]/20 bg-[#ff8e1a]/5 text-[#ff8e1a]"
    },
    {
      step: "03",
      title: "Validation & Auditing",
      desc: "We perform rigorous scenario trials and transaction dry-runs to guarantee continuous, automatic tax clearances with absolute compliance integrity.",
      icon: CheckCircle2,
      color: "border-[#2582ff]/20 bg-[#2582ff]/5 text-[#2582ff]"
    },
    {
      step: "04",
      title: "Operational Readiness",
      desc: "We partner with your team for a smooth system activation, ensuring long-term operational confidence, continuous uptime, and active SLA support.",
      icon: ShieldCheck,
      color: "border-[#ff8e1a]/20 bg-[#ff8e1a]/5 text-[#ff8e1a]"
    }
  ];

  return (
    <section id="approach" className="py-20 sm:py-28 bg-white text-slate-800 relative overflow-hidden border-b border-slate-200">
      {/* Background visual graphics */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-[#2582ff]/3 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#ff8e1a]/3 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Block */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 sm:mb-24 gap-4">
          <span className="inline-block font-mono text-xs uppercase tracking-widest text-[#2582ff] font-bold bg-[#2582ff]/5 px-3.5 py-1.5 rounded-full border border-[#2582ff]/10">
            Section 07. Methodology
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-none">
            Our Approach
          </h2>
          <p className="text-slate-600 text-xs sm:text-base leading-relaxed">
            Our systematic, client-first implementation roadmap ensures technical precision, zero operational disruption, and absolute compliance alignment.
          </p>
        </div>

        {/* Steps flow with 3D fluid connectivity */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative items-start">
          
          {/* Animated flowing data highway (Desktop only) */}
          <div className="hidden md:block absolute top-[44px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-[#2582ff]/20 via-[#ff8e1a]/20 to-[#2582ff]/20 z-0 overflow-hidden">
            <motion.div
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'linear' }}
              className="w-1/3 h-full bg-gradient-to-r from-transparent via-[#2582ff] to-transparent shadow-[0_0_8px_#2582ff]"
            />
          </div>

          {steps.map((st, idx) => {
            const Icon = st.icon;
            return (
              <TiltCard3D key={st.step} maxTilt={8} scaleHover={1.03} className="h-full">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="relative z-10 text-center flex flex-col items-center space-y-4 group p-5 rounded-2xl bg-white/70 border border-slate-100 backdrop-blur-xs shadow-xs hover:shadow-md transition-shadow h-full"
                >
                  {/* Step indicator balloon with 3D depth */}
                  <div className={`w-20 h-20 rounded-full border flex items-center justify-center relative transition-transform duration-300 group-hover:scale-110 shadow-sm group-hover:shadow-lg ${st.color}`}>
                    <Icon className="w-8 h-8" />
                    
                    {/* Absolute small step index label */}
                    <span className="absolute -top-1.5 -right-1.5 bg-slate-900 text-white font-mono text-[9px] font-extrabold px-1.5 py-0.5 rounded-full shadow-xs">
                      {st.step}
                    </span>
                  </div>

                  <div className="space-y-2 max-w-[240px]">
                    <h3 className="font-display font-extrabold text-lg text-slate-900 group-hover:text-[#2582ff] transition-colors flex items-center justify-center gap-1">
                      <span>{st.title}</span>
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {st.desc}
                    </p>
                  </div>

                  {/* Mobile arrows between steps */}
                  {idx < 3 && (
                    <div className="md:hidden pt-4 pb-2 text-slate-300 animate-pulse">
                      <ArrowDown className="w-5 h-5 mx-auto" />
                    </div>
                  )}
                </motion.div>
              </TiltCard3D>
            );
          })}
        </div>

      </div>
    </section>
  );
}
