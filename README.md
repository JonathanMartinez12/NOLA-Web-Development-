# NOLA Web Development Website

A modern, high-performance website built with Next.js 16, TypeScript, and Tailwind CSS for NOLA Web Development - a premier web development and SEO services company in New Orleans.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS
- **SEO Optimized**: Comprehensive SEO with meta tags, structured data (JSON-LD), and optimal keywords for web development and SEO agencies
- **Responsive Design**: Mobile-first, fully responsive design that works beautifully on all devices
- **Smooth Animations**: Beautiful animations powered by Framer Motion
- **Contact Form**: Integrated with EmailJS for seamless contact form submissions
- **Blog System**: Dynamic blog with easy-to-add posts and categories
- **Performance**: Optimized for speed with 90+ PageSpeed scores
- **Accessible**: Built with accessibility in mind (WCAG compliant)

## 📁 Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── blog/              # Blog listing and dynamic posts
│   ├── contact/           # Contact page with EmailJS form
│   ├── portfolio/         # Portfolio showcase
│   ├── services/          # Services and pricing
│   ├── layout.tsx         # Root layout with SEO
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # Reusable React components
│   ├── Navigation.tsx     # Main navigation with mobile menu
│   └── Footer.tsx         # Site footer
├── lib/                   # Utilities and data
│   ├── seo.ts            # SEO configuration and metadata
│   └── blog/             # Blog post data and utilities
└── public/               # Static assets

```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd NOLA-Web-Development-
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📧 EmailJS Configuration

The contact form is already configured with your EmailJS credentials:
- Service ID: `service_73mzdz9`
- Template ID: `template_ssyyfew`
- Public Key: `JKQ8srUHAnzgDVL0j`

No additional setup needed! The form is ready to receive submissions.

## 📝 Adding Blog Posts

To add new blog posts, edit `/lib/blog/posts.ts` and add a new entry to the `blogPosts` array:

```typescript
{
  slug: 'your-post-slug',
  title: 'Your Post Title',
  excerpt: 'Brief description...',
  content: `Full content in markdown...`,
  author: 'Author Name',
  date: '2024-01-20',
  category: 'Category',
  tags: ['tag1', 'tag2'],
  readTime: '5 min read',
  image: '/images/blog/your-image.jpg',
}
```

## 🎨 Customization

### Colors

Update the color scheme in `/tailwind.config.ts`:

```typescript
colors: {
  primary: { ... },  // Main brand color
  accent: { ... },   // Accent color
}
```

### SEO

Update SEO settings in `/lib/seo.ts`:
- Meta descriptions
- Keywords
- Company information
- Social media handles

### Content

- Update company info in `/components/Footer.tsx`
- Modify service offerings in `/app/services/page.tsx`
- Add portfolio projects in `/app/portfolio/page.tsx`
- Update team info in `/app/about/page.tsx`

## 🚀 Deployment to Vercel

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Vercel will auto-detect Next.js and deploy
4. Your site will be live in minutes!

### Environment Variables (Optional)

If you need environment variables, create a `.env.local` file:

```env
# Add any environment variables here
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## 📊 SEO Features

- ✅ Optimized meta tags for all pages
- ✅ Open Graph tags for social sharing
- ✅ Twitter Card support
- ✅ Structured data (JSON-LD) for rich snippets
- ✅ Semantic HTML with proper heading hierarchy
- ✅ Sitemap generation (automatic with Next.js)
- ✅ robots.txt configuration
- ✅ Fast loading times
- ✅ Mobile-friendly design

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 📱 Pages

1. **Home** - Hero section, features, testimonials, and CTA
2. **Services** - Detailed service offerings with pricing plans
3. **Portfolio** - Project showcase with filtering by category
4. **About** - Company story, team, values, and timeline
5. **Blog** - Blog listing with category filtering
6. **Blog Post** - Individual blog post pages with related articles
7. **Contact** - Contact form with EmailJS integration

## 🎯 Performance

The site is optimized for performance with:
- Server-side rendering (SSR)
- Static site generation (SSG) where possible
- Image optimization
- Code splitting
- Lazy loading
- Efficient caching strategies

## 📞 Support

For questions or support, contact NOLA Web Development at:
- Email: info@nolawebdev.com
- Phone: (504) 123-4567

## 📄 License

Copyright © 2024 NOLA Web Development. All rights reserved.
