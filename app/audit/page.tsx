'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import {
  FaSearch,
  FaRocket,
  FaMobile,
  FaShieldAlt,
  FaChartLine,
  FaTachometerAlt,
  FaCheckCircle,
  FaExclamationCircle,
  FaGlobe,
  FaLightbulb,
} from 'react-icons/fa';

const auditFeatures = [
  {
    icon: FaTachometerAlt,
    title: 'Performance Analysis',
    description: 'We measure your site speed, load times, and Core Web Vitals scores.',
  },
  {
    icon: FaSearch,
    title: 'SEO Health Check',
    description: 'Review of meta tags, keywords, indexing status, and search visibility.',
  },
  {
    icon: FaMobile,
    title: 'Mobile Responsiveness',
    description: 'Testing across devices to ensure seamless mobile experience.',
  },
  {
    icon: FaShieldAlt,
    title: 'Security Assessment',
    description: 'SSL certificate, vulnerability checks, and security best practices.',
  },
  {
    icon: FaChartLine,
    title: 'Conversion Optimization',
    description: 'Analysis of user flow, CTAs, and conversion bottlenecks.',
  },
  {
    icon: FaLightbulb,
    title: 'Actionable Recommendations',
    description: 'Clear, prioritized steps to improve your website performance.',
  },
];

const processSteps = [
  { step: '01', title: 'Submit Your URL', description: 'Enter your website address below' },
  { step: '02', title: 'We Analyze', description: 'Our team reviews your site thoroughly' },
  { step: '03', title: 'Get Your Report', description: 'Receive detailed findings via email' },
  { step: '04', title: 'Take Action', description: 'Implement improvements or let us help' },
];

interface FormData {
  name: string;
  email: string;
  website: string;
  goals: string;
}

interface FormStatus {
  type: 'success' | 'error' | null;
  message: string;
}

export default function AuditPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    website: '',
    goals: '',
  });

  const [status, setStatus] = useState<FormStatus>({
    type: null,
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: '' });

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          website: formData.website,
          message: `Website Audit Request\n\nWebsite: ${formData.website}\nGoals: ${formData.goals}`,
          to_name: 'NOLA Web Development',
        },
        publicKey
      );

      if (result.status === 200) {
        setStatus({
          type: 'success',
          message: 'Your audit request has been submitted! We\'ll analyze your website and send the report within 48 hours.',
        });
        setFormData({
          name: '',
          email: '',
          website: '',
          goals: '',
        });
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus({
        type: 'error',
        message: 'Something went wrong. Please try again or contact us directly at nolawebdev@gmail.com',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-slate-900 via-primary-900 to-accent-900 text-white relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/20 border border-primary-500/30 text-primary-300 text-sm font-medium mb-8"
            >
              <FaGlobe className="animate-pulse" />
              <span>100% Free Website Analysis</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Get Your{' '}
              <span className="gradient-text">Free Website Audit</span>
            </h1>

            <p className="text-xl text-slate-200 leading-relaxed mb-10 max-w-2xl mx-auto">
              Discover what's holding your website back. Our comprehensive audit reveals
              performance issues, SEO gaps, and opportunities to convert more visitors into customers.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <a href="#audit-form" className="btn-primary">
                <FaRocket className="mr-2" />
                Start Free Audit
              </a>
              <a href="#what-we-check" className="btn-secondary">
                <FaSearch className="mr-2" />
                See What We Check
              </a>
            </motion.div>
          </motion.div>

          {/* Floating Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-4xl mx-auto"
          >
            {[
              { value: '50+', label: 'Checkpoints' },
              { value: '48hr', label: 'Turnaround' },
              { value: '100%', label: 'Free' },
              { value: '5-Star', label: 'Rated' },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-center py-4"
              >
                <div className="text-2xl md:text-3xl font-bold text-primary-400">{stat.value}</div>
                <div className="text-sm text-slate-300">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What We Check Section */}
      <section id="what-we-check" className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              What We <span className="gradient-text">Analyze</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our comprehensive audit covers every aspect of your website's health and performance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {auditFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card group"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              How It <span className="gradient-text">Works</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Getting your free website audit is simple. Here's what to expect.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                {/* Connector Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[60%] w-full h-px bg-gradient-to-r from-primary-500/50 to-transparent" />
                )}

                <div className="card text-center relative">
                  <div className="text-5xl font-bold text-primary-500/10 absolute top-4 right-4">
                    {item.step}
                  </div>
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Audit Form Section */}
      <section id="audit-form" className="section-padding bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                Ready to <span className="gradient-text">Improve</span> Your Website?
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-8">
                Enter your website URL below and we'll send you a comprehensive audit report
                within 48 hours. No strings attached - it's completely free.
              </p>

              <div className="space-y-4">
                {[
                  'Detailed performance metrics',
                  'SEO improvement opportunities',
                  'Mobile usability issues',
                  'Security vulnerabilities',
                  'Prioritized action items',
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center flex-shrink-0">
                      <FaCheckCircle className="text-white text-xs" />
                    </div>
                    <span className="text-slate-700">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="card">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">Request Your Free Audit</h3>
                  <p className="text-slate-600 text-sm">Takes less than 60 seconds</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  {/* Website URL */}
                  <div>
                    <label htmlFor="website" className="block text-sm font-semibold text-slate-700 mb-2">
                      Website URL *
                    </label>
                    <input
                      type="url"
                      id="website"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="https://yourwebsite.com"
                    />
                  </div>

                  {/* Goals */}
                  <div>
                    <label htmlFor="goals" className="block text-sm font-semibold text-slate-700 mb-2">
                      What are your main goals? (Optional)
                    </label>
                    <textarea
                      id="goals"
                      name="goals"
                      value={formData.goals}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                      placeholder="e.g., Increase traffic, improve conversions, fix slow loading..."
                    />
                  </div>

                  {/* Status Message */}
                  {status.type && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex items-start gap-3 p-4 rounded-lg ${
                        status.type === 'success'
                          ? 'bg-green-50 border border-green-200'
                          : 'bg-red-50 border border-red-200'
                      }`}
                    >
                      {status.type === 'success' ? (
                        <FaCheckCircle className="text-green-500 text-xl flex-shrink-0 mt-0.5" />
                      ) : (
                        <FaExclamationCircle className="text-red-500 text-xl flex-shrink-0 mt-0.5" />
                      )}
                      <p className={`text-sm ${status.type === 'success' ? 'text-green-700' : 'text-red-700'}`}>
                        {status.message}
                      </p>
                    </motion.div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Submitting...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        <FaRocket />
                        Get My Free Audit
                      </span>
                    )}
                  </button>

                  <p className="text-xs text-slate-500 text-center">
                    We respect your privacy. Your information will never be shared.
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 via-accent-600 to-primary-600">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Questions? We're Here to Help
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Not sure if your website needs an audit? Reach out and let's chat about your goals.
            </p>
            <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-slate-100 transition-all duration-200 shadow-lg hover:shadow-xl">
              Contact Us
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
