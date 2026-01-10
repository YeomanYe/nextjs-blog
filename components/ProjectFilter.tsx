'use client';

import { useState, useEffect, useMemo } from 'react';

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  link: string;
  github: string;
  icon: string;
}

interface ProjectFilterProps {
  projects: Project[];
  onFilteredProjectsChange: (filteredProjects: Project[]) => void;
}

export default function ProjectFilter({ projects, onFilteredProjectsChange }: ProjectFilterProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState<'newest' | 'oldest' | 'name'>('name');

  // Extract all unique technologies from projects - use useMemo to cache result
  const allTechnologies = useMemo(() => {
    return Array.from(
      new Set(projects.flatMap(project => project.technologies))
    ).sort();
  }, [projects]);

  // Toggle tag selection
  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  // Filter and sort projects - use useEffect to avoid infinite loops
  useEffect(() => {
    const filteredProjects = projects
      .filter(project => {
        // Search filter
        const matchesSearch = 
          project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.description.toLowerCase().includes(searchTerm.toLowerCase());

        // Tag filter
        const matchesTags = selectedTags.length === 0 ||
          selectedTags.every(tag => project.technologies.includes(tag));

        return matchesSearch && matchesTags;
      })
      .sort((a, b) => {
        // Sort projects
        switch (sortOption) {
          case 'newest':
            // Since we don't have dates, we'll sort by ID (newer IDs first)
            return parseInt(b.id) - parseInt(a.id);
          case 'oldest':
            return parseInt(a.id) - parseInt(b.id);
          case 'name':
            return a.title.localeCompare(b.title);
          default:
            return 0;
        }
      });

    // Notify parent component when filtered projects change
    onFilteredProjectsChange(filteredProjects);
  }, [projects, searchTerm, selectedTags, sortOption]);

  return (
    <div className="tech-card mb-8 gradient-border">
      <div className="absolute top-0 left-0 w-full h-full grid-background opacity-10"></div>
      <div className="relative z-10">
        {/* Search */}
        <div className="mb-6">
          <div className="flex space-x-3">
            <input
              type="text"
              placeholder="Search projects..."
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
            <span className="text-sm font-medium text-[var(--text-color)]/90 whitespace-nowrap">Filter by technologies:</span>
            <div className="flex flex-wrap gap-2">
              {allTechnologies.map((tech) => (
                <button
                  key={tech}
                  className={`text-xs font-medium px-3 py-1 rounded-full transition-all duration-300 ${
                    selectedTags.includes(tech)
                      ? 'bg-[var(--primary-color)] text-white'
                      : 'bg-[var(--border-color)] text-[var(--text-color)] hover:bg-[var(--primary-color)]/20'
                  }`}
                  onClick={() => toggleTag(tech)}
                >
                  {tech}
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
              onChange={(e) => setSortOption(e.target.value as 'newest' | 'oldest' | 'name')}
            >
              <option value="name">Name</option>
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}