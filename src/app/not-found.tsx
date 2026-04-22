"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Search } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-ivory flex flex-col items-center justify-center text-center p-6">
      <Navbar />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-md"
      >
        <div className="mb-8 relative inline-block">
          <motion.div 
            animate={{ 
              rotate: [0, 10, -10, 0],
              y: [0, -5, 0]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="p-8 rounded-full bg-sage/10 text-sage"
          >
            <Search size={64} strokeWidth={1.5} />
          </motion.div>
          <div className="absolute -top-2 -right-2 bg-espresso text-ivory text-[10px] font-black px-2 py-1 rounded-full">
            404
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-heading font-black text-espresso mb-4 italic">
          Lost in the <span className="text-sage">Softness?</span>
        </h1>
        <p className="text-warm-gray text-lg mb-12 leading-relaxed">
          The page you&apos;re looking for has folded away. Let&apos;s get you back to the purity of our collection.
        </p>

        <div className="flex flex-col gap-4">
          <Link 
            href="/" 
            className="btn-primary bg-espresso text-white py-5 rounded-full hover:bg-black transition-all flex items-center justify-center gap-3"
          >
            <ArrowLeft size={18} />
            Back to Home
          </Link>
          <Link 
            href="/products" 
            className="btn-outline border-black/10 text-espresso py-5 rounded-full hover:bg-black/5 transition-all"
          >
            View Our Range
          </Link>
        </div>
      </motion.div>

      {/* Cinematic Watermark */}
      <div className="absolute bottom-10 left-10 opacity-[0.05] pointer-events-none select-none text-[10px] font-black uppercase tracking-[0.5em] text-espresso">
        Pure. Soft. Zimbabwe.
      </div>
    </main>
  );
}
