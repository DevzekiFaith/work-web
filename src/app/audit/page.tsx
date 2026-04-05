'use client';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { motion } from "framer-motion";
import { HiShieldCheck } from "react-icons/hi";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";

export default function Audit() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return toast.error("Please enter your email");
    
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      toast.success("You are on the list! We will notify you.");
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
  };

  return (
    <div className="min-h-screen bg-[#F5F0E8] text-[#0D1B2A]">
      <Toaster 
        position="top-center" 
        toastOptions={{
          style: {
            background: '#0D1B2A',
            color: '#F5F0E8',
            borderRadius: '0px',
            fontFamily: 'var(--font-inter)',
            fontSize: '14px',
            border: '1px solid rgba(201, 168, 76, 0.3)'
          },
          success: {
            iconTheme: { primary: '#C9A84C', secondary: '#0D1B2A' }
          }
        }} 
      />
      <Header />
      
      <main>
        {/* HERO SECTION */}
        <section className="relative pt-40 pb-20 md:pt-60 md:pb-32 overflow-hidden border-b border-[#0D1B2A]/5">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <motion.div
              className="inline-flex items-center gap-3 px-6 py-2 bg-[#C9A84C]/10 rounded-full mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <HiShieldCheck className="w-5 h-5 text-[#C9A84C]" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#C9A84C]">Diagnostic Tool</span>
            </motion.div>
            <motion.h1 
              className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight leading-[0.9] mb-12"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as const }}
            >
              The Human <br />
              <span className="italic uppercase">Architecture</span> <br />
              Audit
            </motion.h1>
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl text-[#0D1B2A]/60 font-light max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Discover which of the 5 layers of your human architecture is holding you back. A precision assessment for visionaries.
            </motion.p>
          </div>
        </section>

        {/* AUDIT FORM PLACEHOLDER / COMING SOON */}
        <section className="py-32">
          <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
            <motion.div 
              className="bg-white border border-[#0D1B2A]/5 p-12 md:p-24 shadow-2xl text-center"
              {...fadeInUp}
            >
              <h2 className="font-display text-4xl mb-8 uppercase tracking-tight italic">Initiating Structural <br aria-hidden="true" /> Scan...</h2>
              <p className="text-xl text-[#0D1B2A]/60 font-light mb-12">
                We are currently recalibrating the Architecture Audit for its maximum impact. 
                Enter your email below to be the first to access the diagnostic tool.
              </p>
              
              <div className="max-w-md mx-auto">
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                  <input 
                    type="email" 
                    placeholder="Blueprint Email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 px-8 py-5 bg-[#F5F0E8] border-none outline-none text-sm font-light focus:ring-1 focus:ring-[#C9A84C] transition-all"
                  />
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="px-10 py-5 bg-[#0D1B2A] text-white font-bold uppercase tracking-widest text-[10px] hover:bg-[#C9A84C] hover:text-[#0D1B2A] transition-all duration-500 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Processing..." : "Notify Me"}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </section>

        {/* THE 5 LAYERS PREVIEW */}
        <section className="py-32 bg-white border-t border-[#0D1B2A]/5">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <h2 className="font-display text-3xl sm:text-4xl mb-24">The 5 Layers of Potential</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
              {['Identity', 'Mindset', 'Values', 'Systems', 'Presentation'].map((layer, i) => (
                <motion.div 
                  key={i}
                  className="p-8 border border-[#0D1B2A]/5 hover:bg-[#F5F0E8] transition-colors"
                  {...fadeInUp}
                  transition={{ delay: i * 0.1 }}
                >
                  <span className="text-[10px] font-bold text-[#C9A84C] mb-4 block uppercase tracking-widest">Layer 0{i+1}</span>
                  <h3 className="font-display text-xl sm:text-2xl">{layer}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
