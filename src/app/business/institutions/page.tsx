"use client";

import { motion } from "framer-motion";
import { Building2, School, Landmark, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";

export default function InstitutionsPage() {
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
              className="text-label-sage block mb-6 px-4 py-1.5 rounded-full border border-sage/20 bg-sage/5 w-fit"
            >
              Institutional Care
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-heading font-black text-espresso leading-tight mb-8"
            >
              Hygiene for the 
              <span className="text-sage italic ml-2">Public Good.</span>
            </motion.h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              {
                icon: <Building2 className="w-6 h-6" />,
                title: "Clinics & Hospitals",
                desc: "Medical-grade sterilization standards for healthcare environments where hygiene is non-negotiable."
              },
              {
                icon: <School className="w-6 h-6" />,
                title: "Schools & Universities",
                desc: "Durable, high-capacity rolls designed to withstand the rigors of large student populations."
              },
              {
                icon: <Landmark className="w-6 h-6" />,
                title: "Government Entities",
                desc: "Institutional procurement compliant manufacturing with consistent high-volume delivery timelines."
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

          <div className="mt-20 p-12 rounded-[3rem] bg-espresso text-ivory flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-left">
              <h2 className="text-3xl font-heading font-black mb-4 italic">Bulk Institutional Contracts</h2>
              <p className="text-ivory/70 max-w-[500px]">
                Lulu Tissues offers prioritized manufacturing for government and NGO sectors. 
                Securing hygiene for Zimbabwe&apos;s critical infrastructure.
              </p>
            </div>
            <Link href="/business#contact" className="btn-primary bg-sage text-white px-12 py-5 rounded-full font-black hover:bg-sage/90 transition-all shrink-0">
              Procurement Request
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
