import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp } from 'lucide-react';
import { PageId } from './types';

// Component Imports
import Navbar from './components/Navbar';
import ScrollProgressBar from './components/ScrollProgressBar';
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

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll spy to highlight active menu section in the navbar
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
      // Find the last section that has scrolled past the top offset
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            currentActive = section.pageId;
          }
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
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans selection:bg-[#ff8e1a] selection:text-white overflow-x-hidden max-w-full">
      
      {/* Dynamic Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* SEO JSON-LD Structured Data Injection */}
      <SEOStructuredData currentPage={currentPage} />

      {/* Premium Top Navigation Header */}
      <Navbar 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
        onRequestDemo={handleRequestDemo} 
      />

      {/* Main Storytelling Layout with 13 Interconnected Sections */}
      <main className="flex-grow w-full overflow-x-hidden pt-20">
        
        {/* 1. Hero Section */}
        <div id="home">
          <CSLHero 
            onExploreEcosystem={() => { 
              const el = document.getElementById('products'); 
              if (el) el.scrollIntoView({ behavior: 'smooth' }); 
            }} 
            onExploreEFS={() => { 
              const el = document.getElementById('products'); 
              if (el) el.scrollIntoView({ behavior: 'smooth' }); 
            }}
            onRequestDemo={handleRequestDemo}
          />
        </div>

        {/* 2. Why We Exist Section */}
        <div id="why-we-exist">
          <WhyWeExist />
        </div>

        {/* 3. Who We Are (About CSL) */}
        <div id="about">
          <CSLAbout isTopPage={false} isSummary={false} />
        </div>

        {/* 4. Challenges We Solve */}
        <div id="challenges">
          <ChallengesSection />
        </div>

        {/* 5. Enterprise Software Portfolio */}
        <div id="products">
          <ProductEcosystem setCurrentPage={setCurrentPage} />
        </div>

        {/* 6. Professional Services */}
        <div id="services">
          <ProfessionalServices />
        </div>

        {/* 7. Industries We Serve */}
        <div id="industries">
          <IndustriesSection />
        </div>

        {/* 8. Why Organisations Choose CSL */}
        <div id="why-choose-csl">
          <WhyChooseCSL />
        </div>

        {/* 9. Our Clients (Logos & Testimonials) */}
        <div id="clients">
          <PartnerLogos />
          <TestimonialsCarousel />
        </div>

        {/* 10. Our Approach */}
        <div id="approach">
          <ApproachSection />
        </div>

        {/* 11. High-Impact Call to Action */}
        <div id="cta">
          <CallToAction />
        </div>

        {/* 11.5 Frequently Asked Questions */}
        <FAQSection />

        {/* 12. Contact Form */}
        <div id="contact">
          <ContactForm />
        </div>

      </main>

      {/* 13. Corporate Sitemap Footer */}
      <Footer setCurrentPage={setCurrentPage} />

      {/* Back to Top Floating Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            id="back-to-top-button"
            onClick={scrollToTop}
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-6 right-6 z-50 p-3.5 bg-slate-950 hover:bg-[#2582ff] text-white rounded-full shadow-2xl border border-white/10 cursor-pointer flex items-center justify-center transition-colors"
            aria-label="Back to top"
            title="Back to Top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  );
}
