import { Metadata } from 'next';
import { generateMetadata as generateSEO } from '@/lib/seo';

export const metadata: Metadata = generateSEO({
  title: 'Pricing & Plans | Free Website Build with SEO | New Orleans',
  description: 'Transparent pricing for New Orleans businesses. Get your custom website FREE with any monthly SEO package - no upfront costs! Plans from $349/month. Website-only option: $1,200. Cancel anytime.',
  keywords: [
    'web development pricing',
    'SEO package pricing',
    'affordable web design New Orleans',
    'free website build',
    'monthly SEO plans',
    'NOLA web design cost',
    'small business website pricing',
    'transparent web design pricing',
    'no upfront costs',
    'website package deals',
    'local SEO pricing',
    'New Orleans SEO cost',
  ],
  canonicalUrl: '/pricing',
  ogImage: '/images/pricing-og.jpg',
});
