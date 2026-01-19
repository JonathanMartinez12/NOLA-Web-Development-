'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaClock, FaUser, FaTag, FaArrowRight } from 'react-icons/fa';
import { getBlogPosts, getBlogCategories } from '@/lib/blog/posts';

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const allPosts = getBlogPosts();
  const categories = ['All', ...getBlogCategories()];

  const filteredPosts =
    selectedCategory === 'All'
      ? allPosts
      : allPosts.filter((post) => post.category === selectedCategory);

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
              Our Blog
            </h1>
            <p className="text-xl text-slate-200 leading-relaxed">
              Expert insights on web development, SEO, digital marketing, and everything
              you need to succeed online.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-slate-200">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-primary-600 to-accent-600 text-white shadow-lg scale-105'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section-padding bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="container-custom">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <Link href={`/blog/${post.slug}`}>
                    <div className="card h-full flex flex-col overflow-hidden">
                      {/* Post Image Placeholder */}
                      <div className="relative h-56 bg-gradient-to-br from-primary-400 to-accent-400 overflow-hidden rounded-lg mb-6 -mx-6 -mt-6">
                        <div className="absolute inset-0 flex items-center justify-center text-white text-6xl font-bold opacity-20">
                          {post.title.charAt(0)}
                        </div>
                        <div className="absolute top-4 left-4">
                          <span className="inline-block px-3 py-1 text-xs font-semibold bg-white/90 text-primary-700 rounded-full">
                            {post.category}
                          </span>
                        </div>
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                      </div>

                      {/* Post Content */}
                      <div className="flex-1 flex flex-col">
                        <h2 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                          {post.title}
                        </h2>

                        <p className="text-slate-600 mb-4 leading-relaxed line-clamp-3">
                          {post.excerpt}
                        </p>

                        {/* Post Meta */}
                        <div className="mt-auto pt-4 border-t border-slate-200">
                          <div className="flex items-center justify-between text-sm text-slate-500 mb-3">
                            <div className="flex items-center space-x-4">
                              <span className="flex items-center">
                                <FaUser className="mr-2" />
                                {post.author}
                              </span>
                              <span className="flex items-center">
                                <FaClock className="mr-2" />
                                {post.readTime}
                              </span>
                            </div>
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="flex flex-wrap gap-2">
                              {post.tags.slice(0, 2).map((tag) => (
                                <span
                                  key={tag}
                                  className="text-xs px-2 py-1 bg-slate-100 text-slate-600 rounded"
                                >
                                  #{tag}
                                </span>
                              ))}
                            </div>

                            <span className="text-primary-600 font-semibold flex items-center group-hover:translate-x-1 transition-transform duration-300">
                              Read More <FaArrowRight className="ml-2" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-xl text-slate-600">
                No posts found in this category.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
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
              Stay Updated
            </h2>
            <p className="text-xl mb-8 text-white/90 leading-relaxed">
              Subscribe to our newsletter and get the latest tips, trends, and insights
              delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-slate-100 transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
