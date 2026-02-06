'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  FaCode,
  FaSearch,
  FaShoppingCart,
  FaBullhorn,
  FaMobile,
  FaPaintBrush,
  FaRocket,
  FaCheck,
  FaWordpress,
} from 'react-icons/fa';

const services = [
  {
    icon: FaCode,
    title: 'Custom Web Development',
    description: 'Tailored web solutions built with modern technologies like React, Next.js, Node.js, and more.',
    features: [
      'Custom functionality and features',
      'Responsive, mobile-first design',
      'Fast loading speeds (90+ PageSpeed score)',
      'Secure and scalable architecture',
      'CMS integration',
      'API development and integration',
    ],
  },
  {
    icon: FaSearch,
    title: 'SEO Optimization',
    description: 'Comprehensive SEO services to help you rank #1 on Google and drive organic traffic.',
    features: [
      'Keyword research and strategy',
      'On-page and technical SEO',
      'Local SEO optimization',
      'Content optimization',
      'Link building strategies',
      'Monthly performance reports',
    ],
  },
  {
    icon: FaShoppingCart,
    title: 'E-Commerce Solutions',
    description: 'Complete e-commerce platforms that drive sales and provide seamless shopping experiences.',
    features: [
      'Custom online stores',
      'Shopping cart and checkout',
      'Payment gateway integration',
      'Inventory management',
      'Order tracking systems',
      'Product catalog management',
    ],
  },
  {
    icon: FaBullhorn,
    title: 'Digital Marketing',
    description: 'Strategic digital marketing campaigns to boost your online presence and generate leads.',
    features: [
      'Social media marketing',
      'PPC advertising (Google Ads)',
      'Email marketing campaigns',
      'Content marketing',
      'Conversion rate optimization',
      'Analytics and tracking',
    ],
  },
  {
    icon: FaMobile,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
    features: [
      'iOS and Android apps',
      'React Native development',
      'Progressive Web Apps (PWA)',
      'App store optimization',
      'Push notifications',
      'In-app purchases',
    ],
  },
  {
    icon: FaPaintBrush,
    title: 'UI/UX Design',
    description: 'Beautiful, user-centered designs that engage visitors and drive conversions.',
    features: [
      'Custom UI/UX design',
      'Brand identity development',
      'Wireframing and prototyping',
      'User research and testing',
      'Design systems',
      'Interactive animations',
    ],
  },
  {
    icon: FaRocket,
    title: 'Website Maintenance',
    description: 'Ongoing support and maintenance to keep your website secure, fast, and up-to-date.',
    features: [
      '24/7 monitoring and support',
      'Regular updates and backups',
      'Security patches',
      'Performance optimization',
      'Content updates',
      'Bug fixes and troubleshooting',
    ],
  },
  {
    icon: FaWordpress,
    title: 'WordPress Development',
    description: 'Custom WordPress websites and plugins tailored to your specific needs.',
    features: [
      'Custom theme development',
      'Plugin development',
      'WooCommerce integration',
      'Migration services',
      'Speed optimization',
      'WordPress training',
    ],
  },
];

export default function ServicesPage() {
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
              New Orleans Web Development & SEO Services
            </h1>
            <p className="text-xl md:text-2xl text-slate-200 leading-relaxed mb-4">
              Custom websites, SEO, and digital marketing to help your business grow online.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              From web design to search engine optimization, we provide everything you need to attract more customers and stand out from the competition.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-12 bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
            >
              <div className="p-6 bg-white rounded-xl shadow-lg">
                <div className="text-5xl font-bold text-primary-600 mb-2">FREE</div>
                <h3 className="font-semibold text-slate-800 mb-2">Website with SEO Package</h3>
                <p className="text-sm text-slate-600">
                  Purchase any SEO package and get your custom website build included free
                </p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-lg">
                <div className="text-5xl font-bold text-accent-600 mb-2">Custom</div>
                <h3 className="font-semibold text-slate-800 mb-2">Tailored Solutions</h3>
                <p className="text-sm text-slate-600">
                  Every project is unique — contact us for a personalized quote
                </p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-lg">
                <div className="text-5xl font-bold text-primary-600 mb-2">100%</div>
                <h3 className="font-semibold text-slate-800 mb-2">Satisfaction Guaranteed</h3>
                <p className="text-sm text-slate-600">
                  Quality work and transparent process with no hidden fees
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
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
              What We Offer
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Full-service web development and digital marketing to drive customers to your business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                id={service.title.toLowerCase().replace(/\s+/g, '-')}
                className="card group hover:shadow-2xl"
              >
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="text-white text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-slate-600">{service.description}</p>
                  </div>
                </div>
                <ul className="space-y-3 ml-[72px]">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <FaCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
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
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 text-white/90 leading-relaxed">
              Let&apos;s discuss your project and find the perfect solution for your business.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-lg text-white bg-transparent hover:bg-white hover:text-primary-600 transition-all duration-200 shadow-lg"
            >
              Schedule Your Free Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
