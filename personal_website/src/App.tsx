import { Github, Linkedin, Mail } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      
      
      <Contact />

      <footer className="bg-gradient-to-r from-gray-900 to-black text-white py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="flex justify-center space-x-6 mb-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors hover:scale-125 transform">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors hover:scale-125 transform">
              <Linkedin size={24} />
            </a>
            <a href="mailto:your.email@example.com" className="hover:text-pink-400 transition-colors hover:scale-125 transform">
              <Mail size={24} />
            </a>
          </div>
          <p className="text-gray-400 text-sm">Made with passion 💖 by Valarie Koh © 2025</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
