import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <div className="flex flex-col justify-center">
      <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6">
        Crafting Stories That
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#F70670] to-[#8a2be2]"> Move Brands</span>
      </h1>
      <p className="text-lg md:text-xl text-gray-400 max-w-xl mb-10">
        From design to film, we transform ideas into visuals that speak, move, and inspire.
      </p>
    </div>
  );
};

export default HeroSection;