import { motion } from 'motion/react';
import { Sparkles, Globe, Shield, RefreshCw } from 'lucide-react';

export default function VisionSection() {
  return (
    <section id="vision" className="py-20 sm:py-28 bg-slate-900 text-white relative overflow-hidden border-b border-slate-950">
      
      {/* Dynamic graphic backdrops (stars / particles) */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:3rem_3rem]" />
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#2582ff]/8 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute -right-20 -bottom-20 w-[400px] h-[400px] bg-[#ff8e1a]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-12 items-center text-left">
          
          {/* Narrative Content Column on Left (Spans 7 Columns) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 bg-[#2582ff]/10 border border-[#2582ff]/20 rounded-full text-[11px] font-mono text-[#2582ff] tracking-wide"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span className="font-extrabold uppercase">Section 08. Corporate Outlook</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight"
            >
              Vision for the Future
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-slate-300 text-sm sm:text-base leading-relaxed font-medium"
            >
              <strong>CittaERP Solutions Limited (CSL)</strong> is committed to engineering the future of enterprise software and sustainable digital transformation. As global regulatory requirements shift and data flows expand, we build systems that enable institutions to grow safely, transparently, and continuously.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-slate-400 text-xs sm:text-sm leading-relaxed"
            >
              We look beyond basic connectivity to build true resilience. CSL's ongoing research and development in cloud-native ledger protection, high-throughput message caching, and specialized industry operational hubs ensure that our partners remain competitive, agile, and aligned with dynamic international compliance guidelines.
            </motion.p>

            {/* CTA to get involved */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="pt-4"
            >
              <a
                href="#contact"
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-full text-xs font-bold text-white bg-[#2582ff] hover:bg-[#1a73e8] hover:scale-105 transition-all duration-300 shadow-lg shadow-[#2582ff]/20"
              >
                <span>Partner With CSL</span>
                <span>→</span>
              </a>
            </motion.div>
          </div>

          {/* Graphical/Illustrative Bento Panel on Right (Spans 5 Columns) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            <div className="p-6 bg-white/5 border border-white/5 rounded-2xl flex flex-col justify-between h-44 text-left">
              <div className="p-2.5 bg-white/5 border border-white/10 rounded-xl text-[#2582ff] w-10 h-10 flex items-center justify-center">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-display font-bold text-sm text-white">Global Scalability</h4>
                <p className="text-slate-400 text-[11px] leading-relaxed mt-1">Deploying multi-region middleware architectures to accommodate cross-border transactions.</p>
              </div>
            </div>

            <div className="p-6 bg-white/5 border border-white/5 rounded-2xl flex flex-col justify-between h-44 text-left">
              <div className="p-2.5 bg-white/5 border border-white/10 rounded-xl text-[#ff8e1a] w-10 h-10 flex items-center justify-center">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-display font-bold text-sm text-white">Compliance Shields</h4>
                <p className="text-slate-400 text-[11px] leading-relaxed mt-1">Guarding corporate databases from changing tax requirements with absolute zero downtime.</p>
              </div>
            </div>

            <div className="p-6 bg-white/5 border border-white/5 rounded-2xl flex flex-col justify-between h-44 text-left sm:col-span-2">
              <div className="p-2.5 bg-white/5 border border-white/10 rounded-xl text-emerald-400 w-10 h-10 flex items-center justify-center">
                <RefreshCw className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-display font-bold text-sm text-white">Sustainable Systems</h4>
                <p className="text-slate-400 text-[11px] leading-relaxed mt-1">Fostering digital automation to reduce paper waste, manual billing error overheads, and disconnected processing times.</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
