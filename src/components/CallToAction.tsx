import { motion } from 'motion/react';
import { ArrowRight, MessageSquare, PhoneCall, Calendar } from 'lucide-react';

export default function CallToAction() {
  const handleScrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 sm:py-24 bg-slate-900 text-white relative overflow-hidden border-t border-b border-slate-950">
      
      {/* Visual blueprint background grid */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      {/* Decorative bright gradient halos */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-r from-[#2582ff]/20 to-[#ff8e1a]/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 px-3.5 py-1.5 bg-[#2582ff]/10 border border-[#2582ff]/20 rounded-full text-xs font-mono text-[#2582ff] tracking-wide"
          >
            <span className="h-2 w-2 rounded-full bg-[#2582ff] animate-pulse" />
            <span className="font-extrabold uppercase">Initiate Transformation</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="font-display text-3xl sm:text-5xl font-black tracking-tight leading-tight"
          >
            Ready to Partner with <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2582ff] via-slate-100 to-[#ff8e1a]">
              CittaERP Solutions Limited?
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto font-medium"
          >
            Take the next step toward streamlining your business workflows, simplifying compliance audits, and scaling operations seamlessly on a secure enterprise platform.
          </motion.p>

          {/* Action Cards Row */}
          <div className="grid sm:grid-cols-3 gap-6 pt-4 text-left max-w-3xl mx-auto">
            
            <motion.div 
              onClick={handleScrollToContact}
              whileHover={{ scale: 1.03, y: -2 }}
              className="p-6 bg-white/5 border border-white/10 rounded-3xl cursor-pointer hover:bg-white/10 hover:border-[#2582ff]/50 transition-all duration-300 flex flex-col justify-between h-44"
            >
              <div className="p-3 bg-blue-500/10 text-[#2582ff] border border-blue-500/20 rounded-2xl w-12 h-12 flex items-center justify-center">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-display font-bold text-sm text-white">Schedule Consultation</h4>
                <p className="text-slate-400 text-xs mt-1">Book a strategy session with our lead architects.</p>
              </div>
            </motion.div>

            <motion.div 
              onClick={handleScrollToContact}
              whileHover={{ scale: 1.03, y: -2 }}
              className="p-6 bg-white/5 border border-white/10 rounded-3xl cursor-pointer hover:bg-white/10 hover:border-orange-500/50 transition-all duration-300 flex flex-col justify-between h-44"
            >
              <div className="p-3 bg-orange-500/10 text-[#ff8e1a] border border-orange-500/20 rounded-2xl w-12 h-12 flex items-center justify-center">
                <ArrowRight className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-display font-bold text-sm text-white">Request Demo</h4>
                <p className="text-slate-400 text-xs mt-1">Get an interactive product walkthrough.</p>
              </div>
            </motion.div>

            <motion.div 
              onClick={handleScrollToContact}
              whileHover={{ scale: 1.03, y: -2 }}
              className="p-6 bg-white/5 border border-white/10 rounded-3xl cursor-pointer hover:bg-white/10 hover:border-teal-500/50 transition-all duration-300 flex flex-col justify-between h-44"
            >
              <div className="p-3 bg-teal-500/10 text-teal-400 border border-teal-500/20 rounded-2xl w-12 h-12 flex items-center justify-center">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-display font-bold text-sm text-white">Speak with Our Team</h4>
                <p className="text-slate-400 text-xs mt-1">Chat directly with a solutions consultant.</p>
              </div>
            </motion.div>

          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="pt-6"
          >
            <button
              onClick={handleScrollToContact}
              className="px-8 py-4 rounded-full text-xs sm:text-sm font-bold bg-[#2582ff] hover:bg-[#1a73e8] transition-all hover:scale-105 duration-300 shadow-xl shadow-[#2582ff]/20 cursor-pointer inline-flex items-center space-x-2"
            >
              <span>Connect with CSL Solutions Group</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
