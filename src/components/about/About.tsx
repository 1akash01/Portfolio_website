import { motion } from 'framer-motion';

export const About = () => {
  return (
    <section id="about" className="py-32 max-w-6xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Left Side: Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-white mb-8">
            <span className="text-indigo-500 font-mono text-2xl block mb-2">01. Identity</span>
            Engineering meaningful <br/> digital solutions.
          </h2>
          <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
            <p>
              I am an IT professional dedicated to bridging the gap between complex backend logic and 
              intuitive frontend experiences. My approach is rooted in clean code and scalable architecture.
            </p>
            <p>
              Currently focusing on <span className="text-indigo-400 italic">Cloud Architecture</span> and 
              <span className="text-indigo-400 italic"> Modern Web Frameworks</span> to build 
              high-performance applications.
            </p>
          </div>
        </motion.div>
        <div className="relative">
        
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="relative z-10 w-full max-w-sm ml-auto overflow-hidden rounded-2xl border border-white/10 shadow-2xl group"
          >
            <div className="absolute inset-0 bg-indigo-500/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
            <img 
              src="./me.jpeg" 
              alt="Akash Tiwari"
              className="w-full aspect-[4/5] object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
            />
          </motion.div>

        
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="absolute -bottom-10 -left-10 z-20 hidden lg:block w-72 rounded-xl bg-[#111]/90 backdrop-blur-md border border-white/10 p-1 shadow-2xl"
          >
            <div className="flex gap-1.5 p-3 border-b border-white/5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
            </div>
            <div className="p-5 font-mono text-[10px] leading-relaxed">
              <p className="text-blue-400">const <span className="text-white">Developer</span> = {'{'}</p>
              <p className="pl-3 text-gray-400">name: <span className="text-green-400">'Akash Tiwari'</span>,</p>
              <p className="pl-3 text-gray-400">role: <span className="text-green-400">'Full Stack Engineer'</span>,</p>
              <p className="pl-3 text-gray-400">coffee: <span className="text-orange-400">true</span></p>
              <p className="text-blue-400">{'}'}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
