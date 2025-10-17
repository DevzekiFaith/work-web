'use client';
import Link from "next/link";
import { motion } from "framer-motion";
import { HiArrowRight, HiCheckCircle, HiMicrophone, HiAcademicCap, HiLightningBolt, HiNewspaper, HiBookOpen, HiShoppingCart } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const services = [
  {
    icon: HiMicrophone,
    title: "CONSULTING",
    description: "Unova Consulting offers comprehensive training sessions, strategy sessions, and framework development for institutions.",
    color: "from-purple-600 to-purple-800"
  },
  {
    icon: HiAcademicCap,
    title: "MASTERCLASS",
    description: "Transform into a person of interest through our comprehensive masterclass program designed to build your personal brand",
    color: "from-purple-700 to-purple-900"
  },
  {
    icon: HiLightningBolt,
    title: "UPGRADE ACADEMY",
    description: "Making better what you have or rebuilding what was laid down - comprehensive development and transformation programs",
    color: "from-purple-800 to-purple-950"
  }
];

const stats = [
  { number: "1000+", label: "Students Transformed" },
  { number: "50+", label: "Workshops Delivered" },
  { number: "15+", label: "Years Experience" },
  { number: "24/7", label: "Community Support" }
];

const features = [
  "Expert public speaking coaching",
  "Personal brand development",
  "Professional transformation programs",
  "Interactive workshops & seminars",
  "Training sessions for institutions",
  "Strategy development & planning",
  "Framework development & implementation",
  "Lifetime community access"
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        {/* Enhanced Glassmorphism background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-72 h-72 bg-purple-300/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-green-300/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            {/* Logo */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <img 
                src="/LB7.png" 
                alt="Lifebuild Logo" 
                className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 mx-auto object-contain"
              />
            </motion.div>

            {/* Main heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <h1 className="pt-22 text-6xl md:text-8xl lg:text-9xl font-light text-gray-900 dark:text-white leading-tight tracking-tight">
                Transform Your
                <span className="block font-medium bg-gradient-to-r from-purple-700 to-purple-900 bg-clip-text text-transparent">
                  Professional Journey
                </span>
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              className="text-2xl md:text-3xl lg:text-4xl text-gray-600 dark:text-gray-300 font-light leading-relaxed mb-12 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Elevate your professional presence through expert consulting, transformative masterclasses,
              and comprehensive upgrade programs designed to make you a person of interest.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center mb-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 px-10 py-5 neu-button-primary text-white font-semibold text-lg rounded-2xl transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
                <HiArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 px-10 py-5 glass-button text-gray-900 dark:text-white font-semibold text-lg rounded-2xl transition-all duration-300"
              >
                Start Your Journey
                <HiArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>

            {/* Neumorphism Stats */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center group cursor-default neu-card p-6 rounded-2xl hover:shadow-2xl transition-all duration-300"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                    {stat.number}
                  </div>
                  <div className="text-base md:text-lg text-gray-500 dark:text-gray-400 font-medium tracking-wide uppercase group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-300">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 dark:text-white mb-6">
              Our Core Programs
            </h2>
            <p className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 font-light max-w-3xl mx-auto">
              Three powerful pathways to transform your professional presence and become a person of interest.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={index}
                  className="group text-center neu-card p-8 rounded-3xl hover:shadow-2xl transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Icon */}
                  <div className="mb-8">
                    <div className="inline-flex p-8 rounded-2xl neu-icon group-hover:scale-110 transition-all duration-300">
                      <IconComponent className="w-14 h-14 text-purple-600 dark:text-purple-400" />
                    </div>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-medium text-gray-900 dark:text-white mb-4 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed font-light">
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
              href="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 glass-button text-gray-900 dark:text-white font-medium rounded-2xl transition-all duration-300"
            >
              Get Started Today
              <HiArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 dark:text-white mb-6">
              Why Choose Our Programs
            </h2>
            <p className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 font-light max-w-3xl mx-auto">
              We deliver transformation through proven methodologies, personalized coaching, and unwavering commitment to your success.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="group text-center neu-card p-8 rounded-2xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Check icon */}
                <div className="mb-6">
                  <div className="inline-flex p-6 rounded-2xl neu-icon group-hover:scale-110 transition-all duration-300">
                    <HiCheckCircle className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                  </div>
                </div>

                <h3 className="text-xl md:text-2xl font-medium text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                  {feature}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp Community Section */}
      <section className="py-24 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="mb-8">
              <div className="inline-flex p-6 rounded-2xl neu-icon group-hover:scale-110 transition-all duration-300">
                <FaWhatsapp className="w-12 h-12 text-green-500 dark:text-green-400" />
              </div>
            </div>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 dark:text-white mb-6">
              Join Our
              <span className="block font-medium bg-gradient-to-r from-purple-700 to-purple-900 bg-clip-text text-transparent">
                Community
              </span>
            </h2>

            <p className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 font-light mb-12 max-w-3xl mx-auto leading-relaxed">
              Connect with like-minded professionals, get exclusive updates, and access our supportive community on WhatsApp.
            </p>

            <a
              href="https://chat.whatsapp.com/HSjJNBgDSOuH0qzTSruS7Y?mode=ems_share_t"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 px-12 py-6 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold text-lg rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <FaWhatsapp className="w-6 h-6" />
              Join WhatsApp Group
              <HiArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Live News Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="mb-8">
              <div className="inline-flex p-6 rounded-2xl neu-icon">
                <HiNewspaper className="w-12 h-12 text-purple-600 dark:text-purple-400" />
              </div>
            </div>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 dark:text-white mb-6">
              Latest Updates
            </h2>
            <p className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 font-light max-w-3xl mx-auto">
              Stay informed with our latest news, upcoming events, and program announcements.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* News Item 1 */}
            <motion.div
              className="neu-card rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="text-base text-purple-600 dark:text-purple-400 font-medium mb-3 group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors duration-300">NEW PROGRAM</div>
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-4 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                Advanced Selling Skills for Creatives
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                Master the art of selling your creative work with our comprehensive 4-week program designed to transform you into a confident and successful creative entrepreneur.
              </p>
            </motion.div>

            {/* News Item 2 */}
            <motion.div
              className="neu-card rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="text-base text-purple-600 dark:text-purple-400 font-medium mb-3 group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors duration-300">UPCOMING EVENT</div>
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-4 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                Personal Brand Workshop
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300 mb-6">
                Learn how to build a powerful personal brand that makes you a person of interest in your industry.
              </p>
              <Link 
                href="https://selar.com/m/zeki-faith1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 neu-button-primary text-white font-semibold text-base rounded-xl transition-all duration-300 transform hover:scale-105 group-hover:shadow-lg"
              >
                <HiShoppingCart className="w-5 h-5" />
                Register Now
                <HiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>

            {/* News Item 3 */}
            <motion.div
              className="neu-card rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="text-base text-purple-600 dark:text-purple-400 font-medium mb-3 group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors duration-300">SUCCESS STORY</div>
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-4 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                Client Transformation Spotlight
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                Discover how Sarah transformed her career through our Upgrade Academy program and became a thought leader.
              </p>
            </motion.div>
          </div>

          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link
              href="/events"
              className="group inline-flex items-center gap-3 px-10 py-5 glass-button text-gray-900 dark:text-white font-semibold text-lg rounded-2xl transition-all duration-300"
            >
              View All News & Events
              <HiArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Bookstore Section */}
      <section className="py-24 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="mb-8">
              <div className="inline-flex p-6 rounded-2xl neu-icon">
                <HiBookOpen className="w-12 h-12 text-purple-600 dark:text-purple-400" />
              </div>
            </div>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 dark:text-white mb-6">
              Explore Our
              <span className="block font-medium bg-gradient-to-r from-purple-700 to-purple-900 bg-clip-text text-transparent">
                Bookstore
              </span>
            </h2>
            <p className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 font-light max-w-3xl mx-auto">
              Discover curated books, guides, and resources designed to accelerate your professional transformation and personal growth.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              className="neu-card p-8 rounded-3xl text-center group hover:shadow-2xl transition-all duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="inline-flex p-6 rounded-2xl neu-icon mb-6 group-hover:scale-110 transition-transform duration-300">
                <HiBookOpen className="w-12 h-12 text-purple-600 dark:text-purple-400 group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors duration-300" />
              </div>

              <h3 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white mb-4 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                Lifebuild Bookstore
              </h3>

              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                Access our carefully curated collection of books, guides, and resources that will help you become a person of interest in your industry.
                Each resource is selected to complement our programs and accelerate your transformation journey.
              </p>

              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <div className="flex items-center justify-center text-sm text-gray-600 dark:text-gray-300 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                  Professional Development
                </div>
                <div className="flex items-center justify-center text-sm text-gray-600 dark:text-gray-300 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                  Personal Branding
                </div>
                <div className="flex items-center justify-center text-sm text-gray-600 dark:text-gray-300 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                  Leadership & Communication
                </div>
              </div>

              <Link
                href="https://selar.com/m/zeki-faith1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 neu-button-primary text-white font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105"
              >
                <HiShoppingCart className="w-5 h-5" />
                Explore Bookstore
                <HiArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-light text-gray-900 dark:text-white mb-8 leading-tight">
              Ready to transform your
              <span className="block font-medium bg-gradient-to-r from-purple-700 to-purple-900 bg-clip-text text-transparent">
                professional journey?
              </span>
            </h2>

            <p className="text-xl text-gray-600 dark:text-gray-300 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
              Join thousands of professionals who have transformed their careers through our proven programs.
              Your journey to becoming a person of interest starts here.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 px-10 py-5 neu-button-primary text-white font-medium rounded-2xl transition-all duration-300 transform hover:scale-105"
              >
                Start Your Transformation
                <HiArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/events"
                className="group inline-flex items-center justify-center gap-2 px-10 py-5 glass-button text-gray-900 dark:text-white font-medium rounded-2xl transition-all duration-300"
              >
                View Upcoming Events
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
