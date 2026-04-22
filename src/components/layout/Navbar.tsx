"use client";

import Link from "next/link";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Logo from "../ui/Logo";

const NAV_LINKS = [
  { label: "The Range", href: "/products" },
  { label: "Our Story", href: "/story" },
  { label: "Community", href: "/community" },
  { label: "Partners", href: "/business" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-[0.8s] ease-[cubic-bezier(0.16,1,0.3,1)] ${
          scrolled
            ? "glass-nav py-3 mx-auto mt-4 w-[95%] rounded-full shadow-[0_8px_32px_rgba(26,21,18,0.08)] border border-white/20"
            : "bg-transparent py-6 w-full"
        }`}
      >
        <div className="container-site flex items-center justify-between gap-8">

          {/* Logo */}
          <Link href="/" className="relative z-10 shrink-0 group">
            <Logo className="w-[52px] h-[38px] transition-opacity duration-300 group-hover:opacity-80" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10" aria-label="Primary navigation">
            {NAV_LINKS.map((link) => (
              <NavLink key={link.href} href={link.href} label={link.label} />
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/business"
              className="btn-outline text-[10px] py-3 px-6"
            >
              For Business
            </Link>
            <Link
              href="/business#partner"
              className="btn-sage text-[10px] py-3 px-6 flex items-center gap-2"
            >
              Become a Reseller
              <ArrowUpRight size={13} />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden relative z-10 w-10 h-10 flex flex-col items-center justify-center gap-[5px] group"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            <span
              className={`block h-[1.5px] bg-espresso transition-all duration-300 ${
                isOpen ? "w-6 rotate-45 translate-y-[6.5px]" : "w-6"
              }`}
            />
            <span
              className={`block h-[1.5px] bg-espresso transition-all duration-300 ${
                isOpen ? "w-6 -rotate-45 -translate-y-[6.5px]" : "w-5"
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-ivory lg:hidden"
          >
            {/* Inner content */}
            <motion.nav
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="flex flex-col justify-center h-full px-8 pt-24 pb-12 gap-2"
            >
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.07 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block py-4 text-5xl font-heading font-black text-espresso uppercase tracking-tighter border-b border-mist hover:text-sage transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45 }}
                className="mt-10 flex flex-col gap-4"
              >
                <Link
                  href="/business#partner"
                  onClick={() => setIsOpen(false)}
                  className="btn-sage w-full text-sm py-4 justify-center"
                >
                  Become a Reseller
                </Link>
                <Link
                  href="/business"
                  onClick={() => setIsOpen(false)}
                  className="btn-outline w-full text-sm py-4 justify-center"
                >
                  For Business
                </Link>
              </motion.div>

              {/* Footer detail */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.55 }}
                className="mt-auto text-label text-ink-light pt-8"
              >
                Harare, Zimbabwe · Est. 1992
              </motion.p>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const NavLink = ({ href, label }: { href: string; label: string }) => (
  <Link
    href={href}
    className="text-label text-warm-gray hover:text-espresso link-underline transition-colors duration-300"
  >
    {label}
  </Link>
);

export default Navbar;
