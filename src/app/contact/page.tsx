'use client';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Toaster, toast } from 'react-hot-toast';
import { motion } from 'framer-motion';
import { HiMail, HiPhone, HiLocationMarker, HiCheckCircle, HiArrowRight, HiChat, HiSupport, HiUser, HiOfficeBuilding, HiGlobe, HiClock } from 'react-icons/hi';
import { Fragment } from 'react';
import Link from 'next/link';

const contactInfo = [
  {
    icon: HiMail,
    title: 'Email Us',
    details: 'hello@lifebuild.com',
    description: 'Send us an email anytime',
    color: 'from-purple-500 to-purple-700'
  },
  {
    icon: HiPhone,
    title: 'Call Us',
    details: '+2347014441418',
    description: 'Mon-Fri from 8am to 6pm',
    color: 'from-purple-600 to-purple-800'
  },
  {
    icon: HiLocationMarker,
    title: 'Visit Us',
    details: 'Lifebuild Office',
    description: 'Professional Development Center',
    color: 'from-purple-700 to-purple-900'
  }
];

const faqs = [
  {
    question: 'What services do you offer?',
    answer: 'We provide consulting on public speaking, seminars and workshops, masterclass programs for becoming a person of interest, and upgrade academy for professional development.'
  },
  {
    question: 'How long does a typical program take?',
    answer: 'Program durations vary from 4-week intensive courses to 12-week comprehensive transformations. We provide detailed timelines during our initial consultation.'
  },
  {
    question: 'Do you work with international clients?',
    answer: 'Yes, we work with clients globally and offer both virtual and in-person sessions to accommodate different time zones and preferences.'
  }
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', service: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsOpen(true);
      setForm({ name: '', email: '', phone: '', company: '', service: '', message: '' });
      toast.success('Message sent successfully!');
    } catch {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <Header />
      <Toaster position="top-center" reverseOrder={false} />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"></div>

        {/* Enhanced Glassmorphism Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-20 w-72 h-72 bg-purple-300/20 rounded-full blur-3xl"
            animate={{
              x: [0, 50, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div
            className="absolute bottom-20 right-20 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl"
            animate={{
              x: [0, -30, 0],
              y: [0, 40, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-300/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-8">
                <div className="inline-flex p-6 rounded-3xl neu-icon">
                  <HiChat className="w-12 h-12 text-purple-600 dark:text-purple-400" />
                </div>
              </div>
              
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-light text-gray-900 dark:text-white mb-6 leading-tight">
                Let us Start Your
                <span className="block font-medium bg-gradient-to-r from-purple-700 to-purple-900 bg-clip-text text-transparent">
                  Transformation Together
                </span>
              </h1>
              
              <p className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 font-light max-w-3xl mx-auto leading-relaxed">
                Ready to become a person of interest? Get in touch with our team to begin your professional transformation journey.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <motion.div
                  key={index}
                  className="neu-card p-8 rounded-3xl text-center group hover:scale-105 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="inline-flex p-4 rounded-2xl neu-icon mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-2">{info.title}</h3>
                  <p className="text-xl md:text-2xl font-medium text-purple-600 dark:text-purple-400 mb-2">{info.details}</p>
                  <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">{info.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Contact Form Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 dark:text-white mb-6">
                Start Your Journey
              </h2>
              <p className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 font-light max-w-3xl mx-auto">
                Fill out the form below and we&apos;ll get back to you within 24 hours to discuss your transformation goals.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                className="neu-card p-8 rounded-3xl"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        <HiUser className="inline w-4 h-4 mr-2" />
                        Full Name *
                    </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 neu-input rounded-2xl focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all duration-300 placeholder-white/60 dark:placeholder-gray-300/60 text-white dark:text-gray-300"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        <HiMail className="inline w-4 h-4 mr-2" />
                        Email Address *
                    </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 neu-input rounded-2xl focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all duration-300 placeholder-white/60 dark:placeholder-gray-300/60 text-white dark:text-gray-300"
                        placeholder="Enter your email"
                      />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        <HiPhone className="inline w-4 h-4 mr-2" />
                      Phone Number
                    </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 neu-input rounded-2xl focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all duration-300 placeholder-white/60 dark:placeholder-gray-300/60 text-white dark:text-gray-300"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        <HiOfficeBuilding className="inline w-4 h-4 mr-2" />
                      Company
                    </label>
                      <input
                        type="text"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 neu-input rounded-2xl focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all duration-300 placeholder-white/60 dark:placeholder-gray-300/60 text-white dark:text-gray-300"
                        placeholder="Enter your company"
                      />
                  </div>
                </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      <HiGlobe className="inline w-4 h-4 mr-2" />
                      Service Interest
                  </label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 neu-input rounded-2xl focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all duration-300 text-white dark:text-gray-300"
                    >
                      <option value="">Select a service</option>
                      <option value="consulting">Consulting Services</option>
                      <option value="masterclass">Masterclass Program</option>
                      <option value="upgrade-academy">Upgrade Academy</option>
                      <option value="general">General Inquiry</option>
                    </select>
                </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      <HiChat className="inline w-4 h-4 mr-2" />
                      Message *
                  </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 neu-input rounded-2xl focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all duration-300 resize-none placeholder-white/60 dark:placeholder-gray-300/60 text-white dark:text-gray-300"
                      placeholder="Tell us about your goals and how we can help you transform..."
                    />
                </div>

                  <motion.button
                    type="submit"
                    disabled={loading}
                    className="w-full neu-button-primary py-4 text-white font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                      {loading ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Sending Message...
                      </div>
                      ) : (
                      <div className="flex items-center justify-center">
                        <HiArrowRight className="w-5 h-5 mr-2" />
                          Send Message
                      </div>
                      )}
                  </motion.button>
              </form>
            </motion.div>

              {/* Additional Info */}
            <motion.div
                className="space-y-8"
                initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
                {/* Response Time */}
                <div className="neu-card p-8 rounded-3xl">
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-2xl neu-icon mr-4">
                      <HiClock className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Quick Response</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    We typically respond to all inquiries within 24 hours. For urgent matters, please call us directly.
                  </p>
              </div>

                {/* Consultation Info */}
                <div className="neu-card p-8 rounded-3xl">
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-2xl neu-icon mr-4">
                      <HiSupport className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Free Consultation</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                    Every new client gets a complimentary 30-minute consultation to discuss their goals and determine the best path forward.
                  </p>
                  <Link 
                    href="/events" 
                    className="inline-flex items-center gap-2 px-6 py-3 neu-button-primary text-white font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105"
                  >
                    View Our Events
                    <HiArrowRight className="w-4 h-4" />
                </Link>
              </div>

                {/* Success Stories */}
                <div className="neu-card p-8 rounded-3xl">
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-2xl neu-icon mr-4">
                      <HiCheckCircle className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Proven Results</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Over 1000+ professionals have transformed their careers through our programs. Join our community of successful leaders.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-white mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 font-light max-w-2xl mx-auto">
              Find answers to common questions about our programs and services.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="neu-card p-8 rounded-3xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{faq.question}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{faq.answer}</p>
            </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Modal */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={() => setIsOpen(false)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden glass-card p-8 text-left align-middle shadow-xl transition-all rounded-3xl">
                  <div className="text-center">
                    <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full neu-icon mb-6">
                      <HiCheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                    <Dialog.Title as="h3" className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                      Message Sent Successfully!
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-gray-600 dark:text-gray-300">
                        Thank you for reaching out! We&apos;ve received your message and will get back to you within 24 hours.
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 flex gap-4">
                    <button
                      type="button"
                      onClick={() => setIsOpen(false)}
                      className="flex-1 glass-button text-gray-900 dark:text-white font-semibold rounded-2xl py-3 transition-all duration-300"
                    >
                      Close
                    </button>
                    <Link 
                      href="/events" 
                      className="flex-1 neu-button-primary text-white font-semibold rounded-2xl py-3 transition-all duration-300 transform hover:scale-105 text-center inline-flex items-center justify-center"
                    >
                      View Events
                      <HiArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      {/* Floating Support Button */}
      <motion.div
        className="fixed bottom-8 right-8 z-50"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <a 
          href="https://wa.me/2347014441418" 
          target="_blank" 
          rel="noopener noreferrer"
          className="neu-button-primary p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 group inline-block"
        >
          <HiChat className="w-6 h-6 text-white group-hover:rotate-12 transition-transform duration-300" />
        </a>
      </motion.div>

      {/* Enhanced Support Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 dark:text-white mb-4">
              Need Immediate Assistance?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 font-light">
              Our support team is here to help you get started on your transformation journey.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              className="neu-card p-8 rounded-3xl text-center group hover:scale-105 transition-all duration-300"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex p-4 rounded-2xl neu-icon mb-6 group-hover:scale-110 transition-transform duration-300">
                <HiSupport className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">WhatsApp Support</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Get instant answers to your questions through WhatsApp. We respond within minutes during business hours.
              </p>
              <a 
                href="https://wa.me/2347014441418" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block neu-button-primary px-6 py-3 text-white font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105"
              >
                Start WhatsApp Chat
              </a>
            </motion.div>

            <motion.div
              className="neu-card p-8 rounded-3xl text-center group hover:scale-105 transition-all duration-300"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex p-4 rounded-2xl neu-icon mb-6 group-hover:scale-110 transition-transform duration-300">
                <HiPhone className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Phone Consultation</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Schedule a free 30-minute consultation to discuss your goals.
              </p>
              <button className="neu-button-primary px-6 py-3 text-white font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105">
                Schedule Call
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}