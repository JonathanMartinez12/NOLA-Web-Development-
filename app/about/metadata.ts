import { Metadata } from 'next';
import { generateMetadata as generateSEO } from '@/lib/seo';

export const metadata: Metadata = generateSEO({
  title: 'About Us | College Students Helping Local Businesses | NOLA Web Dev',
  description: 'Founded in 2025 by two college students passionate about helping New Orleans local businesses be seen online. Learn our story and mission to make professional web development accessible.',
  keywords: [
    'about NOLA Web Development',
    'New Orleans web developers',
    'local web design company',
    'student entrepreneurs',
    'Louisiana web development',
    'small business support',
    'community-focused web design',
    'college student startup',
    'local business advocacy',
  ],
  canonicalUrl: '/about',
  ogImage: '/images/about-og.jpg',
});
