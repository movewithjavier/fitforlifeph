import React from 'react';
import { motion } from 'framer-motion';
import { 
  PlayIcon, 
  DocumentTextIcon, 
  UserIcon, 
  ClockIcon,
  LightBulbIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

const WebinarBenefits: React.FC = () => {
  const benefits = [
    {
      icon: PlayIcon,
      title: 'Real Presentation Clips',
      description: 'See actual segments from our corporate wellness presentations',
      color: 'blue'
    },
    {
      icon: DocumentTextIcon,
      title: 'Interactive Worksheets',
      description: 'Fill out live worksheets that mirror our actual workshop exercises',
      color: 'green'
    },
    {
      icon: UserIcon,
      title: 'Hands-on Experience',
      description: 'Get a true feel for our interactive teaching approach',
      color: 'purple'
    },
    {
      icon: ClockIcon,
      title: 'Self-Paced Learning',
      description: 'Complete the experience at your own speed in just 20 minutes',
      color: 'yellow'
    },
    {
      icon: LightBulbIcon,
      title: 'Immediate Application',
      description: 'Apply concepts to your workplace through interactive exercises',
      color: 'indigo'
    },
    {
      icon: CheckCircleIcon,
      title: 'No Commitment',
      description: 'Experience our approach risk-free before booking a consultation',
      color: 'red'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: string } = {
      blue: 'bg-blue-100 text-blue-600',
      green: 'bg-green-100 text-green-600',
      red: 'bg-red-100 text-red-600',
      yellow: 'bg-yellow-100 text-yellow-600',
      purple: 'bg-purple-100 text-purple-600',
      indigo: 'bg-indigo-100 text-indigo-600'
    };
    return colorMap[color] || 'bg-gray-100 text-gray-600';
  };

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
            Why Experience This Sample?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get a genuine taste of our interactive approach before committing to a full consultation or workshop.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${getColorClasses(benefit.color)}`}>
                <benefit.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
          className="mt-16 bg-blue-600 text-white p-8 rounded-lg text-center"
        >
          <h3 className="text-2xl font-bold mb-4">
            Experience Our Approach Firsthand
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            This interactive sample gives you a complete preview of our methodology. 
            You'll see real presentation clips, participate in actual exercises, and walk away 
            with actionable insights for your workplace.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-200">20 Min</div>
              <div className="text-blue-100">Complete Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-200">100%</div>
              <div className="text-blue-100">Interactive</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-200">0 Cost</div>
              <div className="text-blue-100">Risk-Free Trial</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WebinarBenefits; 