import Link from 'next/link';
import { getPosts } from '@/lib/posts';
import PostCard from '@/components/PostCard';
import { t } from '@/lib/i18n';
import { SupportedLanguage } from '@/locales/types';

const posts = await getPosts();

export default async function Home({ params }: { params: Promise<{ locale?: string }> }) {
  const resolvedParams = await params;
  const locale = (resolvedParams?.locale as SupportedLanguage) || 'en-US';
  return (
    <div>
      {/* Hero Section */}
      <section className="mb-16 relative overflow-hidden rounded-xl p-8 md:p-12 gradient-border">
        <div className="absolute inset-0 grid-background opacity-20"></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {t(locale, 'home.hero.title')}
          </h1>
          <p className="text-xl text-[var(--text-color)]/80 mb-8 max-w-2xl">
            {t(locale, 'home.hero.subtitle')}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href={`/${locale}/blog`} className="btn">
              {t(locale, 'home.hero.exploreArticles')}
            </Link>
            <Link href={`/${locale}/projects`} className="btn-secondary">
              {t(locale, 'home.hero.viewProjects')}
            </Link>
          </div>
        </div>
      </section>
      
      {/* Latest Posts Section */}
      <section className="mb-16">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl md:text-3xl font-semibold">{t(locale, 'home.latestArticles')}</h2>
          <Link 
            href={`/${locale}/blog`} 
            className="text-[var(--primary-color)] hover:text-[var(--accent-color)] transition-all duration-300 flex items-center gap-1"
          >
            {t(locale, 'home.viewAll')} <span className="text-[var(--accent-color)]">→</span>
          </Link>
        </div>
        
        {/* Latest 3 Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.slice(0, 3).map((post) => (
            <PostCard key={post.id} post={post} locale={locale} />
          ))}
        </div>
      </section>
    </div>
  );
}
