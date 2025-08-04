'use client';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { HiCalendar, HiClock, HiUser, HiTag, HiArrowRight } from 'react-icons/hi';
import { useState } from 'react';

interface BlogPost {
  title: string;
  excerpt: string;
  slug: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  featured?: boolean;
}

const posts: BlogPost[] = [
  {
    title: 'The Future of Sustainable Architecture',
    excerpt: 'Explore how sustainability, smart technology, and minimalism are revolutionizing modern architectural design and creating environmentally conscious spaces.',
    slug: 'future-sustainable-architecture',
    author: 'Sarah Johnson',
    date: '2024-01-15',
    readTime: '8 min read',
    category: 'Architecture',
    image: '/sn3.jpg',
    featured: true
  },
  {
    title: 'AI and Robotics in Construction',
    excerpt: 'Discover how artificial intelligence and robotics are transforming building processes, improving efficiency, and reducing costs across the construction industry.',
    slug: 'ai-robotics-construction',
    author: 'Michael Chen',
    date: '2024-01-10',
    readTime: '6 min read',
    category: 'Technology',
    image: '/s5.jpg'
  },
  {
    title: 'Human Capital Development in the Digital Age',
    excerpt: 'Why developing human capital and upskilling employees is crucial for success in our increasingly software-driven business environment.',
    slug: 'human-capital-digital-age',
    author: 'Emily Rodriguez',
    date: '2024-01-05',
    readTime: '5 min read',
    category: 'Leadership',
    image: '/bulb1.jpg'
  },
  {
    title: 'Smart Home Technology Integration',
    excerpt: 'Learn about the latest trends in smart home technology and how to seamlessly integrate IoT devices into residential spaces.',
    slug: 'smart-home-technology',
    author: 'David Park',
    date: '2023-12-28',
    readTime: '7 min read',
    category: 'Technology',
    image: '/sn1.jpg'
  },
  {
    title: 'Sustainable Materials in Modern Construction',
    excerpt: 'An in-depth look at eco-friendly building materials and their impact on sustainable construction practices.',
    slug: 'sustainable-materials-construction',
    author: 'Lisa Thompson',
    date: '2023-12-20',
    readTime: '9 min read',
    category: 'Architecture',
    image: '/sn2.jpg'
  },
  {
    title: 'Project Management Best Practices',
    excerpt: 'Essential project management strategies for successful delivery of complex architectural and construction projects.',
    slug: 'project-management-best-practices',
    author: 'Robert Kim',
    date: '2023-12-15',
    readTime: '6 min read',
    category: 'Leadership',
    image: '/p10.jpg'
  }
];

const categories = ['All', 'Architecture', 'Technology', 'Leadership'];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const filteredPosts = selectedCategory === 'All' 
    ? posts 
    : posts.filter(post => post.category === selectedCategory);
  
  const featuredPost = posts.find(post => post.featured);
  const regularPosts = posts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-br from-indigo-400/10 to-purple-400/10 rounded-full blur-3xl"
            animate={{
              x: [0, 30, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 18,
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
                Insights &
                <span className="block">Expertise</span>
              </h1>
            </motion.div>
            
            <motion.p
              className="body-large mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Stay updated with the latest trends, insights, and best practices in architecture, 
              technology, and leadership from our team of experts.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="section-padding bg-gray-50">
          <div className="container-fluid">
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="heading-3 mb-2">Featured Article</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"></div>
            </motion.div>
            
            <motion.div
              className="card card-hover overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="relative h-64 lg:h-full min-h-[300px]">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-indigo-600 text-white text-sm font-medium rounded-full">
                      <HiTag className="w-4 h-4" />
                      {featuredPost.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-6 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-2">
                      <HiUser className="w-4 h-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <HiCalendar className="w-4 h-4" />
                      <span>{new Date(featuredPost.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <HiClock className="w-4 h-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="heading-3 mb-4">{featuredPost.title}</h3>
                  <p className="body-base text-gray-600 mb-6">{featuredPost.excerpt}</p>
                  
                  <Link 
                    href={`/blog/${featuredPost.slug}`}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl w-fit"
                  >
                    Read Full Article
                    <HiArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="section-padding">
        <div className="container-fluid">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="heading-3 mb-2">Latest Articles</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"></div>
            </motion.div>
            
            <motion.div
              className="flex flex-wrap gap-3 mt-6 md:mt-0"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full transition-all duration-300 font-medium ${
                    selectedCategory === category
                      ? 'bg-indigo-600 text-white shadow-lg scale-105'
                      : 'bg-gray-100 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600'
                  }`}
                >
                  {category}
                </button>
              ))}
            </motion.div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.filter(post => !post.featured).map((post, index) => (
              <motion.article
                key={post.slug}
                className="card card-hover overflow-hidden group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 text-sm font-medium rounded-full">
                      <HiTag className="w-4 h-4" />
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                    <div className="flex items-center gap-1">
                      <HiCalendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric' 
                      })}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <HiClock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="body-base text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <HiUser className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="text-indigo-600 hover:text-indigo-700 font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all"
                    >
                      Read More
                      <HiArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {filteredPosts.filter(post => !post.featured).length === 0 && (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="text-gray-400 mb-4">
                <HiTag className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                No articles found
              </h3>
              <p className="text-gray-500">
                Try selecting a different category to see more articles.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter Subscription */}
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
              Stay Updated with Our Latest Insights
            </h2>
            <p className="text-xl mb-8 text-indigo-100">
              Subscribe to our newsletter and never miss an article on architecture, 
              technology, and leadership.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="btn bg-white text-indigo-600 hover:bg-gray-100 px-8 py-3">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}