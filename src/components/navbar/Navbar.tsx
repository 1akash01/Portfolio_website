import { motion } from 'framer-motion';
import { Code2, User, Cpu, Mail, ExternalLink } from 'lucide-react';

export const Navbar = () => {
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
      className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-50 px-6 py-3 flex justify-between items-center backdrop-blur-md bg-black/60 border border-white/10 rounded-2xl shadow-2xl"
    >
      {/* Logo Section */}
      <div className="flex items-center gap-3 group cursor-pointer">
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
          <img 
            src="./akash.png" 
            alt="Akash Logo" 
            className="relative w-10 h-10 rounded-xl object-cover border border-white/20 transition-all group-hover:border-indigo-500/50 shadow-inner"
          />
        </div>
        
        <div className="flex flex-col">
          <span className="font-mono text-base font-bold tracking-tighter text-white group-hover:text-indigo-400 transition-colors">
            AKASH_TIWARI
          </span>
          <span className="text-[9px] text-gray-500 font-mono tracking-[0.2em] uppercase leading-none group-hover:text-gray-300 transition-colors">
            Software Engineer
          </span>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center bg-white/5 border border-white/5 rounded-full px-2 py-1 gap-1">
        {links.map((link) => (
          <a 
            key={link.name} 
            href={link.href} 
            className="flex items-center gap-2 px-4 py-2 text-xs font-medium text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300"
          >
            {link.icon}
            {link.name}
          </a>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-3">
        <a 
          href="/resume.pdf" 
          className="hidden sm:flex items-center gap-2 px-4 py-2 bg-transparent border border-gray-700 text-gray-300 rounded-xl text-xs font-bold hover:border-indigo-500 hover:text-indigo-400 transition-all"
        >
          RESUME
        </a>
        <a 
          href="https://www.linkedin.com/in/akash-tiwari-5b901b2a0/"
          target="_blank" 
          rel="noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-xl text-xs font-bold hover:bg-indigo-500 hover:shadow-[0_0_20px_rgba(79,70,229,0.4)] transition-all active:scale-95"
        >
          HIRE_ME <ExternalLink size={14} />
        </a>
      </div>
    </motion.nav>
  );
};
