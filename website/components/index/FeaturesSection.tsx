import React from 'react';
import { motion } from 'framer-motion';
import { 
  MapPinIcon, 
  CheckBadgeIcon, 
  UserIcon, 
  CogIcon 
} from '@heroicons/react/24/outline';

const features = [
  {
    icon: MapPinIcon,
    title: 'Local Expertise',
    description: 'Deep understanding of Filipino workplace culture—our workshops and webinars are designed for your team’s real needs.',
    color: 'text-blue-600'
  },
  {
    icon: CheckBadgeIcon,
    title: 'Proven Results',
    description: 'Measurable improvements in employee wellness, engagement, and productivity for our clients.',
    color: 'text-green-600'
  },
  {
    icon: UserIcon,
    title: 'Expert Trainers',
    description: 'Sessions led by certified professionals who make learning practical, inspiring, and fun.',
    color: 'text-purple-600'
  },
  {
    icon: CogIcon,
    title: 'Flexible Solutions',
    description: 'Choose from webinars or onsite workshops—customized to your goals, schedule, and budget.',
    color: 'text-orange-600'
  }
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 xl:px-32 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose FitForLife.ph?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We help Filipino organizations create healthier, happier, and more productive teams with educational workshops and webinars that truly fit your culture.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className={`w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center mx-auto mb-6`}>
                <feature.icon className={`w-8 h-8 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection; 