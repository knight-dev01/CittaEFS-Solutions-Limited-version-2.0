import { ArrowRight, Phone } from 'lucide-react';
import { goToSection } from '../navigation';

export default function CallToAction() {
  return (
    <section className="border-b border-slate-200 bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-center">

          <div className="lg:col-span-8">
            <h2 className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Have a system that needs to do more?
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
              Tell us what is not working and we will tell you whether our software fits. If it does
              not, we will say so.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:col-span-4 lg:justify-end">
            <button
              onClick={() => goToSection('contact')}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-100"
            >
              Contact us
              <ArrowRight className="h-4 w-4" />
            </button>
            <a
              href="tel:08134248104"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
            >
              <Phone className="h-4 w-4" />
              0813 424 8104
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
