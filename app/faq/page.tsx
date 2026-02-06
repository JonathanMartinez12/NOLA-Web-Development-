'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { FaChevronDown } from 'react-icons/fa';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQCategory {
  category: string;
  faqs: FAQ[];
}

const faqCategories: FAQCategory[] = [
  {
    category: 'General',
    faqs: [
      {
        question: 'What services does NOLA Web Development offer?',
        answer:
          'We offer custom web development, SEO optimization, e-commerce solutions, digital marketing, mobile app development, UI/UX design, website maintenance, and WordPress development. We specialize in helping local businesses in New Orleans and beyond establish a strong online presence.',
      },
      {
        question: 'Where is NOLA Web Development located?',
        answer:
          'We are based in New Orleans, Louisiana. While we primarily serve local businesses in the Greater New Orleans area, we work with clients across the country.',
      },
      {
        question: 'How do I get started?',
        answer:
          'You can get started by contacting us through our website contact form, emailing us at nolawebdev@gmail.com, or calling us at (281) 382-1778. We offer a free consultation to discuss your project needs and goals.',
      },
      {
        question: 'Do you offer a free consultation?',
        answer:
          'Yes! We offer a completely free initial consultation where we discuss your business goals, review your current online presence, and recommend the best path forward. There is no obligation to purchase anything.',
      },
    ],
  },
  {
    category: 'Pricing & Plans',
    faqs: [
      {
        question: 'How does the free website offer work?',
        answer:
          'When you purchase any of our monthly SEO packages (starting at $349/month), we build your custom website completely free. You get to see a demo of your website before it goes live. Your only cost is the monthly SEO subscription.',
      },
      {
        question: 'Can I get just a website without an SEO plan?',
        answer:
          'Yes! Our website-only packages start at $2,500 for a Starter site (up to 5 pages) and go up to custom Enterprise solutions. Entry level websites start at $1,200. Visit our Services page for full details on all options.',
      },
      {
        question: 'Can I cancel my subscription?',
        answer:
          "Yes! Cancel anytime with no fees or penalties. You'll continue to have access until the end of your billing period. We believe in earning your business every month.",
      },
      {
        question: 'What payment methods do you accept?',
        answer:
          'We accept all major credit cards (Visa, Mastercard, American Express) through our secure Stripe payment processor. For website-only projects, we also accept bank transfers.',
      },
      {
        question: 'Can I upgrade or downgrade my plan?',
        answer:
          'Absolutely! You can change your plan at any time. Changes take effect at the start of your next billing cycle. Our team will help you find the right plan as your business grows.',
      },
      {
        question: 'Do you offer annual billing?',
        answer:
          'Yes! Contact us for annual pricing with significant discounts. Annual plans offer the best value for businesses committed to long-term growth.',
      },
    ],
  },
  {
    category: 'Web Development',
    faqs: [
      {
        question: 'What technologies do you use to build websites?',
        answer:
          'We use modern, high-performance technologies including React, Next.js, TypeScript, and Node.js for custom builds. We also work with WordPress and WooCommerce for clients who prefer those platforms. Every site is built with mobile responsiveness, speed, and SEO in mind.',
      },
      {
        question: 'How long does it take to build a website?',
        answer:
          'A typical website takes 2-4 weeks from start to launch, depending on complexity. Simple brochure sites can be completed faster, while e-commerce or custom web applications may take longer. We will provide a clear timeline during your consultation.',
      },
      {
        question: 'Will my website be mobile-friendly?',
        answer:
          'Every website we build is fully responsive and optimized for all devices — phones, tablets, laptops, and desktops. Mobile-first design is a standard part of our development process.',
      },
      {
        question: 'Do I get to review my website before it goes live?',
        answer:
          'Yes! We provide a demo version of your website for you to review and request changes before it goes live. We want you to be completely happy with your site before launch.',
      },
      {
        question: 'Will I be able to update my website myself?',
        answer:
          'Yes. For WordPress sites, we provide training on how to manage your content. For custom sites, we can set up a content management system (CMS) so you can make basic updates. Our maintenance plans also cover content updates if you prefer hands-off management.',
      },
    ],
  },
  {
    category: 'SEO & Marketing',
    faqs: [
      {
        question: 'How long does it take to see SEO results?',
        answer:
          'SEO is a long-term strategy. Most clients start seeing improvements in rankings within 3-6 months, with significant results typically appearing around 6-12 months. We provide monthly reports so you can track progress from day one.',
      },
      {
        question: 'What is included in your SEO packages?',
        answer:
          'Our SEO packages include keyword research, on-page optimization, Google Business Profile setup/optimization, content strategy, technical SEO, local SEO, and monthly performance reports. Higher-tier plans add blog content, competitor analysis, Google Ads management, and more.',
      },
      {
        question: 'Do you guarantee first page rankings on Google?',
        answer:
          'No ethical SEO company can guarantee specific rankings because Google\'s algorithm is constantly changing. What we do guarantee is a data-driven strategy, transparent reporting, and consistent effort to improve your visibility. Our track record speaks for itself — we have helped businesses achieve #1 local rankings.',
      },
      {
        question: 'What is local SEO and why does my business need it?',
        answer:
          'Local SEO helps your business appear in local search results when people near you search for your services. This includes Google Maps listings, "near me" searches, and location-based results. For service-based businesses, local SEO is one of the most effective ways to generate leads.',
      },
    ],
  },
  {
    category: 'Support & Maintenance',
    faqs: [
      {
        question: 'What kind of support do you provide after launch?',
        answer:
          'All our plans include post-launch support. Website-only packages include 3-12 months of support depending on the plan. Monthly SEO subscribers receive ongoing support as part of their plan, including content updates, bug fixes, and performance monitoring.',
      },
      {
        question: 'Do you offer website hosting?',
        answer:
          'We help set up hosting on reliable platforms like Vercel, Netlify, or traditional hosting providers. Hosting costs are separate from our development fees, and we will recommend the best option for your needs and budget.',
      },
      {
        question: 'What happens to my website if I cancel my SEO subscription?',
        answer:
          'Your website remains live and functional. You keep full ownership of your website and domain. You simply will no longer receive ongoing SEO optimization, content updates, and marketing services included in the subscription.',
      },
      {
        question: 'How do I request changes or updates to my website?',
        answer:
          'You can request changes by emailing us at nolawebdev@gmail.com or calling (281) 382-1778. For monthly subscribers, content updates are included in your plan. For website-only clients, we offer affordable maintenance packages.',
      },
    ],
  },
];

