# Portfolio Setup Checklist

## 📝 Personalization Tasks

### 1. Update Site Configuration
- [ ] Edit `src/config.ts` with your personal information:
  - Name and bio
  - Email and phone
  - Location
  - Social media links (GitHub, LinkedIn, Twitter)
  - Availability status

### 2. Add Project Images
- [ ] Add project screenshots to `public/images/projects/`
  - Use format: `project-1.jpg`, `project-2.jpg`, `project-3.jpg`
  - Recommended size: 1200x800px
  - Recommended format: WebP or JPEG
  - Keep file size under 200KB for best performance
  - You can temporarily use placeholder images from https://placehold.co/1200x800

### 3. Update Project Content
- [ ] Edit `src/content/projects/project-1.md` with your first project
- [ ] Edit `src/content/projects/project-2.md` with your second project
- [ ] Edit `src/content/projects/project-3.md` with your third project
- [ ] Add more project files as needed
- [ ] Update project frontmatter (title, description, tags, links, dates)

### 4. Update Hero Component
- [ ] Review `src/components/Hero.astro` for any additional customization
- [ ] The component already pulls from `src/config.ts`, so update that file

### 5. Set Up Contact Form
- [ ] Go to [Formspree.io](https://formspree.io/) and create a free account
- [ ] Create a new form
- [ ] Copy your form endpoint
- [ ] Update `src/components/ContactSection.astro`:
  - Replace `YOUR_FORM_ID` with your actual Formspree form ID
  - Line: `<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">`

**Alternative contact form services:**
- Web3Forms (https://web3forms.com/)
- Netlify Forms (if deploying to Netlify)
- EmailJS (https://emailjs.com/)

### 6. Update Favicon
- [ ] Replace `public/favicon.svg` with your own favicon
- [ ] You can create one at https://favicon.io/

### 7. Add Social Preview Image
- [ ] Create an Open Graph image (1200x630px)
- [ ] Save it as `public/og-image.jpg`
- [ ] This will be used when sharing your site on social media

## 🚀 Deployment Setup

### 8. Configure GitHub Pages
- [ ] Go to your repository settings on GitHub
- [ ] Navigate to **Pages** in the sidebar
- [ ] Under **Source**, select **GitHub Actions**
- [ ] The workflow file is already created at `.github/workflows/deploy.yml`

### 9. Update Site URL
- [ ] If your GitHub username is different from "natewhoms", update:
  - `astro.config.mjs`: Change `site` URL
  - `src/config.ts`: Change `url` field
  - `public/robots.txt`: Update sitemap URL

### 10. First Deployment
- [ ] Commit all your changes
- [ ] Push to the `main` branch
- [ ] Check GitHub Actions tab to see the build progress
- [ ] Visit `https://yourusername.github.io` once deployed

## 🎨 Optional Customizations

### 11. Customize Colors
- [ ] Edit `tailwind.config.mjs` to change color scheme
- [ ] Update primary and secondary colors to match your brand

### 12. Change Fonts
- [ ] Update font imports in `src/layouts/BaseLayout.astro`
- [ ] Update `tailwind.config.mjs` with new font family names

### 13. Add Analytics
- [ ] Set up Google Analytics or Plausible
- [ ] Add tracking code to `src/layouts/BaseLayout.astro`

### 14. Add Resume/CV
- [ ] Add your resume PDF to `public/resume.pdf`
- [ ] Add download link in navigation or hero section

## ✅ Testing Checklist

Before deploying, make sure to test:

- [ ] Run `npm run dev` and check all pages locally
- [ ] Test dark mode toggle
- [ ] Test mobile menu
- [ ] Test all navigation links
- [ ] Test contact form submission
- [ ] Check all project links work
- [ ] Verify all images load correctly
- [ ] Test on mobile devices or browser dev tools
- [ ] Run `npm run build` to check for build errors
- [ ] Test with `npm run preview` before pushing

## 📊 SEO Checklist

- [ ] All pages have unique titles and descriptions
- [ ] Images have alt text
- [ ] `robots.txt` is configured
- [ ] Sitemap is generated automatically
- [ ] Social preview image is set
- [ ] Site loads quickly (test with Lighthouse)

## 🎯 Post-Launch Tasks

- [ ] Submit sitemap to Google Search Console
- [ ] Share on social media
- [ ] Add link to resume/CV
- [ ] Monitor with analytics
- [ ] Keep projects updated
- [ ] Regularly update content

## 🆘 Troubleshooting

### Build Fails
- Check Node.js version: `node --version` (must be 18+)
- Clear cache: `rm -rf node_modules package-lock.json && npm install`
- Check for syntax errors in `.astro` files

### Images Not Loading
- Ensure images are in `public/` directory
- Use absolute paths: `/images/project.jpg`
- Check file extensions match references

### Dark Mode Not Working
- Check localStorage in browser console
- Clear browser cache
- Verify Tailwind dark mode classes are applied

## 📚 Useful Links

- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Formspree Documentation](https://help.formspree.io/)

---

Good luck with your portfolio! 🚀

