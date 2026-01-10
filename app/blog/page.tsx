// Server Component - fetch data on the server
import { getPosts, getAllTags } from '@/lib/posts';
import BlogFilterClient from './BlogFilterClient';

const posts = await getPosts();
const tags = await getAllTags();

export default function Blog() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">Articles</h1>

      {/* Search and Filter Section with Posts - Client Component */}
      <BlogFilterClient posts={posts} tags={tags} />
    </div>
  );
}
