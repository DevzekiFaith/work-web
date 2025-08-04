"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { FiAperture, FiCpu, FiUsers } from "react-icons/fi";
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: containerRef });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div ref={containerRef} className="relative">
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-1 bg-purple-600 origin-left z-50"
      />
      <section className="max-w-7xl mx-auto px-6 py-16 space-y-32">
        {/* Mission */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Our Mission
            </h1>
            <p className="text-lg text-gray-600">
              We empower clients through smart design, scalable digital
              products, and people-centric programs that make a real-world
              difference.
            </p>
          </div>
          <div>
            <Image
              src="/photo4.jpg"
              className="rounded-xl shadow-lg object-cover w-full h-72"
              width={600}
              height={400}
              alt="Photo"
            />
            {/* <Image
              src="/public/s5.jpg"
              alt="Mission"
              className="rounded-xl shadow-lg object-cover w-full h-72"
              width={300}
              height={300}
            /> */}
          </div>
        </div>

        {/* Testimonial Block */}
        <div className="text-center max-w-3xl mx-auto">
          <blockquote className="bg-white rounded-xl shadow p-8 relative">
            <svg
              className="w-10 h-10 text-purple-300 absolute top-6 left-6 opacity-30"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M7.17 3.1C5.67 3.75 4.4 4.93 3.74 6.41 2.67 8.8 2 11.46 2 14.25V21h7v-6H5.74c.07-1.61.4-3.2.98-4.69.32-.84.86-1.58 1.56-2.16l.89-.72-.47-4.33zm11 0c-1.5.65-2.77 1.83-3.43 3.31C14.67 8.8 14 11.46 14 14.25V21h7v-6h-3.26c.07-1.61.4-3.2.98-4.69.32-.84.86-1.58 1.56-2.16l.89-.72-.47-4.33z" />
            </svg>
            <p className="text-gray-700 text-lg italic">
              “Yonan Technologies transformed our vision into a breathtaking
              reality. Their seamless collaboration across architecture and tech
              exceeded every expectation.”
            </p>
            <footer className="mt-4 text-sm font-medium text-purple-600">
              — Grace Amadi, Founder @ BuildSphere
            </footer>
          </blockquote>
        </div>

        {/* What We Do */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-12">What We Do</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FiAperture />,
                title: "Architecture & Construction",
                text: "Modern, functional, and sustainable spaces tailored to your needs.",
              },
              {
                icon: <FiCpu />,
                title: "Software & Technology",
                text: "Powerful digital tools to streamline workflows and scale businesses.",
              },
              {
                icon: <FiUsers />,
                title: "Human Capital",
                text: "Upskilling teams through training, strategy, and growth programs.",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow p-6 text-center hover:shadow-md transition"
              >
                <div className="text-4xl mb-4 text-purple-600 flex justify-center">
                  {card.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                <p className="text-sm text-gray-600">{card.text}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Partner Logos Carousel */}
        <div className="text-center flex justify-center items-center flex-col space-y-8">
          <h2 className="text-3xl font-bold mb-6">Trusted by Partners</h2>
          <Swiper
            modules={[Autoplay, EffectFade]}
            slidesPerView={3}
            spaceBetween={30}
            loop
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            effect="fade"
            className="max-w-5xl mx-auto"
          >
            {[
              {
                src: "/p2.jpg",
                name: "BuildCore Inc.",
                description:
                  " working with mindvest has reduced the stress of finding new vendors daily",
              },
              {
                src: "/p3.jpg",
                name: "NextSpace Studios",
                description:
                  " working with mindvest has reduced the stress of finding new vendors daily",
              },
              {
                src: "/p4.jpg",
                name: "TechVision Group",
                description:
                  " working with mindvest has reduced the stress of finding new vendors daily",
              },
              {
                src: "/p5.jpg",
                name: "PeopleGrow Academy",
                description:
                  " working with mindvest has reduced the stress of finding new vendors daily",
              },
            ].map((partner, i) => (
              <SwiperSlide
                key={i}
                className="flex flex-col items-center justify-center gap-4"
              >
                <Image
                  src={partner.src}
                  width={400}
                  height={400}
                  alt={partner.name}
                  title={partner.name}
                  className="h-48 object-contain grayscale hover:grayscale-0 transition mb-2"
                />
                <p className="text-sm text-gray-500">{partner.name}</p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">
            Let’s Build the Future Together
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto mb-6">
            Whether you need a reliable construction partner, custom-built
            software, or tailored team development — we’re ready to collaborate.
          </p>
          <a
            href="/contact"
            className="inline-block bg-purple-600 text-white px-6 py-3 rounded-md font-medium hover:bg-purple-700 transition"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}
