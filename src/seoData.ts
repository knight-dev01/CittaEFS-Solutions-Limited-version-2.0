export type SeoPage = 'home' | 'cittaefs';

export const siteUrl = 'https://www.cittasl.com';
export const logoUrl = `${siteUrl}/logo.png`;

export const pageSeo = {
  home: {
    title: 'CittaSL | Enterprise Software, ERP & Fiscal Compliance Nigeria',
    description:
      'CittaSL builds CittaEFS fiscal compliance software, ERP integration, and enterprise software for companies in Nigeria.',
    url: `${siteUrl}/`,
    image: `${siteUrl}/og-image.png`,
    imageAlt: 'CittaSL enterprise software, ERP integration, and fiscal compliance middleware in Nigeria',
    keywords: [
      'enterprise software Nigeria',
      'enterprise software companies in Lagos',
      'ERP software Nigeria',
      'ERP software Lagos',
      'fiscal software',
      'tax compliance software Nigeria',
      'ERP integration Lagos',
      'NRS e-invoicing',
      'accounting software integration Nigeria',
      'hotel management software Nigeria',
      'project management software Nigeria',
      'API integration company Lagos',
      'RegTech Nigeria',
    ],
  },
  cittaefs: {
    title: 'CittaEFS | Fiscal Software & NRS E-Invoicing Compliance',
    description:
      'CittaEFS is fiscal compliance software that validates, signs, and submits invoices for NRS pre-clearance without replacing SAP, Oracle, Dynamics, or Odoo.',
    url: `${siteUrl}/cittaefs`,
    image: `${siteUrl}/og-cittaefs.png`,
    imageAlt: 'CittaEFS fiscal software and NRS e-invoicing compliance by CittaSL',
    keywords: [
      'CittaEFS',
      'fiscal software Nigeria',
      'fiscal compliance software',
      'tax compliance software Nigeria',
      'NRS e-invoicing',
      'NRS fiscalization',
      'tax pre-clearance middleware',
      'VAT compliance software Nigeria',
      'SAP fiscal connector',
      'Oracle NetSuite tax integration',
      'Odoo VAT connector',
      'Microsoft Dynamics fiscalization',
      'ERP compliance middleware',
      'invoice validation software',
    ],
  },
} as const;

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${siteUrl}/#organization`,
  name: 'CittaSL',
  alternateName: [
    'CSL',
    'Citta ERP Solutions Limited',
    'Citta ERP Solutions',
    'Citta ERP',
    'CittaSL Solutions',
    'CittaNuvola Group Enterprise Division',
  ],
  url: `${siteUrl}/`,
  logo: {
    '@type': 'ImageObject',
    '@id': `${siteUrl}/#logo`,
    url: logoUrl,
    caption: 'CittaSL logo',
    width: 512,
    height: 512,
  },
  image: {
    '@id': `${siteUrl}/#logo`,
  },
  description:
    'CittaSL builds CittaEFS fiscal compliance software, ERP integration, and enterprise software for companies in Nigeria and beyond.',
  areaServed: {
    '@type': 'Country',
    name: 'Nigeria',
  },
  knowsAbout: [
    'Enterprise software',
    'ERP software',
    'Fiscal compliance software',
    'Electronic invoicing',
    'Tax pre-clearance',
    'ERP integration',
    'SAP integration',
    'Oracle NetSuite integration',
    'Odoo integration',
    'Microsoft Dynamics integration',
    'Accounting software integration',
    'Hotel property management systems',
    'Project and resource scheduling',
    'API gateways',
    'Business process automation',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+234-813-424-8104',
    email: 'cittasl@cittanuvola.com',
    contactType: 'customer support',
    areaServed: 'NG',
    availableLanguage: ['en'],
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: '5, Sadiku Street, Agidingbi',
    addressLocality: 'Ikeja',
    addressRegion: 'Lagos State',
    postalCode: '100282',
    addressCountry: 'NG',
  },
  sameAs: ['https://www.cittanuvola.com'],
};

const webSiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${siteUrl}/#website`,
  name: 'CittaSL',
  alternateName: ['Citta ERP Solutions Limited', 'CSL Enterprise Software'],
  url: `${siteUrl}/`,
  inLanguage: 'en-NG',
  publisher: {
    '@id': `${siteUrl}/#organization`,
  },
};

