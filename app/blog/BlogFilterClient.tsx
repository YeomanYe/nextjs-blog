'use client';

import { useState } from 'react';
import BlogFilter from '../../components/BlogFilter';
import PostCard from '../../components/PostCard';

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
}

export default function BlogFilterClient({
  posts,
  tags,
}: BlogFilterClientProps) {
  const [filteredPosts, setFilteredPosts] = useState<Post[]>(posts);

  return (
    <>
      <BlogFilter
        posts={posts}
        tags={tags}
        onFilteredPostsChange={setFilteredPosts}
      />

      {/* Results Count */}
      <div className="mb-6">
        <p className="text-[var(--text-color)]/80">
          Showing{' '}
          <span className="font-medium text-[var(--primary-color)]">
            {filteredPosts.length}
          </span>{' '}
          article(s)
        </p>
      </div>

      {/* Filtered Posts */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </>
  );
}
