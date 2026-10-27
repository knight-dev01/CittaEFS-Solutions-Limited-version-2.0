import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { goTo } from '../navigation';

interface CSLHeroProps {
  onExploreEcosystem: () => void;
  onExploreEFS: () => void;
  onRequestDemo: () => void;
}

const systems = ['SAP S/4HANA', 'Oracle NetSuite', 'Microsoft Dynamics', 'Odoo'];

export default function CSLHero({ onExploreEcosystem, onRequestDemo }: CSLHeroProps) {
  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">

          <div className="animate-fade-in lg:col-span-7">
            <p className="text-sm font-medium text-[#2582ff]">
              Enterprise software from Lagos
            </p>

            <h1 className="mt-4 max-w-2xl font-display text-4xl font-bold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Software that keeps complex businesses compliant and running.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
              CittaSL builds middleware and business systems for companies that run on established
              ERPs. Our tools connect those systems to tax authorities, operations, and reporting
              without forcing a rebuild.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={onExploreEcosystem}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#2582ff] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1d63ed]"
              >
                Explore our products
                <ArrowRight className="h-4 w-4" />
              </button>
              <button
                onClick={onRequestDemo}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 transition-colors hover:border-slate-400 hover:bg-slate-50"
              >
                Request a consultation
              </button>
            </div>

            <dl className="mt-14 grid max-w-2xl grid-cols-1 gap-6 border-t border-slate-200 pt-8 sm:grid-cols-3">
              <div>
                <dt className="text-xs font-medium uppercase tracking-wide text-slate-500">Flagship product</dt>
                <dd className="mt-1 text-sm font-semibold text-slate-900">CittaEFS</dd>
              </div>
              <div>
                <dt className="text-xs font-medium uppercase tracking-wide text-slate-500">Core systems</dt>
                <dd className="mt-1 text-sm font-semibold text-slate-900">ERP, fiscal, scheduling</dd>
              </div>
              <div>
                <dt className="text-xs font-medium uppercase tracking-wide text-slate-500">Based in</dt>
                <dd className="mt-1 text-sm font-semibold text-slate-900">Ikeja, Lagos</dd>
              </div>
            </dl>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
              <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                <span className="text-sm font-semibold text-slate-900">Invoice path with CittaEFS</span>
                <span className="text-xs text-slate-500">NRS pre-clearance</span>
              </div>

              <div className="mt-5 space-y-3">
                <div className="rounded-lg border border-slate-200 bg-white p-4">
                  <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Your systems</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {systems.map((system) => (
                      <span key={system} className="rounded border border-slate-200 bg-slate-50 px-2 py-1 text-xs font-medium text-slate-700">
                        {system}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-center">
                  <ArrowRight className="h-4 w-4 rotate-90 text-slate-400" />
                </div>

                <div className="rounded-lg border border-[#2582ff]/30 bg-[#2582ff]/5 p-4">
                  <p className="text-xs font-medium uppercase tracking-wide text-[#1d63ed]">CittaEFS</p>
                  <ul className="mt-2 space-y-1.5 text-sm text-slate-700">
                    {['Validates invoice data', 'Signs the payload', 'Submits to NRS'].map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#2582ff]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex justify-center">
                  <ArrowRight className="h-4 w-4 rotate-90 text-slate-400" />
                </div>

                <div className="rounded-lg border border-slate-200 bg-white p-4">
                  <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Destination</p>
                  <p className="mt-1 text-sm font-semibold text-slate-900">National Revenue Service gateway</p>
                </div>
              </div>

              <button
                onClick={() => goTo('/cittaefs')}
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#2582ff] hover:underline"
              >
                Learn how CittaEFS works
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
