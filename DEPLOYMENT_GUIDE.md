# GitHub Pages Deployment Guide

## 🚀 Quick Setup

Your portfolio is now ready to deploy to GitHub Pages! Here's what I've set up:

### ✅ What's Configured

1. **Next.js Static Export**: Your `next.config.ts` is configured for static export
2. **GitHub Actions Workflow**: `.github/workflows/deploy.yml` is set up for automatic deployment
3. **Package.json**: Updated with correct GitHub Pages URL
4. **Build Process**: Tested and working locally

### 📋 Deployment Steps

#### Option 1: Automatic Deployment (Recommended)

1. **Push your code to GitHub**:
   ```bash
   git add .
   git commit -m "Setup GitHub Pages deployment"
   git push origin main
   ```

2. **Enable GitHub Pages**:
   - Go to your repository: https://github.com/rushikesh0022/rushikesh0022.github.io
   - Click on "Settings" tab
   - Scroll down to "Pages" section
   - Under "Source", select "GitHub Actions"
   - Save the settings

3. **Wait for deployment**:
   - Go to "Actions" tab to see the deployment progress
   - Once complete, your site will be available at: https://rushikesh0022.github.io

#### Option 2: Manual Deployment

If you prefer manual deployment:

1. **Build the site**:
   ```bash
   bun run build
   ```

2. **Deploy to GitHub Pages**:
   ```bash
   # Add the out directory to git
   git add out/
   git commit -m "Deploy to GitHub Pages"
   git push origin main
   ```

### 🔧 Configuration Details

- **Repository**: rushikesh0022/rushikesh0022.github.io
- **Branch**: main
- **Build Command**: `bun run build`
- **Output Directory**: `out/`
- **URL**: https://rushikesh0022.github.io

### 🐛 Troubleshooting

#### Common Issues:

1. **Build Fails**:
   - Check the Actions tab for error details
   - Ensure all dependencies are in package.json
   - Verify Next.js configuration

2. **404 Errors**:
   - Make sure `.nojekyll` file is in the output directory
   - Check that `trailingSlash: true` is set in next.config.ts

3. **Styling Issues**:
   - Verify `images.unoptimized: true` in next.config.ts
   - Check that all assets are properly referenced

4. **Contact Form Not Working**:
   - API routes don't work with static export
   - Consider using a serverless function or external service

### 📝 Notes

- **Static Export Limitation**: API routes (`/api/contact`) won't work with static export
- **Contact Form**: Currently set to development mode (logs to console)
- **Images**: Must be unoptimized for static export
- **Routing**: All routes are pre-rendered as static files

### 🎯 Next Steps

1. Push your code to trigger the first deployment
2. Check the Actions tab for any errors
3. Visit https://rushikesh0022.github.io once deployed
4. Set up a custom domain if desired

Your portfolio is ready to go live! 🎉
