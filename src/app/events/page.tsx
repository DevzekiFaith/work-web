'use client';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { motion } from "framer-motion";
import { HiCalendar, HiLocationMarker, HiClock, HiArrowRight, HiOutlineLibrary, HiOutlineAcademicCap } from "react-icons/hi";
import Link from "next/link";

const upcomingEvents = [
  {
    id: 1,
    title: "Becoming a Person of Interest",
    type: "MASTERCLASS",
    date: "TBA",
    time: "4 Intense Weeks",
    location: "Virtual Studio",
    description: "The definitive framework for building an identity that commands interest. Move beyond 'potential' and into architectural precision.",
    instructor: "Zeki Ubor",
    originalPrice: "$497",
    currentPrice: "$100",
    icon: HiOutlineAcademicCap,
    color: "bg-[#C9A84C]"
  },
  {
    id: 2,
    title: "Leadership Architecture",
    type: "INTENSIVE",
    date: "TBA",
    time: "Weekend Intensive",
    location: "Executive Suit",
    description: "Rebuild the structural integrity of your leadership. Ideal for founders and executives seeking unshakeable authority.",
    instructor: "Zeki Ubor",
    originalPrice: "$997",
    currentPrice: "$220",
    icon: HiOutlineLibrary,
    color: "bg-[#8B5E3C]"
  }
];

export default function Events() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
  };

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
              The Masterclasses
            </motion.span>
            <motion.h1 
              className="font-display text-4xl sm:text-6xl md:text-8xl lg:text-9xl tracking-tight leading-[0.9] mb-8 sm:mb-12 break-words"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as const }}
            >
              Architectural <br />
              <span className="italic">Experiences</span>
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-[#0D1B2A]/60 font-light max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Intensive programs designed to deconstruct your limits and rebuild your capacity for global impact.
            </motion.p>
          </div>
        </section>

        {/* EVENTS LIST */}
        <section className="py-32">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {upcomingEvents.map((event, index) => {
                const Icon = event.icon;
                return (
                  <motion.div 
                    key={index}
                    className="group bg-white border border-[#0D1B2A]/5 hover:border-[#C9A84C]/30 transition-all duration-500 hover:shadow-2xl overflow-hidden flex flex-col"
                    {...fadeInUp}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="p-12 flex-1 flex flex-col">
                      <div className="flex flex-row items-start justify-between mb-8 md:mb-12">
                        <div className={`w-12 h-12 md:w-16 md:h-16 ${event.color} flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-transform`}>
                          <Icon className="w-6 h-6 md:w-8 md:h-8" />
                        </div>
                        <div className="text-right">
                          <span className="text-[10px] uppercase tracking-widest text-[#0D1B2A]/40 block mb-2">{event.type}</span>
                          <span className="text-xl md:text-2xl font-display text-[#0D1B2A]">{event.currentPrice}</span>
                          <span className="text-xs text-[#0D1B2A]/30 line-through block italic">{event.originalPrice}</span>
                        </div>
                      </div>

                      <h2 className="font-display text-3xl sm:text-4xl mb-6 group-hover:text-[#C9A84C] transition-colors break-words">{event.title}</h2>
                      <p className="text-[#0D1B2A]/60 font-light leading-relaxed mb-8 md:mb-12 flex-1">
                        {event.description}
                      </p>

                      <div className="space-y-4 mb-12 border-t border-[#0D1B2A]/5 pt-8">
                        <div className="flex items-center gap-4 text-xs tracking-widest uppercase font-bold text-[#0D1B2A]/80">
                          <HiCalendar className="w-4 h-4 text-[#C9A84C]" />
                          {event.date}
                        </div>
                        <div className="flex items-center gap-4 text-xs tracking-widest uppercase font-bold text-[#0D1B2A]/80">
                          <HiClock className="w-4 h-4 text-[#C9A84C]" />
                          {event.time}
                        </div>
                        <div className="flex items-center gap-4 text-xs tracking-widest uppercase font-bold text-[#0D1B2A]/80">
                          <HiLocationMarker className="w-4 h-4 text-[#C9A84C]" />
                          {event.location}
                        </div>
                      </div>

                      <Link 
                        href={`/events/register/${event.id}`}
                        className="group/btn w-full flex items-center justify-between py-5 border-t border-[#0D1B2A]/5 hover:text-[#C9A84C] transition-colors"
                      >
                        <span className="text-xs uppercase tracking-[0.3em] font-bold">Reserve Your Spot</span>
                        <HiArrowRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-2" />
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* TELEGRAM CTA */}
        <section className="py-20 bg-[#0D1B2A] text-[#F5F0E8]">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <motion.div className="max-w-3xl mx-auto" {...fadeInUp}>
              <h2 className="font-display text-3xl sm:text-4xl mb-8 break-words">Join The Architecture Circle</h2>
              <p className="text-xl font-light mb-12 opacity-60">
                Get immediate notifications on session dates and exclusive insights directly on Telegram.
              </p>
              <a 
                href="https://t.me/+jOg74zBqjPpjNmM0" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 px-8 sm:px-10 py-5 bg-[#C9A84C] text-[#0D1B2A] font-bold uppercase tracking-[0.2em] text-[10px] sm:text-sm hover:bg-[#F5F0E8] transition-all duration-300"
              >
                Join Telegram
                <HiArrowRight className="w-5 h-5" />
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
