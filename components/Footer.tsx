import React from 'react';
import FacebookIcon from './icons/FacebookIcon';
import InstagramIcon from './icons/InstagramIcon';
import WhatsappIcon from './icons/WhatsappIcon';

const Footer: React.FC = () => {
  return (
    <footer className="pt-16 pb-12 lg:hidden">
      <div className="border-t border-white/10 pt-12 flex flex-col items-center">
        <button className="w-full max-w-xs text-center text-white font-semibold py-3 px-6 rounded-lg bg-gradient-to-r from-[#3A0B3D] to-[#F70670] hover:opacity-90 shadow-[0_0_20px_rgba(247,6,112,0.4)] transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[0_0_25px_rgba(247,6,112,0.6)]">
          Work With Us Now
        </button>
        <div className="flex items-center justify-center space-x-6 mt-8">
          <a href="#" className="text-gray-500 hover:text-white transition-colors duration-300">
            <FacebookIcon />
          </a>
          <a href="#" className="text-gray-500 hover:text-white transition-colors duration-300">
            <InstagramIcon />
          </a>
          <a href="#" className="text-gray-500 hover:text-white transition-colors duration-300">
            <WhatsappIcon />
          </a>
        </div>
        <p className="text-center text-xs text-gray-600 mt-8">© 2024, All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;