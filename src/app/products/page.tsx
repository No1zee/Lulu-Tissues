"use client";

import { motion, Variants } from "framer-motion";
import { CheckCircle2, ShieldCheck, Zap, ArrowDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import ProductCard, { type ProductData } from "@/components/ui/ProductCard";

const PRODUCTS: ProductData[] = [
  {
    id: "aloe",
    label: "The Signature",
    name: "Aloe Vera\nRange",
    description: "Infused with Aloe Vera Glabrata at a microscopic level. Triple-ply softness with every wipe.",
    image: "/images/products/aloe-10-pack.png",
    href: "/products/aloe",
    accent: "var(--color-sage)",
    badge: "Bestseller",
    bg: "bg-sage-mist",
  },
  {
    id: "premium",
    label: "The Premium",
    name: "Soft\nPremium",
    description: "Executive-grade micro-quilted embossing. Engineered for the guest bathroom.",
    image: "/images/products/macro-executive.png",
    href: "/products/premium",
    accent: "var(--color-gold)",
    badge: "New",
    bg: "bg-cream",
  },
  {
    id: "value",
    label: "The Essential",
    name: "Everyday\nValue",
    description: "Family strength, household reliability. Because every roll counts.",
    image: "/images/products/aloe-2-pack.png",
    href: "/products/value",
    accent: "var(--color-stone)",
    badge: null,
    bg: "bg-parchment",
  },
  {
    id: "institutional",
    label: "The Institutional",
    name: "Bulk\nSupply",
    description: "Built for hospitals, hotels, schools, and offices that can't afford a shortfall.",
    image: "/images/products/macro-wipe.png",
    href: "#partner",
    accent: "var(--color-espresso)",
    badge: "B2B",
    bg: "bg-cream",
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-ivory">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="container-site relative z-10">
          <div className="max-w-[800px]">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-label-sage block mb-6 px-4 py-1.5 rounded-full border border-sage/20 bg-sage/5 w-fit"
            >
              The Full Collection
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-heading font-black text-espresso leading-[1.1] tracking-tight mb-8"
            >
              Purity in every 
              <span className="text-sage block md:inline italic ml-2">Layer.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-warm-gray leading-relaxed max-w-[540px]"
            >
              Every Lulu product is the result of obsessive engineering. 
              From Zim-owned harvests to your family home, we define 
              the standard of modern hygiene.
            </motion.p>
          </div>
        </div>

        {/* Floating background graphic */}
        <div className="absolute top-1/2 right-[-5%] -translate-y-1/2 w-[40%] aspect-square hidden lg:block opacity-[0.03] pointer-events-none">
           <Image src="/lulu-logo-hd.svg" alt="" fill className="object-contain grayscale invert" />
        </div>
      </section>

      {/* Product Mosaic */}
      <section className="pb-32">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="md:col-span-7"
            >
              <ProductCard product={PRODUCTS[0]} tall />
            </motion.div>
            
            <motion.div
              custom={1}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="md:col-span-5"
            >
              <ProductCard product={PRODUCTS[1]} tall />
            </motion.div>

            <motion.div
              custom={2}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="md:col-span-4"
            >
              <ProductCard product={PRODUCTS[2]} />
            </motion.div>

            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="md:col-span-8"
            >
              <ProductCard product={PRODUCTS[3]} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* DNA of Lulu Section */}
      <section className="section-padding bg-sage text-white">
          <div className="container-site">
             <div className="text-center mb-20">
                <span className="text-sm font-black uppercase tracking-widest text-mint-light/80 mb-4 block underline">The DNA of Lulu</span>
                <h2 className="text-4xl md:text-5xl font-heading font-black italic">Engineered for Trust.</h2>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {[
                  {
                    icon: <CheckCircle2 className="w-8 h-8 text-mint-light" />,
                    title: "100% Virgin Pulp",
                    desc: "Sourced from sustainable forests, ensuring zero recycled chemical residue for maximum safety."
                  },
                  {
                    icon: <ShieldCheck className="w-8 h-8 text-mint-light" />,
                    title: "Dermatological Care",
                    desc: "Our 'Aloe Infuse' technology is tested to be hypoallergenic and safe for the most sensitive skin."
                  },
                  {
                    icon: <Zap className="w-8 h-8 text-mint-light" />,
                    title: "Zimbabwe's Pride",
                    desc: "Wholly Zimbabwe owned and operated. Every roll contributes to local community development."
                  }
                ].map((spec, i) => (
                  <motion.div
                    key={i}
                    custom={i}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex flex-col items-center text-center group"
                  >
                    <div className="mb-6 p-5 rounded-2xl bg-white/10 group-hover:bg-white/20 transition-colors">
                       {spec.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{spec.title}</h3>
                    <p className="text-mint-light/70 text-sm leading-relaxed max-w-[280px]">
                       {spec.desc}
                    </p>
                  </motion.div>
                ))}
             </div>
          </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-espresso text-ivory">
          <div className="container-site text-center">
             <h2 className="text-4xl md:text-7xl font-heading font-black mb-12 italic tracking-tight">
                Quality you can feel.
             </h2>
             <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <Link href="#contact" className="btn-primary bg-white text-espresso px-12 py-5 rounded-full hover:bg-ivory transition-all shadow-2xl">
                    Wholesale Inquiry
                </Link>
                <Link href="/" className="btn-outline border-white/20 text-white px-12 py-5 rounded-full hover:bg-white/5 transition-all">
                    Back to Home
                </Link>
             </div>
          </div>
      </section>
    </main>
  );
}
