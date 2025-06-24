import React, { useRef, useEffect, useState } from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import Link from 'next/link';

// FitForLife.ph Hero Section
const HERO_EYEBROW = 'Transform Your Workplace Wellness';
const HERO_TITLE = (
  <>
    Empower your team with expert-led wellness programs designed specifically for <span className="text-primary italic">Filipino workplaces.</span>
  </>
);
const HERO_CTA_LABEL = 'Schedule a Consultation';
const HERO_CTA_ARIA = 'Book a consultation call with FitForLife.ph';
const HERO_IMG_SRC = '/assets/workplace-wellness.svg';
const HERO_IMG_ALT = 'Happy and healthy employees in a modern workplace';

const HeroSection: React.FC = () => {
  const { scrollY } = useViewportScroll();
  const scale = useTransform(scrollY, [0, 300], [1, 1.08]);
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => { if (ref.current) observer.unobserve(ref.current); };
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-green-50 py-16 md:py-24 px-4 sm:px-6 xl:px-32 overflow-hidden">
      {/* Background wave effect */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-white" style={{
        clipPath: 'polygon(0 100%, 100% 100%, 100% 0)'
      }}></div>
      
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center md:items-start justify-between gap-y-10 md:gap-x-16">
        {/* Left column: Content */}
        <motion.div
          ref={ref}
          className="max-w-[600px] w-full flex flex-col items-center md:items-start text-center md:text-left"
          initial={{ opacity: 0, y: 40 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <p className="text-lg md:text-xl font-semibold text-blue-600 mb-4 md:mb-4 mt-2 md:mt-0">
            {HERO_EYEBROW}
          </p>
          
          {/* Mobile image: only visible on mobile */}
          <motion.div
            className="w-full max-w-xs sm:max-w-sm flex-shrink-0 flex justify-center items-start mx-auto mb-6 md:mb-0 block md:hidden"
            initial={{ opacity: 0, y: 40 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
          >
            <motion.img
              src={HERO_IMG_SRC}
              alt={HERO_IMG_ALT}
              className="rounded-xl shadow-2xl w-full h-auto object-cover bg-white"
              style={{ scale }}
            />
          </motion.div>
          
          <h1 className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 text-gray-900">
            {HERO_TITLE}
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
            Corporate wellness solutions through webinars, workshops, and training programs designed to help modern Filipino employees improve their health and achieve broader life goals.
          </p>
          
          <Link
            href="/contact"
            role="button"
            aria-label={HERO_CTA_ARIA}
            className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg md:text-xl font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 transition shadow-lg"
          >
            {HERO_CTA_LABEL}
          </Link>
        </motion.div>
        
        {/* Right column: Image (desktop/tablet only) */}
        <motion.div
          className="w-full max-w-xs sm:max-w-sm md:w-[380px] md:max-w-none flex-shrink-0 flex justify-center md:justify-end items-start mx-auto md:mx-0 mb-6 md:mb-0 hidden md:flex"
          initial={{ opacity: 0, y: 40 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
        >
          <motion.img
            src={HERO_IMG_SRC}
            alt={HERO_IMG_ALT}
            className="rounded-xl shadow-2xl w-full h-auto object-cover bg-white"
            style={{ scale }}
          />
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection; 