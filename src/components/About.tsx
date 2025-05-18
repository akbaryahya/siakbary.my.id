import React from 'react';
import { useInView } from '../hooks/useInView';

const About: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });
  
  const calculateAge = () => {
    const birthDate = new Date('1996-12-23');
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    
    return age;
  };

  return (
    <section 
      id="about" 
      ref={ref}
      className="py-16 md:py-24 bg-white dark:bg-gray-800"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className={`transition-all duration-1000 transform ${
          inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-blue-900 dark:text-blue-300">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              I'm Akbar Yahya, a passionate backend developer with expertise in multiple programming 
              languages including C#, PHP, JavaScript, TypeScript, Java, and I'm currently exploring 
              Rust and Go. My development journey has been focused on creating robust, efficient backend 
              solutions while collaborating with frontend specialists to deliver complete products.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              With a strong foundation in backend technologies, I specialize in building reliable 
              systems and APIs that power applications. My approach combines clean code practices with 
              practical problem-solving to create maintainable solutions for complex challenges.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Beyond coding, I enjoy watching anime, playing games, and exploring new technologies. 
              I also have comprehensive IT experience including system administration, OS installation, 
              Android ROM flashing, and network/server maintenance.
            </p>

            <div className="bg-blue-50 dark:bg-gray-700 p-6 rounded-lg mt-10">
              <h3 className="text-xl font-semibold mb-4 text-blue-800 dark:text-blue-300">Personal Information</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="font-medium w-32 text-blue-900 dark:text-blue-300">Name:</span>
                  <span className="text-gray-700 dark:text-gray-300">Akbar Yahya</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium w-32 text-blue-900 dark:text-blue-300">Location:</span>
                  <span className="text-gray-700 dark:text-gray-300">Makassar, Indonesia</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium w-32 text-blue-900 dark:text-blue-300">Born:</span>
                  <span className="text-gray-700 dark:text-gray-300">
                    December 23, 1996 (Age {calculateAge()})
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;