import React, { useEffect, useState } from 'react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      id="home"
      className="relative pt-24 pb-16 md:pt-32 md:pb-24 flex items-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-900"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className={`md:w-1/2 mb-10 md:mb-0 transform transition-all duration-1000 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
          }`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-blue-900 dark:text-blue-300">
              Akbar Yahya
            </h1>
            <p className="text-xl md:text-2xl text-blue-700 dark:text-blue-400 mb-6">
              Freelance Developer
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-8 max-w-lg">
              Based in Makassar, Indonesia. Passionate about backend development, 
              problem-solving, and creating efficient solutions.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#contact" 
                className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-lg"
              >
                Contact Me
              </a>
              <a 
                href="#projects" 
                className="bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 text-blue-800 dark:text-blue-300 border border-blue-800 dark:border-blue-300 px-6 py-3 rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-lg"
              >
                View Projects
              </a>
            </div>
          </div>
          <div className={`md:w-1/2 flex justify-center transform transition-all duration-1000 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
          }`}>
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-xl">
              <img 
                src="https://scontent-cgk1-2.xx.fbcdn.net/v/t39.30808-6/468237200_3626703630809862_8863347533282553392_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeE7qmGZY-hPzlrVJmzop4gArijoQWSXlCiuKOhBZJeUKNqjShfMqGVq8jiCCJ3Y6KSxJREBQYWMeCVpvDVd94JH&_nc_ohc=0V-hZUSRMmEQ7kNvwEAKf31&_nc_oc=AdkNdPix46cRfogPNp_V4SePlvpBul4SE9kxMDQ0X3oEsJ21JH0QcHAYN4iDe0wyuWYLvmeM_vOYM5q6AwLtsP5J&_nc_zt=23&_nc_ht=scontent-cgk1-2.xx&_nc_gid=ulJQ35sDZnr2AlDjCJ_dww&oh=00_AfKZc-h5VvO9vshED6_EwV9obWkpYnMixMvcmhUe6-Wmtw&oe=682F2301"
                alt="Akbar Yahya" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll to About section">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-8 w-8 text-blue-800 dark:text-blue-300"
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;