"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, Landmark, Truck, CheckCircle2, ChevronRight, Loader2, ArrowUpRight } from "lucide-react";
import { Counter } from "@/components/ui/Counter";

const METRICS = [
  { value: "500+", label: "Active Partners" },
  { value: "36", label: "Cities Covered" },
  { value: "12yr", label: "Average Tenure" },
  { value: "99%", label: "Order Fulfilment" },
];

const PILLARS = [
  {
    icon: Building2,
    title: "Institutional Supply",
    desc: "Bespoke bulk contracts for hospitals, schools, and government offices across Zimbabwe.",
  },
  {
    icon: Truck,
    title: "Reliable Logistics",
    desc: "National distribution network with real-time tracking. Your shelves stay full.",
  },
  {
    icon: Landmark,
    title: "The Legacy Brand",
    desc: "Partner with a brand Zimbabweans already know, trust, and choose by name.",
  },
];

const PARTNER_TYPES = ["Wholesaler", "Distributor", "Institutional"];

const PartnershipHub = () => {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [partnerType, setPartnerType] = useState("Wholesaler");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
      setTimeout(() => setStatus("idle"), 5000);
    }, 1600);
  };

  return (
    <section
      id="partner"
      className="relative overflow-hidden bg-dark-base py-20 md:py-32 lg:py-40"
    >
      {/* Subtle diagonal texture */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.035] bg-[url('data:image/svg+xml,%3Csvg_width=\'40\'_height=\'40\'_viewBox=\'0_0_40_40\'_xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg_fill=\'%23FAF9F6\'_fill-opacity=\'1\'_fill-rule=\'evenodd\'%3E%3Cpath_d=\'M0_40L40_0H20L0_20M40_40V20L20_40\'/%3E%3C/g%3E%3C/svg%3E')]"
      />

      <div className="container-site relative z-10">
        {/* Top metrics bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-0 mb-20 md:mb-28 border border-dark-border"
        >
          {METRICS.map((m, i) => (
            <div
              key={m.label}
              className={`flex flex-col gap-1 p-6 md:p-8 ${i < 3 ? "border-r border-dark-border" : ""}`}
            >
              <Counter
                value={m.value}
                className="font-heading font-black tracking-tighter text-cream text-3xl md:text-5xl"
              />
              <span
                className="text-[10px] font-bold tracking-[0.22em] uppercase text-ink-light"
              >
                {m.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Main grid — copy + form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">

          {/* LEFT — Copy */}
          <div>
            <motion.span
              className="block text-[10px] font-bold tracking-[0.3em] uppercase mb-6 text-sage-light"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              B2B &amp; Wholesale
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-heading font-black tracking-tighter mb-8 text-cream uppercase text-4xl md:text-6xl lg:text-7xl leading-[0.95]"
            >
              Scale With<br />
              <span className="text-sage-light">The Leader.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="text-base leading-relaxed mb-14 max-w-[440px] text-ink-light"
            >
              We don&apos;t just provide tissues. We provide the infrastructure for hygiene
              at scale — bespoke contracts, national logistics, and the support of
              Zimbabwe&apos;s most recognised household brand behind you.
            </motion.p>

            {/* Pillars */}
            <div className="flex flex-col gap-8">
              {PILLARS.map((pillar, i) => (
                <motion.div
                  key={pillar.title}
                  className="flex gap-5 items-start group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.65 }}
                >
                  <div
                    className="shrink-0 w-11 h-11 rounded-xl flex items-center justify-center border border-dark-border bg-dark-surface transition-colors duration-300 group-hover:border-sage text-sage-light"
                  >
                    <pillar.icon size={18} />
                  </div>
                  <div>
                    <h4
                      className="font-bold text-base mb-1 text-cream"
                    >
                      {pillar.title}
                    </h4>
                    <p
                      className="text-sm leading-relaxed text-ink-light"
                    >
                      {pillar.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT — Form panel */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className="relative rounded-2xl overflow-hidden p-8 md:p-10 bg-dark-surface border border-dark-border"
            >
              {/* Success state */}
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.92 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center justify-center text-center py-16 gap-5"
                  >
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center bg-sage/15 text-sage-light"
                    >
                      <CheckCircle2 size={32} />
                    </div>
                    <div>
                      <h3
                        className="font-heading font-black text-2xl mb-2 text-cream"
                      >
                        Application Received.
                      </h3>
                      <p className="text-sm text-ink-light">
                        Our B2B team will be in touch within 24 hours to discuss
                        bulk pricing and logistics.
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {/* Form header */}
                    <div className="mb-8 pb-8 border-b border-dark-border">
                      <p
                        className="text-[10px] font-bold tracking-[0.25em] uppercase mb-2 text-sage-light"
                      >
                        Partner Application
                      </p>
                      <h3
                        className="font-heading font-black text-xl tracking-tight text-cream"
                      >
                        Become a Partner
                      </h3>
                      <p
                        className="text-sm mt-2 text-ink-light"
                      >
                        Ready to supply your region? Let&apos;s talk business.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <FormField
                          id="partner-name"
                          label="Full Name"
                          placeholder="Jane Chigumba"
                          disabled={status === "submitting"}
                        />
                        <FormField
                          id="business-name"
                          label="Business Name"
                          placeholder="ABC Wholesale"
                          disabled={status === "submitting"}
                        />
                      </div>
                      <FormField
                        id="partner-email"
                        label="Email Address"
                        placeholder="jane@business.co.zw"
                        type="email"
                        disabled={status === "submitting"}
                      />

                      {/* Partner type selector */}
                      <div>
                        <label
                          className="block text-[10px] font-bold tracking-[0.22em] uppercase mb-3 text-ink-light"
                        >
                          Partner Type
                        </label>
                        <div className="flex flex-wrap gap-2">
                          {PARTNER_TYPES.map((type) => (
                            <button
                              key={type}
                              type="button"
                              onClick={() => setPartnerType(type)}
                              disabled={status === "submitting"}
                              className={`px-4 py-2.5 rounded-lg text-[10px] font-bold tracking-[0.18em] uppercase transition-all duration-300 border ${
                                partnerType === type
                                  ? "bg-sage text-white border-sage"
                                  : "bg-dark-base text-ink-light border-dark-border"
                              }`}
                            >
                              {type}
                            </button>
                          ))}
                        </div>
                      </div>

                      <button
                        type="submit"
                        disabled={status === "submitting"}
                        className="mt-4 w-full py-4 rounded-xl font-bold text-[11px] uppercase tracking-widest flex items-center justify-center gap-3 transition-all duration-350 disabled:opacity-60 bg-sage hover:bg-sage-deep text-white"
                      >
                        {status === "submitting" ? (
                          <>
                            Processing{" "}
                            <Loader2 size={15} className="animate-spin" />
                          </>
                        ) : (
                          <>
                            Submit Application{" "}
                            <ChevronRight size={15} />
                          </>
                        )}
                      </button>

                      <p
                        className="text-center text-[9px] font-bold tracking-widest uppercase mt-1 text-dark-border"
                      >
                        SSL Encrypted · Confidential
                      </p>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Floating trust note */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-5 flex items-center gap-3 px-2"
            >
              <span
                className="text-[10px] font-bold tracking-[0.2em] uppercase text-ink-light"
              >
                Already a partner?
              </span>
              <a
                href="/business/login"
                className="text-[10px] font-bold tracking-[0.2em] uppercase flex items-center gap-1 transition-colors duration-300 text-sage-light hover:text-sage"
              >
                Partner portal <ArrowUpRight size={11} />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const FormField = ({
  id,
  label,
  placeholder,
  type = "text",
  disabled = false,
}: {
  id: string;
  label: string;
  placeholder: string;
  type?: string;
  disabled?: boolean;
}) => (
  <div>
    <label
      htmlFor={id}
      className="block text-[10px] font-bold tracking-[0.22em] uppercase mb-2 text-ink-light"
    >
      {label}
    </label>
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      disabled={disabled}
      required
      className="w-full px-4 py-3.5 rounded-xl text-sm font-medium focus:outline-none transition-all duration-300 disabled:opacity-50 bg-dark-base border-[1.5px] border-dark-border text-cream focus:border-sage focus:ring-3 focus:ring-sage/12"
    />
  </div>
);

export default PartnershipHub;
