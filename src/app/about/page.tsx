'use client';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { motion } from 'framer-motion';
import { HiLightBulb, HiCog, HiUsers, HiBriefcase, HiCheckCircle, HiHeart, HiStar, HiArrowRight } from 'react-icons/hi';
import { HiTrophy } from 'react-icons/hi2';
import Image from 'next/image';
import Link from 'next/link';

const stats = [
  { icon: HiBriefcase, label: "Years of Excellence", value: "10+", color: "text-indigo-600" },
  { icon: HiCheckCircle, label: "Projects Completed", value: "500+", color: "text-emerald-600" },
  { icon: HiHeart, label: "Happy Clients", value: "50+", color: "text-rose-600" },
  { icon: HiTrophy, label: "Awards Won", value: "15+", color: "text-amber-600" },
];

const services = [
  {
    icon: HiLightBulb,
    title: "Architecture & Construction",
    description: "Modern, functional, and sustainable spaces tailored to your unique vision and needs.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: HiCog,
    title: "Software & Technology",
    description: "Powerful digital tools and custom solutions to streamline workflows and scale businesses.",
    color: "from-indigo-500 to-purple-500"
  },
  {
    icon: HiUsers,
    title: "Human Capital Development",
    description: "Comprehensive training programs and strategies to upskill teams and drive growth.",
    color: "from-emerald-500 to-teal-500"
  },
];

const values = [
  {
    title: "Innovation",
    description: "We embrace cutting-edge technologies and creative solutions to deliver exceptional results.",
    icon: HiStar
  },
  {
    title: "Quality",
    description: "Every project meets our rigorous standards for excellence and attention to detail.",
    icon: HiTrophy
  },
  {
    title: "Collaboration",
    description: "We work closely with our clients as partners to achieve shared success.",
    icon: HiUsers
  },
  {
    title: "Integrity",
    description: "Transparency, honesty, and ethical practices guide everything we do.",
    icon: HiHeart
  }
];

const testimonials = [
  {
    quote: "Mindvest transformed our vision into a breathtaking reality. Their seamless collaboration across architecture and technology exceeded every expectation.",
    author: "Grace Amadi",
    position: "Founder @ BuildSphere",
    image: "/photo1.jpg"
  },
  {
    quote: "The team's expertise in both construction and software development made them the perfect partner for our complex project requirements.",
    author: "Michael Chen",
    position: "CEO @ TechConstruct",
    image: "/photo2.jpg"
  }
];

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-br from-indigo-400/10 to-purple-400/10 rounded-full blur-3xl"
            animate={{
              x: [0, 50, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>

        <div className="container-fluid relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-2xl mb-2 ml-12 font-bold flex">
                About
                <span className="text-gray-400">Mindvest</span>
              </h1>
            </motion.div>
            
            <motion.p
              className="body-large mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              We empower clients through innovative design, scalable digital solutions, 
              and people-centric programs that create lasting impact and drive real-world success.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="container-fluid">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="heading-2 mb-6 font-bold text-gray-400 text-center text-2xl">Our Mission</h2>
              <p className="body-large mb-6">
                To transform visions into reality through innovative architectural design, 
                reliable construction, cutting-edge software solutions, and comprehensive 
                human capital development.
              </p>
              <p className="body-base text-gray-600 mb-8">
                We believe in the power of collaboration, combining technical expertise 
                with creative vision to deliver solutions that exceed expectations and 
                create lasting value for our clients.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Start Your Project
                <HiArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-2xl overflow-hidden">
                <Image
                  src="/v5.jpg"
                  width={600}
                  height={400}
                  alt="Our Mission"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-fluid">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-2 mb-4 font-bold text-gray-400 text-center text-2xl mt-12">Our Impact in Numbers</h2>
            <p className="body-large max-w-2xl mx-auto">
              These numbers represent the trust our clients place in us and 
              the success we&apos;ve achieved together.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={index}
                  className="card text-center p-8 group hover:scale-105 transition-transform duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={`inline-flex p-4 rounded-2xl bg-gray-100 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`w-8 h-8 ${stat.color}`} />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding">
        <div className="container-fluid">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-2 mb-4 font-bold text-gray-400 text-center mt-12 text-2xl">Our Core Values</h2>
            <p className="body-large max-w-2xl mx-auto">
              These principles guide our work and define our commitment to excellence 
              in everything we do.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={index}
                  className="text-center group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="heading-4 mb-4">{value.title}</h3>
                  <p className="body-base text-gray-600">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-gray-50">
        <div className="container-fluid">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-2 mb-4 font-bold text-gray-400 text-center mt-12 text-2xl">What We Do</h2>
            <p className="body-large max-w-2xl mx-auto">
              Our comprehensive services span multiple disciplines, allowing us to 
              provide integrated solutions for complex challenges.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={index}
                  className="card card-hover p-8 text-center group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${service.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="heading-4 mb-4">{service.title}</h3>
                  <p className="body-base text-gray-600">{service.description}</p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link href="/services" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Explore All Services
              <HiArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container-fluid">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-2 mb-4 font-bold text-gray-400 text-center text-2xl mt-12">What Our Clients Say</h2>
            <p className="body-large max-w-2xl mx-auto">
              Don&apos;t just take our word for it. Here&apos;s what our clients have to say 
              about working with Mindvest.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="card p-8 relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="absolute top-6 left-6 text-indigo-200 opacity-50">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="body-base text-gray-700 mb-6 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="flex items-center space-x-4">
                  <Image
                    src={testimonial.image}
                    width={48}
                    height={48}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.position}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-br from-indigo-600 to-purple-700 text-white mt-12">
        <div className="container-fluid">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-2xl mt-12">
              Let us Build the Future Together
            </h2>
            <p className="text-xl text-indigo-100 mb-8">
              Whether you need architectural design, construction services, custom software, 
              or team development — we&apos;re ready to collaborate and bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn bg-white text-indigo-600 hover:bg-gray-100 rounded-lg px-6 py-3 font-semibold mb-4">
                Start Your Project
              </Link>
              <Link href="/projects" className="btn border-2 border-white text-white hover:bg-white hover:text-indigo-600 rounded-lg px-6 py-3 font-semibold mb-4">
                View Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
