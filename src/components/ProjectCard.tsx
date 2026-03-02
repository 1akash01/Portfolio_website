import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Project } from '../types';

export const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      /* FIXED: bg-white dark:bg-white/5 and border-slate-200 dark:border-white/10 */
      className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl overflow-hidden backdrop-blur-md shadow-lg dark:shadow-none transition-all"
    >
      <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
      <div className="p-6">
        {/* FIXED: text-slate-900 dark:text-white */}
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{project.title}</h3>
        {/* FIXED: text-slate-600 dark:text-gray-400 */}
        <p className="text-slate-600 dark:text-gray-400 text-sm mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map(tag => (
            <span key={tag} className="text-xs bg-indigo-500/10 text-indigo-600 dark:text-indigo-300 px-2 py-1 rounded font-medium">
              {tag}
            </span>
          ))}
        </div>
        <a href={project.link} className="flex items-center text-indigo-600 dark:text-indigo-400 hover:underline transition-colors font-bold text-sm">
          View Project <ExternalLink size={14} className="ml-2" />
        </a>
      </div>
    </motion.div>
  );
};
