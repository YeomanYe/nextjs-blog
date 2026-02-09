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
      <section className="mb-16 relative overflow-hidden rounded-2xl p-8 md:p-12 gradient-border">
        <div className="absolute inset-0 grid-background opacity-20"></div>
        {/* Animated glow orbs */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-primary)]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--color-cyan)]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/30 mb-6 animate-slide-up">
            <span className="w-2 h-2 rounded-full bg-[var(--color-primary)] animate-pulse"></span>
            <span className="text-[var(--color-primary)] text-sm font-mono">{locale === 'zh-CN' ? '// 欢迎来到技术空间' : '// Welcome to my digital space'}</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-scale-in font-mono">
            {t(locale, 'home.hero.title')}
          </h1>
          <p className="text-lg md:text-xl text-[var(--text-secondary)]/80 mb-8 max-w-2xl animate-scale-in stagger-1">
            {t(locale, 'home.hero.subtitle')}
          </p>
          <div className="flex flex-wrap gap-4 animate-slide-up stagger-2">
            <Link href={`/${locale}/blog`} className="btn">
              {t(locale, 'home.hero.exploreArticles')}
              <svg className="inline-block w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link href={`/${locale}/projects`} className="btn-secondary flex items-center justify-center">
              {t(locale, 'home.hero.viewProjects')}
              <svg className="inline-block w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Posts Section */}
      <section className="mb-16">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-2 font-mono">{t(locale, 'home.latestArticles')}</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-orange)] rounded-full"></div>
          </div>
          <Link
            href={`/${locale}/blog`}
            className="group flex items-center gap-2 text-[var(--color-primary)] hover:text-[var(--color-primary-light)] transition-all duration-300 font-mono text-sm"
          >
            {t(locale, 'home.viewAll')}
            <span className="transition-transform duration-300 group-hover:translate-x-2">→</span>
          </Link>
        </div>

        {/* Latest 3 Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.slice(0, 3).map((post, index) => (
            <PostCard key={post.id} post={post} locale={locale} index={index} />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: locale === 'zh-CN' ? '文章' : 'Articles', value: posts.length },
            { label: locale === 'zh-CN' ? '项目' : 'Projects', value: '5+' },
            { label: locale === 'zh-CN' ? '技术栈' : 'Tech Stack', value: '10+' },
            { label: locale === 'zh-CN' ? '年份' : 'Years', value: '2+' },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="tech-card text-center animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-orange)] bg-clip-text text-transparent mb-2 font-mono">
                {stat.value}
              </div>
              <div className="text-[var(--text-secondary)]/60 text-sm font-mono">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
