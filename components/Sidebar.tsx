import React from 'react';
import FacebookIcon from './icons/FacebookIcon';
import InstagramIcon from './icons/InstagramIcon';
import WhatsappIcon from './icons/WhatsappIcon';

const Sidebar: React.FC = () => {
  return (
    <aside className="lg:w-64 lg:pr-8 lg:py-24 lg:sticky lg:top-0 lg:h-screen flex flex-col justify-between py-12">
      {/* Top Part */}
      <div>
        <div className="mb-12">
          <a href="/" aria-label="Vector Agency Homepage" className="block hover:opacity-80 transition-opacity duration-300">
            <img src="/logo.png" alt="Vector Agency Logo" className="w-28 h-auto" />
          </a>
        </div>
        <div className="space-y-4 text-sm text-gray-400">
          <p>
            <a href="mailto:hello@Vector.agency" className="hover:text-white transition-colors duration-300">
              hello@Vector.agency
            </a>
          </p>
          <p>
            <a href="tel:+213123456789" className="hover:text-white transition-colors duration-300">
              (+213)123456789
            </a>
          </p>
          <p>Based in Tlemcen, DZ</p>
        </div>
      </div>

      {/* Bottom Part - Desktop Only */}
      <div className="hidden lg:block border border-blue-500/20 bg-black/20 rounded-2xl p-6 text-center shadow-lg">
        <button className="w-full text-center text-white font-semibold py-3 px-4 rounded-lg bg-gradient-to-r from-[#F70670] to-[#8a2be2] hover:opacity-90 shadow-[0_0_20px_rgba(247,6,112,0.4)] transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[0_0_25px_rgba(247,6,112,0.6)]">
          Work With Us Now
        </button>
        <div className="flex items-center justify-center space-x-4 mt-6">
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
            <FacebookIcon className="w-5 h-5" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
            <InstagramIcon className="w-5 h-5" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
            <WhatsappIcon className="w-5 h-5" />
          </a>
        </div>
        <p className="text-xs text-gray-500 mt-6">© 2024, All Rights Reserved</p>
      </div>
    </aside>
  );
};

export default Sidebar;