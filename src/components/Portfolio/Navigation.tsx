"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, FileDown, Sparkles } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 1. Update active section
      const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth"
      });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Expertise' },
    { id: 'projects', label: 'Works' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ${
      scrolled ? 'pt-4' : 'pt-6'
    }`}>
      <div className={`mx-auto transition-all duration-500 max-w-5xl px-4`}>
        <div className={`relative transition-all duration-500 rounded-[2.5rem] border overflow-hidden ${
          scrolled 
            ? 'bg-black/40 border-white/10 backdrop-blur-xl py-2 px-6 shadow-[0_8px_32px_rgba(0,0,0,0.4)]' 
            : 'bg-transparent border-transparent py-2 px-4 backdrop-blur-0'
        }`}>
          {/* Subtle Glass Inner Highlight (Only visible when scrolled) */}
          {scrolled && (
            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.05] to-transparent pointer-events-none" />
          )}

          <div className="flex items-center justify-between h-14 md:h-16 relative z-10">
            
            {/* Logo Section */}
            <button 
              onClick={() => scrollToSection('hero')}
              className="flex items-center gap-3 group"
            >
              <div className="w-9 h-9 rounded-xl bg-white text-black flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                <Sparkles size={16} strokeWidth={2.5} />
              </div>
              <span className="text-sm font-black tracking-[0.2em] text-white uppercase hidden sm:block">
                Ogbomo <span className="text-zinc-500 font-serif italic font-light tracking-normal uppercase">Isaac</span>
              </span>
            </button>
            
            {/* Desktop Nav - Floating Pill */}
            <div className="hidden md:flex items-center gap-2">
              <div className="flex items-center bg-white/[0.03] rounded-full p-1 border border-white/5 backdrop-blur-md">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`relative px-5 py-2 text-[10px] font-bold uppercase tracking-[0.2em] transition-all rounded-full ${
                      activeSection === item.id 
                        ? 'text-white' 
                        : 'text-zinc-500 hover:text-zinc-300'
                    }`}
                  >
                    {item.label}
                    {activeSection === item.id && (
                      <motion.div 
                        layoutId="nav-pill"
                        className="absolute inset-0 bg-white/10 rounded-full -z-10"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </button>
                ))}
              </div>

              <div className="w-px h-4 bg-white/10 mx-4" />

              <Button 
                variant="ghost" 
                size="sm" 
                className="rounded-full text-white/70 hover:text-white hover:bg-white/5 text-[10px] uppercase tracking-widest font-bold gap-2 px-5"
                asChild
              >
                <a href="/Resume.pdf" download>
                  <FileDown size={14} className="text-blue-400" />
                  Resume
                </a>
              </Button>
            </div>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all"
            >
              {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Nav Dropdown - Glass Box */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              className="md:hidden absolute top-[110%] left-4 right-4 z-[99]"
            >
              <div className="bg-[#111]/80 border border-white/10 backdrop-blur-3xl rounded-[2rem] p-8 shadow-3xl">
                <div className="flex flex-col gap-6">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`text-2xl font-medium tracking-tighter text-left transition-all ${
                        activeSection === item.id ? 'text-white pl-4 border-l-2 border-blue-500' : 'text-zinc-600'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                  <div className="h-px bg-white/5 w-full my-2" />
                  <Button className="w-full h-14 rounded-2xl bg-white text-black font-bold uppercase tracking-widest text-xs hover:bg-zinc-200">
                    Download Resume
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navigation;