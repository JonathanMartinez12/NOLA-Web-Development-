import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo';

export const metadata: Metadata = generateMetadata({
  title: 'Web Development & SEO Services | Free Website with SEO | New Orleans',
  description: 'Get a FREE custom website with any SEO package! Professional web development, SEO optimization, and digital marketing services in New Orleans. Contact us for a personalized quote. Help local businesses be found online.',
  keywords: [
    'web development New Orleans',
    'SEO services New Orleans',
    'free website with SEO',
    'NOLA web design',
    'New Orleans SEO company',
    'local SEO Louisiana',
    'affordable web design',
    'small business website',
    'custom website development',
    'search engine optimization',
    'digital marketing NOLA',
    'e-commerce development',
    'WordPress development',
    'website maintenance',
    'mobile responsive design',
    'monthly SEO plans',
    'free website build',
  ],
  canonicalUrl: '/services',
  ogImage: '/images/services-og.jpg',
});
