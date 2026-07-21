import React from 'react';

export default function PartnerLogos() {
  const partners = [
    { 
      name: "Adron Homes", 
      desc: "Real Estate & Housing Infrastructure", 
      logo: "https://i0.wp.com/gmposts.com/wp-content/uploads/2016/07/adron.jpg?fit=225%2C225&ssl=1", 
      logoClass: "h-9 w-auto max-h-full object-contain"
    },
    { 
      name: "NRS", 
      desc: "National Revenue Service Compliance", 
      logo: "https://tse1.mm.bing.net/th/id/OIP.b7065cgfTM6OrK5-h6t_QwHaDg?r=0&rs=1&pid=ImgDetMain&o=7&rm=3", 
      logoClass: "h-8 w-auto max-h-full object-contain"
    },
    { 
      name: "Coswals Structures Limited", 
      desc: "Civil Engineering & Heavy Logistics", 
      logo: "https://coswal.com.ng/wp-content/uploads/2026/04/logo.svg", 
      logoClass: "h-9 w-auto max-h-full object-contain"
    },
    { 
      name: "Sety.io", 
      desc: "Emergency Response & Safety Protocols", 
      logo: "https://www.sety.io/assets/img/logo.svg", 
      logoClass: "h-8 w-auto max-h-full object-contain" 
    },
    { 
      name: "Scarlet and Snow", 
      desc: "E-commerce & Smart Inventory Orchestration", 
      logo: "https://scarletandsnow.com/wp-content/uploads/2024/10/Sands-Main-BK.png", 
      logoClass: "h-9 w-auto max-h-full object-contain"
    },
    {
      name: "West Metro",
      desc: "Urban Mass Transit & Smart Mobility Integration",
      logo: "https://westmetro.ng/assets/images/logo-dark.png",
      logoClass: "h-9 w-auto max-h-full object-contain"
    },
    {
      name: "Redeemers High School",
      desc: "Educational Administration & Multi-Campus Operations",
      logo: "https://redeemershighschool.com/Images/RHS%20Logo.png",
      logoClass: "h-10 w-auto max-h-full object-contain"
    }
  ];

  // Duplicate for infinite scroll
  const scrollList = [...partners, ...partners, ...partners, ...partners];

  return (
    <section className="py-20 bg-slate-50 border-t border-b border-slate-200/60 overflow-hidden relative select-none">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-25%); }
        }
        .animate-marquee-loop {
          display: flex;
          width: max-content;
          animation: marquee 32s linear infinite;
        }
        .animate-marquee-loop:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center space-y-3">
        <span className="inline-block text-[10px] font-mono font-extrabold uppercase tracking-widest text-[#2582ff] bg-blue-100/60 px-3 py-1 rounded-full border border-blue-200/50">
          Trusted by Leaders
        </span>
        <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Active Client Portfolio & Integrations
        </h3>
        <p className="text-slate-500 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
          CSL partners with forward-thinking enterprises, educational institutions, and government compliance channels to power modern transactional environments.
        </p>
      </div>

      <div className="relative w-full overflow-hidden flex items-center">
        {/* Shadow overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-l from-slate-50 via-slate-50/80 to-transparent z-10 pointer-events-none" />

        {/* Marquee Track */}
        <div className="animate-marquee-loop flex items-center gap-6 sm:gap-8">
          {scrollList.map((partner, index) => {
            return (
              <div 
                key={index}
                className="flex items-center space-x-4 bg-white border border-slate-200 rounded-2xl py-3.5 px-5.5 hover:border-[#2582ff]/30 hover:shadow-md transition-all duration-300 shrink-0 cursor-pointer group"
              >
                {/* Standardized white logo container box ensuring maximum visibility for both dark & light logos */}
                <div className="flex items-center justify-center w-28 h-14 p-2 bg-white rounded-xl border border-slate-100 shadow-inner group-hover:border-blue-100 transition-colors">
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
                  <span className="text-[10px] sm:text-xs font-mono text-slate-400 mt-1 block leading-normal line-clamp-1">
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
