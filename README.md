# Nate Whoms Portfolio

A modern, fast, and beautiful portfolio website built with Astro, Tailwind CSS, and TypeScript.

## 🚀 Features

- ⚡ Lightning-fast performance with Astro
- 🎨 Beautiful, responsive design with Tailwind CSS
- 🌙 Dark mode support
- 📝 Content Collections for easy project management
- 🔍 SEO optimized with meta tags and sitemap
- 📱 Mobile-first, fully responsive
- ♿ Accessible and semantic HTML
- 🚀 Automatic deployment to GitHub Pages

## 📋 Project Structure

```
/
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   └── images/
│       └── projects/           # Project screenshots
├── src/
│   ├── components/
│   │   ├── Hero.astro
│   │   ├── Navigation.astro
│   │   ├── ProjectCard.astro
│   │   ├── ContactSection.astro
│   │   └── Footer.astro
│   ├── content/
│   │   ├── config.ts           # Content collections schema
│   │   └── projects/           # Project markdown files
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro         # Homepage
│   │   ├── contact.astro       # Contact page
│   │   └── projects/
│   │       ├── index.astro     # Projects listing
│   │       └── [slug].astro    # Individual project pages
│   ├── styles/
│   │   └── global.css          # Global styles
│   └── config.ts               # Site configuration
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## 🛠️ Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Visit `http://localhost:4321` in your browser.

### 3. Build for Production

```bash
npm run build
```

### 4. Preview Production Build

```bash
npm run preview
```

## 📝 Adding Content

### Add a New Project

1. Create a new markdown file in `src/content/projects/`
2. Add frontmatter and content:

```markdown
---
title: "Project Title"
description: "Brief description"
image: "/images/projects/project-name.jpg"
tags: ["React", "Node.js", "MongoDB"]
github: "https://github.com/username/project"
demo: "https://project-demo.com"
featured: true
order: 1
publishDate: 2024-10-01
---

## Your project content here...
```

3. Add project image to `public/images/projects/`
4. Push to GitHub - automatic deployment!

### Update Personal Information

Edit `src/config.ts` to update:
- Name and bio
- Contact information
- Social media links
- Navigation menu

## 🎨 Customization

### Colors

Edit `tailwind.config.mjs` to change the color scheme:

```javascript
colors: {
  primary: { /* your colors */ },
  secondary: { /* your colors */ },
}
```

### Fonts

Update `src/layouts/BaseLayout.astro` to change fonts:

```html
<link href="https://fonts.googleapis.com/css2?family=Your+Font&display=swap" rel="stylesheet" />
```

Then update `tailwind.config.mjs`:

```javascript
fontFamily: {
  sans: ['Your Font', 'sans-serif'],
}
```

## 📦 Deployment

This site is configured to automatically deploy to GitHub Pages when you push to the `main` branch.

### Setup GitHub Pages

1. Go to your repository settings
2. Navigate to **Pages**
3. Under **Source**, select **GitHub Actions**
4. Push to `main` branch - your site will be live!

Your site will be available at: `https://natewhoms.github.io`

## 🔧 Commands

All commands are run from the root of the project:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Install dependencies                             |
| `npm run dev`             | Start local dev server at `localhost:4321`       |
| `npm run build`           | Build production site to `./dist/`               |
| `npm run preview`         | Preview your build locally before deploying      |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |

## 📚 Learn More

- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Astro Content Collections](https://docs.astro.build/en/guides/content-collections/)

## 🐛 Issues?

If you encounter any issues, please check:
- Node.js version is 18+ (`node --version`)
- All dependencies are installed (`npm install`)
- Clear cache if needed (`rm -rf node_modules package-lock.json && npm install`)

## 📄 License

MIT License - Feel free to use this template for your own portfolio!

## 🙏 Acknowledgments

- Built with [Astro](https://astro.build)
- Styled with [Tailwind CSS](https://tailwindcss.com)
- Deployed on [GitHub Pages](https://pages.github.com)

