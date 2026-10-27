interface CSLAboutProps {
  isTopPage?: boolean;
  isSummary?: boolean;
  setCurrentPage?: (page: any) => void;
}

const values = [
  {
    title: 'Regulatory precision',
    body: 'Every outgoing record is checked against current rules before transmission. We would rather delay a submission than send a bad one.',
  },
  {
    title: 'Data security',
    body: 'Encryption in transit and at rest, least-privilege access, and a record of who changed what.',
  },
  {
    title: 'Integration without disruption',
    body: 'We add to the systems you already trust. No forced migrations and no downtime during rollout.',
  },
];

export default function CSLAbout({ isSummary = false }: CSLAboutProps) {
  return (
    <section className="border-b border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">

          <div className="lg:col-span-7">
            <p className="text-sm font-medium text-[#2582ff]">About CittaSL</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Enterprise software and regulatory technology.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600">
              CittaSL builds software for companies whose core systems are already in place. Our work
              sits between the ledger and the outside world: tax authorities, auditors, warehouses,
              and the reporting teams that need a clear answer.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              We are part of CittaNuvola Group. The team covers middleware engineering, ERP
              integration, and long-term support.
            </p>

            {!isSummary && (
              <div className="mt-10 grid grid-cols-1 gap-6 border-t border-slate-200 pt-8 sm:grid-cols-3">
                <div>
                  <p className="font-display text-sm font-semibold text-slate-900">Founded</p>
                  <p className="mt-1 text-sm text-slate-600">Lagos, Nigeria</p>
                </div>
                <div>
                  <p className="font-display text-sm font-semibold text-slate-900">Focus</p>
                  <p className="mt-1 text-sm text-slate-600">Fiscal middleware and ERP</p>
                </div>
                <div>
                  <p className="font-display text-sm font-semibold text-slate-900">Parent</p>
                  <p className="mt-1 text-sm text-slate-600">CittaNuvola Group</p>
                </div>
              </div>
            )}
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8">
              <h3 className="font-display text-lg font-semibold text-slate-900">What we believe</h3>
              <div className="mt-5 space-y-5">
                {values.map((value) => (
                  <div key={value.title} className="border-t border-slate-100 pt-4">
                    <h4 className="text-sm font-semibold text-slate-900">{value.title}</h4>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{value.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {!isSummary && (
          <div className="mt-14 grid gap-6 border-t border-slate-200 pt-12 md:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8">
              <h3 className="font-display text-lg font-semibold text-slate-900">Our mission</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                To make compliance and operational reporting a normal part of the transaction
                cycle, rather than a separate project that runs late and over budget.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8">
              <h3 className="font-display text-lg font-semibold text-slate-900">Our vision</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Mid-sized and large companies in emerging markets should have the same quality of
                enterprise tooling as companies with much larger budgets.
              </p>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
