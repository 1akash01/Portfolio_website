import { motion } from 'framer-motion';

const skillCategories = [
  { title: 'Frontend', skills: ['React', 'TypeScript', 'Next.js', 'Tailwind'] },
  { title: 'Backend', skills: ['Node.js', 'PostgreSQL', 'Express', 'GraphQL'] },
  { title: 'Tools', skills: ['Git', 'Docker', 'Vercel', 'AWS'] },
  { title: 'Design', skills: ['Figma', 'Adobe XD', 'UI/UX Principles'] },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-32 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6">
        {/* FIXED: text-slate-900 dark:text-white */}
        <h2 className="text-3xl font-bold mb-16 text-center text-slate-900 dark:text-white underline decoration-indigo-500 underline-offset-8">
          Technical Competencies
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              /* FIXED: bg-white dark:bg-[#0f0f0f] and border-slate-200 dark:border-white/5 */
              className="p-8 bg-white dark:bg-[#0f0f0f] border border-slate-200 dark:border-white/5 rounded-2xl hover:border-indigo-500/40 shadow-sm dark:shadow-none transition-all group"
            >
              <h3 className="text-indigo-600 dark:text-indigo-400 font-mono mb-6 text-sm uppercase tracking-widest font-bold">
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.skills.map((skill) => (
                  /* FIXED: text-slate-700 dark:text-gray-300 */
                  <li key={skill} className="text-slate-700 dark:text-gray-300 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full group-hover:scale-150 transition-transform"></div>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
