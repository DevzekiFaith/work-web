'use client';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiMail, HiPhone, HiLocationMarker, HiArrowRight, HiOutlineVideoCamera } from 'react-icons/hi';
import { Toaster, toast } from 'react-hot-toast';
import { track } from '@vercel/analytics';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [loading, setLoading] = useState(false);

  const contactInfo = [
    { icon: HiMail, title: 'Email', details: 'zeki@zekiubor.com', color: 'text-[#C9A84C]' },
    { icon: HiPhone, title: 'Phone', details: '+234 911 905 9859', color: 'text-[#8B5E3C]' },
    { icon: HiOutlineVideoCamera, title: 'Consultation', details: 'Schedule a Video Call', color: 'text-[#4A6FA5]' },
    { icon: HiLocationMarker, title: 'Global', details: 'Nigera & Beyond', color: 'text-[#1C1C1E]' }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      toast.success('Your blueprint request has been sent.');
      track("inquiry_submitted", { service: form.service });
      setForm({ name: '', email: '', phone: '', service: '', message: '' });
    } catch {
      toast.error('Structural failure in sending message. Please try again.');
    } finally {
      setLoading(false);
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
      <Header />
      <Toaster position="bottom-right" reverseOrder={false} />
      
      <main>
        {/* HERO SECTION */}
        <section className="relative pt-40 pb-20 md:pt-60 md:pb-32 overflow-hidden border-b border-[#0D1B2A]/5">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <motion.span 
              className="inline-block text-[#C9A84C] font-bold uppercase tracking-[0.4em] text-[10px] mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Consultation
            </motion.span>
            <motion.h1 
              className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight leading-[0.9] mb-12"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as const }}
            >
              Design Your <br />
              <span className="italic">Future</span>
            </motion.h1>
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl text-[#0D1B2A]/60 font-light max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Start the architectural assessment of your potential. Let&apos;s build with intention.
            </motion.p>
          </div>
        </section>

        {/* CONTACT GRID */}
        <section className="py-32 bg-white">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-20">
              {/* Info Column */}
              <motion.div {...fadeInUp}>
                <h2 className="font-display text-4xl mb-12">Structural <br /> Connections</h2>
                <div className="grid sm:grid-cols-2 gap-12 mb-20">
                  {contactInfo.map((info, i) => {
                    const Icon = info.icon;
                    return (
                      <div key={i}>
                        <Icon className={`w-6 h-6 sm:w-8 sm:h-8 ${info.color} mb-4`} />
                        <h3 className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#0D1B2A]/40 mb-2">{info.title}</h3>
                        <p className="text-base sm:text-lg font-bold">{info.details}</p>
                      </div>
                    );
                  })}
                </div>
                
                <div className="p-12 bg-[#F5F0E8] border border-[#0D1B2A]/5">
                  <h3 className="font-display text-2xl mb-4">Availability</h3>
                  <p className="text-sm text-[#0D1B2A]/60 font-light leading-relaxed mb-8">
                    We accept a limited number of architectural consultations each month to ensure the highest 
                    level of structural integrity for our clients.
                  </p>
                  <div className="flex items-center gap-4 text-[#C9A84C] font-bold text-[10px] tracking-widest uppercase">
                    <div className="w-2 h-2 rounded-full bg-[#C9A84C] animate-pulse" />
                    Currently Accepting Applications
                  </div>
                </div>
              </motion.div>

              {/* Form Column */}
              <motion.div 
                className="bg-[#0D1B2A] p-12 md:p-20 shadow-2xl relative overflow-hidden"
                {...fadeInUp}
              >
                {/* Background Accent */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#C9A84C]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                
                <h3 className="font-display text-3xl text-white mb-8">Inquiry Blueprint</h3>
                
                <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                  <div className="space-y-6">
                    <div>
                      <input 
                        type="text" 
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Full Name" 
                        required
                        className="w-full bg-transparent border-b border-white/20 px-0 py-4 text-[#F5F0E8] focus:border-[#C9A84C] outline-none transition-colors placeholder:text-white/20 font-light"
                      />
                    </div>
                    <div>
                      <input 
                        type="email" 
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Work Email" 
                        required
                        className="w-full bg-transparent border-b border-white/20 px-0 py-4 text-[#F5F0E8] focus:border-[#C9A84C] outline-none transition-colors placeholder:text-white/20 font-light"
                      />
                    </div>
                    <div>
                      <select 
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        required
                        className="w-full bg-transparent border-b border-white/20 px-0 py-4 text-[#F5F0E8] focus:border-[#C9A84C] outline-none transition-colors font-light appearance-none"
                      >
                        <option value="" className="bg-[#0D1B2A]">Select Architecture Layer</option>
                        <option value="becoming" className="bg-[#0D1B2A]">Becoming Institute (Individuals)</option>
                        <option value="leadership" className="bg-[#0D1B2A]">Leadership Architecture (Leaders)</option>
                        <option value="organizational" className="bg-[#0D1B2A]">Organizational Architecture (Institutions)</option>
                        <option value="general" className="bg-[#0D1B2A]">General Inquiry</option>
                      </select>
                    </div>
                    <div>
                      <textarea 
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="How can we help rebuild your potential?" 
                        required
                        rows={4}
                        className="w-full bg-transparent border-b border-white/20 px-0 py-4 text-[#F5F0E8] focus:border-[#C9A84C] outline-none transition-colors placeholder:text-white/20 font-light resize-none"
                      />
                    </div>
                  </div>
                  
                  <button 
                    type="submit" 
                    disabled={loading}
                    className="group w-full flex items-center justify-between py-6 bg-[#C9A84C] text-[#0D1B2A] font-bold uppercase tracking-[0.3em] text-xs px-10 transition-all duration-300 hover:bg-[#F5F0E8] disabled:opacity-50"
                  >
                    {loading ? 'Transmitting...' : 'Send Inquiry'}
                    <HiArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FREQUENT AUDITS */}
        <section className="py-32 bg-[#F5F0E8]">
          <div className="container mx-auto px-6 lg:px-12">
            <h2 className="font-display text-4xl mb-16 text-center">Frequently Audited</h2>
            <div className="max-w-4xl mx-auto space-y-8">
              {[
                { q: "How long is the first consultation?", a: "Initial architectural deep-dives typically last 45 minutes to ensure we can identify the core structural needs." },
                { q: "Do you work with individuals outside Nigeria?", a: "Yes, our 'Human Architecture' framework is global. We operate across time zones via high-fidelity virtual studio sessions." },
                { q: "What is the next step after I send an inquiry?", a: "Our team will review your blueprint and respond within 24 hours to schedule your preliminary audit." }
              ].map((faq, i) => (
                <motion.div 
                  key={i} 
                  className="p-10 bg-white border border-[#0D1B2A]/5"
                  {...fadeInUp}
                >
                  <h4 className="font-bold text-sm uppercase tracking-widest mb-4 flex items-center gap-4">
                    <span className="text-[#C9A84C]">0{i+1}</span> {faq.q}
                  </h4>
                  <p className="text-[#0D1B2A]/60 font-light leading-relaxed">{faq.a}</p>
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