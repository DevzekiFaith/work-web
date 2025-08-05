'use client';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { motion } from 'framer-motion';
import { HiLocationMarker, HiClock, HiCurrencyDollar, HiUsers, HiLightBulb, HiHeart, HiTrendingUp, HiArrowLeft, HiArrowRight, HiGlobeAlt } from 'react-icons/hi';
import Link from 'next/link';

interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  salary: string;
  description: string;
  requirements: string[];
  benefits: string[];
}

const jobPositions: JobPosition[] = [
  {
    id: '1',
    title: 'Senior Architectural Designer',
    department: 'Architecture',
    location: 'New York, NY',
    type: 'Full-time',
    salary: '$80,000 - $120,000',
    description: 'We are seeking a creative and experienced architectural designer to join our team. You will work on cutting-edge sustainable design projects and collaborate with multidisciplinary teams.',
    requirements: [
      'Bachelor\'s or Master\'s degree in Architecture',
      '5+ years of experience in architectural design',
      'Proficiency in AutoCAD, Revit, and SketchUp',
      'Strong understanding of sustainable design principles',
      'Excellent communication and presentation skills'
    ],
    benefits: [
      'Competitive salary and performance bonuses',
      'Comprehensive health and dental insurance',
      'Professional development opportunities',
      'Flexible work arrangements'
    ]
  },
  {
    id: '2',
    title: 'Full-Stack Software Developer',
    department: 'Technology',
    location: 'Remote',
    type: 'Full-time',
    salary: '$90,000 - $140,000',
    description: 'Join our technology team to build innovative software solutions that power modern construction and business operations. Work with cutting-edge technologies and frameworks.',
    requirements: [
      'Bachelor\'s degree in Computer Science or related field',
      '4+ years of full-stack development experience',
      'Proficiency in React, Node.js, and TypeScript',
      'Experience with cloud platforms (AWS, Azure)',
      'Strong problem-solving and analytical skills'
    ],
    benefits: [
      'Remote work flexibility',
      'Stock options and equity participation',
      'Latest technology and equipment',
      'Continuous learning budget'
    ]
  },
  {
    id: '3',
    title: 'Project Manager',
    department: 'Operations',
    location: 'Los Angeles, CA',
    type: 'Full-time',
    salary: '$75,000 - $110,000',
    description: 'Lead and manage complex architectural and construction projects from conception to completion. Coordinate with clients, contractors, and internal teams to ensure successful project delivery.',
    requirements: [
      'Bachelor\'s degree in Engineering, Architecture, or related field',
      'PMP certification preferred',
      '6+ years of project management experience',
      'Experience with construction and architectural projects',
      'Strong leadership and communication skills'
    ],
    benefits: [
      'Project completion bonuses',
      'Company car allowance',
      'Professional certification support',
      'Career advancement opportunities'
    ]
  },
  {
    id: '4',
    title: 'Human Capital Development Specialist',
    department: 'Human Resources',
    location: 'Chicago, IL',
    type: 'Full-time',
    salary: '$65,000 - $95,000',
    description: 'Design and implement training programs and development initiatives to enhance employee skills and career growth. Focus on digital transformation and leadership development.',
    requirements: [
      'Master\'s degree in HR, Psychology, or related field',
      '3+ years in learning and development',
      'Experience with digital learning platforms',
      'Strong presentation and facilitation skills',
      'Knowledge of adult learning principles'
    ],
    benefits: [
      'Professional development budget',
      'Conference and training attendance',
      'Flexible schedule options',
      'Wellness programs'
    ]
  }
];

const companyValues = [
  {
    icon: HiLightBulb,
    title: 'Innovation',
    description: 'We embrace creativity and cutting-edge solutions to solve complex challenges.'
  },
  {
    icon: HiUsers,
    title: 'Collaboration',
    description: 'We believe in the power of teamwork and diverse perspectives.'
  },
  {
    icon: HiHeart,
    title: 'Passion',
    description: 'We are passionate about creating meaningful impact through our work.'
  },
  {
    icon: HiTrendingUp,
    title: 'Growth',
    description: 'We invest in continuous learning and professional development.'
  }
];

const benefits = [
  {
    icon: HiCurrencyDollar,
    title: 'Competitive Compensation',
    description: 'Attractive salary packages with performance-based bonuses and equity options.'
  },
  {
    icon: HiHeart,
    title: 'Health & Wellness',
    description: 'Comprehensive health insurance, dental, vision, and wellness programs.'
  },
  {
    icon: HiClock,
    title: 'Work-Life Balance',
    description: 'Flexible working hours, remote work options, and generous PTO policies.'
  },
  {
    icon: HiGlobeAlt,
    title: 'Global Opportunities',
    description: 'Work on international projects and collaborate with teams worldwide.'
  }
];

