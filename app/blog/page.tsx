// Server Component - fetch data on the server
import { getPosts, getAllTags } from '@/lib/posts';
import BlogFilterClient from './BlogFilterClient';
import { DEFAULT_LANGUAGE } from '@/lib/i18n';

const posts = await getPosts();
const tags = await getAllTags();

export default function Blog() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">Articles</h1>

      {/* Search and Filter Section with Posts - Client Component */}
      <BlogFilterClient posts={posts} tags={tags} locale={DEFAULT_LANGUAGE} />
    </div>
  );
}
