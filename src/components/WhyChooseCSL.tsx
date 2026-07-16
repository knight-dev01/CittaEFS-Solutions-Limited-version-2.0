import { motion } from 'motion/react';
import { 
  Briefcase, Handshake, Shield, Maximize, Landmark, Settings, Headphones 
} from 'lucide-react';

export default function WhyChooseCSL() {
  const points = [
    {
      title: "Enterprise Expertise",
      desc: "Our architects understand the unique, complex regulatory and functional challenges of large-scale public institutions and multi-entity corporations.",
      icon: Briefcase
    },
    {
      title: "Trusted Technology Partner",
      desc: "We build long-term relationships centered on technical integrity, serving as the quiet, reliable foundation behind your business operations.",
      icon: Handshake
    },
    {
      title: "Secure Software Platforms",
      desc: "Security is baked into our engineering core. We defend your corporate ledgers with modern cryptographic protocols and isolated secure middleware.",
      icon: Shield
    },
    {
      title: "Scalable Solutions",
      desc: "Our modular software engines scale effortlessly alongside your company, handling high transactional volumes and peak loads without latency.",
      icon: Maximize
    },
    {
      title: "Industry Knowledge",
      desc: "We bring seasoned, deep-sector insight across retail, manufacturing, government, and hospitality, adapting CSL systems to your exact industry billing flows.",
      icon: Landmark
    },
    {
      title: "Professional Implementation",
      desc: "We guide your internal IT teams step-by-step through configuration and deployment, removing delivery friction and guaranteeing timelines.",
      icon: Settings
    },
    {
      title: "Long-Term Support",
      desc: "Our dedicated support engineers operate 24/7 to monitor integration nodes, answer compliance questions, and ensure complete system uptime.",
      icon: Headphones
    }
  ];

  return (
    <section id="why-choose-csl" className="py-20 sm:py-28 bg-slate-50 text-slate-800 relative overflow-hidden border-b border-slate-200">
      {/* Background visual graphics */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-[#2582ff]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-[#ff8e1a]/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Block */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 sm:mb-24 gap-4">
          <span className="inline-block font-mono text-xs uppercase tracking-widest text-[#2582ff] font-bold bg-[#2582ff]/5 px-3.5 py-1.5 rounded-full border border-[#2582ff]/10">
            Section 06. Corporate Strengths
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-none">
            Why Organisations Choose CSL
          </h2>
          <p className="text-slate-600 text-xs sm:text-base leading-relaxed">
            We focus on business outcomes, technical resilience, and long-term security. Leading enterprises trust CSL to connect complex operational databases with rigorous national requirements.
          </p>
        </div>

        {/* Layout: Key points in a beautiful visual bento/grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            const isFirst = idx === 0;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                viewport={{ once: true }}
                className={`p-6 sm:p-8 rounded-3xl border transition-all duration-300 text-left flex flex-col justify-between ${
                  isFirst 
                    ? "bg-slate-900 text-white border-slate-800 md:col-span-2 lg:col-span-1 shadow-xl shadow-slate-950/10" 
                    : "bg-white text-slate-800 border-slate-200 hover:shadow-xl hover:border-[#2582ff]/20"
                }`}
              >
                <div className="space-y-4">
                  <div className={`p-3 rounded-2xl w-12 h-12 flex items-center justify-center ${
                    isFirst ? "bg-[#2582ff]/20 text-[#2582ff]" : "bg-slate-100 text-slate-700"
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className={`font-display font-bold text-lg sm:text-xl ${isFirst ? 'text-white' : 'text-slate-900'}`}>
                    {pt.title}
                  </h3>
                  <p className={`text-xs sm:text-sm leading-relaxed ${isFirst ? 'text-slate-300' : 'text-slate-600'}`}>
                    {pt.desc}
                  </p>
                </div>
                
                <div className="pt-6 font-mono text-[9px] uppercase tracking-widest text-slate-400">
                  CSL OUTCOME-DRIVEN ARCHITECTURE
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
