import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PartnershipHub from "@/components/sections/PartnershipHub";

export const metadata = {
  title: "Business Partnerships | Lulu Tissues",
  description: "B2B, Institutional Supply, and Wholesale opportunities with Zimbabwe's leading tissue brand.",
};

export default function BusinessPage() {
  return (
    <main className="relative pt-24 bg-dark-base">
      <Navbar />
      <PartnershipHub />
      <Footer />
    </main>
  );
}
