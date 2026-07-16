import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown, BookOpen, ShieldCheck, Zap } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  category: 'compliance' | 'integration' | 'security';
}

export default function FAQSection() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'compliance' | 'integration' | 'security'>('all');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      category: 'compliance',
      question: "What is NRS compliance, and how does CittaEFS facilitate it?",
      answer: "The National Revenue Service (NRS) requires all modern corporate entities to submit transaction invoices in real-time. CittaEFS operates as an intelligent middleware, automatically formatting financial payloads, checking customer Tax Identification Numbers (TIN), performing decimal calculations, and adding necessary cryptographic SHA-256 signatures before real-time submission to NRS servers."
    },
    {
      category: 'integration',
      question: "Does integrating CittaEFS require modifying our core ERP systems?",
      answer: "Absolutely not. CittaEFS is designed around a strictly non-intrusive middleware architectural paradigm. It connects securely to legacy installations—including SAP, Oracle Financials, Microsoft Dynamics, and Odoo—using read-only database triggers or secure webhook routers. This allows you to achieve compliance without disrupting existing enterprise business logic."
    },
    {
      category: 'compliance',
      question: "How does the pre-clearance validation shield prevent tax authority penalties?",
      answer: "When a billing system submits an invoice, CittaEFS intercepts it inside a local validation buffer. It checks for common error triggers—such as missing TIN formats, mathematical mismatches, and incorrect rounding formulas. If any discrepancies are identified, CittaEFS flags the record in our middleware command center before transmission, securing a 100% compliant data transfer to government servers."
    },
    {
      category: 'security',
      question: "Is our financial data encrypted during transmission and storage?",
      answer: "Yes, security is a core pillar of the CSL design. All active data transfers are encrypted in transit using secure TLS 1.3 tunnels. For persistence, our Audit Ledger Vault stores historical transaction records under military-grade AES-256 encryption. Our infrastructure complies fully with the Nigerian Data Protection Act (NDPA) 2023, ensuring robust non-repudiation and privacy controls."
    },
    {
      category: 'integration',
      question: "What is the typical technical onboarding and deployment timeline?",
      answer: "CSL has streamlined onboarding into a four-phase transition path: Phase 1 (Technical Scoping & Mapping) takes 3–5 business days; Phase 2 (Sandbox Setup & Configuration) takes 3–4 days; Phase 3 (Clearance Simulations) takes 2 days; and Phase 4 (Production Deployment) takes 2 days. The typical enterprise integration is fully live and operational in less than 14 business days."
    },
    {
      category: 'compliance',
      question: "Does CittaEFS support bulk manual uploads for offline ledger clearing?",
      answer: "Yes. For SMEs or scenarios with transient internet connectivity, CittaEFS includes an interactive, drag-and-drop Excel Bulk Uploader Gateway. Users can upload standard Excel worksheets or CSV files, which are validated, formatted, and pushed in secure batches to NRS nodes."
    },
    {
      category: 'integration',
      question: "How does CSL manage API changes or regulatory updates from NRS?",
      answer: "Because CittaEFS is hosted on our agile, cloud-native middleware architecture, any changes to tax codes, rules, or NRS API schemas are updated server-side by CSL engineers instantly. There is no downtime, manual patching, or hardware upgrading required on the client side."
    }
  ];

  const filteredFaqs = activeCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-white text-slate-800 border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 gap-4">
          <span className="inline-block font-mono text-xs uppercase tracking-widest text-[#2582ff] font-bold bg-[#2582ff]/5 px-3.5 py-1.5 rounded-full border border-[#2582ff]/10">
            Section 08.5. Knowledge Base
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-xs sm:text-base leading-relaxed">
            Detailed, developer-grade responses to common inquiries regarding NRS compliance, database connectivity, and secure digital clearing channels.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {[
            { id: 'all', label: 'All Questions', icon: BookOpen },
            { id: 'compliance', label: 'Compliance & Regulations', icon: ShieldCheck },
            { id: 'integration', label: 'ERP & Systems Integration', icon: Zap },
            { id: 'security', label: 'Security & Cryptography', icon: HelpCircle }
          ].map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id as any);
                  setOpenIndex(null); // Reset open accordion on category change
                }}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full text-xs font-semibold border transition-all duration-300 cursor-pointer ${
                  isActive 
                    ? 'bg-[#2582ff] text-white border-[#2582ff] shadow-md shadow-[#2582ff]/15' 
                    : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100 hover:text-slate-950'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          <AnimatePresence mode="popLayout">
            {filteredFaqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <motion.div
                  key={faq.question}
                  layout
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className={`border rounded-2xl overflow-hidden transition-all duration-300 bg-white ${
                    isOpen 
                      ? 'border-[#2582ff]/40 shadow-md shadow-[#2582ff]/5 ring-1 ring-[#2582ff]/10' 
                      : 'border-slate-200 hover:border-slate-300 hover:shadow-sm'
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex items-center justify-between p-5 text-left font-display font-bold text-slate-900 text-sm sm:text-base gap-4 cursor-pointer select-none"
                  >
                    <div className="flex items-start space-x-3.5">
                      <div className={`p-1.5 rounded-lg border shrink-0 mt-0.5 transition-colors ${
                        isOpen 
                          ? 'bg-[#2582ff]/5 border-[#2582ff]/20 text-[#2582ff]' 
                          : 'bg-slate-50 border-slate-200 text-slate-500'
                      }`}>
                        <HelpCircle className="w-4 h-4" />
                      </div>
                      <span className="leading-tight pt-0.5">{faq.question}</span>
                    </div>
                    <ChevronDown className={`w-5 h-5 shrink-0 text-slate-400 transition-transform duration-300 ${
                      isOpen ? 'transform rotate-180 text-[#2582ff]' : ''
                    }`} />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                      >
                        <div className="px-5 pb-6 pt-1 pl-[54px] pr-8 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                          {faq.answer}
                          
                          {/* Categorized tag */}
                          <div className="flex items-center gap-1.5 mt-4">
                            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                              Module Area:
                            </span>
                            <span className="inline-block px-2 py-0.5 rounded-md text-[9px] font-mono font-bold uppercase tracking-wide bg-slate-100 text-slate-500">
                              {faq.category === 'compliance' ? 'Regulatory Compliance' : faq.category === 'integration' ? 'System Integration' : 'Information Security'}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </AnimatePresence>

          {filteredFaqs.length === 0 && (
            <div className="text-center py-12 text-slate-400 text-sm">
              No matching questions found in this category.
            </div>
          )}
        </div>

        {/* Live Support Notice */}
        <div className="mt-12 p-6 bg-slate-50 border border-slate-200/60 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="font-display font-bold text-slate-900 text-sm sm:text-base">
              Still have unanswered technical questions?
            </h4>
            <p className="text-slate-500 text-xs sm:text-sm">
              Our 24/7 designated solutions architects are standing by to guide your database mappings.
            </p>
          </div>
          <button
            onClick={() => {
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-5 py-2.5 bg-slate-900 hover:bg-[#2582ff] text-white font-semibold text-xs rounded-xl transition-all duration-300 shadow-md cursor-pointer shrink-0"
          >
            Consult CSL Engineers
          </button>
        </div>

      </div>
    </section>
  );
}
