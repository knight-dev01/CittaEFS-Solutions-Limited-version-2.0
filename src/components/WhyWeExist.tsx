import { motion } from 'motion/react';
import { Sparkles, Leaf, Heart, TrendingUp, Zap, Building2, GitFork, ArrowDown, Layers, Cpu, Database, FileCheck, ExternalLink, ShieldCheck } from 'lucide-react';
import cslLogo from '../logo.png';
import { Floating3DObjects } from './ThreeDimensionalFlow';

export default function WhyWeExist() {
  const pillars = [
    {
      title: "Technology Should Simplify Complexity",
      desc: "Enterprise software shouldn't require massive operational overhead or constant manual intervention. We design solutions that quietly absorb regulatory complexity, leaving your team free to focus on what matters most.",
      icon: Leaf,
      color: "from-blue-500/10 to-emerald-500/10",
      iconColor: "text-blue-600"
    },
    {
      title: "Software Must Create Measurable Value",
      desc: "We don't believe in software for software's sake. Every line of code CSL writes is engineered to deliver immediate business value—whether by reducing compliance risk, boosting efficiency, or driving digital transformation.",
      icon: TrendingUp,
      color: "from-orange-500/10 to-amber-500/10",
      iconColor: "text-orange-600"
    },
    {
      title: "Solutions That Evolve With You",
      desc: "Organizations are living ecosystems that grow, adapt, and expand. You deserve a technology partner that builds highly responsive, modular business platforms that scale with you, year after year.",
      icon: Zap,
      color: "from-indigo-500/10 to-purple-500/10",
      iconColor: "text-indigo-600"
    }
  ];

  return (
    <section id="why-we-exist" className="py-16 sm:py-24 lg:py-28 bg-white text-slate-800 relative overflow-hidden border-b border-slate-200">
      {/* Floating 3D Ambient Shapes */}
      <Floating3DObjects count={4} />

      {/* Background visual blobs */}
      <div className="absolute top-1/4 left-10 w-[450px] h-[450px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[450px] h-[450px] bg-orange-500/4 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12 sm:mb-16 gap-3 sm:gap-4">
          <span className="inline-flex items-center space-x-2 px-3.5 py-1.5 bg-blue-50 border border-blue-100 rounded-full text-xs font-mono text-[#2582ff] font-bold">
            <Sparkles className="w-3.5 h-3.5 mr-1" />
            <span>Our Purpose</span>
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Why We Exist
          </h2>
          <p className="text-slate-600 text-xs sm:text-base leading-relaxed max-w-2xl font-medium">
            At CSL, we believe that enterprise software is not just about servers, pipelines, or endpoints. It is about enabling human capability and fostering organizational growth.
          </p>
        </div>

        {/* Emotion & Narrative Row */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-5 text-left"
          >
            <div className="inline-flex p-3.5 bg-rose-50 border border-rose-100 text-rose-600 rounded-2xl shadow-xs">
              <Heart className="w-6 h-6 fill-rose-600 animate-pulse" />
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Bridging Tech &amp; Humanity
            </h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We started CSL with a simple insight: corporate leaders should never feel restricted by the systems they use to run their businesses. 
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              As the enterprise software division of <strong>CittaNuvola</strong>, our engineering values focus entirely on stripping away frustration. We craft solutions that solve heavy administrative problems gracefully, creating quiet operational peace of mind across your entire institution.
            </p>
          </motion.div>

          {/* Pillars List - Crisp, sharp, no blur */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5 w-full text-left">
            {pillars.map((pil, idx) => {
              const Icon = pil.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  viewport={{ once: true }}
                  className="p-5 sm:p-7 rounded-2xl bg-slate-50 hover:bg-white border border-slate-200/90 hover:border-blue-200 hover:shadow-lg transition-all duration-200 flex flex-col sm:flex-row gap-4 sm:gap-5 items-start shadow-xs group"
                >
                  <div className={`p-3 rounded-2xl bg-gradient-to-tr ${pil.color} ${pil.iconColor} shrink-0 transition-transform duration-300 group-hover:scale-105`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="space-y-1.5">
                    <h4 className="font-display font-bold text-base sm:text-lg text-slate-900 group-hover:text-[#2582ff] transition-colors">
                      {pil.title}
                    </h4>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {pil.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Parent-Child Corporate & Product Ecosystem Hierarchy Visualizer */}
        <div className="mt-16 sm:mt-20 pt-10 border-t border-slate-200">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-8 sm:mb-10 space-y-2.5">
            <span className="inline-flex items-center space-x-2 text-[10px] font-mono uppercase tracking-widest text-[#2582ff] font-extrabold bg-[#2582ff]/5 px-3 py-1 rounded-full border border-[#2582ff]/10">
              <GitFork className="w-3.5 h-3.5" />
              <span>Corporate Architecture &amp; Lineage</span>
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Parent Entity &amp; Operating Subsidiary Hierarchy
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Understand the institutional ownership model powering CSL’s engineering reserves, capital backing, and global enterprise product deployments.
            </p>
          </div>

          <div className="bg-slate-950 rounded-2xl sm:rounded-3xl p-4 sm:p-8 lg:p-10 border border-slate-800 shadow-2xl relative overflow-hidden text-left text-white space-y-6 sm:space-y-8">
            
            {/* Visual background grid */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:2rem_2rem]" />
            <div className="absolute top-0 right-0 w-80 sm:w-96 h-80 sm:h-96 bg-[#2582ff]/10 blur-[100px] rounded-full pointer-events-none" />

            {/* LEVEL 1: PARENT CONGLOMERATE NODE */}
            <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 sm:p-6 bg-slate-900/90 border border-slate-800 rounded-xl sm:rounded-2xl gap-4 sm:gap-6">
              <div className="flex items-center space-x-3.5 sm:space-x-4 w-full sm:w-auto">
                <div className="p-2 sm:p-2.5 bg-white rounded-xl shrink-0 shadow-sm flex items-center justify-center">
                  <img 
                    src="https://cittanuvola.com/images/Cittanuvola%20logo.png" 
                    alt="CittaNuvola Logo" 
                    className="h-6 sm:h-8 w-auto object-contain"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = 'none';
                    }}
                  />
                </div>
                <div className="space-y-0.5">
                  <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-[#2582ff] bg-[#2582ff]/10 px-2 py-0.5 rounded border border-[#2582ff]/20 inline-block">
                    LEVEL 1 • PARENT ENTITY
                  </span>
                  <h4 className="font-display text-lg sm:text-xl font-bold text-white leading-tight">
                    CittaNuvola
                  </h4>
                  <p className="text-slate-400 text-xs hidden md:block max-w-lg">
                    Global technology holding entity providing foundational capital reserves, international regulatory governance, and shared R&amp;D infrastructure.
                  </p>
                </div>
              </div>

              <div className="w-full sm:w-auto shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-800">
                <a 
                  href="https://www.cittanuvola.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 sm:px-4 sm:py-2.5 bg-white/10 hover:bg-white/20 text-white font-mono text-xs font-bold rounded-xl border border-white/10 transition-all flex items-center space-x-2 justify-center w-full sm:w-auto"
                >
                  <span>Visit Parent Domain</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* CONNECTOR LINE DOWNWARDS TO CHILD SUBSIDIARY */}
            <div className="relative z-10 flex flex-col items-center justify-center my-1 sm:my-2">
              <div className="w-0.5 h-6 sm:h-8 bg-gradient-to-b from-[#2582ff] to-emerald-400 opacity-80" />
              <div className="flex items-center space-x-2 text-[9px] font-mono text-emerald-400 font-bold uppercase tracking-widest bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full my-1 text-center">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Parent-Subsidiary Direct Lineage</span>
              </div>
              <div className="w-0.5 h-6 sm:h-8 bg-gradient-to-b from-emerald-400 to-[#2582ff] opacity-80" />
            </div>

            {/* LEVEL 2: CHILD OPERATING SUBSIDIARY NODE */}
            <div className="relative z-10 p-4 sm:p-6 bg-gradient-to-br from-slate-900 to-slate-950 border border-[#2582ff]/40 rounded-xl sm:rounded-2xl shadow-lg space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
                <div className="flex items-center space-x-3.5">
                  <div className="p-2 sm:p-2.5 bg-white rounded-xl shrink-0 shadow-sm flex items-center justify-center">
                    <img 
                      src={cslLogo} 
                      alt="CSL Logo" 
                      className="h-6 sm:h-8 w-auto object-contain"
                    />
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 inline-block">
                      LEVEL 2 • OPERATING SUBSIDIARY
                    </span>
                    <h4 className="font-display text-lg sm:text-2xl font-extrabold text-white">
                      CittaSL (CSL)
                    </h4>
                    <span className="text-slate-400 text-xs block">(Citta ERP Solutions Limited)</span>
                  </div>
                </div>

                <div className="inline-flex items-center space-x-1.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-mono font-semibold px-2.5 py-1 rounded-lg self-start sm:self-auto">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Licensed Enterprise Software Arm</span>
                </div>
              </div>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                CSL operates as the specialized software division under CittaNuvola, designing, deploying, and supporting enterprise middleware, fiscal clearance portals, and operational intelligence suites across major corporate institutions.
              </p>

              {/* LEVEL 3: CHILD PRODUCT ECOSYSTEM NODES */}
              <div className="pt-2">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block mb-3 font-semibold">
                  CSL Operating Product Units (Level 3):
                </span>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5 sm:gap-3">
                  <a href="#products" className="p-3.5 bg-slate-900 border border-slate-800 hover:border-[#2582ff] rounded-xl transition-all group block">
                    <span className="text-[9px] font-mono text-[#2582ff] font-bold block mb-0.5">FLAGSHIP</span>
                    <h5 className="font-bold text-xs sm:text-sm text-white group-hover:text-[#2582ff]">CittaEFS</h5>
                    <p className="text-[10px] text-slate-400 mt-1">Fiscal Compliance Middleware</p>
                  </a>

                  <a href="#products" className="p-3.5 bg-slate-900 border border-slate-800 hover:border-emerald-500 rounded-xl transition-all group block">
                    <span className="text-[9px] font-mono text-emerald-400 font-bold block mb-0.5">ANALYTICS</span>
                    <h5 className="font-bold text-xs sm:text-sm text-white group-hover:text-emerald-400">CittaMatrix</h5>
                    <p className="text-[10px] text-slate-400 mt-1">Operational Intelligence</p>
                  </a>

                  <a href="#products" className="p-3.5 bg-slate-900 border border-slate-800 hover:border-amber-500 rounded-xl transition-all group block">
                    <span className="text-[9px] font-mono text-amber-400 font-bold block mb-0.5">HOSPITALITY</span>
                    <h5 className="font-bold text-xs sm:text-sm text-white group-hover:text-amber-400">CittaHospitalityX</h5>
                    <p className="text-[10px] text-slate-400 mt-1">Folio &amp; Room System</p>
                  </a>

                  <a href="#products" className="p-3.5 bg-slate-900 border border-slate-800 hover:border-blue-400 rounded-xl transition-all group block">
                    <span className="text-[9px] font-mono text-blue-400 font-bold block mb-0.5">SCHEDULING</span>
                    <h5 className="font-bold text-xs sm:text-sm text-white group-hover:text-blue-400">CittaPlannerX</h5>
                    <p className="text-[10px] text-slate-400 mt-1">Timeline &amp; Resource Leveler</p>
                  </a>

                  <a href="#products" className="p-3.5 bg-slate-900 border border-slate-800 hover:border-purple-400 rounded-xl transition-all group block">
                    <span className="text-[9px] font-mono text-purple-400 font-bold block mb-0.5">GATEWAY</span>
                    <h5 className="font-bold text-xs sm:text-sm text-white group-hover:text-purple-400">CittaNexus</h5>
                    <p className="text-[10px] text-slate-400 mt-1">API &amp; Webhook Matrix</p>
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