const services = [
  {
    '@type': 'Service',
    '@id': `${siteUrl}/cittaefs#service`,
    name: 'CittaEFS fiscal compliance software',
    serviceType: 'Fiscal compliance and NRS e-invoicing',
    url: `${siteUrl}/cittaefs`,
    image: `${siteUrl}/og-cittaefs.png`,
    provider: {
      '@id': `${siteUrl}/#organization`,
    },
    areaServed: {
      '@type': 'Country',
      name: 'Nigeria',
    },
    description:
      'Fiscal compliance software that checks, signs, and submits invoices to the National Revenue Service without replacing SAP, Oracle, Microsoft Dynamics, or Odoo.',
  },
  {
    '@type': 'Service',
    '@id': `${siteUrl}/#service-cittamatrix`,
    name: 'CittaMatrix ERP software',
    serviceType: 'ERP software and accounting integration',
    url: `${siteUrl}/#cittamatrix`,
    image: logoUrl,
    provider: {
      '@id': `${siteUrl}/#organization`,
    },
    areaServed: {
      '@type': 'Country',
      name: 'Nigeria',
    },
    description:
      'ERP software for multi-entity groups: general ledger, multi-currency routing, bank reconciliation, inventory, and procurement.',
  },
  {
    '@type': 'Service',
    '@id': `${siteUrl}/#service-cittahospitalityx`,
    name: 'CittaHospitalityX hotel management software',
    serviceType: 'Hotel property management system',
    url: `${siteUrl}/#cittahospitalityx`,
    image: logoUrl,
    provider: {
      '@id': `${siteUrl}/#organization`,
    },
    areaServed: {
      '@type': 'Country',
      name: 'Nigeria',
    },
    description:
      'Hotel management software for reservations, housekeeping, folio billing, and front-desk operations.',
  },
  {
    '@type': 'Service',
    '@id': `${siteUrl}/#service-cittaplannerx`,
    name: 'CittaPlannerX project scheduling software',
    serviceType: 'Project and resource scheduling',
    url: `${siteUrl}/#cittaplannerx`,
    image: logoUrl,
    provider: {
      '@id': `${siteUrl}/#organization`,
    },
    areaServed: {
      '@type': 'Country',
      name: 'Nigeria',
    },
    description:
      'Project management software with critical path analysis, dependency tracking, and resource capacity leveling.',
  },
  {
    '@type': 'Service',
    '@id': `${siteUrl}/#service-cittanexus`,
    name: 'CittaNexus API integration software',
    serviceType: 'API integration and middleware',
    url: `${siteUrl}/#cittanexus`,
    image: logoUrl,
    provider: {
      '@id': `${siteUrl}/#organization`,
    },
    areaServed: {
      '@type': 'Country',
      name: 'Nigeria',
    },
    description:
      'API integration software for routing, payload signing, token management, and circuit breakers between systems.',
  },
];

const navigationSchema = {
  '@type': 'ItemList',
  '@id': `${siteUrl}/#sitelinks-navigation`,
  name: 'CittaSL navigation',
  itemListElement: [
    {
      '@type': 'SiteNavigationElement',
      position: 1,
      name: 'CittaEFS Fiscal Compliance Software',
      description:
        'Fiscal validation and NRS e-invoicing pre-clearance for SAP, Oracle, Microsoft Dynamics, and Odoo.',
      url: `${siteUrl}/cittaefs`,
    },
    {
      '@type': 'SiteNavigationElement',
      position: 2,
      name: 'CittaMatrix ERP Software',
      description: 'Multi-entity ledger, transaction routing, and procurement workflows.',
      url: `${siteUrl}/#cittamatrix`,
    },
    {
      '@type': 'SiteNavigationElement',
      position: 3,
      name: 'CittaHospitalityX Hotel PMS',
      description: 'Reservations, housekeeping, and folio billing for hotels and resorts.',
      url: `${siteUrl}/#cittahospitalityx`,
    },
    {
      '@type': 'SiteNavigationElement',
      position: 4,
      name: 'CittaPlannerX Project Scheduler',
      description: 'Project planning, critical path analysis, and resource leveling.',
      url: `${siteUrl}/#cittaplannerx`,
    },
    {
      '@type': 'SiteNavigationElement',
      position: 5,
      name: 'CittaNexus API Gateway',
      description: 'API routing, payload signing, token management, and circuit breakers.',
      url: `${siteUrl}/#cittanexus`,
    },
    {
      '@type': 'SiteNavigationElement',
      position: 6,
      name: 'Contact CittaSL',
      description: 'Request a demo, sandbox access, or a technical conversation.',
      url: `${siteUrl}/#contact`,
    },
  ],
};

export function buildStructuredData(page: SeoPage) {
  const isEfsPage = page === 'cittaefs';

  const breadcrumbSchema = {
    '@type': 'BreadcrumbList',
    '@id': `${siteUrl}/cittaefs#breadcrumb`,
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'CittaSL',
        item: `${siteUrl}/`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'CittaEFS',
        item: `${siteUrl}/cittaefs`,
      },
    ],
  };

  const webPageSchema = {
    '@type': 'WebPage',
    '@id': isEfsPage ? `${siteUrl}/cittaefs#webpage` : `${siteUrl}/#webpage`,
    url: pageSeo[page].url,
    name: pageSeo[page].title,
    description: pageSeo[page].description,
    keywords: pageSeo[page].keywords.join(', '),
    isPartOf: {
      '@id': `${siteUrl}/#website`,
    },
    about: isEfsPage
      ? { '@id': `${siteUrl}/cittaefs#service` }
      : { '@id': `${siteUrl}/#organization` },
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: pageSeo[page].image,
      width: 1200,
      height: 630,
    },
    ...(isEfsPage
      ? {
          breadcrumb: {
            '@id': `${siteUrl}/cittaefs#breadcrumb`,
          },
        }
      : {}),
    inLanguage: 'en-NG',
  };

  return {
    '@context': 'https://schema.org',
    '@graph': [
      organizationSchema,
      webSiteSchema,
      navigationSchema,
      ...services,
      ...(isEfsPage ? [breadcrumbSchema] : []),
      webPageSchema,
    ],
  };
}
