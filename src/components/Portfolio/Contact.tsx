"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send, Sparkles, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message received! 🚀",
      description: "I'll personally get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section className="py-24 px-6 bg-[#030712] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          
          {/* Left Column: Info (Spans 2) */}
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-6">
                Let's build <br />
                <span className="text-muted-foreground italic font-serif">something great.</span>
              </h2>
              <p className="text-zinc-400 text-lg max-w-sm leading-relaxed">
                I'm currently open to new collaborations and full-time opportunities.
              </p>
            </div>

            {/* Availability Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <span className="text-emerald-500 text-sm font-medium tracking-wide">Available for new projects</span>
            </div>

            {/* Quick Contact Links */}
            <div className="space-y-6">
              {[
                { icon: Mail, label: "Email", value: "isaacnerds@gmail.com", href: "mailto:isaacnerds@gmail.com" },
                { icon: Phone, label: "Phone", value: "+234 703 298 3433", href: "tel:+2347032983433" },
                { icon: MapPin, label: "Location", value: "Abuja / Kaduna, Nigeria", href: "#" },
              ].map((item, i) => (
                <a 
                  href={item.href} 
                  key={i} 
                  className="flex items-center gap-4 group transition-all"
                >
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:border-primary/50 group-hover:bg-primary/5 transition-all">
                    <item.icon className="w-5 h-5 text-zinc-400 group-hover:text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-mono uppercase tracking-widest text-zinc-500">{item.label}</p>
                    <p className="text-zinc-200 group-hover:text-white transition-colors">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Form (Spans 3) */}
          <Card className="lg:col-span-3 bg-white/[0.02] border-white/10 backdrop-blur-2xl p-2 rounded-[2rem]">
            <CardContent className="p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-widest text-zinc-500 ml-1">Full Name</label>
                    <Input
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="h-12 bg-white/5 border-white/10 focus:border-primary/50 text-white rounded-xl"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-widest text-zinc-500 ml-1">Email Address</label>
                    <Input
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="h-12 bg-white/5 border-white/10 focus:border-primary/50 text-white rounded-xl"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-widest text-zinc-500 ml-1">Your Message</label>
                  <Textarea
                    name="message"
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-white/5 border-white/10 focus:border-primary/50 text-white rounded-xl resize-none p-4"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full h-14 bg-primary hover:bg-primary/90 text-primary-foreground text-lg font-bold rounded-xl transition-all group"
                >
                  <span className="flex items-center gap-2">
                    Send Message
                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                </Button>

                <p className="text-center text-zinc-500 text-xs">
                  By clicking send, you agree to start an awesome conversation.
                </p>
              </form>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  );
};

export default Contact;
