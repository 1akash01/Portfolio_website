import { Navbar } from './components/navbar/Navbar';
import { Hero }  from "./pages/Hero"
import { About } from './components/about/About';
import { Skills } from "./components/skills/Skill"
import { ProjectCard } from './components/ProjectCard';
import { Contact } from './components/contacts/Contact';
import { Footer } from './components/footer/Footer';  
import { projects } from './data/projects';

function App() {
  return (
    /* Change bg-white to bg-slate-50 for a more professional light look */
    <div className="bg-slate-50 dark:bg-[#030014] min-h-screen transition-colors duration-500">
      <Navbar />
      
      <main>
        <section id="hero"><Hero /></section>
        <section id="about"><About /></section>
        <section id="skills"><Skills /></section>
        
        <section id="projects" className="max-w-6xl mx-auto px-6 py-24">
          <h2 className="text-3xl font-bold mb-12 flex items-center dark:text-white text-slate-900">
            <span className="text-indigo-500 mr-2 font-mono text-xl">03.</span> Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        <section id="contact"><Contact /></section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
