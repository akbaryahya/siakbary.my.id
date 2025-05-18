import React from 'react';
import socialLinks from '../data/socialLinks';
import { useInView } from '../hooks/useInView';

const SocialLinks: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section 
      id="social" 
      ref={ref}
      className="py-16 md:py-24 bg-blue-50"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className={`transition-all duration-1000 transform ${
          inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-blue-900">
            Connect With Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 max-w-5xl mx-auto">
            {socialLinks.map((social) => (
              <a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${social.color} text-white rounded-lg p-4 flex flex-col items-center justify-center text-center transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg`}
              >
                <social.icon className="w-8 h-8 mb-2" />
                <span className="text-sm font-medium">{social.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;