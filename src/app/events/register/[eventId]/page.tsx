'use client';
import { motion } from "framer-motion";
import { HiLocationMarker, HiCheckCircle, HiArrowLeft, HiCalendar } from "react-icons/hi";
import { useState, useEffect, use } from "react";
import Link from "next/link";
import { Toaster, toast } from "react-hot-toast";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

// Event data (in a real app, this would come from an API)
const eventsData = {
  1: {
    id: 1,
    title: "Masterclass",
    type: "MASTERCLASS",
    date: "2025-10-14",
    time: "10:00 AM - 4:00 PM",
    location: "Virtual & In-Person",
    description: "Transform into a person of interest through our comprehensive masterclass program. Learn advanced techniques for becoming a recognized thought leader, building authentic influence, and creating lasting professional impact.",
    instructor: "Expert Transformation Coach",
    maxParticipants: 25,
    originalPrice: "$497",
    currentPrice: "$100",
    icon: "HiAcademicCap",
    color: "from-purple-600 to-purple-800"
  },
  2: {
    id: 2,
    title: "Upgrade Academy Intensive",
    type: "ACADEMY",
    date: "2025-10-16",
    time: "9:00 AM - 5:00 PM",
    location: "Executive Training Center",
    description: "Comprehensive transformation program to rebuild and upgrade your professional foundation. Perfect for career transitions and skill enhancement.",
    instructor: "Transformation Specialist",
    maxParticipants: 15,
    originalPrice: "$997",
    currentPrice: "$220",
    icon: "HiLightningBolt",
    color: "from-purple-800 to-purple-950"
  }
};

const paymentDetails = {
  naira: {
    accountName: "Mindvest International Enterprises",
    accountNumber: "2006354855",
    bankName: "Globus Bank"
  },
  dollar: {
    accountName: "Mindvest International Enterprises",
    accountNumber: "5000133424",
    bankName: "Globus Bank"
  }
};

const whatsappNumber = "07062664299";

