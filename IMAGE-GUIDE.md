# Image Management & Git Guide for NOLA Web Development

## Table of Contents
1. [Where to Put Images](#where-to-put-images)
2. [Image File Structure](#image-file-structure)
3. [How to Add Images to Your Website](#how-to-add-images-to-your-website)
4. [Optimizing Images for SEO](#optimizing-images-for-seo)
5. [How to Push Changes Using VS Code](#how-to-push-changes-using-vs-code)

---

## Where to Put Images

All images should be placed in the **`/public`** directory. Next.js serves everything in the `public` folder from the root URL `/`.

### Recommended Folder Structure:

```
/public
  /images
    /og-image.jpg          # Main Open Graph image (1200x630px)
    /services-og.jpg       # Services page OG image
    /pricing-og.jpg        # Pricing page OG image
    /about-og.jpg          # About page OG image
    /contact-og.jpg        # Contact page OG image
    /blog
      /post-1.jpg          # Blog post images
      /post-2.jpg
    /services
      /web-development.jpg
      /seo-optimization.jpg
    /projects             # Portfolio/project images
      /project-1.jpg
      /project-2.jpg
    /team                 # Team member photos
      /member-1.jpg
      /member-2.jpg
  /logo.png               # Your main logo
  /favicon.ico            # Browser favicon
```

---

## Image File Structure

### Current Directory Structure:
```bash
NOLA-Web-Development-/
├── public/
│   ├── images/           # Main images folder
│   │   ├── og-image.jpg  # Social media preview (1200x630px)
│   │   ├── services-og.jpg
│   │   ├── pricing-og.jpg
│   │   ├── about-og.jpg
│   │   └── contact-og.jpg
│   ├── logo.png          # Your main logo
│   └── favicon.ico       # Browser tab icon
├── app/                  # Your pages
├── components/           # React components
└── public/               # Static files
```

---

## How to Add Images to Your Website

### Step 1: Add Your Image Files

1. **Open the project in VS Code**
2. Navigate to the `/public/images/` folder
3. Drag and drop your images OR right-click > "New File" to create folders/files
4. Save your images with descriptive names:
   - ✅ Good: `web-development-services.jpg`, `seo-before-after.png`
   - ❌ Bad: `IMG_1234.jpg`, `Screenshot.png`

### Step 2: Use Images in Your Code

#### Option A: Using Next.js Image Component (Recommended)
```tsx
import Image from 'next/image';

// In your component:
<Image
  src="/images/services/web-development.jpg"
  alt="Custom web development services in New Orleans"
  width={800}
  height={600}
  priority  // Use this for above-the-fold images
/>
```

#### Option B: Using Regular HTML img Tag
```tsx
<img
  src="/images/services/web-development.jpg"
  alt="Custom web development services in New Orleans"
  loading="lazy"  // Lazy load images below the fold
/>
```

### Step 3: Reference Images in Metadata (for Social Media)
```tsx
// In your metadata.ts file:
export const metadata: Metadata = generateSEO({
  title: 'Your Page Title',
  description: 'Your description',
  ogImage: '/images/your-og-image.jpg',  // Social media preview
  canonicalUrl: '/your-page',
});
```

---

## Optimizing Images for SEO

### 1. **Image Sizes & Formats**
- **Open Graph Images**: 1200 x 630 pixels (for Facebook/LinkedIn)
- **Logo**: 512 x 512 pixels (PNG with transparent background)
- **Blog/Content Images**: 1200 x 800 pixels or smaller
- **Thumbnails**: 300 x 300 pixels

### 2. **File Formats**
- Use **WebP** for modern browsers (smallest file size)
- Fallback to **JPG** for photos, **PNG** for logos/graphics
- Keep file sizes under 200KB when possible

### 3. **File Naming Best Practices**
- Use descriptive, SEO-friendly names
- Separate words with hyphens (-)
- Include relevant keywords

Examples:
- `new-orleans-web-development-team.jpg`
- `seo-services-louisiana.jpg`
- `affordable-website-design.png`

### 4. **Alt Text (Very Important for SEO!)**
Always add descriptive alt text to images:
```tsx
<Image
  src="/images/services.jpg"
  alt="Professional web development services for New Orleans businesses"
  width={800}
  height={600}
/>
```

**Alt Text Tips:**
- Describe what's in the image
- Include relevant keywords naturally
- Keep it under 125 characters
- Don't start with "Image of..." or "Picture of..."

---

## How to Push Changes Using VS Code

### Method 1: Using VS Code Git GUI (Easiest)

#### Step 1: Open Source Control
1. Click the **Source Control icon** in the left sidebar (looks like a branch)
2. OR press `Ctrl + Shift + G` (Windows/Linux) or `Cmd + Shift + G` (Mac)

#### Step 2: Stage Your Changes
1. You'll see a list of "Changes" (modified files)
2. Hover over each file and click the **+ icon** to stage it
3. OR click the **+ icon** next to "Changes" to stage all files

#### Step 3: Commit Your Changes
1. Type a commit message in the text box at the top:
   ```
   Add new service images and update SEO metadata
   ```
2. Click the **✓ Checkmark** or press `Ctrl + Enter` (Windows/Linux) or `Cmd + Enter` (Mac)

#### Step 4: Push to GitHub
1. Click the **three dots (...)** at the top of the Source Control panel
2. Select **"Push"**
3. OR click the **sync button** (circular arrows) in the bottom left

### Method 2: Using VS Code Terminal (More Control)

#### Step 1: Open Terminal
1. Go to **Terminal → New Terminal** (or press `` Ctrl + ` ``)
2. Make sure you're on your branch:
   ```bash
   git status
   ```

#### Step 2: Stage Changes
```bash
# Stage specific files
git add public/images/new-image.jpg
git add app/services/page.tsx

# OR stage all changes
git add .
```

#### Step 3: Commit Changes
```bash
git commit -m "Add new service images and update SEO metadata"
```

#### Step 4: Push to GitHub
```bash
# Push to your current branch
git push

# OR push to a specific branch
git push origin your-branch-name
```

---

## Common Git Commands in VS Code Terminal

```bash
# Check current status
git status

# See what branch you're on
git branch

# Create a new branch
git checkout -b feature/new-images

# Switch between branches
git checkout main
git checkout your-branch-name

# Pull latest changes from GitHub
git pull

# View commit history
git log --oneline

# Discard changes to a file
git checkout -- path/to/file

# Undo last commit (keep changes)
git reset --soft HEAD~1
```

---

## Quick Checklist Before Pushing

- [ ] All new images are in the `/public/images/` folder
- [ ] Image file names are descriptive and SEO-friendly
- [ ] Images have proper alt text
- [ ] Images are optimized (file size < 200KB)
- [ ] Open Graph images are 1200 x 630 pixels
- [ ] You've tested the page locally
- [ ] You've written a clear commit message
- [ ] You're pushing to the correct branch

---

## Example: Adding a Service Image

### 1. Add the image file:
```
/public/images/services/custom-web-development-nola.jpg
```

### 2. Use it in your component:
```tsx
// In app/services/page.tsx
<Image
  src="/images/services/custom-web-development-nola.jpg"
  alt="Custom web development services for New Orleans small businesses"
  width={1200}
  height={800}
  className="rounded-lg shadow-xl"
/>
```

### 3. Push changes:
```bash
# In VS Code Terminal:
git add public/images/services/custom-web-development-nola.jpg
git add app/services/page.tsx
git commit -m "Add custom web development service image"
git push
```

---

## Need Help?

If you run into issues:
1. Check the terminal for error messages
2. Make sure you're on the correct branch
3. Ensure all files are saved before committing
4. Try pulling the latest changes: `git pull`
5. If conflicts occur, VS Code will highlight them - resolve them before pushing

---

**Happy coding! 🚀**
