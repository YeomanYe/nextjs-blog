// Server Component - fetch data on the server
import { getPosts, getAllTags } from '@/lib/posts';
import BlogFilterClient from './BlogFilterClient';
import { t } from '@/lib/i18n';

const posts = await getPosts();
const tags = await getAllTags();

export default function Blog({ params }: { params: any }) {
  const { locale } = params;
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">{t(locale, 'blog.title')}</h1>

      {/* Search and Filter Section with Posts - Client Component */}
      <BlogFilterClient posts={posts} tags={tags} locale={locale} />
    </div>
  );
}
