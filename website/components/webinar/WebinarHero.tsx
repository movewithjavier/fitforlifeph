import React from 'react';
import { motion } from 'framer-motion';
import { PlayIcon, DocumentTextIcon, UsersIcon } from '@heroicons/react/24/outline';

const WebinarHero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20 md:py-32">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="mb-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-500 bg-opacity-30 text-white">
              <PlayIcon className="w-4 h-4 mr-2" />
              Sample Webinar
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Experience Our
            <span className="block text-blue-200">Interactive Webinar</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Watch real clips from our corporate wellness presentations and participate in interactive exercises that demonstrate our approach to workplace wellness.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-3">
              <PlayIcon className="w-6 h-6 text-blue-200" />
              <span className="text-lg">Real Presentation Clips</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <DocumentTextIcon className="w-6 h-6 text-blue-200" />
              <span className="text-lg">Interactive Worksheets</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <UsersIcon className="w-6 h-6 text-blue-200" />
              <span className="text-lg">Hands-on Experience</span>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-600 font-bold py-4 px-8 rounded-lg text-lg shadow-lg hover:bg-blue-50 transition-colors duration-200"
          >
            Start Interactive Experience
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default WebinarHero; 