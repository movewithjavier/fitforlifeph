import React from 'react';
import { motion } from 'framer-motion';
import { PlayIcon, DocumentTextIcon, ClockIcon, UserIcon } from '@heroicons/react/24/outline';

const WebinarDetails: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What You'll Experience
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            This interactive sample combines real presentation clips with hands-on exercises to give you a complete taste of our approach.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-lg shadow-md text-center"
          >
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <PlayIcon className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Video Clips</h3>
            <p className="text-gray-600">Real presentation segments</p>
            <p className="text-sm text-gray-500">From actual corporate sessions</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-lg shadow-md text-center"
          >
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <ClockIcon className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Duration</h3>
            <p className="text-gray-600">15-20 Minutes</p>
            <p className="text-sm text-gray-500">Self-paced experience</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-lg shadow-md text-center"
          >
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <DocumentTextIcon className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Interactive</h3>
            <p className="text-gray-600">Live Worksheets</p>
            <p className="text-sm text-gray-500">Fill out as you go</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-lg shadow-md text-center"
          >
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <UserIcon className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Presenter</h3>
            <p className="text-gray-600">Sarah Johnson</p>
            <p className="text-sm text-gray-500">Wellness Expert</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 bg-white p-8 rounded-lg shadow-md"
        >
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
              <UserIcon className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">About Sarah Johnson</h3>
              <p className="text-gray-600">Corporate Wellness Specialist & Certified Health Coach</p>
            </div>
          </div>
          <p className="text-gray-600 leading-relaxed">
            Sarah has over 10 years of experience helping companies create healthier, more productive workplaces. 
            The clips you'll see are from real presentations she's delivered to Fortune 500 companies and startups alike. 
            Her interactive approach ensures participants not only learn but also apply concepts immediately through 
            hands-on exercises and worksheets.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WebinarDetails; 