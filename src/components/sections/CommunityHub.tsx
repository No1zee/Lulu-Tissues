"use client";

import { motion } from "framer-motion";
import { Heart, Twitter, Instagram, MessageCircle } from "lucide-react";
import { Counter } from "@/components/ui/Counter";

const TESTIMONIALS = [
  {
    platform: "twitter",
    handle: "@HarareKing",
    avatar: "H",
    text: "Lulu Tissues really saved me this morning after that gango last night. 5 stars, no notes. #LuluSavesTheDay",
    likes: "432",
    size: "large",
  },
  {
    platform: "instagram",
    handle: "Zim_Foodie_Joy",
    avatar: "Z",
    text: "The Aloe range is so soft! Packaging looks gorgeous in my guest bathroom. ✨ Honestly never switching.",
    likes: "1.1k",
    size: "small",
  },
  {
    platform: "twitter",
    handle: "@Zim_Meme_Lord",
    avatar: "Z",
    text: "If she doesn't use Lulu, is she even the one? Stay woke guys. @LuluTissues",
    likes: "2.4k",
    size: "small",
  },
  {
    platform: "mention",
    handle: "Office_Pro_263",
    avatar: "O",
    text: "Spilled tea on my white shirt in a client meeting. One Lulu and no evidence. Best in the biz — period.",
    likes: "89",
    size: "large",
  },
];

const STATS = [
  { value: "1M+", label: "Rolls Shipped" },
  { value: "50k+", label: "Social Mentions" },
  { value: "100%", label: "Zim Owned" },
  { value: "#1", label: "Brand Trust ZW" },
];

const platformIcon = (platform: string) => {
  if (platform === "twitter") return <Twitter size={14} className="text-sky-400" />;
  if (platform === "instagram") return <Instagram size={14} className="text-pink-400" />;
  return <MessageCircle size={14} className="text-sage" />;
};

export const CommunityHub = () => {
  return (
    <section
      id="community"
      className="relative section-padding bg-ivory overflow-hidden"
    >
      <div className="container-site">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16 md:mb-20">
          <div>
            <motion.span
              className="text-label-sage block mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Social Proof
            </motion.span>
            <motion.h2
              className="text-section-title text-espresso"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              The Tissue of{" "}
              <span
                className="text-warm-gray font-display italic font-medium"
              >
                the People.
              </span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col gap-2 md:items-end"
          >
            <p className="text-warm-gray text-sm leading-relaxed max-w-[280px] md:text-right">
              Our community is loud, proud, and very relatable. Follow the conversation.
            </p>
            <span
              className="text-[10px] font-black tracking-[0.2em] uppercase text-sage"
            >
              #LuluSavesTheDay
            </span>
          </motion.div>
        </div>

        {/* Asymmetric testimonial mosaic */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 mb-20">
          {/* Large card — col 1-5 */}
          <motion.div
            className="md:col-span-5"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
          >
            <TestimonialCard item={TESTIMONIALS[0]} large />
          </motion.div>

          {/* Right column — stacked small + large */}
          <div className="md:col-span-7 flex flex-col gap-5">
            {/* Two small side by side */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.75, delay: 0.1 }}
              >
                <TestimonialCard item={TESTIMONIALS[1]} />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.75, delay: 0.18 }}
              >
                <TestimonialCard item={TESTIMONIALS[2]} />
              </motion.div>
            </div>

            {/* Wide card bottom */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, delay: 0.26 }}
            >
              <TestimonialCard item={TESTIMONIALS[3]} />
            </motion.div>
          </div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="border-t border-mist pt-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="flex flex-col gap-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35 + i * 0.07, duration: 0.65 }}
              >
                <Counter
                  value={stat.value}
                  className="font-heading font-black tracking-tighter text-espresso counter-fluid"
                />
                <span className="text-label text-ink-light">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const TestimonialCard = ({
  item,
  large = false,
}: {
  item: (typeof TESTIMONIALS)[0];
  large?: boolean;
}) => (
  <div
    data-cursor="love"
    className={`group flex flex-col gap-5 rounded-2xl border border-mist card-premium card-premium-hover h-full bg-cream transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.02] ${
      large ? "p-8" : "p-6"
    }`}
  >
    {/* Header row */}
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-black text-ivory bg-espresso"
        >
          {item.avatar}
        </div>
        <span
          className="text-sm font-bold text-espresso"
        >
          {item.handle}
        </span>
      </div>
      {platformIcon(item.platform)}
    </div>

    {/* Quote */}
    <p
      className={`leading-relaxed text-charcoal flex-1 font-display italic ${large ? "text-base" : "text-sm"}`}
    >
      &ldquo;{item.text}&rdquo;
    </p>

    {/* Likes */}
    <div className="flex items-center gap-2 text-ink-light text-xs font-bold uppercase tracking-widest">
      <Heart size={12} className="text-pink-400" fill="currentColor" />
      <span>{item.likes}</span>
    </div>
  </div>
);

export default CommunityHub;
