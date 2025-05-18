import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const Contact: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section 
      id="contact" 
      ref={ref}
      className="py-16 md:py-24 bg-blue-50 dark:bg-gray-800"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className={`transition-all duration-1000 transform ${
          inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-blue-900 dark:text-blue-300">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>
          
          <div className="max-w-lg mx-auto">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-blue-900 dark:text-blue-300">Email</h4>
                  <a 
                    href="mailto:me@siakbary.my.id" 
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    me@siakbary.my.id
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Phone className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-blue-900 dark:text-blue-300">Phone</h4>
                  <p className="text-gray-700 dark:text-gray-300">+62 887 4444 4510</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10 p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md">
              <h4 className="text-lg font-semibold mb-3 text-blue-800 dark:text-blue-300">Availability</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                I'm currently available for freelance work and collaboration opportunities.
                Feel free to reach out if you have a project in mind.
              </p>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                <span className="text-green-600 dark:text-green-400 font-medium">Available for new projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;