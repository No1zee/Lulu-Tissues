"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Counter } from "@/components/ui/Counter";

const MARQUEE_ITEMS = [
  "Save the Day, Softly",
  "Triple-Ply Core",
  "100% Zim Owned",
  "Aloe Vera Infused",
  "Trusted Since 1992",
  "1M+ Rolls Shipped",
  "Save the Day, Softly",
  "Triple-Ply Core",
  "100% Zim Owned",
  "Aloe Vera Infused",
  "Trusted Since 1992",
  "1M+ Rolls Shipped",
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
};

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeInVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

const Hero = () => {
  const containerRef = useRef<HTMLElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  // ── Parallax logic ───────────────────────────────────────
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // ── 3D Tilt logic ────────────────────────────────────────
  const xTilt = useMotionValue(0);
  const yTilt = useMotionValue(0);

  const mouseXSpring = useSpring(xTilt);
  const mouseYSpring = useSpring(yTilt);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageContainerRef.current) return;
    const rect = imageContainerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    xTilt.set(xPct);
    yTilt.set(yPct);
  };

  const handleMouseLeave = () => {
    xTilt.set(0);
    yTilt.set(0);
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-dvh bg-ivory overflow-hidden flex flex-col"
    >
      {/* ── Background texture ───────────────────────────────── */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231A1512' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* ── Subtle warm gradient overlay ─────────────────────── */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 70% 50%, rgba(201,162,85,0.04) 0%, transparent 70%)",
        }}
      />

      {/* ── Main grid ────────────────────────────────────────── */}
      <div className="container-site flex-1 flex items-center pt-28 pb-16 md:pt-32 md:pb-20">
        <div className="w-full grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-center">

          {/* LEFT — Copy column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative z-10 max-w-[640px]"
          >
            {/* Eyebrow */}


            {/* Headline */}
            <motion.div className="mb-6">
              <h1 className="text-hero text-espresso flex flex-col leading-[0.85]">
                <div className="overflow-hidden">
                  <motion.span 
                    variants={fadeUpVariant} 
                    className="inline-block"
                  >
                    Softness
                  </motion.span>
                </div>
                <div className="overflow-hidden">
                  <motion.span 
                    variants={fadeUpVariant}
                    className="inline-block"
                  >
                    <span
                      className="italic"
                      style={{ 
                        fontFamily: "var(--font-display)", 
                        fontWeight: 300,
                        textTransform: "lowercase",
                        letterSpacing: "-0.01em"
                      }}
                    >
                      is a
                    </span>
                  </motion.span>{" "}
                  <motion.span 
                    variants={fadeUpVariant}
                    className="inline-block"
                  >
                    Super&shy;power.
                  </motion.span>
                </div>
              </h1>
            </motion.div>

            {/* Rule */}
            <motion.div
              variants={fadeInVariant}
              className="divider-rule mb-8"
            />

            {/* Body */}
            <motion.p
              variants={fadeUpVariant}
              className="text-warm-gray text-lg md:text-xl leading-relaxed mb-10 max-w-[460px]"
            >
              From big nights out to unexpected office mishaps — we&apos;ve got you
              covered. Zimbabwe&apos;s strongest, softest tissue, with triple-ply
              strength and aloe vera care in every sheet.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUpVariant}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/products" className="btn-primary group">
                Shop the Range
                <ArrowRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
              <Link href="#partner" className="btn-outline group">
                For Business
                <ArrowUpRight
                  size={13}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </motion.div>

            {/* Trust strip */}
            <motion.div
              variants={fadeInVariant}
              className="mt-14 pt-8 border-t border-mist flex flex-wrap gap-x-10 gap-y-3"
            >
              {[
                { value: "1M+", label: "Rolls Shipped" },
                { value: "500+", label: "Active Partners" },
                { value: "100%", label: "Zim Owned" },
              ].map((s) => (
                <div key={s.label} className="flex flex-col gap-0.5">
                  <Counter 
                    value={s.value} 
                    className="text-2xl font-heading font-black text-espresso tracking-tight" 
                  />
                  <span className="text-label text-ink-light">{s.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT — Product hero image */}
          <motion.div
            style={{ y, opacity }}
            className="relative hidden lg:flex items-center justify-center pt-10"
          >
            {/* Frame with 3D Tilt */}
            <motion.div 
              ref={imageContainerRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }}
              initial={{ opacity: 0, scale: 0.95, x: 40 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-[420px] xl:w-[480px] aspect-[3/4] rounded-[32px] bg-cream border border-mist shadow-[var(--shadow-product)] cursor-none group"
            >
              <div 
                className="absolute inset-0 rounded-[32px] overflow-hidden"
                style={{ transform: "translateZ(50px)" }}
              >
                <Image
                  src="/images/hero-product.png"
                  alt="Lulu Premium Tissue — editorial product shot"
                  fill
                  sizes="480px"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  priority
                />
                {/* Overlay gradient for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-cream/30 via-transparent to-transparent" />
              </div>

              {/* Internal shadow simulation */}
              <div 
                className="absolute inset-0 pointer-events-none rounded-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: "radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,255,255,0.15) 0%, transparent 60%)"
                }}
              />
            </motion.div>

            {/* Floating product detail card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -bottom-6 -left-12 glass-card rounded-2xl p-5 max-w-[200px] shadow-[var(--shadow-card)]"
            >
              <p className="text-label text-sage mb-1">Hero Product</p>
              <p className="text-espresso font-heading font-bold text-sm leading-snug">
                Aloe Vera Triple-Ply Soft
              </p>
              <p className="text-ink-light text-xs mt-1.5">Available in 2, 4 & 10 packs</p>
            </motion.div>

            {/* Floating badge — top right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.3, duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
              className="absolute -top-4 -right-8 w-[88px] h-[88px] rounded-full bg-sage flex flex-col items-center justify-center text-white shadow-[var(--shadow-sage)]"
            >
              <span className="text-[11px] font-black uppercase tracking-wider text-center leading-tight">
                #1 in<br />Zimbabwe
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ── Scrolling marquee ────────────────────────────────── */}
      <div
        className="relative border-t border-mist bg-cream overflow-hidden py-4"
        aria-hidden
      >
        <div className="flex animate-marquee whitespace-nowrap">
          <div className="flex shrink-0">
            {MARQUEE_ITEMS.map((item, i) => (
              <span
                key={i}
                className="text-label text-ink-light px-8 flex items-center gap-8"
              >
                {item}
                <span className="w-1.5 h-1.5 rounded-full bg-sage inline-block" />
              </span>
            ))}
          </div>
          <div className="flex shrink-0">
            {MARQUEE_ITEMS.map((item, i) => (
              <span
                key={`dup-${i}`}
                className="text-label text-ink-light px-8 flex items-center gap-8"
              >
                {item}
                <span className="w-1.5 h-1.5 rounded-full bg-sage inline-block" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
