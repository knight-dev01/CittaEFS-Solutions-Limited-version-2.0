import { Network, Code2, Cloud, Sliders, Headphones, Database } from 'lucide-react';

const services = [
  {
    title: 'ERP integration',
    desc: 'Connect CittaEFS or CittaMatrix to the ERP you already run, using read-only triggers, webhooks, or an API bridge.',
    icon: Network,
  },
  {
    title: 'Custom engineering',
    desc: 'Internal tools and workflow software built around how your team actually operates.',
    icon: Code2,
  },
  {
    title: 'Cloud deployment',
    desc: 'Managed deployments on your cloud account or ours, with staging, monitoring, and rollback plans.',
    icon: Cloud,
  },
  {
    title: 'Data and reporting',
    desc: 'Consolidate ledgers, clean up reporting queries, and give finance a reliable month-end view.',
    icon: Database,
  },
  {
    title: 'Performance tuning',
    desc: 'Reduce transaction time and database load on existing enterprise systems.',
    icon: Sliders,
  },
  {
    title: 'Ongoing support',
    desc: 'A named engineer, agreed response times, and monitoring for the systems we run with you.',
    icon: Headphones,
  },
];

export default function ProfessionalServices() {
  return (
    <section id="services" className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">

          <div className="lg:col-span-4">
            <p className="text-sm font-medium text-[#2582ff]">Services</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Implementation, not just licences.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600">
              Our team scopes the work, integrates the software, and stays available after go-live.
              You work with the engineers who built the system.
            </p>
            <a
              href="#contact"
              className="mt-6 inline-flex text-sm font-semibold text-[#2582ff] hover:underline"
            >
              Discuss a project
            </a>
          </div>

          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <div key={service.title} className="border-t border-slate-200 pt-5">
                    <Icon className="h-5 w-5 text-slate-500" />
                    <h3 className="mt-3 font-display text-base font-semibold text-slate-900">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{service.desc}</p>
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
