import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo';

export const metadata: Metadata = generateMetadata({
  title: 'FAQ | Frequently Asked Questions | New Orleans Web Development',
  description: 'Find answers to common questions about NOLA Web Development services, pricing, SEO packages, web design process, and support. Get a free website with any SEO plan.',
  keywords: [
    'web development FAQ',
    'SEO services questions',
    'NOLA web design FAQ',
    'New Orleans web development questions',
    'website pricing FAQ',
    'SEO package questions',
    'free website FAQ',
    'web design process',
    'local SEO questions',
    'website maintenance FAQ',
  ],
  canonicalUrl: '/faq',
});
