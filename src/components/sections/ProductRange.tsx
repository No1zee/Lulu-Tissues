"use client";


import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import ProductCard, { type ProductData } from "../ui/ProductCard";

const PRODUCTS: ProductData[] = [
  {
    id: "aloe",
    label: "The Signature",
    name: "Aloe Vera\nRange",
    description:
      "Infused with Aloe Vera Glabrata at a microscopic level. Triple-ply softness with every wipe — and dermatological care your skin will thank you for.",
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
    description:
      "Executive-grade micro-quilted embossing. Engineered for the guest bathroom, designed for daily indulgence.",
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
    description:
      "Family strength, household reliability. Because every roll counts when you&apos;re looking after yours.",
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
    description:
      "Built for hospitals, hotels, schools, and offices that can&apos;t afford a shortfall. 500+ active partners nationwide.",
    image: "/images/products/macro-wipe.png",
    href: "#partner",
    accent: "var(--color-espresso)",
    badge: "B2B",
    bg: "bg-cream",
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.07,
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

export const ProductRange = () => {
  return (
    <section id="range" className="relative section-padding bg-ivory">
      <div className="container-site">

        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-20">
          <div>
            <span className="text-label-sage block mb-4">The Range</span>
            <h2 className="text-section-title text-espresso max-w-[480px]">
              Crafted for<br />
              <span
                className="text-sage font-display italic font-semibold"
              >
                Every Moment.
              </span>
            </h2>
          </div>
          <p className="text-warm-gray text-base leading-relaxed max-w-[320px] md:text-right">
            Four distinct ranges — each designed with purpose,
            crafted with care, and trusted across Zimbabwe.
          </p>
        </div>

        {/* Asymmetric product grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">

          {/* Card 1 — Aloe Vera, large portrait left */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="md:col-span-5 md:row-span-2"
          >
            <ProductCard product={PRODUCTS[0]} tall priority />
          </motion.div>

          {/* Card 2 — Premium, wide landscape top-right */}
          <motion.div
            custom={1}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="md:col-span-7"
          >
            <ProductCard product={PRODUCTS[1]} />
          </motion.div>

          {/* Card 3 — Everyday Value, wide landscape bottom-right */}
          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="md:col-span-4"
          >
            <ProductCard product={PRODUCTS[2]} />
          </motion.div>

          {/* Card 4 — Institutional, right */}
          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="md:col-span-3"
          >
            <ProductCard product={PRODUCTS[3]} />
          </motion.div>
        </div>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mt-12 flex justify-center"
        >
          <Link
            href="/products"
            className="btn-outline group px-10 py-4"
          >
            View All Products
            <ArrowUpRight
              size={13}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductRange;
