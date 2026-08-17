import { motion } from 'motion/react';
import { 
  Network, Code2, Cloud, HelpCircle, FileCheck, Sliders, ArrowUpRight, CheckCircle2 
} from 'lucide-react';
import consultTeamImg from '../assets/images/csl_consult_team_1786930422777.jpg';

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
    <section id="services" className="py-20 sm:py-28 bg-white text-slate-800 relative overflow-hidden border-b border-slate-200">
      {/* Decorative glows */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-emerald-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header block */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 sm:mb-20 gap-4">
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

        {/* Human Consulting & Client Collaboration Visual Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-14 sm:mb-18 rounded-3xl overflow-hidden bg-slate-50 border border-slate-200 shadow-xl"
        >
          <div className="grid lg:grid-cols-12 items-center">
            <div className="lg:col-span-6 relative h-72 sm:h-96 lg:h-[400px] overflow-hidden">
              <img 
                src={consultTeamImg} 
                alt="Senior CSL Technology Consultants guiding client through cloud ERP migration and regulatory integration" 
                className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent lg:hidden" />
            </div>

            <div className="lg:col-span-6 p-8 sm:p-10 lg:p-12 text-left space-y-5">
              <div className="inline-flex items-center space-x-2 text-xs font-mono font-bold text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                <span className="w-2 h-2 rounded-full bg-blue-600" />
                <span>HANDS-ON ADVISORY & ON-SITE IMPLEMENTATION</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
                Direct Collaboration with Your Internal Engineering Teams
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                We do not just hand over software licenses. Our certified solution architects and database consultants work side-by-side with your IT leadership to blueprint, test, and deploy integrations with zero operational disruption.
              </p>
              <div className="space-y-2.5 pt-2">
                {[
                  "Dedicated Lead Solutions Architect assigned to your account",
                  "Structured milestones with guaranteed go-live SLA targets",
                  "Comprehensive knowledge transfer and staff training sessions"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-2.5 text-xs text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

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
