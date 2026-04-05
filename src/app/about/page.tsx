'use client';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { motion } from 'framer-motion';
import { HiArrowRight, HiShieldCheck, HiOutlineLibrary, HiOutlinePuzzle, HiOutlineSparkles, HiOutlineCube } from 'react-icons/hi';
import Link from 'next/link';

export default function About() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
  };

  const layers = [
    { title: "Layer 1: Identity", description: "The underlying bedrock upon which your entire life is built.", icon: HiOutlineCube },
    { title: "Layer 2: Mindset", description: "The internal structural frames that determine how much weight you can carry.", icon: HiOutlineLibrary },
    { title: "Layer 3: Values", description: "The core interior design that dictates the atmosphere of your presence.", icon: HiOutlinePuzzle },
    { title: "Layer 4: Systems", description: "The mechanical and electrical flows that power your daily productivity.", icon: HiShieldCheck },
    { title: "Layer 5: Presentation", description: "The exterior facade that the world interacts with first.", icon: HiOutlineSparkles },
  ];

  return (
    <div className="min-h-screen bg-[#F5F0E8] text-[#0D1B2A]">
      <Header />
      
      <main>
        {/* HERO SECTION */}
        <section className="relative pt-40 pb-20 md:pt-60 md:pb-32 overflow-hidden">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <motion.span 
              className="inline-block text-[#C9A84C] font-bold uppercase tracking-[0.4em] text-[10px] mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              Master Architect
            </motion.span>
            <motion.h1 
              className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight leading-[0.9] mb-12 uppercase"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as const }}
            >
              The Architect <br />
              of Human <br />
              <span className="italic">Potential</span>
            </motion.h1>
          </div>
        </section>

        {/* SECTION 1 — THE STORY */}
        <section className="py-32 md:py-48 lg:py-64 bg-[#0D1B2A] text-[#F5F0E8]">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-24 lg:gap-32 items-center">
              <motion.div {...fadeInUp}>
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl mb-12 border-l-4 border-[#C9A84C] pl-10">The Story</h2>
                <p className="text-lg sm:text-xl md:text-2xl font-light leading-relaxed mb-8 opacity-80">
                  It started with blueprints and brick. I was running an architectural firm, working 18-hour days, 
                  trying to force success through sheer sweat and struggle.
                </p>
                <p className="text-lg font-light leading-relaxed mb-8 opacity-60">
                  I was broke, I was exhausted, and I was hitting a ceiling I couldn&apos;t see. 
                  Every effort felt like adding more weight to a building that wasn&apos;t designed to hold it. 
                  I was working hard on the &quot;exterior&quot; of my life while the foundation was crumbling.
                </p>
              </motion.div>
              <motion.div 
                className="relative aspect-square bg-[#1C1C1E] border border-[#C9A84C]/20 p-8"
                {...fadeInUp}
              >
                <div className="absolute inset-0 opacity-10" style={{backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm1 1h38v38H1V1z' fill='%23C9A84C' fill-rule='evenodd'/%3E%3C/svg%3E")`}} />
                <div className="h-full w-full flex items-center justify-center border border-[#C9A84C]/10">
                  <span className="font-display text-6xl sm:text-7xl md:text-8xl text-[#C9A84C] opacity-20">ZEKI</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SECTION 2 — THE TURNING POINT */}
        <section className="py-32 md:py-48 lg:py-60 bg-white">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div {...fadeInUp}>
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl mb-12">The Realization</h2>
                <p className="text-xl sm:text-2xl md:text-3xl text-[#0D1B2A]/80 font-light leading-relaxed italic mb-12">
                  &quot;The problem was never the business. <br className="hidden md:block" />
                  It was the inner architecture beneath the business.&quot;
                </p>
                <p className="text-lg text-[#0D1B2A]/60 font-light leading-relaxed">
                  As an architect, I knew that if a building fails, you don&apos;t just repaint the walls. 
                  You go to the site. You check the soil. You look at the structural steel. 
                  I realized I was trying to build a skyscraper on the foundation of a shack. 
                  It wasn&apos;t about more effort; it was about better architecture.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SECTION 3 — THE MISSION */}
        <section className="py-32 md:py-48 lg:py-64 bg-[#F5F0E8]">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="flex flex-col md:flex-row gap-20 items-center">
               <div className="md:w-1/2">
                <motion.div {...fadeInUp}>
                  <h2 className="font-display text-4xl md:text-5xl mb-8">The Mission</h2>
                  <p className="text-xl text-[#0D1B2A]/80 font-light leading-relaxed mb-8">
                    My life&apos;s work is now dedicated to ensuring you never hit that ceiling again. 
                    I don&apos;t just coach; I engineer.
                  </p>
                  <p className="text-[#0D1B2A]/60 font-light leading-relaxed">
                    Connected back to my days in the firm, I now help individuals and leaders design their lives 
                    from the ground up. We deconstruct the old, unstable patterns and replace them with 
                    unshakeable internal structures that can support monumental external impact.
                  </p>
                </motion.div>
              </div>
              <div className="md:w-1/2 grid grid-cols-2 gap-4">
                <div className="h-40 bg-[#0D1B2A] flex items-center justify-center"><span className="text-[#C9A84C] font-bold">DECONSTRUCT</span></div>
                <div className="h-40 bg-[#C9A84C] mt-8 flex items-center justify-center"><span className="text-[#0D1B2A] font-bold">DESIGN</span></div>
                <div className="h-40 bg-[#8B5E3C] flex items-center justify-center"><span className="text-white font-bold">DEVELOP</span></div>
                <div className="h-40 bg-[#4A6FA5] mt-8 flex items-center justify-center"><span className="text-white font-bold">DEPLOY</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4 — THE FRAMEWORK */}
        <section className="py-32 bg-white border-t border-[#0D1B2A]/5">
          <div className="container mx-auto px-6 lg:px-12">
            <motion.div className="text-center mb-24" {...fadeInUp}>
              <h2 className="font-display text-4xl md:text-6xl mb-8">The Human Architecture Framework</h2>
              <p className="text-xl text-[#0D1B2A]/60 font-light">Structure determines capacity. Five layers to access your potential.</p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-10 lg:gap-14">
              {layers.map((layer, i) => {
                const Icon = layer.icon;
                return (
                  <motion.div 
                    key={i} 
                    className="p-8 bg-[#F5F0E8] border border-[#0D1B2A]/5 hover:border-[#C9A84C] transition-all duration-500"
                    {...fadeInUp}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Icon className="w-8 h-8 text-[#C9A84C] mb-6" />
                    <h3 className="font-bold text-sm uppercase tracking-widest mb-4">{layer.title}</h3>
                    <p className="text-xs text-[#0D1B2A]/60 leading-relaxed font-light">{layer.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION 5 — THE CREDENTIALS */}
        <section className="py-32">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mx-auto">
              <motion.div className="text-center mb-20" {...fadeInUp}>
                <h2 className="font-display text-4xl md:text-5xl mb-8">The Professional Blueprint</h2>
                <div className="w-20 h-1 bg-[#C9A84C] mx-auto" />
              </motion.div>
              
              <div className="space-y-12">
                {[
                  { label: "Training", value: "Architect by Professional Training", detail: "Expertise in physical structure and foundational integrity." },
                  { label: "Skill", value: "Frontend Engineer by Skill", detail: "Digital craftsmanship and the ability to design seamless experiences." },
                  { label: "Calling", value: "Transformational Educator by Calling", detail: "Devoted to the elevation of human consciousness and potential." },
                  { label: "Enterprise", value: "Founder, Mindvest Global Resources", detail: "A global ecosystem for leadership and architectural development." }
                ].map((cred, i) => (
                  <motion.div 
                    key={i} 
                    className="flex flex-col md:flex-row md:items-center gap-4 md:gap-12"
                    {...fadeInUp}
                    transition={{ delay: i * 0.1 }}
                  >
                    <span className="text-[#C9A84C] font-bold uppercase tracking-widest text-[10px] w-24">{cred.label}</span>
                    <div>
                      <h4 className="text-xl font-bold mb-1">{cred.value}</h4>
                      <p className="text-[#0D1B2A]/60 font-light text-sm">{cred.detail}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div 
                className="mt-32 text-center"
                {...fadeInUp}
              >
                <Link 
                  href="/services" 
                  className="group inline-flex items-center gap-4 px-12 py-6 bg-[#0D1B2A] text-white font-bold uppercase tracking-[0.3em] text-sm hover:bg-[#C9A84C] hover:text-[#0D1B2A] transition-all duration-500 shadow-2xl"
                >
                  Work With Me
                  <HiArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
