import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 xl:px-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">FF</span>
              </div>
              <span className="font-bold text-xl">FitForLife.ph</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Empowering Filipino workplaces through comprehensive wellness solutions.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="space-y-2 text-gray-300">
              <p>Email: <a href="mailto:javierpgomez@fitforlife.ph" className="underline hover:text-white">javierpgomez@fitforlife.ph</a></p>
              <p>
                <a href="https://tidycal.com/movewithjavier/health-workshops" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">
                  Book a 30-minute free consultation
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 FitForLife.ph. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 