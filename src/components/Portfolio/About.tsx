import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-32 px-6 bg-[#0a0a0a] border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          
          {/* Left Side: Narrative */}
          <div className="space-y-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-zinc-500 text-xs tracking-widest uppercase font-semibold">
                About Me
              </h2>
              <h3 className="text-4xl md:text-5xl font-medium tracking-tight text-white leading-tight">
                Building for the <span className="font-serif italic font-light text-zinc-400">Future.</span>
              </h3>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-8"
            >
              <p className="text-xl md:text-2xl text-zinc-300 font-light leading-relaxed">
                I am Ogbomo Isaac, a passionate full-stack developer. 
                I specialize in building scalable web applications and crafting intuitive user experiences.
              </p>

              <p className="text-lg text-zinc-500 leading-relaxed max-w-lg">
                Based in Nigeria, I enjoy working on diverse projects ranging from modern web interfaces 
                to robust backend systems. With experience in full-stack development and blockchain technologies, 
                my focus is always on delivering efficient, high-quality solutions that meet real-world needs.
              </p>
            </motion.div>
          </div>

          {/* Right Side: Editorial Metrics Grid */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:mt-24"
          >
            {[
              { label: "Production Apps", value: "07", desc: "Successfully deployed." },
              { label: "Technologies", value: "12", desc: "Frameworks & languages." },
              { label: "Experience", value: "03", desc: "Years in engineering." },
            ].map((stat, i) => (
              <div key={i} className="p-8 border border-white/10 flex flex-col justify-between h-48 hover:bg-white/5 transition-colors duration-300">
                <span className="text-zinc-500 text-xs uppercase tracking-widest font-semibold">{stat.label}</span>
                <div>
                  <span className="text-4xl font-light text-white tracking-tighter block mb-2">{stat.value}</span>
                  <p className="text-xs text-zinc-500 leading-relaxed">{stat.desc}</p>
                </div>
              </div>
            ))}
            
            {/* Action Card */}
            <div className="p-8 border border-white/10 flex flex-col justify-between h-48 bg-white/5 hover:bg-white/10 transition-colors duration-300 group cursor-pointer">
              <span className="text-zinc-500 text-xs uppercase tracking-widest font-semibold">Resume</span>
              <div className="flex items-center justify-between">
                <span className="text-lg font-medium text-white tracking-tight">Download</span>
                <ArrowUpRight className="text-zinc-400 group-hover:text-white transition-colors" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;