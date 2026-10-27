import {
  Building2,
  Shuffle,
  ShieldAlert,
  Cpu,
  FileClock,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

const challenges = [
  {
    title: 'Legacy systems that cannot move',
    desc: 'Older systems still run the business, but they cannot keep up with new reporting and compliance demands. Replacing them is expensive and risky.',
    solution: 'Add capabilities around the existing system instead of rebuilding it.',
    icon: Building2,
  },
  {
    title: 'Departments working from different data',
    desc: 'Finance, warehouses, and sales often rely on separate records, which creates invoicing errors and duplicated work.',
    solution: 'Connect the sources so each transaction has one clear record.',
    icon: Shuffle,
  },
  {
    title: 'Changing tax and reporting rules',
    desc: 'New fiscal requirements arrive with short notice. Manual updates leave gaps that show up during audits.',
    solution: 'Apply current rules on every transaction, automatically.',
    icon: ShieldAlert,
  },
  {
    title: 'People and equipment overallocated',
    desc: 'Static schedules hide conflicts until a deadline is already at risk.',
    solution: 'Track dependencies and workload in one scheduling view.',
    icon: Cpu,
  },
  {
    title: 'Manual reconciliation',
    desc: 'Spreadsheets and paper trails slow down month-end and introduce avoidable billing mistakes.',
    solution: 'Automate the handoffs and keep an auditable log.',
    icon: FileClock,
  },
];

const sources = ['SAP S/4HANA', 'Oracle NetSuite', 'Microsoft Dynamics', 'Odoo'];
const targets = ['NRS tax gateway', 'Fiscal audit record', 'Reporting ledger'];

export default function ChallengesSection() {
  return (
    <section id="challenges" className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">

        <div className="max-w-3xl">
          <p className="text-sm font-medium text-[#2582ff]">The problem</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Most compliance projects fail before the software is installed.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-600">
            Teams are asked to choose between replacing a working system and accepting manual work.
            We built our products to avoid that choice.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {challenges.map((challenge) => {
            const Icon = challenge.icon;
            return (
              <div
                key={challenge.title}
                className="flex flex-col rounded-xl border border-slate-200 bg-white p-6"
              >
                <Icon className="h-5 w-5 text-slate-500" />
                <h3 className="mt-4 font-display text-base font-semibold text-slate-900">
                  {challenge.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{challenge.desc}</p>
                <div className="mt-5 flex items-start gap-2 border-t border-slate-100 pt-4">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#2582ff]" />
                  <p className="text-sm font-medium text-slate-800">{challenge.solution}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-14 rounded-xl border border-slate-200 bg-slate-50 p-6 sm:p-9">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">

            <div className="lg:col-span-5">
              <h3 className="font-display text-2xl font-bold tracking-tight text-slate-900">
                What we do instead
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                We add a middleware layer between your systems and the destination. It reads
                transactions, applies the rules, and writes the result back. Your existing ERP stays
                in place.
              </p>

              <ul className="mt-6 space-y-3 text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#2582ff]" />
                  Keeps existing hardware, ERP, and database assets
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#2582ff]" />
                  Validates before transmission, not after a rejection
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#2582ff]" />
                  Logs every submission for audit review
                </li>
              </ul>

              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#2582ff] hover:underline"
              >
                Talk to the integration team
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 items-stretch gap-4 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
                <div className="rounded-lg border border-slate-200 bg-white p-5">
                  <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Source</p>
                  <p className="mt-1 text-sm font-semibold text-slate-900">Your ERP</p>
                  <ul className="mt-3 space-y-1.5 text-xs text-slate-600">
                    {sources.map((source) => (
                      <li key={source}>{source}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex justify-center">
                  <ArrowRight className="h-4 w-4 rotate-90 text-slate-400 sm:rotate-0" />
                </div>

                <div className="rounded-lg border border-[#2582ff]/30 bg-white p-5">
                  <p className="text-xs font-medium uppercase tracking-wide text-[#1d63ed]">Middleware</p>
                  <p className="mt-1 text-sm font-semibold text-slate-900">CittaEFS</p>
                  <ul className="mt-3 space-y-1.5 text-xs text-slate-600">
                    <li>Validate</li>
                    <li>Sign</li>
                    <li>Submit</li>
                  </ul>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {targets.map((target) => (
                  <div key={target} className="rounded-lg border border-slate-200 bg-white p-4">
                    <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Destination</p>
                    <p className="mt-1 text-sm font-medium text-slate-900">{target}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
