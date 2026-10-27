const partners = [
  {
    name: 'Adron Homes',
    desc: 'Real estate and housing',
    logo: 'https://i0.wp.com/gmposts.com/wp-content/uploads/2016/07/adron.jpg?fit=225%2C225&ssl=1',
    logoClass: 'h-9 w-auto max-h-full object-contain',
  },
  {
    name: 'NRS',
    desc: 'Revenue service',
    logo: 'https://tse1.mm.bing.net/th/id/OIP.b7065cgfTM6OrK5-h6t_QwHaDg?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    logoClass: 'h-8 w-auto max-h-full object-contain',
  },
  {
    name: 'Coswals Structures',
    desc: 'Civil engineering',
    logo: 'https://coswal.com.ng/wp-content/uploads/2026/04/logo.svg',
    logoClass: 'h-9 w-auto max-h-full object-contain',
  },
  {
    name: 'Scarlet and Snow',
    desc: 'E-commerce and inventory',
    logo: 'https://scarletandsnow.com/wp-content/uploads/2024/10/Sands-Main-BK.png',
    logoClass: 'h-9 w-auto max-h-full object-contain',
  },
  {
    name: 'Redeemers High School',
    desc: 'Education',
    logo: 'https://redeemershighschool.com/Images/RHS%20Logo.png',
    logoClass: 'h-10 w-auto max-h-full object-contain',
  },
];

export default function PartnerLogos() {
  return (
    <section className="border-b border-slate-200 bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-16">
          <div className="shrink-0">
            <p className="text-sm font-medium text-slate-500">Selected clients</p>
            <p className="mt-1 max-w-xs text-sm leading-relaxed text-slate-600">
              Companies and institutions running CSL software.
            </p>
          </div>

          <div className="grid flex-1 grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-3 lg:grid-cols-5">
            {partners.map((partner) => (
              <div key={partner.name} className="flex items-center gap-3">
                <div className="flex h-12 w-20 shrink-0 items-center justify-center rounded border border-slate-200 bg-white p-1.5">
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className={partner.logoClass}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>
                <div className="min-w-0">
                  <p className="truncate text-xs font-medium text-slate-900">{partner.name}</p>
                  <p className="truncate text-xs text-slate-500">{partner.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
