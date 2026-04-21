"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

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
  const triggerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top top",
        end: `+=${SCIENCE_ITEMS.length * 150}%`,
        pin: true,
        pinSpacing: true,
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });

    // Animate Header Reveal
    tl.fromTo(
      ".science-header",
      { opacity: 0, x: -30 },
      { opacity: 1, x: 0, duration: 1 },
      0
    );

    // Animate the sequence of science blocks
    SCIENCE_ITEMS.forEach((_, i) => {
      const block = `.science-block-${i}`;
      
      // Entrance
      tl.to(block, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.5,
        ease: "power2.out",
      });

      // Exit (if not the last item)
      if (i < SCIENCE_ITEMS.length - 1) {
        tl.to(block, {
          opacity: 0,
          scale: 0.95,
          y: -50,
          duration: 1.5,
          ease: "power2.inOut",
        });
      }
    });

    // Floating text background animation
    tl.to(".floating-bg-text", {
      xPercent: -20,
      duration: 10,
      ease: "none",
    }, 0);

  }, { scope: triggerRef });

  return (
    <section
      ref={triggerRef}
      className="relative bg-dark-base text-cream overflow-hidden min-h-screen flex items-center"
    >
      {/* Decorative backdrop text */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 opacity-[0.03] pointer-events-none whitespace-nowrap z-0">
        <span className="floating-bg-text text-[30vw] font-black uppercase leading-none select-none inline-block">
          Technical Excellence Softness Purity Technical Excellence
        </span>
      </div>

      <div className="container-site relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Static Sidebar Content (Hidden on mobile scrolling stage if needed, but here we keep it) */}
          <div className="science-header lg:col-span-4 xl:col-span-5">
            <div className="space-y-6">
              <span className="text-label-sage block">Lulu Labs</span>
              <h2 className="text-section-title text-cream">
                The Anatomy <br />
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontStyle: "italic",
                    fontWeight: 400,
                  }}
                  className="text-sage"
                >
                  of Softness.
                </span>
              </h2>
              <div className="h-px w-24 bg-sage/30" />
              <p className="text-warm-gray text-base md:text-lg leading-relaxed max-w-sm">
                Engineering comfort at a microscopic level. Our three-layer system 
                redefines the relationship between strength and softness.
              </p>
            </div>
          </div>

          {/* Animating Cards Stage */}
          <div className="lg:col-span-8 xl:col-span-7 relative h-[60vh] md:h-[70vh] flex items-center">
            {SCIENCE_ITEMS.map((item, i) => (
              <div
                key={item.number}
                className={`science-block-${i} absolute inset-0 flex items-center justify-center opacity-0 scale-105 translate-y-20`}
                style={{ pointerEvents: i === 0 ? "auto" : "none" }}
              >
                <div className="relative w-full bg-espresso/40 backdrop-blur-2xl rounded-[2.5rem] border border-white/5 overflow-hidden shadow-2xl flex flex-col md:flex-row group">
                  {/* Left Side: Image */}
                  <div className="md:w-1/2 relative aspect-square md:aspect-auto overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-base/60 to-transparent md:hidden" />
                  </div>

                  {/* Right Side: Copy */}
                  <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-4xl md:text-5xl font-display text-sage opacity-40">
                        {item.number}
                      </span>
                      <span className="text-[10px] uppercase tracking-[0.3em] text-sage">
                        {item.category}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-heading font-black text-ivory mb-6 tracking-tight whitespace-pre-line">
                      {item.title}
                    </h3>
                    
                    <p className="text-cream/60 leading-relaxed text-sm md:text-base mb-8">
                      {item.body}
                    </p>

                    <div className="flex items-center gap-3">
                      <div className="h-px w-8 bg-sage/40" />
                      <span className="text-[10px] uppercase font-bold tracking-widest text-warm-gray">
                        {item.detail}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnatomyOfSoftness;
