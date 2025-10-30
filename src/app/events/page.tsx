'use client';
import { motion } from "framer-motion";
import { HiCalendar, HiLocationMarker, HiClock, HiUsers, HiAcademicCap, HiLightningBolt, HiCheckCircle } from "react-icons/hi";
import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const upcomingEvents = [
  {
    id: 1,
    title: "Masterclass",
    type: "MASTERCLASS",
    date: "2024-02-15",
    time: "10:00 AM - 4:00 PM",
    location: "Virtual & In-Person",
    description: "Transform into a person of interest through our comprehensive masterclass program. Learn advanced techniques for becoming a recognized thought leader, building authentic influence, and creating lasting professional impact.",
    instructor: "Expert Transformation Coach",
    maxParticipants: 25,
    originalPrice: "$497",
    currentPrice: "$100",
    icon: HiAcademicCap,
    color: "from-purple-600 to-purple-800"
  },
  {
    id: 2,
    title: "Upgrade Academy Intensive",
    type: "ACADEMY",
    date: "2024-03-01",
    time: "9:00 AM - 5:00 PM",
    location: "Executive Training Center",
    description: "Comprehensive transformation program to rebuild and upgrade your professional foundation. Perfect for career transitions and skill enhancement.",
    instructor: "Transformation Specialist",
    maxParticipants: 15,
    originalPrice: "$997",
    currentPrice: "$220",
    icon: HiLightningBolt,
    color: "from-purple-800 to-purple-950"
  }
];

const eventTypes = [
  { name: "All Events", count: upcomingEvents.length },
  { name: "Masterclass", count: upcomingEvents.filter(e => e.type === "MASTERCLASS").length },
  { name: "Academy", count: upcomingEvents.filter(e => e.type === "ACADEMY").length }
];

export default function Events() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [subscriptionStatus, setSubscriptionStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      setErrorMessage('Please enter your email address');
      setSubscriptionStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubscriptionStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (data.success) {
        setSubscriptionStatus('success');
        setEmail('');
      } else {
        setErrorMessage(data.error || 'Something went wrong. Please try again.');
        setSubscriptionStatus('error');
      }
    } catch {
      setErrorMessage('Network error. Please check your connection and try again.');
      setSubscriptionStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-8">
              <img 
                src="/LB7.png" 
                alt="Lifebuild Logo" 
                className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 mx-auto object-contain mb-6"
              />
              <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-purple-600 to-purple-800 shadow-lg">
                <HiCalendar className="w-12 h-12 text-white" />
              </div>
            </div>
            
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-light text-gray-900 dark:text-white mb-6 leading-tight">
              Upcoming
              <span className="block font-medium bg-gradient-to-r from-purple-700 to-purple-900 bg-clip-text text-transparent">
                Events & Programs
              </span>
            </h1>
            
            <p className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 font-light max-w-3xl mx-auto leading-relaxed">
              Join our transformative events designed to elevate your professional presence and transform you into a person of interest in your industry.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Event Types Filter */}
      <section className="py-12 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {eventTypes.map((type, index) => (
              <motion.button
                key={index}
                className="px-8 py-4 rounded-full border border-gray-200 dark:border-gray-600 hover:border-purple-300 dark:hover:border-purple-500 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-purple-700 dark:hover:text-purple-400 font-semibold text-lg"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                {type.name} ({type.count})
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {upcomingEvents.map((event, index) => {
              const IconComponent = event.icon;
              return (
                <motion.div
                  key={event.id}
                  className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-600"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Event Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${event.color} shadow-sm`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-base text-purple-600 dark:text-purple-400 font-medium mb-1">
                          {event.type}
                        </div>
                        <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white">
                          {event.title}
                        </h3>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex flex-col items-end gap-1">
                        <div className="text-lg text-gray-500 dark:text-gray-400 line-through">
                          {event.originalPrice}
                        </div>
                        <div className="text-3xl md:text-4xl font-bold text-purple-700 dark:text-purple-400">
                          {event.currentPrice}
                        </div>
                        <div className="text-sm text-green-600 dark:text-green-400 font-medium">
                          Limited Time Offer
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Event Details */}
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                      <HiCalendar className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                      <span className="font-medium text-lg">{new Date(event.date).toLocaleDateString('en-US', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}</span>
                    </div>
                    
                    <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                      <HiClock className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                      <span className="text-lg">{event.time}</span>
                    </div>
                    
                    <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                      <HiLocationMarker className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                      <span className="text-lg">{event.location}</span>
                    </div>
                    
                    <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                      <HiUsers className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                      <span className="text-lg">Max {event.maxParticipants} participants</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                    {event.description}
                  </p>

                  {/* Instructor */}
                  <div className="mb-6">
                    <div className="text-base text-gray-500 dark:text-gray-400 mb-1">Instructor</div>
                    <div className="text-lg text-gray-900 dark:text-white font-medium">{event.instructor}</div>
                  </div>

                  {/* CTA Button */}
                  <div className="flex gap-3">
                    <Link 
                      href={`/events/register/${event.id}`}
                      className="flex-1 bg-gradient-to-r from-purple-700 to-purple-800 text-white font-semibold text-lg py-4 px-6 rounded-xl hover:from-purple-800 hover:to-purple-900 transition-all duration-300 shadow-sm hover:shadow-md text-center"
                    >
                      Register Now
                    </Link>
                    <button className="px-6 py-4 border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold text-lg rounded-xl hover:border-purple-300 dark:hover:border-purple-500 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all duration-300">
                      Learn More
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-white mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
              Get notified about new events, exclusive workshops, and special offers. Never miss an opportunity to transform your professional journey.
            </p>
            
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                disabled={isSubmitting}
              />
              <button 
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-4 bg-gradient-to-r from-purple-700 to-purple-800 text-white font-medium rounded-xl hover:from-purple-800 hover:to-purple-900 transition-all duration-300 shadow-sm hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin inline-block mr-2"></div>
                    Subscribing...
                  </>
                ) : (
                  'Subscribe'
                )}
              </button>
            </form>

            {/* Status Messages */}
            {subscriptionStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 flex items-center justify-center gap-2 text-green-600 dark:text-green-400"
              >
                <HiCheckCircle className="w-5 h-5" />
                <span className="text-sm">Successfully subscribed! You&apos;ll receive updates about our events.</span>
              </motion.div>
            )}

            {subscriptionStatus === 'error' && errorMessage && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 text-red-600 dark:text-red-400 text-sm"
              >
                {errorMessage}
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
