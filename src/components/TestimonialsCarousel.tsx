import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, ChevronLeft, ChevronRight, Play, Pause, Star } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  logo: string;
  logoClass: string;
  text: string;
  rating: number;
}

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [direction, setDirection] = useState<number>(0); // -1 for left, 1 for right
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const testimonials: Testimonial[] = [
    {
      id: "adron-homes",
      name: "Arc. Toyin Alao",
      role: "Director of Infrastructure & Planning",
      company: "Adron Homes & Properties",
      logo: "https://i0.wp.com/gmposts.com/wp-content/uploads/2016/07/adron.jpg?fit=225%2C225&ssl=1",
      logoClass: "h-9 w-9 rounded-lg object-contain",
      text: "CSL's dual deployment of CittaMatrix and CittaPlannerX transformed our housing planning logistics. We synchronized multi-site land rosters and leveled material allocation on our critical paths. Operational bottlenecks fell by 40% in our first quarter of implementation.",
      rating: 5
    },
    {
      id: "nrs-compliance",
      name: "Dr. Farouk Bello",
      role: "Accredited Access Point Systems Auditor",
      company: "NRS Tax Compliance Council",
      logo: "https://tse1.mm.bing.net/th/id/OIP.b7065cgfTM6OrK5-h6t_QwHaDg?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      logoClass: "h-7 w-16 object-contain",
      text: "CittaEFS has proven itself to be the most resilient fiscal middleware on the market. Its pre-clearance validation buffer catches rounding errors and incorrect TIN records at the source. This ensures flawless transaction clearing speeds and absolute non-repudiation.",
      rating: 5
    },
    {
      id: "coswals-structures",
      name: "Engr. Olanrewaju Ajayi",
      role: "Chief Operating Officer",
      company: "Coswals Structures Limited",
      logo: "https://coswal.com.ng/wp-content/uploads/2026/04/logo.svg",
      logoClass: "h-8 w-20 object-contain",
      text: "For a heavy logistics and construction company, managing cross-entity material ledgers was a major structural pain point. CSL's custom database triggers and Odoo tax connector integrated seamlessly into our architecture, enabling live pipeline tracking.",
      rating: 5
    },
    {
      id: "sety-io",
      name: "Olayemi Coker",
      role: "Principal Infrastructure Architect",
      company: "Sety.io",
      logo: "https://www.sety.io/assets/img/logo.svg",
      logoClass: "h-8 w-16 object-contain bg-slate-900 p-1 rounded",
      text: "Our emergency safety protocols rely on sub-millisecond response rates. CSL deployed CittaNexus to route webhooks across our service meshes with high-availability circuit breakers. The telemetry tracking and error-handling routines have been rock solid.",
      rating: 5
    },
    {
      id: "scarlet-snow",
      name: "Elizabeth Nwosu",
      role: "Head of Inventory & E-commerce Logistics",
      company: "Scarlet and Snow Retail Group",
      logo: "https://scarletandsnow.com/wp-content/uploads/2024/10/Sands-Main-BK.png",
      logoClass: "h-8 w-20 object-contain",
      text: "Running high-velocity retail sales meant we struggled to align automated point-of-sale invoices with regulatory rules. CSL configured the drag-and-drop Excel Bulk Uploader along with live VAT calculations, making our monthly accounting cycles stress-free.",
      rating: 5
    },
    {
      id: "west-metro",
      name: "Adewale Thompson",
      role: "Chief Infrastructure Officer",
      company: "West Metro Transit",
      logo: "https://westmetro.ng/assets/images/logo-dark.png",
      logoClass: "h-8 w-20 object-contain",
      text: "West Metro relies on CSL's CittaMatrix to synchronize smart ticket terminals with municipal transport routers. Having live telemetry feedback while maintaining 100% tax clearance compliance has dramatically enhanced our operational reliability.",
      rating: 5
    },
    {
      id: "redeemers-school",
      name: "Mrs. O. O. Adejuwon",
      role: "Administrator & Academic Coordinator",
      company: "Redeemers High School",
      logo: "https://redeemershighschool.com/Images/RHS%20Logo.png",
      logoClass: "h-8 w-8 object-contain rounded-full bg-white p-0.5",
      text: "Managing academic rosters, multi-campus staff schedules, and compliance audits manually was a major hurdle. With CSL's CittaPlannerX and structured database systems, our administrative efficiency surged, saving us hours of manual data synchronization weekly.",
      rating: 5
    }
  ];

  const clearTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const startTimer = () => {
    clearTimer();
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        handleNext();
      }, 7000); // 7 seconds per slide
    }
  };

  useEffect(() => {
    startTimer();
    return () => clearTimer();
  }, [currentIndex, isPlaying]);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const handleSelect = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  // Framer Motion Sliding Variants
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.98
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 350, damping: 35 },
        opacity: { duration: 0.25 },
        scale: { duration: 0.3 }
      }
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -100 : 100,
      opacity: 0,
      scale: 0.98,
      transition: {
        x: { type: "spring", stiffness: 350, damping: 35 },
        opacity: { duration: 0.2 },
        scale: { duration: 0.25 }
      }
    })
  };

  const current = testimonials[currentIndex];

  return (
    <section id="testimonials-carousel" className="py-20 sm:py-28 bg-slate-950 text-white relative overflow-hidden">
      {/* Decorative architectural background grids */}
      <div className="absolute inset-0 bg-[radial-gradient(#2582ff_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#2582ff]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 gap-4">
          <span className="inline-block font-mono text-xs uppercase tracking-widest text-[#2582ff] font-bold bg-[#2582ff]/10 px-3.5 py-1.5 rounded-full border border-[#2582ff]/20">
            Social Proof & Client Outcomes
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            Trusted by Leaders
          </h2>
          <p className="text-slate-400 text-xs sm:text-base leading-relaxed">
            Discover how corporate decision-makers deploy CSL software to simplify statutory taxation, optimize resource timelines, and power resilient operations.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative min-h-[380px] sm:min-h-[320px] bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-12 shadow-2xl flex flex-col justify-between overflow-hidden">
          
          <div className="absolute top-0 right-0 p-6 text-slate-800 pointer-events-none">
            <Quote className="w-24 h-24 stroke-[1.5] opacity-5 rotate-180" />
          </div>

          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={current.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="grid md:grid-cols-12 gap-8 items-center"
            >
              {/* Testimonial Quote & Info Block */}
              <div className="md:col-span-8 space-y-6 text-left">
                {/* Rating Stars */}
                <div className="flex items-center space-x-1">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-4.5 h-4.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Main Quote Text */}
                <p className="text-sm sm:text-base md:text-lg text-slate-200 font-medium leading-relaxed italic">
                  "{current.text}"
                </p>

                {/* Author Credentials */}
                <div className="space-y-1">
                  <h4 className="font-display font-extrabold text-[#2582ff] text-sm sm:text-base">
                    {current.name}
                  </h4>
                  <p className="text-xs text-slate-400 font-sans">
                    {current.role}
                  </p>
                </div>
              </div>

              {/* Client Branding Block */}
              <div className="md:col-span-4 flex flex-col items-center md:items-end justify-center h-full border-t md:border-t-0 md:border-l border-slate-800 pt-6 md:pt-0 md:pl-8 gap-4">
                <div className="p-3 bg-slate-900 border border-slate-800 rounded-2xl flex items-center justify-center shadow-lg w-32 h-16">
                  <img 
                    src={current.logo} 
                    alt={`${current.company} Logo`}
                    className={current.logoClass}
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="text-center md:text-right">
                  <p className="text-xs font-mono font-extrabold text-slate-400 uppercase tracking-wider">
                    Client Organization
                  </p>
                  <h5 className="font-display font-extrabold text-white text-xs mt-0.5">
                    {current.company}
                  </h5>
                  <span className="text-[10px] font-mono text-emerald-400 mt-1 block">
                    ✓ Verified Enterprise Client
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Interactive Controls Footer */}
          <div className="flex items-center justify-between border-t border-slate-800/80 pt-6 mt-8">
            {/* Slide Indicators */}
            <div className="flex items-center space-x-2">
              {testimonials.map((test, index) => (
                <button
                  key={test.id}
                  id={`testimonial-bullet-${test.id}`}
                  onClick={() => handleSelect(index)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    currentIndex === index ? 'w-6 bg-[#2582ff]' : 'w-2 bg-slate-700 hover:bg-slate-500'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Manual Controls & Pause Button */}
            <div className="flex items-center space-x-3">
              <button
                id="testimonial-control-pause"
                onClick={togglePlay}
                className="p-2.5 bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-xl text-slate-400 hover:text-white transition-colors cursor-pointer"
                title={isPlaying ? "Pause Slideshow" : "Start Slideshow"}
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </button>
              <div className="h-4 w-[1px] bg-slate-800" />
              <button
                id="testimonial-control-prev"
                onClick={handlePrev}
                className="p-2.5 bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-xl text-slate-400 hover:text-white transition-colors cursor-pointer"
                aria-label="Previous Testimonial"
                title="Previous Testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                id="testimonial-control-next"
                onClick={handleNext}
                className="p-2.5 bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-xl text-slate-400 hover:text-white transition-colors cursor-pointer"
                aria-label="Next Testimonial"
                title="Next Testimonial"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
