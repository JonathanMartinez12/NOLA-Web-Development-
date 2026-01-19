# Images Directory

This directory contains all the images for the NOLA Web Development website.

## Directory Structure

- **portfolio/** - Portfolio project screenshots
- **blog/** - Blog post featured images
- **team/** - Team member photos
- **og/** - Open Graph images for social sharing

## Image Guidelines

### General Requirements
- **Format**: PNG files are preferred for SEO
- **Optimization**: Compress images before uploading to reduce file size
- **Naming**: Use descriptive, lowercase names with hyphens (e.g., `krewe-of-christmas.png`)

### Portfolio Images (`/portfolio`)
- **Size**: 1200x800px (landscape)
- **Format**: PNG or JPG
- **Files needed**:
  - `krewe-of-christmas.png` - Krewe of Christmas website screenshot
  - `mendez-income-tax.png` - Mendez Income Tax website screenshot

### Blog Images (`/blog`)
- **Size**: 1200x630px (Open Graph standard)
- **Format**: PNG or JPG
- **Files**: One for each blog post

### Team Images (`/team`)
- **Size**: 400x400px (square)
- **Format**: PNG or JPG
- **Files**: One for each team member

### Open Graph Images (`/og`)
- **Size**: 1200x630px (Facebook/LinkedIn standard)
- **Format**: PNG or JPG
- **Files**:
  - `og-image.jpg` - Default Open Graph image for the site

## How to Add Images

1. Save your image in the appropriate directory
2. Name it descriptively (lowercase, hyphens instead of spaces)
3. Update the corresponding component if needed:
   - Portfolio: `/app/portfolio/page.tsx`
   - Blog: `/lib/blog/posts.ts`
   - Team: `/app/about/page.tsx`

## Example

For a new portfolio project:
```
/public/images/portfolio/new-project.png
```

Then update `/app/portfolio/page.tsx`:
```typescript
{
  title: 'New Project',
  image: '/images/portfolio/new-project.png',
  // ... other properties
}
```
