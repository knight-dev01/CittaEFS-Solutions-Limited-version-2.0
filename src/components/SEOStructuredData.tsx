import { useEffect } from 'react';
import { PageId } from '../types';

interface SEOStructuredDataProps {
  currentPage: PageId;
}

export default function SEOStructuredData({ currentPage }: SEOStructuredDataProps) {
  useEffect(() => {
    // 1. Define base variables
    const siteUrl = window.location.origin || 'https://cittaerp.com';
    const logoUrl = `${siteUrl}/logo.png`;

    // 2. Define Organization Schema
    const organizationSchema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      'name': 'Citta ERP Solutions Limited',
      'alternateName': 'CSL',
      'url': siteUrl,
      'logo': {
        '@type': 'ImageObject',
        '@id': `${siteUrl}/#logo`,
        'url': logoUrl,
        'caption': 'Citta ERP Solutions Limited Logo'
      },
      'image': {
        '@id': `${siteUrl}/#logo`
      },
      'description': 'CSL architects high-capacity enterprise software suites, secure middleware bridges, and advanced planning systems. We empower modern global organizations with compliant operational excellence.',
      'contactPoint': {
        '@type': 'ContactPoint',
        'telephone': '+234-1-234-5678',
        'contactType': 'customer service',
        'areaServed': 'NG',
        'availableLanguage': ['en']
      },
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': 'Lagos',
        'addressRegion': 'Lagos State',
        'addressCountry': 'NG'
      },
      'sameAs': [
        'https://twitter.com/cittaerp',
        'https://linkedin.com/company/cittaerp'
      ]
    };

    // 3. Define Product Schema (CittaEFS - Flagship compliance suite)
    const productSchema = {
      '@context': 'https://schema.org',
      '@type': 'Product',
      '@id': `${siteUrl}/cittaefs/#product`,
      'name': 'CittaEFS Compliance Gateway',
      'image': [
        `${siteUrl}/assets/cittaefs-dashboard.png`
      ],
      'description': 'An intelligent real-time compliance bridge and validation middleware that connects ERP systems (SAP, Oracle, Dynamics) to state tax and fiscal authorities for sub-240ms automated invoice pre-clearance.',
      'sku': 'CSL-CEFS-001',
      'mpn': 'CITTAEFS-V2',
      'brand': {
        '@type': 'Brand',
        'name': 'Citta ERP Solutions Limited (CSL)'
      },
      'offers': {
        '@type': 'AggregateOffer',
        'priceCurrency': 'USD',
        'lowPrice': '499',
        'highPrice': '4999',
        'offerCount': '3',
        'priceValidUntil': '2027-12-31',
        'availability': 'https://schema.org/InStock',
        'url': `${siteUrl}/#cittaefs`
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
