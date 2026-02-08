'use client';

import { useState, useEffect } from 'react';
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

interface BlogFilterProps {
  posts: Post[];
  tags: string[];
  onFilteredPostsChange: (filteredPosts: Post[]) => void;
  locale: SupportedLanguage;
}

export default function BlogFilter({ posts, tags, onFilteredPostsChange, locale }: BlogFilterProps) {
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
  }, [posts, searchTerm, selectedTags, sortOption, onFilteredPostsChange]);

  return (
    <div className="tech-card mb-8 gradient-border">
      <div className="absolute top-0 left-0 w-full h-full grid-background opacity-10"></div>
      <div className="relative z-10">
        {/* Search */}
        <div className="mb-6">
          <div className="flex space-x-3">
            <input
              type="text"
              placeholder={t(locale, 'blog.searchPlaceholder')}
              className="flex-grow px-4 py-3 border border-[var(--border-color)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent bg-[var(--bg-card)] text-[var(--text-secondary)] font-mono text-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              type="button"
              className="btn py-2"
              onClick={() => setSearchTerm('')}
              disabled={!searchTerm}
            >
              <span className="flex items-center gap-1 whitespace-nowrap">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                {t(locale, 'blog.clearFilter')}
              </span>
            </button>
          </div>
        </div>

        {/* Tags and Sort */}
        <div className="flex flex-wrap justify-between items-center">
          {/* Tags */}
          <div className="flex flex-wrap items-center mb-4 md:mb-0 gap-2">
            <span className="text-sm font-medium text-[var(--text-secondary)]/90 font-mono whitespace-nowrap">{t(locale, 'blog.filterByTags')}</span>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <button
                  key={tag}
                  className={`text-xs font-medium px-3 py-1 rounded transition-all duration-300 font-mono ${
                    selectedTags.includes(tag)
                      ? 'bg-[var(--color-primary)] text-[var(--bg-main)]'
                      : 'bg-[var(--border-color)] text-[var(--text-secondary)] hover:bg-[var(--color-primary)]/20 hover:text-[var(--color-primary)]'
                  }`}
                  onClick={() => toggleTag(tag)}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Sort */}
          <div className="flex items-center gap-3 whitespace-nowrap">
            <span className="text-sm font-medium text-[var(--text-secondary)]/90 font-mono">{t(locale, 'blog.sort')}</span>
            <select
              className="px-4 py-1.5 border border-[var(--border-color)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent bg-[var(--bg-card)] text-[var(--text-secondary)] text-sm font-mono"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value as 'newest' | 'oldest')}
            >
              <option value="newest">{t(locale, 'blog.newest')}</option>
              <option value="oldest">{t(locale, 'blog.oldest')}</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}