const testimonials = [
  {
    quote:
      'The planner and ledger now share the same project data. We stopped reconciling two sets of numbers at the end of every quarter.',
    name: 'Arc. Toyin Alao',
    role: 'Director of Infrastructure and Planning',
    company: 'Adron Homes and Properties',
  },
  {
    quote:
      'CittaEFS catches rounding and TIN errors before submission. That alone removed most of the back-and-forth with the tax portal.',
    name: 'Dr. Farouk Bello',
    role: 'Accredited access point systems auditor',
    company: 'NRS Tax Compliance Council',
  },
  {
    quote:
      'The Odoo connector went in without touching our core setup. Our team could keep working while the integration was tested.',
    name: 'Engr. Olanrewaju Ajayi',
    role: 'Chief Operating Officer',
    company: 'Coswals Structures Limited',
  },
  {
    quote:
      'Monthly invoicing used to take days of manual uploads. The bulk uploader and VAT checks cut it to a few hours.',
    name: 'Elizabeth Nwosu',
    role: 'Head of inventory and e-commerce logistics',
    company: 'Scarlet and Snow Retail Group',
  },
];

export default function TestimonialsCarousel() {
  return (
    <section className="border-b border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">

        <div className="max-w-3xl">
          <p className="text-sm font-medium text-[#2582ff]">Client feedback</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            What teams say after go-live.
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {testimonials.map((item) => (
            <figure key={item.name} className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8">
              <blockquote className="text-sm leading-relaxed text-slate-700">
                “{item.quote}”
              </blockquote>
              <figcaption className="mt-5 border-t border-slate-100 pt-4">
                <p className="text-sm font-semibold text-slate-900">{item.name}</p>
                <p className="mt-0.5 text-xs text-slate-500">
                  {item.role}, {item.company}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>

      </div>
    </section>
  );
}
