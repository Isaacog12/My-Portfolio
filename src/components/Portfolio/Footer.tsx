import React from "react";
import { Github, Linkedin, Mail, Heart, ArrowUp, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-20 px-6 bg-[#030712] border-t border-white/5 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[200px] bg-primary/5 blur-[100px] -z-10" />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start mb-16">
          
          {/* Brand Column */}
          <div className="space-y-4 text-center md:text-left">
            <h3 className="text-2xl font-bold tracking-tighter text-white">
              OGBOMO <span className="text-zinc-500 italic font-serif">ISAAC</span>
            </h3>
            <p className="text-zinc-500 text-sm max-w-[250px] mx-auto md:mx-0 leading-relaxed">
              Full-stack engineer building digital products with high technical precision.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-2 pt-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-[10px] uppercase tracking-widest text-zinc-600 font-bold">
                Available for hire
              </span>
            </div>
          </div>

          {/* Navigation/Links Column */}
          <div className="flex flex-col items-center space-y-4">
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-zinc-600">Connect</p>
            <div className="flex items-center gap-4">
              {[
                { icon: Github, href: "https://github.com/Isaacog12" },
                { icon: Linkedin, href: "https://linkedin.com" },
                { icon: Mail, href: "mailto:isaacnerds@gmail.com" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Action Column */}
          <div className="flex flex-col items-center md:items-end space-y-4">
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-zinc-600">Navigation</p>
            <Button 
              variant="outline" 
              onClick={scrollToTop}
              className="group rounded-full border-white/10 bg-white/5 hover:bg-white/10 text-white h-12 px-6 gap-2"
            >
              Back to Top
              <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-600 text-[11px] uppercase tracking-[0.2em] font-medium">
            © {currentYear} All Rights Reserved
          </p>
          
          <div className="flex items-center gap-2 text-zinc-500 text-xs">
            <span>Built with</span>
            <Zap size={12} className="text-primary fill-primary" />
            <span>in Nigeria</span>
          </div>

          <p className="text-zinc-600 text-[11px] uppercase tracking-[0.2em] font-medium">
            Designed for <span className="text-zinc-400">Excellence</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
