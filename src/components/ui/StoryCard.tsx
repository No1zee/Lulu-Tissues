"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface StoryCardProps {
  episode: number;
  title: string;
  description: string;
  image: string;
  tag: string;
  accentColor?: string;
}

const StoryCard = ({ episode, title, description, image, tag, accentColor = "bg-aloe-green" }: StoryCardProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="w-[85vw] md:w-[60vw] lg:w-[45vw] h-[70vh] shrink-0 rounded-[60px] bg-white overflow-hidden shadow-2xl flex flex-col relative group"
    >
      {/* Episode Header */}
      <div className="absolute top-8 left-8 z-20 flex items-center gap-4">
        <div className={`px-4 py-2 rounded-full ${accentColor} text-white font-black text-[10px] uppercase tracking-[0.2em] shadow-lg`}>
          Episode {episode}
        </div>
        <div className="px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-trust-navy/10 text-trust-navy/60 font-bold text-[10px] uppercase tracking-[0.2em]">
          {tag}
        </div>
      </div>

      {/* Frame Visual */}
      <div className="relative flex-1 overflow-hidden">
        <Image 
          src={image} 
          alt={title} 
          fill 
          sizes="(max-width: 768px) 85vw, (max-width: 1024px) 60vw, 45vw"
          className="object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-linear-to-t from-white via-transparent to-transparent opacity-60" />
      </div>

      {/* Content Area */}
      <div className="p-12 pt-8 bg-white relative z-10">
        <h4 className="text-4xl md:text-5xl font-black text-trust-navy mb-4 leading-none tracking-tighter">
          {title}
        </h4>
        <p className="text-trust-navy/60 text-lg md:text-xl font-medium leading-relaxed max-w-xl">
          {description}
        </p>
      </div>

      {/* Hero Badge (Lulu Icon Placeholder/Decoration) */}
      <div className="absolute bottom-8 right-8 w-16 h-16 rounded-full bg-soft-petal shadow-inner flex items-center justify-center pointer-events-none transform group-hover:rotate-12 transition-transform">
        <div className="w-8 h-8 rounded-full bg-white/50 blur-sm animate-pulse" />
      </div>
    </motion.div>
  );
};

export default StoryCard;
