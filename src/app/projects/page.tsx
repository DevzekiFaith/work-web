'use client';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from '@/components/ProjectCard/ProjectCard';
import { HiFilter, HiViewGrid, HiViewList, HiArrowRight } from 'react-icons/hi';
import Link from 'next/link';

const allProjects = [
  {
    title: 'Modern Office Complex',
    summary: 'A cutting-edge office space integrating sustainable design and technology for enhanced productivity.',
    images: ['/sn3.jpg', '/sn2.jpg'],
    category: 'Architecture',
    year: '2024',
    client: 'TechCorp Solutions',
    status: 'Completed'
  },
  {
    title: 'Residential Estate',
    summary: 'A community of smart homes with flexible interiors and eco-conscious planning for modern living.',
    images: ['/bulb1.jpg', '/sn1.jpg'],
    category: 'Estate',
    year: '2023',
    client: 'Green Living Co.',
    status: 'Completed'
  },
  {
    title: 'Software Implementation for Logistics',
    summary: 'A custom-built digital solution streamlining operations for a major transport company.',
    images: ['/s5.jpg', '/p10.jpg'],
    category: 'Tech',
    year: '2024',
    client: 'LogiFlow Inc.',
    status: 'In Progress'
  },
  {
    title: 'Urban Planning Initiative',
    summary: 'Comprehensive city planning project focusing on sustainable development and smart infrastructure.',
    images: ['/sn3.jpg', '/bulb1.jpg'],
    category: 'Architecture',
    year: '2024',
    client: 'City Council',
    status: 'In Progress'
  },
  {
    title: 'Corporate Training Platform',
    summary: 'Digital learning platform for human capital development with AI-powered personalization.',
    images: ['/s5.jpg', '/sn2.jpg'],
    category: 'Tech',
    year: '2023',
    client: 'EduTech Global',
    status: 'Completed'
  },
  {
    title: 'Luxury Resort Development',
    summary: 'High-end resort complex with sustainable architecture and premium amenities.',
    images: ['/sn1.jpg', '/p10.jpg'],
    category: 'Estate',
    year: '2024',
    client: 'Paradise Resorts',
    status: 'In Progress'
  }
];

const categories = ['All', 'Architecture', 'Estate', 'Tech'];
const stats = [
  { label: 'Projects Completed', value: '150+' },
  { label: 'Happy Clients', value: '50+' },
  { label: 'Years of Excellence', value: '10+' },
  { label: 'Team Members', value: '25+' }
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [viewMode, setViewMode] = useState('grid');
  const [isLoading, setIsLoading] = useState(false);

  const filteredProjects =
    activeCategory === 'All'
      ? allProjects
      : allProjects.filter((project) => project.category === activeCategory);

  const handleCategoryChange = (category: string) => {
    if (category === activeCategory) return;
    setIsLoading(true);
    setTimeout(() => {
      setActiveCategory(category);
      setIsLoading(false);
    }, 300);
  };

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
              x: [0, -30, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-64 h-64 bg-gradient-to-br from-indigo-400/10 to-cyan-400/10 rounded-full blur-3xl"
            animate={{
              x: [0, 40, 0],
              y: [0, -20, 0],
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
              <h1 className="heading-1 mb-6 text-gray-900 dark:text-white">
                Lifebuild
                <span className="block">Project Portfolio</span>
              </h1>
            </motion.div>
            
            <motion.p
              className="body-large mb-8 max-w-3xl mx-auto text-gray-600 dark:text-gray-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Discover Lifebuild&apos;s diverse portfolio of innovative infrastructure projects spanning architecture, 
              construction excellence, technology solutions, and comprehensive development initiatives.
            </motion.p>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-indigo-600 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="section-padding bg-gray-50 dark:bg-gray-800">
        <div className="container-fluid">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-3 mb-6 md:mb-0">
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 mr-4">
                <HiFilter className="w-5 h-5" />
                <span className="font-medium">Filter by:</span>
              </div>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-6 py-2 rounded-full transition-all duration-300 font-medium ${
                    activeCategory === category
                      ? 'bg-indigo-600 text-white shadow-lg scale-105'
                      : 'bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-gray-600 hover:text-indigo-600 dark:hover:text-indigo-400 border border-gray-200 dark:border-gray-600'
                  }`}
                >
                  {category}
                  {activeCategory === category && (
                    <span className="ml-2 inline-block w-2 h-2 bg-white rounded-full"></span>
                  )}
                </button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-2 bg-white dark:bg-gray-700 rounded-lg p-1 border border-gray-200 dark:border-gray-600">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === 'grid'
                    ? 'bg-indigo-600 text-white'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
                }`}
              >
                <HiViewGrid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === 'list'
                    ? 'bg-indigo-600 text-white'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
                }`}
              >
                <HiViewList className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Projects Grid */}
          <div className={`${
            viewMode === 'grid'
              ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-8'
              : 'space-y-6'
          }`}>
            <AnimatePresence mode="wait">
              {isLoading
                ? Array.from({ length: 6 }).map((_, i) => (
                    <motion.div
                      key={`loading-${i}`}
                      className={`${
                        viewMode === 'grid'
                          ? 'h-80 bg-gray-200 rounded-2xl'
                          : 'h-32 bg-gray-200 rounded-xl'
                      } animate-pulse`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    />
                  ))
                : filteredProjects.map((project, index) => (
                    <motion.div
                      key={project.title}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className={viewMode === 'list' ? 'w-full' : ''}
                    >
                      <ProjectCard {...project} viewMode={viewMode} />
                    </motion.div>
                  ))}
            </AnimatePresence>
          </div>

          {filteredProjects.length === 0 && !isLoading && (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="text-gray-400 mb-4">
                <HiViewGrid className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                No projects found
              </h3>
              <p className="text-gray-500">
                Try selecting a different category to see more projects.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding">
        <div className="container-fluid">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-2 mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="body-large mb-8 text-gray-600">
              Let Lifebuild by Yonan Technologies collaborate to bring your infrastructure vision to life. 
              Our experienced team is ready to tackle projects of any scale and complexity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Start Your Project
                <HiArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/services" className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 font-semibold rounded-lg border-2 border-indigo-600 dark:border-indigo-400 hover:bg-indigo-50 dark:hover:bg-gray-700 transition-all duration-200">
                View Our Services
                <HiArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
