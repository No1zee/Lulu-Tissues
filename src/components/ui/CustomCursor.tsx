"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";

export const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [cursorLabel, setCursorLabel] = useState("");
  const [clickScale, setClickScale] = useState(1);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springX = useSpring(mouseX, { stiffness: 250, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 250, damping: 25 });

  useEffect(() => {
    const minCursor = window.matchMedia("(pointer: fine)").matches;
    if (!minCursor) return;

    const manageMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const manageMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest("button, a, .magnetic, [data-cursor]");
      const labelAttr = (interactive as HTMLElement)?.getAttribute("data-cursor");

      if (interactive) {
        setIsHovered(true);
        setCursorLabel(labelAttr || "");
      } else {
        setIsHovered(false);
        setCursorLabel("");
      }
    };

    const manageMouseDown = () => setClickScale(0.7);
    const manageMouseUp = () => setClickScale(1);

    window.addEventListener("mousemove", manageMouseMove);
    window.addEventListener("mouseover", manageMouseOver);
    window.addEventListener("mousedown", manageMouseDown);
    window.addEventListener("mouseup", manageMouseUp);

    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
      window.removeEventListener("mouseover", manageMouseOver);
      window.removeEventListener("mousedown", manageMouseDown);
      window.removeEventListener("mouseup", manageMouseUp);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      ref={cursorRef}
      className="fixed top-0 left-0 w-3 h-3 rounded-full pointer-events-none z-[9999] mix-blend-difference bg-white flex items-center justify-center overflow-hidden"
      style={{
        x: springX,
        y: springY,
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{
        scale: isHovered ? (cursorLabel ? 6 : 4) * clickScale : 1 * clickScale,
      }}
      transition={{ type: "spring", stiffness: 250, damping: 25, mass: 0.5 }}
    >
      <AnimatePresence>
        {cursorLabel && (
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="text-[2.5px] font-black tracking-widest uppercase text-black"
          >
            {cursorLabel}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default CustomCursor;
