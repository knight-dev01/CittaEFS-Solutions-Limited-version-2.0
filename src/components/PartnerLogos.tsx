import { 
  Database, Cloud, Settings2, Layers, Award, ShieldCheck, Workflow, Landmark 
} from 'lucide-react';

export default function PartnerLogos() {
  const partners = [
    { name: "SAP ERP Financials", desc: "Native Integration", icon: Database, accent: "text-slate-600 group-hover:text-emerald-600" },
    { name: "Oracle Cloud Fusion", desc: "Gold Partner Pipeline", icon: Cloud, accent: "text-slate-600 group-hover:text-emerald-600" },
    { name: "Microsoft Dynamics 365", desc: "Certified Connector", icon: Settings2, accent: "text-slate-600 group-hover:text-emerald-600" },
    { name: "Odoo Enterprise", desc: "Validated API Link", icon: Layers, accent: "text-slate-600 group-hover:text-emerald-600" },
    { name: "Sage Business Ledger", desc: "Direct Sync Channel", icon: Workflow, accent: "text-slate-600 group-hover:text-emerald-600" },
    { name: "Federal NRS Gateway", desc: "Accredited Access Point", icon: Award, accent: "text-slate-600 group-hover:text-emerald-600" },
    { name: "NDPA 2023 Audited", desc: "Data Privacy Seal", icon: ShieldCheck, accent: "text-slate-600 group-hover:text-emerald-600" },
    { name: "Central Clearing Hub", desc: "MBS Settlement", icon: Landmark, accent: "text-slate-600 group-hover:text-emerald-600" }
  ];

  // Duplicate for seamless infinite marquee scroll
  const scrollList = [...partners, ...partners];

  return (
    <section className="py-12 bg-slate-50 border-y border-slate-200/60 overflow-hidden relative select-none">
      {/* Inject custom CSS keyframes animation cleanly for self-contained, zero-config infinite scrolling */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-loop {
          display: flex;
          width: max-content;
          animation: marquee 30s linear infinite;
        }
        .animate-marquee-loop:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
        <p className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold">
          COMPATIBLE ERP ECOSYSTEM & LICENSED TRUST CHANNELS
        </p>
      </div>

      <div className="relative w-full overflow-hidden flex items-center">
        {/* Gradients fading out edges for a clean, high-production aesthetic */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

        {/* Scrolling track */}
        <div className="animate-marquee-loop flex items-center gap-6 sm:gap-8">
          {scrollList.map((partner, index) => {
            const Icon = partner.icon;
            return (
              <div 
                key={index}
                className="flex items-center space-x-3 bg-white border border-slate-200 rounded-2xl py-3.5 px-5 hover:border-emerald-300 hover:shadow-sm transition-all duration-300 shrink-0 cursor-pointer group"
              >
                <div className={`p-2 rounded-xl bg-slate-50 transition-colors group-hover:bg-emerald-50 ${partner.accent}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <h4 className="font-display font-bold text-xs sm:text-sm text-slate-800 group-hover:text-emerald-800 transition-colors leading-none">
                    {partner.name}
                  </h4>
                  <span className="text-[9px] sm:text-[10px] font-mono text-slate-400 mt-1 block">
                    {partner.desc}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
