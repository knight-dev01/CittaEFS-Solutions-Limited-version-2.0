import { motion } from 'motion/react';
import { Sparkles, Leaf, Heart, TrendingUp, Zap } from 'lucide-react';

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
    <section id="why-we-exist" className="py-20 sm:py-28 bg-white text-slate-800 relative overflow-hidden border-b border-slate-200">
      {/* Background visual blobs */}
      <div className="absolute top-1/4 left-10 w-[450px] h-[450px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[450px] h-[450px] bg-orange-500/4 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 sm:mb-24 gap-4">
          <span className="inline-flex items-center space-x-2 px-3.5 py-1.5 bg-blue-50 border border-blue-100 rounded-full text-xs font-mono text-[#2582ff] font-bold">
            <Sparkles className="w-3.5 h-3.5 mr-1" />
            <span>Our Purpose</span>
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Why We Exist
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl font-medium">
            At CSL, we believe that enterprise software is not just about servers, pipelines, or endpoints. It is about enabling human capability and fostering organizational growth.
          </p>
        </div>

        {/* Emotion & Narrative Row */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6 text-left"
          >
            <div className="inline-flex p-3.5 bg-rose-50 border border-rose-100 text-rose-600 rounded-2xl">
              <Heart className="w-6 h-6 fill-rose-600" />
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Bridging Tech & Humanity
            </h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We started CSL with a simple insight: corporate leaders should never feel restricted by the systems they use to run their businesses. 
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Our engineering values focus entirely on stripping away frustration. We craft solutions that solve heavy administrative problems gracefully, creating quiet operational peace of mind across your entire institution.
            </p>
          </motion.div>

          {/* Pillars List */}
          <div className="lg:col-span-7 space-y-6 w-full text-left">
            {pillars.map((pil, idx) => {
              const Icon = pil.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 sm:p-8 rounded-3xl bg-slate-50 hover:bg-white border border-slate-200 hover:border-blue-200 hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row gap-5 items-start"
                >
                  <div className={`p-3 rounded-2xl bg-gradient-to-tr ${pil.color} ${pil.iconColor} shrink-0`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-display font-bold text-base sm:text-lg text-slate-900">
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

      </div>
    </section>
  );
}
