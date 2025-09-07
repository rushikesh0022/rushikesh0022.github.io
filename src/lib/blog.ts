// Main blog utilities and exports

export * from './styles/blog';
export * from './styles/types';

// Re-export commonly used blog functions
export { 
  getBlogPosts, 
  getFeaturedPosts, 
  getBlogPostBySlug,
  getBlogPostsByTag,
  getAllTags,
  formatDate,
  calculateReadTime,
  truncateText 
} from './styles/blog';