function FAQItem({ faq, index }: { faq: FAQ; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
      >
        <span className="text-lg font-semibold text-slate-800 pr-4">
          {faq.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0"
        >
          <FaChevronDown className="text-primary-500" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-2 bg-white rounded-b-lg -mt-1 shadow-sm">
              <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQPage() {
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
              Frequently Asked Questions
            </h1>
            <p className="text-xl md:text-2xl text-slate-200 leading-relaxed">
              Find answers to common questions about our services, pricing, and process.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="section-padding bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="container-custom max-w-4xl">
          {faqCategories.map((category, catIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-slate-800 mb-6">
                {category.category}
              </h2>
              <div className="space-y-4">
                {category.faqs.map((faq, faqIndex) => (
                  <FAQItem
                    key={faqIndex}
                    faq={faq}
                    index={faqIndex}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Still Have Questions CTA */}
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
              Still Have Questions?
            </h2>
            <p className="text-xl mb-8 text-white/90 leading-relaxed">
              We&apos;re here to help. Reach out and we&apos;ll get back to you within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-lg text-white bg-transparent hover:bg-white hover:text-primary-600 transition-all duration-200 shadow-lg"
              >
                Contact Us
              </Link>
              <Link
                href="/audit"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-lg text-white bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 transition-all duration-200 shadow-lg"
              >
                Get a Free Audit
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
