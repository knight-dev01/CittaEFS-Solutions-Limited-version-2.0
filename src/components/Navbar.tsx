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
    { id: 'home', label: 'Home', target: 'home' },
    { id: 'about', label: 'Who We Are', target: 'about' },
    { id: 'challenges', label: 'Challenges', target: 'challenges' },
    { id: 'products', label: 'Solutions', target: 'products' },
    { id: 'industries', label: 'Industries', target: 'industries' },
    { id: 'why-choose-csl', label: 'Why CSL', target: 'why-choose-csl' },
    { id: 'approach', label: 'Approach', target: 'approach' },
    { id: 'vision', label: 'Vision', target: 'vision' },
    { id: 'contact', label: 'Contact', target: 'contact' },
  ] as const;

  const handleNavClick = (targetId: string) => {
    setIsOpen(false);
    setIsProductsOpen(false);
    if (targetId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const [isProductsOpen, setIsProductsOpen] = useState(false);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white/95 backdrop-blur-md border-b border-slate-200/80 text-slate-800 shadow-sm ${
      isScrolled ? 'py-0 shadow-md' : 'py-1.5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <div className="flex items-center cursor-pointer group space-x-3" onClick={() => handleNavClick('home')}>
            <img 
              src={cslLogo} 
              alt="CSL Logo" 
              className="h-10 w-auto object-contain bg-slate-50 p-1 rounded-lg border border-slate-100 transition-transform duration-300 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="flex flex-col text-left">
              <span className="block text-[11px] sm:text-xs font-display font-extrabold leading-none text-slate-900 tracking-tight">
                CittaERP Solutions Limited
              </span>
              <span className="block text-[8px] font-mono text-[#2582ff] uppercase tracking-widest font-extrabold mt-0.5">
                CSL CORPORATE SITE
              </span>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center space-x-4 lg:space-x-5 relative">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`nav-item-${item.id}`}
                onClick={() => handleNavClick(item.target)}
                className="text-xs lg:text-sm font-semibold text-slate-600 hover:text-[#2582ff] transition-colors cursor-pointer py-1.5"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Contact Sales / Request Demo CTA & Search */}
          <div className="hidden lg:flex items-center space-x-3">
            <button
              id="desktop-search-trigger"
              onClick={() => setIsSearchOpen(true)}
              className="p-2 text-slate-500 hover:text-[#2582ff] hover:bg-slate-100 rounded-full transition-all cursor-pointer"
              title="Search documentation & solutions"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              id="cta-nav-demo"
              onClick={onRequestDemo}
              className="px-5 py-2.5 rounded-full text-xs font-bold tracking-wide text-white bg-slate-900 hover:bg-[#1a73e8] hover:scale-105 transition-all duration-300 cursor-pointer shadow-md"
            >
              Request Staging
            </button>
          </div>

          {/* Mobile menu & search triggers */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              id="mobile-search-trigger"
              onClick={() => setIsSearchOpen(true)}
              className="p-2 text-slate-500 hover:text-[#2582ff] hover:bg-slate-50 rounded-full transition-all cursor-pointer"
              title="Search documentation & solutions"
            >
              <Search className="w-5 h-5" />
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
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.target)}
              className="w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-600 hover:text-[#2582ff] hover:bg-slate-50 transition-all cursor-pointer block"
            >
              {item.label}
            </button>
          ))}

          <div className="pt-4 px-4">
            <button
              onClick={() => {
                setIsOpen(false);
                onRequestDemo();
              }}
              className="w-full text-center px-6 py-3 rounded-xl text-sm font-bold text-white bg-slate-900 hover:bg-[#1a73e8] transition-all cursor-pointer shadow-md"
            >
              Request Staging
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
