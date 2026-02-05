import { notFound } from 'next/navigation';
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
    <div className="max-w-3xl mx-auto">
      {/* Post Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-3">{post.title}</h1>
        <div className="flex flex-wrap gap-3 items-center text-[var(--text-color)]/80">
          <span className="text-sm">{post.date}</span>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Post Content */}
      <article
        className="mb-12 prose prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: post.htmlContent }}
      />

      {/* Comments Section */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold mb-6">{t(locale as SupportedLanguage, 'blog.comments')}</h2>
        <Comments postId={post.id} locale={locale as SupportedLanguage} />
      </section>
    </div>
  );
}
