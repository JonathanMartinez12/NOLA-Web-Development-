'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { useState } from 'react';

const categories = ['All', 'E-Commerce', 'Corporate', 'Restaurant', 'Portfolio', 'Blog'];

const projects = [
  {
    id: 1,
    title: 'Luxury Fashion Boutique',
    category: 'E-Commerce',
    description: 'High-end e-commerce platform with custom product configurator and seamless checkout experience.',
    image: '/images/portfolio/project-1.jpg',
    tags: ['Next.js', 'Shopify', 'Tailwind CSS'],
    link: '#',
    results: {
      traffic: '+320%',
      conversion: '+150%',
      revenue: '+280%',
    },
  },
  {
    id: 2,
    title: 'Downtown Fine Dining',
    category: 'Restaurant',
    description: 'Modern restaurant website with online reservations, menu management, and delivery integration.',
    image: '/images/portfolio/project-2.jpg',
    tags: ['React', 'Node.js', 'Stripe'],
    link: '#',
    results: {
      traffic: '+250%',
      reservations: '+180%',
      reviews: '4.9/5',
    },
  },
  {
    id: 3,
    title: 'Tech Startup Landing',
    category: 'Corporate',
    description: 'Clean, modern landing page for a SaaS startup with lead generation focus.',
    image: '/images/portfolio/project-3.jpg',
    tags: ['Next.js', 'TypeScript', 'Framer Motion'],
    link: '#',
    results: {
      traffic: '+400%',
      leads: '+220%',
      conversion: '+165%',
    },
  },
  {
    id: 4,
    title: 'Law Firm Website',
    category: 'Corporate',
    description: 'Professional website for a legal practice with case studies and client portal.',
    image: '/images/portfolio/project-4.jpg',
    tags: ['WordPress', 'PHP', 'Custom Theme'],
    link: '#',
    results: {
      traffic: '+190%',
      inquiries: '+145%',
      ranking: '#1 Local',
    },
  },
  {
    id: 5,
    title: 'Artisan Marketplace',
    category: 'E-Commerce',
    description: 'Multi-vendor marketplace connecting local artisans with customers.',
    image: '/images/portfolio/project-5.jpg',
    tags: ['React', 'WooCommerce', 'REST API'],
    link: '#',
    results: {
      vendors: '150+',
      sales: '+340%',
      users: '10,000+',
    },
  },
  {
    id: 6,
    title: 'Creative Agency Portfolio',
    category: 'Portfolio',
    description: 'Stunning portfolio website with interactive animations and case studies.',
    image: '/images/portfolio/project-6.jpg',
    tags: ['Next.js', 'GSAP', 'Sanity CMS'],
    link: '#',
    results: {
      engagement: '+280%',
      leads: '+195%',
      awards: '3 Won',
    },
  },
  {
    id: 7,
    title: 'Health & Wellness Blog',
    category: 'Blog',
    description: 'Content-rich blog with newsletter integration and member area.',
    image: '/images/portfolio/project-7.jpg',
    tags: ['Next.js', 'MDX', 'Tailwind CSS'],
    link: '#',
    results: {
      subscribers: '25,000+',
      pageviews: '500k/mo',
      engagement: '+310%',
    },
  },
  {
    id: 8,
    title: 'Cajun Cuisine Restaurant',
    category: 'Restaurant',
    description: 'Vibrant website showcasing authentic New Orleans cuisine with online ordering.',
    image: '/images/portfolio/project-8.jpg',
    tags: ['React', 'Firebase', 'Stripe'],
    link: '#',
    results: {
      orders: '+420%',
      traffic: '+290%',
      rating: '4.8/5',
    },
  },
  {
    id: 9,
    title: 'Real Estate Platform',
    category: 'Corporate',
    description: 'Comprehensive property listing platform with advanced search and filters.',
    image: '/images/portfolio/project-9.jpg',
    tags: ['Next.js', 'PostgreSQL', 'Mapbox'],
    link: '#',
    results: {
      listings: '5,000+',
      leads: '+385%',
      conversions: '+210%',
    },
  },
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-slate-900 via-primary-900 to-accent-900 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our Portfolio
            </h1>
            <p className="text-xl text-slate-200 leading-relaxed">
              Explore our work and see how we've helped businesses across New Orleans
              and beyond achieve their digital goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-primary-600 to-accent-600 text-white shadow-lg scale-105'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="card overflow-hidden h-full flex flex-col">
                  {/* Project Image Placeholder */}
                  <div className="relative h-64 bg-gradient-to-br from-primary-400 to-accent-400 overflow-hidden rounded-lg mb-6">
                    <div className="absolute inset-0 flex items-center justify-center text-white text-6xl font-bold opacity-20">
                      {project.title.charAt(0)}
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <div className="flex space-x-4">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                        >
                          <FaExternalLinkAlt className="text-white text-lg" />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="flex-1 flex flex-col">
                    <div className="mb-3">
                      <span className="inline-block px-3 py-1 text-xs font-semibold bg-primary-100 text-primary-700 rounded-full">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-slate-800 mb-3">
                      {project.title}
                    </h3>

                    <p className="text-slate-600 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-2 py-1 bg-slate-100 text-slate-600 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Results */}
                    <div className="mt-auto pt-4 border-t border-slate-200">
                      <div className="grid grid-cols-3 gap-4 text-center">
                        {Object.entries(project.results).map(([key, value]) => (
                          <div key={key}>
                            <div className="text-lg font-bold text-primary-600">
                              {value}
                            </div>
                            <div className="text-xs text-slate-500 capitalize">
                              {key}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-xl text-slate-600">
                No projects found in this category.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Proven Results
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our work speaks for itself. Here's what we've achieved for our clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'Projects Completed' },
              { number: '250%', label: 'Avg. Traffic Increase' },
              { number: '98%', label: 'Client Satisfaction' },
              { number: '#1', label: 'SEO Rankings Achieved' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card text-center"
              >
                <div className="text-5xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent mb-3">
                  {stat.number}
                </div>
                <div className="text-slate-700 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary-600 via-accent-600 to-primary-600 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl mb-8 text-white/90 leading-relaxed">
              Let's create something amazing together. Contact us today for a free consultation.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-lg text-white bg-transparent hover:bg-white hover:text-primary-600 transition-all duration-200 shadow-lg"
            >
              Get Your Free Quote
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
