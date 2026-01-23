'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ShaderGradient, ShaderGradientCanvas } from '@shadergradient/react';
import {
  FaCode,
  FaSearch,
  FaRocket,
  FaMobile,
  FaChartLine,
  FaPalette,
  FaQuoteLeft,
  FaStar
} from 'react-icons/fa';

const features = [
  {
    icon: FaCode,
    title: 'Custom Web Development',
    description: 'Tailored solutions built with cutting-edge technologies like React, Next.js, and modern frameworks.',
  },
  {
    icon: FaSearch,
    title: 'SEO Optimization',
    description: 'Rank #1 on Google with our proven SEO strategies and technical optimization expertise.',
  },
  {
    icon: FaRocket,
    title: 'Lightning Fast Performance',
    description: 'Optimized for speed with 90+ PageSpeed scores, ensuring the best user experience.',
  },
  {
    icon: FaMobile,
    title: 'Responsive Design',
    description: 'Beautiful, mobile-first designs that look perfect on every device and screen size.',
  },
  {
    icon: FaChartLine,
    title: 'Conversion Focused',
    description: 'Designs engineered to convert visitors into customers and drive business growth.',
  },
  {
    icon: FaPalette,
    title: 'Modern UI/UX',
    description: 'Stunning, intuitive interfaces that engage users and reflect your brand identity.',
  },
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    company: 'Boutique Owner',
    image: '/images/testimonial-1.jpg',
    text: 'NOLA Web Development transformed our online presence. Our traffic increased 300% and sales are through the roof!',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    company: 'Restaurant Owner',
    image: '/images/testimonial-2.jpg',
    text: 'The team created a stunning website that perfectly captures our brand. Our online orders have tripled!',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    company: 'Legal Firm',
    image: '/images/testimonial-3.jpg',
    text: 'Professional, responsive, and results-driven. We now rank #1 for our key practice areas in New Orleans.',
    rating: 5,
  },
];

const stats = [
  { number: '500+', label: 'Websites Built' },
  { number: '98%', label: 'Client Satisfaction' },
  { number: '250%', label: 'Avg. Traffic Increase' },
  { number: '24/7', label: 'Support Available' },
];

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center text-white pt-20">
        {/* Shader Gradient Background */}
        <div className="absolute inset-0 overflow-hidden">
          <ShaderGradientCanvas
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
            }}
          >
            <ShaderGradient
              type="waterPlane"
              animate="on"
              uTime={0}
              uSpeed={0.08}
              uStrength={0.8}
              uDensity={1.2}
              uFrequency={3}
              uAmplitude={1.5}
              positionX={0}
              positionY={0}
              positionZ={0}
              rotationX={0}
              rotationY={0}
              rotationZ={0}
              color1="#0ea5e9"
              color2="#d946ef"
              color3="#0f172a"
              reflection={0.1}
              wireframe={false}
              shader="defaults"
              cAzimuthAngle={180}
              cPolarAngle={90}
              cDistance={3.5}
              cameraZoom={1}
              lightType="3d"
              brightness={1.1}
              envPreset="city"
              grain="off"
            />
          </ShaderGradientCanvas>
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-slate-900/30" />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Build Your Digital
                <span className="block mt-2 bg-gradient-to-r from-primary-300 via-accent-300 to-primary-300 bg-clip-text text-transparent animate-pulse-slow">
                  Empire in NOLA
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl mb-8 text-slate-200 leading-relaxed"
            >
              Premium web development and SEO services that drive real results.
              Rank #1 on Google and convert visitors into customers.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                Get Your Free Consultation
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-lg text-white bg-transparent hover:bg-white hover:text-slate-900 transition-all duration-200"
              >
                View Our Work
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-slate-300">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-white rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose NOLA Web Development?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We combine cutting-edge technology with proven SEO strategies to deliver
              websites that don't just look great—they perform exceptionally.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="card group"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="text-white text-3xl" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-800">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
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
              What Our Clients Say
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card"
              >
                <FaQuoteLeft className="text-4xl text-primary-500 mb-4 opacity-50" />
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-xl" />
                  ))}
                </div>
                <p className="text-slate-700 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold text-slate-800">{testimonial.name}</p>
                    <p className="text-sm text-slate-600">{testimonial.company}</p>
                  </div>
                </div>
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
              Ready to Dominate Your Market?
            </h2>
            <p className="text-xl mb-8 text-white/90 leading-relaxed">
              Let's build a website that not only looks amazing but drives real business results.
              Get your free consultation today and see how we can help you succeed online.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-lg text-white bg-transparent hover:bg-white hover:text-primary-600 transition-all duration-200 shadow-lg"
            >
              Start Your Project Today
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
