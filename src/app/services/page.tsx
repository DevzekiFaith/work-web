'use client';
import Header from '@/components/Header/Header';
import ServiceCard from '@/components/ServiceCard/ServiceCard';
import Footer from '@/components/Footer/Footer';
import { motion } from 'framer-motion';
import { HiLightBulb, HiCog, HiDesktopComputer, HiHome, HiUsers, HiCheckCircle, HiArrowRight } from 'react-icons/hi';
import Link from 'next/link';

const services = [
  {
    title: 'Architectural Design',
    description: 'Creative and functional designs for modern infrastructure that blend aesthetics with functionality.',
    href: '/services/architectural',
    images: [
      '/sn1.jpg',
      '/sn2.jpg',
    ],
    features: [
      'Residential & Commercial Design',
      '3D Modeling & Visualization',
      'Sustainable Design Solutions',
      'Building Code Compliance',
      'Interior Design Integration'
    ],
    icon: HiLightBulb,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Construction',
    description: 'Reliable and efficient building from ground to finish with quality craftsmanship.',
    href: '/services/construction',
    images: [
      '/sn3.jpg',
      '/v5.jpg',
    ],
    features: [
      'General Contracting',
      'Project Management',
      'Quality Assurance',
      'Timeline Optimization',
      'Safety Compliance'
    ],
    icon: HiCog,
    color: 'from-emerald-500 to-teal-500'
  },
  {
    title: 'Space Planning',
    description: 'Maximizing space for productivity and comfort through strategic layout design.',
    href: '/services/space-planning',
    images: [
      '/s2.jpg',
      '/Natchai.jpg',
    ],
    features: [
      'Office Layout Optimization',
      'Workflow Analysis',
      'Furniture Selection',
      'Lighting Design',
      'Accessibility Planning'
    ],
    icon: HiHome,
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Software Solutions',
    description: 'Custom tech solutions to streamline your business operations and enhance productivity.',
    href: '/services/software-solutions',
    images: [
      '/v5.jpg',
      '/sn3.jpg',
    ],
    features: [
      'Custom Web Applications',
      'Mobile App Development',
      'Database Design',
      'API Integration',
      'Cloud Solutions'
    ],
    icon: HiDesktopComputer,
    color: 'from-indigo-500 to-purple-500'
  },
  {
    title: 'Human Capacity & Capital Development',
    description: 'Training and strategies to grow your team and vision through comprehensive development programs.',
    href: '/services/human-capacity',
    images: [
      '/photo3.jpg',
      '/photo4.jpg',
    ],
    features: [
      'Leadership Training',
      'Skills Development',
      'Team Building',
      'Performance Coaching',
      'Organizational Development'
    ],
    icon: HiUsers,
    color: 'from-rose-500 to-orange-500'
  },
];

const benefits = [
  'Expert consultation and planning',
  'Cutting-edge technology and methods',
  'Dedicated project management',
  'Quality assurance at every step',
  'Ongoing support and maintenance',
  'Competitive pricing and transparency'
];

export default function Services() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        {/* Background */}
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
          <motion.div
            className="absolute bottom-20 left-10 w-48 h-48 bg-gradient-to-br from-emerald-400/10 to-cyan-400/10 rounded-full blur-3xl"
            animate={{
              x: [0, -30, 0],
              y: [0, 40, 0],
            }}
            transition={{
              duration: 20,
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
              <h1 className="heading-1 mb-6 fontbold text-2xl flex items-center text-gray-400">
                Our Professional
                <span className="block">Services</span>
              </h1>
            </motion.div>
            
            <motion.p
              className="body-large mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              From architectural design to human capital development, we provide comprehensive 
              solutions that transform your vision into reality. Our expert team delivers 
              excellence across every service we offer.
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link href="/contact" className="flex w-full text-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Start Your Project
                <HiArrowRight className="w-5 h-5 arrow" />
              </Link>
              <Link href="/about" className="flex w-full text-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 font-semibold rounded-lg border-2 border-indigo-600 dark:border-indigo-400 hover:bg-indigo-50 dark:hover:bg-gray-700 transition-all duration-200">
                Learn About Us
                <HiArrowRight className="w-5 h-5 arrow" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-fluid">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-2 mb-4 text-center text-2xl fontbold text-gray-400">What We Offer</h2>
            <p className="body-large max-w-2xl mx-auto text-center text-gray-400">
              Explore our comprehensive range of services designed to meet 
              your unique needs and exceed your expectations.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="section-padding">
        <div className="container-fluid">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="heading-2 mb-6 text-2xl fontbold text-gray-400 mb-12">Why Choose Our Services?</h2>
              <p className="body-large mb-8">
                We combine years of expertise with innovative approaches to deliver 
                exceptional results. Our commitment to quality and client satisfaction 
                sets us apart in every project we undertake.
              </p>
              
              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <HiCheckCircle className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                    <span className="body-base">{benefit}</span>
                  </motion.div>
                ))}
              </div>
              
              <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Get Started Today
                <HiArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-2 gap-6">
                {services.slice(0, 4).map((service, index) => {
                  const IconComponent = service.icon;
                  return (
                    <motion.div
                      key={index}
                      className="card p-6 text-center group hover:scale-105 transition-transform duration-300"
                      whileHover={{ y: -5 }}
                    >
                      <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${service.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">{service.title}</h3>
                      <p className="text-sm text-gray-600 line-clamp-2">{service.description}</p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
        <div className="container-fluid">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold pb-12 pt-12">
              Ready to Transform Your Vision?
            </h2>
            <p className="text-xl text-indigo-100 mb-8">
              Let us discuss your project and explore how our services can 
              bring your ideas to life with professional excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn flex items-center gap-2 justify-center bg-white text-indigo-600 hover:bg-gray-100 rounded-lg px-6 py-3 w-60 mb-12 mt-12">
                Start Your Project
                <HiArrowRight className="w-5 h-5 arrow" />
              </Link>
              <Link href="/projects" className="btn flex items-center gap-2 justify-center border-2 border-white text-white hover:bg-white hover:text-indigo-600 rounded-lg px-6 py-3 w-60 mb-12 mt-12">
                View Our Work
                <HiArrowRight className="w-5 h-5 arrow" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
