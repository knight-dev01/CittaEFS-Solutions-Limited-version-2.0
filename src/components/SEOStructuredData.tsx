import { useEffect } from 'react';
import { PageId } from '../types';
import { pageSeo, SeoPage } from '../seoData';

interface SEOStructuredDataProps {
  currentPage: PageId;
}

function setMeta(attribute: 'name' | 'property' | 'itemprop', key: string, content: string) {
  let element = document.head.querySelector(
    `meta[${attribute}="${key}"]`,
  ) as HTMLMetaElement | null;

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute('content', content);
}

function setLink(rel: string, href: string) {
  let element = document.head.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;

  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', rel);
    document.head.appendChild(element);
  }

  element.setAttribute('href', href);
}

export default function SEOStructuredData({ currentPage }: SEOStructuredDataProps) {
  useEffect(() => {
    const pageKey: SeoPage = currentPage === 'cittaefs' ? 'cittaefs' : 'home';
    const page = pageSeo[pageKey];

    document.title = page.title;

    setMeta('name', 'description', page.description);
    setMeta('name', 'summary', page.description);
    setMeta('property', 'og:title', page.title);
    setMeta('property', 'og:description', page.description);
    setMeta('property', 'og:url', page.url);
    setMeta('property', 'og:type', 'website');
    setMeta('property', 'og:image', page.image);
    setMeta('property', 'og:image:secure_url', page.image);
    setMeta('property', 'og:image:type', 'image/png');
    setMeta('property', 'og:image:width', '1200');
    setMeta('property', 'og:image:height', '630');
    setMeta('property', 'og:image:alt', page.imageAlt);
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', page.title);
    setMeta('name', 'twitter:description', page.description);
    setMeta('name', 'twitter:image', page.image);
    setMeta('name', 'twitter:image:alt', page.imageAlt);
    setMeta('itemprop', 'name', page.title);
    setMeta('itemprop', 'description', page.description);
    setMeta('itemprop', 'image', page.image);

    setLink('canonical', page.url);
    setLink('image_src', page.image);
  }, [currentPage]);

  return null;
}
