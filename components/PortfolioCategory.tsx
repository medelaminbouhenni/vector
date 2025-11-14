import React from 'react';
import type { PortfolioCategory as PortfolioCategoryType } from '../types';
import ProjectCard from './ProjectCard';

interface PortfolioCategoryProps {
  category: PortfolioCategoryType;
}

const PortfolioCategory: React.FC<PortfolioCategoryProps> = ({ category }) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-3xl font-bold text-white">{category.title}</h3>
        <button className="hidden sm:block bg-white/10 text-white font-medium py-2 px-5 rounded-lg hover:bg-white/20 transition-colors duration-300">
          View More
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {category.projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <div className="mt-8 text-center sm:hidden">
        <button className="w-full max-w-xs text-center text-white font-semibold py-3 px-6 rounded-lg bg-white/10 hover:bg-white/20 transition-colors duration-300">
          View More
        </button>
      </div>
    </div>
  );
};

export default PortfolioCategory;
