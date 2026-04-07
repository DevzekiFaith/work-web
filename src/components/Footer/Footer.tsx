'use client';
import { FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';
import { motion } from 'framer-motion';

const socialLinks = [
  { name: 'LinkedIn', icon: FaLinkedinIn, href: 'https://linkedin.com' },
  { name: 'Twitter', icon: FaTwitter, href: 'https://twitter.com' },
  { name: 'Instagram', icon: FaInstagram, href: 'https://instagram.com' },
  { name: 'YouTube', icon: FaYoutube, href: 'https://youtube.com' },
  { name: 'WhatsApp', icon: FaWhatsapp, href: 'https://chat.whatsapp.com' }
];

export default function Footer() {
  return (
    <footer className="bg-[#0D1B2A] text-[#F5F0E8] py-24 md:py-48 overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-20 lg:gap-32 mb-24 md:mb-48">
          {/* Brand Identity */}
          <motion.div 
            className="max-w-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl md:text-5xl tracking-tight mb-4">
              Zeki Ubor
            </h2>
            <p className="text-[#C9A84C] font-semibold uppercase tracking-[0.2em] text-sm mb-6">
              Human Architecture
            </p>
            <p className="text-[#F5F0E8]/60 text-lg font-light leading-relaxed">
              Equipping individuals and organizations with the architectural 
              frameworks to access their highest potential and lead with purpose.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            className="grid grid-cols-2 gap-16 md:gap-32 lg:gap-40"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div>
              <h4 className="text-xs uppercase tracking-[0.3em] font-bold text-[#C9A84C] mb-8">Navigation</h4>
              <ul className="space-y-4">
                <li><Link href="/" className="text-[#F5F0E8]/70 hover:text-[#C9A84C] transition-colors duration-300 font-light">Home</Link></li>
                <li><Link href="/about" className="text-[#F5F0E8]/70 hover:text-[#C9A84C] transition-colors duration-300 font-light">About</Link></li>
                <li><Link href="/resources" className="text-[#F5F0E8]/70 hover:text-[#C9A84C] transition-colors duration-300 font-light">Resources</Link></li>
                <li><Link href="/contact" className="text-[#F5F0E8]/70 hover:text-[#C9A84C] transition-colors duration-300 font-light">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-[0.3em] font-bold text-[#C9A84C] mb-8">Resources</h4>
              <ul className="space-y-4">
                <li><Link href="/audit" className="text-[#F5F0E8]/70 hover:text-[#C9A84C] transition-colors duration-300 font-light">Architecture Audit</Link></li>
                <li><Link href="/newsletter" className="text-[#F5F0E8]/70 hover:text-[#C9A84C] transition-colors duration-300 font-light">Architecture Letter</Link></li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="pt-12 border-t border-[#F5F0E8]/10 flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Social Icons */}
          <div className="flex space-x-6">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F5F0E8]/40 hover:text-[#C9A84C] transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  aria-label={social.name}
                >
                  <Icon className="w-6 h-6" />
                </motion.a>
              );
            })}
          </div>

          {/* Copyright */}
          <div className="text-[#F5F0E8]/30 text-xs uppercase tracking-widest font-medium">
            © {new Date().getFullYear()} Zeki Ubor. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
