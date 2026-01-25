'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaRocket,
  FaUniversalAccess,
  FaShieldAlt,
  FaSearch,
  FaSpinner,
  FaCheckCircle,
  FaExclamationTriangle,
  FaTimesCircle,
  FaLightbulb,
  FaMobile,
  FaDesktop,
} from 'react-icons/fa';
import Link from 'next/link';

interface Metric {
  value: string;
  score: number;
}

interface Opportunity {
  title: string;
  description: string;
  savings: string | null;
}

interface AuditResult {
  url: string;
  fetchTime: string;
  strategy: string;
  scores: {
    performance: number;
    accessibility: number;
    bestPractices: number;
    seo: number;
  };
  metrics: {
    firstContentfulPaint: Metric;
    largestContentfulPaint: Metric;
    totalBlockingTime: Metric;
    cumulativeLayoutShift: Metric;
    speedIndex: Metric;
    timeToInteractive: Metric;
  };
  opportunities: Opportunity[];
}

function getScoreColor(score: number): string {
  if (score >= 90) return 'text-green-500';
  if (score >= 50) return 'text-yellow-500';
  return 'text-red-500';
}

function getScoreBgColor(score: number): string {
  if (score >= 90) return 'bg-green-500';
  if (score >= 50) return 'bg-yellow-500';
  return 'bg-red-500';
}

function getScoreIcon(score: number) {
  if (score >= 90) return <FaCheckCircle className="text-green-500" />;
  if (score >= 50) return <FaExclamationTriangle className="text-yellow-500" />;
  return <FaTimesCircle className="text-red-500" />;
}

function ScoreCircle({ score, label, icon }: { score: number; label: string; icon: React.ReactNode }) {
  const circumference = 2 * Math.PI * 45;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-28 h-28">
        <svg className="w-28 h-28 transform -rotate-90">
          <circle
            cx="56"
            cy="56"
            r="45"
            stroke="currentColor"
            strokeWidth="8"
            fill="transparent"
            className="text-slate-200"
          />
          <circle
            cx="56"
            cy="56"
            r="45"
            stroke="currentColor"
            strokeWidth="8"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className={getScoreColor(score)}
            style={{ transition: 'stroke-dashoffset 1s ease-out' }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className={`text-2xl font-bold ${getScoreColor(score)}`}>{score}</span>
        </div>
      </div>
      <div className="mt-2 flex items-center gap-2 text-slate-700">
        {icon}
        <span className="font-medium">{label}</span>
      </div>
    </div>
  );
}

function MetricRow({ label, metric }: { label: string; metric: Metric }) {
  return (
    <div className="flex items-center justify-between py-3 border-b border-slate-100 last:border-0">
      <span className="text-slate-600">{label}</span>
      <div className="flex items-center gap-2">
        <span className="font-semibold text-slate-800">{metric.value}</span>
        {getScoreIcon(metric.score * 100)}
      </div>
    </div>
  );
}

