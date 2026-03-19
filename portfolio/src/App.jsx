import Navbar from './component/Navbar';
import Hero from './component/Hero';
import About from './component/About';
import Skills from './component/Skills';
import Projects from './component/Projects';
import Contact from './component/Contact';
import Education from './component/Education';
import './App.css';

function App() {
  return (
    <div className="bg-zinc-50 text-zinc-900 selection:bg-purple-500/30 selection:text-purple-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>
      
      {/* Simple Footer */}
      <footer className="bg-white border-t border-zinc-200 py-8 text-center text-zinc-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Portfolio. All rights reserved.</p>
        <p className="mt-2 text-xs">Built with React 19, Tailwind CSS, and Framer Motion.</p>
      </footer>
    </div>
  );
}

export default App;
