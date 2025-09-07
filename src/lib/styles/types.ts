// Type definitions for the portfolio website

export interface NavLink {
  href: string;
  label: string;
  icon?: React.ComponentType;
}

export interface SocialLink {
  href: string;
  label: string;
  icon: React.ComponentType;
}

export interface SkillBadge {
  name: string;
  icon: React.ComponentType;
  color: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  content: string;
  publishedAt: Date;
  updatedAt?: Date;
  tags: string[];
  featured?: boolean;
  readTime?: number;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
}

export interface LoadingState {
  isLoading: boolean;
  progress: number;
}

export interface ThemeConfig {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
}
