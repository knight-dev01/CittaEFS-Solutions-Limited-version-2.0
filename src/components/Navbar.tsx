import { useState, useEffect } from 'react';
import { Menu, X, Search } from 'lucide-react';
import { PageId } from '../types';
import { goTo, goToSection } from '../navigation';
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
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', target: 'home' },
    { id: 'why-we-exist', label: 'Why We Exist', target: 'why-we-exist' },
    { id: 'challenges', label: 'Challenges', target: 'challenges' },
    { id: 'cittaefs', label: 'CittaEFS', target: 'cittaefs' },
    { id: 'services', label: 'Services', target: 'services' },
    { id: 'contact', label: 'Contact', target: 'contact' },
  ] as const;

  const handleNavClick = (targetId: string) => {
    setIsOpen(false);
    setIsSearchOpen(false);
    if (targetId === 'cittaefs') {
      goTo('/cittaefs');
      return;
    }
    goToSection(targetId);
  };

  return (
    <nav className={`fixed top-0 left-0 z-50 w-full border-b border-slate-200 bg-white text-slate-800 transition-shadow ${
      isScrolled ? 'shadow-sm' : ''
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">

          <div className="flex items-center cursor-pointer space-x-3 shrink-0" onClick={() => handleNavClick('home')}>
            <img
              src={cslLogo}
              alt="CittaSL logo"
              className="h-9 w-auto object-contain"
            />
            <div className="flex flex-col text-left">
              <span className="block font-display text-base font-bold leading-none tracking-tight text-slate-900">
                CittaSL
              </span>
              <span className="mt-1 block text-[10px] font-medium uppercase tracking-widest text-slate-500">
                CittaNuvola
              </span>
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-7">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-item-${item.id}`}
                  onClick={() => handleNavClick(item.target)}
                  className={`border-b-2 py-1 text-sm font-medium transition-colors ${
                    isActive
                      ? 'border-[#2582ff] text-slate-900'
                      : 'border-transparent text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <div className="hidden md:flex items-center space-x-4">

            <div id="navbar-search-container" className="relative">
              <div className="flex w-48 items-center rounded-lg border border-slate-300 bg-white px-3 py-2 transition-colors focus-within:border-slate-400 xl:w-56">
                <Search className="mr-2 h-4 w-4 shrink-0 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search"
                  value={searchQuery}
                  onFocus={() => setIsSearchOpen(true)}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    if (!isSearchOpen) setIsSearchOpen(true);
                  }}
                  className="w-full bg-transparent text-sm text-slate-800 placeholder-slate-400 focus:outline-none"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="ml-1 rounded p-0.5 text-slate-400 hover:text-slate-600"
                    title="Clear search"
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                )}
              </div>

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
              className="rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-700"
            >
              Request staging
            </button>
          </div>

          <div className="flex md:hidden items-center space-x-2">
            <button
              id="mobile-search-trigger"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-slate-600"
              title="Search CSL site"
            >
              <Search className="h-5 w-5" />
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 text-slate-700"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>
      </div>

      {isSearchOpen && (
        <div className="relative border-b border-slate-200 bg-white px-4 py-3 md:hidden">
          <div className="flex items-center rounded-lg border border-slate-300 px-3 py-2">
            <Search className="mr-2 h-4 w-4 shrink-0 text-slate-400" />
            <input
              type="text"
              placeholder="Search products, SAP, FAQs"
              value={searchQuery}
              autoFocus
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent text-sm text-slate-800 placeholder-slate-400 focus:outline-none"
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} className="p-1 text-slate-400">
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

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

      {isOpen && (
        <div className="max-h-[85vh] overflow-y-auto border-b border-slate-200 bg-white px-4 pb-6 pt-2 lg:hidden">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.target)}
                className={`block w-full rounded-lg px-4 py-3 text-left text-sm font-medium ${
                  isActive
                    ? 'bg-slate-100 text-slate-900'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                {item.label}
              </button>
            );
          })}

          <div className="px-4 pt-4">
            <button
              onClick={() => {
                setIsOpen(false);
                onRequestDemo();
              }}
              className="w-full rounded-lg bg-slate-900 px-6 py-3 text-sm font-semibold text-white"
            >
              Request staging
            </button>
          </div>
        </div>
      )}

    </nav>
  );
}
