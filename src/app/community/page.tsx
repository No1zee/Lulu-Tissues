import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { CommunityHub } from "@/components/sections/CommunityHub";
import Image from "next/image";

export const metadata = {
  title: "Lulu Community | Zimbabwe's Favourite Tissue",
  description: "Join the conversation. From social mentions to nation-wide CSR initiatives, discover the people behind the softness.",
};

export default function CommunityPage() {
  return (
    <main className="relative bg-ivory">
      <Navbar />

      {/* Social Header */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="container-site relative z-10">
          <div className="max-w-3xl">
            <span className="text-label-sage block mb-6 px-1">#LuluSavesTheDay</span>
            <h1 className="text-5xl md:text-8xl font-heading font-black text-espresso tracking-tighter leading-[0.9] uppercase mb-8">
              A Brand For <br />
              <span className="text-warm-gray font-display italic font-medium lowercase tracking-normal">every Zimbabwean.</span>
            </h1>
            <p className="text-lg md:text-xl text-warm-gray leading-relaxed max-w-xl">
              From the bustling markets of Mbare to the high-rises of Harare, Lulu is common ground. See how Zimbabwe uses their favourite tissue.
            </p>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-[0.03] pointer-events-none">
          <div className="relative w-full h-full">
             <Image src="/images/products/macro-aloe.png" alt="Overlay" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Main Social Hub (Testimonials & Stats) */}
      <CommunityHub />

      {/* Impact Section */}
      <section className="py-24 md:py-40 border-t border-mist bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-xl border border-mist">
              <Image src="/images/community-impact.png" alt="Community Support" fill className="object-cover" />
            </div>
            <div className="space-y-8">
              <div>
                <span className="text-label-sage block mb-4">Lulu Gives Back</span>
                <h2 className="text-4xl font-heading font-black text-espresso tracking-tight">Supporting our local schools & clinics.</h2>
              </div>
              <p className="text-warm-gray leading-relaxed">
                Hygiene is a right, not a privilege. Through the Lulu Foundation, we supply monthly hygiene packs to clinics and rural schools across the country, ensuring that health is prioritized where it matters most.
              </p>
              <div className="flex gap-4">
                 <button className="btn-outline text-[10px] px-8 py-3">Read Impact Report</button>
                 <button className="btn-sage text-[10px] px-8 py-3">Partner with us</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
