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
      className="relative overflow-hidden"
      style={{
        background: "var(--color-dark-base)",
        paddingTop: "clamp(80px,10vw,160px)",
        paddingBottom: "clamp(80px,10vw,160px)",
      }}
    >
      {/* Subtle diagonal texture */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FAF9F6' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container-site relative z-10">
        {/* Top metrics bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-0 mb-20 md:mb-28 border"
          style={{ borderColor: "var(--color-dark-border)" }}
        >
          {METRICS.map((m, i) => (
            <div
              key={m.label}
              className="flex flex-col gap-1 p-6 md:p-8"
              style={{
                borderRight: i < 3 ? "1px solid var(--color-dark-border)" : undefined,
              }}
            >
              <Counter
                value={m.value}
                className="font-heading font-black tracking-tighter"
                style={{
                  fontSize: "clamp(28px, 4vw, 48px)",
                  color: "var(--color-cream)",
                }}
              />
              <span
                className="text-[10px] font-bold tracking-[0.22em] uppercase"
                style={{ color: "var(--color-ink-light)" }}
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
              className="block text-[10px] font-bold tracking-[0.3em] uppercase mb-6"
              style={{ color: "var(--color-sage-light)" }}
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
              className="font-heading font-black tracking-tighter mb-8"
              style={{
                fontSize: "clamp(40px, 6vw, 72px)",
                lineHeight: 0.95,
                color: "var(--color-cream)",
                textTransform: "uppercase",
              }}
            >
              Scale With<br />
              <span style={{ color: "var(--color-sage-light)" }}>The Leader.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="text-base leading-relaxed mb-14 max-w-[440px]"
              style={{ color: "var(--color-ink-light)" }}
            >
              We don't just provide tissues. We provide the infrastructure for hygiene
              at scale — bespoke contracts, national logistics, and the support of
              Zimbabwe's most recognised household brand behind you.
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
                    className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center border transition-colors duration-300 group-hover:border-sage"
                    style={{ borderColor: "var(--color-dark-border)", background: "var(--color-dark-surface)" }}
                  >
                    <pillar.icon size={18} style={{ color: "var(--color-sage-light)" }} />
                  </div>
                  <div>
                    <h4
                      className="font-bold text-base mb-1"
                      style={{ color: "var(--color-cream)" }}
                    >
                      {pillar.title}
                    </h4>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "var(--color-ink-light)" }}
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
              className="relative rounded-2xl overflow-hidden p-8 md:p-10"
              style={{
                background: "var(--color-dark-surface)",
                border: "1px solid var(--color-dark-border)",
              }}
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
                      className="w-16 h-16 rounded-full flex items-center justify-center"
                      style={{ background: "rgba(67,125,88,0.15)" }}
                    >
                      <CheckCircle2 size={32} style={{ color: "var(--color-sage-light)" }} />
                    </div>
                    <div>
                      <h3
                        className="font-heading font-black text-2xl mb-2"
                        style={{ color: "var(--color-cream)" }}
                      >
                        Application Received.
                      </h3>
                      <p className="text-sm" style={{ color: "var(--color-ink-light)" }}>
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
                    <div className="mb-8 pb-8" style={{ borderBottom: "1px solid var(--color-dark-border)" }}>
                      <p
                        className="text-[10px] font-bold tracking-[0.25em] uppercase mb-2"
                        style={{ color: "var(--color-sage-light)" }}
                      >
                        Partner Application
                      </p>
                      <h3
                        className="font-heading font-black text-xl tracking-tight"
                        style={{ color: "var(--color-cream)" }}
                      >
                        Become a Partner
                      </h3>
                      <p
                        className="text-sm mt-2"
                        style={{ color: "var(--color-ink-light)" }}
                      >
                        Ready to supply your region? Let&apos;s talk business.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <FormField
                          label="Full Name"
                          placeholder="Jane Chigumba"
                          disabled={status === "submitting"}
                        />
                        <FormField
                          label="Business Name"
                          placeholder="ABC Wholesale"
                          disabled={status === "submitting"}
                        />
                      </div>
                      <FormField
                        label="Email Address"
                        placeholder="jane@business.co.zw"
                        type="email"
                        disabled={status === "submitting"}
                      />

                      {/* Partner type selector */}
                      <div>
                        <label
                          className="block text-[10px] font-bold tracking-[0.22em] uppercase mb-3"
                          style={{ color: "var(--color-ink-light)" }}
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
                              className="px-4 py-2.5 rounded-lg text-[10px] font-bold tracking-[0.18em] uppercase transition-all duration-300"
                              style={{
                                background:
                                  partnerType === type
                                    ? "var(--color-sage)"
                                    : "var(--color-dark-base)",
                                color:
                                  partnerType === type
                                    ? "white"
                                    : "var(--color-ink-light)",
                                border:
                                  partnerType === type
                                    ? "1px solid var(--color-sage)"
                                    : "1px solid var(--color-dark-border)",
                              }}
                            >
                              {type}
                            </button>
                          ))}
                        </div>
                      </div>

                      <button
                        type="submit"
                        disabled={status === "submitting"}
                        className="mt-4 w-full py-4 rounded-xl font-bold text-[11px] uppercase tracking-widest flex items-center justify-center gap-3 transition-all duration-350 disabled:opacity-60"
                        style={{
                          background: "var(--color-sage)",
                          color: "white",
                        }}
                        onMouseEnter={(e) => {
                          (e.target as HTMLButtonElement).style.background =
                            "var(--color-sage-deep)";
                        }}
                        onMouseLeave={(e) => {
                          if (status !== "submitting") {
                            (e.target as HTMLButtonElement).style.background =
                              "var(--color-sage)";
                          }
                        }}
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
                        className="text-center text-[9px] font-bold tracking-widest uppercase mt-1"
                        style={{ color: "var(--color-dark-border)" }}
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
                className="text-[10px] font-bold tracking-[0.2em] uppercase"
                style={{ color: "var(--color-ink-light)" }}
              >
                Already a partner?
              </span>
              <a
                href="/business/login"
                className="text-[10px] font-bold tracking-[0.2em] uppercase flex items-center gap-1 transition-colors duration-300"
                style={{ color: "var(--color-sage-light)" }}
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
  label,
  placeholder,
  type = "text",
  disabled = false,
}: {
  label: string;
  placeholder: string;
  type?: string;
  disabled?: boolean;
}) => (
  <div>
    <label
      className="block text-[10px] font-bold tracking-[0.22em] uppercase mb-2"
      style={{ color: "var(--color-ink-light)" }}
    >
      {label}
    </label>
    <input
      type={type}
      placeholder={placeholder}
      disabled={disabled}
      required
      className="w-full px-4 py-3.5 rounded-xl text-sm font-medium focus:outline-none transition-all duration-300 disabled:opacity-50"
      style={{
        background: "var(--color-dark-base)",
        border: "1.5px solid var(--color-dark-border)",
        color: "var(--color-cream)",
      }}
      onFocus={(e) => {
        e.target.style.borderColor = "var(--color-sage)";
        e.target.style.boxShadow = "0 0 0 3px rgba(67,125,88,0.12)";
      }}
      onBlur={(e) => {
        e.target.style.borderColor = "var(--color-dark-border)";
        e.target.style.boxShadow = "none";
      }}
    />
  </div>
);

export default PartnershipHub;
