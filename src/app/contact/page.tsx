'use client';

import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Toaster, toast } from 'react-hot-toast';
import { motion, AnimatePresence } from 'framer-motion';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  // Auto-close modal after 3 seconds with fade-out
  if (open) {
    setTimeout(() => {
      setOpen(false);
    }, 3000);
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Failed to send');
      setSubmitted(true);
      setOpen(true);
      setForm({ name: '', email: '', message: '' });
      toast.success('Message sent successfully');
    } catch (err) {
      toast.error('Failed to send message. Try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 px-6 py-16 flex flex-col justify-center items-center">
      <Toaster position="top-center" reverseOrder={false} />

      <div className="w-full max-w-xl">
        <h1 className="text-5xl font-semibold mb-8 text-center tracking-tight">Let’s Connect</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full px-5 py-3 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@email.com"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full px-5 py-3 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <textarea
              id="message"
              name="message"
              placeholder="Tell us more about your project..."
              rows={5}
              required
              value={form.message}
              onChange={handleChange}
              className="w-full px-5 py-3 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 text-white font-medium text-lg rounded-md transition ${
              loading ? 'bg-gray-400' : 'bg-black hover:bg-gray-900'
            }`}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold mb-4">Our Office</h2>
          <p className="text-gray-600 mb-4">
            123 Innovation Way, Design City, DC 45678<br />
            Phone: (123) 456-7890<br />
            Email: contact@companyname.com
          </p>
          <div className="aspect-video w-full rounded-xl overflow-hidden shadow">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8438215325174!2d144.9559283153177!3d-37.81720997975143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5776fd6eebb5b6f!2sFederation%20Square!5e0!3m2!1sen!2sus!4v1611814646848!5m2!1sen!2sus"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <Dialog open={open} onClose={() => setOpen(false)} className="relative z-50">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50"
              aria-hidden="true"
            />
            <div className="fixed inset-0 flex items-center justify-center p-4">
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              >
                <Dialog.Panel className="bg-white p-6 rounded-xl max-w-md w-full text-center shadow-lg">
                  <div className="flex justify-center mb-4">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-500" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>
</div>
<Dialog.Title className="text-2xl font-semibold text-purple-600 mb-2">Message Sent!</Dialog.Title>
                  <p className="text-gray-600 mb-4">Thank you for reaching out. We'll get back to you shortly.</p>
                  <button
                    onClick={() => setOpen(false)}
                    className="mt-2 inline-block bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
                  >
                    Close
                  </button>
                </Dialog.Panel>
              </motion.div>
            </div>
          </Dialog>
        )}
      </AnimatePresence>
    </div>
  );
}
