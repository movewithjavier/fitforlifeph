import React from 'react';
import { motion } from 'framer-motion';
import { 
  PresentationChartLineIcon, 
  UserGroupIcon
} from '@heroicons/react/24/outline';

const services = [
  {
    icon: PresentationChartLineIcon,
    title: 'Online Webinars',
    description: 'One-time, easy-to-join virtual sessions on health, wellness, and work-life balance for your team.',
    color: 'text-blue-600'
  },
  {
    icon: UserGroupIcon,
    title: 'On-site Workshops',
    description: '1 hour, half-day, or full-day in-person sessions to learn about health in a fun, interactive way.',
    color: 'text-green-600'
  }
];

const ServicesSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 xl:px-32 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive wellness solutions tailored specifically for Filipino workplaces
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className={`w-16 h-16 rounded-lg bg-gray-50 flex items-center justify-center mb-6`}>
                <service.icon className={`w-8 h-8 ${service.color}`} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection; 