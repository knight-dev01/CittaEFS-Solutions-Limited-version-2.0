import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  CheckCircle2, ArrowRight, Database, Layers, Calendar, Cpu, 
  Sparkles, ShieldCheck, Zap, Sliders, DollarSign, ArrowUpRight, HelpCircle
} from 'lucide-react';

interface ProductData {
  id: string;
  name: string;
  tagline: string;
  description: string;
  badge: string;
  primaryCapability: string;
  icon: any;
  colorTheme: string; // "blue" | "orange"
  features: { title: string; desc: string }[];
  benefits: { label: string; value?: string; desc: string }[];
  industries: string[];
  visualType: 'database' | 'layers' | 'calendar' | 'nexus';
  pricing: { tier: string; price: string; period: string; features: string[] }[];
}

const PRODUCTS_DATA: Record<string, ProductData> = {
  cittamatrix: {
    id: 'cittamatrix',
    name: 'CittaMatrix',
    tagline: 'The Core ERP Engine for High-Velocity Enterprises',
    description: 'Consolidate finance, supply chain, asset management, and advanced corporate accounting in a single unified ledger. Infused with AI-driven cash flow forecasting and real-time ledger auditing.',
    badge: 'Core ERP',
    primaryCapability: 'Advanced Accounting & Supply Chain',
    icon: Database,
    colorTheme: 'blue',
    features: [
      { title: 'Unified Corporate Ledger', desc: 'Manage multi-entity books, cross-border currencies, and real-time intercompany matching.' },
      { title: 'Intelligent Supply Chain', desc: 'Predict stock depletions, automate replenishment orders, and trace inventory lots globally.' },
      { title: 'AI-Powered Cash Forecasting', desc: 'Simulate financial runrates, invoice payment likelihoods, and capital requirement models.' },
      { title: 'Automated Asset Ledger', desc: 'Track depreciation scales, equipment lifecycles, and preventive maintenance triggers automatically.' }
    ],
    benefits: [
      { label: 'Close-the-Books Time', value: '-40%', desc: 'Reduce monthly accounting consolidation windows significantly.' },
      { label: 'Inventory Turnover', value: '+25%', desc: 'Accelerate warehouse cycles with automated trigger replenishment.' },
      { label: 'Audit Readiness', value: '100%', desc: 'All journals and system modifications are completely immutable and cryptographically logged.' }
    ],
    industries: ['Manufacturing', 'Conglomerates', 'Logistics & Distribution', 'Large-Scale Retail', 'Agriculture'],
    visualType: 'database',
    pricing: [
      {
        tier: 'Growth Enterprise',
        price: '$450',
        period: 'per month',
        features: ['Up to 50 active users', 'Standard GL & Accounting', 'Asset Management module', 'Email & chat support (9/5)']
      },
      {
        tier: 'Premium Scale',
        price: '$950',
        period: 'per month',
        features: ['Unlimited users', 'Full Multi-Entity books', 'AI Cash Flow Forecasting', 'Priority 24/7 technical hotlines', 'Dedicated account strategist']
      }
    ]
  },
  cittahospitalityx: {
    id: 'cittahospitalityx',
    name: 'CittaHospitalityX',
    tagline: 'Unified Property Management & Guest Orchestration',
    description: 'Automate room allocations, dynamic folio billing, OTA channel distribution, housekeeping workflows, and modern guest experience portals in a single fluid screen.',
    badge: 'Hospitality ERP',
    primaryCapability: 'PMS & Guest Experience',
    icon: Layers,
    colorTheme: 'orange',
    features: [
      { title: 'Interactive Room Allocation Grid', desc: 'Drag-and-drop bookings, visual room statuses, and instant reservation changes on a fluid timeline.' },
      { title: 'OTA Channel Manager Sync', desc: 'Update inventory across Booking.com, Expedia, and Airbnb with zero overbooking risk.' },
      { title: 'Dynamic Guest Portals', desc: 'Enable contactless check-in, keyless mobile entry, and instant digital concierge chat.' },
      { title: 'Integrated Folio Billing', desc: 'Consolidate room rates, minibar, restaurant bills, and spa tabs into a clean, compliant invoice.' }
    ],
    benefits: [
      { label: 'Booking Accuracy', value: '99.9%', desc: 'Avoid duplicate reservations across all channels in real time.' },
      { label: 'Front-desk Efficiency', value: '+35%', desc: 'Free up staff time using self-service kiosks and guest portals.' },
      { label: 'F&B POS Consolidation', desc: 'Instantly post transactions from resort bars and spas directly into guest bills.' }
    ],
    industries: ['Resorts & Luxury Hotels', 'Boutique Lodgings', 'Serviced Apartments', 'Vacation Rentals', 'Hospitality Chains'],
    visualType: 'layers',
    pricing: [
      {
        tier: 'Boutique Portal',
        price: '$299',
        period: 'per month',
        features: ['Up to 100 rooms', 'Standard Channel Sync', 'Housekeeping dispatch board', 'Standard payment gateways']
      },
      {
        tier: 'Resort Orchestrator',
        price: '$799',
        period: 'per month',
        features: ['Unlimited rooms', 'F&B POS integration', 'Custom guest mobile portals', 'Multi-property management hub', '24/7 emergency system SLA']
      }
    ]
  },
  cittaplannerx: {
    id: 'cittaplannerx',
    name: 'CittaPlannerX',
    tagline: 'Surgical Resource Allocation & Interactive Scheduling',
    description: 'Coordinate large-scale engineering, construction, and professional resource pipelines with dynamic interactive Gantt graphs, real-time critical path calculators, and automated resource levelers.',
    badge: 'Advanced Planning',
    primaryCapability: 'Critical Path & Gantt Management',
    icon: Calendar,
    colorTheme: 'blue',
    features: [
      { title: 'Dynamic Interactive Gantt', desc: 'Link dependencies, adjust timeline constraints, and recalculate milestones instantly.' },
      { title: 'Intelligent Resource Leveling', desc: 'Prevent teammate burnout and overallocation with visual grid workload indicators.' },
      { title: 'Critical Path Automation', desc: 'Instantly identify bottleneck tasks that could push your project deadline.' },
      { title: 'Timesheet & Billing Ledger', desc: 'Log work hours directly against task components, feeding into client billing and payroll.' }
    ],
    benefits: [
      { label: 'Deadline Deliveries', value: '+18%', desc: 'Boost on-time project completion with intelligent bottlenecks forecasting.' },
      { label: 'Over-Allocation Fix', value: '95%', desc: 'Eliminate scheduling overlaps and double-bookings across projects.' },
      { label: 'Cost Accuracy', value: '100%', desc: 'Map every billable hour straight to structural parent tasks.' }
    ],
    industries: ['Heavy Construction & Infra', 'Civil Engineering Firms', 'Professional Service Agencies', 'Energy & Utilities', 'Industrial R&D Teams'],
    visualType: 'calendar',
    pricing: [
      {
        tier: 'Studio Planner',
        price: '$189',
        period: 'per month',
        features: ['Up to 30 active projects', 'Standard Gantt & Dependencies', 'Basic time tracking', 'Slack & Teams alerts']
      },
      {
        tier: 'Enterprise Master',
        price: '$499',
        period: 'per month',
        features: ['Unlimited projects & teams', 'Critical path auto-solver', 'Resource capacity leveling algorithms', 'API timesheet import', 'Dedicated onboarding manager']
      }
    ]
  },
  cittanexus: {
    id: 'cittanexus',
    name: 'CittaNexus',
    tagline: 'The Enterprise Connection & API Orchestration Matrix',
    description: 'Integrate your core databases with local banking APIs, international payment gateways, government clearance nodes, and modern SaaS ecosystems via a secure unified API gateway.',
    badge: 'API Hub',
    primaryCapability: 'Integration Orchestration',
    icon: Cpu,
    colorTheme: 'orange',
    features: [
      { title: 'Pre-Built ERP Transport Maps', desc: 'Quickly connect SAP, Oracle, and Dynamics networks without complex bespoke scripts.' },
      { title: 'High-Throughput Webhooks', desc: 'Broadcast transactional events to downstream applications with retries and failovers.' },
      { title: 'E2E Cryptographic Envelopes', desc: 'Secure transit payloads using banking-grade TLS 1.3 and custom AES-256 wrapping.' },
      { title: 'Live Telemetry Dashboard', desc: 'Monitor request rates, latencies, payloads, and API status codes in millisecond intervals.' }
    ],
    benefits: [
      { label: 'Integration Speed', value: '10x', desc: 'Deploy new external webhooks and mappings in minutes instead of weeks.' },
      { label: 'Payload Latency', value: '<25ms', desc: 'Deliver transactional data envelopes instantly with global edge routing.' },
      { label: 'Security Standard', value: 'SOC2', desc: 'All connections utilize strict credential vaults and encrypted configurations.' }
    ],
    industries: ['Fintech & Neo-banks', 'High-Volume E-Commerce', 'Insurance Providers', 'Logistics Providers', 'Government Integration Nodes'],
    visualType: 'nexus',
    pricing: [
      {
        tier: 'Nexus Core',
        price: '$350',
        period: 'per month',
        features: ['Up to 500,000 monthly queries', '5 secure API credentials', 'Standard payload mappings', 'Standard API monitoring dashboard']
      },
      {
        tier: 'Nexus Edge',
        price: '$1,200',
        period: 'per month',
        features: ['Unlimited transactional queries', 'Custom mapping scripts', 'Edge computing gateway routing', 'Custom encryption vaults', 'Custom SLA agreements']
      }
    ]
  }
};

