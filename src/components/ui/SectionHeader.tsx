"use client";

import React from "react";
import { motion } from "framer-motion";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtext?: string;
  className?: string;
  dark?: boolean;
}

export const SectionHeader = ({ 
  eyebrow, 
  title, 
  subtext, 
  className = "", 
  dark = false 
}: SectionHeaderProps) => {
  return (
    <div className={`max-w-4xl ${className}`}>
      {eyebrow && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className={`text-[10px] font-black uppercase tracking-[0.4em] mb-4 block ${
            dark ? "text-aloe-green" : "text-aloe-green"
          }`}
        >
          {eyebrow}
        </motion.span>
      )}
      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        className={`text-hero leading-[0.85] font-black uppercase tracking-tighter mb-8 ${
          dark ? "text-lulu-white" : "text-trust-navy"
        }`}
      >
        {title}
      </motion.h2>

      {subtext && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className={`text-xl md:text-2xl leading-relaxed max-w-2xl ${
            dark ? "text-lulu-white/60" : "text-trust-navy/60"
          }`}
        >
          {subtext}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeader;
