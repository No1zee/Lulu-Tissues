import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";

export const metadata = {
  title: "Our Story | Lulu Tissues",
  description: "The legacy of Zimbabwe's most trusted tissue brand. Since 1992, we've been defined by softness and heritage.",
};

export default function StoryPage() {
  return (
    <main className="relative bg-parchment overflow-hidden">
      <Navbar />

      {/* Heritage Hero */}
      <section className="relative min-h-[80vh] flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/story-heritage.png" 
            alt="Heritage" 
            fill 
            className="object-cover opacity-20 grayscale brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-parchment via-transparent to-parchment" />
        </div>

        <div className="container-site relative z-10 text-center">
          <span className="block text-[10px] font-black tracking-[0.4em] uppercase text-sage mb-6">Established 1992</span>
          <h1 className="text-[12vw] lg:text-[10vw] font-heading font-black text-espresso leading-[0.8] tracking-tighter uppercase mb-8">
            The Legacy <br />
            <span className="font-display italic font-medium text-warm-gray normal-case tracking-normal">of Softness.</span>
          </h1>
          <p className="max-w-xl mx-auto text-lg md:text-xl text-warm-gray leading-relaxed">
            For over three decades, Lulu has been more than a product—it&apos;s a household constant across Zimbabwe.
          </p>
        </div>
      </section>

      {/* Editorial Content */}
      <section className="py-24 md:py-40 border-y border-mist">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5 space-y-12">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-6xl font-heading font-black text-espresso tracking-tighter leading-none">
                  A ZIMBABWEAN <br />ORIGIN STORY.
                </h2>
                <div className="h-px w-24 bg-sage" />
              </div>
              
              <div className="space-y-8 text-warm-gray text-lg leading-relaxed font-serif">
                <p>
                  Born in Harare in 1992, Lulu Tissues was founded with a singular, uncompromising mission: to localise high-end hygiene standards and make them accessible to every Zimbabwean family.
                </p>
                <p>
                  What started with a single production line has grown into a national institution. Our journey is etched into the daily lives of millions, defined by a commitment to the highest quality virgin pulp and a dermatological softness that has never been matched.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="relative aspect-[4/5] md:aspect-video rounded-[3rem] overflow-hidden shadow-2xl">
                <Image 
                  src="/images/story-production.png" 
                  alt="Production Excellence" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="mt-8 grid grid-cols-3 gap-8">
                <div className="space-y-2">
                  <span className="text-2xl font-heading font-black text-espresso">32+</span>
                  <p className="text-[10px] uppercase font-bold tracking-widest text-sage">Years of Trust</p>
                </div>
                <div className="space-y-2">
                  <span className="text-2xl font-heading font-black text-espresso">100%</span>
                  <p className="text-[10px] uppercase font-bold tracking-widest text-sage">Zim Owned</p>
                </div>
                <div className="space-y-2">
                  <span className="text-2xl font-heading font-black text-espresso">700+</span>
                  <p className="text-[10px] uppercase font-bold tracking-widest text-sage">Workforce</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 md:py-40 bg-white">
        <div className="container-site text-center">
          <h2 className="text-section-title text-espresso mb-20 animate-fade-in">Our Purity Standard</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div>
              <h3 className="text-xl font-heading font-black text-espresso mb-4 uppercase">Integrity</h3>
              <p className="text-warm-gray leading-relaxed text-sm">No kwal qualitative shortcuts. Every roll meets the Lulu benchmark for strength and ply-integrity.</p>
            </div>
            <div>
              <h3 className="text-xl font-heading font-black text-espresso mb-4 uppercase">Softness</h3>
              <p className="text-warm-gray leading-relaxed text-sm">Infused with natural aloe vera and micro-quilted for a touch that respects the most sensitive skin.</p>
            </div>
            <div>
              <h3 className="text-xl font-heading font-black text-espresso mb-4 uppercase">Heritage</h3>
              <p className="text-warm-gray leading-relaxed text-sm">Proudly Zimbabwean, employing the community and scaling our national hygiene infrastructure.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
