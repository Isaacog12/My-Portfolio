"use client";

import React, { useState } from "react";
import { Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message received.",
      description: "I'll respond within 24 hours.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-32 px-6 bg-[#0a0a0a] border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          
          {/* Left Column: Info */}
          <div className="space-y-12">
            <div>
              <span className="text-zinc-500 font-semibold text-xs tracking-widest uppercase mb-4 block">Contact</span>
              <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">
                Let's start a <br />
                <span className="text-zinc-400 italic font-serif font-light">Conversation.</span>
              </h2>
              <p className="text-zinc-400 text-lg max-w-sm leading-relaxed font-light">
                Currently available for new opportunities and collaborations. Reach out to discuss your next project.
              </p>
            </div>

            {/* Quick Contact Links */}
            <div className="space-y-8 pt-8 border-t border-white/10">
              {[
                { icon: Mail, label: "Email", value: "isaacnerds@gmail.com", href: "mailto:isaacnerds@gmail.com" },
                { icon: Phone, label: "Phone", value: "+234 703 298 3433", href: "tel:+2347032983433" },
                { icon: MapPin, label: "Location", value: "Abuja / Kaduna, Nigeria", href: "#" },
              ].map((item, i) => (
                <a 
                  href={item.href} 
                  key={i} 
                  className="flex items-center gap-6 group transition-all"
                >
                  <div className="w-12 h-12 flex items-center justify-center border border-white/10 group-hover:border-white transition-colors">
                    <item.icon className="w-5 h-5 text-white" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-zinc-500">{item.label}</p>
                    <p className="text-lg text-zinc-300 group-hover:text-white transition-colors">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Minimal Form */}
          <div className="lg:mt-0 p-8 sm:p-12 border border-white/10 bg-[#0a0a0a]">
            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="space-y-4">
                <label className="text-[10px] font-semibold uppercase tracking-widest text-zinc-500 block">Name</label>
                <input
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-white/20 focus:border-white text-white py-3 outline-none transition-colors rounded-none"
                />
              </div>
              
              <div className="space-y-4">
                <label className="text-[10px] font-semibold uppercase tracking-widest text-zinc-500 block">Email</label>
                <input
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-white/20 focus:border-white text-white py-3 outline-none transition-colors rounded-none"
                />
              </div>

              <div className="space-y-4">
                <label className="text-[10px] font-semibold uppercase tracking-widest text-zinc-500 block">Message</label>
                <textarea
                  name="message"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full bg-transparent border-b border-white/20 focus:border-white text-white py-3 outline-none transition-colors resize-none rounded-none"
                />
              </div>

              <button 
                type="submit" 
                className="group flex items-center justify-between w-full h-14 px-6 bg-white text-black hover:bg-zinc-200 transition-colors"
              >
                <span className="text-xs font-bold tracking-widest uppercase">Send Message</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
