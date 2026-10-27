import { Mail, Phone, MapPin } from 'lucide-react';
import { PageId } from '../types';
import { goTo, goToSection } from '../navigation';
import cslLogo from '../logo.png';

interface FooterProps {
  setCurrentPage: (page: PageId) => void;
}

export default function Footer({ setCurrentPage }: FooterProps) {
  const nav = (target: string) => goToSection(target);

  return (
    <footer className="border-t border-slate-200 bg-slate-50 pt-16 pb-10 text-slate-600">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-2 gap-10 pb-14 md:grid-cols-12">

          <div className="col-span-12 space-y-5 md:col-span-5">
            <div className="flex cursor-pointer items-center gap-3" onClick={() => goTo('/')}>
              <img src={cslLogo} alt="CittaSL logo" className="h-9 w-auto object-contain" />
              <div className="flex flex-col text-left">
                <span className="font-display text-base font-bold leading-none text-slate-900">
                  CittaSL
                </span>
                <span className="mt-1 text-[10px] font-medium uppercase tracking-widest text-slate-500">
                  CittaNuvola Group
                </span>
              </div>
            </div>

            <p className="max-w-sm text-sm leading-relaxed text-slate-600">
              Enterprise software and regulatory middleware from Lagos. We build CittaEFS, CittaMatrix,
              CittaHospitalityX, CittaPlannerX, and CittaNexus.
            </p>

            <div className="space-y-2.5 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
                <span>5, Sadiku Street, Agidingbi, Ikeja, Lagos</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-slate-400" />
                <a href="mailto:cittasl@cittanuvola.com" className="text-slate-800 hover:underline">
                  cittasl@cittanuvola.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-slate-400" />
                <a href="tel:08134248104" className="text-slate-800 hover:underline">
                  0813 424 8104
                </a>
              </div>
            </div>
          </div>

          <div className="col-span-6 space-y-3 md:col-span-2">
            <h4 className="text-sm font-semibold text-slate-900">Products</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => goTo('/cittaefs')} className="text-left hover:text-slate-900 hover:underline">
                  CittaEFS
                </button>
              </li>
              <li><a href="https://cittamatrix.com/" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 hover:underline">CittaMatrix</a></li>
              <li><a href="https://cittahospitalityx.com/" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 hover:underline">CittaHospitalityX</a></li>
              <li><a href="https://cittaplannerx.com/" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 hover:underline">CittaPlannerX</a></li>
              <li><a href="https://cittanexus.com/" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 hover:underline">CittaNexus</a></li>
            </ul>
          </div>

          <div className="col-span-6 space-y-3 md:col-span-2">
            <h4 className="text-sm font-semibold text-slate-900">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => nav('services')} className="text-left hover:text-slate-900 hover:underline">ERP integration</button></li>
              <li><button onClick={() => nav('services')} className="text-left hover:text-slate-900 hover:underline">Custom engineering</button></li>
              <li><button onClick={() => nav('services')} className="text-left hover:text-slate-900 hover:underline">Staging and testing</button></li>
              <li><button onClick={() => nav('services')} className="text-left hover:text-slate-900 hover:underline">Compliance consulting</button></li>
              <li><button onClick={() => nav('services')} className="text-left hover:text-slate-900 hover:underline">Support</button></li>
            </ul>
          </div>

          <div className="col-span-6 space-y-3 md:col-span-3">
            <h4 className="text-sm font-semibold text-slate-900">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => nav('why-we-exist')} className="text-left hover:text-slate-900 hover:underline">Why we exist</button></li>
              <li><button onClick={() => nav('challenges')} className="text-left hover:text-slate-900 hover:underline">Challenges we solve</button></li>
              <li><button onClick={() => nav('why-choose-csl')} className="text-left hover:text-slate-900 hover:underline">Why CSL</button></li>
              <li><button onClick={() => nav('approach')} className="text-left hover:text-slate-900 hover:underline">Our approach</button></li>
              <li><button onClick={() => nav('contact')} className="text-left hover:text-slate-900 hover:underline">Contact</button></li>
            </ul>
          </div>

        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 text-xs text-slate-500 sm:flex-row">
          <p>© 2026 CittaSL. An operating subsidiary of CittaNuvola.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-900">Privacy</a>
            <a href="#" className="hover:text-slate-900">Terms</a>
            <a href="https://www.cittanuvola.com" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900">CittaNuvola</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
