'use client';

import { useState, useEffect } from 'react';
import BlogFilter from '../../../components/BlogFilter';
import PostCard from '../../../components/PostCard';
import { t } from '@/lib/i18n';
import { SupportedLanguage } from '@/locales/types';

interface Post {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  slug: string;
}

interface BlogFilterClientProps {
  posts: Post[];
  tags: string[];
  locale: SupportedLanguage;
}

export default function BlogFilterClient({
  posts,
  tags,
  locale,
}: BlogFilterClientProps) {
  const [filteredPosts, setFilteredPosts] = useState<Post[]>(posts);
  const [key, setKey] = useState(0);

  // Trigger re-render animation when filtered posts change
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setKey(prev => prev + 1);
  }, [filteredPosts.length]);

  return (
    <>
      <BlogFilter
        posts={posts}
        tags={tags}
        onFilteredPostsChange={setFilteredPosts}
        locale={locale}
      />

      {/* Results Count */}
      <div key={`count-${key}`} className="mb-6 animate-fade-in">
        <p className="text-[var(--text-secondary)]/80 flex items-center gap-2 font-mono text-sm">
          <svg className="w-4 h-4 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          {t(locale, 'blog.showingResults', { count: filteredPosts.length })}
        </p>
      </div>

      {/* Filtered Posts */}
      <div key={`posts-${key}`} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
        {filteredPosts.map((post, index) => (
          <PostCard key={post.id} post={post} locale={locale} index={index} />
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <div className="text-center py-16 animate-fade-in">
          <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-[var(--bg-card)] flex items-center justify-center">
            <svg className="w-10 h-10 text-[var(--text-secondary)]/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <p className="text-[var(--text-secondary)]/60 font-mono text-sm">{locale === 'zh-CN' ? '// 没有找到相关文章' : '// No articles found'}</p>
        </div>
      )}
    </>
  );
}
