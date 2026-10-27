import { CheckCircle2 } from 'lucide-react';

const points = [
  {
    title: 'We work inside your constraints',
    body: 'Existing ERP, existing hosting, existing approval process. The integration adapts to those, not the other way round.',
  },
  {
    title: 'The engineers stay involved',
    body: 'The people who scope the work are the same people who build and support it. No handoff to a separate account team.',
  },
  {
    title: 'Clear scope and pricing',
    body: 'You get a written scope, milestones, and a go-live date before work begins. Change requests are priced separately.',
  },
  {
    title: 'Support after launch',
    body: 'Monitoring, bug fixes, and a named contact for the support period. We do not disappear after go-live.',
  },
  {
    title: 'Built for audit',
    body: 'Every submission keeps a timestamped record, so finance can answer a regulator without reconstructing history.',
  },
  {
    title: 'Local presence',
    body: 'Our team is in Lagos. Meetings, escalation, and on-site work happen in the same time zone.',
  },
];

export default function WhyChooseCSL() {
  return (
    <section id="why-choose-csl" className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">

          <div className="lg:col-span-4">
            <p className="text-sm font-medium text-[#2582ff]">Why CSL</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              What working with us actually looks like.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600">
              We are a small enterprise software team, not a reseller. That matters when the
              integration gets difficult.
            </p>
            <div className="mt-6 flex items-start gap-2.5 rounded-lg border border-slate-200 bg-slate-50 p-4">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#2582ff]" />
              <p className="text-sm text-slate-700">
                Operating subsidiary of CittaNuvola Group.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2 lg:col-span-8">
            {points.map((point) => (
              <div key={point.title} className="border-t border-slate-200 pt-5">
                <h3 className="font-display text-base font-semibold text-slate-900">{point.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{point.body}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
