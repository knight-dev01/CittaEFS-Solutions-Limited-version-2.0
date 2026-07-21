import { Database, Cpu, Landmark, Layers, FileCheck, ArrowRight, Star } from 'lucide-react';
import { motion } from 'motion/react';
import { PageId } from '../types';
import { ProductCard } from './EnterpriseVisuals';

interface ProductEcosystemProps {
  setCurrentPage: (page: PageId) => void;
}

export default function ProductEcosystem({ setCurrentPage }: ProductEcosystemProps) {
  const handleProductClick = (id: PageId) => {
    setCurrentPage(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="products" className="py-20 sm:py-28 bg-slate-50 text-slate-800 relative overflow-hidden border-b border-slate-200">
      {/* Visual backdrop meshes */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-[#ff8e1a]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-[#2582ff]/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Block */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 sm:mb-24 gap-4">
          <span className="inline-block font-mono text-xs uppercase tracking-widest text-[#2582ff] font-bold bg-[#2582ff]/5 px-3.5 py-1.5 rounded-full border border-[#2582ff]/10">
            Section 04. Enterprise Solutions
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-none">
            Our Enterprise Solutions
          </h2>
          <p className="text-slate-600 text-xs sm:text-base leading-relaxed">
            CSL unifies specialized software portfolios that solve real-world enterprise requirements. Explore our core systems designed to inspire confidence and accelerate operational capabilities.
          </p>
        </div>

        {/* Dynamic Bento-Style Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          
          {/* 1. ⭐ CITTAEFS (FLAGSHIP COMPLIANCE PLATFORM) - Spans 2 Columns on large screens */}
          <motion.div
            whileHover={{ y: -6, scale: 1.01 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => {
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="p-8 sm:p-10 rounded-3xl bg-slate-950 text-white border border-slate-800 lg:col-span-2 flex flex-col justify-between shadow-2xl relative select-none cursor-pointer group text-left"
          >
            {/* Pulsing indicator */}
            <div className="absolute top-6 right-6 flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
              <span className="h-1.5 w-1.5 rounded-full bg-[#2582ff] animate-ping" />
              <span className="text-[9px] font-mono font-bold uppercase text-[#2582ff]">FLAGSHIP SYSTEM</span>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-3.5 pt-4 md:pt-0">
                <div className="p-3 bg-[#2582ff]/10 text-[#2582ff] rounded-2xl">
                  <Cpu className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
                    CittaEFS
                  </h3>
                  <span className="block text-[10px] font-mono text-slate-400 tracking-widest uppercase">
                    Intelligent Electronic Fiscal System
                  </span>
                </div>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed text-left max-w-2xl">
                An intelligent, non-intrusive electronic fiscal system that connects enterprise ERPs with National Revenue Service compliance requirements seamlessly.
              </p>

              <div className="pt-4 border-t border-white/5">
                <span className="block text-[8px] font-mono uppercase tracking-wider text-slate-400 mb-1">Business Value</span>
                <p className="text-emerald-400 text-xs sm:text-sm font-semibold">
                  Minimizes regulatory audit risks and eliminates non-compliance penalties with zero disruption to daily transaction velocity.
                </p>
              </div>
            </div>

            <div className="pt-8 mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <span className="text-xs font-bold text-[#2582ff] inline-flex items-center space-x-1.5 group-hover:underline">
                <span>Request details</span>
                <span className="font-mono">→</span>
              </span>
              <span className="text-[10px] font-mono text-slate-500">SECURE & ARCHITECTED</span>
            </div>
          </motion.div>

          {/* 2. CITTAMATRIX */}
          <ProductCard
            name="CittaMatrix"
            tagline="Enterprise operational analytics"
            description="An enterprise operational intelligence platform that transforms raw business metrics into unified, real-time insights."
            businessValue="Drives strategic alignment and speeds up decision-making cycles across multi-entity operations."
            badge="BUSINESS INTELLIGENCE"
            capability="Decision & Analytics Core"
            icon={Database}
            href="https://cittamatrix.com/"
            isBlue={true}
          />

          {/* 3. CITTAHOSPITALITYX */}
          <ProductCard
            name="CittaHospitalityX"
            tagline="Enterprise hospitality manager"
            description="A unified hospitality management platform designed to automate guest folios, room allocations, and channel distribution."
            businessValue="Boosts front-desk productivity and maximizes accommodation yield automatically."
            badge="HOSPITALITY SYSTEM"
            capability="Property & Folio Management"
            icon={Layers}
            href="https://cittahospitalityx.com/"
            isBlue={false}
          />

          {/* 4. CITTAPLANNERX */}
          <ProductCard
            name="CittaPlannerX"
            tagline="Intelligent scheduling platform"
            description="An advanced resource scheduling and timeline tracking platform powered by real-time critical path and Gantt levelers."
            businessValue="Cuts scheduling overheads, prevents resource overallocation, and guarantees on-time project deliveries."
            badge="ADVANCED SCHEDULER"
            capability="Timeline & Resource Gantt"
            icon={FileCheck}
            href="https://cittaplannerx.com/"
            isBlue={true}
          />

          {/* 5. CITTANEXUS */}
          <ProductCard
            name="CittaNexus"
            tagline="API connectivity gateway"
            description="A secure API orchestration and webhook synchronization gateway connecting legacy databases with external corporate endpoints."
            businessValue="Accelerates third-party app integration speeds by 10x while protecting core database integrity."
            badge="API MATRIX GATEWAY"
            capability="Webhook & System Bridges"
            icon={Cpu}
            href="https://cittanexus.com/"
            isBlue={false}
          />

        </div>

      </div>
    </section>
  );
}
