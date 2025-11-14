import React from 'react';
import { portfolioData } from '../data/portfolioData';
import PortfolioCategory from './PortfolioCategory';

const PortfolioSection: React.FC = () => {
  return (
    <section className="pt-24 pb-12">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold text-white">
          Our Previous Work
        </h2>
      </div>
      <div className="space-y-20">
        {portfolioData.map((category, index) => (
          <PortfolioCategory key={index} category={category} />
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;