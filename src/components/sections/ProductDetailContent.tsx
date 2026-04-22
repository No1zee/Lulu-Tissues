"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowLeft, Package, Sparkles, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";

interface Product {
  name: string;
  label: string;
  description: string;
  specs: string[];
  image: string;
  bg: string;
  accent: string;
}

export default function ProductDetailContent({ 
  product, 
  id 
}: { 
  product: Product; 
  id: string 
}) {
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
                <Link href="/business#partner" className="btn-primary flex-1 text-center bg-espresso text-white py-5 rounded-full hover:bg-black transition-all">
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
