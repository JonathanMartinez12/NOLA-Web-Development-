import { Metadata } from 'next';
import { generateMetadata as generateSEO } from '@/lib/seo';

export const metadata: Metadata = generateSEO({
  title: 'Contact Us | Free Consultation | New Orleans Web Development',
  description: 'Get a free consultation for your web development and SEO needs. Email: nolawebdev@gmail.com | Phone: (281) 382-1778. Serving New Orleans and Louisiana businesses. Fast response within 24 hours.',
  keywords: [
    'contact NOLA Web Development',
    'web development consultation',
    'New Orleans web design contact',
    'free website consultation',
    'SEO consultation Louisiana',
    'get a quote web design',
    'website project inquiry',
  ],
  canonicalUrl: '/contact',
  ogImage: '/images/contact-og.jpg',
});
