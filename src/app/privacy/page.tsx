import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Privacy Policy | Lulu Tissues",
};

export default function PrivacyPage() {
  return (
    <main className="bg-ivory min-h-screen">
      <Navbar />
      <div className="container-site pt-40 pb-24">
        <h1 className="text-5xl font-heading font-black text-espresso mb-8 uppercase">Privacy Policy</h1>
        <div className="prose prose-sage max-w-3xl text-warm-gray space-y-6">
          <p>Last Updated: April 2026</p>
          <p>Lulu Tissues is committed to protecting your privacy. We collect minimal information required to process wholesale applications and reseller inquiries.</p>
          <h2 className="text-2xl font-bold text-espresso">1. Data Collection</h2>
          <p>We collect name, contact information, and business registration details when you apply to become a reseller.</p>
          <h2 className="text-2xl font-bold text-espresso">2. Use of Information</h2>
          <p>Data is used purely for institutional vetting and communication regarding bulk orders.</p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