export default function Careers() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"
            animate={{
              x: [0, -20, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-64 h-64 bg-gradient-to-br from-indigo-400/10 to-cyan-400/10 rounded-full blur-3xl"
            animate={{
              x: [0, 25, 0],
              y: [0, -15, 0],
            }}
            transition={{
              duration: 12,
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
              <h1 className="heading-1 mb-6 text-gray-900 dark:text-white">
                Join Our
                <br />
                <span className="block">Amazing Team</span>
              </h1>
            </motion.div>
            
            <motion.p
              className="body-large mb-8 max-w-3xl mx-auto text-gray-600 dark:text-gray-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              We are always looking for passionate and talented individuals to help shape 
              the future of architecture, technology, and human capital development.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link href="#open-positions" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
                View Open Positions
                <HiArrowRight className="w-5 h-5" />
              </Link>
              <Link href="#company-culture" className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 font-semibold rounded-lg border-2 border-indigo-600 dark:border-indigo-400 hover:bg-indigo-50 dark:hover:bg-gray-700 transition-all duration-200">
                Learn About Our Culture
                <HiArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section id="company-culture" className="section-padding bg-gray-50">
        <div className="container-fluid">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-2 mb-6">Our Company Values</h2>
            <p className="body-large text-gray-600 max-w-3xl mx-auto">
              We believe in creating an environment where innovation thrives, 
              collaboration flourishes, and every team member can reach their full potential.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={index}
                  className="card card-hover p-8 text-center group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="heading-4 mb-3">{value.title}</h3>
                  <p className="body-base text-gray-600">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding">
        <div className="container-fluid">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-2 mb-6">Why Work With Us?</h2>
            <p className="body-large text-gray-600 max-w-3xl mx-auto">
              We offer competitive benefits and a supportive work environment 
              that helps you grow both professionally and personally.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="inline-flex p-4 rounded-2xl bg-indigo-100 mb-6">
                    <IconComponent className="w-8 h-8 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="body-base text-gray-600">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="section-padding bg-gray-50">
        <div className="container-fluid">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-2 mb-6">Open Positions</h2>
            <p className="body-large text-gray-600 max-w-3xl mx-auto">
              Explore our current job openings and find the perfect role to advance your career.
            </p>
          </motion.div>

          <div className="space-y-6">
            {jobPositions.map((job, index) => (
              <motion.div
                key={job.id}
                className="card card-hover p-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <h3 className="text-2xl font-bold text-gray-900">{job.title}</h3>
                      <span className="px-3 py-1 bg-indigo-100 text-indigo-800 text-sm font-medium rounded-full">
                        {job.department}
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-4">
                      <div className="flex items-center gap-2">
                        <HiLocationMarker className="w-4 h-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <HiClock className="w-4 h-4" />
                        <span>{job.type}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <HiCurrencyDollar className="w-4 h-4" />
                        <span>{job.salary}</span>
                      </div>
                    </div>
                    
                    <p className="body-base text-gray-600 mb-6">{job.description}</p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Requirements:</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                          {job.requirements.map((req, reqIndex) => (
                            <li key={reqIndex} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></span>
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                          {job.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></span>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col justify-center">
                    <Link
                      href={`mailto:careers@mindvest.com?subject=Application: ${job.title}`}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl w-full justify-center mb-4"
                    >
                      Apply Now
                      <HiArrowRight className="w-4 h-4" />
                    </Link>
                    <Link
                      href={`/careers/${job.id}`}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 font-semibold rounded-lg border-2 border-indigo-600 dark:border-indigo-400 hover:bg-indigo-50 dark:hover:bg-gray-700 transition-all duration-200 w-full justify-center"
                    >
                      View Details
                      <HiArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="container-fluid">
          <motion.div
            className="text-center max-w-3xl mx-auto text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Don't See the Perfect Role?
            </h2>
            <p className="text-xl mb-8 text-indigo-100">
              We are always interested in connecting with talented individuals. 
              Send us your resume and let us know how you'd like to contribute to our mission.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="mailto:careers@mindvest.com?subject=General Application"
                className="btn bg-white text-indigo-600 hover:bg-gray-100 hover:text-indigo-600 w-full justify-center rounded-lg"
              >
                Send Your Resume
              </Link>
              <Link href="/contact" className="btn border-2 border-white text-white hover:bg-white hover:text-indigo-600 w-full justify-center rounded-lg">
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
