# 🎉 Getting Started with Your Portfolio

Your portfolio website is now fully set up and ready to customize! Here's everything you need to know to get started.

## 🚀 Quick Start (5 minutes)

### 1. Test the Site Locally

```bash
npm run dev
```

Visit `http://localhost:4321` to see your site! You should see:
- ✅ A beautiful homepage with hero section
- ✅ Three featured projects (with placeholder images)
- ✅ Contact form
- ✅ Dark mode toggle
- ✅ Fully responsive navigation

### 2. Customize Your Information

Edit `src/config.ts` and update:
- Your name
- Bio and job title
- Email and location
- Social media links (GitHub, LinkedIn, Twitter)

Save the file and watch your site update instantly! ✨

### 3. Set Up Contact Form

The contact form needs a backend service to work:

**Option 1: Formspree (Recommended - Free)**
1. Go to https://formspree.io/
2. Sign up for a free account
3. Create a new form
4. Copy your form ID
5. Open `src/components/ContactSection.astro`
6. Replace `YOUR_FORM_ID` on line 75 with your actual ID

**Option 2: Web3Forms (Alternative - Also Free)**
1. Go to https://web3forms.com/
2. Follow their setup instructions

## 📝 Adding Your Projects (10 minutes)

### Update Existing Projects

1. **Project 1**: Edit `src/content/projects/project-1.md`
2. **Project 2**: Edit `src/content/projects/project-2.md`
3. **Project 3**: Edit `src/content/projects/project-3.md`

For each project, update:
```markdown
---
title: "Your Project Name"
description: "Brief description (will show on cards)"
image: "/images/projects/your-image.jpg"  # See image instructions below
tags: ["React", "TypeScript", "etc"]
github: "https://github.com/yourusername/repo"  # Optional
demo: "https://your-demo-url.com"  # Optional
featured: true  # Show on homepage?
order: 1  # Display order (lower = first)
publishDate: 2024-10-01  # YYYY-MM-DD format
---

## Overview
Your project description here...

## Key Features
- Feature 1
- Feature 2

## Technologies Used
- Tech 1
- Tech 2
```

### Add Project Images

**Quick Solution (for testing):**
The projects currently use placeholder images from placehold.co. This is fine for development!

**Permanent Solution (before launch):**
1. Take screenshots of your projects (1200x800px recommended)
2. Optimize them (use https://squoosh.app/ to compress)
3. Save to `public/images/projects/`
4. Name them: `project-1.jpg`, `project-2.jpg`, etc.
5. Update image paths in your project markdown files:
   ```markdown
   image: "/images/projects/project-1.jpg"
   ```

### Add More Projects

To add a 4th, 5th, or more projects:

1. Create a new file: `src/content/projects/project-4.md`
2. Copy the structure from an existing project file
3. Update all the information
4. Add a corresponding image
5. Done! The project will automatically appear on your projects page

## 🎨 Customization Options

### Change Colors

Edit `tailwind.config.mjs`:

```javascript
colors: {
  primary: {
    DEFAULT: '#YOUR_COLOR',  // Change this
    // ... other shades
  },
}
```

### Change Fonts

1. Go to https://fonts.google.com/
2. Pick a font you like
3. Copy the embed code
4. Add to `src/layouts/BaseLayout.astro` in the `<head>` section
5. Update `tailwind.config.mjs` with the new font name

### Customize Hero Section

Edit `src/components/Hero.astro` to change:
- Availability badge text
- Description text
- Button labels and links

Most of the personal info pulls from `src/config.ts` automatically!

## 🚀 Deploy to GitHub Pages (5 minutes)

### First-Time Setup

1. **Update URLs** (if your GitHub username isn't "natewhoms"):
   - Edit `astro.config.mjs`: Change `site` URL
   - Edit `src/config.ts`: Change `url` field  
   - Edit `public/robots.txt`: Update sitemap URL

2. **Enable GitHub Pages**:
   - Go to your repo settings on GitHub
   - Click "Pages" in the sidebar
   - Under "Source", select "GitHub Actions"

3. **Deploy**:
   ```bash
   git add .
   git commit -m "Initial portfolio setup"
   git push origin main
   ```

4. **Watch it Deploy**:
   - Go to the "Actions" tab on GitHub
   - Watch the build process (takes 2-3 minutes)
   - Once complete, visit: `https://yourusername.github.io`

### Future Updates

Just push to `main` branch - it auto-deploys! 🎉

```bash
git add .
git commit -m "Updated projects"
git push
```

## 📱 Test Your Site

Before launching, test:

- [ ] All navigation links work
- [ ] Dark mode toggle works
- [ ] Mobile menu works (resize browser window)
- [ ] Contact form submits successfully
- [ ] All project pages load
- [ ] Images display correctly
- [ ] Site works on mobile devices

**Test Mobile**: Use Chrome DevTools (F12 → Toggle Device Toolbar)

## 🎯 What's Next?

### Essential (Do Before Launch)
1. ✅ Update personal information in `src/config.ts`
2. ✅ Add real project content
3. ✅ Add project screenshots
4. ✅ Set up contact form
5. ✅ Test everything
6. ✅ Deploy to GitHub Pages

### Nice to Have (Can Do Later)
- Add Google Analytics
- Create a custom favicon
- Add a resume/CV download link
- Write blog posts (you can add a blog collection!)
- Add testimonials section
- Create custom 404 page

## 🆘 Need Help?

### Common Issues

**"Module not found" errors:**
```bash
npm install
```

**Site not updating after changes:**
- Stop the dev server (Ctrl+C)
- Restart with `npm run dev`

**Build fails:**
- Check for syntax errors in `.astro` files
- Make sure all frontmatter in markdown files is valid YAML
- Check that image paths exist

**Dark mode not working:**
- Clear browser cache
- Check browser console for errors

### Resources
- [Astro Docs](https://docs.astro.build) - Official documentation
- [Tailwind Docs](https://tailwindcss.com/docs) - Styling reference
- [GitHub Pages Docs](https://docs.github.com/en/pages) - Deployment help

## 📚 File Structure Reference

```
src/
├── config.ts              # ⭐ Update this with your info
├── components/
│   ├── Hero.astro        # Homepage hero section
│   ├── Navigation.astro  # Header navigation
│   ├── ProjectCard.astro # Project preview cards
│   ├── ContactSection.astro # Contact form & info
│   └── Footer.astro      # Site footer
├── content/
│   ├── config.ts         # Content collections schema
│   └── projects/         # ⭐ Add/edit project files here
├── layouts/
│   └── BaseLayout.astro  # Main site layout
├── pages/
│   ├── index.astro       # Homepage
│   ├── contact.astro     # Contact page
│   └── projects/         # Project pages
└── styles/
    └── global.css        # Global styles

public/
├── favicon.svg           # ⭐ Replace with your favicon
├── robots.txt           # SEO configuration
└── images/
    └── projects/        # ⭐ Add project screenshots here
```

## 🎉 You're All Set!

You now have a fully functional, modern portfolio website! 

Start by customizing your information in `src/config.ts`, then add your real projects and images. Once you're happy with how it looks, deploy to GitHub Pages and share it with the world!

**Need inspiration?** Check out:
- https://astro.build/showcase/ - Astro showcase sites
- https://dribbble.com/tags/portfolio - Portfolio design inspiration

Good luck with your portfolio! 🚀✨

