import {
  Factory,
  ShoppingBag,
  Landmark,
  HeartPulse,
  ShieldCheck,
  Truck,
  Building,
  Hotel,
  GraduationCap,
  Zap,
} from 'lucide-react';

const industries = [
  {
    title: 'Manufacturing and heavy industry',
    desc: 'Production billing, inventory, and fiscal clearance for long production runs.',
    icon: Factory,
  },
  {
    title: 'Retail and food service',
    desc: 'High-volume checkout and invoicing that keeps working when the network does not.',
    icon: ShoppingBag,
  },
  {
    title: 'Financial services and insurance',
    desc: 'Ledger accuracy and audit trails for regulated, high-value transactions.',
    icon: Landmark,
  },
  {
    title: 'Healthcare and pharmaceuticals',
    desc: 'Patient billing, insurance allocation, and confidential financial records.',
    icon: HeartPulse,
  },
  {
    title: 'Logistics and supply chain',
    desc: 'Compliance checks attached to transport and delivery documents.',
    icon: Truck,
  },
  {
    title: 'Government and utilities',
    desc: 'Consolidated billing and collection records across departments.',
    icon: ShieldCheck,
  },
  {
    title: 'Telecommunications and media',
    desc: 'Bulk customer billing and service records at scale.',
    icon: Zap,
  },
  {
    title: 'Construction and infrastructure',
    desc: 'Progressive invoicing and tax handling for long-term capital projects.',
    icon: Building,
  },
  {
    title: 'Education',
    desc: 'Tuition billing, scholarships, and campus-level financial reporting.',
    icon: GraduationCap,
  },
  {
    title: 'Hospitality and tourism',
    desc: 'Reservations, folios, and property-level revenue reporting.',
    icon: Hotel,
  },
];

export default function IndustriesSection() {
  return (
    <section id="industries" className="border-b border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">

        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="text-sm font-medium text-[#2582ff]">Industries</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Built for operations with real constraints.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600">
              The same core products are configured for the transaction volume, reporting rules, and
              physical workflow of each sector.
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 gap-x-10 gap-y-7 sm:grid-cols-2">
              {industries.map((industry) => {
                const Icon = industry.icon;
                return (
                  <div key={industry.title} className="flex gap-4 border-t border-slate-200 pt-5">
                    <Icon className="mt-0.5 h-5 w-5 shrink-0 text-slate-500" />
                    <div>
                      <h3 className="font-display text-base font-semibold text-slate-900">
                        {industry.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                        {industry.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
