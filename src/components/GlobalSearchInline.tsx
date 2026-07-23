import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, X, CornerDownLeft, FileText, Cpu, Landmark, Shield, PhoneCall, Sparkles, Building2, HelpCircle, Briefcase, CheckCircle2 } from 'lucide-react';
import { PageId } from '../types';

interface GlobalSearchInlineProps {
  isOpen: boolean;
  onClose: () => void;
  setCurrentPage: (page: PageId) => void;
  onRequestDemo: () => void;
  query: string;
  setQuery: (q: string) => void;
}

export interface SearchItem {
  title: string;
  category: 'Product' | 'Services' | 'Industries' | 'Company' | 'Resources' | 'Contact' | 'Clients';
  description: string;
  keywords: string[];
  pageId: PageId;
  scrollId?: string;
  url?: string;
}

export const SEARCH_INDEX: SearchItem[] = [
  // Products / CittaEFS
  {
    title: "CittaEFS Compliance Middleware Engine",
    category: "Product",
    description: "Flagship electronic fiscal system middleware bridging ERP systems to NRS compliance with real-time tax stamping.",
    keywords: ["cittaefs", "middleware", "engine", "compliance", "nrs", "electronic fiscal", "tax stamp", "firs", "clearing", "automated"],
    pageId: "products",
    scrollId: "products"
  },
  {
    title: "Validation Shield Gateway",
    category: "Product",
    description: "Secures transactions by validating TIN numbers, tax calculations, and currency formats prior to NRS transmission.",
    keywords: ["validation shield", "gateway", "tin check", "tax check", "security", "cryptography", "tin verification", "pre-clearance"],
    pageId: "products",
    scrollId: "products"
  },
  {
    title: "Excel Bulk Uploader Gateway",
    category: "Product",
    description: "Drag-and-drop gateway for SMEs to bulk upload Excel spreadsheets or CSV billing files for batch fiscal clearing.",
    keywords: ["excel", "bulk", "uploader", "csv", "spreadsheet", "drag", "drop", "sme", "excel uploader", "batch"],
    pageId: "products",
    scrollId: "products"
  },
  {
    title: "Live Validation Sandbox & Simulator",
    category: "Product",
    description: "Interactive simulator to inspect compliance handshakes, test raw JSON payloads, and measure clearance speed.",
    keywords: ["live", "validation", "sandbox", "simulator", "rest api", "json payload", "firs simulator", "api test"],
    pageId: "products",
    scrollId: "products"
  },
  {
    title: "Audit Ledger Vault (AES-256)",
    category: "Product",
    description: "Secures cleared compliance transaction history with AES-256 encryption and immutable non-repudiation logs.",
    keywords: ["audit ledger", "vault", "history", "aes-256", "ledger list", "tls", "security", "non-repudiation", "secure log"],
    pageId: "products",
    scrollId: "products"
  },
  {
    title: "Clearance Speed & Latency Metrics",
    category: "Product",
    description: "Examine sub-240ms system validation latency, packet clearance logs, and high-concurrency throughput rates.",
    keywords: ["clearing speed", "validation latency", "packet clearance", "routing speed", "high load", "clearing rate", "sub-240ms"],
    pageId: "products",
    scrollId: "products"
  },
  
  // Other CSL Ecosystem Products
  {
    title: "CittaMatrix Core ERP",
    category: "Product",
    description: "Consolidate multi-entity operations, supply chain stock, asset depreciation, and double-entry general ledgers.",
    keywords: ["cittamatrix", "matrix", "erp", "ledger", "general ledger", "accounting", "operations", "supply chain"],
    pageId: "products",
    scrollId: "products",
    url: "https://cittamatrix.com/"
  },
  {
    title: "CittaHospitalityX Property Management",
    category: "Product",
    description: "Next-generation hotel PMS, room allocations, housekeeping rosters, guest mobile portals, and unified folio billing.",
    keywords: ["cittahospitalityx", "hospitalityx", "pms", "hotel", "resort", "booking", "folio", "room allocation"],
    pageId: "products",
    scrollId: "products",
    url: "https://cittahospitalityx.com/"
  },
  {
    title: "CittaPlannerX Resource Scheduler",
    category: "Product",
    description: "Enterprise scheduling software featuring interactive Gantt charts, milestone paths, and resource leveling.",
    keywords: ["cittaplannerx", "plannerx", "scheduler", "gantt", "critical path", "milestone", "resource leveling"],
    pageId: "products",
    scrollId: "products",
    url: "https://cittaplannerx.com/"
  },
  {
    title: "CittaNexus API Gateway",
    category: "Product",
    description: "Central encryption integration hub supporting webhooks, REST / SOAP protocols, and live telemetry.",
    keywords: ["cittanexus", "nexus", "api gateway", "webhooks", "integration", "tls tunnel", "router"],
    pageId: "products",
    scrollId: "products",
    url: "https://cittanexus.com/"
  },

  // Services
  {
    title: "Professional ERP System Integrations",
    category: "Services",
    description: "Seamless connectors linking SAP ECC6/S4HANA, Oracle Financials, Microsoft Dynamics 365, and Odoo to tax nodes.",
    keywords: ["sap", "oracle", "microsoft dynamics", "odoo", "erp integration", "connectors", "database sync"],
    pageId: "services",
    scrollId: "services"
  },
  {
    title: "Custom Software & Middleware Development",
    category: "Services",
    description: "Tailored software engineering for custom database schemas, complex billing pipelines, and proprietary ledger logic.",
    keywords: ["custom software", "middleware development", "bespoke engineering", "database schemas", "custom api"],
    pageId: "services",
    scrollId: "services"
  },
  {
    title: "Staging, Scenario Testing & Sandboxing",
    category: "Services",
    description: "Rigorous dry-run testing environment to validate tax calculations, high-volume stress tests, and API payloads.",
    keywords: ["staging", "testing", "sandboxing", "dry run", "stress test", "payload validation"],
    pageId: "services",
    scrollId: "services"
  },
  {
    title: "Compliance & Regulatory Consulting",
    category: "Services",
    description: "Expert guidance on federal tax policies, electronic invoicing mandates, and data privacy regulations (NDPA).",
    keywords: ["compliance consulting", "regulatory guidance", "firs compliance", "tax policies", "ndpa privacy"],
    pageId: "services",
    scrollId: "services"
  },
  {
    title: "Dedicated 24/7 SLA Technical Support",
    category: "Services",
    description: "Around-the-clock systems monitoring, emergency incident triage, and continuous system uptime assurances.",
    keywords: ["24/7 support", "sla support", "technical monitoring", "uptime assurance", "incident triage"],
    pageId: "services",
    scrollId: "services"
  },

  // Industries
  {
    title: "Manufacturing & Assembly Invoicing",
    category: "Industries",
    description: "VAT calculation engine, multi-site factory inventory invoice clearing, and automated warehouse ledger reporting.",
    keywords: ["manufacturing", "factory", "vat", "inventory", "multi-site", "warehouse ledger", "supply chain"],
    pageId: "industries",
    scrollId: "industries"
  },
  {
    title: "Conglomerates & Distribution Logistics",
    category: "Industries",
    description: "Handles massive scale, multi-currency invoicing, cross-border custom codes, and high-volume automated distribution.",
    keywords: ["conglomerates", "distribution", "logistics", "multi-currency", "massive scale", "cross-border"],
    pageId: "industries",
    scrollId: "industries"
  },
  {
    title: "Oil & Gas Energy Sector",
    category: "Industries",
    description: "B2B clearing with customizable regulatory attributes matching energy, refining, downstream, and pipeline transactions.",
    keywords: ["oil", "gas", "energy", "refining", "pipeline", "b2b", "petroleum", "downstream"],
    pageId: "industries",
    scrollId: "industries"
  },
  {
    title: "Telecommunications & Mass Billing",
    category: "Industries",
    description: "Sub-millisecond high-frequency POS clearings for modern telecommunication and data networks.",
    keywords: ["telecom", "telecommunications", "billing", "high-frequency", "pos", "cellular network"],
    pageId: "industries",
    scrollId: "industries"
  },

  // Company & Purpose
  {
    title: "Why We Exist - CSL Purpose & Vision",
    category: "Company",
    description: "Closing the gap between complex enterprise ERP ledgers and evolving national fiscal compliance demands.",
    keywords: ["why we exist", "purpose", "vision", "csl history", "cittanuvola group", "mission", "core values"],
    pageId: "why-we-exist",
    scrollId: "why-we-exist"
  },
  {
    title: "CittaNuvola Group Backing & Corporate Profile",
    category: "Company",
    description: "Backing of a premier software conglomerate providing deep technological reserves, financial stability, and governance.",
    keywords: ["cittanuvola group", "corporate profile", "csl profile", "financial backing", "enterprise software"],
    pageId: "about",
    scrollId: "about"
  },
  {
    title: "Security, Trust & NDPA Privacy Framework",
    category: "Company",
    description: "Fully aligned with NDPA privacy directives, featuring TLS 1.3 transport encryption and AES-256 ledger storage.",
    keywords: ["security", "trust", "privacy", "ndpa", "encryption", "data protection", "ndpb compliance"],
    pageId: "about",
    scrollId: "about"
  },
  
  // Clients
  {
    title: "Adron Homes & Properties",
    category: "Clients",
    description: "Real Estate & Housing Infrastructure partner utilizing CSL fiscal systems for automated billing.",
    keywords: ["adron homes", "real estate", "housing", "client portfolio", "partner logo"],
    pageId: "home",
    scrollId: "clients"
  },
  {
    title: "National Revenue Service Compliance",
    category: "Clients",
    description: "Revenue service compliance integration channel ensuring direct, seamless fiscal clearing.",
    keywords: ["nrs", "national revenue service", "compliance channel", "firs", "tax clearing"],
    pageId: "home",
    scrollId: "clients"
  },
  {
    title: "Coswals Structures Limited",
    category: "Clients",
    description: "Civil Engineering & Heavy Logistics corporate partner integrated with CSL enterprise solutions.",
    keywords: ["coswals structures", "civil engineering", "logistics", "partner logo"],
    pageId: "home",
    scrollId: "clients"
  },
  {
    title: "Sety.io Safety & Emergency Systems",
    category: "Clients",
    description: "Emergency Response & Safety Protocols platform integrated with CSL API gateways.",
    keywords: ["sety.io", "emergency response", "safety protocols", "client"],
    pageId: "home",
    scrollId: "clients"
  },
  {
    title: "Scarlet & Snow E-commerce",
    category: "Clients",
    description: "E-commerce & Smart Inventory Orchestration brand running CSL automated transaction systems.",
    keywords: ["scarlet and snow", "e-commerce", "inventory", "client"],
    pageId: "home",
    scrollId: "clients"
  },
  {
    title: "West Metro Mass Transit",
    category: "Clients",
    description: "Urban Mass Transit & Smart Mobility Integration enterprise using CSL transaction modules.",
    keywords: ["west metro", "transit", "mobility", "urban transit", "client"],
    pageId: "home",
    scrollId: "clients"
  },
  {
    title: "Redeemers High School",
    category: "Clients",
    description: "Educational Administration & Multi-Campus Operations institution running CSL administrative portals.",
    keywords: ["redeemers high school", "education", "multi-campus", "school portal", "client"],
    pageId: "home",
    scrollId: "clients"
  },

  // Resources & FAQ
  {
    title: "Four-Step Integration Roadmap",
    category: "Resources",
    description: "Structured onboarding path: 01 Discovery & Mapping, 02 Architecture, 03 Validation, 04 Operational Readiness.",
    keywords: ["integration roadmap", "approach", "steps", "discovery", "architecture", "validation", "readiness"],
    pageId: "approach",
    scrollId: "approach"
  },
  {
    title: "NRS Compliance FAQ",
    category: "Resources",
    description: "How CittaEFS automatically handles pre-clearance validation, TIN checks, and SHA-256 signatures.",
    keywords: ["faq", "nrs compliance", "pre-clearance", "tin check", "sha-256", "rejections"],
    pageId: "home",
    scrollId: "faq"
  },
  {
    title: "ERP & Systems Integration FAQ",
    category: "Resources",
    description: "Connect legacy databases like SAP, Oracle, Odoo, and Microsoft Dynamics without altering business logic.",
    keywords: ["faq", "erp integration", "sap integration", "oracle", "odoo", "dynamics", "triggers"],
    pageId: "home",
    scrollId: "faq"
  },
  {
    title: "Security, Encryption & Privacy FAQ",
    category: "Resources",
    description: "Information security design, TLS 1.3 encryption tunnels, AES-256 Audit Ledger Vault, and NDPA compliance.",
    keywords: ["faq", "security", "encryption", "tls 1.3", "aes-256", "ndpa", "privacy"],
    pageId: "home",
    scrollId: "faq"
  },

  // Contact
  {
    title: "CSL Corporate HQ & Consultation Inquiries",
    category: "Contact",
    description: "Victoria Island Corporate District, Lagos State. Phone: +234 (1) 888 3379. Email: info@cittanuvola.com.",
    keywords: ["contact", "lagos office", "victoria island", "phone", "email", "info@cittanuvola.com", "request consultation", "demo"],
    pageId: "contact",
    scrollId: "contact"
  }
];

