import { Github, Linkedin, Twitter } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5 bg-black/40 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Akash Tiwari. All rights reserved.
        </div>
        <div className="flex gap-6">
          <a href="https://github.com/1akash01" className="text-gray-400 hover:text-indigo-400 transition-colors"><Github size={20} /></a>
          <a href="https://www.linkedin.com/in/akash-tiwari-5b901b2a0/" className="text-gray-400 hover:text-indigo-400 transition-colors"><Linkedin size={20} /></a>
          <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors"><Twitter size={20} /></a>
        </div>
      </div>
    </footer>
  );
};