export default function SiteAuditPage() {
  const [url, setUrl] = useState('');
  const [strategy, setStrategy] = useState<'mobile' | 'desktop'>('mobile');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<AuditResult | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);

    let testUrl = url.trim();
    if (!testUrl.startsWith('http://') && !testUrl.startsWith('https://')) {
      testUrl = 'https://' + testUrl;
    }

    try {
      const response = await fetch(
        `/api/pagespeed?url=${encodeURIComponent(testUrl)}&strategy=${strategy}`
      );
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to analyze website');
      }

      setResult(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-primary-900 to-accent-900 text-white py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Free Website Performance Audit
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Get instant insights into your website's performance, accessibility, SEO, and more.
              Powered by Google PageSpeed Insights.
            </p>

            {/* URL Input Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="Enter website URL (e.g., example.com)"
                  className="flex-1 px-6 py-4 rounded-lg text-slate-800 text-lg focus:outline-none focus:ring-4 focus:ring-primary-500/50"
                  required
                  disabled={loading}
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="px-8 py-4 bg-primary-500 hover:bg-primary-600 disabled:bg-primary-400 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <FaSpinner className="animate-spin" />
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <FaRocket />
                      Analyze Site
                    </>
                  )}
                </button>
              </div>

              {/* Strategy Toggle */}
              <div className="flex justify-center gap-4">
                <button
                  type="button"
                  onClick={() => setStrategy('mobile')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                    strategy === 'mobile'
                      ? 'bg-white text-primary-600'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  <FaMobile />
                  Mobile
                </button>
                <button
                  type="button"
                  onClick={() => setStrategy('desktop')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                    strategy === 'desktop'
                      ? 'bg-white text-primary-600'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  <FaDesktop />
                  Desktop
                </button>
              </div>
            </form>

            {error && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-200"
              >
                {error}
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Loading State */}
      {loading && (
        <section className="py-20">
          <div className="container-custom text-center">
            <FaSpinner className="animate-spin text-6xl text-primary-500 mx-auto mb-4" />
            <p className="text-xl text-slate-600">
              Analyzing your website... This may take 30-60 seconds.
            </p>
          </div>
        </section>
      )}

      {/* Results Section */}
      {result && !loading && (
        <section className="py-12">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              {/* Analyzed URL */}
              <div className="text-center">
                <p className="text-slate-500">Results for</p>
                <p className="text-xl font-semibold text-slate-800 break-all">{result.url}</p>
                <p className="text-sm text-slate-400 mt-1">
                  {strategy === 'mobile' ? 'Mobile' : 'Desktop'} • {new Date(result.fetchTime).toLocaleString()}
                </p>
              </div>

              {/* Score Cards */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-center text-slate-800 mb-8">
                  Overall Scores
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  <ScoreCircle
                    score={result.scores.performance}
                    label="Performance"
                    icon={<FaRocket className="text-primary-500" />}
                  />
                  <ScoreCircle
                    score={result.scores.accessibility}
                    label="Accessibility"
                    icon={<FaUniversalAccess className="text-primary-500" />}
                  />
                  <ScoreCircle
                    score={result.scores.bestPractices}
                    label="Best Practices"
                    icon={<FaShieldAlt className="text-primary-500" />}
                  />
                  <ScoreCircle
                    score={result.scores.seo}
                    label="SEO"
                    icon={<FaSearch className="text-primary-500" />}
                  />
                </div>
              </div>

              {/* Core Web Vitals */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-slate-800 mb-6">
                  Core Web Vitals & Metrics
                </h2>
                <div className="divide-y divide-slate-100">
                  <MetricRow label="First Contentful Paint (FCP)" metric={result.metrics.firstContentfulPaint} />
                  <MetricRow label="Largest Contentful Paint (LCP)" metric={result.metrics.largestContentfulPaint} />
                  <MetricRow label="Total Blocking Time (TBT)" metric={result.metrics.totalBlockingTime} />
                  <MetricRow label="Cumulative Layout Shift (CLS)" metric={result.metrics.cumulativeLayoutShift} />
                  <MetricRow label="Speed Index" metric={result.metrics.speedIndex} />
                  <MetricRow label="Time to Interactive" metric={result.metrics.timeToInteractive} />
                </div>
              </div>

              {/* Opportunities */}
              {result.opportunities.length > 0 && (
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                    <FaLightbulb className="text-yellow-500" />
                    Top Opportunities
                  </h2>
                  <div className="space-y-4">
                    {result.opportunities.map((opp, index) => (
                      <div
                        key={index}
                        className="p-4 bg-slate-50 rounded-lg border-l-4 border-yellow-500"
                      >
                        <div className="flex items-start justify-between">
                          <h3 className="font-semibold text-slate-800">{opp.title}</h3>
                          {opp.savings && (
                            <span className="text-sm font-medium text-green-600 bg-green-100 px-2 py-1 rounded">
                              Save {opp.savings}
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-slate-600 mt-1">{opp.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA */}
              <div className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl p-8 text-center text-white">
                <h2 className="text-2xl font-bold mb-4">
                  Want to Improve These Scores?
                </h2>
                <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
                  Our team of experts can help optimize your website for better performance,
                  accessibility, and SEO. Get a free consultation today!
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-slate-100 transition-colors"
                >
                  Get Free Consultation
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Info Section (when no results) */}
      {!result && !loading && (
        <section className="py-16">
          <div className="container-custom">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaRocket className="text-2xl text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Performance</h3>
                <p className="text-slate-600">
                  Measures how quickly content loads and becomes interactive.
                </p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaUniversalAccess className="text-2xl text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Accessibility</h3>
                <p className="text-slate-600">
                  Checks if your site is usable by people with disabilities.
                </p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaSearch className="text-2xl text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">SEO</h3>
                <p className="text-slate-600">
                  Evaluates how well your site can be discovered by search engines.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
