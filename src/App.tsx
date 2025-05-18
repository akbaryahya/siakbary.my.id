import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import SocialLinks from './components/SocialLinks';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Set dark mode by default
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      <Header />
      <main>
        <Hero />
        <About />
        <SocialLinks />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;