import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, X, CornerDownLeft, FileText, Cpu, Landmark, Shield, PhoneCall, Sparkles, Terminal } from 'lucide-react';
import { PageId } from '../types';

interface GlobalSearchInlineProps {
  isOpen: boolean;
  onClose: () => void;
  setCurrentPage: (page: PageId) => void;
  onRequestDemo: () => void;
}

interface SearchItem {
  title: string;
  category: 'Product' | 'Solutions' | 'Industries' | 'Company' | 'Resources' | 'Contact';
  description: string;
  keywords: string[];
  pageId: PageId;
  scrollId?: string;
  url?: string;
}

const SEARCH_INDEX: SearchItem[] = [
  // Product / CittaEFS
  {
    title: "CittaEFS Middleware Engine",
    category: "Product",
    description: "Our flagship intelligent electronic fiscal system middleware bridging ERP systems to NRS compliance. Handles high-velocity clearance.",
    keywords: ["cittaefs", "middleware", "engine", "compliance", "nrs", "electronic fiscal", "tax stamp", "clearing", "high availability", "firs compliance"],
    pageId: "cittaefs"
  },
  {
    title: "Validation Shield Gateway",
    category: "Product",
    description: "Secures real-time compliance transactions by validating fields, tax calculations, and TIN inputs before forwarding to revenue servers.",
    keywords: ["validation shield", "gateway", "tin check", "tax check", "security", "cryptography", "tin verification", "validation shield", "pre-clearance"],
    pageId: "cittaefs"
  },
  {
    title: "Excel Bulk Uploader Gateway",
    category: "Product",
    description: "A drag-and-drop gateway built for SMEs to bulk upload Excel spreadsheets or CSV template billing sheets for automated fiscal clearing.",
    keywords: ["excel", "bulk", "uploader", "csv", "spreadsheet", "drag", "drop", "sme", "excel uploader", "manual selection", "drag-and-drop"],
    pageId: "cittaefs"
  },
  {
    title: "Live Validation Sandbox",
    category: "Product",
    description: "An interactive, client-authoritative simulator to inspect compliance handshakes, review raw JSON structures, and measure clearance speed.",
    keywords: ["live", "validation", "sandbox", "simulator", "rules", "rest api", "json payload", "firs simulator", "api payload"],
    pageId: "cittaefs"
  },
  {
    title: "Audit Ledger Vault",
    category: "Product",
    description: "Ensures compliance history and cleared ledger lists remain secured with AES-256 and secure TLS standards. Implements absolute non-repudiation.",
    keywords: ["audit ledger", "vault", "history", "aes-256", "ledger list", "tls", "security", "non-repudiation", "secure log"],
    pageId: "cittaefs"
  },
  {
    title: "The CittaEFS Digital Compliance Bridge",
    category: "Product",
    description: "Step-by-step physical-to-digital compliance journey mapping source generations, pre-clearance validation buffers, and cryptographic stamps.",
    keywords: ["digital compliance bridge", "compliance journey", "source generation", "validation buffer", "cryptographic seal", "nrs portal handshake", "sha-256 stamped signature", "sub-5ms sandbox check", "legacy output", "firs gateway"],
    pageId: "home",
    scrollId: "compliance-journey-section"
  },
  {
    title: "Interactive Clearance Speed Chart",
    category: "Product",
    description: "Examine system validation latency, packet clearance logs, and millisecond routing speeds under simulated enterprise transaction load.",
    keywords: ["clearing speed chart", "validation latency", "packet clearance logs", "routing speed", "high load", "clearing rate", "response time", "graph", "chart"],
    pageId: "cittaefs"
  },
  {
    title: "CittaMatrix Core ERP",
    category: "Product",
    description: "Consolidate multi-entity operations, supply chain stock, asset depreciation, and double-entry general ledgers with AI forecasting.",
    keywords: ["cittamatrix", "matrix", "erp", "ledger", "general ledger", "accounting", "operations", "supply chain", "depreciation", "forecast"],
    pageId: "cittamatrix",
    url: "https://cittamatrix.com/"
  },
  {
    title: "CittaHospitalityX Property Management",
    category: "Product",
    description: "Next-generation hotel PMS, room allocations timeline, housekeeping rosters, guest mobile portals, and unified folio billing.",
    keywords: ["cittahospitalityx", "hospitalityx", "pms", "hotel", "resort", "booking", "folio", "room allocation", "housekeeping", "reservation"],
    pageId: "cittahospitalityx",
    url: "https://cittahospitalityx.com/"
  },
  {
    title: "CittaPlannerX Resource Scheduler",
    category: "Product",
    description: "Surgical scheduling software featuring interactive Gantt charts, milestone paths, teammate allocation, and resource leveling.",
    keywords: ["cittaplannerx", "plannerx", "scheduler", "gantt", "critical path", "milestone", "resource leveling", "scheduling", "timeline"],
    pageId: "cittaplannerx",
    url: "https://cittaplannerx.com/"
  },
  {
    title: "CittaNexus API Gateway",
    category: "Product",
    description: "Central encryption integration hub supporting webhook routers, REST / SOAP protocols, secure TLS tunnels, and live traffic telemetry.",
    keywords: ["cittanexus", "nexus", "api gateway", "webhooks", "integration", "tls tunnel", "router", "telemetry", "protocols"],
    pageId: "cittanexus",
    url: "https://cittanexus.com/"
  },

  // Solutions / ERP Compatibility
  {
    title: "SAP ERP Compliance Integration",
    category: "Solutions",
    description: "Direct API triggers or scheduled exports linking SAP ERP modules to official tax clearing nodes. Compatible with SAP ECC6 and S/4HANA.",
    keywords: ["sap", "erp", "integration", "compatibility", "modules", "database triggers", "sap integration", "s4hana", "ecc6"],
    pageId: "solutions"
  },
  {
    title: "Oracle ERP Compliance Integration",
    category: "Solutions",
    description: "Sub-300ms SLA database gateway designed for Oracle Financials, high-volume billing, and direct enterprise ledger synchronization.",
    keywords: ["oracle", "erp", "integration", "compatibility", "high-volume", "financials", "oracle financials", "database trigger"],
    pageId: "solutions"
  },
  {
    title: "Microsoft Dynamics Integration",
    category: "Solutions",
    description: "Tailored mappings to link Microsoft Dynamics AX, NAV, or 365 natively with compliance servers using zero-downtime micro-connectors.",
    keywords: ["microsoft", "dynamics", "ax", "nav", "365", "integration", "tailored", "dynamics 365", "connectors"],
    pageId: "solutions"
  },
  {
    title: "Odoo & QuickBooks SME Gateway",
    category: "Solutions",
    description: "Quick-deploy configurations and middleware plugins for Odoo, QuickBooks, and lightweight accounting modules to bypass manual FIRS entry.",
    keywords: ["odoo", "quickbooks", "sme", "gateway", "accounting", "plugins", "automated clearing", "quickbooks plugins"],
    pageId: "solutions"
  },

  // Industries
  {
    title: "Manufacturing Compliance Solutions",
    category: "Industries",
    description: "Advanced VAT calculation engine, multi-site factory inventory invoice clearing systems, and automated warehouse ledger reporting.",
    keywords: ["manufacturing", "factory", "vat", "inventory", "multi-site", "industry", "warehouse ledger", "supply chain"],
    pageId: "industries"
  },
  {
    title: "Conglomerates & Distribution",
    category: "Industries",
    description: "Handles massive scale, multi-currency invoicing, cross-border custom codes, and high-volume automated logistics ledger systems.",
    keywords: ["conglomerates", "distribution", "logistics", "multi-currency", "massive scale", "cross-border", "subsidiaries"],
    pageId: "industries"
  },
  {
    title: "Oil & Gas Energy Sector",
    category: "Industries",
    description: "B2B clearing with customizable regulatory attributes matching energy, refining, downstream supply chain, and pipeline transactions.",
    keywords: ["oil", "gas", "energy", "refining", "pipeline", "b2b", "industry", "petroleum", "downstream", "upstream"],
    pageId: "industries"
  },
  {
    title: "Telecommunications Billing",
    category: "Industries",
    description: "Sub-millisecond high-frequency POS clearings for modern telecommunication and data networks with high-volume concurrency.",
    keywords: ["telecom", "telecommunications", "billing", "high-frequency", "pos", "millisecond", "cellular network", "concurrency"],
    pageId: "industries"
  },

  // Company
  {
    title: "CSL Corporate Profile",
    category: "Company",
    description: "Learn about Citta ERP Solutions Limited, pioneering software engineering, financial technology, and compliance architecture.",
    keywords: ["csl", "corporate", "profile", "about", "pioneering", "architecture", "citta erp solutions limited", "directors", "history"],
    pageId: "company"
  },
  {
    title: "Security, Trust & Privacy Standards",
    category: "Company",
    description: "Fully aligned with NDPA privacy directives, featuring military-grade transport encryption (AES-256) and complete non-repudiation.",
    keywords: ["security", "trust", "privacy", "ndpa", "encryption", "compliance success", "security tls", "data protection", "ndpb"],
    pageId: "company"
  },
  {
    title: "Lagos Engineering & Support Office",
    category: "Company",
    description: "Our regional research and implementation headquarters in Lagos, Nigeria, providing custom systems integration and 24/7 active SLA monitoring.",
    keywords: ["lagos engineering", "lagos office", "regional headquarters", "research hub", "systems monitoring", "engineering team", "nigeria office", "physical office"],
    pageId: "company"
  },
  {
    title: "Enterprise Clients Portfolio",
    category: "Company",
    description: "CSL proudly serves over 100+ active enterprise clients, executing high-volume digital invoice clearing across disparate databases.",
    keywords: ["enterprise portfolio", "corporate clients", "100+ clients", "integrated installations", "multi-site erp", "trusted partners"],
    pageId: "company"
  },

  // Resources
  {
    title: "Digital Invoice Guidelines",
    category: "Resources",
    description: "Everything businesses need to know about transitioning to secure digital invoicing models under official FIRS frameworks.",
    keywords: ["digital", "invoice", "guidelines", "transition", "regulations", "firs guidelines", "electronic billing"],
    pageId: "resources"
  },
  {
    title: "FIRS NRS Integration Specs",
    category: "Resources",
    description: "Technical review of official integration steps, API handshake response timelines, security rules, and clearing protocols.",
    keywords: ["firs", "nrs", "specs", "technical", "integration steps", "response", "nrs specs", "api endpoints", "rest specs"],
    pageId: "resources"
  },
  {
    title: "Tax Ecosystem Policy Papers",
    category: "Resources",
    description: "Academic and regulatory analyses on how automated tax frameworks optimize national revenues and prevent corporate leakage.",
    keywords: ["tax", "ecosystem", "policy", "national revenue", "regulatory analysis", "leakage prevention", "whitepapers"],
    pageId: "resources"
  },
  {
    title: "Implementation Roadmap Checklist",
    category: "Resources",
    description: "Four-phase compliance onboarding plan covering Technical Scoping, Middleware Configuration, Sandbox Clearance, and Live Go-Live Operations.",
    keywords: ["implementation roadmap", "onboarding checklist", "technical scoping", "middleware configuration", "sandbox clearance", "go-live production", "phase 1", "phase 2", "phase 3", "phase 4", "checklists"],
    pageId: "resources"
  },

  // Contact
  {
    title: "Contact & Corporate Demo Office",
    category: "Contact",
    description: "Reach our principal engineers or schedule an in-person compliance consultation at our Lagos office. Get real-time onboarding advice.",
    keywords: ["contact", "office", "lagos", "phone", "email", "support", "consultation", "demo", "lagos office", "request demo", "onboarding advice"],
    pageId: "contact"
  },
  {
    title: "Support Hotline & Email Address",
    category: "Contact",
    description: "Send inquiries directly to contact@cittaerp.com or initiate an instant WhatsApp compliance line for immediate engineering support.",
    keywords: ["email", "hotline", "whatsapp", "phone", "support@cittaerp.com", "contact@cittaerp.com", "whatsapp support", "active line"],
    pageId: "contact"
  },
  {
    title: "24/7 Client Systems Support",
    category: "Contact",
    description: "CSL keeps principal engineering hotlines active 24/7 for zero-downtime assurance. Get rapid support tickets for ERP data sync triage.",
    keywords: ["24/7 support", "hotline", "whatsapp support", "downtime triage", "technical support", "systems monitoring", "active support", "support line", "emergency support"],
    pageId: "contact"
  }
];

