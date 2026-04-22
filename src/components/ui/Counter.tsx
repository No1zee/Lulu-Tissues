"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

interface CounterProps {
  value: string | number;
  className?: string;
  style?: React.CSSProperties;
}

export const Counter = ({ value, className, style }: CounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  
  // Extract number and suffix (e.g., "500+" -> number: 500, suffix: "+")
  const valueStr = String(value);
  const numberMatch = valueStr.match(/(\d+)/);
  const targetNumber = numberMatch ? parseInt(numberMatch[0], 10) : 0;
  const suffix = valueStr.replace(String(targetNumber), "");

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });

  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(targetNumber);
    }
  }, [isInView, motionValue, targetNumber]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toLocaleString() + suffix;
      }
    });
  }, [springValue, suffix]);

  return (
    <span 
      ref={ref} 
      className={className}
    >
      0{suffix}
    </span>
  );
};
