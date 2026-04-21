import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Terms of Service | Lulu Tissues",
};

export default function TermsPage() {
  return (
    <main className="bg-ivory min-h-screen">
      <Navbar />
      <div className="container-site pt-40 pb-24">
        <h1 className="text-5xl font-heading font-black text-espresso mb-8 uppercase">Terms of Service</h1>
        <div className="prose prose-sage max-w-3xl text-warm-gray space-y-6">
          <p>Last Updated: April 2026</p>
          <p>By using this website, you agree to comply with our institutional wholesale and retail guidelines.</p>
          <h2 className="text-2xl font-bold text-espresso">1. Reselling</h2>
          <p>Lulu Tissues are strictly for resale through authorized distributors. Unauthorized white-labeling is prohibited.</p>
          <h2 className="text-2xl font-bold text-espresso">2. Brand Usage</h2>
          <p>The Lulu Mascot and branding are trademarks of lulu-tissues Zimbabwe.</p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
