"use client";

import { useState } from 'react';
import { type Post } from '@/lib/blog';

interface BlogClientProps {
  posts: Post[];
}

export default function BlogClient({ posts }: BlogClientProps) {
  const [selectedPost, setSelectedPost] = useState<Post | null>(
    posts.length > 0 ? posts[0] : null
  );

  if (posts.length === 0) {
    return (
      <main className="flex-grow flex items-center justify-center m-4">
        <div className="text-white text-center">
          <h2 className="text-2xl mb-4">No blog posts available</h2>
          <p className="text-gray-400">Check back soon for new content!</p>
        </div>
      </main>
    );
  }

  return (
    <main className="flex-grow grid grid-cols-5 border-2 border-white m-4">
      {/* Sidebar with blog list */}
      <aside className="col-span-1 border-r-2 border-white p-4 relative bg-[#181818]">
        <h2 className="absolute -top-3 left-2 bg-white px-2 text-black font-medium">
          blog posts
        </h2>
        <div className="grid grid-rows-[1fr_auto] h-full my-4">
          <ul className="space-y-2 overflow-y-auto pb-4">
            {posts.map((post) => (
              <li
                key={post.slug}
                className={`cursor-pointer px-2 py-2 text-sm transition-colors border-l-2 ${
                  selectedPost?.slug === post.slug
                    ? 'bg-white text-black border-white'
                    : 'text-gray-300 hover:text-white border-transparent hover:border-gray-500'
                }`}
                onClick={() => setSelectedPost(post)}
              >
                <div className="font-medium mb-1">{post.title}</div>
                <div className="text-xs text-gray-500">{post.readTime}</div>
              </li>
            ))}
          </ul>
          
          {/* Metadata section */}
          {selectedPost && (
            <div className="relative mt-4 border-t-2 border-white py-4">
              <h3 className="absolute -top-3 left-2 bg-white px-2 text-black font-medium">
                metadata
              </h3>
              <div className="px-2 my-2 space-y-2">
                <p className="text-gray-400 text-sm">
                  <span className="text-white">Author:</span> {selectedPost.author}
                </p>
                <p className="text-gray-400 text-sm">
                  <span className="text-white">Date:</span> {selectedPost.published_at}
                </p>
                <p className="text-gray-400 text-sm">
                  <span className="text-white">Read time:</span> {selectedPost.readTime}
                </p>
                {selectedPost.tags && selectedPost.tags.length > 0 && (
                  <div className="text-sm">
                    <span className="text-white">Tags:</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {selectedPost.tags.map((tag: string) => (
                        <span
                          key={tag}
                          className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </aside>

      {/* Main content area */}
      <article className="col-span-4 p-4 relative bg-[#272727]">
        {selectedPost ? (
          <>
            <h2 className="absolute -top-3 left-2 bg-white px-2 text-black font-medium">
              {selectedPost.slug}.md
            </h2>
            <div className="overflow-y-auto flex-grow max-h-[calc(100vh-10rem)]">
              <div className="mb-6">
                <h1 className="text-3xl font-bold text-white mb-4">
                  {selectedPost.title}
                </h1>
                <p className="text-gray-400 text-lg mb-6">
                  {selectedPost.description}
                </p>
              </div>
              <div className="prose prose-invert max-w-none">
                <pre className="whitespace-pre-wrap text-gray-300 leading-relaxed">
                  {selectedPost.content}
                </pre>
              </div>
            </div>
          </>
        ) : (
          <div className="flex items-center justify-center h-full">
            <p className="text-gray-400">Select a blog post to read</p>
          </div>
        )}
      </article>
    </main>
  );
}
