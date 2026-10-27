import { ArrowUpRight } from 'lucide-react';
import { goTo, goToSection } from '../navigation';

const principles = [
  {
    title: 'Replace the friction, not the system',
    body: 'Most companies cannot rip out a working ERP. We build around what is already there, so finance teams keep their ledger and IT keeps its architecture.',
  },
  {
    title: 'Compliance should be automatic',
    body: 'Tax rules change and audits arrive without warning. Our software applies the rules on every transaction instead of relying on spreadsheets and manual checks.',
  },
  {
    title: 'Ship software that stays useful',
    body: 'We design for the daily work: invoicing, scheduling, room allocation, reporting. If a feature does not remove real effort, it does not ship.',
  },
];

const products = [
  { name: 'CittaEFS', note: 'Fiscal compliance', href: '/cittaefs' },
  { name: 'CittaMatrix', note: 'ERP and ledger', href: 'https://cittamatrix.com/' },
  { name: 'CittaHospitalityX', note: 'Hotel PMS', href: 'https://cittahospitalityx.com/' },
  { name: 'CittaPlannerX', note: 'Resource scheduling', href: 'https://cittaplannerx.com/' },
  { name: 'CittaNexus', note: 'API gateway', href: 'https://cittanexus.com/' },
];

export default function WhyWeExist() {
  return (
    <section id="why-we-exist" className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">

        <div className="max-w-3xl">
          <p className="text-sm font-medium text-[#2582ff]">Why we exist</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            We connect systems that were never designed to talk to each other.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-600">
            CittaSL is the enterprise software division of CittaNuvola. We work with finance,
            operations, and IT teams whose tools have outgrown their original purpose but are too
            important to replace.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 border-t border-slate-200 pt-10 md:grid-cols-3">
          {principles.map((item, index) => (
            <div key={item.title}>
              <span className="font-mono text-xs text-slate-400">0{index + 1}</span>
              <h3 className="mt-3 font-display text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-semibold text-slate-900">CittaNuvola Group</p>
              <p className="mt-1 text-sm text-slate-600">
                CittaSL operates as the group&apos;s enterprise software subsidiary.
              </p>
            </div>
            <a
              href="https://www.cittanuvola.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-700 hover:text-slate-900"
            >
              Visit cittanuvola.com
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-5">
            {products.map((product) => (
              <button
                key={product.name}
                onClick={() => {
                  if (product.href.startsWith('/')) {
                    goTo(product.href);
                  } else {
                    window.open(product.href, '_blank', 'noopener,noreferrer');
                  }
                }}
                className="group bg-white px-4 py-4 text-left transition-colors hover:bg-slate-50"
              >
                <span className="block text-sm font-semibold text-slate-900 group-hover:text-[#2582ff]">
                  {product.name}
                </span>
                <span className="mt-0.5 block text-xs text-slate-500">{product.note}</span>
              </button>
            ))}
          </div>

          <button
            onClick={() => goToSection('products')}
            className="mt-5 text-sm font-medium text-[#2582ff] hover:underline"
          >
            See all products
          </button>
        </div>

      </div>
    </section>
  );
}
