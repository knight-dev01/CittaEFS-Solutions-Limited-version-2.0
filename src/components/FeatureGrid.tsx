import { useState } from 'react';
import { 
  Database, ShieldAlert, Cpu, QrCode, FileSignature, Calculator, Key, History, 
  Terminal, BarChart3, Radio, RefreshCcw, Layers, Search
} from 'lucide-react';

export default function FeatureGrid() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'compliance' | 'tech' | 'operations'>('all');

  const features = [
    {
      title: "ERP Integration Gateway",
      desc: "Connect your existing core SAP, Oracle, MS Dynamics, Odoo, or custom databases without requiring code alterations or database restructuring.",
      icon: Database,
      category: "tech",
      highlight: true
    },
    {
      title: "Pre-Clearance Validation Shield",
      desc: "Automatically tests invoice fields, buyer TIN databases, and mathematical logic against current NRS rules to reject bad data before submission.",
      icon: ShieldAlert,
      category: "compliance",
      highlight: true
    },
    {
      title: "Automated Tax Computation",
      desc: "Engine-level tax tables validate standard 7.5% Nigerian VAT, exempt categories, and state tax exemptions to prevent rounding rejections.",
      icon: Calculator,
      category: "compliance",
      highlight: false
    },
    {
      title: "Secure Cryptographic Signature",
      desc: "Cryptographically seals outbound invoice files with military-grade certificate wraps to guarantee authenticity and state clearance eligibility.",
      icon: FileSignature,
      category: "compliance",
      highlight: false
    },
    {
      title: "Instant IRN Generation",
      desc: "Issues official Invoice Reference Numbers in perfect synchronization with authorized government gateway responses.",
      icon: Cpu,
      category: "compliance",
      highlight: false
    },
    {
      title: "Embedded QR Code Generation",
      desc: "Constructs compliant, high-density secure QR codes carrying state validation parameters for instant validation.",
      icon: QrCode,
      category: "compliance",
      highlight: true
    },
    {
      title: "Robust REST API Gateway",
      desc: "An enterprise-grade, lightning-fast developer API allows seamless integration into custom webapps, portals, or billing platforms.",
      icon: Key,
      category: "tech",
      highlight: false
    },
    {
      title: "7-Year Immutable Archive",
      desc: "Maintains a fully indexable, ledger-backed archive of all credit notes, invoices, and audit metadata in strict compliance with state audit laws.",
      icon: History,
      category: "compliance",
      highlight: true
    },
    {
      title: "Real-Time Error Handlers",
      desc: "Gives your accounts team instant human-readable explanations of validation errors, allowing correction inside 30 seconds.",
      icon: Terminal,
      category: "operations",
      highlight: false
    },
    {
      title: "Executive Analytics Dashboard",
      desc: "Enables financial directors to monitor transaction volumes, submission success rates, tax totals, and real-time compliance statistics.",
      icon: BarChart3,
      category: "operations",
      highlight: false
    },
    {
      title: "Offline Sync Queues",
      desc: "If network latency occurs at the APP or government servers, transactions queue up safely in our system to keep sales moving.",
      icon: Radio,
      category: "operations",
      highlight: false
    }
  ];

  const filteredFeatures = selectedCategory === 'all' 
    ? features 
    : features.filter(f => f.category === selectedCategory);

  const categories = [
    { id: 'all', label: 'All Capabilities' },
    { id: 'compliance', label: 'Compliance & Tax' },
    { id: 'tech', label: 'Integration & API' },
    { id: 'operations', label: 'Operations & Management' }
  ] as const;

  return (
    <section className="py-12 sm:py-24 bg-white text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-xl text-left flex flex-col items-start gap-4 sm:gap-6">
            <span className="inline-block font-mono text-xs uppercase tracking-widest text-emerald-800 font-bold bg-emerald-100/60 px-3.5 py-1.5 rounded-full border border-emerald-200">
              03. Key Capabilities
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
              A Complete Electronic Fiscal System in One Platform
            </h2>
            <p className="text-slate-600 text-xs sm:text-base leading-relaxed">
              CittaEFS provides enterprise security, lightning integrations, and automatic state-approved certifications out-of-the-box.
            </p>
          </div>

          {/* Filtering Controls */}
          <div className="flex flex-wrap gap-2 border-b border-slate-100 pb-2 w-full md:w-auto">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat.id 
                    ? 'bg-slate-900 text-white shadow-md'
                    : 'text-slate-500 hover:text-emerald-700 hover:bg-slate-50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Features Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredFeatures.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div 
                key={idx}
                className={`relative group p-6 sm:p-8 rounded-3xl border transition-all duration-300 flex flex-col justify-between ${
                  feat.highlight 
                    ? 'bg-gradient-to-br from-slate-950 via-navy-medium to-slate-900 border-emerald-500/20 text-white shadow-xl shadow-slate-900/10' 
                    : 'bg-slate-50/80 border-slate-200 hover:border-emerald-300 hover:bg-white text-slate-800 shadow-sm hover:shadow-md'
                }`}
              >
                {/* Visual badge for primary highlights */}
                {feat.highlight && (
                  <div className="absolute top-4 right-4 px-2 py-0.5 bg-emerald-500/15 border border-emerald-500/30 rounded text-[9px] font-mono uppercase tracking-wider text-emerald-400">
                    Flagship Feature
                  </div>
                )}

                <div className="space-y-4">
                  {/* Icon container */}
                  <div className={`p-3 rounded-xl w-12 h-12 flex items-center justify-center ${
                    feat.highlight 
                      ? 'bg-white/10 text-emerald-400' 
                      : 'bg-emerald-50 text-emerald-800 border border-emerald-100 group-hover:bg-emerald-800 group-hover:text-white transition-all'
                  }`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-display text-lg font-bold">
                    {feat.title}
                  </h3>

                  <p className={`text-xs sm:text-sm leading-relaxed ${
                    feat.highlight ? 'text-slate-300' : 'text-slate-600'
                  }`}>
                    {feat.desc}
                  </p>
                </div>

                {/* Micro-detail arrow decoration */}
                <div className={`pt-6 mt-4 border-t border-slate-100/10 flex items-center justify-between text-[11px] font-mono text-slate-400 transition-all ${
                  feat.highlight ? 'group-hover:text-emerald-400' : 'group-hover:text-emerald-700'
                }`}>
                  <span>Category: {feat.category === 'compliance' ? 'Compliance' : feat.category === 'tech' ? 'Integration' : 'Operations'}</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-all">Learn details →</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
