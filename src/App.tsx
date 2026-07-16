import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp } from 'lucide-react';
import { PageId } from './types';

// Component Imports
import Navbar from './components/Navbar';
import ScrollProgressBar from './components/ScrollProgressBar';
import SEOStructuredData from './components/SEOStructuredData';
import CSLHero from './components/CSLHero';
import CSLAbout from './components/CSLAbout';
import PartnerLogos from './components/PartnerLogos';
import TestimonialsCarousel from './components/TestimonialsCarousel';
import ChallengesSection from './components/ChallengesSection';
import ProductEcosystem from './components/ProductEcosystem';
import IndustriesSection from './components/IndustriesSection';
import WhyChooseCSL from './components/WhyChooseCSL';
import ApproachSection from './components/ApproachSection';
import VisionSection from './components/VisionSection';
import ContactForm from './components/ContactForm';
import FAQSection from './components/FAQSection';
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
        { id: 'about', pageId: 'about' },
        { id: 'challenges', pageId: 'challenges' },
        { id: 'products', pageId: 'products' },
        { id: 'industries', pageId: 'industries' },
        { id: 'why-choose-csl', pageId: 'why-choose-csl' },
        { id: 'approach', pageId: 'approach' },
        { id: 'vision', pageId: 'vision' },
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

      {/* Main Storytelling Layout with 9 Interconnected Sections */}
      <main className="flex-grow w-full overflow-x-hidden">
        
        {/* SECTION 1: CSL Corporate Hero */}
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

        {/* SECTION 2: Who We Are (About CSL) */}
        <div id="about">
          <CSLAbout isTopPage={false} isSummary={false} />
        </div>

        {/* Corporate Trust Badges & Partners */}
        <PartnerLogos />

        {/* Client Testimonials Carousel */}
        <TestimonialsCarousel />

        {/* SECTION 3: The Challenges We Solve */}
        <div id="challenges">
          <ChallengesSection />
        </div>

        {/* SECTION 4: Our Enterprise Solutions */}
        <div id="products">
          <ProductEcosystem setCurrentPage={setCurrentPage} />
        </div>

        {/* SECTION 5: Industries We Empower */}
        <div id="industries">
          <IndustriesSection />
        </div>

        {/* SECTION 6: Why Organisations Choose CSL */}
        <div id="why-choose-csl">
          <WhyChooseCSL />
        </div>

        {/* SECTION 7: Our Approach */}
        <div id="approach">
          <ApproachSection />
        </div>

        {/* SECTION 8: Vision for the Future */}
        <div id="vision">
          <VisionSection />
        </div>

        {/* SECTION 8.5: Frequently Asked Questions */}
        <FAQSection />

        {/* SECTION 9: Contact */}
        <div id="contact">
          <ContactForm />
        </div>

      </main>

      {/* Corporate Sitemap Footer */}
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
