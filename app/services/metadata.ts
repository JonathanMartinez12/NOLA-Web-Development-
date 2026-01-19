import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo';

export const metadata: Metadata = generateMetadata({
  title: 'Web Development & SEO Services',
  description: 'Comprehensive web development, SEO, and digital marketing services in New Orleans. Custom websites, e-commerce, mobile apps, and more. Transparent pricing and proven results.',
  keywords: [
    'web development services New Orleans',
    'SEO services pricing',
    'custom website development',
    'e-commerce development',
    'digital marketing services',
    'web design packages',
    'affordable web development',
    'professional SEO services',
    'mobile app development',
    'UI/UX design services',
    'WordPress development',
    'website maintenance',
  ],
  canonicalUrl: '/services',
});
