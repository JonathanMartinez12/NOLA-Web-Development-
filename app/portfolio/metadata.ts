import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo';

export const metadata: Metadata = generateMetadata({
  title: 'Our Portfolio | Web Development Projects | New Orleans',
  description: 'View our web development portfolio featuring Krewe of Christmas, Mendez Income Tax, and Fann\'s Cleaning Services projects. See how we help New Orleans businesses succeed online with custom websites and SEO.',
  keywords: [
    'web development portfolio',
    'New Orleans web design projects',
    'NOLA website examples',
    'custom website portfolio',
    'non-profit web design',
    'professional services websites',
    'WordPress development examples',
    'Firebase web applications',
    'tax services website',
    'charity website design',
    'cleaning services website',
    'home services web design',
    'local business SEO',
  ],
  canonicalUrl: '/portfolio',
  ogImage: '/images/portfolio-og.jpg',
});
