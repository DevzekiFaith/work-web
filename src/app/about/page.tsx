'use client';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { motion } from 'framer-motion';
import { HiLightBulb, HiCog, HiUsers, HiBriefcase, HiCheckCircle, HiHeart, HiStar, HiArrowRight, HiBookOpen, HiShoppingCart } from 'react-icons/hi';
import { HiTrophy } from 'react-icons/hi2';
import Image from 'next/image';
import Link from 'next/link';

const stats = [
  { icon: HiBriefcase, label: "Years of Excellence", value: "15+", color: "text-purple-600" },
  { icon: HiCheckCircle, label: "Students Transformed", value: "1000+", color: "text-purple-600" },
  { icon: HiHeart, label: "Workshops Delivered", value: "50+", color: "text-purple-600" },
  { icon: HiTrophy, label: "Success Stories", value: "200+", color: "text-purple-600" },
];

const services = [
  {
    icon: HiLightBulb,
    title: "Consulting Services",
    description: "Expert guidance on public speaking, seminars, and workshops to elevate your communication skills and professional presence.",
    color: "from-purple-600 to-purple-800"
  },
  {
    icon: HiCog,
    title: "Masterclass Programs",
    description: "Transform into a person of interest through our comprehensive masterclass program designed to build your personal brand.",
    color: "from-purple-700 to-purple-900"
  },
  {
    icon: HiUsers,
    title: "Upgrade Academy",
    description: "Making better what you have or rebuilding what was laid down - comprehensive development and transformation programs.",
    color: "from-purple-800 to-purple-950"
  },
];

const values = [
  {
    title: "Transformation",
    description: "We believe in the power of personal and professional transformation to unlock your full potential.",
    icon: HiStar
  },
  {
    title: "Excellence",
    description: "Every program meets our rigorous standards for quality and delivers measurable results.",
    icon: HiTrophy
  },
  {
    title: "Community",
    description: "We build supportive communities where professionals can grow and learn together.",
    icon: HiUsers
  },
  {
    title: "Authenticity",
    description: "We help you develop your authentic voice and become a genuine person of interest.",
    icon: HiHeart
  }
];

