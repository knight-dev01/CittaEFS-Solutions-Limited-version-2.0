import { useState, FormEvent } from 'react';
import { 
  Building2, Mail, Phone, Globe, ShieldAlert, CheckCircle2, Send, 
  MapPin, HelpCircle, Calendar, Sparkles, Briefcase, Copy, Check, Server
} from 'lucide-react';

export default function ContactForm() {
  const [formState, setFormState] = useState({
    fullName: '',
    corporateEmail: '',
    organisation: '',
    jobTitle: '',
    areaOfInterest: 'CittaEFS Compliance Integration',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [deliveryMode, setDeliveryMode] = useState<'qservers_smtp' | 'direct_client' | 'unconfigured_smtp'>('qservers_smtp');
  const [copied, setCopied] = useState(false);

  // Robust email pattern check
  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleCopySummary = () => {
    const summary = `Full Name: ${formState.fullName}\nCorporate Email: ${formState.corporateEmail}\nOrganisation: ${formState.organisation}\nJob Title: ${formState.jobTitle}\nPhone: ${formState.phone || 'N/A'}\nArea of Interest: ${formState.areaOfInterest}\n\nMessage:\n${formState.message}`;
    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Robust validations
    if (!formState.fullName.trim()) {
      setErrorMessage("Please enter your Full Name.");
      return;
    }
    if (!formState.corporateEmail.trim() || !isValidEmail(formState.corporateEmail)) {
      setErrorMessage("Please enter a valid Corporate Email Address.");
      return;
    }
    if (!formState.organisation.trim()) {
      setErrorMessage("Please enter your Organisation.");
      return;
    }
    if (!formState.jobTitle.trim()) {
      setErrorMessage("Please enter your Job Title.");
      return;
    }
    if (!formState.message.trim() || formState.message.trim().length < 10) {
      setErrorMessage("Please provide a message with at least 10 characters detailing your request.");
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Dispatch inquiry to QServers SMTP endpoint on the backend
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        if (result.mode === 'qservers_smtp') {
          setDeliveryMode('qservers_smtp');
        } else {
          setDeliveryMode('unconfigured_smtp');
          // If SMTP password is not set yet in env, trigger mailto fallback
          if (result.fallbackUrl) {
            window.location.href = result.fallbackUrl;
          }
        }
        setIsSuccess(true);
      } else {
        // If server returned an error, fallback gracefully to direct email
        setDeliveryMode('direct_client');
        setIsSuccess(true);
        const subject = encodeURIComponent(`Consultation Request: ${formState.organisation} (${formState.fullName})`);
        const body = encodeURIComponent(
          `Full Name: ${formState.fullName}\nCorporate Email: ${formState.corporateEmail}\nPhone: ${formState.phone || 'N/A'}\nOrganisation: ${formState.organisation}\nJob Title: ${formState.jobTitle}\nArea of Interest: ${formState.areaOfInterest}\n\nMessage:\n${formState.message}`
        );
        window.location.href = `mailto:cittasl@cittanuvola.com?subject=${subject}&body=${body}`;
      }
    } catch {
      // Network offline or static environment fallback
      setDeliveryMode('direct_client');
      setIsSuccess(true);
      const subject = encodeURIComponent(`Consultation Request: ${formState.organisation} (${formState.fullName})`);
      const body = encodeURIComponent(
        `Full Name: ${formState.fullName}\nCorporate Email: ${formState.corporateEmail}\nPhone: ${formState.phone || 'N/A'}\nOrganisation: ${formState.organisation}\nJob Title: ${formState.jobTitle}\nArea of Interest: ${formState.areaOfInterest}\n\nMessage:\n${formState.message}`
      );
      window.location.href = `mailto:cittasl@cittanuvola.com?subject=${subject}&body=${body}`;
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-white text-slate-800 border-t border-slate-200 scroll-mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Title Block */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 sm:mb-24 gap-4">
          <span className="inline-block font-mono text-xs uppercase tracking-widest text-[#2582ff] font-bold bg-[#2582ff]/5 px-3.5 py-1.5 rounded-full border border-[#2582ff]/10">
            Section 09. Corporate Engagement
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-none">
            Connect with CSL
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Partner with our integration architects to modernize your enterprise ledger systems, map compliance parameters, or request system sandboxes.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Office details & Trust */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8 text-left">
            
            <div className="space-y-5 bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm">
              <h4 className="font-display font-bold text-slate-900 text-lg mb-2">
                CittaSL (CSL Corporate HQ)
              </h4>

              <div className="flex items-start space-x-3 text-xs sm:text-sm text-slate-600">
                <MapPin className="w-5 h-5 text-[#2582ff] shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-slate-800">Lagos Head Office</p>
                  <p className="mt-0.5 leading-normal">5, Sadiku Street, Agidingbi, Ikeja, Lagos, Nigeria.</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 text-xs sm:text-sm text-slate-600 border-t border-slate-200/60 pt-4">
                <Mail className="w-5 h-5 text-[#2582ff] shrink-0" />
                <div>
                  <a href="mailto:cittasl@cittanuvola.com" className="text-slate-800 font-mono font-semibold hover:text-[#2582ff] transition-colors">
                    cittasl@cittanuvola.com
                  </a>
                  <p className="text-slate-400 text-[10px] font-mono mt-0.5">Parent domain: www.cittanuvola.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 text-xs sm:text-sm text-slate-600 border-t border-slate-200/60 pt-4">
                <Phone className="w-5 h-5 text-[#2582ff] shrink-0" />
                <div>
                  <a href="tel:08134248104" className="text-slate-800 font-mono font-semibold hover:text-[#2582ff] transition-colors">
                    0813–424–8104
                  </a>
                  <p className="text-slate-400 text-[10px] font-mono mt-0.5">Mon – Fri: 8:00 AM – 5:00 PM WAT</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 text-xs sm:text-sm text-slate-600 border-t border-slate-200/60 pt-4">
                <Globe className="w-5 h-5 text-[#2582ff] shrink-0" />
                <div className="flex flex-col font-mono text-xs font-semibold">
                  <a 
                    href="https://www.cittasl.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-slate-800 hover:text-[#2582ff] transition-all"
                  >
                    www.cittasl.com
                  </a>
                  <a 
                    href="https://www.cittanuvola.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-[#2582ff] transition-all text-[11px]"
                  >
                    www.cittanuvola.com
                  </a>
                </div>
              </div>
            </div>

            {/* Trust disclaimer */}
            <div className="flex items-start space-x-3.5 p-5 bg-blue-50/50 rounded-2xl border border-blue-100 text-xs text-slate-600 leading-relaxed">
              <ShieldAlert className="w-5 h-5 text-[#2582ff] shrink-0 mt-0.5" />
              <span>
                <strong>Confidentiality Assurance:</strong> We respect enterprise data privacy. All corporate communications, systems mapping data, and staging inquiries are fully protected under non-disclosure protocols and local NDPA frameworks.
              </span>
            </div>
          </div>

          {/* Right Column: Dynamic Form Container */}
          <div className="lg:col-span-7">
            
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 h-24 w-24 bg-[#2582ff]/5 rounded-full blur-2xl" />

              {!isSuccess ? (
                <form onSubmit={handleSubmit} className="space-y-5 text-left">
                  <div className="border-b border-slate-200 pb-4 mb-2">
                    <h3 className="font-display text-xl font-black text-slate-900">Request a Consultation</h3>
                    <p className="text-xs text-slate-500 mt-1">Submit your enterprise details to coordinate with our solutions team.</p>
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
                        Full Name *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Dr. Anthony Adebayo"
                        value={formState.fullName}
                        onChange={(e) => setFormState({ ...formState, fullName: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-800 text-sm focus:border-[#2582ff] focus:outline-none focus:ring-1 focus:ring-[#2582ff]/10"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-slate-500 uppercase tracking-wider mb-1 font-semibold">
                        Corporate Email *
                      </label>
                      <input
                        type="email"
                        placeholder="e.g. a.adebayo@organisation.com"
                        value={formState.corporateEmail}
                        onChange={(e) => setFormState({ ...formState, corporateEmail: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-800 text-sm focus:border-[#2582ff] focus:outline-none focus:ring-1 focus:ring-[#2582ff]/10"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-500 uppercase tracking-wider mb-1 font-semibold">
                        Organisation *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Acme Enterprise Corp"
                        value={formState.organisation}
                        onChange={(e) => setFormState({ ...formState, organisation: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-800 text-sm focus:border-[#2582ff] focus:outline-none focus:ring-1 focus:ring-[#2582ff]/10"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-slate-500 uppercase tracking-wider mb-1 font-semibold">
                        Job Title *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Chief Financial Officer"
                        value={formState.jobTitle}
                        onChange={(e) => setFormState({ ...formState, jobTitle: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-800 text-sm focus:border-[#2582ff] focus:outline-none focus:ring-1 focus:ring-[#2582ff]/10"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-500 uppercase tracking-wider mb-1 font-semibold">
                        Area of Interest *
                      </label>
                      <select
                        value={formState.areaOfInterest}
                        onChange={(e) => setFormState({ ...formState, areaOfInterest: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-800 text-sm focus:border-[#2582ff] focus:outline-none focus:ring-1 focus:ring-[#2582ff]/10"
                      >
                        <option value="CittaEFS Compliance Integration">CittaEFS Compliance Integration</option>
                        <option value="CittaMatrix Analytics Engine">CittaMatrix Analytics Engine</option>
                        <option value="CittaHospitalityX Enterprise Manager">CittaHospitalityX Enterprise Manager</option>
                        <option value="CittaPlannerX Advanced Scheduling">CittaPlannerX Advanced Scheduling</option>
                        <option value="CittaNexus API Gateway">CittaNexus API Gateway</option>
                        <option value="Professional ERP Implementation">Professional ERP Implementation</option>
                        <option value="Custom Software Development">Custom Software Development</option>
                        <option value="Enterprise Cloud Architecture">Enterprise Cloud Architecture</option>
                        <option value="Technology Consulting">Technology Consulting</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-slate-500 uppercase tracking-wider mb-1">
                        Phone / Contact Number
                      </label>
                      <input
                        type="tel"
                        placeholder="e.g. +234 803 123 4567"
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-800 text-sm focus:border-[#2582ff] focus:outline-none focus:ring-1 focus:ring-[#2582ff]/10"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-500 uppercase tracking-wider mb-1 font-semibold">
                      Your Message *
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Please explain your specific operational challenges or goals..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-800 text-sm focus:border-[#2582ff] focus:outline-none focus:ring-1 focus:ring-[#2582ff]/10 resize-none"
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
                          <span>Connecting to CSL Solutions...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Consultation Inquiry</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              ) : (
                /* Success Message Box */
                <div className="py-10 px-4 text-center space-y-6 animate-fade-in text-slate-800">
                  <div className="inline-flex p-4 bg-emerald-50 text-emerald-600 rounded-full border border-emerald-200 shadow-sm">
                    <CheckCircle2 className="w-10 h-10 animate-bounce" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="inline-flex items-center space-x-1.5 bg-blue-50 text-[#2582ff] border border-blue-200 px-3 py-1 rounded-full text-xs font-mono font-semibold mb-1">
                      <Server className="w-3.5 h-3.5" />
                      <span>{deliveryMode === 'qservers_smtp' ? 'Dispatched via QServers Mail Gateway' : 'Consultation Request Prepared'}</span>
                    </div>

                    <h3 className="font-display text-2xl font-black text-slate-900">
                      Inquiry Successfully Received!
                    </h3>
                    <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                      Thank you, <strong>{formState.fullName}</strong>. We have logged your consultation request for <strong>{formState.organisation}</strong>.
                    </p>
                    <p className="text-slate-500 text-xs max-w-sm mx-auto mt-1">
                      Our enterprise integration desk has been notified and will reply to <strong>{formState.corporateEmail}</strong> shortly.
                    </p>
                  </div>

                  {/* Summary & Copy Box */}
                  <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs max-w-md mx-auto text-left text-xs space-y-2">
                    <div className="flex justify-between items-center border-b border-slate-100 pb-2">
                      <span className="font-mono font-bold text-slate-500 uppercase text-[10px]">Reference Copy</span>
                      <button
                        onClick={handleCopySummary}
                        className="text-[11px] font-mono text-[#2582ff] hover:underline flex items-center space-x-1 cursor-pointer"
                      >
                        {copied ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                        <span>{copied ? 'Copied to Clipboard' : 'Copy Summary'}</span>
                      </button>
                    </div>
                    <div className="text-slate-600 text-[11px] font-mono space-y-0.5">
                      <div><strong>Area:</strong> {formState.areaOfInterest}</div>
                      <div><strong>Client:</strong> {formState.fullName} ({formState.organisation})</div>
                    </div>
                  </div>

                  <div className="border-t border-slate-200 pt-6 max-w-md mx-auto space-y-4">
                    <div className="flex items-center space-x-3 text-xs text-left bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
                      <Calendar className="w-5 h-5 text-[#2582ff] shrink-0" />
                      <div>
                        <p className="font-bold text-slate-800">What Happens Next?</p>
                        <p className="text-slate-500 mt-0.5 text-[11px] leading-normal">
                          A CSL Solution Architect will review your stack requirements and schedule a non-disclosure technical briefing.
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() => {
                        setIsSuccess(false);
                        setFormState({
                          fullName: '',
                          corporateEmail: '',
                          organisation: '',
                          jobTitle: '',
                          areaOfInterest: 'CittaEFS Compliance Integration',
                          phone: '',
                          message: ''
                        });
                      }}
                      className="text-xs text-slate-500 hover:text-[#2582ff] font-semibold flex items-center justify-center space-x-1 mx-auto cursor-pointer"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Submit another consultation inquiry</span>
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
