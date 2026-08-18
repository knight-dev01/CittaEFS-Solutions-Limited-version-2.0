import { motion } from 'motion/react';
import { 
  Briefcase, Handshake, Shield, Maximize, Landmark, Settings, Headphones, Award, CheckCircle2 
} from 'lucide-react';
import execBoardImg from '../assets/images/csl_exec_board_1786930410286.jpg';

export default function WhyChooseCSL() {
  const points = [
    {
      title: "CittaNuvola Institutional Backing",
      desc: "Backed by the formidable global entity CittaNuvola, CSL combines limitless financial stability, world-class R&D reserves, and elite compliance governance to power mission-critical enterprise systems without compromise.",
      icon: Shield
    },
    {
      title: "Institutional Expertise",
      desc: "Our architects understand the unique, complex regulatory and functional challenges of large-scale public institutions, multi-entity corporations, and heavy transaction volumes.",
      icon: Briefcase
    },
    {
      title: "Trust-First Partnerships",
      desc: "We build long-term relationships centered on operational integrity, serving as the quiet, highly reliable technology partner behind your daily business operations.",
      icon: Handshake
    },
    {
      title: "Complete Operational Confidence",
      desc: "Our modular software ecosystems are architected for absolute dependability, allowing corporate leaders to make strategic moves with perfect peace of mind.",
      icon: Maximize
    },
    {
      title: "Zero-Friction Delivery",
      desc: "We guide your internal IT teams step-by-step through a professional integration plan, eliminating deployment risks and guaranteeing launch timelines.",
      icon: Settings
    },
    {
      title: "24/7 Enterprise Assurances",
      desc: "Our dedicated support team operates around the clock to monitor system node health and handle critical updates instantly, ensuring non-stop uptime.",
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
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 sm:mb-20 gap-4">
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

        {/* Boardroom & Corporate Governance Human Photograph */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-14 sm:mb-18 rounded-3xl overflow-hidden bg-slate-900 text-white border border-slate-800 shadow-2xl"
        >
          <div className="grid lg:grid-cols-12 items-center">
            <div className="lg:col-span-6 p-8 sm:p-10 lg:p-12 text-left space-y-5 order-2 lg:order-1">
              <div className="inline-flex items-center space-x-2 text-xs font-mono font-bold text-[#2582ff] bg-[#2582ff]/10 px-3 py-1 rounded-full border border-[#2582ff]/20">
                <Shield className="w-3.5 h-3.5" />
                <span>EXECUTIVE GOVERNANCE & RISK MITIGATION</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white leading-tight">
                Trusted by Boardrooms, CFOs, and Chief Technology Officers
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Enterprise technology decisions require unwavering institutional stability. With CittaNuvola institutional backing and certified regulatory compliance, CSL delivers zero-compromise peace of mind to enterprise leadership.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-4 text-left">
                  <div className="text-xl sm:text-2xl font-bold font-display text-emerald-400">High SLA</div>
                  <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mt-1">Fault-Tolerant System</div>
                </div>
                <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-4 text-left">
                  <div className="text-xl sm:text-2xl font-bold font-display text-[#2582ff]">Certified</div>
                  <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mt-1">Regulatory Compliant</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 relative h-72 sm:h-96 lg:h-[400px] overflow-hidden order-1 lg:order-2">
              <img 
                src={execBoardImg} 
                alt="Corporate Boardroom and Financial Directors reviewing enterprise ERP compliance strategy with CSL leadership" 
                className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
            </div>
          </div>
        </motion.div>

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
