'use client';

import { useState, useEffect } from 'react';
import ProjectFilter from '@/components/ProjectFilter';
import { Project, allProjects } from '../../projects/data';
import { t } from '@/lib/i18n';
import { SupportedLanguage } from '@/locales/types';

export default function Projects({ params }: { params: Promise<{ locale?: string }> }) {
  const [locale, setLocale] = useState<SupportedLanguage>('en-US');

  useEffect(() => {
    params.then((resolvedParams) => {
      setLocale((resolvedParams?.locale as SupportedLanguage) || 'en-US');
    });
  }, [params]);

  const [filteredProjects, setFilteredProjects] = useState<Project[]>(allProjects);

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">{t(locale, 'projects.title')}</h1>

      {/* Search and Filter Section */}
      <ProjectFilter
        projects={allProjects}
        onFilteredProjectsChange={setFilteredProjects}
        locale={locale}
      />

      {/* Results Count */}
      <div className="mb-6">
        <p className="text-[var(--text-color)]/80">
          {t(locale, 'projects.showingResults', { count: filteredProjects.length })}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div key={project.id} className="tech-card group">
            <div className="absolute top-0 left-0 w-full h-full grid-background opacity-10 transition-opacity duration-300 group-hover:opacity-20"></div>
            <div className="relative z-10">
              {/* Project Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--primary-color)]/20 to-[var(--secondary-color)]/20 flex items-center justify-center text-2xl">
                    {project.icon}
                  </div>
                  <h2 className="text-xl font-semibold bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] bg-clip-text text-transparent">
                    {project.title}
                  </h2>
                </div>
                <div className="flex space-x-2 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--text-color)] hover:text-[var(--primary-color)] transition-colors flex items-center gap-1"
                    aria-label="GitHub"
                  >
                    <span className="text-[var(--primary-color)]">✦</span>{' '}
                    {t(locale, 'projects.github')}
                  </a>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--text-color)] hover:text-[var(--primary-color)] transition-colors flex items-center gap-1"
                    aria-label="Live Demo"
                  >
                    <span className="text-[var(--primary-color)]">✦</span> {t(locale, 'projects.demo')}
                  </a>
                </div>
              </div>

              {/* Project Description */}
              <p className="text-[var(--text-color)]/80 mb-5 line-clamp-3">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
