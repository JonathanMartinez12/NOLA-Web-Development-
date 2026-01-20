import { Metadata } from 'next';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
}

export const defaultKeywords = [
  'web development New Orleans',
  'SEO services New Orleans',
  'NOLA web design',
  'New Orleans SEO company',
  'website development Louisiana',
  'search engine optimization',
  'digital marketing New Orleans',
  'responsive web design',
  'e-commerce development',
  'custom website design',
  'local SEO services',
  'WordPress development',
  'React development',
  'Next.js development',
  'professional web design',
  'mobile-friendly websites',
  'website optimization',
  'conversion rate optimization',
  'Google ranking services',
  'organic search results',
  'keyword research',
  'on-page SEO',
  'technical SEO',
  'content marketing',
  'web development agency',
  'affordable web design',
  'small business websites',
  'landing page design',
  'UI/UX design',
  'website maintenance',
  'web application development',
  'business website design',
  'portfolio website design',
  'blog development',
  'website speed optimization',
  'mobile app development',
  'brand identity design',
  'New Orleans digital agency',
  'Louisiana web developers',
  'Gulf Coast web design',
];

export const siteConfig = {
  name: 'NOLA Web Development',
  description: 'Get a FREE custom website when you purchase any SEO package! New Orleans web development and SEO services helping local businesses be seen by customers. Website-only option available for $1,200.',
  url: 'https://nolawebdevelopment.com',
  ogImage: '/images/og-image.jpg',
  creator: 'NOLA Web Development',
  company: {
    name: 'NOLA Web Development',
    address: 'New Orleans, Louisiana',
    phone: '(281) 382-1778',
    email: 'nolawebdev@gmail.com',
  },
};

export function generateMetadata({
  title,
  description = siteConfig.description,
  keywords = defaultKeywords,
  ogImage = siteConfig.ogImage,
  ogType = 'website',
  canonicalUrl,
}: SEOProps = {}): Metadata {
  const fullTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name;

  return {
    title: fullTitle,
    description,
    keywords: keywords.join(', '),
    authors: [{ name: siteConfig.creator }],
    creator: siteConfig.creator,
    publisher: siteConfig.name,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: canonicalUrl || '/',
    },
    openGraph: {
      type: ogType as any,
      locale: 'en_US',
      url: canonicalUrl || siteConfig.url,
      title: fullTitle,
      description,
      siteName: siteConfig.name,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage],
      creator: '@nolawebdev',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'your-google-verification-code',
      yandex: 'your-yandex-verification-code',
    },
  };
}

export const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  logo: `${siteConfig.url}/images/logo.png`,
  image: `${siteConfig.url}${siteConfig.ogImage}`,
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'New Orleans',
    addressRegion: 'LA',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '29.9511',
    longitude: '-90.0715',
  },
  areaServed: {
    '@type': 'City',
    name: 'New Orleans',
  },
  serviceType: [
    'Web Development',
    'SEO Services',
    'Website Design',
    'Digital Marketing',
    'E-commerce Development',
  ],
};
