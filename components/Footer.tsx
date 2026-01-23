'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

const footerLinks = {
  services: [
    { label: 'Web Development', href: '/services#web-development' },
    { label: 'SEO Services', href: '/services#seo' },
    { label: 'E-commerce', href: '/services#ecommerce' },
    { label: 'Digital Marketing', href: '/services#marketing' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Cookie Policy', href: '/cookies' },
    { label: 'Sitemap', href: '/sitemap.xml' },
  ],
};

const socialLinks = [
  { icon: FaFacebook, href: 'https://facebook.com', label: 'Facebook' },
  { icon: FaTwitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: FaLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: FaInstagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: FaGithub, href: 'https://github.com', label: 'GitHub' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative w-12 h-12">
                <Image
                  src="/logo.png"
                  alt="NOLA Web Development"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <div className="text-xl font-bold text-white">NOLA</div>
                <div className="text-sm text-slate-300 -mt-1">WEB DEVELOPMENT</div>
              </div>
            </div>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Building high-performance, SEO-optimized websites that drive results.
              Your partner for digital success in New Orleans and beyond.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-gradient-to-r hover:from-primary-500 hover:to-accent-500 flex items-center justify-center transition-all duration-300"
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-white transition-colors duration-200 inline-block hover:translate-x-1 transform"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-white transition-colors duration-200 inline-block hover:translate-x-1 transform"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
            <ul className="space-y-3 text-slate-300">
              <li>New Orleans, Louisiana</li>
              <li>
                <a
                  href="mailto:nolawebdev@gmail.com"
                  className="hover:text-white transition-colors duration-200"
                >
                  nolawebdev@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+15049132398"
                  className="hover:text-white transition-colors duration-200"
                >
                  (504) 913-2398
                </a>
              </li>
              <li>
                <a
                  href="tel:+12813821778"
                  className="hover:text-white transition-colors duration-200"
                >
                  (281) 382-1778
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-slate-700"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-400 text-sm">
              © {currentYear} NOLA Web Development. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-slate-400 hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
