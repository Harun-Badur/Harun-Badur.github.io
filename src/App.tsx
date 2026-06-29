import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0d0e12] text-slate-100 flex flex-col justify-between selection:bg-cyber-green/30 selection:text-cyber-green">
      
      {/* Background cyber grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293708_1px,transparent_1px),linear-gradient(to_bottom,#1f293708_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div>
        {/* Navbar component */}
        <Navbar />

        {/* Hero component */}
        <Hero />

        {/* About & Skills Bento Section */}
        <About />

        {/* Selected Projects Section */}
        <Projects />

        {/* Contact Section */}
        <Contact />
      </div>

      {/* Footer */}
      <footer className="bg-[#0b0c0f] border-t border-white/5 py-8 text-center text-xs font-mono text-slate-500 animate-[fadeIn_1s_ease_out]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div>
            <span>© 2026 Harun Badur. Bütün hakları saklıdır.</span>
          </div>
          <div>
            <span>Built with React, Tailwind CSS v4 & Framer Motion</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
