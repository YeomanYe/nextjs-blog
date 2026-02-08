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
      {/* Header */}
      <div className="mb-10 animate-slide-up">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/30 mb-4">
          <span className="w-2 h-2 rounded-full bg-[var(--color-primary)] animate-pulse"></span>
          <span className="text-[var(--color-primary)] text-sm font-mono">
            {locale === 'zh-CN' ? '// 探索技术文章' : '// Explore Tech Articles'}
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 font-mono">{t(locale, 'blog.title')}</h1>
        <p className="text-[var(--text-secondary)]/60 max-w-xl font-mono text-sm">
          {locale === 'zh-CN'
            ? '// 分享技术见解、教程和项目经验。关注最新趋势，深入探索技术的无限可能。'
            : '// Sharing tech insights, tutorials, and project experiences.'}
        </p>
      </div>

      {/* Search and Filter Section with Posts - Client Component */}
      <BlogFilterClient posts={posts} tags={tags} locale={locale} />
    </div>
  );
}
