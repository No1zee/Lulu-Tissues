import Link from "next/link";
import ProductContent from "./ProductContent";

const PRODUCTS = {
  aloe: {
    name: "Pure Aloe Infusion",
    label: "The Signature",
    description: "Our flagship range featuring micro-encapsulated Aloe Vera Glabrata. Triple-ply 100% virgin pulp engineered for surgical-grade softness and dermatological safety.",
    specs: ["100% Virgin Pulp", "Triple-Ply Comfort", "Aloe Vera Infused", "Hypoallergenic"],
    image: "/images/products/aloe-10-pack.png",
    bg: "bg-sage/10",
    accent: "text-sage"
  },
  premium: {
    name: "Soft Premium",
    label: "The Premium",
    description: "The executive standard. Features high-definition quilted embossing and ultra-dense fibers for a luxury hotel feel in your own home.",
    specs: ["Micro-Quilted", "Executive Grade", "Extra Absorbtion", "Lint-Free"],
    image: "/images/products/macro-executive.png",
    bg: "bg-cream",
    accent: "text-gold"
  },
  value: {
    name: "Everyday Value",
    label: "The Essential",
    description: "Strength meeting affordability. Double-ply reliability designed for high-traffic families who refuse to compromise on skin health.",
    specs: ["Economical Pack", "Double-Ply", "Strength-Tested", "Soft-Touch"],
    image: "/images/products/aloe-2-pack.png",
    bg: "bg-parchment",
    accent: "text-stone"
  },
  institutional: {
    name: "Institutional Bulk Supply",
    label: "The Industrial",
    description: "Maximum efficiency for large-scale operations. Our institutional range is optimized for high-traffic environments, offering consistent quality and superior yield per roll.",
    specs: ["Bulk Packaging", "High Capacity", "Cost Optimized", "Industrial Strength"],
    image: "/images/products/macro-wipe.png",
    bg: "bg-espresso/5",
    accent: "text-espresso"
  }
};

export async function generateStaticParams() {
  return [
    { id: 'aloe' },
    { id: 'premium' },
    { id: 'value' },
    { id: 'institutional' }
  ];
}

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = PRODUCTS[id as keyof typeof PRODUCTS];

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-ivory">
        <div className="text-center">
          <h1 className="text-4xl font-heading font-black mb-4">Product Not Found</h1>
          <Link href="/products" className="text-sage hover:underline">Back to Range</Link>
        </div>
      </div>
    );
  }

  return <ProductContent id={id} product={product} />;
}