export default function EventRegistration({ params }: { params: Promise<{ eventId: string }> }) {
  const resolvedParams = use(params);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    country: '',
    paymentMethod: 'naira',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: ''
  });
  const [reflectionAnswers, setReflectionAnswers] = useState({
    q1: '',
    q2: '',
    q3: '',
    q4: '',
    q5: ''
  });
  const [academyReflectionAnswers, setAcademyReflectionAnswers] = useState({
    aq1: '',
    aq2: '',
    aq3: '',
    aq4: '',
    aq5: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const eventIdNum = Number(resolvedParams.eventId);
  const event = eventIdNum in eventsData ? eventsData[eventIdNum as unknown as keyof typeof eventsData] : undefined;

  useEffect(() => {
    if (!event) {
      // Redirect to events page if event not found
      window.location.href = '/events';
    }
  }, [event]);

  if (!event) {
    return null;
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.state.trim()) newErrors.state = 'State is required';
    if (!formData.country.trim()) newErrors.country = 'Country is required';

    if (formData.paymentMethod === 'card') {
      if (!formData.cardNumber.trim()) newErrors.cardNumber = 'Card number is required';
      if (!formData.expiryDate.trim()) newErrors.expiryDate = 'Expiry date is required';
      if (!formData.cvv.trim()) newErrors.cvv = 'CVV is required';
      if (!formData.cardName.trim()) newErrors.cardName = 'Cardholder name is required';
    }

    if (event && event.type === 'MASTERCLASS') {
      if (!reflectionAnswers.q1.trim()) newErrors.q1 = 'Please answer question 1';
      if (!reflectionAnswers.q2.trim()) newErrors.q2 = 'Please answer question 2';
      if (!reflectionAnswers.q3.trim()) newErrors.q3 = 'Please answer question 3';
      if (!reflectionAnswers.q4.trim()) newErrors.q4 = 'Please answer question 4';
      if (!reflectionAnswers.q5.trim()) newErrors.q5 = 'Please answer question 5';
    }

    if (event && event.type === 'ACADEMY') {
      if (!academyReflectionAnswers.aq1.trim()) newErrors.aq1 = 'Please answer question 1';
      if (!academyReflectionAnswers.aq2.trim()) newErrors.aq2 = 'Please answer question 2';
      if (!academyReflectionAnswers.aq3.trim()) newErrors.aq3 = 'Please answer question 3';
      if (!academyReflectionAnswers.aq4.trim()) newErrors.aq4 = 'Please answer question 4';
      if (!academyReflectionAnswers.aq5.trim()) newErrors.aq5 = 'Please answer question 5';
    }

    setErrors(newErrors);
    
    // Show toast notification if there are errors
    if (Object.keys(newErrors).length > 0) {
      const firstError = Object.values(newErrors)[0];
      toast.error(`Please fill in all required fields: ${firstError}`, {
        duration: 4000,
        position: 'top-center',
      });
    }
    
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    toast.loading('Submitting your registration...', { id: 'registration' });

    try {
      // Submit to API route
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          eventId: event.id,
          eventType: event.type,
          eventTitle: event.title,
          eventDate: event.date,
          eventLocation: event.location,
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          address: formData.address,
          city: formData.city,
          state: formData.state,
          country: formData.country,
          paymentMethod: formData.paymentMethod,
          reflectionAnswers: event.type === 'MASTERCLASS' ? reflectionAnswers : null,
          academyReflectionAnswers: event.type === 'ACADEMY' ? academyReflectionAnswers : null,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || 'Registration failed');
      }

      toast.success('Registration successful! Check your email for confirmation.', { id: 'registration' });
      setIsSubmitting(false);
      setIsSubmitted(true);
    } catch (error) {
      console.error('Registration error:', error);
      toast.error(error instanceof Error ? error.message : 'Something went wrong. Please try again.', { id: 'registration' });
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Toaster 
          position="top-center"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#363636',
              color: '#fff',
            },
          }}
        />
        <Header />

        <div className="container mx-auto px-6 lg:px-8 py-24">
          <motion.div
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-8">
              <div className="w-20 h-20 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <HiCheckCircle className="w-10 h-10 text-green-600 dark:text-green-400" />
              </div>
              <h1 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-white mb-4">
                Registration Successful!
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Thank you for registering for {event.title}. You will receive a confirmation email shortly with further details.
              </p>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Payment Instructions</h3>
                <div className="space-y-6 text-left">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">₦ Naira Account</h4>
                    <div className="text-lg text-gray-600 dark:text-gray-300 space-y-2">
                      <p><strong>Account Name:</strong> {paymentDetails.naira.accountName}</p>
                      <p><strong>Account Number:</strong> {paymentDetails.naira.accountNumber}</p>
                      <p><strong>Bank Name:</strong> {paymentDetails.naira.bankName}</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">$ Dollar Account</h4>
                    <div className="text-lg text-gray-600 dark:text-gray-300 space-y-2">
                      <p><strong>Account Name:</strong> {paymentDetails.dollar.accountName}</p>
                      <p><strong>Account Number:</strong> {paymentDetails.dollar.accountNumber}</p>
                      <p><strong>Bank Name:</strong> {paymentDetails.dollar.bankName}</p>
                    </div>
                  </div>

                  {/* Payment Confirmation */}
                  <div className="pt-4 border-t border-gray-200 dark:border-gray-600">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Payment Confirmation</h4>
                    <div className="text-lg text-gray-600 dark:text-gray-300">
                      <p className="mb-3">After making your payment, please send a WhatsApp message to confirm your registration:</p>
                      <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-4">
                        <p className="text-green-800 dark:text-green-200 font-medium mb-3">
                          WhatsApp: {whatsappNumber}
                        </p>
                        <a
                          href={`https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=Hi, I just registered for ${event.title}. Please confirm my payment.`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                          </svg>
                          Send WhatsApp Message
                        </a>
                        <p className="text-sm text-green-700 dark:text-green-300 mt-2">
                          Click to send a pre-filled message with your registration details
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/events"
                  className="px-8 py-4 bg-gradient-to-r from-purple-700 to-purple-800 text-white font-semibold rounded-xl hover:from-purple-800 hover:to-purple-900 transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  View All Events
                </Link>
                <Link
                  href="/"
                  className="px-8 py-4 border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-xl hover:border-purple-300 dark:hover:border-purple-500 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all duration-300"
                >
                  Back to Home
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Toaster 
        position="top-center"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#363636',
            color: '#fff',
          },
          success: {
            duration: 3000,
            iconTheme: {
              primary: '#10b981',
              secondary: '#fff',
            },
          },
          error: {
            duration: 4000,
            iconTheme: {
              primary: '#ef4444',
              secondary: '#fff',
            },
          },
        }}
      />
      <Header />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/events"
              className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors duration-300 mb-8"
            >
              <HiArrowLeft className="w-5 h-5" />
              Back to Events
            </Link>

            <h1 className="text-7xl md:text-8xl lg:text-9xl font-light text-gray-900 dark:text-white mb-4 leading-tight">
              Register for
              <span className="block font-medium bg-gradient-to-r from-purple-700 to-purple-900 bg-clip-text text-transparent">
                {event.title}
              </span>
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 font-light max-w-2xl mx-auto leading-relaxed">
              Complete your registration and secure your spot for this transformative experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Event Details */}
              <motion.div
                className="bg-white dark:bg-gray-700 rounded-2xl p-4 shadow-sm"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Event Details</h2>

                <div className="space-y-2">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">{event.title}</h3>
                    <p className="text-purple-600 dark:text-purple-400 font-medium text-sm">{event.type}</p>
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                      <HiCalendar className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                      <span className="text-sm">{new Date(event.date).toLocaleDateString('en-US', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}</span>
                    </div>

                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                      <HiLocationMarker className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-gray-200 dark:border-gray-600">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-300">Price:</span>
                      <div className="text-right">
                        <div className="text-sm text-gray-500 dark:text-gray-400 line-through">
                          {event.originalPrice}
                        </div>
                        <div className="text-lg font-bold text-purple-700 dark:text-purple-400">
                          {event.currentPrice}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {event.type === 'MASTERCLASS' && (
                  <div className="mt-5 bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
                    <h4 className="text-lg font-semibold text-purple-700 dark:text-purple-300 mb-2">Why Do You Need This Masterclass?</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-800 dark:text-gray-200 text-base mb-6">
                      <li>Are you seeking greater recognition and credibility in your field?</li>
                      <li>Do you want to build authentic influence and a powerful personal brand?</li>
                      <li>What could becoming a true person of interest unlock for your career and life?</li>
                      <li>What are the key challenges holding you back from thought leadership?</li>
                      <li>How would your life change if your voice and expertise were in demand?</li>
                    </ul>
                    <div>
                      <h3 className="text-base font-semibold mb-2 text-purple-700">Your Personal Reflection (required):</h3>
                      <label className="block mb-1">Are you seeking greater recognition and credibility in your field?</label>
                      <textarea className="w-full mb-3 p-2 border rounded" value={reflectionAnswers.q1} onChange={e => setReflectionAnswers(ans => ({ ...ans, q1: e.target.value }))} required />

                      <label className="block mb-1">Do you want to build authentic influence and a powerful personal brand?</label>
                      <textarea className="w-full mb-3 p-2 border rounded" value={reflectionAnswers.q2} onChange={e => setReflectionAnswers(ans => ({ ...ans, q2: e.target.value }))} required />

                      <label className="block mb-1">What could becoming a true person of interest unlock for your career and life?</label>
                      <textarea className="w-full mb-3 p-2 border rounded" value={reflectionAnswers.q3} onChange={e => setReflectionAnswers(ans => ({ ...ans, q3: e.target.value }))} required />

                      <label className="block mb-1">What are the key challenges holding you back from thought leadership?</label>
                      <textarea className="w-full mb-3 p-2 border rounded" value={reflectionAnswers.q4} onChange={e => setReflectionAnswers(ans => ({ ...ans, q4: e.target.value }))} required />

                      <label className="block mb-1">How would your life change if your voice and expertise were in demand?</label>
                      <textarea className="w-full mb-3 p-2 border rounded" value={reflectionAnswers.q5} onChange={e => setReflectionAnswers(ans => ({ ...ans, q5: e.target.value }))} required />
                    </div>
                  </div>
                )}
                {event.type === 'ACADEMY' && (
                  <div className="mt-5 bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
                    <h4 className="text-lg font-semibold text-purple-700 dark:text-purple-300 mb-2">Why Choose Upgrade Academy?</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-800 dark:text-gray-200 text-base mb-6">
                      <li>Is it time to rebuild your professional foundation and future-proof your skills?</li>
                      <li>Are you considering a major career move or reinvention?</li>
                      <li>What is one skill you know you must master to unlock your next level?</li>
                      <li>Have you invested in your professional growth as much as you want?</li>
                      <li>How can expert guidance accelerate your transformation now?</li>
                    </ul>
                    <div>
                      <h3 className="text-base font-semibold mb-2 text-purple-700">Your Personal Reflection (required):</h3>
                      <label className="block mb-1">Is it time to rebuild your professional foundation and future-proof your skills?</label>
                      <textarea className="w-full mb-3 p-2 border rounded" value={academyReflectionAnswers.aq1} onChange={e => setAcademyReflectionAnswers(ans => ({ ...ans, aq1: e.target.value }))} required />

                      <label className="block mb-1">Are you considering a major career move or reinvention?</label>
                      <textarea className="w-full mb-3 p-2 border rounded" value={academyReflectionAnswers.aq2} onChange={e => setAcademyReflectionAnswers(ans => ({ ...ans, aq2: e.target.value }))} required />

                      <label className="block mb-1">What is one skill you know you must master to unlock your next level?</label>
                      <textarea className="w-full mb-3 p-2 border rounded" value={academyReflectionAnswers.aq3} onChange={e => setAcademyReflectionAnswers(ans => ({ ...ans, aq3: e.target.value }))} required />

                      <label className="block mb-1">Have you invested in your professional growth as much as you want?</label>
                      <textarea className="w-full mb-3 p-2 border rounded" value={academyReflectionAnswers.aq4} onChange={e => setAcademyReflectionAnswers(ans => ({ ...ans, aq4: e.target.value }))} required />

                      <label className="block mb-1">How can expert guidance accelerate your transformation now?</label>
                      <textarea className="w-full mb-3 p-2 border rounded" value={academyReflectionAnswers.aq5} onChange={e => setAcademyReflectionAnswers(ans => ({ ...ans, aq5: e.target.value }))} required />
                    </div>
                  </div>
                )}
              </motion.div>

              {/* Registration Form */}
              <motion.div
                className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-sm"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-4xl font-semibold text-gray-900 dark:text-white mb-6">Registration Form</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 bg-white dark:bg-gray-800 text-gray-900 dark:text-white ${errors.firstName ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'
                          }`}
                        placeholder="Enter your first name"
                      />
                      {errors.firstName && (
                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.firstName}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 bg-white dark:bg-gray-800 text-gray-900 dark:text-white ${errors.lastName ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'
                          }`}
                        placeholder="Enter your last name"
                      />
                      {errors.lastName && (
                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.lastName}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 bg-white dark:bg-gray-800 text-gray-900 dark:text-white ${errors.email ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'
                        }`}
                      placeholder="Enter your email address"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 bg-white dark:bg-gray-800 text-gray-900 dark:text-white ${errors.phone ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'
                        }`}
                      placeholder="Enter your phone number"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.phone}</p>
                    )}
                  </div>

                  {/* Address Information */}
                  <div>
                    <label className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Address *
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 bg-white dark:bg-gray-800 text-gray-900 dark:text-white ${errors.address ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'
                        }`}
                      placeholder="Enter your address"
                    />
                    {errors.address && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.address}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
                        City *
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 bg-white dark:bg-gray-800 text-gray-900 dark:text-white ${errors.city ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'
                          }`}
                        placeholder="City"
                      />
                      {errors.city && (
                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.city}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
                        State *
                      </label>
                      <input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 bg-white dark:bg-gray-800 text-gray-900 dark:text-white ${errors.state ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'
                          }`}
                        placeholder="State"
                      />
                      {errors.state && (
                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.state}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Country *
                      </label>
                      <input
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 bg-white dark:bg-gray-800 text-gray-900 dark:text-white ${errors.country ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'
                          }`}
                        placeholder="Country"
                      />
                      {errors.country && (
                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.country}</p>
                      )}
                    </div>
                  </div>

                  {/* Payment Method */}
                  <div>
                    <label className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-4">
                      Payment Method
                    </label>
                    <div className="space-y-3">
                      <label className="flex items-center p-4 border border-gray-200 dark:border-gray-600 rounded-xl cursor-pointer hover:border-purple-300 dark:hover:border-purple-500 transition-all duration-300">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="naira"
                          checked={formData.paymentMethod === 'naira'}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-purple-600 border-gray-300 focus:ring-purple-500"
                        />
                        <div className="ml-3">
                          <div className="text-sm font-medium text-gray-900 dark:text-white">Bank Transfer (Naira)</div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">Transfer to our Naira account</div>
                        </div>
                      </label>

                      <label className="flex items-center p-4 border border-gray-200 dark:border-gray-600 rounded-xl cursor-pointer hover:border-purple-300 dark:hover:border-purple-500 transition-all duration-300">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="dollar"
                          checked={formData.paymentMethod === 'dollar'}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-purple-600 border-gray-300 focus:ring-purple-500"
                        />
                        <div className="ml-3">
                          <div className="text-sm font-medium text-gray-900 dark:text-white">Bank Transfer (Dollar)</div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">Transfer to our Dollar account</div>
                        </div>
                      </label>
                    </div>
                  </div>

                  {/* Payment Details Display */}
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Payment Details</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                          {formData.paymentMethod === 'naira' ? '₦ Naira Account' : '$ Dollar Account'}
                        </h4>
                        <div className="text-lg text-gray-600 dark:text-gray-300 space-y-2">
                          <p><strong>Account Name:</strong> {formData.paymentMethod === 'naira' ? paymentDetails.naira.accountName : paymentDetails.dollar.accountName}</p>
                          <p><strong>Account Number:</strong> {formData.paymentMethod === 'naira' ? paymentDetails.naira.accountNumber : paymentDetails.dollar.accountNumber}</p>
                          <p><strong>Bank Name:</strong> {formData.paymentMethod === 'naira' ? paymentDetails.naira.bankName : paymentDetails.dollar.bankName}</p>
                        </div>
                      </div>

                      {/* Payment Confirmation moved to success page */}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-purple-700 to-purple-800 text-white font-semibold text-lg py-4 px-6 rounded-xl hover:from-purple-800 hover:to-purple-900 transition-all duration-300 shadow-sm hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin inline-block mr-2"></div>
                        Processing Registration...
                      </>
                    ) : (
                      'Complete Registration'
                    )}
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
