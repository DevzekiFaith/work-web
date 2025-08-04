'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from '@/components/ProjectCard/ProjectCard';

const allProjects = [
  {
    title: 'Modern Office Complex',
    summary: 'A cutting-edge office space integrating sustainable design and tech.',
    images: ['/images/projects/office-1.jpg', '/images/projects/office-2.jpg'],
    category: 'Architecture'
  },
  {
    title: 'Residential Estate',
    summary: 'A community of smart homes with flexible interiors and eco-conscious planning.',
    images: ['/images/projects/estate-1.jpg', '/images/projects/estate-2.jpg'],
    category: 'Estate'
  },
  {
    title: 'Software Implementation for Logistics',
    summary: 'A custom-built digital solution for a transport company.',
    images: ['/images/projects/logistics-1.jpg', '/images/projects/logistics-2.jpg'],
    category: 'Tech'
  },
];

const categories = ['All', 'Architecture', 'Estate', 'Tech'];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [isLoading, setIsLoading] = useState(false);

  const filteredProjects =
    activeCategory === 'All'
      ? allProjects
      : allProjects.filter((project) => project.category === activeCategory);

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 space-y-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Featured Projects</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore our diverse portfolio — from innovative spaces to intelligent systems that power modern experiences.
        </p>
      </div>

      <div className="flex justify-center flex-wrap gap-4 sticky top-0 bg-white/90 z-10 py-2 backdrop-blur">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setIsLoading(true);
              setTimeout(() => {
                setActiveCategory(cat);
                setIsLoading(false);
              }, 300);
            }}
            className={`px-4 py-2 rounded-full border transition text-sm font-medium flex items-center gap-2 ${
              activeCategory === cat
                ? 'bg-purple-600 text-white border-purple-600 underline underline-offset-4'
                : 'text-gray-600 border-gray-300 hover:bg-gray-100'
            }`}
          >
            {activeCategory === cat && <span>•</span>}
            {cat}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="wait">
          {isLoading
            ? Array.from({ length: 6 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="h-64 bg-gray-100 rounded-lg animate-pulse"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
              ))
            : filteredProjects.map((project) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProjectCard {...project} />
                </motion.div>
              ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
