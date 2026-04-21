"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const MOMENTS = [
  {
    label: "Guest Bathroom",
    image: "/images/lifestyle-bathroom.png",
    quote: "Because first impressions\nare everything.",
    span: "col-span-1 md:col-span-2 row-span-2",
    tall: true,
  },
  {
    label: "The Office",
    image: "/images/lifestyle-office.png",
    quote: "Spills happen.\nLulu handles them.",
    span: "col-span-1",
    tall: false,
  },
  {
    label: "The Family Home",
    image: "/images/products/range-aloe.png",
    quote: "Strong enough for the\nwhole household.",
    span: "col-span-1",
    tall: false,
  },
];

const USES = [
  "Guest Bathrooms",
  "Family Homes",
  "Hotel Hospitality",
  "Corporate Offices",
  "Schools & Clinics",
  "Daily Rescue Moments",
];

export const LifestyleProof = () => {
  return (
    <section
      id="lifestyle"
      className="section-padding bg-parchment overflow-hidden"
    >
      <div className="container-site">

        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div>
            <motion.span
              className="text-label-sage block mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              In Your World
            </motion.span>
            <motion.h2
              className="text-section-title text-espresso"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            >
              Softness,{" "}
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontStyle: "italic",
                  fontWeight: 500,
                }}
                className="text-warm-gray"
              >
                everywhere.
              </span>
            </motion.h2>
          </div>

          <motion.p
            className="text-warm-gray text-base leading-relaxed max-w-[300px] md:text-right"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            From the guest bathroom to the boardroom — Lulu fits every space you care about.
          </motion.p>
        </div>

        {/* Image mosaic */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          {MOMENTS.map((moment, i) => (
            <motion.div
              key={moment.label}
              data-cursor="view"
              className={`relative rounded-2xl overflow-hidden group ${moment.span} ${moment.tall ? "min-h-[500px]" : "min-h-[260px]"} bg-mist`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="absolute inset-0 scale-[1.05] transition-transform duration-[8s] ease-linear group-hover:scale-[1.18]">
                <Image
                  src={moment.image}
                  alt={moment.label}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1512]/90 via-[#1A1512]/20 to-transparent opacity-80 transition-opacity duration-700 group-hover:opacity-100" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 transform transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-2">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
                >
                  <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-cream/60 mb-2">{moment.label}</p>
                  <p
                    className="text-ivory font-heading font-black text-2xl leading-[1.1] tracking-tight"
                    style={{ whiteSpace: "pre-line" }}
                  >
                    {moment.quote}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Use-case pill strip */}
        <motion.div
          className="flex flex-wrap gap-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {USES.map((use) => (
            <span
              key={use}
              className="px-5 py-2.5 rounded-full border border-mist text-label text-warm-gray bg-cream hover:border-sage hover:text-sage transition-colors duration-300"
            >
              {use}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LifestyleProof;
