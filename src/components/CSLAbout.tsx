import { Compass, Eye, ShieldCheck, Award, Landmark, Users2, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { AnimatedSectionNumber, AnimatedStat } from './AnimatedComponents';

interface CSLAboutProps {
  isTopPage?: boolean;
  isSummary?: boolean;
  setCurrentPage?: (page: any) => void;
}

export default function CSLAbout({ isTopPage = false, isSummary = false, setCurrentPage }: CSLAboutProps) {
  const stats = [
    { label: "Compliance Success Rate", value: 100, suffix: "%" },
    { label: "Standard Deployment Time", value: 10 }, // Range, skipping animation for simplicity
    { label: "Systems Integrations", value: 500, suffix: "+" },
    { label: "Validation Response Time", value: 240, prefix: "< ", suffix: "ms" }
  ];

  const values = [
    {
      title: "Regulatory Precision",
      desc: "We run absolute, 3-tier pre-clearance validation logic on every outgoing parameter to guarantee full compliance before the data hits national servers.",
      icon: Compass
    },
    {
      title: "Enterprise Security",
      desc: "Our platform complies fully with global enterprise standards and localized data laws, utilizing rigid AES-256 state encryption at all gateways.",
      icon: ShieldCheck
    },
    {
      title: "Seamless Integration",
      desc: "We believe compliance should accelerate corporate output, not block it. We deploy lightweight hooks that attach directly to existing ERP ledgers.",
      icon: Users2
    }
  ];

  return (
    <section className={`${isTopPage ? 'pt-28 pb-12 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-36' : 'py-12 sm:py-24'} bg-slate-50 text-slate-800 overflow-hidden relative`}>
      {/* Decorative subtle background bridge graphic or glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* About Headline Block */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12 sm:mb-24"
        >
          <div className="lg:col-span-6 flex flex-col items-start gap-4 sm:gap-6">
            <span className="inline-block font-mono text-xs uppercase tracking-widest text-emerald-800 font-bold bg-emerald-100/60 px-3.5 py-1.5 rounded-full border border-emerald-200">
              <AnimatedSectionNumber targetNumber={2} /> Corporate Profile
            </span>
            <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-slate-900 text-left">
              Global Software Engineering & Regulatory Foundations
            </h2>
            <p className="text-slate-600 text-xs sm:text-base leading-relaxed text-left">
              <strong>CittaERP Solutions Limited (CSL)</strong> is a premier global enterprise software and regulatory compliance firm. Serving as the corporate parent brand, CSL unifies and positions specialized digital ecosystems including <strong>CittaEFS</strong>, <strong>CittaMatrix</strong>, <strong>CittaHospitalityX</strong>, <strong>CittaPlannerX</strong>, and <strong>CittaNexus</strong> to power complex corporate operations.
            </p>
            <p className="text-slate-505 text-xs sm:text-sm leading-relaxed text-left text-slate-500">
              Our flagship middleware platform, <strong>CittaEFS</strong>, serves as the ultimate regulatory compliance buffer for legacy ERP architectures. By separating complex validation from core ledger tables, CSL enables companies to achieve flawless alignment across all their operational divisions.
            </p>
            {isSummary && setCurrentPage && (
              <div className="pt-4 text-left">
                <button
                  onClick={() => {
                    setCurrentPage('company');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center space-x-2 px-6 py-3 rounded-full text-sm font-semibold text-white bg-slate-900 hover:bg-emerald-800 hover:shadow-lg hover:shadow-emerald-900/10 transition-all duration-300 cursor-pointer"
                >
                  <span>Explore CSL Corporate Profile</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            {stats.map((st, idx) => (
              <div 
                key={idx}
                className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-8 flex flex-col justify-between min-h-[140px] sm:h-40 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="font-mono text-[9px] sm:text-[10px] text-slate-400 uppercase tracking-wider font-semibold text-left">{st.label}</div>
                <div className="font-display text-2xl sm:text-4xl font-bold text-emerald-700 mt-2 sm:mt-4 text-left">
                  {idx === 1 ? st.value + " Days" : <AnimatedStat targetValue={st.value} prefix={st.prefix} suffix={st.suffix} />}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {!isSummary && (
          <>
            {/* Mission, Vision, Values Block */}
            <div className="grid md:grid-cols-2 gap-8 mb-20">
              {/* Mission */}
              <div className="bg-white border border-slate-200 p-8 rounded-3xl space-y-4 text-left shadow-sm">
                <div className="inline-flex p-3 bg-emerald-50 text-emerald-700 rounded-xl border border-emerald-100">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="font-display text-xl font-bold text-slate-900">Our Mission</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  To bridge the gap between heavy enterprise legacy ledgers and complex regulatory portals by delivering secure, high-capacity, real-time middleware that preserves system operations and protects corporate transaction values.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-white border border-slate-200 p-8 rounded-3xl space-y-4 text-left shadow-sm">
                <div className="inline-flex p-3 bg-emerald-50 text-emerald-700 rounded-xl border border-emerald-100">
                  <Eye className="w-6 h-6" />
                </div>
                <h3 className="font-display text-xl font-bold text-slate-900">Our Vision</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  To build standard middleware infrastructure across global emerging markets, turning complex compliance frameworks into automatic, friction-free background utilities that strengthen corporate financial transparency.
                </p>
              </div>
            </div>

            {/* Core Values Section */}
            <div className="border-t border-slate-200 pt-16">
              <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
                <h3 className="font-display text-2xl font-bold text-slate-900">Our Corporate Core Values</h3>
                <p className="text-slate-500 text-sm">
                  The fundamental engineering philosophies guiding CSL's technology team.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {values.map((v, idx) => {
                  const Icon = v.icon;
                  return (
                    <div key={idx} className="bg-white border border-slate-200 p-6 sm:p-8 rounded-2xl hover:border-emerald-300 transition-all text-left space-y-4 shadow-sm group">
                      <div className="p-3 bg-slate-50 text-emerald-700 rounded-xl w-12 h-12 flex items-center justify-center border border-slate-200 transition-colors group-hover:bg-emerald-50">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h4 className="font-display font-bold text-lg text-slate-900">
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
