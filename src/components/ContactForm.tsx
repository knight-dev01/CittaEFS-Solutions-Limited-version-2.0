import { useState, FormEvent } from 'react';
import { 
  Building2, Mail, Phone, Globe, ShieldAlert, CheckCircle2, Send, 
  MapPin, HelpCircle, Calendar, Sparkles
} from 'lucide-react';

export default function ContactForm() {
  const [formState, setFormState] = useState({
    companyName: '',
    fullName: '',
    email: '',
    phone: '',
    erpSystem: 'SAP',
    volume: '1000-5000',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    if (!formState.companyName || !formState.fullName || !formState.email) {
      setErrorMessage("Please complete the required fields: Company Name, Full Name, and Corporate Email.");
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API registration
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1800);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-white text-slate-800 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Office details & Trust */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8 text-left">
            <div className="flex flex-col items-start gap-4 sm:gap-6">
              <span className="inline-block font-mono text-xs uppercase tracking-widest text-[#2582ff] font-bold bg-[#2582ff]/5 px-3.5 py-1.5 rounded-full border border-[#2582ff]/10">
                Section 09. Contact Us
              </span>
              <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
                Get in Touch with CSL
              </h2>
              <p className="text-slate-600 text-xs sm:text-base leading-relaxed">
                Connect with the central team at <strong>CittaERP Solutions Limited (CSL)</strong> to discuss your enterprise requirements, integrate specialized software, or establish staging configurations.
              </p>
            </div>

            {/* Corporate Location Details - Direct from PDF slide 9 */}
            <div className="space-y-5 bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200">
              <h4 className="font-display font-bold text-slate-900 text-base mb-2">
                CittaERP Solutions Limited HQ
              </h4>

              <div className="flex items-start space-x-3 text-xs sm:text-sm text-slate-600">
                <MapPin className="w-5 h-5 text-[#2582ff] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-slate-800">Lagos Head Office</p>
                  <p className="mt-0.5 leading-normal">Victoria Island Corporate District, Lagos State, Nigeria.</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 text-xs sm:text-sm text-slate-600 border-t border-slate-200/60 pt-4">
                <Mail className="w-5 h-5 text-[#2582ff] shrink-0" />
                <div>
                  <p className="text-slate-800 font-mono">info@cittanuvola.com</p>
                  <p className="text-slate-400 text-[11px] font-mono">info1@cittanuvola.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 text-xs sm:text-sm text-slate-600 border-t border-slate-200/60 pt-4">
                <Phone className="w-5 h-5 text-[#2582ff] shrink-0" />
                <div>
                  <p className="text-slate-800 font-mono">+234 (1) 888 3379</p>
                  <p className="text-slate-400 text-[11px] font-mono">Office Hours: 8:00 AM – 5:00 PM</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 text-xs sm:text-sm text-slate-600 border-t border-slate-200/60 pt-4">
                <Globe className="w-5 h-5 text-[#2582ff] shrink-0" />
                <a 
                  href="https://www.cittanuvola.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-mono text-slate-800 hover:text-[#2582ff] transition-all"
                >
                  www.cittanuvola.com
                </a>
              </div>
            </div>

            {/* Trust disclaimer */}
            <div className="flex items-start space-x-3.5 p-4 bg-[#2582ff]/5 rounded-xl border border-[#2582ff]/10 text-xs text-slate-700">
              <ShieldAlert className="w-5 h-5 text-[#2582ff] shrink-0 mt-0.5" />
              <span>We value data confidentiality. All submitted corporate structures and integration specs are protected under non-disclosure protocols in conformity with NDPA 2023 laws.</span>
            </div>
          </div>

          {/* Right Column: Dynamic Form Container */}
          <div className="lg:col-span-7">
            
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-lg relative overflow-hidden">
              {/* Background gradient blur */}
              <div className="absolute top-0 right-0 h-24 w-24 bg-[#2582ff]/5 rounded-full blur-2xl" />

              {!isSuccess ? (
                <form onSubmit={handleSubmit} className="space-y-5 text-left">
                  <div className="border-b border-slate-200 pb-4 mb-2">
                    <h3 className="font-display text-xl font-bold text-slate-900">Request Integration Demo</h3>
                    <p className="text-xs text-slate-500 mt-1">Submit your details to establish staging test configurations.</p>
                  </div>

                  {errorMessage && (
                    <div className="bg-red-50 border border-red-200 text-red-700 text-xs px-4 py-3 rounded-xl flex items-center space-x-2">
                      <span className="font-bold shrink-0 text-red-600">✕</span>
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-500 uppercase tracking-wider mb-1 font-semibold">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Dangote Cement PLC"
                        value={formState.companyName}
                        onChange={(e) => setFormState({ ...formState, companyName: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-800 text-sm focus:border-[#2582ff] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-slate-500 uppercase tracking-wider mb-1 font-semibold">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Aliko Chinedu"
                        value={formState.fullName}
                        onChange={(e) => setFormState({ ...formState, fullName: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-800 text-sm focus:border-[#2582ff] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-500 uppercase tracking-wider mb-1 font-semibold">
                        Corporate Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. finance@dangote.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-800 text-sm focus:border-[#2582ff] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-slate-500 uppercase tracking-wider mb-1">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        placeholder="e.g. +234 803 000 0000"
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-800 text-sm focus:border-[#2582ff] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-500 uppercase tracking-wider mb-1">
                        Primary ERP System
                      </label>
                      <select
                        value={formState.erpSystem}
                        onChange={(e) => setFormState({ ...formState, erpSystem: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-800 text-sm focus:border-[#2582ff] focus:outline-none"
                      >
                        <option value="SAP">SAP ERP (S/4HANA / ECC)</option>
                        <option value="Oracle">Oracle Fusion / NetSuite</option>
                        <option value="Dynamics">Microsoft Dynamics 365</option>
                        <option value="Odoo">Odoo Enterprise</option>
                        <option value="Excel">Universal Excel Sheets Only</option>
                        <option value="Custom">Custom / Legacy DB Invoicing</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-slate-500 uppercase tracking-wider mb-1">
                        Est. Monthly Invoices
                      </label>
                      <select
                        value={formState.volume}
                        onChange={(e) => setFormState({ ...formState, volume: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-800 text-sm focus:border-[#2582ff] focus:outline-none"
                      >
                        <option value="<500">Less than 500 invoices</option>
                        <option value="500-1000">500 – 1,000 invoices</option>
                        <option value="1000-5000">1,000 – 5,000 invoices</option>
                        <option value="5000-15000">5,000 – 15,000 invoices</option>
                        <option value=">15000">More than 15,000 (High Volume)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-500 uppercase tracking-wider mb-1">
                      Integration description / Requirements
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Explain your database configurations or current compliance concerns..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-800 text-sm focus:border-[#2582ff] focus:outline-none resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl bg-[#2582ff] text-white hover:bg-[#1a73e8] transition-all duration-300 font-bold text-sm tracking-wide disabled:opacity-50 flex items-center justify-center space-x-2 shadow-md cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Registering Corporate Request...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Request Middleware Staging Demo</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              ) : (
                /* Success booking message */
                <div className="py-12 px-4 text-center space-y-6 animate-fade-in text-slate-800">
                  <div className="inline-flex p-4 bg-[#2582ff]/5 text-[#2582ff] rounded-full border border-[#2582ff]/10 shadow-sm">
                    <CheckCircle2 className="w-10 h-10 animate-bounce" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="font-display text-2xl font-bold text-slate-900">
                      Staging Demo Scheduled!
                    </h3>
                    <p className="text-slate-600 text-sm max-w-md mx-auto">
                      Thank you, <strong>{formState.fullName}</strong>. We have registered a corporate staging request for <strong>{formState.companyName}</strong>. 
                    </p>
                    <p className="text-slate-500 text-xs max-w-sm mx-auto italic">
                      A senior CSL Integration Engineer will contact you at <strong>{formState.email}</strong> within 12 hours with staging credentials.
                    </p>
                  </div>

                  <div className="border-t border-slate-200 pt-6 max-w-md mx-auto space-y-4">
                    <div className="flex items-center space-x-3 text-xs text-left bg-white p-3 rounded-xl border border-slate-200 shadow-sm">
                      <Calendar className="w-5 h-5 text-[#2582ff] shrink-0" />
                      <div>
                        <p className="font-bold text-slate-800">Next Step: Staging API Credentials</p>
                        <p className="text-slate-500 mt-0.5 text-[11px]">We will provide secure REST sandbox credentials for ERP integration testing.</p>
                      </div>
                    </div>

                    <button
                      onClick={() => {
                        setIsSuccess(false);
                        setFormState({
                          companyName: '',
                          fullName: '',
                          email: '',
                          phone: '',
                          erpSystem: 'SAP',
                          volume: '1000-5000',
                          message: ''
                        });
                      }}
                      className="text-xs text-slate-500 hover:text-[#2582ff] font-semibold flex items-center justify-center space-x-1 mx-auto cursor-pointer"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Submit another sales request</span>
                    </button>
                  </div>

                </div>
              )}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
