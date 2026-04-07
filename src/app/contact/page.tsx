'use client';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { motion } from "framer-motion";
import { HiMail, HiPhone, HiLocationMarker, HiArrowRight } from "react-icons/hi";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      return toast.error("Please fill in all required fields.");
    }
    
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (res.ok) {
        toast.success("Message sent! I will be in touch soon.");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      toast.error("Failed to connect. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
  };

  return (
    <div className="min-h-screen bg-[#F5F0E8] text-[#0D1B2A]">
      <Toaster position="top-right" />
      <Header />
      
      <main>
        {/* HERO SECTION */}
        <section className="relative pt-48 pb-24 md:pt-72 md:pb-40 lg:pt-80 overflow-hidden border-b border-[#0D1B2A]/5">
          <div className="container mx-auto fluid-container">
            <div className="max-w-4xl">
              <motion.span 
                className="inline-block text-[#C9A84C] font-bold uppercase tracking-[0.4em] text-[10px] mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                Direct Inquiry
              </motion.span>
              <motion.h1 
                className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight leading-[0.9] mb-12 uppercase"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                Begin The <br />
                <span className="italic">Dialogue</span>
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl text-[#0D1B2A]/60 font-light max-w-2xl leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                True transformation starts with a single high-fidelity conversation. Reach out for consultations, speaking engagements, or professional inquiries.
              </motion.p>
            </div>
          </div>
        </section>

        {/* CONTACT CONTENT */}
        <section className="fluid-section">
          <div className="container mx-auto fluid-container">
            <div className="grid lg:grid-cols-2 gap-24 lg:gap-40">
              {/* Form Side */}
              <motion.div {...fadeInUp}>
                <h2 className="font-display text-3xl sm:text-4xl mb-12 uppercase italic">Send A Blueprint</h2>
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-[#0D1B2A]/50">Full Name *</label>
                      <input 
                        type="text" 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full bg-transparent border-b border-[#0D1B2A]/20 py-4 focus:border-[#C9A84C] outline-none transition-colors font-light"
                        placeholder="Zeki Ubor"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-[#0D1B2A]/50">Professional Email *</label>
                      <input 
                        type="email" 
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full bg-transparent border-b border-[#0D1B2A]/20 py-4 focus:border-[#C9A84C] outline-none transition-colors font-light"
                        placeholder="zeki@ubor.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-[#0D1B2A]/50">Subject</label>
                    <input 
                      type="text" 
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      className="w-full bg-transparent border-b border-[#0D1B2A]/20 py-4 focus:border-[#C9A84C] outline-none transition-colors font-light"
                      placeholder="Consultation Inquiry"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-[#0D1B2A]/50">Message *</label>
                    <textarea 
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full bg-transparent border-b border-[#0D1B2A]/20 py-4 focus:border-[#C9A84C] outline-none transition-colors font-light resize-none"
                      placeholder="Tell me about your architectural needs..."
                    />
                  </div>
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="group inline-flex items-center gap-6 px-12 py-6 bg-[#0D1B2A] text-white font-bold uppercase tracking-[0.4em] text-[10px] hover:bg-[#C9A84C] hover:text-[#0D1B2A] transition-all duration-500 shadow-2xl disabled:opacity-70"
                  >
                    {isSubmitting ? "Transmitting..." : "Send Inquiry"}
                    <HiArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                  </button>
                </form>
              </motion.div>

              {/* Info Side */}
              <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
                <h2 className="font-display text-3xl sm:text-4xl mb-12 uppercase italic">Direct Channels</h2>
                <div className="space-y-16">
                  <div className="flex items-start gap-8">
                    <div className="w-16 h-16 bg-[#C9A84C]/10 flex items-center justify-center flex-shrink-0">
                      <HiMail className="w-6 h-6 text-[#C9A84C]" />
                    </div>
                    <div>
                      <h4 className="font-bold uppercase tracking-widest text-[10px] text-[#0D1B2A]/50 mb-2">Electronic Mail</h4>
                      <p className="text-xl sm:text-2xl font-light">unovaconsultingfirstafrica@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-8">
                    <div className="w-16 h-16 bg-[#C9A84C]/10 flex items-center justify-center flex-shrink-0">
                      <HiPhone className="w-6 h-6 text-[#C9A84C]" />
                    </div>
                    <div>
                      <h4 className="font-bold uppercase tracking-widest text-[10px] text-[#0D1B2A]/50 mb-2">Voice & Text</h4>
                      <p className="text-xl sm:text-2xl font-light">+234 911 905 9859</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-8">
                    <div className="w-16 h-16 bg-[#C9A84C]/10 flex items-center justify-center flex-shrink-0">
                      <HiLocationMarker className="w-6 h-6 text-[#C9A84C]" />
                    </div>
                    <div>
                      <h4 className="font-bold uppercase tracking-widest text-[10px] text-[#0D1B2A]/50 mb-2">Primary Station</h4>
                      <p className="text-xl sm:text-2xl font-light">Lagos, Nigeria</p>
                    </div>
                  </div>
                </div>
                
                {/* Visual architectural element */}
                <div className="mt-24 p-12 border border-[#C9A84C]/20 bg-[#C9A84C]/5 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#C9A84C]/10 -skew-x-12 transform translate-x-10 -translate-y-10 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform duration-700" />
                  <p className="text-[#0D1B2A]/70 italic font-light leading-relaxed relative z-10">
                    &quot;A building is not just a place to be but a way to be. Your life is the most important structure you will ever design.&quot;
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
