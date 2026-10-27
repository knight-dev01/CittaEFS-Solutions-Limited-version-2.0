import {
  ArrowLeft,
  ArrowRight,
  Check,
  FileCheck2,
  KeyRound,
  Landmark,
  MonitorSmartphone,
  ShieldCheck,
} from 'lucide-react';
import { goTo, goToSection } from '../navigation';

const facts = [
  { label: 'Clearance model', value: 'NRS pre-clearance' },
  { label: 'Validation target', value: 'Under 240ms' },
  { label: 'ERP coverage', value: 'SAP, Oracle, Odoo, Dynamics' },
  { label: 'Audit retention', value: '7 years, immutable' },
];

const steps = [
  {
    icon: MonitorSmartphone,
    title: 'Capture',
    body: 'CittaEFS reads the invoice from your existing ERP through database triggers, webhooks, or an API call. No changes to your core system.',
  },
  {
    icon: FileCheck2,
    title: 'Validate',
    body: 'Customer TIN, line items, VAT, rounding, and required fields are checked before anything leaves your environment.',
  },
  {
    icon: KeyRound,
    title: 'Sign',
    body: 'Approved invoices are signed with your private key and time-stamped, creating a record that cannot be altered later.',
  },
  {
    icon: Landmark,
    title: 'Clear',
    body: 'Signed payloads are submitted to the NRS gateway. The cleared response and audit record are returned to your ledger.',
  },
];

const included = [
  'Pre-clearance validation for invoices and credit notes',
  'SHA-256 payload signing and timestamping',
  'TIN verification against the national registry',
  'Offline queue with automatic retry when connectivity returns',
  'Bulk Excel and CSV upload for small teams',
  'Read-only audit ledger for finance and tax reviews',
];

export default function CittaEFSPage() {
  return (
    <main className="w-full overflow-x-hidden pt-20">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <button
            onClick={() => goTo('/')}
            className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-slate-900"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to CittaSL
          </button>

          <p className="mb-4 text-sm font-medium text-[#2582ff]">CittaEFS</p>
          <h1 className="max-w-3xl font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Fiscal compliance for companies that cannot change their ERP
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            CittaEFS sits between your billing system and the National Revenue Service. It checks,
            signs, and submits every invoice, then keeps a record you can defend in an audit.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <button
              onClick={() => goToSection('contact')}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
            >
              Request a demo
              <ArrowRight className="h-4 w-4" />
            </button>
            <a
              href="mailto:cittasl@cittanuvola.com?subject=CittaEFS%20technical%20questions"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 transition-colors hover:border-slate-400 hover:bg-slate-50"
            >
              Ask a technical question
            </a>
          </div>

          <dl className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-4">
            {facts.map((fact) => (
              <div key={fact.label} className="bg-white px-5 py-5">
                <dt className="text-xs font-medium text-slate-500">{fact.label}</dt>
                <dd className="mt-1 text-sm font-semibold text-slate-900">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            How a transaction moves
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
            The workflow is the same whether you run a single ledger or several entities.
          </p>

          <ol className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <li key={step.title} className="rounded-lg border border-slate-200 bg-white p-6">
                  <div className="flex items-center justify-between">
                    <Icon className="h-5 w-5 text-[#2582ff]" />
                    <span className="font-mono text-xs text-slate-400">0{index + 1}</span>
                  </div>
                  <h3 className="mt-5 font-display text-base font-semibold text-slate-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.body}</p>
                </li>
              );
            })}
          </ol>

          <div className="mt-10 flex flex-col items-start gap-3 rounded-lg border border-slate-200 bg-white p-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center gap-2 text-sm text-slate-700">
              <span className="rounded border border-slate-200 bg-slate-50 px-2.5 py-1 font-medium">
                Your ERP
              </span>
              <ArrowRight className="h-4 w-4 text-slate-400" />
              <span className="rounded border border-[#2582ff]/30 bg-[#2582ff]/5 px-2.5 py-1 font-medium text-[#1d63ed]">
                CittaEFS
              </span>
              <ArrowRight className="h-4 w-4 text-slate-400" />
              <span className="rounded border border-slate-200 bg-slate-50 px-2.5 py-1 font-medium">
                NRS gateway
              </span>
            </div>
            <span className="text-xs text-slate-500">No ERP replacement required</span>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-5xl gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div>
            <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              What is included
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
              Every deployment covers the full compliance path, not just transmission.
            </p>
          </div>
          <ul className="space-y-3">
            {included.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-slate-700">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#2582ff]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="flex flex-col gap-8 rounded-lg border border-slate-200 bg-white p-7 sm:p-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
                <ShieldCheck className="h-4 w-4 text-[#2582ff]" />
                Next step
              </div>
              <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-slate-900">
                See CittaEFS against your own invoice flow
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                We will map one of your invoice types in a sandbox and show the validation output
                before you commit to an integration.
              </p>
            </div>
            <button
              onClick={() => goToSection('contact')}
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-[#2582ff] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1d63ed]"
            >
              Request a demo
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
