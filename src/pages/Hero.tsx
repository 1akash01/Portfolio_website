import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-indigo-400 font-medium mb-4">Hi, my name is</h2>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Akash Tiwari. <br />
          <span className="text-gray-500">I build digital experiences.</span>
        </h1>
        <p className="max-w-lg text-gray-400 mb-8 mx-auto">
          A Full-Stack Developer specializing in building exceptional digital experiences 
          with React, TypeScript, and modern design principles.
        </p>
        <a href="#projects">
        <button className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-bold transition-all transform hover:scale-105">
          Check out my work
        </button>
        </a>
      </motion.div>
    </section>
  );
};
