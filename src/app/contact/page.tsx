'use client';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Toaster, toast } from 'react-hot-toast';
import { motion } from 'framer-motion';
import { HiMail, HiPhone, HiLocationMarker, HiCheckCircle, HiX, HiArrowRight } from 'react-icons/hi';
import { Fragment } from 'react';
import Link from 'next/link';

const contactInfo = [
  {
    icon: HiMail,
    title: 'Email Us',
    details: 'hello@mindvest.com',
    description: 'Send us an email anytime',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: HiPhone,
    title: 'Call Us',
    details: '+1 (555) 123-4567',
    description: 'Mon-Fri from 8am to 6pm',
    color: 'from-emerald-500 to-teal-500'
  },
  {
    icon: HiLocationMarker,
    title: 'Visit Us',
    details: '123 Innovation Drive',
    description: 'Tech City, TC 12345',
    color: 'from-purple-500 to-pink-500'
  }
];

const faqs = [
  {
    question: 'What services do you offer?',
    answer: 'We provide architectural design, construction, software solutions, space planning, and human capital development services.'
  },
  {
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary depending on scope and complexity. We provide detailed timelines during our initial consultation.'
  },
  {
    question: 'Do you work with international clients?',
    answer: 'Yes, we work with clients globally and have experience with international projects and regulations.'
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
    } catch (err) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Toaster position="top-center" reverseOrder={false} />
      
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
              <h1 className="heading-1 mb-6">
                Let us Start Your
                <span className="block">Project Together</span>
              </h1>
            </motion.div>
            
            <motion.p
              className="body-large mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Ready to transform your vision into reality? Get in touch with our expert team 
              and let's discuss how we can bring your ideas to life.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="section-padding bg-gray-50">
        <div className="container-fluid">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <motion.div
                  key={index}
                  className="card card-hover p-8 text-center group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${info.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="heading-4 mb-2">{info.title}</h3>
                  <p className="text-lg font-semibold text-indigo-600 mb-2">{info.details}</p>
                  <p className="body-base text-gray-600">{info.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding">
        <div className="container-fluid">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="heading-2 mb-6">Send Us a Message</h2>
              <p className="body-large mb-8 text-gray-600">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="form-input"
                  >
                    <option value="">Select a service</option>
                    <option value="architectural">Architectural Design</option>
                    <option value="construction">Construction</option>
                    <option value="software">Software Solutions</option>
                    <option value="space-planning">Space Planning</option>
                    <option value="human-capital">Human Capital Development</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    value={form.message}
                    onChange={handleChange}
                    className="form-textarea"
                    placeholder="Tell us about your project, timeline, budget, and any specific requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl w-full justify-center"
                >
                  {loading ? 'Sending Message...' : 'Send Message'}
                </button>
              </form>
            </motion.div>

            {/* FAQ Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="heading-2 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="card p-6">
                    <h3 className="font-semibold text-gray-900 mb-3">{faq.question}</h3>
                    <p className="body-base text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl text-white">
                <h3 className="text-xl font-semibold mb-4">Need Immediate Assistance?</h3>
                <p className="mb-4 text-indigo-100">
                  For urgent inquiries or immediate support, don't hesitate to call us directly.
                </p>
                <Link href="tel:+15551234567" className="btn bg-white text-indigo-600 hover:bg-gray-100">
                  Call Now: +1 (555) 123-4567
                </Link>
              </div>
            </motion.div>
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
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-8 text-center shadow-2xl transition-all">
                  <div className="flex justify-center mb-6">
                    <div className="inline-flex p-4 rounded-full bg-emerald-100">
                      <HiCheckCircle className="w-12 h-12 text-emerald-600" />
                    </div>
                  </div>
                  
                  <Dialog.Title className="text-2xl font-bold text-gray-900 mb-4">
                    Message Sent Successfully!
                  </Dialog.Title>
                  
                  <p className="text-gray-600 mb-6">
                    Thank you for reaching out to us. We've received your message and 
                    will get back to you within 24 hours.
                  </p>
                  
                  <div className="flex gap-4 justify-center">
                    <button
                      onClick={() => setIsOpen(false)}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 font-semibold rounded-lg border-2 border-indigo-600 dark:border-indigo-400 hover:bg-indigo-50 dark:hover:bg-gray-700 transition-all duration-200"
                    >
                      Close
                    </button>
                    <Link href="/services" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
                      Explore Services
                      <HiArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      <Footer />
    </div>
  );
}
