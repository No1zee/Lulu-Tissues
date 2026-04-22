"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { Sparkles } from "lucide-react";

interface MascotWipeProps {
  targetRef?: React.RefObject<HTMLDivElement | null>;
}

const MascotWipe = ({ targetRef }: MascotWipeProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mascotRef = useRef<HTMLDivElement>(null);
  const wipeRef = useRef<HTMLDivElement>(null);
  const bubbleRef = useRef<HTMLDivElement>(null);
  const sparklesContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (typeof window === "undefined") return;
    
    // Consolidate registration
    gsap.registerPlugin(ScrollTrigger);

    // Guard: Only run if the target element exists
    const triggerElement = targetRef?.current;
    if (!triggerElement) return;

    // 1. Core Wipe Timeline
    const mainTl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        start: "bottom 98%",
        end: "bottom 5%",
        scrub: 1.5,
      }
    });

    // Reset initial positions
    gsap.set(wipeRef.current, { 
      xPercent: -120, 
      skewX: -15, 
      scaleY: 1.2,
    });
    
    gsap.set(mascotRef.current, { 
      x: "-100vw", 
      y: "40vh",
      rotate: -10 
    });
    
    gsap.set(bubbleRef.current, { scale: 0, opacity: 0 });

    // The Reveal Sequence
    mainTl.to(wipeRef.current, {
      xPercent: 120,
      ease: "none",
    }, 0)
    .to(mascotRef.current, {
      x: "110vw",
      ease: "power1.inOut",
    }, 0)
    .to(bubbleRef.current, {
      scale: 1,
      opacity: 1,
      duration: 0.2,
      ease: "back.out(2)",
    }, 0.2)
    .to(bubbleRef.current, {
      scale: 0.8,
      opacity: 0,
      duration: 0.2,
      delay: 0.4
    }, 0.6);

    // 2. "Scrubbing" Secondary Animation
    gsap.to(mascotRef.current, {
      scrollTrigger: {
        trigger: triggerElement,
        start: "bottom 100%",
        end: "bottom 0%",
        scrub: 0.2,
      },
      y: "38vh",
      rotate: 5,
      repeat: 20, 
      yoyo: true,
      ease: "sine.inOut"
    });

    // 3. Simplified Sparkle Trail
    const sparkles = sparklesContainerRef.current?.querySelectorAll(".sparkle-particle");
    if (sparkles) {
      gsap.to(sparkles, {
        scrollTrigger: {
          trigger: triggerElement,
          start: "bottom 95%",
          end: "bottom 5%",
          scrub: 2,
        },
        x: "110vw",
        rotate: 360,
        opacity: 1,
        scale: 1.5,
        stagger: 0.05,
        ease: "none"
      });
    }

  }, { scope: containerRef, dependencies: [targetRef] });

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-100 overflow-hidden">
      {/* The Cinematic Wipe Overlay */}
      <div 
        ref={wipeRef}
        className="absolute inset-0 w-[150vw] h-[150vh] -top-[25vh] bg-linear-to-r from-aloe-green/40 via-white/30 to-transparent backdrop-blur-[2px] shadow-[inset_-60px_0_120px_rgba(255,255,255,0.8),-100px_0_200px_rgba(46,175,110,0.2)] origin-left"
      />

      {/* Particle Trail Container */}
      <div ref={sparklesContainerRef} className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <div 
            key={i} 
            className="sparkle-particle absolute w-8 h-8 text-aloe-green opacity-0 scale-0 -left-[10vw] drop-shadow-[0_0_10px_rgba(46,175,110,0.5)]"
          >
            <Sparkles size={32} fill="currentColor" />
          </div>
        ))}
      </div>

      {/* The Mascot */}
      <div ref={mascotRef} className="absolute w-[400px] h-[400px] md:w-[600px] md:h-[600px] -ml-[200px] select-none opacity-0">
        <div className="relative w-full h-full"> 
          <Image 
            src="/images/lulu-universe/lulu-wipe.png" 
            alt="Lulu Wipe" 
            fill
            sizes="(max-width: 768px) 100vw, 600px"
            className="object-contain"
            unoptimized
            priority
          />
        </div>
        
        {/* The Squeaky Clean Bubble */}
        <div 
          ref={bubbleRef}
          className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white px-8 py-3 rounded-full border-[5px] border-trust-navy shadow-[0_20px_40px_rgba(13,27,42,0.2)]"
        >
          <span className="text-trust-navy font-black text-lg uppercase tracking-widest whitespace-nowrap">
            *SQUEAKY CLEAN*
          </span>
          {/* Bubble tail */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-0 h-0 border-l-15 border-l-transparent border-r-15 border-r-transparent border-t-15 border-t-trust-navy" />
        </div>
      </div>
    </div>
  );
};

export default MascotWipe;
