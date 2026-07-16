import { useState, useEffect } from 'react';
import { Menu, X, Shield, FileText, HelpCircle, PhoneCall, Building2, Cpu, FileCheck, Landmark, Search } from 'lucide-react';
import { PageId } from '../types';
import GlobalSearchInline from './GlobalSearchInline';
import cslLogo from '../logo.png';

interface NavbarProps {
  currentPage: PageId;
  setCurrentPage: (page: PageId) => void;
  onRequestDemo: () => void;
}

export default function Navbar({ currentPage, setCurrentPage, onRequestDemo }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', icon: Building2 },
    { id: 'cittaefs', label: 'CittaEFS', icon: Cpu },
    { id: 'solutions', label: 'Solutions', icon: FileCheck },
    { id: 'industries', label: 'Industries', icon: Landmark },
    { id: 'resources', label: 'Resources', icon: FileText },
    { id: 'company', label: 'Company', icon: Shield },
    { id: 'contact', label: 'Contact', icon: PhoneCall },
  ] as const;

  const handleNavClick = (id: PageId) => {
    setCurrentPage(id);
    setIsOpen(false);
    setIsProductsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const [isProductsOpen, setIsProductsOpen] = useState(false);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white/95 backdrop-blur-md border-b border-slate-200/80 text-slate-800 shadow-sm ${
      isScrolled ? 'py-0 shadow-md' : 'py-1.5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <div className="flex items-center cursor-pointer group space-x-3.5" onClick={() => handleNavClick('home')}>
            <img 
              src={cslLogo} 
              alt="CSL Logo" 
              className="h-11 w-auto object-contain bg-slate-50 p-1 rounded-lg border border-slate-100 transition-transform duration-300 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="flex flex-col">
              <span className="block text-[8px] sm:text-[9px] font-mono text-[#2582ff] uppercase tracking-widest font-extrabold mt-1">
                Enterprise Software Ecosystem
              </span>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center space-x-6 relative">
            <button
              id="nav-item-home"
              onClick={() => handleNavClick('home')}
              className={`text-sm font-medium transition-colors cursor-pointer ${
                currentPage === 'home' ? 'text-emerald-700 font-semibold' : 'text-slate-600 hover:text-emerald-600'
              }`}
            >
              Home
            </button>

            {/* Products Mega Menu Button & Panel */}
            <div 
              className="relative"
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              <button
                id="nav-item-products"
                className={`text-sm font-medium transition-colors cursor-pointer flex items-center space-x-1 ${
                  ['cittaefs', 'cittamatrix', 'cittahospitalityx', 'cittaplannerx', 'cittanexus'].includes(currentPage)
                    ? 'text-emerald-700 font-semibold'
                    : 'text-slate-600 hover:text-emerald-600'
                }`}
              >
                <span>Products</span>
                <span className="text-[10px] opacity-60">▼</span>
              </button>

              {/* Mega Menu Dropdown */}
              {isProductsOpen && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full w-[650px] bg-white border border-slate-200 shadow-2xl rounded-3xl p-6 grid grid-cols-12 gap-6 pt-5 mt-2 animate-fade-in text-left z-50">
                  
                  {/* Left panel: Featured product (CittaEFS) */}
                  <div className="col-span-6 bg-slate-50 p-5 rounded-2xl border border-slate-100 flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <span className="bg-emerald-600 text-white text-[8px] font-mono font-bold uppercase px-2 py-0.5 rounded">
                          FEATURED
                        </span>
                        <span className="text-[9px] font-mono text-slate-400">MIDDLEWARE</span>
                      </div>
                      <h4 className="font-display font-extrabold text-[#051A3B] text-lg">
                        CittaEFS Compliance
                      </h4>
                      <p className="text-slate-500 text-xs leading-relaxed">
                        The ultimate intelligent bridge connecting existing enterprise ERP ledgers directly to state tax authorities with real-time pre-clearance validation.
                      </p>
                    </div>
                    <button
                      onClick={() => handleNavClick('cittaefs')}
                      className="mt-4 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs rounded-xl w-full text-center transition-all cursor-pointer"
                    >
                      Explore CittaEFS Suite
                    </button>
                  </div>

                  {/* Right panel: Product Ecosystem */}
                  <div className="col-span-6 space-y-3">
                    <span className="block font-mono text-[9px] text-slate-400 font-bold uppercase tracking-wider">
                      CSL Ecosystem Products
                    </span>
                    
                    <div className="space-y-2.5">
                      <a 
                        href="https://cittamatrix.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full text-left p-2 hover:bg-slate-50 rounded-xl transition-all flex items-start space-x-3 group cursor-pointer block"
                      >
                        <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg shrink-0 group-hover:bg-emerald-100">
                          <Cpu className="w-4 h-4" />
                        </div>
                        <div>
                          <h5 className="font-display font-bold text-xs text-slate-800 group-hover:text-emerald-700 flex items-center gap-1">
                            <span>CittaMatrix</span>
                            <span className="text-[9px] opacity-60">↗</span>
                          </h5>
                          <p className="text-[10px] text-slate-400 leading-tight">Advanced Accounting & supply chain core ERP</p>
                        </div>
                      </a>

                      <a 
                        href="https://cittahospitalityx.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full text-left p-2 hover:bg-slate-50 rounded-xl transition-all flex items-start space-x-3 group cursor-pointer block"
                      >
                        <div className="p-2 bg-teal-50 text-teal-600 rounded-lg shrink-0 group-hover:bg-teal-100">
                          <Landmark className="w-4 h-4" />
                        </div>
                        <div>
                          <h5 className="font-display font-bold text-xs text-slate-800 group-hover:text-teal-700 flex items-center gap-1">
                            <span>CittaHospitalityX</span>
                            <span className="text-[9px] opacity-60">↗</span>
                          </h5>
                          <p className="text-[10px] text-slate-400 leading-tight">Next-gen PMS & hotel guest orchestration</p>
                        </div>
                      </a>

                      <a 
                        href="https://cittaplannerx.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full text-left p-2 hover:bg-slate-50 rounded-xl transition-all flex items-start space-x-3 group cursor-pointer block"
                      >
                        <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg shrink-0 group-hover:bg-emerald-100">
                          <FileText className="w-4 h-4" />
                        </div>
                        <div>
                          <h5 className="font-display font-bold text-xs text-slate-800 group-hover:text-emerald-700 flex items-center gap-1">
                            <span>CittaPlannerX</span>
                            <span className="text-[9px] opacity-60">↗</span>
                          </h5>
                          <p className="text-[10px] text-slate-400 leading-tight">Interactive timeline scheduling & resource leveling</p>
                        </div>
                      </a>

                      <a 
                        href="https://cittanexus.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full text-left p-2 hover:bg-slate-50 rounded-xl transition-all flex items-start space-x-3 group cursor-pointer block"
                      >
                        <div className="p-2 bg-teal-50 text-teal-600 rounded-lg shrink-0 group-hover:bg-teal-100">
                          <Shield className="w-4 h-4" />
                        </div>
                        <div>
                          <h5 className="font-display font-bold text-xs text-slate-800 group-hover:text-teal-700 flex items-center gap-1">
                            <span>CittaNexus</span>
                            <span className="text-[9px] opacity-60">↗</span>
                          </h5>
                          <p className="text-[10px] text-slate-400 leading-tight">Central connection gateway & webhook router</p>
                        </div>
                      </a>
                    </div>
                  </div>

                </div>
              )}
            </div>

            <button
              id="nav-item-solutions"
              onClick={() => handleNavClick('solutions')}
              className={`text-sm font-medium transition-colors cursor-pointer ${
                currentPage === 'solutions' ? 'text-emerald-700 font-semibold' : 'text-slate-600 hover:text-emerald-600'
              }`}
            >
              Solutions
            </button>

            <button
              id="nav-item-industries"
              onClick={() => handleNavClick('industries')}
              className={`text-sm font-medium transition-colors cursor-pointer ${
                currentPage === 'industries' ? 'text-emerald-700 font-semibold' : 'text-slate-600 hover:text-emerald-600'
              }`}
            >
              Industries
            </button>

            <button
              id="nav-item-resources"
              onClick={() => handleNavClick('resources')}
              className={`text-sm font-medium transition-colors cursor-pointer ${
                currentPage === 'resources' ? 'text-emerald-700 font-semibold' : 'text-slate-600 hover:text-emerald-600'
              }`}
            >
              Resources
            </button>

            <button
              id="nav-item-company"
              onClick={() => handleNavClick('company')}
              className={`text-sm font-medium transition-colors cursor-pointer ${
                currentPage === 'company' ? 'text-emerald-700 font-semibold' : 'text-slate-600 hover:text-emerald-600'
              }`}
            >
              Company
            </button>

            <button
              id="nav-item-contact"
              onClick={() => handleNavClick('contact')}
              className={`text-sm font-medium transition-colors cursor-pointer ${
                currentPage === 'contact' ? 'text-emerald-700 font-semibold' : 'text-slate-600 hover:text-emerald-600'
              }`}
            >
              Contact
            </button>
          </div>

          {/* Contact Sales / Request Demo CTA & Search */}
          <div className="hidden lg:flex items-center space-x-3">
            <button
              id="desktop-search-trigger"
              onClick={() => setIsSearchOpen(true)}
              className="p-2 text-slate-500 hover:text-emerald-700 hover:bg-slate-100 rounded-full transition-all cursor-pointer"
              title="Search documentation & solutions"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              id="cta-nav-demo"
              onClick={onRequestDemo}
              className="px-5 py-2 rounded-full text-xs font-semibold tracking-wide text-white bg-slate-900 hover:bg-slate-800 transition-all duration-300 cursor-pointer"
            >
              Request Demo
            </button>
          </div>

          {/* Mobile menu & search triggers */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              id="mobile-search-trigger"
              onClick={() => setIsSearchOpen(true)}
              className="p-2 text-slate-500 hover:text-emerald-700 hover:bg-slate-50 rounded-full transition-all cursor-pointer"
              title="Search documentation & solutions"
            >
              <Search className="w-5.5 h-5.5" />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-500 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-1.5 shadow-lg max-h-[85vh] overflow-y-auto">
          <button
            onClick={() => handleNavClick('home')}
            className={`w-full text-left px-4 py-2 rounded-lg text-sm font-semibold transition-colors cursor-pointer ${
              currentPage === 'home' ? 'text-emerald-700 bg-emerald-50' : 'text-slate-600 hover:text-emerald-600 hover:bg-slate-50'
            }`}
          >
            Home
          </button>

          {/* Mobile Products Group */}
          <div className="space-y-1">
            <div className="px-4 py-2 text-xs font-mono font-bold uppercase tracking-widest text-slate-400">
              Products Ecosystem
            </div>
            <div className="pl-3 space-y-1">
              {[
                { id: 'cittaefs', label: 'CittaEFS (Compliance)' },
                { id: 'cittamatrix', label: 'CittaMatrix (Core ERP)', href: 'https://cittamatrix.com/' },
                { id: 'cittahospitalityx', label: 'CittaHospitalityX (PMS)', href: 'https://cittahospitalityx.com/' },
                { id: 'cittaplannerx', label: 'CittaPlannerX (Scheduler)', href: 'https://cittaplannerx.com/' },
                { id: 'cittanexus', label: 'CittaNexus (API Gateway)', href: 'https://cittanexus.com/' }
              ].map((p) => {
                const isActive = currentPage === p.id;
                if (p.href) {
                  return (
                    <a
                      key={p.id}
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full text-left px-4 py-2 rounded-lg text-xs font-medium transition-all cursor-pointer text-slate-600 hover:text-emerald-600 hover:bg-slate-50 flex items-center justify-between block"
                      onClick={() => setIsOpen(false)}
                    >
                      <span>{p.label}</span>
                      <span className="text-[10px] opacity-50">↗</span>
                    </a>
                  );
                }
                return (
                  <button
                    key={p.id}
                    onClick={() => handleNavClick(p.id as PageId)}
                    className={`w-full text-left px-4 py-2 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                      isActive
                        ? 'text-emerald-700 bg-emerald-50/60 font-semibold border-l-2 border-emerald-500'
                        : 'text-slate-600 hover:text-emerald-600 hover:bg-slate-50'
                    }`}
                  >
                    {p.label}
                  </button>
                );
              })}
            </div>
          </div>

          <button
            onClick={() => handleNavClick('solutions')}
            className={`w-full text-left px-4 py-2 rounded-lg text-sm font-semibold transition-colors cursor-pointer ${
              currentPage === 'solutions' ? 'text-emerald-700 bg-emerald-50' : 'text-slate-600 hover:text-emerald-600 hover:bg-slate-50'
            }`}
          >
            Solutions
          </button>

          <button
            onClick={() => handleNavClick('industries')}
            className={`w-full text-left px-4 py-2 rounded-lg text-sm font-semibold transition-colors cursor-pointer ${
              currentPage === 'industries' ? 'text-emerald-700 bg-emerald-50' : 'text-slate-600 hover:text-emerald-600 hover:bg-slate-50'
            }`}
          >
            Industries
          </button>

          <button
            onClick={() => handleNavClick('resources')}
            className={`w-full text-left px-4 py-2 rounded-lg text-sm font-semibold transition-colors cursor-pointer ${
              currentPage === 'resources' ? 'text-emerald-700 bg-emerald-50' : 'text-slate-600 hover:text-emerald-600 hover:bg-slate-50'
            }`}
          >
            Resources
          </button>

          <button
            onClick={() => handleNavClick('company')}
            className={`w-full text-left px-4 py-2 rounded-lg text-sm font-semibold transition-colors cursor-pointer ${
              currentPage === 'company' ? 'text-emerald-700 bg-emerald-50' : 'text-slate-600 hover:text-emerald-600 hover:bg-slate-50'
            }`}
          >
            Company
          </button>

          <button
            onClick={() => handleNavClick('contact')}
            className={`w-full text-left px-4 py-2 rounded-lg text-sm font-semibold transition-colors cursor-pointer ${
              currentPage === 'contact' ? 'text-emerald-700 bg-emerald-50' : 'text-slate-600 hover:text-emerald-600 hover:bg-slate-50'
            }`}
          >
            Contact
          </button>

          <div className="pt-4 px-4">
            <button
              onClick={() => {
                setIsOpen(false);
                onRequestDemo();
              }}
              className="w-full text-center px-6 py-2.5 rounded-lg text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 transition-all cursor-pointer shadow-md"
            >
              Request Demo
            </button>
          </div>
        </div>
      )}

      {/* Global Command Palette Search Inline Drawer */}
      <GlobalSearchInline
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        setCurrentPage={setCurrentPage}
        onRequestDemo={onRequestDemo}
      />
    </nav>
  );
}
