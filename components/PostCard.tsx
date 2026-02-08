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
  index?: number;
}

export default function PostCard({ post, locale, index = 0 }: PostCardProps) {
  return (
    <div
      className="post-card hover-lift spotlight animate-slide-up"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="flex flex-wrap gap-2 mb-4">
        {post.tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>
      <h3 className="text-xl font-bold mb-3 group">
        <Link
          href={`/${locale}/blog/${post.slug}`}
          className="font-mono hover:text-primary-light transition-colors"
        >
          {post.title}
        </Link>
      </h3>
      <p className="text-secondary text-sm mb-4 flex items-center gap-2 font-mono text-xs">
        <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        {post.date}
      </p>
      <p className="text-secondary/80 mb-4 line-clamp-2 text-sm">{post.excerpt}</p>
      <Link
        href={`/${locale}/blog/${post.slug}`}
        className="inline-flex items-center gap-2 text-primary hover:text-primary-light transition-all duration-300 group-hover:gap-3 font-mono text-sm"
      >
        <span>read_more()</span>
        <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </Link>
    </div>
  );
}
