# Logo Setup Instructions

Your website is now configured to use your NOLA Web Development logo! Here's how to add it:

## 📸 Save Your Logo

1. **Save the logo image** you provided as `logo.png`

2. **Place it in the public folder**:
   ```
   /home/user/NOLA-Web-Development-/public/logo.png
   ```

## 🎨 Logo Specifications

### Current Logo
- **File name**: `logo.png`
- **Recommended size**: 400x400px (or higher for better quality)
- **Format**: PNG (with transparent background if possible)
- **Design**: Fleur-de-lis with Mardi Gras colors (Gold, Purple, Green)

### Logo Usage

Your logo now appears in:
1. **Navigation Bar** (top of every page)
   - Shows logo icon + text
   - Responsive sizing (smaller on mobile)

2. **Footer** (bottom of every page)
   - Shows logo icon + company name

3. **Browser Tab** (favicon)
   - Shows as the site icon in browser tabs

## 🖼️ How to Add the Logo

### Option 1: Using Command Line

```bash
# From your project root directory
cp /path/to/your/logo.png public/logo.png
```

### Option 2: Using File Manager

1. Navigate to the project folder: `NOLA-Web-Development-`
2. Open the `public` folder
3. Copy your logo file into this folder
4. Rename it to `logo.png` (if needed)

### Option 3: If you're using VS Code or similar

1. Open the project in your editor
2. Drag and drop your logo file into the `public` folder
3. Rename to `logo.png`

## ✅ Verify It's Working

After adding the logo:

1. **Start the development server**:
   ```bash
   npm run dev
   ```

2. **Open your browser**: http://localhost:3000

3. **You should see**:
   - Logo in the top left navigation
   - Logo in the footer
   - Logo as the browser tab icon

## 🎨 Logo Colors Used

Your logo uses the traditional Mardi Gras colors:
- **Gold/Yellow**: `#C9A82D` (represents power)
- **Purple**: `#7B1FA2` (represents justice)
- **Green**: `#2E7D32` (represents faith)

These colors are also integrated into the website's color scheme!

## 📏 Additional Logo Versions (Optional)

If you want to create additional versions:

1. **Logo with text** (for large displays):
   - Save as: `public/logo-full.png`
   - Size: 800x200px (horizontal)

2. **Logo icon only** (for small spaces):
   - Save as: `public/logo-icon.png`
   - Size: 200x200px (square)

3. **Logo in different colors**:
   - White version: `public/logo-white.png` (for dark backgrounds)
   - Dark version: `public/logo-dark.png` (for light backgrounds)

## 🚀 For Production

When deploying to Vercel:
1. Your logo file will automatically be included
2. No additional configuration needed
3. The logo will be optimized by Next.js Image component

## 🔄 If You Need to Update the Logo

Simply replace the `public/logo.png` file with your new version. The website will automatically use the updated logo after refreshing.

## ⚠️ Troubleshooting

### Logo not showing?
1. Make sure the file is named exactly `logo.png` (lowercase)
2. Check that it's in the `public` folder (not a subfolder)
3. Try hard-refreshing your browser (Ctrl+Shift+R or Cmd+Shift+R)
4. Restart the development server

### Logo looks blurry?
- Use a higher resolution image (at least 400x400px)
- Make sure you're using PNG format (not JPEG)
- Consider using SVG format for best quality at all sizes

### Logo doesn't fit properly?
- The layout is set to display a square logo
- If your logo is rectangular, you may need to adjust the dimensions in:
  - `/components/Navigation.tsx` (line 58)
  - `/components/Footer.tsx` (line 52)

## 📞 Need Help?

If you have issues with the logo:
1. Check that the file path is correct
2. Verify file permissions (should be readable)
3. Clear your browser cache
4. Restart the development server

Your logo is an important part of your brand identity - make sure it looks great! 🎉
