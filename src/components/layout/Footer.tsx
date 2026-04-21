"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";
import Logo from "../ui/Logo";

const RANGE_LINKS = [
  { label: "Aloe Vera Range", href: "/products/aloe" },
  { label: "Soft Premium", href: "/products/premium" },
  { label: "Everyday Value", href: "/products/value" },
  { label: "Institutional Supply", href: "/products/institutional" },
];

const PARTNER_LINKS = [
  { label: "Wholesale Funnel", href: "/business" },
  { label: "Regional Distributors", href: "/business/distributors" },
  { label: "Clinics & Schools", href: "/business/institutions" },
  { label: "Partner Portal", href: "/business/login" },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="relative overflow-hidden bg-forest text-cream pt-24"
    >
      {/* Cinematic Branding Watermark */}
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 select-none pointer-events-none opacity-[0.03] whitespace-nowrap">
        <h2 className="text-[35vw] font-black font-heading leading-none tracking-tighter">
          LULU
        </h2>
      </div>

      <div className="container-site relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 pb-24">
          
          {/* Brand & Social */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 space-y-10"
          >
            <div className="space-y-6">
              <Link href="/" className="group inline-block">
                <Logo className="w-16 transition-transform duration-500 group-hover:scale-110" variant="white" />
              </Link>
              <p className="text-xl leading-relaxed text-ivory/60 max-w-[320px] font-body italic">
                Defining the standard of softness in Zimbabwe since 1992.
              </p>
            </div>

            <div className="flex gap-4">
              {[
                { icon: <Facebook size={18} />, label: "Facebook" },
                { icon: <Instagram size={18} />, label: "Instagram" },
                { icon: <Twitter size={18} />, label: "Twitter / X" },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  data-cursor="open"
                  aria-label={s.label}
                  className="w-12 h-12 rounded-full flex items-center justify-center border border-ivory/10 hover:border-sage hover:bg-sage/10 transition-all duration-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>

            <div className="bg-espresso/20 p-6 rounded-2xl border border-ivory/5 inline-flex items-center gap-4">
              <span className="text-2xl">🇿🇼</span>
              <div>
                <p className="text-[9px] font-black uppercase tracking-[0.2em] text-sage">Proudly</p>
                <p className="text-sm font-bold text-cream">100% Zimbabwean</p>
              </div>
            </div>
          </motion.div>

          {/* Navigation Groups */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="space-y-8"
            >
              <h5 className="text-[11px] font-black uppercase tracking-[0.3em] text-sage">Our Collections</h5>
              <ul className="space-y-5">
                {RANGE_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-base text-ivory/40 hover:text-cream hover:translate-x-1 inline-block transition-all duration-300">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="space-y-8"
            >
              <h5 className="text-[11px] font-black uppercase tracking-[0.3em] text-sage">B2B Solutions</h5>
              <ul className="space-y-5">
                {PARTNER_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-base text-ivory/40 hover:text-cream hover:translate-x-1 inline-block transition-all duration-300">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Contact & CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="lg:col-span-3 space-y-10"
          >
            <div className="space-y-6">
              <h5 className="text-[11px] font-black uppercase tracking-[0.3em] text-sage">Inquiries</h5>
              <div className="space-y-4">
                <a href="mailto:hello@lulutissues.co.zw" className="flex items-center gap-3 text-lg text-ivory/60 hover:text-cream transition-colors group">
                  <Mail size={18} className="text-sage group-hover:scale-110 transition-transform"/>
                  hello@lulutissues.co.zw
                </a>
                <a href="tel:+263771234567" className="flex items-center gap-3 text-lg text-ivory/60 hover:text-cream transition-colors group">
                  <Phone size={18} className="text-sage group-hover:scale-110 transition-transform"/>
                  +263 77 123 4567
                </a>
              </div>
            </div>

            <button 
              onClick={scrollToTop}
              className="p-6 rounded-full border border-ivory/10 hover:border-sage hover:bg-sage/10 transition-all group"
            >
              <ArrowUpRight size={24} className="transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1" />
            </button>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="py-12 border-t border-ivory/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[11px] font-black uppercase tracking-[0.2em] text-ivory/20">
            © {new Date().getFullYear()} Lulu Tissues Zimbabwe.
          </p>
          <div className="flex gap-10">
            <Link href="/privacy" className="text-[11px] font-black uppercase tracking-[0.2em] text-ivory/20 hover:text-sage transition-colors">Privacy</Link>
            <Link href="/terms" className="text-[11px] font-black uppercase tracking-[0.2em] text-ivory/20 hover:text-sage transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