const SUGGESTED_KEYWORDS = [
  "TIN Verification",
  "SAP Integration",
  "Excel Uploader",
  "NRS Specs",
  "Lagos Office",
  "Request Demo",
  "Manufacturing",
  "Security TLS"
];

export default function GlobalSearchInline({ isOpen, onClose, setCurrentPage, onRequestDemo }: GlobalSearchInlineProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchItem[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input when inline search panel expands
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 150);
    } else {
      setQuery('');
      setResults([]);
      setSelectedIndex(0);
    }
  }, [isOpen]);

  // Sensitive search matching characters
  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      setSelectedIndex(0);
      return;
    }

    const lowerQuery = query.toLowerCase().trim();
    
    const filtered = SEARCH_INDEX.filter(item => {
      const matchesTitle = item.title.toLowerCase().includes(lowerQuery);
      const matchesDesc = item.description.toLowerCase().includes(lowerQuery);
      const matchesCategory = item.category.toLowerCase().includes(lowerQuery);
      const matchesKeywords = item.keywords.some(kw => kw.toLowerCase().includes(lowerQuery));
      
      return matchesTitle || matchesDesc || matchesCategory || matchesKeywords;
    });

    setResults(filtered);
    setSelectedIndex(0);
  }, [query]);

  const handleItemSelect = (item: SearchItem) => {
    if (item.url) {
      window.open(item.url, '_blank', 'noopener,noreferrer');
      onClose();
      return;
    }

    if (item.title.toLowerCase().includes("demo") || item.title.toLowerCase().includes("request")) {
      onRequestDemo();
    } else {
      setCurrentPage(item.pageId);
    }
    
    // Scroll smoothly to section
    setTimeout(() => {
      if (item.scrollId) {
        const el = document.getElementById(item.scrollId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 150);

    onClose();
  };

  const handleSuggestionClick = (keyword: string) => {
    setQuery(keyword);
    inputRef.current?.focus();
  };

  // Keyboard navigation & Escape closer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(prev => (results.length > 0 ? (prev + 1) % results.length : 0));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(prev => (results.length > 0 ? (prev - 1 + results.length) % results.length : 0));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (results.length > 0 && results[selectedIndex]) {
          handleItemSelect(results[selectedIndex]);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, results, selectedIndex, onClose]);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Product': return <Cpu className="w-4 h-4 text-[#2582ff]" />;
      case 'Solutions': return <Shield className="w-4 h-4 text-[#2582ff]" />;
      case 'Industries': return <Landmark className="w-4 h-4 text-[#ff8e1a]" />;
      case 'Company': return <Shield className="w-4 h-4 text-[#2582ff]" />;
      case 'Resources': return <FileText className="w-4 h-4 text-[#ff8e1a]" />;
      default: return <PhoneCall className="w-4 h-4 text-slate-500" />;
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Enhanced backdrop-blur-xl for deep focus */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/65 backdrop-blur-xl z-40 cursor-default"
          />

          {/* Unified Raycast-style Spotlight Command Palette */}
          <motion.div
            id="global-search-dropdown-container"
            initial={{ opacity: 0, scale: 0.975, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.975, y: 8 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-[8vh] left-1/2 -translate-x-1/2 w-[95vw] max-w-5xl max-h-[85vh] bg-white border border-slate-200/60 shadow-2xl rounded-2xl z-50 overflow-hidden text-slate-800 flex flex-col"
          >
            <style>{`
              .command-palette-scroll::-webkit-scrollbar {
                width: 6px;
                height: 6px;
              }
              .command-palette-scroll::-webkit-scrollbar-track {
                background: transparent;
              }
              .command-palette-scroll::-webkit-scrollbar-thumb {
                background: rgba(148, 163, 184, 0.25);
                border-radius: 9999px;
              }
              .command-palette-scroll::-webkit-scrollbar-thumb:hover {
                background: rgba(148, 163, 184, 0.45);
              }
            `}</style>

            {/* Header Input Block - Unified & Clean (Raycast/Notion Style) */}
            <div className="px-5 py-3.5 sm:py-4 border-b border-slate-100 flex items-center bg-white shrink-0 gap-3 md:gap-4">
              <Search className="w-5 h-5 text-slate-400 shrink-0" />
              <input
                ref={inputRef}
                type="text"
                placeholder="Search modules, SAP integrations, phone lines, Excel uploaders..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="flex-1 bg-transparent text-slate-800 placeholder-slate-400 text-sm md:text-base focus:outline-none font-semibold h-10 md:h-11"
              />
              
              {/* Embedded control icons */}
              <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                {query && (
                  <button
                    onClick={() => setQuery('')}
                    className="text-slate-400 hover:text-slate-600 text-[10px] font-mono font-bold hover:bg-slate-100 px-2 py-1 rounded transition-colors cursor-pointer"
                  >
                    Clear
                  </button>
                )}
                <div className="hidden sm:flex items-center gap-1 px-1.5 py-0.5 border border-slate-200/80 rounded text-[9px] font-mono font-bold text-slate-400 bg-white shadow-3xs">
                  <span>ESC</span>
                </div>
                <button
                  onClick={onClose}
                  className="text-slate-400 hover:text-slate-600 p-1.5 hover:bg-slate-100 rounded-lg transition-all cursor-pointer"
                  title="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Dynamic, responsive content wrapper. Scrollbar lives only inside this main content block */}
            <div className="flex-1 overflow-y-auto max-h-[calc(85vh-60px)] command-palette-scroll p-4 sm:p-5 bg-white">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                
                {/* Left Column (~65% width on desktop) */}
                <div className="lg:col-span-8 space-y-5">
                  {query.trim() === '' ? (
                    <div className="space-y-5">
                      <div className="space-y-2.5">
                        <h4 className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5 text-[#ff8e1a]" />
                          <span>Popular Searches</span>
                        </h4>
                        
                        {/* Compact Notion-style tag chips with reduced padding */}
                        <div className="flex flex-wrap gap-1.5">
                          {SUGGESTED_KEYWORDS.map((keyword, index) => (
                            <button
                              key={index}
                              onClick={() => handleSuggestionClick(keyword)}
                              className="px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-slate-50 border border-slate-200/80 text-slate-600 hover:bg-[#2582ff]/5 hover:border-[#2582ff]/30 hover:text-[#2582ff] transition-all cursor-pointer"
                            >
                              {keyword}
                            </button>
                          ))}
                        </div>
                      </div>
                      
                      {/* Beautifully Crafted Empty State / Guide Illustration */}
                      <div className="p-5 rounded-2xl bg-slate-50/50 border border-slate-200/60 space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-white border border-slate-200 rounded-xl text-[#2582ff] shadow-3xs">
                            <Terminal className="w-4.5 h-4.5" />
                          </div>
                          <div>
                            <h5 className="text-xs font-mono font-extrabold uppercase text-slate-500 tracking-wider">Discover CSL Ecosystem</h5>
                            <p className="text-[11px] text-slate-400">Search guides, ERP integrations, & developer resources.</p>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1 text-slate-600">
                          <div className="flex items-start gap-2.5">
                            <span className="text-[#2582ff] text-xs font-bold font-mono">01.</span>
                            <div className="space-y-0.5">
                              <h6 className="text-[11px] font-extrabold text-slate-800">ERP Integrations</h6>
                              <p className="text-[10px] text-slate-500 leading-normal">Connect SAP, Oracle, and Microsoft Dynamics nodes seamlessly.</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-2.5">
                            <span className="text-[#ff8e1a] text-xs font-bold font-mono">02.</span>
                            <div className="space-y-0.5">
                              <h6 className="text-[11px] font-extrabold text-slate-800">Compliance Gateways</h6>
                              <p className="text-[10px] text-slate-500 leading-normal">Real-time sub-240ms automated tax and fiscal clearance suites.</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-2.5">
                            <span className="text-[#2582ff] text-xs font-bold font-mono">03.</span>
                            <div className="space-y-0.5">
                              <h6 className="text-[11px] font-extrabold text-slate-800">Developer Specs</h6>
                              <p className="text-[10px] text-slate-500 leading-normal">Review official FIRS NRS schemas and REST/SOAP structures.</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-2.5">
                            <span className="text-[#ff8e1a] text-xs font-bold font-mono">04.</span>
                            <div className="space-y-0.5">
                              <h6 className="text-[11px] font-extrabold text-slate-800">Lagos Offices</h6>
                              <p className="text-[10px] text-slate-500 leading-normal">Locate regional research hubs and corporate support directories.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : results.length > 0 ? (
                    <div className="space-y-3">
                      <h4 className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 flex items-center justify-between">
                        <span>Live Matches ({results.length})</span>
                        <div className="flex items-center gap-2">
                          <span className="hidden sm:inline text-[9px] text-slate-400">Use Arrow keys & Enter</span>
                          <span className="text-[10px] text-[#2582ff] font-extrabold bg-[#2582ff]/5 border border-[#2582ff]/15 px-2 py-0.5 rounded">Indexed Hub</span>
                        </div>
                      </h4>
                      
                      <div className="space-y-2">
                        {results.map((item, idx) => {
                          const isSelected = idx === selectedIndex;
                          return (
                            <button
                              key={idx}
                              onClick={() => handleItemSelect(item)}
                              onMouseEnter={() => setSelectedIndex(idx)}
                              className={`w-full flex items-start gap-3 p-3 rounded-xl border transition-all text-left group cursor-pointer shadow-3xs ${
                                isSelected 
                                  ? 'bg-[#2582ff]/5 border-[#2582ff]/30 text-slate-900' 
                                  : 'bg-white border-slate-200/70 hover:bg-slate-50/50 hover:border-slate-300'
                              }`}
                            >
                              <div className={`p-2 rounded-lg border transition-all shrink-0 ${
                                isSelected 
                                  ? 'bg-white border-[#2582ff]/20 text-[#2582ff]' 
                                  : 'bg-slate-50 border-slate-100 text-slate-500'
                              }`}>
                                {getCategoryIcon(item.category)}
                              </div>
                              <div className="flex-1 min-w-0 space-y-0.5">
                                <div className="flex items-center justify-between gap-2">
                                  <span className={`font-display font-bold text-sm transition-colors truncate ${
                                    isSelected ? 'text-[#2582ff]' : 'text-slate-800'
                                  }`}>
                                    {item.title}
                                  </span>
                                  <span className="text-[9px] font-mono uppercase font-bold text-slate-400 bg-slate-50 border border-slate-200/70 px-1.5 py-0.5 rounded">
                                    {item.category}
                                  </span>
                                </div>
                                <p className="text-slate-500 text-xs line-clamp-1">
                                  {item.description}
                                </p>
                              </div>
                              <div className={`self-center transition-all text-[#2582ff] hidden sm:flex items-center gap-1 shrink-0 font-mono text-[9px] font-bold ${
                                isSelected ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-1'
                              }`}>
                                <span>SELECT</span>
                                <CornerDownLeft className="w-3 h-3" />
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-10 space-y-3.5 bg-slate-50/50 border border-slate-200/60 rounded-2xl">
                      <div className="p-3 bg-white border border-slate-200 rounded-full inline-block text-slate-400 shadow-3xs">
                        <Search className="w-6 h-6 animate-pulse" />
                      </div>
                      <h4 className="font-display font-extrabold text-slate-900 text-sm">No matching indexes found</h4>
                      <p className="text-slate-500 text-xs max-w-sm mx-auto px-4 leading-normal">
                        We couldn't locate any records matching "{query}". Please try matching standard terms such as "SME", "NRS", "Lagos Office", "SAP", or "FIRS".
                      </p>
                    </div>
                  )}
                </div>

                {/* Right Column (~35% width on desktop) */}
                <div className="lg:col-span-4 space-y-4">
                  <h4 className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400">
                    Enterprise Site Directory
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2">
                    {[
                      { title: 'Regulatory Landscape', id: 'home', desc: 'SLA parameters & official guidelines.' },
                      { title: 'CittaEFS Middleware Engine', id: 'cittaefs', desc: 'Electronic fiscal gateway specs.' },
                      { title: 'System Compatibility', id: 'solutions', desc: 'SAP, Oracle, Odoo & Microsoft connectors.' },
                      { title: 'Industries Invoicing', id: 'industries', desc: 'Custom vertical clearing solutions.' },
                      { title: 'Compliance Resources', id: 'resources', desc: 'Policy briefings & API handbooks.' },
                      { title: 'CSL Corporate Profile', id: 'company', desc: 'Engineering principles & contact details.' }
                    ].map((sec, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          setCurrentPage(sec.id as PageId);
                          onClose();
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="w-full flex flex-col p-2.5 rounded-xl border border-slate-200 bg-white hover:bg-[#2582ff]/5 hover:border-[#2582ff]/20 transition-all text-left cursor-pointer shadow-3xs group"
                      >
                        <div className="flex items-center space-x-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#2582ff] group-hover:scale-125 transition-transform" />
                          <span className="font-display font-bold text-xs text-slate-800 group-hover:text-[#2582ff] transition-colors">
                            {sec.title}
                          </span>
                        </div>
                        <span className="text-[10px] text-slate-400 mt-0.5 pl-3.5 truncate">
                          {sec.desc}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

              </div>
            </div>

          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
