import { motion } from 'motion/react';
import { 
  Network, Code2, Cloud, HelpCircle, FileCheck, Sliders, ArrowUpRight 
} from 'lucide-react';

export default function ProfessionalServices() {
  const services = [
    {
      title: "ERP Implementation",
      desc: "End-to-end deployment, mapping, and integration of custom CSL software with your existing ERP environment.",
      icon: Network,
      color: "bg-blue-50 text-blue-600 border-blue-100"
    },
    {
      title: "Software Development",
      desc: "Tailored software engineering designed to solve specific operational constraints and automate proprietary business workflows.",
      icon: Code2,
      color: "bg-orange-50 text-orange-600 border-orange-100"
    },
    {
      title: "Cloud Solutions",
      desc: "Secure, reliable, and highly scalable cloud-native architectures optimized for heavy workloads and real-time operations.",
      icon: Cloud,
      color: "bg-emerald-50 text-emerald-600 border-emerald-100"
    },
    {
      title: "Technology Consulting",
      desc: "Strategic advisory on system architecture, database optimization, and modernizing legacy enterprise operations.",
      icon: HelpCircle,
      color: "bg-indigo-50 text-indigo-600 border-indigo-100"
    },
    {
      title: "ERP Optimisation",
      desc: "Fine-tuning transaction speed, database indexes, and reporting capabilities of your existing enterprise ledger databases.",
      icon: Sliders,
      color: "bg-purple-50 text-purple-600 border-purple-100"
    },
    {
      title: "Enterprise Support",
      desc: "Dedicated 24/7 technical assistance and system monitoring to guarantee maximum uptime, compliance, and security.",
      icon: FileCheck,
      color: "bg-teal-50 text-teal-600 border-teal-100"
    }
  ];

  return (
    <section id="services" className="py-20 sm:py-28 bg-slate-50 text-slate-800 relative overflow-hidden border-b border-slate-200">
      {/* Decorative glows */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-emerald-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header block */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 sm:mb-24 gap-4">
          <span className="inline-block font-mono text-xs uppercase tracking-widest text-[#2582ff] font-bold bg-[#2582ff]/5 px-3.5 py-1.5 rounded-full border border-[#2582ff]/10">
            Section 06. Supporting Capabilities
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Professional Services
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            We provide expert engineering capabilities to support successful implementation, custom integration, and long-term system optimization for your organization.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {services.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="p-6 sm:p-8 bg-white border border-slate-200 rounded-3xl hover:border-[#2582ff]/20 hover:shadow-xl transition-all duration-300 text-left flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className={`p-3 rounded-2xl w-12 h-12 flex items-center justify-center border ${srv.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-slate-900 group-hover:text-[#2582ff] transition-colors">
                    {srv.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {srv.desc}
                  </p>
                </div>

                <div className="pt-6 flex items-center text-[10px] font-mono text-slate-400 uppercase tracking-wider group-hover:text-[#2582ff] transition-colors">
                  <span>Implementation Readiness</span>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-1 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
