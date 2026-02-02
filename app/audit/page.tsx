'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaSearch,
  FaMobile,
  FaDesktop,
  FaCheckCircle,
  FaExclamationTriangle,
  FaTimesCircle,
  FaSpinner,
  FaTachometerAlt,
  FaUniversalAccess,
  FaShieldAlt,
  FaChartLine,
  FaArrowRight,
} from 'react-icons/fa';

interface AuditScores {
  performance: number;
  accessibility: number;
  bestPractices: number;
  seo: number;
}

interface AuditDetail {
  title: string;
  description: string;
  score: number | null;
  displayValue?: string;
}

interface AuditResult {
  url: string;
  timestamp: string;
  mobile: {
    scores: AuditScores;
    audits: Record<string, AuditDetail>;
  };
  desktop: {
    scores: AuditScores;
    audits: Record<string, AuditDetail>;
  };
  fieldData: {
    overall: string;
    metrics: Record<string, {
      percentile: number;
      category: string;
    }>;
  } | null;
}

function ScoreCircle({ score, label, icon }: { score: number; label: string; icon: React.ReactNode }) {
  const getColor = (s: number) => {
    if (s >= 90) return { stroke: '#22c55e', bg: 'bg-green-50', text: 'text-green-600' };
    if (s >= 50) return { stroke: '#f59e0b', bg: 'bg-amber-50', text: 'text-amber-600' };
    return { stroke: '#ef4444', bg: 'bg-red-50', text: 'text-red-600' };
  };

  const colors = getColor(score);
  const circumference = 2 * Math.PI * 54;
  const offset = circumference - (score / 100) * circumference;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className={`flex flex-col items-center p-6 rounded-2xl ${colors.bg} border border-slate-100`}
    >
      <div className="relative w-32 h-32 mb-4">
        <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 120 120">
          <circle cx="60" cy="60" r="54" fill="none" stroke="#e2e8f0" strokeWidth="8" />
          <motion.circle
            cx="60"
            cy="60"
            r="54"
            fill="none"
            stroke={colors.stroke}
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: offset }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className={`text-3xl font-bold ${colors.text}`}>{score}</span>
        </div>
      </div>
      <div className={`flex items-center gap-2 ${colors.text}`}>
        {icon}
        <span className="font-semibold text-sm">{label}</span>
      </div>
    </motion.div>
  );
}

