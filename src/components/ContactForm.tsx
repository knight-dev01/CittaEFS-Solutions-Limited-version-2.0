import { useState, FormEvent } from 'react';
import { Mail, Phone, MapPin, CheckCircle2, Send, Copy, Check } from 'lucide-react';

const initialForm = {
  fullName: '',
  corporateEmail: '',
  organisation: '',
  jobTitle: '',
  areaOfInterest: 'CittaEFS Compliance Integration',
  phone: '',
  message: '',
};

const inputClass =
  'w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:border-[#2582ff] focus:outline-none';

export default function ContactForm() {
  const [formState, setFormState] = useState(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [deliveryMode, setDeliveryMode] = useState<'qservers_smtp' | 'direct_client' | 'unconfigured_smtp'>('qservers_smtp');
  const [copied, setCopied] = useState(false);

  const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleCopySummary = () => {
    const summary = `Full name: ${formState.fullName}\nEmail: ${formState.corporateEmail}\nOrganisation: ${formState.organisation}\nJob title: ${formState.jobTitle}\nPhone: ${formState.phone || 'N/A'}\nArea of interest: ${formState.areaOfInterest}\n\n${formState.message}`;
    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formState.fullName.trim()) {
      setErrorMessage('Please enter your name.');
      return;
    }
    if (!formState.corporateEmail.trim() || !isValidEmail(formState.corporateEmail)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    if (!formState.organisation.trim()) {
      setErrorMessage('Please enter your organisation.');
      return;
    }
    if (!formState.message.trim() || formState.message.trim().length < 10) {
      setErrorMessage('Please describe your request in at least 10 characters.');
      return;
    }

    setIsSubmitting(true);

    const openMailFallback = () => {
      setDeliveryMode('direct_client');
      setIsSuccess(true);
      const subject = encodeURIComponent(`Consultation request: ${formState.organisation} (${formState.fullName})`);
      const body = encodeURIComponent(
        `Full name: ${formState.fullName}\nEmail: ${formState.corporateEmail}\nPhone: ${formState.phone || 'N/A'}\nOrganisation: ${formState.organisation}\nJob title: ${formState.jobTitle}\nArea of interest: ${formState.areaOfInterest}\n\n${formState.message}`,
      );
      window.location.href = `mailto:cittasl@cittanuvola.com?subject=${subject}&body=${body}`;
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        if (result.mode === 'qservers_smtp') {
          setDeliveryMode('qservers_smtp');
          setIsSuccess(true);
        } else if (result.fallbackUrl) {
          setDeliveryMode('unconfigured_smtp');
          window.location.href = result.fallbackUrl;
          setIsSuccess(true);
        } else {
          setDeliveryMode('unconfigured_smtp');
          setIsSuccess(true);
        }
      } else {
        openMailFallback();
      }
    } catch {
      openMailFallback();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">

        <div className="max-w-3xl">
          <p className="text-sm font-medium text-[#2582ff]">Contact</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Tell us what you need.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-600">
            Describe the system you run and the problem you want solved. We will reply with a
            concrete next step, not a brochure.
          </p>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-16">

          <div className="lg:col-span-4">
            <div className="space-y-4 rounded-xl border border-slate-200 bg-slate-50 p-6">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
                <p className="text-sm text-slate-700">
                  5, Sadiku Street, Agidingbi, Ikeja, Lagos, Nigeria
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-slate-400" />
                <a href="mailto:cittasl@cittanuvola.com" className="text-sm text-slate-700 hover:underline">
                  cittasl@cittanuvola.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-slate-400" />
                <a href="tel:08134248104" className="text-sm text-slate-700 hover:underline">
                  0813 424 8104
                </a>
              </div>
            </div>

            <p className="mt-5 text-xs leading-relaxed text-slate-500">
              We treat project details as confidential. Anything shared here stays with the
              engineering team.
            </p>
          </div>

          <div className="lg:col-span-8">
            {!isSuccess ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                {errorMessage && (
                  <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                    {errorMessage}
                  </div>
                )}

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-700">Name *</label>
                    <input
                      type="text"
                      value={formState.fullName}
                      onChange={(e) => setFormState({ ...formState, fullName: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-700">Email *</label>
                    <input
                      type="email"
                      value={formState.corporateEmail}
                      onChange={(e) => setFormState({ ...formState, corporateEmail: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-700">Organisation *</label>
                    <input
                      type="text"
                      value={formState.organisation}
                      onChange={(e) => setFormState({ ...formState, organisation: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-700">Job title</label>
                    <input
                      type="text"
                      value={formState.jobTitle}
                      onChange={(e) => setFormState({ ...formState, jobTitle: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-700">Area of interest</label>
                    <select
                      value={formState.areaOfInterest}
                      onChange={(e) => setFormState({ ...formState, areaOfInterest: e.target.value })}
                      className={inputClass}
                    >
                      <option>CittaEFS Compliance Integration</option>
                      <option>CittaMatrix ERP</option>
                      <option>CittaHospitalityX</option>
                      <option>CittaPlannerX</option>
                      <option>CittaNexus API Gateway</option>
                      <option>ERP integration</option>
                      <option>Custom software</option>
                      <option>Technology consulting</option>
                    </select>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-700">Phone</label>
                    <input
                      type="tel"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-700">Message *</label>
                  <textarea
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#2582ff] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1d63ed] disabled:opacity-50"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      Send message
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-7 sm:p-10">
                <CheckCircle2 className="h-8 w-8 text-emerald-600" />
                <h3 className="mt-5 font-display text-xl font-bold text-slate-900">
                  Message prepared
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {deliveryMode === 'qservers_smtp'
                    ? `Thanks, ${formState.fullName}. Your request was sent to our team, and we will reply to ${formState.corporateEmail}.`
                    : `Thanks, ${formState.fullName}. Your email app should open with the message ready to send to cittasl@cittanuvola.com.`}
                </p>

                <div className="mt-6 rounded-lg border border-slate-200 bg-white p-4">
                  <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-3">
                    <span className="text-sm font-medium text-slate-700">Your request</span>
                    <button
                      onClick={handleCopySummary}
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-[#2582ff] hover:underline"
                    >
                      {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                      {copied ? 'Copied' : 'Copy'}
                    </button>
                  </div>
                  <dl className="mt-3 space-y-1.5 text-sm">
                    <div className="flex justify-between gap-6">
                      <dt className="text-slate-500">Area</dt>
                      <dd className="text-right text-slate-800">{formState.areaOfInterest}</dd>
                    </div>
                    <div className="flex justify-between gap-6">
                      <dt className="text-slate-500">Organisation</dt>
                      <dd className="text-right text-slate-800">{formState.organisation}</dd>
                    </div>
                  </dl>
                </div>

                <button
                  onClick={() => {
                    setIsSuccess(false);
                    setFormState(initialForm);
                  }}
                  className="mt-6 text-sm font-medium text-slate-600 hover:text-slate-900 hover:underline"
                >
                  Send another message
                </button>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
