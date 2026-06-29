import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [activeItem, setActiveItem] = useState('');
  
  const menuItems = [
    { name: 'Hakkımda', id: '#about' },
    { name: 'Projeler', id: '#projects' },
    { name: 'İletişim', id: '#contact' }
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -50% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          if (id === 'about') setActiveItem('Hakkımda');
          else if (id === 'projects') setActiveItem('Projeler');
          else if (id === 'contact') setActiveItem('İletişim');
        }
      });
    }, observerOptions);

    const sections = ['about', 'projects', 'contact'];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    // Detect if we are back at the top to clear active state
    const handleScroll = () => {
      if (window.scrollY < 200) {
        setActiveItem('');
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0d0e12]/80 backdrop-blur-md border-b border-white/5 py-4 px-6 md:px-12 flex justify-between items-center">
      {/* Logo */}
      <div 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="flex items-center gap-2 font-sans text-xl font-bold select-none cursor-pointer"
      >
        <span className="text-cyber-green font-mono font-extrabold">&lt;/&gt;</span>
        <span className="text-white">Harun</span>
        <span className="text-cyber-green ml-1">Badur</span>
      </div>

      {/* Menu Links */}
      <nav className="hidden md:flex items-center gap-8 font-sans text-sm font-medium">
        {menuItems.map((item) => (
          <button
            key={item.name}
            onClick={() => scrollToSection(item.id)}
            className="relative text-slate-300 hover:text-white transition-colors cursor-pointer py-1"
          >
            {item.name}
            {activeItem === item.name && (
              <motion.div
                layoutId="navbar-underline"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#00C4CC] to-[#7D2AE8] shadow-[0_0_8px_rgba(0,196,204,0.8)]"
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              />
            )}
          </button>
        ))}
      </nav>
    </header>
  );
}
