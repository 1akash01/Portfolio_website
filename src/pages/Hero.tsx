import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 transition-colors duration-500">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-indigo-600 dark:text-indigo-400 font-mono font-medium mb-4 tracking-widest uppercase text-sm">
          Hi, my name is
        </h2>
        
        {/* FIXED: text-slate-900 for Light Mode, dark:text-white for Dark Mode */}
        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
          Akash Tiwari. <br />
          <span className="text-slate-400 dark:text-slate-500">I build digital experiences.</span>
        </h1>
        
        {/* FIXED: text-slate-600 for Light Mode, dark:text-slate-400 for Dark Mode */}
        <p className="max-w-lg text-slate-600 dark:text-slate-400 mb-8 mx-auto text-lg leading-relaxed">
          A Full-Stack Developer specializing in building exceptional digital experiences 
          with React, TypeScript, and modern design principles.
        </p>
        
        <a href="#projects">
          <button className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-bold transition-all transform hover:scale-105 shadow-lg shadow-indigo-500/20 active:scale-95">
            Check out my work
          </button>
        </a>
      </motion.div>
    </section>
  );
};
