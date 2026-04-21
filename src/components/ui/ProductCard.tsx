"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export interface ProductData {
  id: string;
  label: string;
  name: string;
  description: string;
  image: string;
  href: string;
  accent: string;
  badge?: string | null;
  bg: string;
  specs?: string[];
}

interface ProductCardProps {
  product: ProductData;
  tall?: boolean;
  priority?: boolean;
}

const ProductCard = ({ product, tall = false, priority = false }: ProductCardProps) => {
  return (
    <Link
      href={product.href}
      data-cursor="open"
      className={`group relative flex flex-col overflow-hidden rounded-2xl border border-mist card-premium card-premium-hover ${product.bg} ${
        tall ? "h-full min-h-[520px]" : "min-h-[280px]"
      }`}
    >
      {/* Badge */}
      {product.badge && (
        <div className="absolute top-5 left-5 z-10">
          <span
            className="text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full"
            style={{
              background: product.accent,
              color: product.id === "premium" ? "#1A1512" : "white",
            }}
          >
            {product.badge}
          </span>
        </div>
      )}

      {/* Image area */}
      <div className={`relative overflow-hidden flex-1 ${tall ? "min-h-[300px]" : "min-h-[180px]"}`}>
        <Image
          src={product.image}
          alt={product.name.replace("\n", " ")}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-contain object-center transition-transform duration-[1.2s] [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.12] p-6"
          priority={priority}
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col gap-3">
        <div>
          <p className="text-label text-ink-light mb-2">{product.label}</p>
          <h3
            className="font-heading font-black text-espresso text-2xl leading-tight tracking-tight"
            style={{ whiteSpace: "pre-line" }}
          >
            {product.name}
          </h3>
        </div>

        <p className="text-warm-gray text-sm leading-relaxed line-clamp-2">
          {product.description}
        </p>

        {/* Arrow link */}
        <div className="mt-2 flex items-center gap-2 text-sage font-bold text-[11px] uppercase tracking-widest">
          <span>Learn more</span>
          <ArrowUpRight
            size={13}
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </div>
      </div>

      {/* Hover border highlight */}
      <div
        className="absolute inset-0 rounded-2xl border-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ borderColor: product.accent }}
      />
    </Link>
  );
};

export default ProductCard;
