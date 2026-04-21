"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Cloud, ShieldCheck, Heart } from "lucide-react";

const ITEMS = [
  { label: "Feel the Cloud", icon: Cloud },
  { label: "Zimbabwe's Pride", icon: Sparkles },
  { label: "Lulu Saves the Day", icon: ShieldCheck },
  { label: "Pure Virgin Pulp", icon: Heart },
  { label: "Unscripted Moments", icon: Sparkles },
];

export const MarqueeStrip = () => {
  return (
    <div className="relative w-full py-6 bg-lulu-navy overflow-hidden flex items-center">
      <motion.div
        animate={{ x: [0, -1000] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        }}
        className="flex items-center gap-12 whitespace-nowrap"
      >
        {[...Array(6)].map((_, i) => (
          <React.Fragment key={i}>
            {ITEMS.map((item, index) => (
              <div key={`${i}-${index}`} className="flex items-center gap-4 text-lulu-white/80">
                <item.icon size={20} className="text-lulu-green" />
                <span className="text-sm font-black uppercase tracking-[0.3em] font-display">
                  {item.label}
                </span>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
      
      {/* Side gradients to mask the edges */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-lulu-navy to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-lulu-navy to-transparent z-10" />
    </div>
  );
};

export default MarqueeStrip;
