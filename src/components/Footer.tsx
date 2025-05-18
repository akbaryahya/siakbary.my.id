import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 dark:bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <p className="text-center text-blue-200 dark:text-blue-300 text-sm">
          &copy; {new Date().getFullYear()} siakbary.my.id. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;