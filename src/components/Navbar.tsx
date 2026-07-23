import { useState, useEffect } from 'react';
import { Menu, X, Search } from 'lucide-react';
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
  const [searchQuery, setSearchQuery] = useState('');

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
    { id: 'why-we-exist', label: 'Why We Exist', target: 'why-we-exist' },
    { id: 'challenges', label: 'Challenges', target: 'challenges' },
    { id: 'products', label: 'Solutions', target: 'products' },
    { id: 'services', label: 'Services', target: 'services' },
    { id: 'contact', label: 'Contact', target: 'contact' },
  ] as const;

  const handleNavClick = (targetId: string) => {
    setIsOpen(false);
    setIsSearchOpen(false);
    if (targetId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white/95 backdrop-blur-md border-b border-slate-200/80 text-slate-800 shadow-sm ${
      isScrolled ? 'py-0 shadow-md' : 'py-1.5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Section */}
          <div className="flex items-center cursor-pointer group space-x-3 shrink-0" onClick={() => handleNavClick('home')}>
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
          <div className="hidden lg:flex items-center space-x-2 xl:space-x-3">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-item-${item.id}`}
                  onClick={() => handleNavClick(item.target)}
                  className={`text-[10px] xl:text-[11px] font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer py-1 px-0.5 border-b-2 ${
                    isActive 
                      ? 'text-[#2582ff] font-extrabold border-[#2582ff]/80' 
                      : 'text-slate-600 border-transparent hover:text-[#2582ff] hover:border-slate-200'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Search Bar & Request Staging CTA */}
          <div className="hidden md:flex items-center space-x-3">
            
            {/* Simple Inline Search Input with Dropdown */}
            <div id="navbar-search-container" className="relative">
              <div className="flex items-center bg-slate-100/90 hover:bg-slate-100 focus-within:bg-white focus-within:ring-2 focus-within:ring-[#2582ff]/30 focus-within:border-[#2582ff]/40 border border-slate-200/80 rounded-full px-3.5 py-2 transition-all w-48 xl:w-60">
                <Search className="w-3.5 h-3.5 text-slate-400 shrink-0 mr-2" />
                <input
                  type="text"
                  placeholder="Search site..."
                  value={searchQuery}
                  onFocus={() => setIsSearchOpen(true)}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    if (!isSearchOpen) setIsSearchOpen(true);
                  }}
                  className="bg-transparent text-xs font-semibold text-slate-800 placeholder-slate-400 focus:outline-none w-full"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="text-slate-400 hover:text-slate-600 p-0.5 rounded-full cursor-pointer ml-1"
                    title="Clear search"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Floating Dropdown Component (No Fullscreen Overlay) */}
              <GlobalSearchInline
                isOpen={isSearchOpen}
                onClose={() => setIsSearchOpen(false)}
                setCurrentPage={setCurrentPage}
                onRequestDemo={onRequestDemo}
                query={searchQuery}
                setQuery={setSearchQuery}
              />
            </div>

            <button
              id="cta-nav-demo"
              onClick={onRequestDemo}
              className="px-5 py-2.5 rounded-full text-xs font-bold tracking-wide text-white bg-slate-900 hover:bg-[#1a73e8] hover:scale-105 transition-all duration-300 cursor-pointer shadow-md shrink-0"
            >
              Request Staging
            </button>
          </div>

          {/* Mobile menu & search triggers */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              id="mobile-search-trigger"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className={`p-2 rounded-full transition-all cursor-pointer ${
                isSearchOpen ? 'text-[#2582ff] bg-blue-50' : 'text-slate-500 hover:text-[#2582ff] hover:bg-slate-50'
              }`}
              title="Search CSL site"
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

      {/* Mobile Search Bar Expansion */}
      {isSearchOpen && (
        <div className="md:hidden bg-slate-50 border-b border-slate-200 px-4 py-3 relative">
          <div className="flex items-center bg-white border border-slate-200 rounded-xl px-3 py-2 shadow-sm">
            <Search className="w-4 h-4 text-slate-400 mr-2 shrink-0" />
            <input
              type="text"
              placeholder="Search products, SAP, FAQs..."
              value={searchQuery}
              autoFocus
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent text-xs font-semibold text-slate-800 placeholder-slate-400 focus:outline-none"
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} className="p-1 text-slate-400">
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Mobile Floating Dropdown Panel */}
          <GlobalSearchInline
            isOpen={isSearchOpen}
            onClose={() => setIsSearchOpen(false)}
            setCurrentPage={setCurrentPage}
            onRequestDemo={onRequestDemo}
            query={searchQuery}
            setQuery={setSearchQuery}
          />
        </div>
      )}

      {/* Mobile Nav Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-1.5 shadow-lg max-h-[85vh] overflow-y-auto">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.target)}
                className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer block ${
                  isActive 
                    ? 'text-[#2582ff] bg-[#2582ff]/5 font-bold' 
                    : 'text-slate-600 hover:text-[#2582ff] hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            );
          })}

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

    </nav>
  );
}
