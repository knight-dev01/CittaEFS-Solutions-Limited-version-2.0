import { UserPlus, Settings2, FileCheck2, Rocket, CalendarDays, ArrowRight } from 'lucide-react';

export default function ImplementationRoadmap() {
  const steps = [
    {
      step: "01",
      title: "Profile Creation",
      subtitle: "Stage 1",
      desc: "Profile creation and automated Taxpayer Identification Number (TIN) validation inside CittaEFS.",
      icon: UserPlus,
      color: "border-l-4 border-emerald-500 bg-white"
    },
    {
      step: "02",
      title: "Field & Schema Mapping",
      subtitle: "Stage 2",
      desc: "Map Excel templates or ERP fields to the unified CittaEFS schema.",
      icon: Settings2,
      color: "border-l-4 border-emerald-600 bg-white"
    },
    {
      step: "03",
      title: "NRS Test Handshake",
      subtitle: "Stage 3",
      desc: "Send sample invoices to the NRS Test Environment to check validation compliance and response rates.",
      icon: FileCheck2,
      color: "border-l-4 border-emerald-400 bg-white"
    },
    {
      step: "04",
      title: "Production Activation",
      subtitle: "Stage 4",
      desc: "Activate Production Keys through an Accredited Access Point Partner (APP) for live secure transmission.",
      icon: Rocket,
      color: "border-l-4 border-emerald-700 bg-white"
    }
  ];

  return (
    <section className="py-12 sm:py-24 bg-slate-50 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12 sm:mb-20 gap-4 sm:gap-6">
          <span className="inline-block font-mono text-xs uppercase tracking-widest text-emerald-800 font-bold bg-emerald-100/60 px-3.5 py-1.5 rounded-full border border-emerald-200">
            05. Deployment Timeline
          </span>
          <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
            Seamless Implementation in 5–10 Business Days
          </h2>
          <p className="text-slate-600 text-xs sm:text-base leading-relaxed">
            Deploying compliance middleware should not exhaust your company resources. Our standardized onboarding protocol guarantees rapid deployment without ERP disruption.
          </p>
        </div>

        {/* Timeline Stepper Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative">
          {/* Horizontal connecting vector line for desktop layout */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-200 -translate-y-12 hidden lg:block z-0" />

          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index} 
                className={`relative z-10 p-6 rounded-2xl border border-slate-200 shadow-sm transition-all duration-300 flex flex-col justify-between ${item.color}`}
              >
                <div>
                  {/* Step bubble */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-3xl font-extrabold text-emerald-500/20">
                      {item.step}
                    </span>
                    <div className="p-2.5 bg-white rounded-xl shadow-sm border border-slate-100 text-emerald-700">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    {item.subtitle}
                  </span>

                  <h3 className="font-display text-lg font-bold text-slate-900 mb-2.5">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Arrow connector decoration */}
                {index < 3 && (
                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-emerald-600">
                    <span>Next step</span>
                    <ArrowRight className="w-4 h-4 animate-pulse" />
                  </div>
                )}
                {index === 3 && (
                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-emerald-700">
                    <span>100% Compliant</span>
                    <Rocket className="w-4 h-4 text-emerald-600 animate-bounce" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* timeline footnote banner */}
        <div className="mt-16 bg-gradient-to-r from-slate-950 via-navy-medium to-slate-900 border border-emerald-500/20 rounded-2xl p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-lg">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-400 border border-emerald-500/20">
              <CalendarDays className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h4 className="font-display font-semibold text-base">Need a customized integration blueprint?</h4>
              <p className="text-xs sm:text-sm text-slate-300">Our engineers provide free technical mapping audits for major ERP systems.</p>
            </div>
          </div>
          <button 
            onClick={() => {
              const element = document.getElementById('contact-section');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold tracking-wide text-white bg-emerald-600 hover:bg-emerald-500 transition-all whitespace-nowrap cursor-pointer"
          >
            Schedule Integration Audit
          </button>
        </div>

      </div>
    </section>
  );
}
