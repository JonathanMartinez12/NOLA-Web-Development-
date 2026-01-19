'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  FaHeart,
  FaRocket,
  FaUsers,
  FaLightbulb,
  FaAward,
  FaHandshake,
} from 'react-icons/fa';

const values = [
  {
    icon: FaHeart,
    title: 'Client-Focused',
    description: 'Your success is our success. We prioritize your goals and work tirelessly to exceed expectations.',
  },
  {
    icon: FaRocket,
    title: 'Innovation',
    description: 'We stay ahead of the curve with the latest technologies and best practices in web development.',
  },
  {
    icon: FaUsers,
    title: 'Collaboration',
    description: 'We believe in transparent communication and working closely with our clients every step of the way.',
  },
  {
    icon: FaLightbulb,
    title: 'Creativity',
    description: 'Every project is an opportunity to create something unique that stands out from the competition.',
  },
  {
    icon: FaAward,
    title: 'Excellence',
    description: 'We maintain the highest standards of quality in every line of code and every pixel of design.',
  },
  {
    icon: FaHandshake,
    title: 'Integrity',
    description: 'Honest pricing, realistic timelines, and transparent processes. No surprises, just results.',
  },
];

export default function AboutPage() {
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
              About NOLA Web Development
            </h1>
            <p className="text-xl text-slate-200 leading-relaxed">
              Founded in 2025 by two college students who wanted the best for local businesses
              to be seen by potential customers in the area.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-lg text-slate-700 leading-relaxed">
                <p>
                  Founded in 2025, NOLA Web Development was born from a simple but powerful idea:
                  two college students who saw local businesses struggling to be found online and
                  wanted to help them connect with potential customers in their area.
                </p>
                <p>
                  We understand the challenges small and local businesses face in today's digital
                  landscape. That's why we created a service model that removes the biggest barrier
                  to entry—the upfront cost of a professional website. With our SEO packages, you
                  get a custom website included, so you can focus on what you do best: running your business.
                </p>
                <p>
                  Our mission is simple: help local businesses thrive by making them visible to the
                  customers who are searching for their services. We combine technical expertise with
                  a genuine passion for seeing our community succeed.
                </p>
                <p>
                  Whether you're just starting out or looking to expand your online presence, we bring
                  fresh ideas, modern technology, and a commitment to your success to every project.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative h-96 bg-gradient-to-br from-primary-400 to-accent-400 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-white text-9xl font-bold opacity-20">
                  NOLA
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              These principles guide everything we do and shape how we work with our clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card group"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="text-white text-3xl" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-800">
                  {value.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {value.description}
                </p>
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
              Let's Work Together
            </h2>
            <p className="text-xl mb-8 text-white/90 leading-relaxed">
              Ready to take your business to the next level? We'd love to hear about
              your project and discuss how we can help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-lg text-white bg-transparent hover:bg-white hover:text-primary-600 transition-all duration-200 shadow-lg"
              >
                Get in Touch
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-lg font-medium rounded-lg text-primary-600 hover:bg-slate-100 transition-all duration-200 shadow-lg"
              >
                View Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