export const POPULAR_SUGGESTIONS = [
  "CittaEFS Compliance",
  "SAP Integration",
  "Excel Bulk Uploader",
  "NRS Specs",
  "TIN Verification",
  "Lagos Corporate HQ",
  "CittaMatrix ERP",
  "Request Staging"
];

// Helper component to highlight matching query text and characters
export function HighlightMatch({ text, query }: { text: string; query: string }) {
  if (!query || !query.trim()) return <>{text}</>;

  const trimmed = query.trim();
  const escaped = trimmed.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(`(${escaped})`, 'gi');
  const parts = text.split(regex);

  return (
    <>
      {parts.map((part, i) => 
        part.toLowerCase() === trimmed.toLowerCase() ? (
          <mark key={i} className="bg-amber-100 text-[#2582ff] font-extrabold px-0.5 rounded shadow-2xs">
            {part}
          </mark>
        ) : (
          part
        )
      )}
    </>
  );
}

export default function GlobalSearchInline({
  isOpen,
  onClose,
  setCurrentPage,
  onRequestDemo,
  query,
  setQuery
}: GlobalSearchInlineProps) {
  const [results, setResults] = useState<SearchItem[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        // Only close if click is outside the search bar wrapper
        const searchInput = document.getElementById('navbar-search-container');
        if (searchInput && searchInput.contains(event.target as Node)) {
          return;
        }
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  // Perform search matching
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

  // Keyboard navigation
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
        if (results.length > 0 && results[selectedIndex]) {
          e.preventDefault();
          handleItemSelect(results[selectedIndex]);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, results, selectedIndex]);

  const handleItemSelect = (item: SearchItem) => {
    if (item.url) {
      window.open(item.url, '_blank', 'noopener,noreferrer');
      onClose();
      return;
    }

    if (item.title.toLowerCase().includes("demo") || item.title.toLowerCase().includes("staging") || item.scrollId === "contact") {
      onRequestDemo();
    } else {
      setCurrentPage(item.pageId);
    }

    // Smooth scroll to section
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

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Product': return <Cpu className="w-4 h-4 text-[#2582ff]" />;
      case 'Services': return <Briefcase className="w-4 h-4 text-[#2582ff]" />;
      case 'Industries': return <Landmark className="w-4 h-4 text-[#ff8e1a]" />;
      case 'Company': return <Building2 className="w-4 h-4 text-[#2582ff]" />;
      case 'Resources': return <FileText className="w-4 h-4 text-[#ff8e1a]" />;
      case 'Clients': return <CheckCircle2 className="w-4 h-4 text-emerald-500" />;
      default: return <PhoneCall className="w-4 h-4 text-slate-500" />;
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={dropdownRef}
          id="search-dropdown-menu"
          initial={{ opacity: 0, y: 6, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 6, scale: 0.98 }}
          transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-full right-0 mt-2.5 w-[92vw] sm:w-[540px] md:w-[620px] max-h-[75vh] bg-white border border-slate-200/90 shadow-2xl rounded-2xl z-50 overflow-hidden flex flex-col text-slate-800"
        >
          {/* Custom Scrollbar Styles */}
          <style>{`
            .search-dropdown-scroll::-webkit-scrollbar {
              width: 5px;
            }
            .search-dropdown-scroll::-webkit-scrollbar-track {
              background: transparent;
            }
            .search-dropdown-scroll::-webkit-scrollbar-thumb {
              background: rgba(148, 163, 184, 0.3);
              border-radius: 9999px;
            }
            .search-dropdown-scroll::-webkit-scrollbar-thumb:hover {
              background: rgba(148, 163, 184, 0.5);
            }
          `}</style>

          {/* Top Bar Status Info */}
          <div className="px-4 py-2.5 bg-slate-50 border-b border-slate-100 flex items-center justify-between text-xs text-slate-500 shrink-0">
            <div className="flex items-center space-x-1.5 font-mono text-[10px] uppercase font-bold text-slate-400">
              <Search className="w-3.5 h-3.5 text-[#2582ff]" />
              <span>High-Index CSL Directory</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="hidden sm:inline text-[10px] text-slate-400 font-mono">Use ↑↓ & Enter</span>
              <button
                onClick={onClose}
                className="text-slate-400 hover:text-slate-600 p-1 hover:bg-slate-200/50 rounded-lg transition-colors cursor-pointer"
                title="Close search"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Content Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 max-h-[calc(75vh-42px)] search-dropdown-scroll bg-white">
            
            {query.trim() === '' ? (
              /* Initial State: Suggestions & Popular Searches */
              <div className="space-y-4">
                <div className="space-y-2">
                  <h4 className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 flex items-center space-x-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#ff8e1a]" />
                    <span>Popular Search Suggestions</span>
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {POPULAR_SUGGESTIONS.map((suggestion, idx) => (
                      <button
                        key={idx}
                        onClick={() => setQuery(suggestion)}
                        className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-100 hover:bg-[#2582ff]/10 hover:text-[#2582ff] border border-slate-200/70 text-slate-700 transition-all cursor-pointer text-left"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50/70 border border-slate-200/60 text-xs text-slate-600 space-y-2">
                  <span className="font-mono font-bold uppercase text-[10px] text-[#2582ff] block">
                    Fast Keyword Navigation
                  </span>
                  <p className="text-slate-500 leading-relaxed text-[11px]">
                    Type keywords like <strong>"SAP"</strong>, <strong>"Excel"</strong>, <strong>"Lagos"</strong>, <strong>"NRS"</strong>, or <strong>"FAQ"</strong> to filter modules instantly with exact character highlighting.
                  </p>
                </div>
              </div>
            ) : results.length > 0 ? (
              /* Search Results list with character & text highlighting */
              <div className="space-y-2">
                <div className="flex items-center justify-between pb-1">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                    Matches Found ({results.length})
                  </span>
                  <span className="text-[10px] font-mono text-[#2582ff]">
                    Query: "{query}"
                  </span>
                </div>

                <div className="space-y-1.5">
                  {results.map((item, idx) => {
                    const isSelected = idx === selectedIndex;
                    return (
                      <button
                        key={idx}
                        onClick={() => handleItemSelect(item)}
                        onMouseEnter={() => setSelectedIndex(idx)}
                        className={`w-full flex items-start space-x-3 p-3 rounded-xl border transition-all text-left group cursor-pointer ${
                          isSelected
                            ? 'bg-[#2582ff]/5 border-[#2582ff]/30 shadow-sm'
                            : 'bg-white border-slate-100 hover:bg-slate-50 hover:border-slate-200'
                        }`}
                      >
                        <div className={`p-2 rounded-lg border shrink-0 mt-0.5 ${
                          isSelected
                            ? 'bg-white border-[#2582ff]/20'
                            : 'bg-slate-50 border-slate-100'
                        }`}>
                          {getCategoryIcon(item.category)}
                        </div>

                        <div className="flex-1 min-w-0 space-y-1">
                          <div className="flex items-center justify-between gap-2">
                            <h5 className={`font-display font-bold text-xs sm:text-sm truncate ${
                              isSelected ? 'text-[#2582ff]' : 'text-slate-800'
                            }`}>
                              <HighlightMatch text={item.title} query={query} />
                            </h5>
                            <span className="text-[9px] font-mono uppercase font-bold text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded shrink-0">
                              <HighlightMatch text={item.category} query={query} />
                            </span>
                          </div>

                          <p className="text-slate-500 text-xs line-clamp-2 leading-relaxed">
                            <HighlightMatch text={item.description} query={query} />
                          </p>
                        </div>

                        <CornerDownLeft className={`w-4 h-4 text-[#2582ff] shrink-0 self-center transition-opacity ${
                          isSelected ? 'opacity-100' : 'opacity-0'
                        }`} />
                      </button>
                    );
                  })}
                </div>
              </div>
            ) : (
              /* No matches state */
              <div className="text-center py-8 space-y-2">
                <p className="font-display font-bold text-slate-800 text-sm">No matching records found</p>
                <p className="text-slate-500 text-xs max-w-xs mx-auto">
                  We couldn't locate any items for "<strong>{query}</strong>". Try searching for "SAP", "Compliance", "Lagos", "Excel", or "FAQ".
                </p>
              </div>
            )}

          </div>

          {/* Bottom Footer hint */}
          <div className="px-4 py-2 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-400 font-mono">
            <span>CSL Global Indexing Engine</span>
            <span>Press ESC to close</span>
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}
