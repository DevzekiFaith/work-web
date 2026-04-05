'use client';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { motion } from "framer-motion";
import { HiArrowRight, HiOutlineBookOpen, HiOutlineCollection, HiOutlineVideoCamera, HiOutlineGlobe } from "react-icons/hi";

export default function Resources() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
  };

  const categories = [
    { title: 'The Architecture Letter', icon: HiOutlineBookOpen, details: 'Weekly insights on identity and mindset.', count: '52+ Issues' },
    { title: 'Visionary Vault', icon: HiOutlineCollection, details: 'Architectural blueprints for structural leadership.', count: '12 Blueprints' },
    { title: 'Becoming Sessions', icon: HiOutlineVideoCamera, details: 'Recorded masterclasses on personal evolution.', count: '24+ Videos' },
    { title: 'Global Blueprint', icon: HiOutlineGlobe, details: 'A comprehensive guide to scaling your impact.', count: '8 Modules' }
  ];

  return (
    <div className="min-h-screen bg-[#F5F0E8] text-[#0D1B2A]">
      <Header />
      
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
              The Library
            </motion.span>
            <motion.h1 
              className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight leading-[0.9] mb-12"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as const }}
            >
              The Architecture <br />
              <span className="italic">Library</span>
            </motion.h1>
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl text-[#0D1B2A]/60 font-light max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              A curated collection of resources for the modern visionary. deconstruct your limits and rebuild your potential.
            </motion.p>
          </div>
        </section>

        {/* RESOURCE GRID */}
        <section className="py-32">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {categories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <motion.div 
                    key={index}
                    className="p-8 sm:p-12 bg-white border border-[#0D1B2A]/5 hover:border-[#C9A84C]/30 transition-all duration-500 hover:shadow-2xl"
                    {...fadeInUp}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Icon className="w-12 h-12 text-[#C9A84C] mb-12" />
                    <h2 className="font-display text-3xl mb-4">{category.title}</h2>
                    <p className="text-sm text-[#0D1B2A]/60 font-light leading-relaxed mb-8 h-[4.5rem] overflow-hidden">
                      {category.details}
                    </p>
                    <div className="flex items-center justify-between pt-8 border-t border-[#0D1B2A]/5 hover:text-[#C9A84C] transition-colors cursor-pointer group">
                       <span className="text-[10px] font-bold uppercase tracking-widest text-[#0D1B2A]/30">{category.count}</span>
                       <HiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* NEWSLETTER CTA */}
        <section className="py-40 bg-[#0D1B2A] text-[#F5F0E8]">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <motion.div className="max-w-3xl mx-auto" {...fadeInUp}>
              <h2 className="font-display text-5xl mb-12">Subscribe to <br /> The Architecture Letter</h2>
              <p className="text-2xl font-light mb-16 opacity-60">
                Weekly architectural insights on identity, mindset, and becoming — straight to your inbox. Free.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 max-w-lg mx-auto">
                <input 
                  type="email" 
                  placeholder="Blueprint Email" 
                  className="flex-1 bg-transparent border-b border-[#F5F0E8]/30 px-0 py-4 text-[#F5F0E8] focus:border-[#C9A84C] outline-none transition-colors placeholder:text-white/20 font-light"
                />
                <button className="px-12 py-5 bg-[#C9A84C] text-[#0D1B2A] font-bold uppercase tracking-[0.2em] text-xs hover:bg-[#F5F0E8] transition-all duration-300">
                  Join The Letter
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
