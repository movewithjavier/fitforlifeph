import React from 'react';
import { motion } from 'framer-motion';
import { PlayIcon, DocumentTextIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

const WebinarAgenda: React.FC = () => {
  const agendaItems = [
    {
      time: '0:00 - 3:00',
      title: 'Introduction & Overview',
      description: 'Welcome and overview of what you\'ll experience in this interactive sample',
      type: 'video'
    },
    {
      time: '3:00 - 5:00',
      title: 'Interactive Worksheet #1',
      description: 'Assess your current workplace wellness situation',
      type: 'worksheet'
    },
    {
      time: '5:00 - 12:00',
      title: 'Key Wellness Strategies',
      description: 'Real presentation clip covering proven workplace wellness approaches',
      type: 'video'
    },
    {
      time: '12:00 - 15:00',
      title: 'Interactive Worksheet #2',
      description: 'Apply the strategies to your specific workplace context',
      type: 'worksheet'
    },
    {
      time: '15:00 - 18:00',
      title: 'Implementation Roadmap',
      description: 'Step-by-step guide from our actual corporate presentations',
      type: 'video'
    },
    {
      time: '18:00 - 20:00',
      title: 'Action Planning',
      description: 'Final interactive exercise to create your wellness action plan',
      type: 'worksheet'
    }
  ];

  const getIcon = (type: string) => {
    return type === 'video' ? PlayIcon : DocumentTextIcon;
  };

  const getColorClasses = (type: string) => {
    return type === 'video' 
      ? 'bg-blue-100 text-blue-600' 
      : 'bg-green-100 text-green-600';
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Interactive Experience Flow
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            This 20-minute sample combines real presentation clips with interactive exercises to give you hands-on experience.
          </p>
        </motion.div>

        <div className="space-y-6">
          {agendaItems.map((item, index) => {
            const IconComponent = getIcon(item.type);
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-200"
              >
                <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center ${getColorClasses(item.type)}`}>
                  <IconComponent className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-sm font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded">
                      {item.time}
                    </span>
                    <span className={`text-sm font-medium px-2 py-1 rounded ${
                      item.type === 'video' 
                        ? 'text-blue-600 bg-blue-100' 
                        : 'text-green-600 bg-green-100'
                    }`}>
                      {item.type === 'video' ? 'Video Clip' : 'Interactive'}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 bg-blue-50 p-8 rounded-lg"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
            What You'll Take Away
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center space-x-3">
              <CheckCircleIcon className="w-5 h-5 text-green-600 flex-shrink-0" />
              <span className="text-gray-700">Personalized wellness assessment</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircleIcon className="w-5 h-5 text-green-600 flex-shrink-0" />
              <span className="text-gray-700">Actionable implementation plan</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircleIcon className="w-5 h-5 text-green-600 flex-shrink-0" />
              <span className="text-gray-700">Real presentation insights</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircleIcon className="w-5 h-5 text-green-600 flex-shrink-0" />
              <span className="text-gray-700">Completed worksheets</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircleIcon className="w-5 h-5 text-green-600 flex-shrink-0" />
              <span className="text-gray-700">Understanding of our approach</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircleIcon className="w-5 h-5 text-green-600 flex-shrink-0" />
              <span className="text-gray-700">Clear next steps</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WebinarAgenda; 