const testimonials = [
  {
    quote: "Lifebuild transformed my professional journey completely. Their masterclass program helped me become a recognized thought leader in my industry.",
    author: "Sarah Johnson",
    position: "Marketing Director @ TechCorp",
    image: "/photo1.jpg"
  },
  {
    quote: "The consulting services at Lifebuild gave me the confidence and skills to speak at major conferences. I'm now a sought-after speaker in my field.",
    author: "Michael Chen",
    position: "Entrepreneur @ StartupXYZ",
    image: "/photo2.jpg"
  }
];

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-8 sm:pb-12 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"></div>
        
        {/* Enhanced Neumorphism Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-32 h-32 sm:w-48 sm:h-48 md:w-72 md:h-72 bg-purple-300/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-blue-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-36 h-36 sm:w-56 sm:h-56 md:w-80 md:h-80 bg-pink-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/4 right-1/4 w-28 h-28 sm:w-40 sm:h-40 md:w-64 md:h-64 bg-green-300/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              className="neu-card p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 rounded-2xl sm:rounded-3xl mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Logo */}
              <div className="mb-6 sm:mb-8">
                <Image 
                  src="/LB7.png" 
                  alt="Lifebuild Logo" 
                  width={128}
                  height={128}
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 mx-auto object-contain"
                  priority
                />
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl 3xl:text-9xl font-light text-gray-900 dark:text-white mb-4 sm:mb-6 leading-tight px-4">
                About
                <span className="block font-medium bg-gradient-to-r from-purple-700 to-purple-900 bg-clip-text text-transparent">
                  Lifebuild
                </span>
              </h1>
              
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-gray-600 dark:text-gray-300 font-light mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed px-4">
                Lifebuild empowers professionals through expert consulting, transformative masterclass programs, 
                and comprehensive upgrade academy that create lasting personal and professional transformation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 items-center">
            <motion.div
              className="neu-card p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl hover:shadow-2xl transition-all duration-300 group"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-light text-gray-900 dark:text-white mb-4 sm:mb-6 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">Our Mission</h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                To transform professionals into people of interest through expert consulting, 
                transformative masterclass programs, and comprehensive upgrade academy that build 
                tomorrow&apos;s leaders with today&apos;s proven methodologies.
              </p>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                We believe in the power of personal transformation, combining proven expertise 
                with authentic development to deliver professional solutions that exceed expectations and 
                create lasting value for our clients and their communities.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 neu-button-primary text-white font-semibold text-xs sm:text-sm md:text-base lg:text-lg rounded-xl sm:rounded-2xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto justify-center">
                Start Your Journey
                <HiArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </Link>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="neu-card p-8 rounded-3xl hover:shadow-2xl transition-all duration-300 group">
                <div className="relative rounded-2xl overflow-hidden group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src="/v5.jpg"
                    width={600}
                    height={400}
                    alt="Our Mission"
                    className="w-full h-80 object-cover rounded-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent rounded-2xl group-hover:from-purple-500/20 transition-all duration-300"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-10 sm:mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl font-light text-gray-900 dark:text-white mb-4 sm:mb-6 px-4">Our Impact in Numbers</h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-gray-600 dark:text-gray-300 font-light max-w-3xl mx-auto px-4">
              These numbers represent the trust our clients place in us and 
              the success we&apos;ve achieved together.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={index}
                  className="neu-card text-center p-8 group hover:shadow-2xl transition-all duration-300 rounded-3xl cursor-default"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  <div className="inline-flex p-4 rounded-2xl neu-icon mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-purple-600 dark:text-purple-400 group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors duration-300" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">{stat.value}</h3>
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 dark:text-gray-300 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-gray-900 dark:text-white mb-6">Our Core Values</h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-600 dark:text-gray-300 font-light max-w-3xl mx-auto">
              These principles guide our work and define our commitment to excellence 
              in everything we do.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={index}
                  className="text-center group neu-card p-8 rounded-3xl hover:shadow-2xl transition-all duration-300 cursor-pointer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  <div className="inline-flex p-4 rounded-2xl neu-icon mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-purple-600 dark:text-purple-400 group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-900 dark:text-white mb-4 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">{value.title}</h3>
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-gray-900 dark:text-white mb-6">What We Do</h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-600 dark:text-gray-300 font-light max-w-3xl mx-auto">
              Our comprehensive programs span multiple disciplines, allowing us to 
              provide integrated solutions for professional transformation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={index}
                  className="neu-card p-8 text-center group hover:shadow-2xl transition-all duration-300 rounded-3xl cursor-pointer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  <div className="inline-flex p-4 rounded-2xl neu-icon mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-purple-600 dark:text-purple-400 group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-900 dark:text-white mb-4 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">{service.title}</h3>
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">{service.description}</p>
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
            <Link href="/contact" className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 neu-button-primary text-white font-semibold text-base sm:text-lg rounded-2xl transition-all duration-300 transform hover:scale-105">
              Get Started Today
              <HiArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-white mb-6">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 font-light max-w-2xl mx-auto">
              Don&apos;t just take our word for it. Here&apos;s what our clients have to say 
              about working with Lifebuild.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="neu-card p-8 relative rounded-3xl hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="absolute top-6 left-6 text-purple-200 opacity-50 group-hover:text-purple-300 group-hover:opacity-70 transition-all duration-300">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-6 italic leading-relaxed group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="flex items-center space-x-4">
                  <div className="relative">
                  <Image
                    src={testimonial.image}
                    width={48}
                    height={48}
                    alt={testimonial.author}
                      className="w-12 h-12 rounded-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/20 to-transparent group-hover:from-purple-500/30 transition-all duration-300"></div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">{testimonial.author}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">{testimonial.position}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources & Learning Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-white mb-6">
              Resources & Learning
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 font-light max-w-2xl mx-auto">
              Expand your knowledge with our curated collection of books and resources designed to accelerate your professional transformation.
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Bookstore Card */}
            <motion.div
                className="neu-card p-8 rounded-3xl group hover:shadow-2xl transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
            >
                <div className="flex items-center mb-6">
                  <div className="inline-flex p-4 rounded-2xl neu-icon mr-4 group-hover:scale-110 transition-transform duration-300">
                    <HiBookOpen className="w-8 h-8 text-purple-600 dark:text-purple-400 group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors duration-300" />
              </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                Lifebuild Bookstore
              </h3>
                    <p className="text-sm text-purple-600 dark:text-purple-400 font-medium">Curated Resources</p>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                Discover our collection of books, guides, and resources that will help you become a person of interest in your industry. 
                Each resource is carefully selected to complement our programs and accelerate your transformation journey.
              </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    Professional Development Books
                  </div>
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    Personal Branding Guides
                  </div>
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    Leadership & Communication Resources
                  </div>
                </div>

                <Link 
                  href="https://selar.com/m/zeki-faith1" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 neu-button-primary text-white font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 w-full justify-center"
                >
                  <HiShoppingCart className="w-5 h-5" />
                  Explore Bookstore
                  <HiArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>

              {/* Events Card */}
              <motion.div
                className="neu-card p-8 rounded-3xl group hover:shadow-2xl transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="flex items-center mb-6">
                  <div className="inline-flex p-4 rounded-2xl neu-icon mr-4 group-hover:scale-110 transition-transform duration-300">
                    <HiLightBulb className="w-8 h-8 text-purple-600 dark:text-purple-400 group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                      Upcoming Events
                    </h3>
                    <p className="text-sm text-purple-600 dark:text-purple-400 font-medium">Live Learning</p>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                  Join our live workshops, masterclasses, and networking events designed to accelerate your professional growth and connect you with like-minded professionals.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    Public Speaking Masterclasses
                  </div>
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    Personal Branding Workshops
                  </div>
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    Networking & Community Events
                  </div>
                </div>

                <Link 
                  href="/events" 
                  className="inline-flex items-center gap-2 px-8 py-4 glass-button text-gray-900 dark:text-white font-semibold rounded-2xl transition-all duration-300 hover:shadow-xl w-full justify-center"
                >
                  View All Events
                  <HiArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
              </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="neu-card p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl sm:rounded-3xl hover:shadow-2xl transition-all duration-300 group">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-light mb-4 sm:mb-6 text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300 px-4">
              Let us Transform Your Future Together
            </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
              Whether you need consulting services, masterclass programs, or comprehensive upgrade academy — 
              Lifebuild is ready to collaborate and bring your professional vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 neu-button-primary text-white font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105">
                Start Your Journey
                  <HiArrowRight className="w-5 h-5 ml-2" />
              </Link>
                <Link href="/events" className="inline-flex items-center justify-center px-8 py-4 glass-button text-gray-900 dark:text-white font-semibold rounded-2xl transition-all duration-300 hover:shadow-xl">
                View Our Events
                  <HiArrowRight className="w-5 h-5 ml-2" />
              </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
