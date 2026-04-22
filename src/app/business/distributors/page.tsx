"use client";

import { motion } from "framer-motion";
import { Truck, Globe2, BarChart3, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";

export default function DistributorsPage() {
  return (
    <main className="min-h-screen bg-ivory">
      <Navbar />
      
      <section className="pt-32 pb-20">
        <div className="container-site">
          <Link href="/business" className="inline-flex items-center text-warm-gray hover:text-espresso transition-colors mb-12">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Business Solutions
          </Link>

          <div className="max-w-[800px]">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-label-sage block mb-6"
            >
              Supply Chain Partners
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-heading font-black text-espresso leading-tight mb-8"
            >
              Fueling Regional 
              <span className="text-sage italic ml-2">Growth.</span>
            </motion.h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              {
                icon: <Truck className="w-6 h-6" />,
                title: "Logistics Support",
                desc: "Direct integration with our factory distribution fleet for rapid restocking."
              },
              {
                icon: <Globe2 className="w-6 h-6" />,
                title: "Territory Protection",
                desc: "Exclusive distribution rights for verified regional wholesalers."
              },
              {
                icon: <BarChart3 className="w-6 h-6" />,
                title: "Margin Optimization",
                desc: "Tiered pricing models designed to ensure distributor profitability."
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + (i * 0.1) }}
                className="p-8 rounded-3xl bg-white shadow-sm border border-black/5"
              >
                <div className="p-4 rounded-2xl bg-sage/10 text-sage w-fit mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-warm-gray leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 p-12 rounded-[3rem] bg-sage text-white text-center">
            <h2 className="text-3xl font-heading font-black mb-8 italic">Become a Distributor</h2>
            <p className="mb-12 text-mint-light max-w-[600px] mx-auto text-lg leading-relaxed">
              We are currently expanding our footprint across the SADC region. Join the 
              fastest-growing personal hygiene brand in Zimbabwe.
            </p>
            <Link href="/business#contact" className="btn-primary bg-white text-sage px-12 py-5 rounded-full font-black hover:bg-ivory transition-all inline-block">
              Apply for Distribution
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
