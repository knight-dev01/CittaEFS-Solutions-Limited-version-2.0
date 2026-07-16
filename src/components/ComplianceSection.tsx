import { 
  ShieldCheck, Lock, Award, Cpu, QrCode, History, Calculator, ShieldAlert 
} from 'lucide-react';

export default function ComplianceSection() {
  const certifications = [
    {
      title: "NRS Ready",
      badge: "MBS PRE-CLEARED",
      desc: "Fully optimized and validated against direct National Revenue Service (NRS) Merchant-Buyer Solution handshake protocols.",
      icon: ShieldCheck,
      status: "Verified Gateway"
    },
    {
      title: "Secure APIs",
      badge: "TLS 1.3 / RESTFUL",
      desc: "Military-grade end-to-end transport layer encryption secures custom ERP data pipelines from interception.",
      icon: Lock,
      status: "Encrypted"
    },
    {
      title: "Digital Signatures",
      badge: "SHA-256 SEAL",
      desc: "Every invoice output is cryptographically signed with secure certificate envelopes to guarantee authenticity.",
      icon: Award,
      status: "Certified"
    },
    {
      title: "IRN Generation",
      badge: "INSTANT INVOICE REF",
      desc: "Automatic assignment of unique Invoice Reference Numbers synchronized in real time with clearance responses.",
      icon: Cpu,
      status: "Sub-Second"
    },
    {
      title: "QR Code Ready",
      badge: "HIGH-DENSITY SECURE",
      desc: "Constructs and embeds regulation-compliant, scannable QR stamps carrying official state validation keys.",
      icon: QrCode,
      status: "Auto-Rendered"
    },
    {
      title: "Audit Trail",
      badge: "7-YEAR IMMUTABLE",
      desc: "Maintains a secure, compliant ledger of invoice transactions, credit notes, and telemetry in immutable archives.",
      icon: History,
      status: "Compliant"
    },
    {
      title: "VAT Validation",
      badge: "NTAA SECTION 23",
      desc: "Pre-tests mathematical computations against current Nigerian tax rules to block rounding rejections.",
      icon: Calculator,
      status: "Active Shield"
    },
    {
      title: "NDPA Awareness",
      badge: "DATA PRIVACY AUDITED",
      desc: "Designed from the ground up under strict compliance with the Nigerian Data Protection Act (NDPA) 2023 guidelines.",
      icon: ShieldAlert,
      status: "NDPA Certified"
    }
  ];

  return (
    <section className="py-12 sm:py-24 bg-white text-slate-800 relative border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12 sm:mb-20 gap-4 sm:gap-6">
          <span className="inline-block font-mono text-xs uppercase tracking-widest text-emerald-800 font-bold bg-emerald-100/60 px-3.5 py-1.5 rounded-full border border-emerald-200">
            05. Compliance & Trust Seals
          </span>
          <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
            Regulatory Compliance & Technical Seals
          </h2>
          <p className="text-slate-600 text-xs sm:text-base leading-relaxed">
            CittaEFS is engineered by CSL to satisfy the rigorous security and technical standards of global banking systems and federal tax authorities.
          </p>
        </div>

        {/* Badges Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {certifications.map((cert, idx) => {
            const Icon = cert.icon;
            return (
              <div 
                key={idx}
                id={`compliance-seal-${idx}`}
                className="relative bg-slate-50 border border-slate-200 rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-md hover:border-emerald-300 group"
              >
                {/* Visual Circle seal header simulating an official stamp */}
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-full border-2 border-dashed border-slate-300 flex items-center justify-center bg-white text-slate-700 transition-all duration-300 group-hover:border-emerald-500 group-hover:text-emerald-700 group-hover:rotate-12">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[9px] font-mono font-bold text-emerald-800 bg-emerald-50 border border-emerald-100 px-2.5 py-1 rounded-full flex items-center space-x-1">
                    <span className="h-1.5 w-1.5 bg-emerald-500 rounded-full animate-pulse" />
                    <span>{cert.status}</span>
                  </span>
                </div>

                <div className="space-y-2">
                  <span className="text-[10px] font-mono font-bold text-emerald-700 tracking-widest block">
                    {cert.badge}
                  </span>
                  <h3 className="font-display text-lg font-bold text-slate-900 group-hover:text-emerald-800 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {cert.desc}
                  </p>
                </div>

                {/* Bottom subtle alignment ring decoration representing certification security check */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[9px] font-mono text-slate-400">
                  <span>SECURE COMPLIANCE LAYER</span>
                  <span>ID: CTEFS-{100 + idx}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust Endorsement Note */}
        <div className="mt-16 text-center text-xs text-slate-400 font-mono flex items-center justify-center space-x-2">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>Validated for Nigerian Tax Administration Act compliance. Audited 2026.</span>
        </div>

      </div>
    </section>
  );
}
