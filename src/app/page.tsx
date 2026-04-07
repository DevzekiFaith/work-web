'use client';
import Link from "next/link";
import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { track } from "@vercel/analytics";

export default function Home() {
  const [auditEmail, setAuditEmail] = useState("");
  const [isSubmittingAudit, setIsSubmittingAudit] = useState(false);
  
  const [newsEmail, setNewsEmail] = useState("");
  const [isSubmittingNews, setIsSubmittingNews] = useState(false);

  const handleAuditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!auditEmail) return toast.error("Please enter your email");
    setIsSubmittingAudit(true);
    setTimeout(() => {
      toast.success("Audit sent to your email!");
      track("audit_download", { email: auditEmail });
      setAuditEmail("");
      setIsSubmittingAudit(false);
    }, 1000);
  };

  const handleNewsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsEmail) return toast.error("Please enter your email");
    setIsSubmittingNews(true);
    setTimeout(() => {
      toast.success("Subscribed to the Architecture Letter!");
      track("newsletter_signup", { email: newsEmail, source: "homepage_footer" });
      setNewsEmail("");
      setIsSubmittingNews(false);
    }, 1000);
  };
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
  };

  const staggerContainer = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.2 } },
    viewport: { once: true }
  };

  return (
    <div className="min-h-screen bg-[#F5F0E8] text-[#0D1B2A] selection:bg-[#C9A84C] selection:text-[#0D1B2A]">
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
        <section className="relative min-h-[90vh] flex items-center pt-72 pb-24 md:pt-72 md:pb-40 lg:pt-80 overflow-hidden">
          <div className="container mx-auto fluid-container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="fluid-display mb-12 sm:mb-16">
                The Architect <br />
                <span className="italic">of</span> <br />
                Human <span className="italic uppercase">Potential</span>
              </h1>
            </motion.div>
            <div className="max-w-4xl">
              <motion.span 
                className="inline-block text-[#C9A84C] font-bold uppercase tracking-[0.3em] text-xs mb-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                Architecture for Potential
              </motion.span>
              
              <motion.p 
                className="text-lg sm:text-xl md:text-2xl text-[#0D1B2A]/70 font-light max-w-2xl mb-12 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                The question is not whether you have potential. <br className="hidden md:block" />
                The question is whether you have the architecture to access it.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <Link 
                  href="/audit" 
                  className="group inline-flex items-center gap-4 px-10 py-5 bg-[#0D1B2A] text-[#F5F0E8] font-bold uppercase tracking-[0.2em] text-sm hover:bg-[#C9A84C] hover:text-[#0D1B2A] transition-all duration-500 shadow-2xl"
                >
                  Take The Architecture Audit — Free
                  <HiArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                </Link>
              </motion.div>
            </div>
          </div>
          
          {/* Vertical Scroll Indicator */}
          <motion.div 
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#0D1B2A]/30 rotate-90 mb-8 origin-center">Scroll</span>
            <div className="w-[1px] h-20 bg-gradient-to-b from-[#0D1B2A]/30 to-transparent" />
          </motion.div>
        </section>

        {/* ABOUT SNAPSHOT */}
        <section className="fluid-section bg-white">
          <div className="container mx-auto fluid-container">
            <div className="flex flex-col md:flex-row items-end gap-12">
              <div className="md:w-1/2">
                <motion.h2 
                  className="fluid-h2 mb-8"
                  {...fadeInUp}
                >
                  A Master Architect <br /> of Human Potential
                </motion.h2>
              </div>
              <div className="md:w-1/2">
                <motion.div {...fadeInUp}>
                  <p className="text-lg sm:text-xl md:text-2xl text-[#0D1B2A]/70 font-light leading-relaxed mb-10">
                    A strategist for visionaries building internal structures for external impact. 
                    True leadership is not found; it is engineered.
                  </p>
                  <Link 
                    href="/about" 
                    className="group inline-flex items-center gap-2 text-[#C9A84C] font-bold uppercase tracking-widest text-[10px] sm:text-xs border-b border-[#C9A84C]/30 pb-2 hover:border-[#C9A84C] transition-all duration-300"
                  >
                    Read the Full Story
                    <HiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT I DO SECTION */}
        <motion.section 
          className="fluid-section bg-white/50 border-y border-[#0D1B2A]/5"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
        >
          <div className="container mx-auto fluid-container">
            <h2 className="fluid-h2 mb-16 sm:mb-24 break-words">Architecting <br className="hidden sm:block" /> Your Evolution</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-16">
              {[
                { title: "Personal Mark", desc: "Crafting a unique leadership identity that commands interest.", icon: "01" },
                { title: "Structural Logic", desc: "Designing mental frameworks that eliminate ambiguity.", icon: "02" },
                { title: "The Becoming", desc: "Transforming internal narratives into actionable excellence.", icon: "03" }
              ].map((item, i) => (
                <div key={i} className="group p-8 border border-[#0D1B2A]/5 hover:bg-[#F5F0E8] transition-all duration-700">
                  <span className="text-[10px] font-bold text-[#C9A84C] mb-6 block uppercase tracking-widest">Protocol {item.icon}</span>
                  <h3 className="fluid-h3 mb-6 transition-transform duration-500 group-hover:translate-x-2">{item.title}</h3>
                  <p className="text-base sm:text-lg text-[#0D1B2A]/60 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* LEAD MAGNET SECTION */}
        <section className="fluid-section bg-white">
          <div className="container mx-auto fluid-container">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <motion.div {...fadeInUp}>
                <h2 className="fluid-h2 mb-8">Determine Your Foundation</h2>
                <p className="text-xl md:text-2xl text-[#0D1B2A]/70 font-light leading-relaxed mb-8">
                  The Architecture Audit is a diagnostic tool designed to reveal the cracks in your personal and professional structures. 
                </p>
                <div className="space-y-6 mb-12">
                  {[
                    "Discover the 5 layers of human architecture.",
                    "Identify the single layer holding you back.",
                    "Get a personalized blueprint for restructuring."
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="mt-2 w-1.5 h-1.5 bg-[#C9A84C]" />
                      <span className="text-[#0D1B2A]/60 font-light">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-[#F5F0E8] p-12 md:p-16 shadow-2xl relative"
                {...fadeInUp}
              >
                <div className="absolute top-0 right-8 md:right-12 w-8 h-1 bg-[#C9A84C]" />
                <h3 className="fluid-h3 mb-2 break-words">Download The Audit</h3>
                <p className="text-sm text-[#0D1B2A]/50 font-light mb-10">Start your architectural assessment today.</p>
                
                <form onSubmit={handleAuditSubmit} className="space-y-6">
                  <div>
                    <input 
                      type="email" 
                      placeholder="Your Professional Email" 
                      value={auditEmail}
                      onChange={(e) => setAuditEmail(e.target.value)}
                      required
                      className="w-full bg-white border border-[#0D1B2A]/10 px-6 py-4 text-sm focus:outline-none focus:border-[#C9A84C] transition-colors"
                    />
                  </div>
                  <button 
                    type="submit"
                    disabled={isSubmittingAudit}
                    className="w-full py-5 bg-[#0D1B2A] text-white font-bold uppercase tracking-widest text-xs hover:bg-[#C9A84C] hover:text-[#0D1B2A] transition-all duration-500 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmittingAudit ? "Processing..." : "Download For Free"}
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        {/* NEWSLETTER SECTION */}
        <section className="fluid-section border-t border-[#0D1B2A]/5">
          <div className="container mx-auto fluid-container text-center">
            <motion.div className="max-w-3xl mx-auto" {...fadeInUp}>
              <span className="inline-block text-[#C9A84C] font-bold uppercase tracking-[0.4em] text-[10px] mb-8">Weekly Enlightenment</span>
              <h2 className="fluid-h2 mb-8 tracking-tight">The Architecture Letter</h2>
              <p className="text-xl md:text-2xl text-[#0D1B2A]/70 font-light leading-relaxed mb-12">
                Weekly deep-dives into identity, mindset, and becoming — straight to your inbox. 
                Join 10,000+ visionaries who build with intention.
              </p>
              
              <form onSubmit={handleNewsSubmit} className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto">
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  value={newsEmail}
                  onChange={(e) => setNewsEmail(e.target.value)}
                  required
                  className="flex-1 bg-white border border-[#0D1B2A]/10 px-8 py-5 text-sm focus:outline-none focus:border-[#C9A84C] transition-colors"
                />
                <button 
                  type="submit"
                  disabled={isSubmittingNews}
                  className="px-10 py-5 bg-[#0D1B2A] text-white font-bold uppercase tracking-widest text-xs hover:bg-[#C9A84C] hover:text-[#0D1B2A] transition-all duration-500 shadow-xl disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmittingNews ? "Wait..." : "Subscribe"}
                </button>
              </form>
              <p className="mt-8 text-[10px] uppercase tracking-widest text-[#0D1B2A]/30">Join the Collective. Free Forever.</p>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
