import { Compass, Eye, ShieldCheck, Award, Landmark, Users2, ArrowUpRight, CheckCircle2, Zap, Layers, Server, Activity } from 'lucide-react';
import { motion } from 'motion/react';
import { AnimatedSectionNumber, AnimatedStat } from './AnimatedComponents';
import teamCollabImg from '../assets/images/csl_team_collab_1786930394725.jpg';

interface CSLAboutProps {
  isTopPage?: boolean;
  isSummary?: boolean;
  setCurrentPage?: (page: any) => void;
}

export default function CSLAbout({ isTopPage = false, isSummary = false, setCurrentPage }: CSLAboutProps) {
  const stats = [
    { 
      label: "Compliance Status", 
      value: "Verified", 
      badge: "NTAA Sec 23",
      icon: ShieldCheck,
      color: "text-emerald-700 bg-emerald-50 border-emerald-200"
    },
    { 
      label: "Deployment Pipeline", 
      value: "Accelerated", 
      badge: "< 14 Days",
      icon: Zap,
      color: "text-[#2582ff] bg-blue-50 border-blue-200"
    },
    { 
      label: "ERP Systems Integration", 
      value: "Universal", 
      badge: "SAP • Oracle • Dynamics",
      icon: Layers,
      color: "text-purple-700 bg-purple-50 border-purple-200"
    },
    { 
      label: "Validation Performance", 
      value: "Real-Time", 
      badge: "Sub-200ms",
      icon: Activity,
      color: "text-amber-700 bg-amber-50 border-amber-200"
    }
  ];

  const values = [
    {
      title: "Regulatory Precision",
      tag: "Rule Compliance",
      desc: "We run absolute, 3-tier pre-clearance validation logic on every outgoing parameter to guarantee full compliance before the data hits national servers.",
      icon: Compass,
      accent: "from-blue-500 to-indigo-600"
    },
    {
      title: "Enterprise Security",
      tag: "TLS 1.3 & AES-256",
      desc: "Our platform complies fully with global enterprise standards and localized data laws, utilizing rigid AES-256 state encryption at all gateways.",
      icon: ShieldCheck,
      accent: "from-emerald-500 to-teal-600"
    },
    {
      title: "Seamless Integration",
      tag: "Zero ERP Disruption",
      desc: "We believe compliance should accelerate corporate output, not block it. We deploy lightweight hooks that attach directly to existing ERP ledgers.",
      icon: Users2,
      accent: "from-amber-500 to-orange-600"
    }
  ];

  return (
    <section className={`${isTopPage ? 'pt-24 pb-12 sm:pt-32 sm:pb-24 lg:pt-36 lg:pb-28' : 'py-12 sm:py-20'} bg-slate-50 text-slate-800 overflow-hidden relative`}>
      {/* Decorative subtle background bridge graphic or glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* About Headline Block */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12 sm:mb-18"
        >
          <div className="lg:col-span-6 flex flex-col items-start gap-3 sm:gap-5 text-left">
            <span className="inline-block font-mono text-xs uppercase tracking-widest text-[#2582ff] font-bold bg-[#2582ff]/5 px-3.5 py-1.5 rounded-full border border-[#2582ff]/10">
              Who We Are
            </span>
            <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-slate-900 text-left">
              Enterprise Software &amp; Regulatory Technology
            </h2>
            <p className="text-slate-600 text-xs sm:text-base leading-relaxed text-left">
              <strong>CittaSL (CSL)</strong> specializes in engineering intelligent business platforms and advanced regulatory software for major enterprises. As a technology unit under <strong>CittaNuvola</strong>, we connect core corporate ledgers with national compliance networks seamlessly.
            </p>
            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed text-left">
              By integrating non-intrusive fiscal middleware and automated workflows, we help major organizations simplify operations, ensure complete regulatory compliance, and safeguard critical financial data.
            </p>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 w-full">
            {stats.map((st, idx) => {
              const Icon = st.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white border border-slate-200/90 hover:border-slate-300 rounded-2xl p-5 sm:p-6 flex flex-col justify-between min-h-[130px] sm:min-h-[145px] shadow-xs hover:shadow-md transition-all duration-200 group"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[9px] sm:text-[10px] text-slate-500 uppercase tracking-wider font-bold text-left">
                      {st.label}
                    </span>
                    <div className={`p-1.5 rounded-lg border ${st.color}`}>
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                  </div>
                  <div>
                    <div className="font-display text-xl sm:text-2xl font-black text-slate-900 mt-2 text-left tracking-tight">
                      {st.value}
                    </div>
                    <div className="mt-1">
                      <span className="inline-block text-[10px] font-mono font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">
                        {st.badge}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Human Team & Collaborative Culture Photographic Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-14 sm:mb-20 rounded-3xl overflow-hidden bg-white border border-slate-200/90 shadow-xl"
        >
          <div className="grid lg:grid-cols-12 items-center">
            <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-[400px] overflow-hidden">
              <img 
                src={teamCollabImg} 
                alt="CittaSL (CSL) Enterprise Software Architects & Engineering Team collaborating on digital transformation strategy" 
                className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent lg:hidden" />
              <div className="absolute bottom-4 left-4 lg:hidden text-white text-left">
                <span className="font-mono text-[10px] uppercase tracking-wider bg-emerald-600/90 px-2.5 py-1 rounded-full font-bold">
                  CSL Engineering Hub
                </span>
              </div>
            </div>
            
            <div className="lg:col-span-5 p-6 sm:p-9 lg:p-10 text-left space-y-4 sm:space-y-5">
              <div className="inline-flex items-center space-x-2 text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                <span className="w-2 h-2 rounded-full bg-emerald-600" />
                <span>EXPERIENCED ENGINEERING TALENT</span>
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 leading-tight">
                Architected by Seasoned Enterprise Practitioners
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Our interdisciplinary engineering teams bring deep technical expertise in distributed systems, financial cryptographic hashing, and legacy ERP architectures (SAP, Oracle, Odoo, Microsoft Dynamics).
              </p>
              <div className="space-y-2 pt-1">
                {[
                  "Dedicated in-house systems architects & compliance engineers",
                  "Direct engineering support for corporate onboarding",
                  "Continuous regulatory sync with national revenue authorities"
                ].map((point, i) => (
                  <div key={i} className="flex items-center space-x-2.5 text-xs text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {!isSummary && (
          <>
            {/* Mission & Vision Block */}
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-16 sm:mb-20">
              {/* Mission */}
              <div className="bg-white border border-slate-200/90 p-6 sm:p-8 rounded-3xl space-y-3.5 text-left shadow-xs hover:border-emerald-200 transition-all">
                <div className="flex items-center justify-between">
                  <div className="inline-flex p-3 bg-emerald-50 text-emerald-700 rounded-xl border border-emerald-100">
                    <Compass className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                    Core Directive
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold text-slate-900">Our Mission</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  To bridge the gap between heavy enterprise legacy ledgers and complex regulatory portals by delivering secure, high-capacity, real-time middleware that preserves system operations and protects corporate transaction values.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-white border border-slate-200/90 p-6 sm:p-8 rounded-3xl space-y-3.5 text-left shadow-xs hover:border-blue-200 transition-all">
                <div className="flex items-center justify-between">
                  <div className="inline-flex p-3 bg-blue-50 text-[#2582ff] rounded-xl border border-blue-100">
                    <Eye className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono font-bold text-[#2582ff] bg-blue-50 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                    Strategic Horizon
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold text-slate-900">Our Vision</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  To build standard middleware infrastructure across global emerging markets, turning complex compliance frameworks into automatic, friction-free background utilities that strengthen corporate financial transparency.
                </p>
              </div>
            </div>

            {/* Core Values Section */}
            <div className="border-t border-slate-200 pt-12 sm:pt-16">
              <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 space-y-2.5">
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                  Our Corporate Core Values
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm">
                  The fundamental engineering philosophies guiding CSL's technology team.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
                {values.map((v, idx) => {
                  const Icon = v.icon;
                  return (
                    <div key={idx} className="bg-white border border-slate-200/90 p-6 sm:p-7 rounded-2xl hover:border-slate-300 hover:shadow-md transition-all text-left space-y-3.5 shadow-xs group">
                      <div className="flex items-center justify-between">
                        <div className="p-2.5 bg-slate-50 text-slate-800 rounded-xl w-11 h-11 flex items-center justify-center border border-slate-200 group-hover:bg-[#2582ff] group-hover:text-white group-hover:border-[#2582ff] transition-all">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-[9px] font-mono font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                          {v.tag}
                        </span>
                      </div>
                      <h4 className="font-display font-bold text-base sm:text-lg text-slate-900 group-hover:text-[#2582ff] transition-colors">
                        {v.title}
                      </h4>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                        {v.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </>
        )}

      </div>
    </section>
  );
}
