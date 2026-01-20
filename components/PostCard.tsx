import Link from 'next/link';
import { t } from '../lib/i18n';
import { SupportedLanguage } from '../locales/types';

interface Post {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  slug: string;
}

interface PostCardProps {
  post: Post;
  locale: SupportedLanguage;
}

export default function PostCard({ post, locale }: PostCardProps) {
  return (
    <div className="post-card">
      <div className="flex flex-wrap mb-3">
        {post.tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>
      <h3 className="text-xl font-semibold mb-2">
        <Link href={`/${locale}/blog/${post.slug}`} className="hover:text-primary transition-colors">
          {post.title}
        </Link>
      </h3>
      <p className="text-gray-500 text-sm mb-3">{post.date}</p>
      <p className="text-gray-700 mb-4">{post.excerpt}</p>
      <Link href={`/${locale}/blog/${post.slug}`} className="text-primary hover:underline">
        {t(locale, 'blog.readMore')}
      </Link>
    </div>
  );
}