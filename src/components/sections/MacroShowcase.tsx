"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { SectionHeader } from "@/components/ui/SectionHeader";

const FEATURES = [
  {
    eyebrow: "The Architecture",
    title: "Triple-Ply Core.",
    description: "Engineered for maximum absorption. Each sheet layers three ultra-fine sheets of pure virgin pulp, creating a microscopic sponge structure that handles anything life throws at it.",
    image: "/images/products/macro-executive.png"
  },
  {
    eyebrow: "The Texture",
    title: "Micro-Quilted Embossing.",
    description: "Look closely. Our signature geometric embossing isn't just for show. It binds the plies together while creating air pockets that drastically increase softness against the skin.",
    image: "/images/products/macro-aloe.png"
  },
  {
    eyebrow: "The Infusion",
    title: "Aloe Vera Glabrata.",
    description: "Infused at a microscopic level. For everyday resilience that never compromises on dermatological care. Softness you can feel, strength you can trust.",
    image: "/images/products/macro-wipe.png"
  }
];

export const MacroShowcase = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <section id="quality" ref={containerRef} className="py-32 bg-lulu-white relative">
      <div className="container mx-auto px-6 mb-24">
        <SectionHeader 
          eyebrow="Product as Art"
          title="The Anatomy of Softness"
          subtext="We strip away the noise so you can see the science. Witness the microscopic details that make Lulu the most trusted tissue in Zimbabwe."
        />
      </div>

      <div className="flex flex-col gap-32 max-w-[1400px] mx-auto px-6">
        {FEATURES.map((feature, i) => (
          <MacroBlock 
            key={i} 
            feature={feature} 
            reverse={i % 2 !== 0} 
            index={i}
          />
        ))}
      </div>
    </section>
  );
};

const MacroBlock = ({ feature, reverse, index }: { feature: any, reverse: boolean, index: number }) => {
  const isDark = index === 1; // Middle one gets dark treatment

  return (
    <div className={`rounded-[3rem] overflow-hidden flex flex-col lg:flex-row ${reverse ? 'lg:flex-row-reverse' : ''} ${isDark ? 'bg-espresso text-ivory' : 'bg-ivory text-espresso shadow-[0_32px_64px_-16px_rgba(0,0,0,0.06)]'}`}>
      {/* Image Panel */}
      <div 
        data-cursor="inspect"
        className="relative w-full lg:w-1/2 min-h-[500px] lg:min-h-[700px] overflow-hidden group border-r border-mist/10"
      >
        <motion.div 
          initial={{ scale: 1.25, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="absolute inset-0"
        >
          <Image 
            src={feature.image}
            alt={feature.title}
            fill
            className={`object-cover bg-mist/20 ${isDark ? 'opacity-80 mix-blend-screen scale-110' : 'mix-blend-multiply opacity-90'} group-hover:scale-[1.08] transition-transform duration-[3s] ease-out`}
          />
        </motion.div>
        
        <div className={`absolute inset-0 z-10 ${isDark ? 'bg-gradient-to-t from-espresso/80 to-transparent' : 'bg-gradient-to-t from-black/20 to-transparent'}`} />
        
        {/* S-Tier Detail: Microscopic Badge */}
        <div className="absolute bottom-8 left-8 z-20 flex items-center gap-3">
          <div className={`w-10 h-10 rounded-full border flex items-center justify-center backdrop-blur-md ${isDark ? 'border-ivory/20 bg-ivory/10' : 'border-espresso/20 bg-espresso/10'}`}>
            <span className="text-[10px] font-bold">x100</span>
          </div>
          <span className={`text-[10px] font-black uppercase tracking-widest ${isDark ? 'text-ivory/40' : 'text-espresso/40'}`}>
            Micro-Scale Detail
          </span>
        </div>
      </div>

      {/* Text Panel */}
      <div className="w-full lg:w-1/2 p-12 lg:p-24 flex flex-col justify-center relative">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
           viewport={{ once: true }}
        >
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-sage mb-8 block">
            {feature.eyebrow}
          </span>
          <h3 className="text-5xl lg:text-8xl font-heading font-black uppercase tracking-tighter mb-10 leading-[0.85] italic">
            {feature.title}
          </h3>
          <p className={`text-xl lg:text-2xl font-body leading-relaxed md:max-w-md ${isDark ? 'text-ivory/70' : 'text-espresso/70'}`}>
            {feature.description}
          </p>
        </motion.div>

        {/* Decorative S-Tier Elements */}
        <div className={`absolute top-12 right-12 w-12 h-[1px] ${isDark ? 'bg-ivory/10' : 'bg-espresso/10'}`} />
        <div className={`absolute top-12 right-12 h-12 w-[1px] ${isDark ? 'bg-ivory/10' : 'bg-espresso/10'}`} />
      </div>
    </div>
  );
};

export default MacroShowcase;

