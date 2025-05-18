import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a 
            href="#" 
            className={`text-xl md:text-2xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-blue-900' : 'text-blue-800'
            }`}
          >
            siakbary
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {['Home', 'About', 'Social', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className={`transition-colors duration-300 hover:text-blue-600 ${
                      isScrolled ? 'text-gray-800' : 'text-gray-700'
                    }`}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Navigation Button */}
          <button 
            className="md:hidden text-gray-800"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md">
          <nav className="container mx-auto px-4 py-4">
            <ul className="space-y-4">
              {['Home', 'About', 'Social', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="block py-2 text-gray-800 hover:text-blue-600"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;