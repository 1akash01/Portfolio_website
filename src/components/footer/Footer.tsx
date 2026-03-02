import { Github, Linkedin, Twitter } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-black/40 backdrop-blur-sm transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* FIXED: text-slate-500 dark:text-gray-500 */}
        <div className="text-slate-500 dark:text-gray-500 text-sm font-medium italic">
          © {new Date().getFullYear()} Akash Tiwari. All rights reserved.
        </div>
        <div className="flex gap-6">
          <a href="#" className="text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"><Github size={20} /></a>
          <a href="#" className="text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"><Linkedin size={20} /></a>
          <a href="#" className="text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"><Twitter size={20} /></a>
        </div>
      </div>
    </footer>
  );
};
