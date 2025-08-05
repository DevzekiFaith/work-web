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
      <section className="relative min-h-screen flex items-center justify-center bg-white">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.03),transparent_50%)]" />
        
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            {/* Main heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-8"
            >
              <h1 className="text-5xl md:text-7xl font-light text-gray-900 leading-tight tracking-tight">
                Transform
                <span className="block font-medium bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Ideas Into Reality
                </span>
              </h1>
            </motion.div>
            
            {/* Subtitle */}
            <motion.p
              className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed mb-12 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              We create exceptional architectural designs, innovative software solutions, 
              and develop human capital for a better tomorrow.
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center mb-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link 
                href="/services" 
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Explore Our Work
                <HiArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link 
                href="/contact" 
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-900 font-medium rounded-full border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-300"
              >
                Start a Project
                <HiArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>

            {/* Minimalist Stats */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {stats.map((stat, index) => (
                <motion.div 
                  key={index} 
                  className="text-center group cursor-default"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                >
                  <div className="text-3xl md:text-4xl font-light text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors duration-300">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-500 font-medium tracking-wide uppercase">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
              What We Do
            </h2>
            <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
              We transform ideas into reality through design, technology, and human expertise.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={index}
                  className="group text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Icon */}
                  <div className="mb-8">
                    <div className="inline-flex p-4 rounded-2xl bg-white shadow-sm group-hover:shadow-md transition-all duration-300 border border-gray-100">
                      <IconComponent className="w-8 h-8 text-gray-700 group-hover:text-indigo-600 transition-colors duration-300" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-medium text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed font-light">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link 
              href="/services" 
              className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 font-medium rounded-full border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              View All Services
              <HiArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
              Why Choose Us
            </h2>
            <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
              We deliver excellence through proven expertise and innovative solutions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="group text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Check icon */}
                <div className="mb-6">
                  <div className="inline-flex p-3 rounded-full bg-gray-100 group-hover:bg-indigo-100 transition-colors duration-300">
                    <HiCheckCircle className="w-6 h-6 text-gray-600 group-hover:text-indigo-600 transition-colors duration-300" />
                  </div>
                </div>
                
                <h3 className="text-lg font-medium text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
                  {feature}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-light text-gray-900 mb-8 leading-tight">
              Ready to bring your
              <span className="block font-medium bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                vision to life?
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
              Let us collaborate to create something extraordinary. Our team is ready to transform your ideas into reality.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="group inline-flex items-center justify-center gap-2 px-10 py-5 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Start Your Project
                <HiArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link 
                href="/services" 
                className="group inline-flex items-center justify-center gap-2 px-10 py-5 bg-white text-gray-900 font-medium rounded-full border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-300"
              >
                View Our Services
                <HiArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
