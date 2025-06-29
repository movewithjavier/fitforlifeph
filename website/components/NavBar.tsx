import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

// MVP Navigation Bar – Logo only, centered
const NavBar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 xl:px-32">
        <div className="flex items-center justify-center h-16 md:h-20">
          {/* Centered Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <motion.div 
              className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-white font-bold text-sm">FF</span>
            </motion.div>
            <span className="font-bold text-xl text-gray-900">FitForLife.ph</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar; 