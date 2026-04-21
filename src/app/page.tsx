import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import { ProductRange } from "@/components/sections/ProductRange";
import { AnatomyOfSoftness } from "@/components/sections/AnatomyOfSoftness";
import { LifestyleProof } from "@/components/sections/LifestyleProof";
import PartnershipHub from "@/components/sections/PartnershipHub";
import CommunityHub from "@/components/sections/CommunityHub";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden flex flex-col gap-24 lg:gap-40">
      <Navbar />
      <Hero />
      <ProductRange />
      <AnatomyOfSoftness />
      <LifestyleProof />
      <CommunityHub />
      <PartnershipHub />
      <Footer />
    </main>
  );
}
