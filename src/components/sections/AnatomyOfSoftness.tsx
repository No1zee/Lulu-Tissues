"use client";

import { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const SCIENCE_ITEMS = [
  {
    number: "01",
    category: "Architecture",
    title: "Triple-Ply\nCore",
    body: "Engineered for maximum absorption. Each sheet layers three ultra-fine plies of pure virgin pulp, creating a microscopic sponge structure that handles anything life throws at it without compromise.",
    detail: "3 × 8gsm virgin pulp layers",
    image: "/images/products/macro-executive.png",
  },
  {
    number: "02",
    category: "Texture",
    title: "Micro-Quilted\nEmbossing",
    body: "Look closely. Our signature geometric embossing isn't decorative — it binds the plies together at load-bearing points while creating air pockets that dramatically increase tactile softness.",
    detail: "340 emboss points / cm²",
    image: "/images/products/macro-texture.png",
  },
  {
    number: "03",
    category: "Infusion",
    title: "Aloe Vera\nGlabrata",
    body: "Sourced from African aloe and infused at a microscopic fibre level. For dermatological resilience that never softens the strength. Gentle enough for sensitive skin. Strong enough for everything else.",
    detail: "Zimbabwe-sourced · hypoallergenic",
    image: "/images/products/macro-aloe.png",
  },
];

export const AnatomyOfSoftness = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const blocks = gsap.utils.toArray<HTMLElement>(".science-block");
    
    // Master Timeline for choreographed reveal
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top top",
        end: `+=${SCIENCE_ITEMS.length * 150}%`,
        pin: true,
        scrub: 0.5, // Slightly snappier scrub
        invalidateOnRefresh: true,
        fastScrollEnd: true,
      }
    });

    // Initial state: ensure all blocks are hidden except maybe the first frame
    gsap.set(blocks, { autoAlpha: 0, y: 30 });

    // Sequence each block
    blocks.forEach((block, i) => {
      const isLast = i === blocks.length - 1;
      
      // 1. Entrance 
      if (i === 0) {
        tl.to(block, { autoAlpha: 1, y: 0, duration: 1, ease: "power2.out" }, 0);
      } else {
        tl.to(block, 
          { autoAlpha: 1, y: 0, duration: 1, ease: "power2.out" }
        );
      }

      // 2. The "Active" state duration (User scrolls through the details)
      tl.to({}, { duration: 2.5 }); // Extended read time

      // 3. Exit (except for last one)
      if (!isLast) {
        tl.to(block, {
          autoAlpha: 0,
          y: -30,
          duration: 1,
          ease: "power2.in",
        });
      }
    });
  }, { scope: triggerRef });

  return (
    <div ref={triggerRef} className="relative bg-dark-base text-cream overflow-hidden">
      {/* Background texture */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.04] z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="container-site relative z-10">
        {/* Header - Stays at top or scrolls normally */}
        <div className="min-h-[60vh] flex flex-col justify-end pb-20">
          <motion.span
            className="block text-[10px] font-bold tracking-[0.3em] uppercase mb-6"
            style={{ color: "var(--color-sage-light)" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Product Science
          </motion.span>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <motion.h2
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-section-title text-cream max-w-[520px]"
            >
              The Anatomy{" "}
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontStyle: "italic",
                  fontWeight: 500,
                  color: "var(--color-sage-light)",
                }}
              >
                of Softness.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="max-w-[320px] text-sm leading-relaxed"
              style={{ color: "var(--color-ink-light)" }}
            >
              Strip away the marketing. This is the engineering behind every sheet —
              the science that makes Lulu the most trusted tissue in Zimbabwe.
            </motion.p>
          </div>
        </div>

        {/* Pinning Stage */}
        <div className="relative h-[80vh] md:h-[90vh] mb-20">
          {SCIENCE_ITEMS.map((item, i) => (
            <div 
              key={item.number} 
              className="science-block absolute inset-0 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center invisible opacity-0"
            >
              {/* Text content */}
              <div className="lg:col-start-1 lg:col-span-12 xl:col-span-5 science-content order-2 lg:order-1">
                <div className="flex items-baseline gap-5 mb-6">
                  <span className="font-heading font-black text-6xl md:text-7xl leading-none tracking-tighter text-dark-border opacity-50">
                    {item.number}
                  </span>
                  <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-sage-light">
                    {item.category}
                  </span>
                </div>
                <h3 className="font-heading font-black text-cream tracking-tighter text-4xl md:text-5xl lg:text-6xl mb-6 whitespace-pre-line leading-[0.9]">
                  {item.title}
                </h3>
                <p className="text-base md:text-lg leading-relaxed text-ink-light max-w-[480px] mb-8">
                  {item.body}
                </p>
                <div className="inline-flex items-center gap-3">
                  <span className="w-8 h-px block bg-sage" />
                  <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-sage-light">
                    {item.detail}
                  </span>
                </div>
              </div>

              {/* Image visual */}
              <div 
                className="lg:col-start-1 lg:col-span-12 xl:col-start-7 xl:col-span-6 science-image order-1 lg:order-2"
                data-cursor="inspect"
                style={{ contain: "paint" }}
              >
                <div className="relative aspect-video lg:aspect-square rounded-[2rem] overflow-hidden bg-dark-surface border border-dark-border shadow-2xl group cursor-none">
                  <Image
                    src={item.image}
                    alt={item.title.replace("\n", " ")}
                    fill
                    className="object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-[opacity,transform,filter] duration-[1.5s] ease-out"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority={i <= 1} 
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-sage/5 group-hover:opacity-0 transition-opacity duration-1000" />
                  
                  {/* S-Tier Tech Badge */}
                  <div className="absolute top-6 right-6 md:top-8 md:right-8 z-10">
                    <div className="px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-ivory/10 backdrop-blur-xl bg-ivory/5 text-[8px] md:text-[9px] font-black uppercase tracking-widest text-ivory/40">
                      Analytical View
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnatomyOfSoftness;
