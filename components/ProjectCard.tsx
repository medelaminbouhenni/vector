import React from 'react';
import type { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group relative rounded-xl overflow-hidden shadow-lg cursor-pointer transform hover:-translate-y-2 transition-transform duration-300 ease-in-out">
      <img
        src={project.imageUrl}
        alt={project.title}
        className="w-full h-56 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full p-4">
        <h3 className="text-lg font-bold text-white truncate">{project.title}</h3>
        <p className="text-sm text-gray-300 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-full transition-all duration-300 ease-in-out overflow-hidden">
          {project.description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;