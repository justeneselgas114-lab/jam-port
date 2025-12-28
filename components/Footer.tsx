
import React from 'react';
import { CONTACT_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 border-t border-neutral-100 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        <div className="text-neutral-400 text-sm">
          &copy; {new Date().getFullYear()} Justene Selgas. All rights reserved.
        </div>
        
        <div className="flex space-x-8">
          <a href={CONTACT_INFO.github} className="text-neutral-400 hover:text-neutral-900 transition-colors text-sm font-medium">GitHub</a>
          <a href={CONTACT_INFO.linkedin} className="text-neutral-400 hover:text-neutral-900 transition-colors text-sm font-medium">LinkedIn</a>
          <a href={CONTACT_INFO.facebook} className="text-neutral-400 hover:text-neutral-900 transition-colors text-sm font-medium">Facebook</a>
        </div>
        
        <div className="text-neutral-400 text-sm italic">
          High Performance • Conversion Focused
        </div>
      </div>
    </footer>
  );
};

export default Footer;
