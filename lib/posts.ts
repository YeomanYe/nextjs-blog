import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

interface Post {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  tags: string[];
  slug: string;
  htmlContent: string;
}

// Get the absolute path to the blog directory
const blogDir = path.join(process.cwd(), 'blog');

// Helper function to get all Markdown files in the blog directory
function getMdFiles(): string[] {
  try {
    return fs.readdirSync(blogDir).filter(file => file.endsWith('.md'));
  } catch (error) {
    console.error('Error reading blog directory:', error);
    return [];
  }
}

// Helper function to parse a Markdown file and return a Post object
async function parsePost(filePath: string): Promise<Post> {
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContent);
  const htmlContent = await marked(content);
  const fileName = path.basename(filePath, '.md');
  
  return {
    id: fileName,
    title: data.title,
    excerpt: data.excerpt,
    content,
    date: data.date,
    tags: data.tags,
    slug: data.slug,
    htmlContent
  };
}

// Get all posts from Markdown files
export async function getPosts(): Promise<Post[]> {
  const mdFiles = getMdFiles();
  const posts = await Promise.all(mdFiles.map(async (file) => {
    const filePath = path.join(blogDir, file);
    return await parsePost(filePath);
  }));
  
  // Sort posts by date (newest first)
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// Get a single post by slug
export async function getPostBySlug(slug: string): Promise<Post | undefined> {
  const mdFiles = getMdFiles();
  
  for (const file of mdFiles) {
    const filePath = path.join(blogDir, file);
    const post = await parsePost(filePath);
    
    if (post.slug === slug) {
      return post;
    }
  }
  
  return undefined;
}

// Get posts by tag
export async function getPostsByTag(tag: string): Promise<Post[]> {
  const allPosts = await getPosts();
  return allPosts.filter(post => post.tags.includes(tag));
}

// Search posts by query
export async function searchPosts(query: string): Promise<Post[]> {
  const allPosts = await getPosts();
  const lowerQuery = query.toLowerCase();
  
  return allPosts.filter(post => 
    post.title.toLowerCase().includes(lowerQuery) ||
    post.excerpt.toLowerCase().includes(lowerQuery) ||
    post.content.toLowerCase().includes(lowerQuery) ||
    post.tags.some(t => t.toLowerCase().includes(lowerQuery))
  );
}

// Get all unique tags
export async function getAllTags(): Promise<string[]> {
  const allPosts = await getPosts();
  const tags = new Set<string>();
  
  allPosts.forEach(post => {
    post.tags.forEach(tag => tags.add(tag));
  });
  
  return Array.from(tags).sort();
}