'use client';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { motion } from "framer-motion";
import { HiArrowRight, HiOutlineUserGroup, HiOutlineLightBulb, HiOutlineOfficeBuilding } from "react-icons/hi";
import Link from "next/link";

export default function Services() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
  };

  const sections = [
    {
      title: "The Becoming Institute",
      tagline: "For Individuals",
      color: "bg-[#C9A84C]",
      textColor: "text-[#0D1B2A]",
      icon: HiOutlineUserGroup,
      description: "A sanctuary for personal evolution. We deconstruct legacy identities and blueprint a version of yourself that is engineered for global resonance.",
      offers: [
        "Personal Evolution Frameworks",
        "Group Coaching Cohort — 8 weeks",
        "Private 1:1 Coaching"
      ],
      cta: "Inquire for Coaching",
      link: "/contact"
    },
    {
      title: "The Leadership Architecture",
      tagline: "For Leaders",
      color: "bg-[#8B5E3C]",
      textColor: "text-[#F5F0E8]",
      icon: HiOutlineLightBulb,
      description: "Providing executives and entrepreneurs with the structural frameworks to lead with unshakeable authority and visionary precision.",
      offers: [
        "Executive Coaching",
        "Leadership Development Programs",
        "Keynote Speaking"
      ],
      cta: "Work With Zeki",
      link: "/contact"
    },
    {
      title: "Organizational Architecture",
      tagline: "For Organizations",
      color: "bg-[#4A6FA5]",
      textColor: "text-[#F5F0E8]",
      icon: HiOutlineOfficeBuilding,
      description: "Designing the internal mechanisms of institutions to ensure their human capital is aligned with their monumental vision.",
      offers: [
        "Culture Transformation",
        "Corporate Training",
        "Consulting Retainers"
      ],
      cta: "Partner With Mindvest Global",
      link: "/contact"
    }
  ];

  return (
    <div className="min-h-screen bg-[#F5F0E8] text-[#0D1B2A]">
      <Header />
      
      <main>
        {/* HERO SECTION */}
        <section className="relative pt-40 pb-20 md:pt-60 md:pb-48 lg:pt-80 overflow-hidden border-b border-[#0D1B2A]/5">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <motion.span 
              className="inline-block text-[#C9A84C] font-bold uppercase tracking-[0.4em] text-[10px] mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              The Services
            </motion.span>
            <motion.h1 
              className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight leading-[0.9] mb-12"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as const }}
            >
              Building <br />
              <span className="italic">Excellence</span> <br />
              With Precision
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-[#0D1B2A]/60 font-light max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              From personal identity to organizational culture, we provide the architectural blueprints for unshakeable impact.
            </motion.p>
          </div>
        </section>

        {/* SERVICES CONTENT */}
        <section className="py-32 md:py-48 lg:py-64">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="space-y-48 lg:space-y-72">
              {sections.map((section, index) => {
                const Icon = section.icon;
                return (
                  <motion.div 
                    key={index}
                    className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-20 lg:gap-48 items-center`}
                    {...fadeInUp}
                  >
                    {/* Visual/Icon Side */}
                    <div className="lg:w-1/2 w-full aspect-square relative bg-white border border-[#0D1B2A]/5 p-12 md:p-24 flex items-center justify-center overflow-hidden group">
                      <div className={`absolute top-0 ${index % 2 === 0 ? 'right-0' : 'left-0'} w-2 h-40 ${section.color} transition-all duration-700 group-hover:h-full`} />
                      <div className="text-[250px] font-display opacity-[0.02] absolute select-none tracking-tighter leading-none">0{index + 1}</div>
                      <div className={`w-36 h-36 md:w-48 md:h-48 ${section.color} ${section.textColor} flex items-center justify-center shadow-2xl relative z-10 transition-transform duration-700 group-hover:scale-105`}>
                        <Icon className="w-16 h-16 md:w-20 md:h-20" />
                      </div>
                    </div>

                    {/* Content Side */}
                    <div className="lg:w-1/2 w-full">
                      <motion.span 
                        className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#C9A84C] mb-6 block"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                      >
                        {section.tagline}
                      </motion.span>
                      <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-8 leading-tight">{section.title}</h2>
                      <p className="text-xl md:text-2xl text-[#0D1B2A]/70 font-light leading-relaxed mb-12">
                        {section.description}
                      </p>
                      
                      <div className="space-y-8 mb-16">
                        {section.offers.map((offer, i) => (
                          <motion.div 
                            key={i} 
                            className="flex items-center gap-6"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                          >
                            <div className={`w-2 h-2 ${section.color} flex-shrink-0`} />
                            <span className="text-base sm:text-lg font-medium tracking-tight text-[#0D1B2A]">{offer}</span>
                          </motion.div>
                        ))}
                      </div>

                      <Link 
                        href={section.link} 
                        className={`group inline-flex items-center gap-6 px-8 sm:px-12 py-5 sm:py-6 ${section.color} ${section.textColor} font-bold uppercase tracking-[0.3em] text-[10px] sm:text-xs transition-all duration-500 shadow-2xl hover:bg-[#0D1B2A] hover:text-white`}
                      >
                        {section.cta}
                        <HiArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* BESPOKE SECTION */}
        <section className="py-40 bg-[#0D1B2A] text-[#F5F0E8] relative overflow-hidden">
           {/* Subtle Architectural Pattern */}
          <div className="absolute inset-0 opacity-5" style={{backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h60v60H0V0zm1 1h58v58H1V1z' fill='%23C9A84C' fill-rule='evenodd'/%3E%3C/svg%3E")`}} />
          
          <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
            <motion.div className="max-w-4xl mx-auto" {...fadeInUp}>
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#C9A84C] mb-8 block">Bespoke Strategy</span>
              <h2 className="font-display text-5xl md:text-7xl mb-12 italic leading-tight">Need a Custom <br className="hidden md:block" /> Architectural Blueprint?</h2>
              <p className="text-xl md:text-2xl font-light mb-16 opacity-70 max-w-2xl mx-auto leading-relaxed">
                For complex institutional challenges or high-stakes individual evolution, we offer direct consultation and tailored strategy design.
              </p>
              <Link 
                href="/contact" 
                className="group inline-flex items-center gap-6 px-10 sm:px-16 py-6 sm:py-8 border border-[#C9A84C]/30 text-[#C9A84C] font-bold uppercase tracking-[0.4em] text-[10px] sm:text-xs transition-all duration-500 hover:bg-[#C9A84C] hover:text-[#0D1B2A] hover:border-[#C9A84C]"
              >
                Schedule A Private Consultation
                <HiArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