function AuditItem({ audit }: { audit: AuditDetail }) {
  const getStatusIcon = (score: number | null) => {
    if (score === null) return <FaExclamationTriangle className="text-slate-400 text-sm flex-shrink-0" />;
    if (score >= 0.9) return <FaCheckCircle className="text-green-500 text-sm flex-shrink-0" />;
    if (score >= 0.5) return <FaExclamationTriangle className="text-amber-500 text-sm flex-shrink-0" />;
    return <FaTimesCircle className="text-red-500 text-sm flex-shrink-0" />;
  };

  const getBgColor = (score: number | null) => {
    if (score === null) return 'bg-slate-50';
    if (score >= 0.9) return 'bg-green-50';
    if (score >= 0.5) return 'bg-amber-50';
    return 'bg-red-50';
  };

  return (
    <div className={`flex items-start gap-3 p-4 rounded-lg ${getBgColor(audit.score)} border border-slate-100`}>
      <div className="mt-0.5">{getStatusIcon(audit.score)}</div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="font-medium text-slate-800 text-sm">{audit.title}</span>
          {audit.displayValue && (
            <span className="text-xs px-2 py-0.5 rounded-full bg-white text-slate-600 border border-slate-200">
              {audit.displayValue}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default function AuditPage() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AuditResult | null>(null);
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState<'mobile' | 'desktop'>('mobile');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) return;

    setLoading(true);
    setError('');
    setResult(null);

    try {
      const res = await fetch('/api/audit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: url.trim() }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'Failed to run audit. Please try again.');
        return;
      }

      setResult(data);
    } catch {
      setError('Network error. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  const currentData = result ? result[activeTab] : null;

  const getOverallGrade = (scores: AuditScores) => {
    const avg = (scores.performance + scores.accessibility + scores.bestPractices + scores.seo) / 4;
    if (avg >= 90) return { grade: 'A', color: 'text-green-600', bg: 'bg-green-100' };
    if (avg >= 80) return { grade: 'B', color: 'text-emerald-600', bg: 'bg-emerald-100' };
    if (avg >= 70) return { grade: 'C', color: 'text-amber-600', bg: 'bg-amber-100' };
    if (avg >= 50) return { grade: 'D', color: 'text-orange-600', bg: 'bg-orange-100' };
    return { grade: 'F', color: 'text-red-600', bg: 'bg-red-100' };
  };

  const getFailingAudits = (audits: Record<string, AuditDetail>) => {
    return Object.values(audits).filter(a => a.score !== null && a.score < 0.9);
  };

  const getPassingAudits = (audits: Record<string, AuditDetail>) => {
    return Object.values(audits).filter(a => a.score !== null && a.score >= 0.9);
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-slate-900 via-emerald-900 to-green-900 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Free Website Audit
            </h1>
            <p className="text-xl text-slate-200 leading-relaxed mb-10">
              Get a comprehensive analysis of your website's performance, SEO, accessibility,
              and best practices powered by Google PageSpeed Insights.
            </p>

            {/* Audit Form */}
            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 relative">
                  <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg" />
                  <input
                    type="text"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="Enter your website URL (e.g., example.com)"
                    className="w-full pl-12 pr-4 py-4 text-lg text-slate-900 bg-white rounded-xl border-2 border-transparent focus:border-green-400 focus:ring-0 focus:outline-none shadow-lg transition-all"
                    disabled={loading}
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading || !url.trim()}
                  className="px-8 py-4 text-lg font-semibold rounded-xl text-white bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <FaSpinner className="animate-spin" />
                      Analyzing...
                    </>
                  ) : (
                    'Run Audit'
                  )}
                </button>
              </div>
            </form>

            {/* Loading State */}
            <AnimatePresence>
              {loading && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-8 p-6 bg-white/10 backdrop-blur-sm rounded-xl"
                >
                  <div className="flex items-center justify-center gap-3 text-green-300">
                    <FaSpinner className="animate-spin text-2xl" />
                    <span className="text-lg">Running mobile & desktop audits via Google PageSpeed Insights...</span>
                  </div>
                  <p className="text-slate-300 text-sm mt-2">This may take 30-60 seconds</p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Error State */}
            <AnimatePresence>
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-8 p-4 bg-red-500/20 border border-red-400/30 rounded-xl text-red-200"
                >
                  {error}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Results Section */}
      <AnimatePresence>
        {result && currentData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Overall Grade & Device Toggle */}
            <section className="py-12 bg-white border-b border-slate-200">
              <div className="container-custom">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="flex items-center gap-6">
                    <div className={`w-20 h-20 rounded-2xl ${getOverallGrade(currentData.scores).bg} flex items-center justify-center`}>
                      <span className={`text-4xl font-black ${getOverallGrade(currentData.scores).color}`}>
                        {getOverallGrade(currentData.scores).grade}
                      </span>
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-slate-800">Audit Results</h2>
                      <p className="text-slate-500 text-sm mt-1 break-all">{result.url}</p>
                    </div>
                  </div>

                  {/* Device Toggle */}
                  <div className="flex bg-slate-100 rounded-xl p-1">
                    <button
                      onClick={() => setActiveTab('mobile')}
                      className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                        activeTab === 'mobile'
                          ? 'bg-white text-slate-900 shadow-sm'
                          : 'text-slate-500 hover:text-slate-700'
                      }`}
                    >
                      <FaMobile />
                      Mobile
                    </button>
                    <button
                      onClick={() => setActiveTab('desktop')}
                      className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                        activeTab === 'desktop'
                          ? 'bg-white text-slate-900 shadow-sm'
                          : 'text-slate-500 hover:text-slate-700'
                      }`}
                    >
                      <FaDesktop />
                      Desktop
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* Score Cards */}
            <section className="py-12 bg-gradient-to-br from-slate-50 to-slate-100">
              <div className="container-custom">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                  <ScoreCircle
                    score={currentData.scores.performance}
                    label="Performance"
                    icon={<FaTachometerAlt />}
                  />
                  <ScoreCircle
                    score={currentData.scores.accessibility}
                    label="Accessibility"
                    icon={<FaUniversalAccess />}
                  />
                  <ScoreCircle
                    score={currentData.scores.bestPractices}
                    label="Best Practices"
                    icon={<FaShieldAlt />}
                  />
                  <ScoreCircle
                    score={currentData.scores.seo}
                    label="SEO"
                    icon={<FaChartLine />}
                  />
                </div>

                {/* Score Legend */}
                <div className="flex items-center justify-center gap-6 mt-8 text-sm text-slate-500">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <span>90-100: Good</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-amber-500" />
                    <span>50-89: Needs Work</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <span>0-49: Poor</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Field Data */}
            {result.fieldData && (
              <section className="py-12 bg-white border-b border-slate-200">
                <div className="container-custom">
                  <h3 className="text-2xl font-bold text-slate-800 mb-6">Real-World Performance Data</h3>
                  <p className="text-slate-500 mb-6 text-sm">
                    Based on real Chrome user data collected over the last 28 days.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {Object.entries(result.fieldData.metrics).map(([key, metric]) => {
                      const labels: Record<string, string> = {
                        CUMULATIVE_LAYOUT_SHIFT_SCORE: 'Cumulative Layout Shift',
                        EXPERIMENTAL_TIME_TO_FIRST_BYTE: 'Time to First Byte',
                        FIRST_CONTENTFUL_PAINT_MS: 'First Contentful Paint',
                        FIRST_INPUT_DELAY_MS: 'First Input Delay',
                        INTERACTION_TO_NEXT_PAINT: 'Interaction to Next Paint',
                        LARGEST_CONTENTFUL_PAINT_MS: 'Largest Contentful Paint',
                      };
                      const categoryColors: Record<string, string> = {
                        FAST: 'text-green-600 bg-green-50',
                        AVERAGE: 'text-amber-600 bg-amber-50',
                        SLOW: 'text-red-600 bg-red-50',
                      };
                      return (
                        <div key={key} className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                          <p className="text-sm font-medium text-slate-700 mb-2">
                            {labels[key] || key.replace(/_/g, ' ')}
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-2xl font-bold text-slate-800">
                              {key.includes('LAYOUT_SHIFT') ? (metric.percentile / 100).toFixed(2) : `${metric.percentile}ms`}
                            </span>
                            <span className={`text-xs font-semibold px-2 py-1 rounded-full ${categoryColors[metric.category] || 'text-slate-600 bg-slate-100'}`}>
                              {metric.category}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </section>
            )}

            {/* Detailed Audits */}
            <section className="py-12 bg-white">
              <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Issues to Fix */}
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                      <FaExclamationTriangle className="text-amber-500" />
                      Issues to Fix ({getFailingAudits(currentData.audits).length})
                    </h3>
                    <div className="space-y-2">
                      {getFailingAudits(currentData.audits).length === 0 ? (
                        <p className="text-slate-500 p-4 bg-green-50 rounded-lg">
                          No major issues found. Great job!
                        </p>
                      ) : (
                        getFailingAudits(currentData.audits)
                          .sort((a, b) => (a.score ?? 1) - (b.score ?? 1))
                          .map((audit, i) => (
                            <AuditItem key={i} audit={audit} />
                          ))
                      )}
                    </div>
                  </div>

                  {/* Passing Audits */}
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                      <FaCheckCircle className="text-green-500" />
                      Passing Audits ({getPassingAudits(currentData.audits).length})
                    </h3>
                    <div className="space-y-2">
                      {getPassingAudits(currentData.audits).length === 0 ? (
                        <p className="text-slate-500 p-4 bg-amber-50 rounded-lg">
                          No passing audits yet. There is room for improvement.
                        </p>
                      ) : (
                        getPassingAudits(currentData.audits).map((audit, i) => (
                          <AuditItem key={i} audit={audit} />
                        ))
                      )}
                    </div>
                  </div>
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
                  className="max-w-3xl mx-auto text-center"
                >
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    Need Help Fixing These Issues?
                  </h2>
                  <p className="text-xl mb-8 text-white/90 leading-relaxed">
                    Our team specializes in website optimization, SEO, and performance improvements.
                    Let us help you achieve perfect scores and rank higher on Google.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-lg font-medium rounded-lg text-white bg-transparent hover:bg-white hover:text-primary-600 transition-all duration-200 shadow-lg"
                  >
                    Get Expert Help <FaArrowRight />
                  </Link>
                </motion.div>
              </div>
            </section>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Features Section (shown before audit) */}
      {!result && !loading && (
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
                What We Analyze
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Our audit powered by Google PageSpeed Insights runs a full Lighthouse analysis
                on both mobile and desktop to give you actionable insights.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: FaTachometerAlt,
                  title: 'Performance',
                  description: 'Page load speed, Core Web Vitals, render-blocking resources, image optimization, and more.',
                  color: 'from-blue-500 to-cyan-500',
                },
                {
                  icon: FaChartLine,
                  title: 'SEO',
                  description: 'Meta tags, crawlability, structured data, mobile-friendliness, and search engine optimization.',
                  color: 'from-green-500 to-emerald-500',
                },
                {
                  icon: FaUniversalAccess,
                  title: 'Accessibility',
                  description: 'Color contrast, ARIA labels, heading structure, alt text, keyboard navigation, and more.',
                  color: 'from-purple-500 to-violet-500',
                },
                {
                  icon: FaShieldAlt,
                  title: 'Best Practices',
                  description: 'HTTPS, browser errors, deprecated APIs, image aspect ratios, and modern web standards.',
                  color: 'from-orange-500 to-red-500',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card text-center"
                >
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mx-auto mb-6`}>
                    <item.icon className="text-white text-3xl" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-slate-800">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
