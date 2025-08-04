"use client";

import {
  FiAperture,
  FiCpu,
  FiUsers,
  FiBriefcase,
  FiCheckCircle,
  FiSmile,
} from "react-icons/fi";
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import Image from "next/image"

const stats = [
  { icon: <FiBriefcase />, label: "Years in Business", value: "10+" },
  { icon: <FiCheckCircle />, label: "Projects Completed", value: "50+" },
  { icon: <FiSmile />, label: "Happy Clients", value: "25+" },
];

const services = [
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
];

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

      <section className="max-w-7xl mx-auto px-6 py-20 space-y-32">
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
          <div className="space-y-12">
            <Image
              src="/v5.jpg"
              width={600}
              height={400}
              alt="Mission"
              className="rounded-xl shadow-lg object-cover w-full h-72"
            />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              {stats.map((item, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-center text-purple-600 text-3xl">
                    {item.icon}
                  </div>
                  <h3 className="text-4xl font-bold text-purple-600">
                    {item.value}
                  </h3>
                  <p className="text-sm text-gray-500">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonial Block */}
        <div className="text-center max-w-3xl mx-auto">
          <blockquote className="bg-white rounded-xl shadow p-8 relative">
            <svg
              className="w-10 h-10 text-purple-300 absolute top-6 left-6 opacity-30"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M7.17 3.1C5.67 3.75 4.4 4.93 3.74 6.41..." />
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

        {/* Services */}
        <div className="text-center space-y-12">
          <h2 className="text-3xl font-bold">What We Do</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((card, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow p-6 hover:shadow-md transition"
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

        {/* Partners */}
        <div className="text-center space-y-10">
          <h2 className="text-3xl font-bold">Our Trusted Partners</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center justify-center">
            {[
              "/photo1.jpg",
              "/photo2.jpg",
              "/photo3.jpg",
              "/photo4.jpg",
            ].map((src, index) => (
              <Image
                key={index}
                src={src}
                width={144}
                height={80}
                alt={`Partner ${index + 1}`}
                className="w-36 h-20 object-contain grayscale hover:grayscale-0 transition ease-in-out duration-300 mx-auto"
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold">
            Let’s Build the Future Together
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
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
