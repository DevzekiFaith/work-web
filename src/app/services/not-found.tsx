'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { HiHome, HiArrowLeft, HiExclamationCircle } from 'react-icons/hi';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <Header />
      
      {/* 404 Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Glassmorphism background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-72 h-72 bg-purple-300/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-300/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* 404 Icon */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex p-8 rounded-3xl neu-icon">
                <HiExclamationCircle className="w-20 h-20 text-purple-600 dark:text-purple-400" />
              </div>
            </motion.div>
            
            {/* 404 Text */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-8xl md:text-9xl font-bold text-gray-900 dark:text-white mb-4">
                404
              </h1>
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-white mb-6">
                Services Not Found
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 font-light max-w-2xl mx-auto leading-relaxed">
                The services section has been removed. Our programs are now showcased on the homepage. 
                Let us help you find what you&apos;re looking for.
              </p>
            </motion.div>
            
            {/* Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link 
                href="/" 
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 neu-button-primary text-white font-medium rounded-2xl transition-all duration-300 transform hover:scale-105"
              >
                <HiHome className="w-5 h-5" />
                Go Home
              </Link>
              <Link 
                href="/contact" 
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 glass-button text-gray-900 dark:text-white font-medium rounded-2xl transition-all duration-300"
              >
                <HiArrowLeft className="w-5 h-5" />
                Contact Us
              </Link>
            </motion.div>
            
            {/* Services Preview */}
            <motion.div
              className="mt-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="neu-card p-8 rounded-3xl max-w-2xl mx-auto">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Our Services
                </h3>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div className="text-center">
                    <div className="font-medium text-purple-600 dark:text-purple-400 mb-1">CONSULTING</div>
                    <div className="text-gray-600 dark:text-gray-300">Public Speaking & Workshops</div>
                  </div>
                  <div className="text-center">
                    <div className="font-medium text-purple-600 dark:text-purple-400 mb-1">MASTERCLASS</div>
                    <div className="text-gray-600 dark:text-gray-300">Person of Interest Program</div>
                  </div>
                  <div className="text-center">
                    <div className="font-medium text-purple-600 dark:text-purple-400 mb-1">UPGRADE ACADEMY</div>
                    <div className="text-gray-600 dark:text-gray-300">Professional Development</div>
                  </div>
                </div>
                <div className="text-center mt-6">
                  <Link 
                    href="/" 
                    className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium transition-colors duration-300"
                  >
                    View all services on homepage →
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
