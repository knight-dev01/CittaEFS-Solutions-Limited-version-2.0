import { useEffect } from 'react';
import { PageId } from '../types';

interface SEOStructuredDataProps {
  currentPage: PageId;
}

export default function SEOStructuredData({ currentPage }: SEOStructuredDataProps) {
  useEffect(() => {
    // 1. Define base variables
    const siteUrl = 'https://www.cittasl.com';
    const logoUrl = 'https://www.cittasl.com/logo.png';

    // 2. Define Organization Schema
    const organizationSchema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      'name': 'CittaSL',
      'alternateName': [
        'CSL',
        'Citta ERP Solutions Limited',
        'Citta ERP Solutions',
        'Citta ERP',
        'CittaSL Solutions',
        'CittaNuvola Enterprise Division'
      ],
      'url': siteUrl,
      'logo': {
        '@type': 'ImageObject',
        '@id': `${siteUrl}/#logo`,
        'url': logoUrl,
        'caption': 'CittaSL Logo'
      },
      'image': {
        '@id': `${siteUrl}/#logo`
      },
      'description': 'CittaSL (CSL), also operating as Citta ERP Solutions Limited under CittaNuvola, architects high-capacity enterprise software suites, secure middleware bridges (CittaEFS), ERP connectors, and advanced planning systems.',
      'contactPoint': {
        '@type': 'ContactPoint',
        'telephone': '0813-424-8104',
        'email': 'cittasl@cittanuvola.com',
        'contactType': 'customer support',
        'areaServed': 'NG',
        'availableLanguage': ['en']
      },
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': '5, Sadiku Street, Agidingbi',
        'addressLocality': 'Ikeja',
        'addressRegion': 'Lagos State',
        'addressCountry': 'NG'
      },
      'sameAs': [
        'https://www.cittanuvola.com'
      ]
    };

    // 3. Define WebSite Schema with Sitelinks SearchAction
    const webSiteSchema = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      'name': 'CittaSL',
      'alternateName': [
        'Citta ERP Solutions Limited',
        'CSL Enterprise Software'
      ],
      'url': siteUrl,
      'potentialAction': {
        '@type': 'SearchAction',
        'target': {
          '@type': 'EntryPoint',
          'urlTemplate': `${siteUrl}/?search={search_term_string}`
        },
        'query-input': 'required name=search_term_string'
      }
    };

    // 4. Define SiteNavigationElement Sitelinks List
    const navigationSchema = {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      '@id': `${siteUrl}/#sitelinks-navigation`,
      'name': 'CittaSL Navigation Sitelinks',
      'itemListElement': [
        {
          '@type': 'SiteNavigationElement',
          'position': 1,
          'name': 'CittaEFS Compliance Gateway',
          'description': 'Intelligent electronic fiscal system and automated tax compliance gateway for SAP, Oracle, Odoo, and Microsoft Dynamics.',
          'url': `${siteUrl}/#products`
        },
        {
          '@type': 'SiteNavigationElement',
          'position': 2,
          'name': 'CittaMatrix Core ERP',
          'description': 'Multi-entity enterprise transaction router, double-entry general ledger, and ERP suite.',
          'url': 'https://cittamatrix.com/'
        },
        {
          '@type': 'SiteNavigationElement',
          'position': 3,
          'name': 'CittaHospitalityX PMS',
          'description': 'Hotel property management system, guest folio billing, and reservation engine.',
          'url': 'https://cittahospitalityx.com/'
        },
        {
          '@type': 'SiteNavigationElement',
          'position': 4,
          'name': 'CittaPlannerX Scheduler',
          'description': 'Enterprise project planning, milestone scheduler, and resource leveling.',
          'url': 'https://cittaplannerx.com/'
        },
        {
          '@type': 'SiteNavigationElement',
          'position': 5,
          'name': 'Enterprise Solutions & Integration',
          'description': 'ERP connectors for SAP S/4HANA, Oracle NetSuite, Odoo, and Microsoft Dynamics.',
          'url': `${siteUrl}/#services`
        },
        {
          '@type': 'SiteNavigationElement',
          'position': 6,
          'name': 'Contact & Request Staging',
          'description': 'Connect with CSL enterprise architects and request sandbox staging access in Lagos.',
          'url': `${siteUrl}/#contact`
        }
      ]
    };

    // 3. Define Product Schema (CittaEFS - Flagship compliance suite)
    const productSchema = {
      '@context': 'https://schema.org',
      '@type': 'Product',
      '@id': `${siteUrl}/#product-cittaefs`,
      'name': 'CittaEFS Compliance Gateway',
      'image': [
        logoUrl,
        `${siteUrl}/logo.png`
      ],
      'description': 'An intelligent real-time compliance bridge and validation middleware that connects ERP systems (SAP, Oracle, Dynamics, Odoo) to state tax and fiscal authorities for sub-240ms automated invoice pre-clearance.',
      'sku': 'CSL-CEFS-001',
      'mpn': 'CITTAEFS-V2',
      'brand': {
        '@type': 'Brand',
        'name': 'CittaSL (CSL)'
      },
      'offers': {
        '@type': 'AggregateOffer',
        'priceCurrency': 'USD',
        'lowPrice': '499',
        'highPrice': '4999',
        'offerCount': '3',
        'priceValidUntil': '2027-12-31',
        'availability': 'https://schema.org/InStock',
        'url': `${siteUrl}/`
      },
      'review': {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Adewale K.'
        },
        'datePublished': '2026-02-14',
        'reviewBody': 'Integrating CittaEFS saved our finance department dozens of hours of manual verification. It handles thousands of ledger syncs with sub-240ms latency.',
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5',
          'bestRating': '5'
        }
      },
      'aggregateRating': {
        '@type': 'AggregateRating',
        'ratingValue': '4.9',
        'reviewCount': '47'
      }
    };

    // 4. Define Dynamic Breadcrumb List Schema
    const breadcrumbList: any[] = [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Citta ERP Solutions Limited',
        'item': siteUrl
      }
    ];

    const isProductPage = ['cittaefs', 'cittamatrix', 'cittahospitalityx', 'cittaplannerx', 'cittanexus'].includes(currentPage);

    if (isProductPage) {
      // 3-tier hierarchy: Organization Home -> Products Directory -> Specific Product Page
      breadcrumbList.push({
        '@type': 'ListItem',
        'position': 2,
        'name': 'Products',
        'item': `${siteUrl}/#ecosystem-section`
      });

      let pageName = 'Product';
      switch (currentPage) {
        case 'cittaefs':
          pageName = 'CittaEFS Compliance Suite';
          break;
        case 'cittamatrix':
          pageName = 'CittaMatrix Core ERP';
          break;
        case 'cittahospitalityx':
          pageName = 'CittaHospitalityX Property Management';
          break;
        case 'cittaplannerx':
          pageName = 'CittaPlannerX Gantt Scheduler';
          break;
        case 'cittanexus':
          pageName = 'CittaNexus API Gateway';
          break;
      }

      breadcrumbList.push({
        '@type': 'ListItem',
        'position': 3,
        'name': pageName,
        'item': `${siteUrl}/#${currentPage}`
      });
    } else if (currentPage !== 'home') {
      // 2-tier hierarchy for non-product sub-sections: Organization Home -> Page
      let pageName = 'Page';

      switch (currentPage) {
        case 'solutions':
          pageName = 'Enterprise Solutions';
          break;
        case 'industries':
          pageName = 'Target Industries';
          break;
        case 'resources':
          pageName = 'Resource Center';
          break;
        case 'company':
          pageName = 'Corporate Directory';
          break;
        case 'contact':
          pageName = 'Contact & Support';
          break;
      }

      breadcrumbList.push({
        '@type': 'ListItem',
        'position': 2,
        'name': pageName,
        'item': `${siteUrl}/#${currentPage}`
      });
    }

    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': breadcrumbList
    };

    // 5. Build and inject JSON-LD Scripts
    const scriptId = 'csl-jsonld-structured-data';
    let scriptTag = document.getElementById(scriptId) as HTMLScriptElement;

    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = scriptId;
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }

    // Combine all structural data inside a graph format
    const graphSchema = {
      '@context': 'https://schema.org',
      '@graph': [
        organizationSchema,
        webSiteSchema,
        navigationSchema,
        productSchema,
        breadcrumbSchema
      ]
    };

    scriptTag.innerHTML = JSON.stringify(graphSchema, null, 2);

    // Clean up on component unmount
    return () => {
      const existingTag = document.getElementById(scriptId);
      if (existingTag) {
        existingTag.remove();
      }
    };
  }, [currentPage]);

  return null; // This is a utility helper, rendering no visible markup
}
