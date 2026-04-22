"use client";

import { use } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowLeft, Package, Sparkles, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";

const PRODUCTS = {
  aloe: {
    name: "Pure Aloe Infusion",
    label: "The Signature",
    description: "Our flagship range featuring micro-encapsulated Aloe Vera Glabrata. Triple-ply 100% virgin pulp engineered for surgical-grade softness and dermatological safety.",
    specs: ["100% Virgin Pulp", "Triple-Ply Comfort", "Aloe Vera Infused", "Hypoallergenic"],
    image: "/images/products/aloe-10-pack.png",
    bg: "bg-sage/10",
    accent: "text-sage"
  },
  premium: {
    name: "Soft Premium",
    label: "The Premium",
    description: "The executive standard. Features high-definition quilted embossing and ultra-dense fibers for a luxury hotel feel in your own home.",
    specs: ["Micro-Quilted", "Executive Grade", "Extra Absorbtion", "Lint-Free"],
    image: "/images/products/macro-executive.png",
    bg: "bg-cream",
    accent: "text-gold"
  },
  value: {
    name: "Everyday Value",
    label: "The Essential",
    description: "Strength meeting affordability. Double-ply reliability designed for high-traffic families who refuse to compromise on skin health.",
    specs: ["Economical Pack", "Double-Ply", "Strength-Tested", "Soft-Touch"],
    image: "/images/products/aloe-2-pack.png",
    bg: "bg-parchment",
    accent: "text-stone"
  },
  institutional: {
    name: "Institutional Bulk Supply",
    label: "The Industrial",
    description: "Maximum efficiency for large-scale operations. Our institutional range is optimized for high-traffic environments, offering consistent quality and superior yield per roll.",
    specs: ["Bulk Packaging", "High Capacity", "Cost Optimized", "Industrial Strength"],
    image: "/images/products/macro-wipe.png",
    bg: "bg-espresso/5",
    accent: "text-espresso"
  }
};

export async function generateStaticParams() {
  return [
    { id: 'aloe' },
    { id: 'premium' },
    { id: 'value' },
    { id: 'institutional' }
  ];
}

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const product = PRODUCTS[id as keyof typeof PRODUCTS];

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-ivory">
        <div className="text-center">
          <h1 className="text-4xl font-heading font-black mb-4">Product Not Found</h1>
          <Link href="/products" className="text-sage hover:underline">Back to Range</Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-ivory">
      <Navbar />
      
      <section className="pt-32 pb-20">
        <div className="container-site">
          <Link href="/products" className="inline-flex items-center text-warm-gray hover:text-espresso transition-colors mb-12">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Collection
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Visuals */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className={`relative aspect-square rounded-[3rem] ${product.bg} overflow-hidden flex items-center justify-center p-12`}
            >
              <Image 
                src={product.image} 
                alt={product.name} 
                fill 
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain p-8 drop-shadow-2xl"
              />
              <div className="absolute top-8 left-8">
                <span className={`text-label-sage px-4 py-1.5 rounded-full border border-black/5 bg-white/50 backdrop-blur-sm`}>
                  {product.label}
                </span>
              </div>
            </motion.div>

            {/* Editorial */}
            <div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-6xl font-heading font-black text-espresso leading-tight mb-6"
              >
                {product.name}
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl text-warm-gray leading-relaxed mb-10"
              >
                {product.description}
              </motion.p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                {product.specs.map((spec, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + (i * 0.05) }}
                    className="flex items-center p-4 rounded-xl bg-white border border-black/5 shadow-sm"
                  >
                    <CheckCircle2 className={`w-5 h-5 ${id === 'premium' ? 'text-gold' : 'text-sage'} mr-3`} />
                    <span className="font-bold text-espresso">{spec}</span>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/business" className="btn-primary flex-1 text-center bg-espresso text-white py-5 rounded-full hover:bg-black transition-all">
                  Bulk Inquiry
                </Link>
                <Link href="#stockists" className="btn-outline flex-1 text-center border-black/10 text-espresso py-5 rounded-full hover:bg-black/5 transition-all">
                  Find Near Me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Detail Section */}
      <section className="section-padding bg-white">
        <div className="container-site">
           <div className="max-w-[800px] mx-auto text-center">
              <h2 className="text-3xl font-heading font-black mb-16 italic">Technical Standards</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                 <div className="flex flex-col items-center">
                    <div className="p-4 rounded-full bg-sage/10 mb-4 text-sage">
                       <Package className="w-6 h-6" />
                    </div>
                    <h4 className="font-bold mb-2">Virgin Grade</h4>
                    <p className="text-sm text-warm-gray">Fiber purity assured via 100% virgin pulp supply chains.</p>
                 </div>
                 <div className="flex flex-col items-center">
                    <div className="p-4 rounded-full bg-sage/10 mb-4 text-sage">
                       <Sparkles className="w-6 h-6" />
                    </div>
                    <h4 className="font-bold mb-2">Micro-Soft™</h4>
                    <p className="text-sm text-warm-gray">Proprietary softening process reduces friction for skin health.</p>
                 </div>
                 <div className="flex flex-col items-center">
                    <div className="p-4 rounded-full bg-sage/10 mb-4 text-sage">
                       <ShieldCheck className="w-6 h-6" />
                    </div>
                    <h4 className="font-bold mb-2">Hygiene Guard</h4>
                    <p className="text-sm text-warm-gray">Sterilized packaging ensuring clinical cleanliness upon arrival.</p>
                 </div>
              </div>
           </div>
        </div>
      </section>
    </main>
  );
}
