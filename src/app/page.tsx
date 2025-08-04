'use client';
import Link from "next/link";
import { motion } from "framer-motion";
import { HiArrowRight, HiCheckCircle, HiLightBulb, HiCog, HiUsers } from "react-icons/hi";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const services = [
  {
    icon: HiLightBulb,
    title: "Architectural Design",
    description: "Creative and functional designs for modern infrastructure",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: HiCog,
    title: "Construction",
    description: "Reliable and efficient building from ground to finish",
    color: "from-emerald-500 to-teal-500"
  },
  {
    icon: HiUsers,
    title: "Human Capital Development",
    description: "Training and strategies to grow your team and vision",
    color: "from-purple-500 to-pink-500"
  }
];

const stats = [
  { number: "500+", label: "Projects Completed" },
  { number: "50+", label: "Happy Clients" },
  { number: "10+", label: "Years Experience" },
  { number: "24/7", label: "Support Available" }
];

const features = [
  "Professional architectural design",
  "Quality construction services",
  "Custom software solutions",
  "Strategic space planning",
  "Expert team development"
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-full blur-3xl"
            animate={{
              x: [0, 30, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div
            className="absolute bottom-10 left-10 w-64 h-64 bg-gradient-to-br from-emerald-400/20 to-cyan-400/20 rounded-full blur-3xl"
            animate={{
              x: [0, -30, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>

        <div className="container-fluid relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="heading-1 mb-6">
                Transform Your Vision Into
                <span className="block">Reality</span>
              </h1>
            </motion.div>
            
            <motion.p
              className="body-large mb-8 max-w-2xl mx-auto px-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              We specialize in <strong>architectural design</strong>, <strong>construction</strong>, 
              <strong> software solutions</strong>, <strong>space planning</strong>, and 
              <strong className="text-indigo-600"> human capital development</strong>. 
              Let's build something extraordinary together.
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12 px-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link href="/services" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl group">
                Explore Services
                <HiArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 font-semibold rounded-lg border-2 border-indigo-600 dark:border-indigo-400 hover:bg-indigo-50 dark:hover:bg-gray-700 transition-all duration-200">
                Contact Us Today
                <HiArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-indigo-600 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-gray-50">
        <div className="container-fluid px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-2 mb-4">Our Core Services</h2>
            <p className="body-large max-w-2xl mx-auto">
              From concept to completion, we provide comprehensive solutions 
              tailored to your unique needs and vision.
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
              View All Services
              <HiArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-fluid px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-2 mb-4">Our Core Features</h2>
            <p className="body-large max-w-2xl mx-auto">
              From concept to completion, we provide comprehensive solutions 
              tailored to your unique needs and vision.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="card card-hover p-8 text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="heading-4 mb-4">{feature}</h3>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link href="/services" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
              View All Services
              <HiArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding">
        <div className="container-fluid px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="heading-2 mb-6">Why Choose Mindvest?</h2>
              <p className="body-large mb-8">
                With years of experience and a commitment to excellence, 
                we deliver solutions that exceed expectations and drive success.
              </p>
              
              <div className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <HiCheckCircle className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                    <span className="body-base">{feature}</span>
                  </motion.div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/services" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Explore Our Services
                  <HiArrowRight className="w-5 h-5" />
                </Link>
                <Link href="/about" className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 font-semibold rounded-lg border-2 border-indigo-600 dark:border-indigo-400 hover:bg-indigo-50 dark:hover:bg-gray-700 transition-all duration-200">
                  Learn About Us
                  <HiArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-8 text-white">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 rounded-2xl backdrop-blur-sm"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
                  <p className="text-indigo-100 mb-6">
                    Let's discuss your project and explore how we can bring your vision to life.
                  </p>
                  <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
                    Contact Us Today
                    <HiArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
