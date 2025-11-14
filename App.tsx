import React from 'react';
import Sidebar from './components/Sidebar';
import HeroSection from './components/HeroSection';
import InfoPanel from './components/InfoPanel';
import PortfolioSection from './components/PortfolioSection';
import AnimatedBackground from './components/AnimatedBackground';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#3A0B3D] via-[#1a051e] to-black overflow-x-hidden">
      <AnimatedBackground />
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex">
          <Sidebar />
          <main className="lg:flex-1 py-12 lg:py-24 lg:pl-8">
            <HeroSection />
            <InfoPanel />
            <PortfolioSection />
            <Footer />
          </main>
        </div>
      </div>
    </div>
  );
};

export default App;