interface OtherProductsProps {
  productId: string;
  onRequestDemo: () => void;
}

export default function OtherProducts({ productId, onRequestDemo }: OtherProductsProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'pricing' | 'industries'>('overview');
  const product = PRODUCTS_DATA[productId] || PRODUCTS_DATA.cittamatrix;
  const ProductIcon = product.icon;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveTab('overview');
  }, [productId]);

  // Evolve theme classes depending on blue or orange setting
  const isBlue = product.colorTheme === 'blue';
  const badgeColor = isBlue 
    ? 'text-emerald-800 bg-emerald-100/60 border-emerald-200' 
    : 'text-teal-800 bg-teal-100/60 border-teal-200';
  const highlightTextColor = isBlue ? 'text-emerald-600' : 'text-teal-600';
  const bgGradient = isBlue 
    ? 'from-emerald-500/5 via-transparent to-transparent' 
    : 'from-teal-500/5 via-transparent to-transparent';
  const buttonBg = isBlue ? 'bg-emerald-600 hover:bg-emerald-500' : 'bg-teal-600 hover:bg-teal-500';
  const accentBorder = isBlue ? 'border-emerald-500/20' : 'border-teal-500/20';

  // Render high-tech animated wireframe or isometric diagrams
  const renderVisualDiagram = () => {
    switch (product.visualType) {
      case 'database':
        return (
          <div className="relative w-full aspect-video rounded-2xl bg-slate-900 overflow-hidden flex flex-col justify-between p-6 text-slate-400 font-mono text-xs border border-slate-800">
            {/* Animated Grid lines */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#020617_1px,transparent_1px),linear-gradient(to_bottom,#020617_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30" />
            
            <div className="flex items-center justify-between border-b border-slate-800 pb-3 z-10">
              <div className="flex items-center space-x-2">
                <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-emerald-400 text-[10px]">CITTA_MATRIX_DATABASE_ENGINE</span>
              </div>
              <span className="text-[10px] text-slate-500">TPS: 4,500/s</span>
            </div>

            <div className="space-y-3 my-4 z-10 flex-1 flex flex-col justify-center">
              <div className="grid grid-cols-3 gap-3">
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800/80 space-y-1">
                  <span className="text-[9px] text-slate-500">LEDGER</span>
                  <span className="text-white font-semibold text-xs block">Double-Entry Core</span>
                  <span className="text-[9px] text-emerald-400">ACTIVE</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800/80 space-y-1">
                  <span className="text-[9px] text-slate-500">FORECASTING</span>
                  <span className="text-white font-semibold text-xs block">AI Pipeline</span>
                  <span className="text-[9px] text-emerald-400">COMPILING</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800/80 space-y-1">
                  <span className="text-[9px] text-slate-500">LOGISTICS</span>
                  <span className="text-white font-semibold text-xs block">MRP Allocation</span>
                  <span className="text-[9px] text-emerald-400">SYNCED</span>
                </div>
              </div>

              {/* Console log stream */}
              <div className="bg-slate-950/80 rounded-lg p-2.5 border border-slate-800/60 font-mono text-[9px] text-slate-500 space-y-1 text-left">
                <div>[09:44:02] INITIALIZING MULTI-ENTITY SECURE ROUTING...</div>
                <div className="text-emerald-400/80">[09:44:03] TRANSACTION LEDGER VALIDATED: HASH_OK_99F37C</div>
                <div>[09:44:03] FORECAST AR/AP RUNNING SIMULATIONS [50,000 SCENARIOS]</div>
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-slate-800 pt-3 text-[9px] text-slate-500 z-10">
              <span>LEDGER INTEGRITY: VERIFIED</span>
              <span>ISO-27001</span>
            </div>
          </div>
        );
      case 'layers':
        return (
          <div className="relative w-full aspect-video rounded-2xl bg-slate-900 overflow-hidden flex flex-col justify-between p-6 text-slate-400 font-mono text-xs border border-slate-800">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#020617_1px,transparent_1px),linear-gradient(to_bottom,#020617_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-20" />
            
            <div className="flex items-center justify-between border-b border-slate-800 pb-3 z-10">
              <div className="flex items-center space-x-2">
                <div className="h-2 w-2 rounded-full bg-teal-500 animate-pulse" />
                <span className="text-teal-400 text-[10px]">HOSPITALITY_X_PMS_LAYERS</span>
              </div>
              <span className="text-[10px] text-slate-500">ROOMS SYNCED: 100%</span>
            </div>

            <div className="space-y-2 py-4 z-10 flex-1 flex flex-col justify-center items-center">
              {/* Stacked perspective isometric cards representation */}
              <div className="w-4/5 flex flex-col space-y-1.5 -rotate-6 transform">
                <div className="bg-teal-500/90 text-white rounded-lg p-2 text-center border border-teal-400/30 shadow-md">
                  GUEST CHANNELS (OTAs & Mobile Portals)
                </div>
                <div className="bg-slate-950 text-slate-300 rounded-lg p-2 text-center border border-slate-800 shadow-md">
                  CENTRAL INVENTORY ENGINE (FOLIOS & BARS)
                </div>
                <div className="bg-slate-900 text-slate-400 rounded-lg p-2 text-center border border-slate-800/80 shadow-md">
                  FINANCIAL LEDGER SYNC (TAX & AUDITING)
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-slate-800 pt-3 text-[9px] text-slate-500 z-10">
              <span>OTA CHANNELS: BOOKING, EXPEDIA, AIRBNB</span>
              <span>SECURE API</span>
            </div>
          </div>
        );
      case 'calendar':
        return (
          <div className="relative w-full aspect-video rounded-2xl bg-slate-900 overflow-hidden flex flex-col justify-between p-6 text-slate-400 font-mono text-xs border border-slate-800">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#020617_1px,transparent_1px),linear-gradient(to_bottom,#020617_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
            
            <div className="flex items-center justify-between border-b border-slate-800 pb-3 z-10">
              <div className="flex items-center space-x-2">
                <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-emerald-400 text-[10px]">PLANNER_X_GANTT_ENGINE</span>
              </div>
              <span className="text-[10px] text-slate-500">TASKS ALLOCATED: 48,200</span>
            </div>

            <div className="space-y-2 py-4 z-10 flex-1 flex flex-col justify-center">
              {/* Gantt Timeline mock */}
              <div className="space-y-2.5">
                <div className="flex items-center space-x-2">
                  <span className="w-16 text-[9px] text-slate-500">TASK_A</span>
                  <div className="flex-1 bg-slate-950 rounded-md h-5 relative overflow-hidden border border-slate-800">
                    <div className="absolute left-0 w-2/3 h-full bg-emerald-500/30 border-r border-emerald-500 flex items-center px-2">
                      <span className="text-[8px] text-white font-medium">Phase 1: Civil Design</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-16 text-[9px] text-slate-500">TASK_B</span>
                  <div className="flex-1 bg-slate-950 rounded-md h-5 relative overflow-hidden border border-slate-800">
                    <div className="absolute left-[50%] w-1/3 h-full bg-emerald-500/20 border-r border-emerald-500 flex items-center px-2">
                      <span className="text-[8px] text-white font-medium">Phase 2: Procurement</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-16 text-[9px] text-slate-500">TASK_C</span>
                  <div className="flex-1 bg-slate-950 rounded-md h-5 relative overflow-hidden border border-slate-800">
                    <div className="absolute left-[70%] w-1/4 h-full bg-teal-500/30 border-r border-teal-500 flex items-center px-2">
                      <span className="text-[8px] text-white font-medium">Phase 3: Integration</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-slate-800 pt-3 text-[9px] text-slate-500 z-10">
              <span>CRITICAL PATH: RESOLVED [NO OVERLAPS]</span>
              <span>CALENDAR SYNCED</span>
            </div>
          </div>
        );
      case 'nexus':
      default:
        return (
          <div className="relative w-full aspect-video rounded-2xl bg-slate-900 overflow-hidden flex flex-col justify-between p-6 text-slate-400 font-mono text-xs border border-slate-800">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#020617_1px,transparent_1px),linear-gradient(to_bottom,#020617_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-25" />
            
            <div className="flex items-center justify-between border-b border-slate-800 pb-3 z-10">
              <div className="flex items-center space-x-2">
                <div className="h-2 w-2 rounded-full bg-teal-500 animate-pulse" />
                <span className="text-teal-400 text-[10px]">CITTA_NEXUS_API_ROUTER</span>
              </div>
              <span className="text-[10px] text-slate-500">PING: 14ms</span>
            </div>

            {/* Central hub and radiating nodes vector graphic representation */}
            <div className="relative flex-1 z-10 flex items-center justify-center">
              <div className="relative h-24 w-24 rounded-full border border-teal-500/30 flex items-center justify-center bg-teal-950/20">
                <div className="h-10 w-10 rounded-full bg-teal-500 text-white font-bold flex items-center justify-center shadow-lg shadow-teal-500/20">
                  HUB
                </div>
                {/* Node rays */}
                <div className="absolute -top-6 -left-6 bg-slate-950 border border-slate-800 px-2 py-0.5 rounded text-[8px] text-slate-300">SAP_ECC</div>
                <div className="absolute -top-6 -right-6 bg-slate-950 border border-slate-800 px-2 py-0.5 rounded text-[8px] text-slate-300">ORACLE</div>
                <div className="absolute -bottom-6 -left-6 bg-slate-950 border border-slate-800 px-2 py-0.5 rounded text-[8px] text-slate-300">BANKS</div>
                <div className="absolute -bottom-6 -right-6 bg-slate-950 border border-slate-800 px-2 py-0.5 rounded text-[8px] text-slate-300">FIRS_NRS</div>
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-slate-800 pt-3 text-[9px] text-slate-500 z-10">
              <span>PROTOCOLS: REST, SOAP, SFTP, WEBHOOKS</span>
              <span>E2E ENCRYPTED</span>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="w-full relative bg-white text-slate-800">
      
      {/* 1. Hero Block */}
      <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-32 bg-gradient-to-b from-slate-50 to-white overflow-hidden border-b border-slate-100">
        {/* Glow vector backdrops */}
        <div className={`absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-r ${bgGradient} blur-[120px] rounded-full pointer-events-none`} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Hero text metadata content */}
            <div className="lg:col-span-7 text-left space-y-6">
              <span className={`inline-block font-mono text-xs uppercase tracking-widest font-bold px-3.5 py-1.5 rounded-full border ${badgeColor}`}>
                {product.badge} Component
              </span>
              
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
                {product.tagline}
              </h1>
              
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {product.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <button
                  onClick={onRequestDemo}
                  className={`px-7 py-3.5 rounded-full text-sm font-semibold tracking-wide text-white ${buttonBg} transition-all duration-300 shadow-md cursor-pointer flex items-center justify-center space-x-2`}
                >
                  <span>Request Demo</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => {
                    const el = document.getElementById('product-specs-section');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-7 py-3.5 rounded-full text-sm font-semibold tracking-wide text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 transition-all duration-300 flex items-center justify-center"
                >
                  View Technical Specs
                </button>
              </div>
            </div>

            {/* Visual Simulator Diagram Column */}
            <div className="lg:col-span-5 relative">
              <div className="absolute inset-0 bg-slate-900/5 rounded-3xl blur-2xl transform rotate-3 pointer-events-none" />
              <div className="relative bg-white p-3 rounded-3xl border border-slate-200 shadow-xl">
                {renderVisualDiagram()}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Technical and Interactive Navigation Tabs Section */}
      <section id="product-specs-section" className="py-16 sm:py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12 gap-4">
            <span className={`inline-block font-mono text-xs uppercase tracking-widest font-bold px-3 py-1 bg-slate-100 border border-slate-200 text-slate-600 rounded-full`}>
              Capabilities Suite
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              A Deeper Look inside {product.name}
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              Discover the standard modules, core benefits, and enterprise scaling architectures of our {product.name} system.
            </p>
          </div>

          {/* Sub Navigation Tabs */}
          <div className="flex items-center justify-center space-x-2 border-b border-slate-200 pb-3 mb-10 max-w-md mx-auto">
            {(['overview', 'pricing', 'industries'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg capitalize transition-all cursor-pointer ${
                  activeTab === tab
                    ? 'bg-slate-900 text-white'
                    : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* TAB 1: OVERVIEW & KEY FEATURES */}
          {activeTab === 'overview' && (
            <div className="space-y-12 animate-fade-in">
              <div className="grid sm:grid-cols-2 gap-8">
                {product.features.map((feat, idx) => (
                  <div 
                    key={idx}
                    className="p-6 sm:p-8 rounded-2xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-slate-300 hover:shadow-md transition-all duration-300 text-left flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <div className={`p-3 rounded-xl bg-white border border-slate-100 w-12 h-12 flex items-center justify-center ${highlightTextColor}`}>
                        <ProductIcon className="w-6 h-6" />
                      </div>
                      <h4 className="font-display font-bold text-slate-900 text-base sm:text-lg">
                        {feat.title}
                      </h4>
                      <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                        {feat.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Core Benefits Matrix */}
              <div className="pt-8 border-t border-slate-150">
                <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-slate-400 text-center mb-8">
                  Verified Performance Indicators
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {product.benefits.map((ben, idx) => (
                    <div key={idx} className="bg-slate-50 rounded-2xl p-6 border border-slate-200 text-center space-y-2">
                      {ben.value && (
                        <div className={`text-3xl sm:text-4xl font-extrabold font-display ${highlightTextColor}`}>
                          {ben.value}
                        </div>
                      )}
                      <div className="font-bold text-slate-900 text-sm">{ben.label}</div>
                      <p className="text-slate-500 text-xs leading-relaxed">{ben.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: PRICING PLANS */}
          {activeTab === 'pricing' && (
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto animate-fade-in text-left">
              {product.pricing.map((tier, idx) => (
                <div 
                  key={idx}
                  className={`p-6 sm:p-8 rounded-2xl bg-white border ${idx === 1 ? 'border-slate-900 ring-2 ring-slate-900/5' : 'border-slate-200'} shadow-sm relative flex flex-col justify-between`}
                >
                  {idx === 1 && (
                    <span className="absolute top-4 right-4 bg-slate-950 text-white font-mono text-[9px] font-bold px-2 py-0.5 rounded">
                      POPULAR CHOICE
                    </span>
                  )}
                  <div className="space-y-4">
                    <h4 className="font-display font-extrabold text-slate-900 text-lg sm:text-xl">
                      {tier.tier}
                    </h4>
                    <div className="flex items-baseline space-x-1">
                      <span className="text-2xl sm:text-4xl font-extrabold text-slate-900">{tier.price}</span>
                      <span className="text-xs text-slate-500 font-medium">/ {tier.period}</span>
                    </div>
                    
                    <hr className="border-slate-100" />
                    
                    <ul className="space-y-3.5">
                      {tier.features.map((f, fIdx) => (
                        <li key={fIdx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-600">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 mt-6">
                    <button
                      onClick={onRequestDemo}
                      className={`w-full py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer text-center ${
                        idx === 1 
                          ? 'bg-slate-950 text-white hover:bg-slate-800' 
                          : 'bg-slate-100 text-slate-800 hover:bg-slate-200'
                      }`}
                    >
                      Connect with sales
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 3: TARGET INDUSTRIES */}
          {activeTab === 'industries' && (
            <div className="max-w-3xl mx-auto animate-fade-in text-center space-y-6">
              <h4 className="font-display font-bold text-slate-950 text-lg">
                Engineered specifically for highly-regulated sectors:
              </h4>
              <div className="flex flex-wrap justify-center gap-3">
                {product.industries.map((ind, idx) => (
                  <span 
                    key={idx}
                    className="px-4 py-2.5 bg-slate-50 border border-slate-200/80 rounded-xl text-xs sm:text-sm font-semibold text-slate-700"
                  >
                    {ind}
                  </span>
                ))}
              </div>
              <p className="text-slate-500 text-xs max-w-lg mx-auto leading-relaxed pt-2">
                All {product.name} system nodes and configurations can be fully adapted to map precisely to custom enterprise operations and legal sector parameters.
              </p>
            </div>
          )}

        </div>
      </section>

      {/* 3. Common CTA Action Blocks */}
      <section className={`py-16 bg-slate-50 border-t border-slate-100 text-center relative overflow-hidden`}>
        {/* Glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-80 h-80 bg-slate-300/10 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
          <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Ready to Accelerate Your Enterprise with {product.name}?
          </h3>
          <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Connect with our system architecture group to request a custom telemetry demonstration, review database endpoints, or obtain answers to legal compliance questions.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <button
              onClick={onRequestDemo}
              className={`px-6 py-3 rounded-full text-xs sm:text-sm font-semibold tracking-wide text-white ${buttonBg} transition-all cursor-pointer`}
            >
              Request Custom Demo
            </button>
            <button
              onClick={() => {
                const mail = 'mailto:info@cittanuvola.com';
                window.location.href = mail;
              }}
              className="px-6 py-3 rounded-full text-xs sm:text-sm font-semibold tracking-wide text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 transition-all"
            >
              Contact Solutions Engineers
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
