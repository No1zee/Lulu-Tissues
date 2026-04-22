import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Landmark, ArrowRight, Lock } from "lucide-react";

export const metadata = {
  title: "Partner Login | Lulu Tissues",
  description: "Secure access for Lulu Tissues wholesalers and distributors.",
};

export default function PartnerLogin() {
  return (
    <main className="min-h-screen bg-parchment flex flex-col">
      <Navbar />
      
      <div className="flex-1 flex items-center justify-center p-6 pt-32">
        <div className="w-full max-w-md bg-white rounded-4xl p-10 shadow-2xl border border-mist relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-[0.03]">
            <Landmark size={120} />
          </div>

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-sage/10 rounded-xl flex items-center justify-center">
                <Lock className="text-sage" size={20} />
              </div>
              <div>
                <h1 className="text-2xl font-heading font-black text-espresso tracking-tight">Partner Portal</h1>
                <p className="text-xs font-bold text-sage uppercase tracking-widest">Wholesale & Distribution</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="partner-id" className="text-[10px] font-black uppercase tracking-widest text-warm-gray">Partner ID</label>
                <input 
                  id="partner-id"
                  type="text" 
                  placeholder="ZW-0000-00"
                  className="w-full px-6 py-4 rounded-xl border border-mist focus:border-sage focus:ring-1 focus:ring-sage/20 outline-none transition-all font-mono text-sm"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="secure-key" className="text-[10px] font-black uppercase tracking-widest text-warm-gray">Secure Key</label>
                <input 
                  id="secure-key"
                  type="password" 
                  placeholder="••••••••"
                  className="w-full px-6 py-4 rounded-xl border border-mist focus:border-sage focus:ring-1 focus:ring-sage/20 outline-none transition-all"
                />
              </div>

              <button className="w-full py-4 bg-espresso text-ivory rounded-xl font-black text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-sage transition-all group">
                Enter Portal
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="text-center text-[10px] text-warm-gray leading-relaxed">
                Problems logging in? Contact your account executive or <br />
                <span className="text-sage border-b border-sage/30 cursor-pointer">Request Access</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
