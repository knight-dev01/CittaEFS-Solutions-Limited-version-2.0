import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Building2, CheckCircle2, ChevronRight, ArrowRight, Play, Database, ShieldAlert,
  Server, HelpCircle, Terminal, ClipboardCheck, Lock, Landmark, FileSpreadsheet,
  ArrowUp
} from 'lucide-react';
import { PageId } from './types';

// Component Imports
import Navbar from './components/Navbar';
import ScrollProgressBar from './components/ScrollProgressBar';
import SEOStructuredData from './components/SEOStructuredData';
import CSLHero from './components/CSLHero';
import ProductEcosystem from './components/ProductEcosystem';
import OtherProducts from './components/OtherProducts';
import Hero from './components/Hero';
import InteractiveDashboard from './components/InteractiveDashboard';
import FeatureGrid from './components/FeatureGrid';
import ImplementationRoadmap from './components/ImplementationRoadmap';
import IndustriesSection from './components/IndustriesSection';
import ResourcesTab from './components/ResourcesTab';
import CSLAbout from './components/CSLAbout';
import ContactForm from './components/ContactForm';
import ComplianceSection from './components/ComplianceSection';
import PartnerLogos from './components/PartnerLogos';
import SectionWrapper from './components/SectionWrapper';
import Footer from './components/Footer';
import ComplianceJourney from './components/ComplianceJourney';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Trigger demo request view
  const handleRequestDemo = () => {
    setCurrentPage('contact');
    setTimeout(() => {
      const element = document.getElementById('contact-section');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleLearnMore = () => {
    setCurrentPage('product');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans selection:bg-[#D9A441] selection:text-[#051A3B] overflow-x-hidden max-w-full">
      
      {/* Dynamic Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* SEO JSON-LD Structured Data Injection */}
      <SEOStructuredData currentPage={currentPage} />

      {/* Premium Top Navigation Header */}
      <Navbar 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
        onRequestDemo={handleRequestDemo} 
      />

      {/* Main Page Layout Content with Animated Page Transitions */}
      <main className="flex-grow overflow-x-hidden max-w-full w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="w-full max-w-full overflow-x-hidden"
          >
            {/* VIEW 1: HOME LANDING VIEW */}
            {currentPage === 'home' && (
              <div className="space-y-0">
                {/* 1. Parent CSL Corporate Hero */}
                <CSLHero 
                  onExploreEcosystem={() => { 
                    const el = document.getElementById('ecosystem-section'); 
                    if (el) el.scrollIntoView({ behavior: 'smooth' }); 
                  }} 
                  onExploreEFS={() => { 
                    setCurrentPage('cittaefs'); 
                    window.scrollTo({ top: 0, behavior: 'smooth' }); 
                  }}
                  onRequestDemo={handleRequestDemo}
                />

                {/* 2. Intro to CSL (About CSL values & status) */}
                <CSLAbout isSummary setCurrentPage={setCurrentPage} />
                
                {/* 3. Product Ecosystem Bento Directory */}
                <div id="ecosystem-section">
                  <ProductEcosystem setCurrentPage={setCurrentPage} />
                </div>

                <PartnerLogos />
              </div>
            )}

            {/* VIEW 2: CittaEFS (Product) */}
            {currentPage === 'cittaefs' && (
              <div>
                <Hero onGetStarted={handleRequestDemo} onLearnMore={() => { setCurrentPage('solutions'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} />
                <ComplianceJourney />
                <InteractiveDashboard />
                <ImplementationRoadmap />
              </div>
            )}

            {/* VIEW 2.1: ECOSYSTEM SUITE COMPONENT DEEP DIVES */}
            {['cittamatrix', 'cittahospitalityx', 'cittaplannerx', 'cittanexus'].includes(currentPage) && (
              <OtherProducts productId={currentPage} onRequestDemo={handleRequestDemo} />
            )}

            {/* VIEW 3: SOLUTIONS & ERP COMPATIBILITY TAB */}
            {currentPage === 'solutions' && (
              <div>
                <section className="pt-28 pb-16 sm:pt-36 sm:pb-16 lg:pt-40 lg:pb-16 bg-gradient-to-b from-slate-50 to-white text-center border-b border-slate-200">
                  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
                    <span className="font-mono text-xs uppercase tracking-widest text-emerald-800 font-bold bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-100">
                      Corporate Parent Architecture
                    </span>
                    <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
                      CSL Enterprise Integrations
                    </h1>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
                      <strong>CittaERP Solutions Limited (CSL)</strong> serves as the corporate parent foundation, positioning and unifying specialized digital ecosystems to power your enterprise operations and compliance.
                    </p>
                  </div>
                </section>

                {/* Compatibility details */}
                <section className="py-20 bg-white text-slate-900">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-12 gap-12 items-center">
                      <div className="lg:col-span-6 space-y-6 text-left">
                        <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900">
                          CSL Unified Ecosystem Positioning
                        </h3>
                        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                          As the central parent brand, <strong>CSL</strong> integrates our complete software suite directly into your active corporate structures. We do not require you to rip and replace your current IT infrastructure. Instead, CSL positions specialized solutions to optimize each dimension of your business:
                        </p>
                        
                        <div className="space-y-4 pt-2">
                          <div className="flex items-start space-x-3 text-sm text-slate-800">
                            <CheckCircle2 className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
                            <p><strong>CittaEFS Compliance Middleware:</strong> CSL's ultimate shielding system for regulatory tax clearance, connecting SAP, Oracle, and Dynamics ledgers with national servers without direct risk to database tables.</p>
                          </div>
                          <div className="flex items-start space-x-3 text-sm text-slate-800">
                            <CheckCircle2 className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
                            <p><strong>CittaMatrix ERP Core:</strong> Handles double-entry general ledger, asset management, and supply chain orchestration under CSL's secure corporate architecture.</p>
                          </div>
                          <div className="flex items-start space-x-3 text-sm text-slate-800">
                            <CheckCircle2 className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
                            <p><strong>CittaHospitalityX & CittaPlannerX:</strong> Specialized guest booking portals and advanced resource Gantt schedulers designed to fit industry-specific billing requirements.</p>
                          </div>
                          <div className="flex items-start space-x-3 text-sm text-slate-800">
                            <CheckCircle2 className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
                            <p><strong>CittaNexus API Gateway:</strong> The secure, TLS-encrypted central web-hook and routing hub of the CSL brand, managing high-throughput message transfers in milliseconds.</p>
                          </div>
                        </div>
                      </div>

                      <div className="lg:col-span-6 bg-slate-900 text-white p-8 sm:p-10 rounded-3xl border border-teal-500/20 shadow-xl space-y-6">
                        <div className="flex items-center space-x-3">
                          <div className="p-2.5 bg-white/10 rounded-xl text-teal-500">
                            <FileSpreadsheet className="w-6 h-6" />
                          </div>
                          <div>
                            <h4 className="font-display font-bold text-lg text-white">CSL Hotfolder Routing</h4>
                            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">Multi-Ecosystem Connector</span>
                          </div>
                        </div>

                        <p className="text-slate-300 text-sm leading-relaxed">
                          For systems without custom API capability, CSL deploys automated secure SFTP folder listeners. Your legacy systems simply deposit daily operations files, and the CSL parent framework handles the rest:
                        </p>

                        <div className="grid grid-cols-2 gap-4 text-xs font-mono">
                          <div className="bg-white/5 border border-white/5 p-3 rounded-xl">
                            <span className="text-slate-400 block uppercase text-[9px] mb-1">Step 1</span>
                            <span className="text-white block font-semibold">CSL Import</span>
                          </div>
                          <div className="bg-white/5 border border-white/5 p-3 rounded-xl">
                            <span className="text-slate-400 block uppercase text-[9px] mb-1">Step 2</span>
                            <span className="text-white block font-semibold">TIN Validation</span>
                          </div>
                          <div className="bg-white/5 border border-white/5 p-3 rounded-xl">
                            <span className="text-slate-400 block uppercase text-[9px] mb-1">Step 3</span>
                            <span className="text-teal-400 block font-bold">Cryptographic stamp</span>
                          </div>
                          <div className="bg-white/5 border border-white/5 p-3 rounded-xl">
                            <span className="text-slate-400 block uppercase text-[9px] mb-1">Step 4</span>
                            <span className="text-teal-400 block font-bold">NRS Clearance</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            )}

            {/* VIEW 4: INDUSTRIES */}
            {currentPage === 'industries' && (
              <IndustriesSection />
            )}

            {/* VIEW 5: RESOURCES */}
            {currentPage === 'resources' && (
              <ResourcesTab />
            )}

            {/* VIEW 6: ABOUT CSL (Company) */}
            {currentPage === 'company' && (
              <CSLAbout isTopPage />
            )}
            {currentPage === 'contact' && (
              <div>
                <section className="pt-28 pb-12 sm:pt-36 sm:pb-12 lg:pt-40 lg:pb-12 bg-gradient-to-b from-slate-50 to-white text-center border-b border-slate-200">
                  <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
                    <span className="font-mono text-xs uppercase tracking-widest text-[#082A63] font-bold bg-[#082A63]/5 px-3.5 py-1.5 rounded-full border border-[#082A63]/10">
                      Sales & Support
                    </span>
                    <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#051A3B]">
                      Connect with CSL
                    </h1>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed animate-fade-in">
                      Get custom pricing, schedule database audits, or request answers about state compliance rules. Our engineers are ready to support your enterprise.
                    </p>
                  </div>
                </section>
                
                <ContactForm />
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Corporate Sitemap Footer with Seals */}
      <Footer setCurrentPage={setCurrentPage} />

      {/* Back to Top Floating Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            id="back-to-top-button"
            onClick={scrollToTop}
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-6 right-6 z-50 p-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-2xl border border-emerald-500/30 cursor-pointer flex items-center justify-center transition-colors"
            aria-label="Back to top"
            title="Back to Top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  );
}
