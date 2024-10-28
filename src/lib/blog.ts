import fs from "fs";
import matter from "gray-matter";
import path from "path";

export const POSTS_PATH = path.join(process.cwd(), "posts");

export interface Post {
  title?: string;
  published_at?: string;
  description?: string;
  content: string;
  slug: string;
}

export async function getPost(slug: string): Promise<Post> {
  const postFilePath = path.join(POSTS_PATH, `${slug}.mdx`);
  const source = await fs.promises.readFile(postFilePath, "utf8");
  const { content, data } = matter(source);

  return {
    content,
    slug,
    title: data.title,
    published_at: data.published_at,
    description: data.description,
  } as Post;
}

export async function getAllPosts(): Promise<Post[]> {
  const postFilePaths = (await fs.promises.readdir(POSTS_PATH)).filter(
    (filePath) => /\.mdx?$/.test(filePath)
  );

  return Promise.all(
    postFilePaths.map(async (filePath) => {
      const slug = filePath.replace(/\.mdx?$/, "");
      return getPost(slug);
    })
  );
}
