import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import srcLogo from './logo.png';
import { PageId } from './types';
import { currentPath, goToSection } from './navigation';

// Component Imports
import Navbar from './components/Navbar';
import SEOStructuredData from './components/SEOStructuredData';
import CSLHero from './components/CSLHero';
import WhyWeExist from './components/WhyWeExist';
import CSLAbout from './components/CSLAbout';
import ChallengesSection from './components/ChallengesSection';
import ProductEcosystem from './components/ProductEcosystem';
import ProfessionalServices from './components/ProfessionalServices';
import IndustriesSection from './components/IndustriesSection';
import WhyChooseCSL from './components/WhyChooseCSL';
import PartnerLogos from './components/PartnerLogos';
import TestimonialsCarousel from './components/TestimonialsCarousel';
import ApproachSection from './components/ApproachSection';
import CallToAction from './components/CallToAction';
import FAQSection from './components/FAQSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import CittaEFSPage from './components/CittaEFSPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [path, setPath] = useState(currentPath);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Ensure tab favicon actively displays the logo from the src directory
  useEffect(() => {
    try {
      const updateFavicon = () => {
        const iconRels = ['icon', 'shortcut icon', 'apple-touch-icon'];
        iconRels.forEach(rel => {
          let link = document.querySelector(`link[rel='${rel}']`) as HTMLLinkElement;
          if (!link) {
            link = document.createElement('link');
            link.rel = rel;
            document.head.appendChild(link);
          }
          link.type = 'image/png';
          link.href = srcLogo;
        });
      };
      updateFavicon();
    } catch {
      // safe fallback
    }
  }, []);

  // Keep the rendered page in sync with the URL
  useEffect(() => {
    const syncRoute = () => {
      const nextPath = currentPath();
      setPath(nextPath);

      if (nextPath === '/') {
        const hash = window.location.hash.replace('#', '');
        if (hash) {
          window.setTimeout(() => {
            document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
          }, 80);
        }
      } else {
        window.scrollTo({ top: 0 });
      }
    };

    window.addEventListener('popstate', syncRoute);
    window.addEventListener('app:navigate', syncRoute);
    return () => {
      window.removeEventListener('popstate', syncRoute);
      window.removeEventListener('app:navigate', syncRoute);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll spy to highlight the active section in the navbar
  useEffect(() => {
    const handleScrollSpy = () => {
      const sections: { id: string; pageId: PageId }[] = [
        { id: 'home', pageId: 'home' },
        { id: 'why-we-exist', pageId: 'why-we-exist' },
        { id: 'challenges', pageId: 'challenges' },
        { id: 'products', pageId: 'products' },
        { id: 'services', pageId: 'services' },
        { id: 'contact', pageId: 'contact' },
      ];

      let currentActive: PageId = 'home';
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el && el.getBoundingClientRect().top <= 120) {
          currentActive = section.pageId;
        }
      }
      setCurrentPage(currentActive);
    };

    window.addEventListener('scroll', handleScrollSpy, { passive: true });
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRequestDemo = () => {
    goToSection('contact');
  };

  const isEfsPage = path === '/cittaefs';
  const activePage: PageId = isEfsPage ? 'cittaefs' : currentPage;

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans selection:bg-[#2582ff] selection:text-white overflow-x-hidden max-w-full">

      <SEOStructuredData currentPage={activePage} />

      <Navbar
        currentPage={activePage}
        setCurrentPage={setCurrentPage}
        onRequestDemo={handleRequestDemo}
      />

      {isEfsPage ? (
        <CittaEFSPage />
      ) : (
        <main className="flex-grow w-full overflow-x-hidden pt-20">

          <div id="home">
            <CSLHero
              onExploreEcosystem={() => goToSection('products')}
              onExploreEFS={() => goToSection('products')}
              onRequestDemo={handleRequestDemo}
            />
          </div>

          <div id="why-we-exist">
            <WhyWeExist />
          </div>

          <div id="about">
            <CSLAbout isTopPage={false} isSummary={false} />
          </div>

          <div id="challenges">
            <ChallengesSection />
          </div>

          <div id="products">
            <div id="solutions" />
            <ProductEcosystem setCurrentPage={setCurrentPage} />
          </div>

          <div id="services">
            <ProfessionalServices />
          </div>

          <div id="industries">
            <IndustriesSection />
          </div>

          <div id="why-choose-csl">
            <WhyChooseCSL />
          </div>

          <div id="clients">
            <PartnerLogos />
            <TestimonialsCarousel />
          </div>

          <div id="approach">
            <ApproachSection />
          </div>

          <div id="cta">
            <CallToAction />
          </div>

          <FAQSection />

          <div id="contact">
            <ContactForm />
          </div>

        </main>
      )}

      <Footer setCurrentPage={setCurrentPage} />

      {showScrollTop && (
        <button
          id="back-to-top-button"
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-white shadow-lg transition-colors hover:bg-slate-700"
          aria-label="Back to top"
          title="Back to top"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}

    </div>
  );
}
