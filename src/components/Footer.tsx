import React, { useState } from 'react';
import { 
  ShieldCheck, Mail, Phone, Globe, Lock, Landmark, 
  Linkedin, Twitter, Github, Send, HelpCircle 
} from 'lucide-react';
import { PageId } from '../types';

interface FooterProps {
  setCurrentPage: (page: PageId) => void;
}

export default function Footer({ setCurrentPage }: FooterProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNavClick = (targetId: string) => {
    if (targetId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-slate-50 text-slate-600 border-t border-slate-200 pt-20 pb-12 relative overflow-hidden">
      {/* Container wrapper */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Sitemap & Newsletter Grid */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-8 pb-16 border-b border-slate-200">
          
          {/* Column 1: Pitch, Seal, Contact (Spans 4 cols on Desktop) */}
          <div className="col-span-12 md:col-span-4 space-y-6">
            <div className="flex items-center cursor-pointer group space-x-3" onClick={() => handleNavClick('home')}>
              <img 
                src="https://cittanuvola.com/images/Cittanuvola%20logo.png" 
                alt="CittaSL Logo" 
                className="h-10 w-auto object-contain bg-white p-1 rounded-lg border border-slate-200 shadow-sm"
                referrerPolicy="no-referrer"
              />
              <div className="flex flex-col text-left">
                <span className="font-display font-extrabold text-base sm:text-lg leading-none text-slate-900 tracking-tight">
                  CittaSL (CSL)
                </span>
                <span className="block text-[8px] sm:text-[9px] font-mono text-[#2582ff] uppercase tracking-widest font-bold mt-1">
                  CittaNuvola Group Enterprise Framework
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed text-left">
              CittaSL unifies specialized digital solutions to power active operations, advanced resource leveling, and statutory tax compliance under an enterprise-shielded secure architecture.
            </p>

            {/* Corporate Location and Contacts */}
            <div className="space-y-3 text-xs sm:text-sm text-slate-500 font-sans text-left">
              <div className="flex items-start space-x-2">
                <Globe className="w-4 h-4 text-[#2582ff] shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span><strong>Web:</strong> <a href="https://www.cittasl.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#2582ff] transition-colors underline">www.cittasl.com</a></span>
                  <span className="text-[11px] text-slate-400">Parent: <a href="https://www.cittanuvola.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#2582ff] transition-colors underline">www.cittanuvola.com</a></span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-[#2582ff] shrink-0" />
                <a href="mailto:cittasl@cittanuvola.com" className="hover:text-[#2582ff] transition-colors font-mono font-semibold text-slate-800">cittasl@cittanuvola.com</a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-[#2582ff] shrink-0" />
                <a href="tel:08134248104" className="hover:text-[#2582ff] transition-colors font-mono font-semibold text-slate-800">0813–424–8104</a>
              </div>
            </div>

            {/* Verification Seal badge */}
            <div className="flex items-center space-x-3 pt-1">
              <div className="inline-flex items-center space-x-1.5 px-3 py-1.5 bg-white border border-slate-200 rounded-xl text-[10px] font-mono text-[#2582ff] font-bold shadow-sm">
                <ShieldCheck className="w-4 h-4" />
                <span>NRS VERIFIED</span>
              </div>
            </div>
          </div>

          {/* Column 2: Products */}
          <div className="col-span-6 md:col-span-2 space-y-4 text-left">
            <h4 className="font-display font-bold text-slate-900 text-sm uppercase tracking-wider">Products</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <button onClick={() => handleNavClick('products')} className="hover:text-[#2582ff] hover:underline text-slate-600 transition-all text-left cursor-pointer">
                  CittaEFS Compliance
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('products')} className="hover:text-[#2582ff] hover:underline text-slate-600 transition-all text-left cursor-pointer">
                  CittaMatrix Router
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('products')} className="hover:text-[#2582ff] hover:underline text-slate-600 transition-all text-left cursor-pointer">
                  CittaHospitalityX
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('products')} className="hover:text-[#2582ff] hover:underline text-slate-600 transition-all text-left cursor-pointer">
                  CittaPlannerX
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('products')} className="hover:text-[#2582ff] hover:underline text-slate-600 transition-all text-left cursor-pointer">
                  CittaNexus API Gateway
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Solutions */}
          <div className="col-span-6 md:col-span-2 space-y-4 text-left">
            <h4 className="font-display font-bold text-slate-900 text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <button onClick={() => handleNavClick('services')} className="hover:text-[#2582ff] hover:underline text-slate-600 transition-all text-left cursor-pointer">
                  ERP Integrations
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('services')} className="hover:text-[#2582ff] hover:underline text-slate-600 transition-all text-left cursor-pointer">
                  Custom Engineering
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('services')} className="hover:text-[#2582ff] hover:underline text-slate-600 transition-all text-left cursor-pointer">
                  Staging & Testing
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('services')} className="hover:text-[#2582ff] hover:underline text-slate-600 transition-all text-left cursor-pointer">
                  Compliance Consulting
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('services')} className="hover:text-[#2582ff] hover:underline text-slate-600 transition-all text-left cursor-pointer">
                  Dedicated SLA Support
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Resources & Support */}
          <div className="col-span-6 md:col-span-2 space-y-4 text-left">
            <h4 className="font-display font-bold text-slate-900 text-sm uppercase tracking-wider">Resources</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <button onClick={() => handleNavClick('why-we-exist')} className="hover:text-[#2582ff] hover:underline text-slate-600 transition-all text-left cursor-pointer">
                  Why We Exist
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('challenges')} className="hover:text-[#2582ff] hover:underline text-slate-600 transition-all text-left cursor-pointer">
                  Challenges We Solve
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('why-choose-csl')} className="hover:text-[#2582ff] hover:underline text-slate-600 transition-all text-left flex items-center space-x-1 cursor-pointer">
                  <span>Why Choose CSL</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('approach')} className="hover:text-[#2582ff] hover:underline text-slate-600 transition-all text-left block cursor-pointer">
                  Our Approach
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('contact')} className="hover:text-[#2582ff] hover:underline text-slate-600 transition-all text-left block cursor-pointer">
                  Consultation
                </button>
              </li>
            </ul>
          </div>

          {/* Column 5: Enterprise Newsletter & Legal (Spans 2 cols on Desktop) */}
          <div className="col-span-12 md:col-span-2 space-y-4 text-left">
            <h4 className="font-display font-bold text-slate-900 text-sm uppercase tracking-wider">Join Newsletter</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Stay updated with the latest corporate technology & tax regulations.
            </p>
            {subscribed ? (
              <div className="p-3 bg-blue-50 text-blue-800 text-xs rounded-xl border border-blue-200">
                ✓ Successfully subscribed!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input 
                    type="email" 
                    required
                    placeholder="name@company.com" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 pr-10 text-xs focus:ring-1 focus:ring-[#2582ff] focus:border-[#2582ff] outline-none"
                  />
                  <button 
                    type="submit" 
                    className="absolute right-1 top-1/2 -translate-y-1/2 p-1.5 bg-slate-900 text-white rounded-lg hover:bg-[#2582ff] transition-colors cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}

            {/* Quick Compliance reference links */}
            <div className="pt-4 space-y-2">
              <div className="flex items-center space-x-1.5 text-xs text-slate-500">
                <Lock className="w-3.5 h-3.5 text-[#2582ff]" />
                <span>NDPA '23 Guarded</span>
              </div>
              <div className="flex items-center space-x-1.5 text-xs text-slate-500">
                <Landmark className="w-3.5 h-3.5 text-[#2582ff]" />
                <span>NTAA Sec 23 Compliant</span>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom Credentials and Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 text-xs font-mono text-slate-400">
          <p>© 2024 CittaSL (CSL). All rights reserved. Member of CittaNuvola Group.</p>
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            <a href="#" className="hover:text-[#2582ff] transition-all">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-[#2582ff] transition-all">Terms of Service</a>
            <span>•</span>
            <span className="text-[#2582ff] font-bold">ISO 27001 Certified</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
