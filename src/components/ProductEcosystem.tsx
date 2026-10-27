import { ArrowUpRight } from 'lucide-react';
import { PageId } from '../types';
import { goTo } from '../navigation';

interface ProductEcosystemProps {
  setCurrentPage: (page: PageId) => void;
}

const products = [
  {
    name: 'CittaMatrix',
    category: 'ERP and ledger',
    description: 'A multi-entity general ledger, procurement workflow, and inventory system for companies running more than one set of books.',
    href: 'https://cittamatrix.com/',
  },
  {
    name: 'CittaHospitalityX',
    category: 'Hotel property management',
    description: 'Reservations, room allocation, housekeeping, and folio billing for hotels and serviced apartments.',
    href: 'https://cittahospitalityx.com/',
  },
  {
    name: 'CittaPlannerX',
    category: 'Resource scheduling',
    description: 'A Gantt-based scheduler with dependency tracking and workload leveling for construction and logistics teams.',
    href: 'https://cittaplannerx.com/',
  },
  {
    name: 'CittaNexus',
    category: 'API gateway',
    description: 'A routing layer for webhooks and service-to-service events, with retries, logging, and failure isolation.',
    href: 'https://cittanexus.com/',
  },
];

export default function ProductEcosystem(_props: ProductEcosystemProps) {
  return (
    <section id="products" className="border-b border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">

        <div className="max-w-3xl">
          <p className="text-sm font-medium text-[#2582ff]">Products</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Five systems, one operating view.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-600">
            Each product solves a specific operational problem. They share the same data model and
            can be deployed separately or together.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-3">

          <div className="flex flex-col justify-between rounded-xl border border-slate-300 bg-white p-7 lg:col-span-2 lg:p-9">
            <div>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-[#2582ff]">Flagship</p>
                  <h3 className="mt-2 font-display text-2xl font-bold text-slate-900 sm:text-3xl">
                    CittaEFS
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">Fiscal compliance middleware</p>
                </div>
                <span className="rounded border border-slate-200 bg-slate-50 px-2 py-1 text-xs font-medium text-slate-600">
                  NRS pre-clearance
                </span>
              </div>

              <p className="mt-5 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
                CittaEFS reads invoices from SAP, Oracle, Odoo, or Microsoft Dynamics, validates
                them against NRS rules, signs the payload, and submits it. Nothing is replaced and
                nothing is re-keyed.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-4 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <button
                onClick={() => goTo('/cittaefs')}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2582ff] hover:underline"
              >
                Open CittaEFS
                <ArrowUpRight className="h-4 w-4" />
              </button>
              <span className="text-xs text-slate-500">No ERP replacement required</span>
            </div>
          </div>

          {products.map((product) => (
            <a
              key={product.name}
              href={product.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 transition-colors hover:border-slate-300"
            >
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                  {product.category}
                </p>
                <h3 className="mt-2 font-display text-lg font-semibold text-slate-900 group-hover:text-[#2582ff]">
                  {product.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{product.description}</p>
              </div>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-slate-700 group-hover:text-[#2582ff]">
                Visit website
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </a>
          ))}

        </div>
      </div>
    </section>
  );
}
