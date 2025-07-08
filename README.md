# 🚀 Rushikesh's Portfolio Website

A modern, minimalistic portfolio website built with Next.js 15, TypeScript, and Bun. Features a futuristic design with smooth animations, a dynamic blog system, and an integrated contact form.

## ✨ Features

- **🎨 Modern Design**: Minimalistic, futuristic aesthetic with glass-morphism effects
- **⚡ Fast Performance**: Built with Next.js 15 and Bun for optimal speed
- **📱 Fully Responsive**: Seamless experience across all devices
- **📝 Dynamic Blog**: Static blog system with markdown-style content
- **📧 Contact Form**: Integrated contact form using Resend API
- **🌟 Smooth Animations**: Framer Motion powered interactions
- **🔒 Type Safe**: Full TypeScript implementation
- **🎯 SEO Optimized**: Built-in SEO optimization and metadata

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **Runtime**: [Bun](https://bun.sh/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Email Service**: [Resend](https://resend.com/)
- **Email Templates**: [React Email](https://react.email/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Deployment**: [Vercel](https://vercel.com/) / [Netlify](https://netlify.com/)

## 🚀 Quick Start

### Prerequisites

- [Bun](https://bun.sh/) (recommended) or Node.js 18+
- Git

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/rushikesh0022/portfolio.git
   cd portfolio/Website
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   bun install

   # or

   npm install
   \`\`\`

3. **Set up environment variables**
   \`\`\`bash
   cp .env.example .env.local
   \`\`\`

4. **Configure your environment variables** (see [Environment Setup](#️-environment-setup))

5. **Run the development server**
   \`\`\`bash
   bun run dev

   # or

   npm run dev
   \`\`\`

6. **Open [http://localhost:3000](http://localhost:3000)** in your browser

## ⚙️ Environment Setup

Create a \`.env.local\` file in the root directory with the following variables:

\`\`\`env

# Resend API Configuration

RESEND_API_KEY=your_resend_api_key_here

# Email Configuration

FROM_EMAIL=your-email@yourdomain.com
TO_EMAIL=your-contact-email@yourdomain.com

# Site Configuration (Optional)

NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_SITE_NAME="Rushikesh Portfolio"
\`\`\`

### Getting Resend API Key

1. Sign up at [Resend.com](https://resend.com/)
2. Go to your dashboard
3. Navigate to API Keys
4. Create a new API key
5. Copy the key and add it to your \`.env.local\` file

### Email Domain Setup

For production, you'll need to:

1. Verify your domain in Resend
2. Add the required DNS records
3. Update the `FROM_EMAIL` to use your verified domain

### 🔒 Security Best Practices

- **Never commit `.env.local`** or any files containing sensitive information
- **Use environment variables** for all API keys and sensitive configuration
- **Verify your domain** in Resend before deploying to production
- **Regularly rotate** your API keys
- **Use HTTPS** in production (automatic with Vercel/Netlify)
- **Keep dependencies updated** to avoid security vulnerabilities

## 📁 Project Structure

\`\`\`
Website/
├── src/
│ ├── app/ # Next.js App Router
│ │ ├── \_components/ # Shared components
│ │ │ ├── Header/ # Navigation header
│ │ │ ├── Footer/ # Site footer
│ │ │ └── LoadingScreen/ # Custom loading screen
│ │ ├── api/ # API routes
│ │ │ └── contact/ # Contact form endpoint
│ │ ├── blog/ # Blog pages
│ │ │ ├── \_components/ # Blog-specific components
│ │ │ ├── [slug]/ # Dynamic blog post pages
│ │ │ └── page.tsx # Main blog page
│ │ ├── coffee/ # Contact page
│ │ ├── projects/ # Projects showcase
│ │ └── page.tsx # Homepage
│ ├── lib/ # Utility libraries
│ │ ├── styles/ # Global styles and data
│ │ ├── blog.ts # Blog data and utilities
│ │ └── types.ts # TypeScript type definitions
│ └── emails/ # Email templates
├── public/ # Static assets
├── .env.local # Environment variables (not in repo)
├── .gitignore # Git ignore rules
├── next.config.ts # Next.js configuration
├── tailwind.config.ts # Tailwind configuration
├── tsconfig.json # TypeScript configuration
└── package.json # Dependencies and scripts
\`\`\`

## 📝 Adding Blog Posts

Blog posts are managed through the static data file at \`src/lib/blog.ts\`. To add a new post:

1. **Open** \`src/lib/blog.ts\`
2. **Add a new post object** to the \`posts\` array:

\`\`\`typescript
{
slug: "your-post-slug",
title: "Your Post Title",
description: "Brief description of your post",
published_at: "2024-12-15",
author: "Your Name",
tags: ["Tag1", "Tag2", "Tag3"],
readTime: "5 min read",
content: \`Your post content here...

## Supports Markdown-style formatting

- Lists
- **Bold text**
- Code blocks

And much more!\`
}
\`\`\`

3. **Save the file** - the post will be automatically available

## 🎨 Customization

### Updating Personal Information

1. **Edit** \`src/lib/styles/data.ts\` for:

   - Navigation links
   - Social media links
   - Skills and technologies
   - Project information

2. **Update** \`src/app/page.tsx\` for homepage content

3. **Modify** \`src/app/coffee/page.tsx\` for contact page details

### Styling and Theme

- **Colors**: Modify the Tailwind color palette in \`tailwind.config.ts\`
- **Fonts**: Update font families in \`src/lib/styles/globals.css\`
- **Animations**: Customize Framer Motion animations in component files
- **Layout**: Adjust spacing and sizing using Tailwind classes

### Contact Form

The contact form is handled by:

- **Frontend**: \`src/app/coffee/page.tsx\`
- **API**: \`src/app/api/contact/route.ts\`
- **Email Template**: \`src/emails/contact-form-email.tsx\`

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect your repository** to Vercel
2. **Add environment variables** in Vercel dashboard
3. **Deploy** - automatic deployments on push

### Netlify

1. **Connect your repository** to Netlify
2. **Set build command**: \`bun run build\`
3. **Set publish directory**: \`.next\`
4. **Add environment variables** in Netlify dashboard

### Manual Deployment

\`\`\`bash

# Build the project

bun run build

# Start production server

bun run start
\`\`\`

## 📄 Available Scripts

\`\`\`bash
bun run dev # Start development server
bun run build # Build for production
bun run start # Start production server
bun run lint # Run ESLint
bun run type-check # Run TypeScript type checking
\`\`\`

## 🔧 Configuration Files

- **\`next.config.ts\`**: Next.js configuration
- **\`tailwind.config.ts\`**: Tailwind CSS configuration
- **\`tsconfig.json\`**: TypeScript configuration
- **\`postcss.config.mjs\`**: PostCSS configuration

## 🤝 Contributing

1. **Fork** the repository
2. **Create** a feature branch (\`git checkout -b feature/amazing-feature\`)
3. **Commit** your changes (\`git commit -m 'Add some amazing feature'\`)
4. **Push** to the branch (\`git push origin feature/amazing-feature\`)
5. **Open** a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📧 Contact

**Rushikesh** - Full-Stack Developer & AI Enthusiast

- 🌐 **Website**: [your-website.com](https://your-website.com)
- 💼 **LinkedIn**: [linkedin.com/in/rushikesh](https://linkedin.com/in/rushikesh)
- 🐱 **GitHub**: [github.com/rushikesh0022](https://github.com/rushikesh0022)
- 📧 **Email**: your-email@domain.com

## 🙏 Acknowledgments

- **Next.js team** for the amazing framework
- **Vercel** for the deployment platform
- **Tailwind CSS** for the utility-first CSS framework
- **Framer Motion** for smooth animations
- **Resend** for reliable email delivery
- **Bun** for fast JavaScript runtime

## 🎯 Credits

This project was inspired by and built upon the excellent foundation from:

**[RealTriassic/Website](https://github.com/RealTriassic/Website)** - Original portfolio template and design concepts

Special thanks to **@RealTriassic** for creating the initial structure and design patterns that made this portfolio possible. The original repository provided a solid foundation for building this modern, minimalistic portfolio website.

---

⭐ **Star this repository** if you find it helpful!

Built with ❤️ using Next.js and TypeScript
