import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUp, Sparkles } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-24 px-6 bg-[#0a0a0a] border-t border-white/5 overflow-hidden">
      {/* Soft Blue Bottom Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[150px] bg-blue-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr] gap-16 mb-20">
          
          {/* Brand Column */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
               <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center">
                <Sparkles size={14} className="text-black" />
              </div>
              <h3 className="text-xl font-bold tracking-tighter text-white">
                OGBOMO <span className="text-zinc-500 italic font-serif font-light">ISAAC</span>
              </h3>
            </div>
            
            <p className="text-zinc-500 text-sm max-w-xs leading-relaxed font-light">
              Crafting high-performance digital environments with technical precision and human-centered design.
            </p>

            <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full shadow-[0_0_8px_#3b82f6]" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-600 font-bold">
                Open for 2026 Opportunities
              </span>
            </div>
          </div>

          {/* Social Directory */}
          <div className="space-y-6">
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-700">Social Directory</p>
            <div className="flex flex-col gap-4">
              {[
                { name: "GitHub", href: "https://github.com/Isaacog12", icon: Github },
                { name: "LinkedIn", href: "#", icon: Linkedin },
                { name: "Twitter", href: "#", icon: Mail },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="group flex items-center gap-3 text-zinc-500 hover:text-white transition-all duration-300"
                >
                  <social.icon size={16} strokeWidth={1.5} className="group-hover:text-blue-400" />
                  <span className="text-xs font-medium tracking-tight">{social.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation & Action */}
          <div className="flex flex-col md:items-end justify-between">
            <div className="space-y-6 md:text-right">
              <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-700">Navigation</p>
              <button 
                onClick={scrollToTop}
                className="group flex items-center gap-3 text-zinc-500 hover:text-white transition-all ml-auto md:ml-0"
              >
                <span className="text-xs font-medium tracking-tight uppercase">Return to top</span>
                <div className="w-10 h-10 rounded-full border border-white/5 bg-white/[0.03] flex items-center justify-center group-hover:border-blue-500/50 group-hover:bg-blue-500/5 transition-all">
                  <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Legal & Credits Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-8">
            <p className="text-zinc-600 text-[10px] uppercase tracking-[0.2em]">
              © {currentYear} Ogbomo Isaac
            </p>
            <div className="hidden sm:block h-px w-8 bg-zinc-800" />
            <p className="text-zinc-600 text-[10px] uppercase tracking-[0.2em]">
              Handcrafted in <span className="text-zinc-400">Nigeria</span>
            </p>
          </div>
          
          <div className="flex items-center gap-4 text-zinc-500 text-[10px] uppercase tracking-[0.3em] font-bold">
            <span className="text-zinc-700 italic">Designed for</span>
            <span className="text-zinc-300">Excellence</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;