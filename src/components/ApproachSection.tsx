const steps = [
  {
    title: 'Discovery',
    body: 'We look at the current system, the invoice flow, and the reporting requirements. You get a written scope before any work starts.',
  },
  {
    title: 'Architecture',
    body: 'We agree on where the integration sits, how records are matched, and what happens when a transmission fails.',
  },
  {
    title: 'Testing',
    body: 'Invoices run through a sandbox against real rule sets. Discrepancies are fixed there, not in production.',
  },
  {
    title: 'Go-live',
    body: 'We deploy with your team, monitor the first cycles, and stay on support for the agreed period.',
  },
];

export default function ApproachSection() {
  return (
    <section id="approach" className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">

        <div className="max-w-3xl">
          <p className="text-sm font-medium text-[#2582ff]">How we work</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            A short, predictable implementation.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-600">
            Most integrations are scoped, tested, and live within a few weeks. The timeline is agreed
            before the contract.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 border-t border-slate-200 pt-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.title}>
              <span className="font-mono text-xs text-slate-400">0{index + 1}</span>
              <h3 className="mt-3 font-display text-lg font-semibold text-slate-900">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.body}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
