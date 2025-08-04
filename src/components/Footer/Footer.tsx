'use client';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaGithub } from 'react-icons/fa';
import { HiMail, HiPhone, HiLocationMarker, HiArrowRight } from 'react-icons/hi';
import Link from 'next/link';
import { motion } from 'framer-motion';

const footerLinks = {
  services: [
    { name: 'Architectural Design', href: '/services/architectural' },
    { name: 'Construction', href: '/services/construction' },
    { name: 'Software Solutions', href: '/services/software-solutions' },
    { name: 'Space Planning', href: '/services/space-planning' },
    { name: 'Human Capital Development', href: '/services/human-capacity' }
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Projects', href: '/projects' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' }
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' }
  ]
};

const socialLinks = [
  { name: 'Facebook', icon: FaFacebookF, href: 'https://facebook.com', color: 'hover:text-blue-400' },
  { name: 'Twitter', icon: FaTwitter, href: 'https://twitter.com', color: 'hover:text-sky-400' },
  { name: 'LinkedIn', icon: FaLinkedinIn, href: 'https://linkedin.com', color: 'hover:text-blue-500' },
  { name: 'Instagram', icon: FaInstagram, href: 'https://instagram.com', color: 'hover:text-pink-400' },
  { name: 'GitHub', icon: FaGithub, href: 'https://github.com', color: 'hover:text-gray-300' }
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container-fluid relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="mb-6">
                  <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-lg font-bold text-2xl tracking-tight inline-block mb-4">
                    mindvest
                  </div>
                  <p className="body-base text-gray-300 max-w-md">
                    Transforming visions into reality through innovative architectural design, 
                    construction excellence, and comprehensive business solutions.
                  </p>
                </div>

                {/* Contact Info */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3 text-gray-300">
                    <HiMail className="w-5 h-5 text-indigo-400" />
                    <span className="text-sm">hello@mindvest.com</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <HiPhone className="w-5 h-5 text-indigo-400" />
                    <span className="text-sm">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <HiLocationMarker className="w-5 h-5 text-indigo-400" />
                    <span className="text-sm">123 Innovation Drive, Tech City, TC 12345</span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <motion.a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-3 bg-gray-800 rounded-lg transition-all duration-200 ${social.color} hover:scale-110 hover:bg-gray-700`}
                        whileHover={{ y: -2 }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        aria-label={social.name}
                      >
                        <IconComponent className="w-5 h-5" />
                      </motion.a>
                    );
                  })}
                </div>
              </motion.div>
            </div>

            {/* Services */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold mb-6 text-white">Services</h3>
                <ul className="space-y-3">
                  {footerLinks.services.map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.href}
                        className="text-gray-300 hover:text-indigo-400 transition-colors duration-200 text-sm block py-1"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Company */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold mb-6 text-white">Company</h3>
                <ul className="space-y-3">
                  {footerLinks.company.map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.href}
                        className="text-gray-300 hover:text-indigo-400 transition-colors duration-200 text-sm block py-1"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Legal */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold mb-6 text-white">Legal</h3>
                <ul className="space-y-3">
                  {footerLinks.legal.map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.href}
                        className="text-gray-300 hover:text-indigo-400 transition-colors duration-200 text-sm block py-1"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <motion.div
          className="border-t border-gray-700 py-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-4 text-white">Stay Updated</h3>
            <p className="text-gray-300 mb-6">Get the latest news, updates, and insights delivered to your inbox.</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="form-input flex-1 bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-indigo-500"
              />
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl whitespace-nowrap">
                Subscribe
                <HiArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-gray-700 py-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} Yonan Technologies. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>Made with ❤️ for innovation</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
