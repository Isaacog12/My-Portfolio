"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, FileDown, Rocket } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 1. Update active section
      const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 150;

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

      // 2. Dynamic background on scroll
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Offset for the fixed header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 py-4 ${
      scrolled ? 'px-4' : 'px-0'
    }`}>
      <div className={`max-w-5xl mx-auto transition-all duration-500 rounded-[2rem] border border-white/5 bg-white/[0.02] backdrop-blur-2xl ${
        scrolled ? 'px-8 shadow-[0_0_40px_rgba(0,0,0,0.5)] border-white/10' : 'px-6 border-transparent bg-transparent'
      }`}>
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* Logo / Name */}
          <button 
            onClick={() => scrollToSection('hero')}
            className="group flex items-center gap-2"
          >
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center group-hover:rotate-[15deg] transition-transform duration-300">
              <Rocket size={18} className="text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-white tracking-tighter">
              OGBOMO <span className="text-zinc-500 group-hover:text-primary transition-colors italic font-serif">ISAAC</span>
            </span>
          </button>
          
          {/* Desktop Navigation Items */}
          <div className="hidden md:flex items-center gap-2">
            <div className="flex items-center bg-white/[0.03] rounded-full p-1 border border-white/5">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-4 py-2 text-xs font-bold uppercase tracking-widest transition-all rounded-full ${
                    activeSection === item.id 
                    ? 'text-white bg-white/10' 
                    : 'text-zinc-500 hover:text-zinc-300'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full animate-pulse" />
                  )}
                </button>
              ))}
            </div>

            <div className="w-px h-6 bg-white/10 mx-2" />

            <Button 
              variant="outline" 
              size="sm" 
              className="rounded-full border-white/10 bg-white/5 hover:bg-white/10 text-white font-bold h-10 px-6 gap-2"
              asChild
            >
              <a href="/Tife-CV.pdf" download>
                <FileDown size={14} className="text-primary" />
                Resume
              </a>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white transition-all hover:bg-white/10"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        
        {/* Mobile Navigation Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-[110%] left-0 right-0 p-2 animate-fade-up">
             <div className="bg-[#0a0a0a] border border-white/10 backdrop-blur-3xl rounded-[2rem] p-6 space-y-6 shadow-2xl">
              <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-lg font-bold tracking-tight text-left transition-all ${
                      activeSection === item.id ? 'text-primary pl-4 border-l-2 border-primary' : 'text-zinc-500'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              <Button className="w-full h-12 rounded-xl bg-primary font-bold">
                Download Resume
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
