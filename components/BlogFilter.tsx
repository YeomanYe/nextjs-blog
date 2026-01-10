'use client';

import { useState, useEffect } from 'react';

interface Post {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  slug: string;
}

interface BlogFilterProps {
  posts: Post[];
  tags: string[];
  onFilteredPostsChange: (filteredPosts: Post[]) => void;
}

export default function BlogFilter({ posts, tags, onFilteredPostsChange }: BlogFilterProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState<'newest' | 'oldest'>('newest');

  // Toggle tag selection
  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  // Filter and sort posts - use useEffect to avoid infinite loops
  useEffect(() => {
    const filteredPosts = posts
      .filter(post => {
        // Search filter
        const matchesSearch = 
          post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());

        // Tag filter
        const matchesTags = selectedTags.length === 0 ||
          selectedTags.some(tag => post.tags.includes(tag));

        return matchesSearch && matchesTags;
      })
      .sort((a, b) => {
        // Sort posts by date
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();
        
        return sortOption === 'newest' ? dateB - dateA : dateA - dateB;
      });

    // Notify parent component when filtered posts change
    onFilteredPostsChange(filteredPosts);
  }, [posts, searchTerm, selectedTags, sortOption]);

  return (
    <div className="tech-card mb-8 gradient-border">
      <div className="absolute top-0 left-0 w-full h-full grid-background opacity-10"></div>
      <div className="relative z-10">
        {/* Search */}
        <div className="mb-6">
          <div className="flex space-x-3">
            <input
              type="text"
              placeholder="Search articles..."
              className="flex-grow px-4 py-3 border border-[var(--border-color)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent bg-[var(--card-background)] text-[var(--text-color)]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              type="button"
              className="btn"
              onClick={() => setSearchTerm('')}
              disabled={!searchTerm}
            >
              <span className="flex items-center gap-1">
                <span>🔄</span> Clear
              </span>
            </button>
          </div>
        </div>

        {/* Tags and Sort */}
        <div className="flex flex-wrap justify-between items-center">
          {/* Tags */}
          <div className="flex flex-wrap items-center mb-4 md:mb-0 gap-2">
            <span className="text-sm font-medium text-[var(--text-color)]/90 whitespace-nowrap">Filter by tags:</span>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <button
                  key={tag}
                  className={`text-xs font-medium px-3 py-1 rounded-full transition-all duration-300 ${
                    selectedTags.includes(tag)
                      ? 'bg-[var(--primary-color)] text-white'
                      : 'bg-[var(--border-color)] text-[var(--text-color)] hover:bg-[var(--primary-color)]/20'
                  }`}
                  onClick={() => toggleTag(tag)}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Sort */}
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-[var(--text-color)]/90">Sort by:</span>
            <select
              className="px-4 py-1.5 border border-[var(--border-color)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent bg-[var(--card-background)] text-[var(--text-color)] text-sm"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value as 'newest' | 'oldest')}
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}