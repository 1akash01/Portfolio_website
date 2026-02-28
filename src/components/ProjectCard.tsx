import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Project } from '../types';

export const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-md"
    >
      <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-400 text-sm mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map(tag => (
            <span key={tag} className="text-xs bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
        <a href={project.link} className="flex items-center text-indigo-400 hover:text-indigo-300 transition-colors">
          View Project <ExternalLink size={16} className="ml-2" />
        </a>
      </div>
    </motion.div>
  );
};
