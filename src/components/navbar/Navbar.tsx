import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code2, User, Cpu, Mail, ExternalLink, Sun, Moon } from 'lucide-react';

export const Navbar = () => {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : true;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const links = [
    { name: 'About', href: '#about', icon: <User size={16} /> },
    { name: 'Skills', href: '#skills', icon: <Cpu size={16} /> },
    { name: 'Projects', href: '#projects', icon: <Code2 size={16} /> },
    { name: 'Contact', href: '#contact', icon: <Mail size={16} /> },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-50 px-6 py-3 flex justify-between items-center backdrop-blur-md bg-white/90 dark:bg-black/60 border border-slate-200 dark:border-white/10 rounded-2xl shadow-xl transition-all duration-500"
    >
      <div className="flex items-center gap-3 group cursor-pointer">
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl blur opacity-20 group-hover:opacity-60 transition duration-500"></div>
          <img 
            src="./akash.png" 
            alt="Logo" 
            className="relative w-10 h-10 rounded-xl object-cover border border-slate-200 dark:border-white/20 shadow-sm"
          />
        </div>
        
        <div className="flex flex-col">
          <span className="font-mono text-base font-bold tracking-tighter text-slate-900 dark:text-white group-hover:text-indigo-600 transition-colors">
            AKASH_TIWARI
          </span>
          <span className="text-[9px] text-slate-500 dark:text-slate-400 font-mono tracking-[0.2em] uppercase leading-none">
            Software Engineer
          </span>
        </div>
      </div>

      <div className="hidden md:flex items-center bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5 rounded-full px-2 py-1 gap-1">
        {links.map((link) => (
          <a 
            key={link.name} 
            href={link.href} 
            className="flex items-center gap-2 px-4 py-2 text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white hover:bg-white dark:hover:bg-white/10 rounded-full transition-all duration-300"
          >
            {link.icon}
            {link.name}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-2 md:gap-4">
        <button 
          onClick={() => setIsDark(!isDark)}
          className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-yellow-400 hover:scale-110 active:scale-95 transition-all"
        >
          {isDark ? <Sun size={18} /> : <Moon size={18} className="text-indigo-600" />}
        </button>

        <a 
          href="/resume.pdf" 
          className="hidden sm:flex items-center gap-2 px-4 py-2 bg-transparent border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-xl text-xs font-bold hover:border-indigo-600 hover:text-indigo-600 transition-all"
        >
          RESUME
        </a>
        <a 
          href="https://www.linkedin.com/in/akash-tiwari-5b901b2a0/"
          target="_blank" 
          rel="noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-xl text-xs font-bold hover:bg-indigo-700 shadow-md transition-all active:scale-95"
        >
          HIRE_ME <ExternalLink size={14} />
        </a>
      </div>
    </motion.nav>
  );
};
