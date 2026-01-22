// Server Component - fetch data on the server
import { getPosts, getAllTags } from '@/lib/posts';
import BlogFilterClient from './BlogFilterClient';
import { t } from '@/lib/i18n';
import { SupportedLanguage } from '@/locales/types';

const posts = await getPosts();
const tags = await getAllTags();

export default async function Blog({ params }: { params: Promise<{ locale?: string }> }) {
  const resolvedParams = await params;
  const locale = (resolvedParams?.locale as SupportedLanguage) || 'en-US';
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">{t(locale, 'blog.title')}</h1>

      {/* Search and Filter Section with Posts - Client Component */}
      <BlogFilterClient posts={posts} tags={tags} locale={locale} />
    </div>
  );
}
