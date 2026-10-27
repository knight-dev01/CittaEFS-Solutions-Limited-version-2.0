import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What is NRS compliance, and how does CittaEFS handle it?',
    answer:
      'The National Revenue Service requires invoices to be submitted in real time. CittaEFS formats the invoice, checks the customer TIN and VAT calculation, signs the payload, and submits it to the NRS gateway.',
  },
  {
    question: 'Do we need to change our ERP?',
    answer:
      'No. CittaEFS connects to SAP, Oracle, Microsoft Dynamics, or Odoo through read-only database triggers or a webhook. The core ERP stays as it is.',
  },
  {
    question: 'What happens when an invoice fails validation?',
    answer:
      'The record is stopped before transmission and flagged with the specific error, such as a missing TIN or a rounding mismatch. Finance can correct it in the ledger or in the CittaEFS queue.',
  },
  {
    question: 'Is financial data encrypted?',
    answer:
      'Data is encrypted in transit and at rest. Access is limited to the accounts that need it, and audit records show who viewed or changed a submission.',
  },
  {
    question: 'How long does onboarding take?',
    answer:
      'Discovery and mapping usually take 3–5 days, sandbox setup 3–4 days, testing 2 days, and production deployment 2 days. Most integrations go live in under 14 business days.',
  },
  {
    question: 'Can we upload invoices manually?',
    answer:
      'Yes. For teams without an API integration, CittaEFS includes a bulk uploader for Excel and CSV files. Uploads are validated in the same way as API submissions.',
  },
  {
    question: 'How are regulatory changes handled?',
    answer:
      'Tax rules and NRS API changes are applied on our side. Clients do not need to patch or redeploy anything.',
  },
  {
    question: 'What enterprise software does CittaSL build?',
    answer:
      'We build fiscal compliance middleware, ERP and ledger software, hotel property management, project and resource scheduling, and API integration tools. We also connect those systems to SAP, Oracle, Microsoft Dynamics, and Odoo.',
  },
  {
    question: 'Do you work with companies outside Lagos?',
    answer:
      'Yes. We are based in Ikeja, Lagos, and work with teams across Nigeria and West Africa. Discovery, staging, and support sessions can run remotely.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">

        <div className="max-w-2xl">
          <p className="text-sm font-medium text-[#2582ff]">Questions</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Common technical questions.
          </h2>
        </div>

        <div className="mt-10 border-t border-slate-200">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.question} className="border-b border-slate-200">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-sm font-semibold text-slate-900 sm:text-base">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 text-slate-400 transition-transform ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <p
                  className={`max-w-3xl pb-5 pr-8 text-sm leading-relaxed text-slate-600 ${
                    isOpen ? '' : 'hidden'
                  }`}
                >
                  {faq.answer}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex flex-col gap-4 rounded-xl border border-slate-200 bg-slate-50 p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-slate-900">Still have a question?</p>
            <p className="mt-1 text-sm text-slate-600">
              Send it directly to the engineering team.
            </p>
          </div>
          <a
            href="mailto:cittasl@cittanuvola.com?subject=CittaEFS%20question"
            className="inline-flex shrink-0 items-center justify-center rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-700"
          >
            Email us
          </a>
        </div>

      </div>
    </section>
  );
}
