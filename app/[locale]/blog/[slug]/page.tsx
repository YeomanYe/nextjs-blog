import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getPostBySlug, getPosts } from '@/lib/posts';
import Comments from '@/components/Comments';
import { t } from '@/lib/i18n';
import { SupportedLanguage } from '@/locales/types';

interface Post {
  id: string;
  title: string;
  content: string;
  date: string;
  tags: string[];
  slug: string;
  htmlContent: string;
}

// Generate static params for SSG
export async function generateStaticParams() {
  const posts = await getPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function PostPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Back Button */}
      <div className="mb-8 animate-slide-up">
        <Link
          href={`/${locale}/blog`}
          className="inline-flex items-center gap-2 text-[var(--text-secondary)]/60 hover:text-[var(--color-primary)] transition-all duration-300 group font-mono text-sm"
        >
          <svg className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          {locale === 'zh-CN' ? '← 返回文章列表' : '← Back to Articles'}
        </Link>
      </div>

      {/* Post Header */}
      <div className="mb-10 animate-scale-in">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {post.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight font-mono">
          {post.title}
        </h1>

        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-4 text-[var(--text-secondary)]/60 font-mono text-sm">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>{post.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-[var(--color-orange)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{locale === 'zh-CN' ? '阅读时间' : 'Read time'}: 5 min</span>
          </div>
        </div>
      </div>

      {/* Post Header Decorative Line */}
      <div className="relative mb-10">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-[var(--border-color)]"></div>
        </div>
        <div className="relative flex justify-center">
          <div className="w-20 h-1 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-orange)] rounded-full"></div>
        </div>
      </div>

      {/* Post Content */}
      <article
        className="mb-16 prose prose-invert max-w-none prose-lg prose-headings:font-bold prose-headings:bg-gradient-to-r prose-headings:from-[var(--color-primary)] prose-headings:to-[var(--color-orange)] prose-headings:bg-clip-text prose-headings:text-transparent prose-a:text-[var(--color-primary)] prose-a:no-underline hover:prose-a:text-[var(--color-primary-light)] prose-strong:text-[var(--color-primary)] prose-code:text-[var(--color-cyan)] prose-pre:bg-[var(--bg-card)] prose-pre:border prose-pre:border-[var(--border-color)] animate-slide-up font-mono"
        dangerouslySetInnerHTML={{ __html: post.htmlContent }}
      />

      {/* Post Footer */}
      <div className="mb-16 p-6 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)]">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-orange)] flex items-center justify-center">
              <span className="text-xl font-bold text-[var(--bg-main)] font-mono">&gt;_</span>
            </div>
            <div>
              <p className="font-medium text-[var(--text-secondary)] font-mono">{locale === 'zh-CN' ? 'TechBlog' : 'TechBlog'}</p>
              <p className="text-sm text-[var(--text-secondary)]/60 font-mono text-xs">{locale === 'zh-CN' ? '// 分享技术，连接未来' : '// Sharing technology'}</p>
            </div>
          </div>
          <div className="flex gap-3">
            <button className="btn py-2 px-4 text-sm">
              {locale === 'zh-CN' ? '分享文章' : 'Share Article'}
            </button>
          </div>
        </div>
      </div>

      {/* Comments Section */}
      <section className="mt-16 animate-slide-up">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-1 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-orange)] rounded-full"></div>
          <h2 className="text-2xl font-semibold font-mono">{t(locale as SupportedLanguage, 'blog.comments')}</h2>
        </div>
        <div className="tech-card">
          <Comments postId={post.id} locale={locale as SupportedLanguage} />
        </div>
      </section>
    </div>
  );
}
