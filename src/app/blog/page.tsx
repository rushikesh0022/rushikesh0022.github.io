import { getAllPosts } from '@/lib/blog';
import BlogClient from './_components/BlogClient';

export default async function BlogPage() {
  const posts = await getAllPosts();

  return <BlogClient posts={posts} />;
}
