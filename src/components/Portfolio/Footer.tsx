import React from "react";
import { Github, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10 pt-16 pb-8 px-6 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
          
          {/* Left Side: Branding & Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 flex items-center justify-center border border-white/20 bg-white">
                <span className="font-bold text-xs tracking-tighter text-black">OI.</span>
              </div>
              <span className="text-xs font-semibold tracking-widest uppercase">
                Ogbomo <span className="text-zinc-500 font-light">Isaac</span>
              </span>
            </div>
            
            <p className="text-zinc-500 text-sm font-light max-w-xs leading-relaxed">
              Engineering robust digital experiences with a focus on clean design and performance.
            </p>
          </div>

          {/* Right Side: Links & Copyright */}
          <div className="flex flex-col items-start md:items-end gap-8">
            <div className="flex items-center gap-6">
              <a href="https://github.com/Isaacog12" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-white transition-colors">
                <Github size={18} strokeWidth={1.5} />
              </a>
              
              <button 
                onClick={scrollToTop}
                className="group flex items-center gap-3 text-zinc-500 hover:text-white transition-all ml-auto md:ml-0"
              >
                <span className="text-xs font-medium tracking-tight uppercase">Return to top</span>
                <div className="w-10 h-10 rounded-full border border-white/5 bg-white/[0.03] flex items-center justify-center group-hover:border-white transition-all">
                  <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Legal & Credits Bar */}
        <div className="pt-12 mt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-8">
            <p className="text-zinc-600 text-[10px] uppercase tracking-[0.2em]">
              © {new Date().getFullYear()} Ogbomo Isaac
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