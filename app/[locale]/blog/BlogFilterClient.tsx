'use client';

import { useState } from 'react';
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

  return (
    <>
      <BlogFilter
        posts={posts}
        tags={tags}
        onFilteredPostsChange={setFilteredPosts}
        locale={locale}
      />

      {/* Results Count */}
      <div className="mb-6">
        <p className="text-[var(--text-color)]/80">
          {t(locale, 'blog.showingResults', { count: filteredPosts.length })}
        </p>
      </div>

      {/* Filtered Posts */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post) => (
          <PostCard key={post.id} post={post} locale={locale} />
        ))}
      </div>
    </>
  );
}
