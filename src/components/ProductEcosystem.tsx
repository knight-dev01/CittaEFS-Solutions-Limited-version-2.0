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
    <section className="py-20 sm:py-28 bg-slate-50 text-slate-800 relative overflow-hidden border-b border-slate-200">
      {/* Visual backdrop meshes */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-[#ff8e1a]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-[#2582ff]/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Block */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 sm:mb-24 gap-4">
          <span className="inline-block font-mono text-xs uppercase tracking-widest text-[#2582ff] font-bold bg-[#2582ff]/5 px-3.5 py-1.5 rounded-full border border-[#2582ff]/10">
            Enterprise Solutions Directory
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-none">
            The CSL Product Ecosystem
          </h2>
          <p className="text-slate-600 text-xs sm:text-base leading-relaxed">
            Consolidate and streamline your global operations. CSL develops mission-critical enterprise middleware, resource schedulers, ERP engines, and API bridges tailored for highly regulated markets.
          </p>
        </div>

        {/* Dynamic Bento-Style Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          
          {/* 1. ⭐ CITTAEFS (FLAGSHIP COMPLIANCE PLATFORM) - Spans 2 Columns on large screens */}
          <motion.div
            whileHover={{ y: -6, scale: 1.01 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => handleProductClick('cittaefs')}
            className="p-8 sm:p-10 rounded-3xl bg-slate-950 text-white border border-slate-800 lg:col-span-2 flex flex-col justify-between shadow-2xl relative select-none cursor-pointer group"
          >
            {/* Pulsing indicator */}
            <div className="absolute top-6 right-6 flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-[9px] font-mono font-bold uppercase text-emerald-400">FLAGSHIP MIDDLEWARE</span>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-3.5 pt-4 md:pt-0">
                <div className="p-3 bg-emerald-500/15 text-emerald-400 rounded-2xl">
                  <Cpu className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
                    CittaEFS
                  </h3>
                  <span className="block text-[10px] font-mono text-slate-400 tracking-widest uppercase">
                    Intelligent Compliance Gateway & Buffer
                  </span>
                </div>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed text-left max-w-2xl">
                The ultimate regulatory shield for enterprise corporations. CittaEFS operates as a high-speed, dynamic pre-clearance middleware that attaches directly to existing ERP ledgers. It automatically validates, signs, stamps, and clears 100% of outgoing B2B and B2C invoices against authorized national gateways in under 240 milliseconds.
              </p>

              {/* Tag metadata blocks */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2 text-left">
                <div className="bg-white/5 border border-white/5 p-3 rounded-xl">
                  <span className="text-slate-400 block uppercase text-[8px] tracking-wider font-mono">PRIMARY CAPABILITY</span>
                  <span className="text-white block font-semibold text-xs mt-1">TIN & Tax Pre-Validation</span>
                </div>
                <div className="bg-white/5 border border-white/5 p-3 rounded-xl">
                  <span className="text-slate-400 block uppercase text-[8px] tracking-wider font-mono">COMPATIBLE WITH</span>
                  <span className="text-white block font-semibold text-xs mt-1">SAP, Oracle, MS Dynamics, Odoo</span>
                </div>
                <div className="bg-white/5 border border-white/5 p-3 rounded-xl col-span-2 sm:col-span-1">
                  <span className="text-slate-400 block uppercase text-[8px] tracking-wider font-mono">TARGET REGION</span>
                  <span className="text-white block font-semibold text-xs mt-1">Nigeria MBS & NRS compliance</span>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-white/5 mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <span className="text-xs font-bold text-emerald-400 inline-flex items-center space-x-1.5 group-hover:underline">
                <span>Configure compliance bridge</span>
                <span className="font-mono">→</span>
              </span>
              <span className="text-[10px] font-mono text-slate-500">ISO-27001 SECURED & STAMPED</span>
            </div>
          </motion.div>

          {/* 2. CITTAMATRIX */}
          <ProductCard
            name="CittaMatrix"
            tagline="Core ERP ledger & operations"
            description="Consolidate multi-entity finances, asset management journals, and supply chain inventories under a single double-entry core ledger."
            badge="CORE ERP"
            capability="Asset & Ledger Orchestration"
            icon={Database}
            href="https://cittamatrix.com/"
            isBlue={true}
          />

          {/* 3. CITTAHOSPITALITYX */}
          <ProductCard
            name="CittaHospitalityX"
            tagline="PMS & lodging manager"
            description="Automate reservations, OTA channels sync, room inventory grids, guest experience apps, and folio billing on a unified hospitality dashboard."
            badge="HOSPITALITY"
            capability="PMS & Booking Operations"
            icon={Layers}
            href="https://cittahospitalityx.com/"
            isBlue={false}
          />

          {/* 4. CITTAPLANNERX */}
          <ProductCard
            name="CittaPlannerX"
            tagline="Gantt timeline scheduler"
            description="Surgically schedule civil engineering, construction pipelines, teammate allocations, and critical paths via fluid timeline dependency modules."
            badge="ADVANCED PLANNING"
            capability="Resource scheduling & Gantt"
            icon={FileCheck}
            href="https://cittaplannerx.com/"
            isBlue={true}
          />

          {/* 5. CITTANEXUS */}
          <ProductCard
            name="CittaNexus"
            tagline="API hub & webhook matrix"
            description="Connect your central database to international banking rails, logistics providers, and standard SaaS products with pre-configured secure webhooks."
            badge="API GATEWAY"
            capability="E2E encrypted integrations"
            icon={Cpu}
            href="https://cittanexus.com/"
            isBlue={false}
          />

        </div>

      </div>
    </section>
  );
}
