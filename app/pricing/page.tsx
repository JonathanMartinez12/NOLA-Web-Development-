'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaCheck, FaSpinner } from 'react-icons/fa';

interface PricingPlan {
  name: string;
  price: string;
  priceId: string; // Stripe Price ID
  description: string;
  features: string[];
  popular: boolean;
  billingPeriod: 'month' | 'year';
}

const pricingPlans: PricingPlan[] = [
  {
    name: 'Starter',
    price: '$99',
    priceId: 'price_starter_monthly', // Replace with your actual Stripe Price ID
    description: 'Perfect for small businesses getting started',
    billingPeriod: 'month',
    features: [
      'Website hosting & maintenance',
      'Monthly performance reports',
      'Basic SEO optimization',
      'Security updates',
      'Email support',
      '2 content updates per month',
    ],
    popular: false,
  },
  {
    name: 'Professional',
    price: '$249',
    priceId: 'price_professional_monthly', // Replace with your actual Stripe Price ID
    description: 'Ideal for growing businesses',
    billingPeriod: 'month',
    features: [
      'Everything in Starter',
      'Advanced SEO optimization',
      'Monthly blog posts (2x)',
      'Social media integration',
      'Analytics & insights',
      '5 content updates per month',
      'Priority email support',
      'Performance optimization',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: '$499',
    priceId: 'price_enterprise_monthly', // Replace with your actual Stripe Price ID
    description: 'For businesses that need it all',
    billingPeriod: 'month',
    features: [
      'Everything in Professional',
      'Dedicated account manager',
      'Weekly blog posts (4x)',
      'Advanced security features',
      'A/B testing & optimization',
      'Unlimited content updates',
      '24/7 priority support',
      'Custom feature development',
      'Monthly strategy calls',
    ],
    popular: false,
  },
];

export default function PricingPage() {
  const [loading, setLoading] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubscribe = async (priceId: string, planName: string) => {
    try {
      setLoading(priceId);
      setError(null);

      // Call API to create checkout session
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          priceId,
          customerEmail: '', // Optional: can collect email first
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to create checkout session');
      }

      // Redirect to Stripe Checkout URL
      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error('No checkout URL returned');
      }
    } catch (err: any) {
      console.error('Checkout error:', err);
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(null);
    }
  };

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
              Monthly Plans & Pricing
            </h1>
            <p className="text-xl text-slate-200 leading-relaxed">
              Affordable monthly plans with no long-term contracts. Cancel anytime.
              Get started with a 14-day free trial!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-padding bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="container-custom">
          {/* Error Message */}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-2xl mx-auto mb-8 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700"
            >
              {error}
            </motion.div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.priceId}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
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
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-slate-900">
                      {plan.price}
                    </span>
                    <span className="text-slate-600 ml-2">/month</span>
                  </div>
                  <p className="text-sm text-slate-500 mt-2">
                    14-day free trial • Cancel anytime
                  </p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <FaCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handleSubscribe(plan.priceId, plan.name)}
                  disabled={loading !== null}
                  className={`w-full px-6 py-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center ${
                    plan.popular
                      ? 'bg-gradient-to-r from-primary-600 to-accent-600 text-white hover:from-primary-700 hover:to-accent-700 shadow-lg hover:shadow-xl'
                      : 'bg-slate-100 text-slate-800 hover:bg-slate-200'
                  } disabled:opacity-50 disabled:cursor-not-allowed`}
                >
                  {loading === plan.priceId ? (
                    <>
                      <FaSpinner className="animate-spin mr-2" />
                      Processing...
                    </>
                  ) : (
                    'Start Free Trial'
                  )}
                </button>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12 max-w-3xl mx-auto"
          >
            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              All Plans Include
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-white rounded-lg shadow">
                <h4 className="font-semibold text-slate-800 mb-2">
                  No Setup Fees
                </h4>
                <p className="text-sm text-slate-600">
                  Get started immediately with no upfront costs
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow">
                <h4 className="font-semibold text-slate-800 mb-2">
                  Cancel Anytime
                </h4>
                <p className="text-sm text-slate-600">
                  No long-term contracts or cancellation fees
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow">
                <h4 className="font-semibold text-slate-800 mb-2">
                  Secure Payments
                </h4>
                <p className="text-sm text-slate-600">
                  Powered by Stripe for secure transactions
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mt-12"
          >
            <p className="text-slate-600 mb-4">
              Need a custom solution?
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold"
            >
              Contact us for enterprise pricing →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                q: 'How does the free trial work?',
                a: 'Start with a 14-day free trial - no credit card required. After the trial, your subscription begins automatically unless you cancel.',
              },
              {
                q: 'Can I cancel my subscription?',
                a: 'Yes! Cancel anytime with no fees or penalties. You\'ll continue to have access until the end of your billing period.',
              },
              {
                q: 'What payment methods do you accept?',
                a: 'We accept all major credit cards (Visa, Mastercard, American Express) through our secure Stripe payment processor.',
              },
              {
                q: 'Can I upgrade or downgrade my plan?',
                a: 'Absolutely! You can change your plan at any time. Changes take effect at the start of your next billing cycle.',
              },
              {
                q: 'Do you offer annual billing?',
                a: 'Yes! Contact us for annual pricing with significant discounts.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-50 rounded-lg p-6"
              >
                <h3 className="text-lg font-semibold text-slate-800 mb-2">
                  {faq.q}
                </h3>
                <p className="text-slate-600">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
