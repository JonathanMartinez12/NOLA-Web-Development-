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

const pricingPlans = [
  {
    name: 'Starter',
    price: '$2,500',
    description: 'Perfect for small businesses and startups',
    features: [
      'Up to 5 pages',
      'Responsive design',
      'Basic SEO optimization',
      'Contact form',
      'Social media integration',
      '3 months support',
    ],
    popular: false,
  },
  {
    name: 'Professional',
    price: '$5,000',
    description: 'Ideal for growing businesses',
    features: [
      'Up to 10 pages',
      'Advanced responsive design',
      'Comprehensive SEO',
      'Blog integration',
      'E-commerce (up to 50 products)',
      'Analytics setup',
      '6 months support',
      'Content management training',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large-scale projects and businesses',
    features: [
      'Unlimited pages',
      'Custom functionality',
      'Advanced SEO strategy',
      'Full e-commerce solution',
      'API integrations',
      'Custom web applications',
      '12 months priority support',
      'Dedicated project manager',
      'Performance optimization',
    ],
    popular: false,
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
              <strong>Purchase an SEO package → Get a FREE website!</strong>
            </p>
            <p className="text-lg text-slate-300 leading-relaxed mb-2">
              Want a website with ongoing SEO to drive traffic? Your custom website build is included free with any monthly SEO package.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              Need just a website without SEO? One-time payment of <strong>$1,200</strong>.
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
                <div className="text-5xl font-bold text-accent-600 mb-2">$1,200</div>
                <h3 className="font-semibold text-slate-800 mb-2">Website Only Option</h3>
                <p className="text-sm text-slate-600">
                  Need just a website? One-time payment with no ongoing SEO
                </p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-lg">
                <div className="text-5xl font-bold text-primary-600 mb-2">100%</div>
                <h3 className="font-semibold text-slate-800 mb-2">Satisfaction Guaranteed</h3>
                <p className="text-sm text-slate-600">
                  Quality work and transparent pricing with no hidden fees
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
              What's Included in Your Monthly Plan
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Every package includes a free custom website plus ongoing SEO and marketing
              to drive customers to your business.
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

      {/* Pricing Section */}
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
              Transparent Pricing
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Choose the plan that best fits your needs. All plans include responsive
              design, hosting setup assistance, and ongoing support.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative bg-white rounded-2xl shadow-xl p-8 ${
                  plan.popular
                    ? 'ring-4 ring-primary-500 transform md:scale-105'
                    : 'border border-slate-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-primary-500 to-accent-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-slate-600 mb-4">{plan.description}</p>
                  <div className="text-5xl font-bold text-slate-900 mb-2">
                    {plan.price}
                  </div>
                  {plan.price !== 'Custom' && (
                    <p className="text-slate-600">One-time payment</p>
                  )}
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <FaCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`block w-full text-center px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-primary-600 to-accent-600 text-white hover:from-primary-700 hover:to-accent-700 shadow-lg hover:shadow-xl'
                      : 'bg-slate-100 text-slate-800 hover:bg-slate-200'
                  }`}
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <p className="text-slate-600 mb-4">
              Need something custom? We can create a tailored solution for your specific needs.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold"
            >
              Contact us for a custom quote →
            </Link>
          </motion.div>
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
              Let's discuss your project and find the perfect solution for your business.
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
