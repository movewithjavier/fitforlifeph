import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PlayIcon, DocumentTextIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

const WebinarCTA: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log('Interactive experience registration:', formData);
    alert('Thank you! You\'re all set to start the interactive experience. We\'ll send you the access link via email.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-16 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Experience Our Approach?
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Start the interactive sample now and see firsthand how we transform workplace wellness through engaging presentations and hands-on exercises.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Registration Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-lg"
          >
            <h3 className="text-2xl font-semibold mb-6">Start Interactive Experience</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-blue-100 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-blue-300 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent text-gray-900"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-blue-100 mb-2">
                  Work Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-blue-300 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent text-gray-900"
                  placeholder="Enter your work email"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-blue-100 mb-2">
                  Company Name *
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-blue-300 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent text-gray-900"
                  placeholder="Enter your company name"
                />
              </div>

              <div>
                <label htmlFor="role" className="block text-sm font-medium text-blue-100 mb-2">
                  Your Role *
                </label>
                <select
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-blue-300 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent text-gray-900"
                >
                  <option value="">Select your role</option>
                  <option value="hr-manager">HR Manager</option>
                  <option value="hr-director">HR Director</option>
                  <option value="ceo">CEO/Founder</option>
                  <option value="operations">Operations Manager</option>
                  <option value="wellness-coordinator">Wellness Coordinator</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-white text-blue-600 font-bold py-4 px-6 rounded-lg transition-colors duration-200 hover:bg-blue-50"
              >
                Start Interactive Experience
              </motion.button>
            </form>
          </motion.div>

          {/* What's Next */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-6">What Happens Next?</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-100">Immediate Access</h4>
                    <p className="text-blue-200 text-sm">You'll receive instant access to the interactive experience</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-100">Interactive Experience</h4>
                    <p className="text-blue-200 text-sm">Watch video clips and complete worksheets at your own pace</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-100">Actionable Insights</h4>
                    <p className="text-blue-200 text-sm">Walk away with completed worksheets and clear next steps</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-100">Book Your Consultation</h4>
                    <p className="text-blue-200 text-sm">Ready to implement? Schedule a personalized consultation call</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-4">What You'll Get</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-blue-200 text-sm">
                  <PlayIcon className="w-4 h-4" />
                  <span>3 real presentation video clips</span>
                </div>
                <div className="flex items-center space-x-2 text-blue-200 text-sm">
                  <DocumentTextIcon className="w-4 h-4" />
                  <span>3 interactive worksheets</span>
                </div>
                <div className="flex items-center space-x-2 text-blue-200 text-sm">
                  <CheckCircleIcon className="w-4 h-4" />
                  <span>Completed action plan for your workplace</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WebinarCTA; 