// Blog utilities and configurations

import { BlogPost } from './types';

// Blog configuration
export const blogConfig = {
  postsPerPage: 6,
  featuredPostsCount: 3,
  excerptLength: 150,
  dateFormat: 'MMM dd, yyyy',
};

// Sample blog posts (you can replace this with actual data fetching)
export const blogPosts: BlogPost[] = [
  {
    slug: 'getting-started-with-nextjs',
    title: 'Getting Started with Next.js 15',
    description: 'Learn how to build modern web applications with the latest version of Next.js.',
    content: `
# Getting Started with Next.js 15

Next.js 15 brings exciting new features and improvements that make building web applications even more enjoyable...

## Key Features

- Improved performance
- Better developer experience
- Enhanced TypeScript support

## Getting Started

To create a new Next.js 15 application, run:

\`\`\`bash
npx create-next-app@latest my-app
\`\`\`

This will set up a new project with all the latest features and best practices.
    `,
    publishedAt: new Date('2024-01-15'),
    tags: ['Next.js', 'React', 'Web Development'],
    featured: true,
    readTime: 5,
  },
  {
    slug: 'typescript-best-practices',
    title: 'TypeScript Best Practices for React',
    description: 'Essential TypeScript patterns and practices for building robust React applications.',
    content: `
# TypeScript Best Practices for React

TypeScript has become an essential tool for React development. Here are some best practices...

## Type Safety

Always define proper interfaces for your props and state.

## Generic Components

Use generics to create reusable components.
    `,
    publishedAt: new Date('2024-01-10'),
    tags: ['TypeScript', 'React', 'Best Practices'],
    featured: false,
    readTime: 7,
  },
  {
    slug: 'modern-css-with-tailwind',
    title: 'Modern CSS with Tailwind CSS',
    description: 'How to leverage Tailwind CSS for rapid UI development.',
    content: `
# Modern CSS with Tailwind CSS

Tailwind CSS has revolutionized how we approach styling in modern web development...

## Utility-First Approach

The utility-first approach allows for rapid prototyping and consistent design.

## Responsive Design

Built-in responsive utilities make mobile-first design straightforward.
    `,
    publishedAt: new Date('2024-01-05'),
    tags: ['CSS', 'Tailwind', 'Design'],
    featured: true,
    readTime: 4,
  },
];

// Utility functions
export const getBlogPosts = (): BlogPost[] => {
  return blogPosts.sort((a, b) => 
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
};

export const getFeaturedPosts = (): BlogPost[] => {
  return blogPosts
    .filter(post => post.featured)
    .sort((a, b) => 
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    )
    .slice(0, blogConfig.featuredPostsCount);
};

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

export const getBlogPostsByTag = (tag: string): BlogPost[] => {
  return blogPosts.filter(post => 
    post.tags.some(postTag => 
      postTag.toLowerCase() === tag.toLowerCase()
    )
  );
};

export const getAllTags = (): string[] => {
  const allTags = blogPosts.flatMap(post => post.tags);
  return Array.from(new Set(allTags));
};

export const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(date);
};

export const calculateReadTime = (content: string): number => {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
};

export const truncateText = (text: string, length: number = blogConfig.excerptLength): string => {
  if (text.length <= length) return text;
  return text.slice(0, length).trim() + '...';
};
