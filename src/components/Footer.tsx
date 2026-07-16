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
          
          {/* Column 1: Pitch, Seal, Contact, Socials (Spans 4 cols on Desktop) */}
          <div className="col-span-12 md:col-span-4 space-y-6">
            <div className="flex items-center cursor-pointer group" onClick={() => handleNavClick('home')}>
              <div className="flex flex-col text-left">
                <span className="font-display font-extrabold text-base sm:text-lg leading-none text-slate-900 tracking-tight">
                  CittaERP Solutions Limited (CSL)
                </span>
                <span className="block text-[8px] sm:text-[9px] font-mono text-[#2582ff] uppercase tracking-widest font-bold mt-1">
                  Enterprise Software Parent Framework
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed text-left">
              CSL unifies specialized digital solutions to power active operations, advanced resource leveling, and statutory tax compliance under an enterprise-shielded secure architecture.
            </p>

            {/* Corporate Location and Contacts */}
            <div className="space-y-3 text-xs sm:text-sm text-slate-500 font-sans text-left">
              <div className="flex items-start space-x-2">
                <Globe className="w-4 h-4 text-[#2582ff] shrink-0 mt-0.5" />
                <span>
                  <strong>Web:</strong> <a href="http://www.cittanuvola.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#2582ff] transition-colors underline">www.cittanuvola.com</a>
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-[#2582ff] shrink-0" />
                <div className="flex flex-col">
                  <a href="mailto:info@cittanuvola.com" className="hover:text-[#2582ff] transition-colors">info@cittanuvola.com</a>
                  <a href="mailto:info1@cittanuvola.com" className="hover:text-[#2582ff] transition-colors">info1@cittanuvola.com</a>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-[#2582ff] shrink-0" />
                <a href="tel:+23418883379" className="hover:text-[#2582ff] transition-colors">+234 (1) 888-EFS9</a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-3.5 pt-2">
              <a href="#" className="p-2 bg-white rounded-xl border border-slate-200 hover:border-[#2582ff] text-slate-500 hover:text-[#2582ff] transition-all shadow-sm">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-white rounded-xl border border-slate-200 hover:border-[#2582ff] text-slate-500 hover:text-[#2582ff] transition-all shadow-sm">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-white rounded-xl border border-slate-200 hover:border-[#2582ff] text-slate-500 hover:text-[#2582ff] transition-all shadow-sm">
                <Github className="w-4 h-4" />
              </a>
              {/* Compliance Seal badge */}
              <div className="ml-2 inline-flex items-center space-x-1 px-2.5 py-1 bg-white border border-slate-200 rounded-xl text-[9px] font-mono text-[#2582ff] font-bold shadow-sm">
                <ShieldCheck className="w-3.5 h-3.5" />
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
                  Middleware Engine
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('products')} className="hover:text-[#2582ff] hover:underline text-slate-600 transition-all text-left cursor-pointer">
                  Validation Shield
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('products')} className="hover:text-[#2582ff] hover:underline text-slate-600 transition-all text-left cursor-pointer">
                  Excel Bulk Uploader
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('products')} className="hover:text-[#2582ff] hover:underline text-slate-600 transition-all text-left cursor-pointer">
                  Audit Ledger Vault
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('products')} className="hover:text-[#2582ff] hover:underline text-slate-600 transition-all text-left cursor-pointer">
                  Secure API Gateway
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Solutions */}
          <div className="col-span-6 md:col-span-2 space-y-4 text-left">
            <h4 className="font-display font-bold text-slate-900 text-sm uppercase tracking-wider">Solutions</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <button onClick={() => handleNavClick('products')} className="hover:text-[#2582ff] hover:underline text-slate-600 transition-all text-left cursor-pointer">
                  SAP ERP Gateway
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('products')} className="hover:text-[#2582ff] hover:underline text-slate-600 transition-all text-left cursor-pointer">
                  Oracle Integration
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('products')} className="hover:text-[#2582ff] hover:underline text-slate-600 transition-all text-left cursor-pointer">
                  Microsoft Dynamics
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('products')} className="hover:text-[#2582ff] hover:underline text-slate-600 transition-all text-left cursor-pointer">
                  Odoo Tax Connector
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('products')} className="hover:text-[#2582ff] hover:underline text-slate-600 transition-all text-left cursor-pointer">
                  Custom DB Sync
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Resources & Support */}
          <div className="col-span-6 md:col-span-2 space-y-4 text-left">
            <h4 className="font-display font-bold text-slate-900 text-sm uppercase tracking-wider">Support</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <button onClick={() => handleNavClick('contact')} className="hover:text-[#2582ff] hover:underline text-slate-600 transition-all text-left cursor-pointer">
                  Technical Blog
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('contact')} className="hover:text-[#2582ff] hover:underline text-slate-600 transition-all text-left cursor-pointer">
                  Compliance FAQ
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('contact')} className="hover:text-[#2582ff] hover:underline text-slate-600 transition-all text-left flex items-center space-x-1 cursor-pointer">
                  <span>Help Center</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('contact')} className="hover:text-[#2582ff] hover:underline text-slate-600 transition-all text-left block cursor-pointer">
                  Developer Docs
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('contact')} className="hover:text-[#2582ff] hover:underline text-slate-600 transition-all text-left block cursor-pointer">
                  SLA & Status
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
          <p>© 2024 CSL. All rights reserved. Powered by CittaERP Solutions Limited.</p>
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
