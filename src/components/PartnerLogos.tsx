import React from 'react';

export default function PartnerLogos() {
  const partners = [
    { 
      name: "Adron Homes", 
      desc: "Real Estate & Housing Infrastructure", 
      logo: "https://i0.wp.com/gmposts.com/wp-content/uploads/2016/07/adron.jpg?fit=225%2C225&ssl=1", 
      logoClass: "h-9 w-9 rounded-lg object-contain border border-slate-100"
    },
    { 
      name: "NRS", 
      desc: "National Revenue Service Compliance", 
      logo: "https://tse1.mm.bing.net/th/id/OIP.b7065cgfTM6OrK5-h6t_QwHaDg?r=0&rs=1&pid=ImgDetMain&o=7&rm=3", 
      logoClass: "h-8 w-20 object-contain"
    },
    { 
      name: "Coswals Structures Limited", 
      desc: "Civil Engineering & Heavy Logistics", 
      logo: "https://coswal.com.ng/wp-content/uploads/2026/04/logo.svg", 
      logoClass: "h-8 w-24 object-contain"
    },
    { 
      name: "Sety.io", 
      desc: "Emergency Response & Safety Protocols", 
      logo: "https://www.sety.io/assets/img/logo.svg", 
      logoClass: "h-8 w-20 object-contain bg-slate-900 p-1.5 rounded-lg border border-slate-800" 
    },
    { 
      name: "Scarlet and Snow", 
      desc: "E-commerce & Smart Inventory Orchestration", 
      logo: "https://scarletandsnow.com/wp-content/uploads/2024/10/Sands-Main-BK.png", 
      logoClass: "h-8 w-24 object-contain"
    }
  ];

  // Duplicate multiple times for a seamless, wide infinite marquee scroll on large monitors
  const scrollList = [...partners, ...partners, ...partners, ...partners];

  return (
    <section className="py-12 bg-slate-50 border-y border-slate-200/60 overflow-hidden relative select-none">
      {/* Inject custom CSS keyframes animation cleanly for self-contained, zero-config infinite scrolling */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-25%); }
        }
        .animate-marquee-loop {
          display: flex;
          width: max-content;
          animation: marquee 35s linear infinite;
        }
        .animate-marquee-loop:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
        <p className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold">
          CSL ACTIVE CLIENT PORTFOLIO & REGULATORY INTEGRATION CHANNELS
        </p>
      </div>

      <div className="relative w-full overflow-hidden flex items-center">
        {/* Gradients fading out edges for a clean, high-production aesthetic */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

        {/* Scrolling track */}
        <div className="animate-marquee-loop flex items-center gap-6 sm:gap-8">
          {scrollList.map((partner, index) => {
            return (
              <div 
                key={index}
                className="flex items-center space-x-3.5 bg-white border border-slate-200 rounded-2xl py-3 px-5 hover:border-[#2582ff]/40 hover:shadow-sm transition-all duration-300 shrink-0 cursor-pointer group"
              >
                <div className="flex items-center justify-center p-1 bg-slate-50 rounded-xl transition-colors group-hover:bg-[#2582ff]/5">
                  <img 
                    src={partner.logo} 
                    alt={`${partner.name} logo`} 
                    className={partner.logoClass}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>
                <div className="text-left max-w-[200px]">
                  <h4 className="font-display font-bold text-xs sm:text-sm text-slate-800 group-hover:text-[#2582ff] transition-colors leading-tight">
                    {partner.name}
                  </h4>
                  <span className="text-[9px] sm:text-[10px] font-mono text-slate-400 mt-0.5 block leading-normal line-clamp-1">
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
