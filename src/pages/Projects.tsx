import React, { useState, useMemo } from 'react';
import { profileData } from '../data/profile.ts';
import { ProjectCategory, ProjectItem } from '../types/profile.ts';
import { filterProjects } from '../utils/profileHelpers.ts';
import { SectionHeader } from '../components/SectionHeader.tsx';
import { ProjectCard } from '../components/ProjectCard.tsx';
import { ProjectModal } from '../components/ProjectModal.tsx';
import { M3FilterChip } from '../components/M3FilterChip.tsx';
import { Search, Filter, X } from 'lucide-react';

const CATEGORIES: Array<ProjectCategory | 'All'> = [
  'All',
  'Graphic Design & Branding',
  'Print & Media Publishing',
  'Digital Marketing',
  'Office Automation & Documentation',
];

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const filteredProjects = useMemo(() => {
    return filterProjects(profileData.projects, selectedCategory, searchQuery);
  }, [selectedCategory, searchQuery]);

  const clearFilters = () => {
    setSelectedCategory('All');
    setSearchQuery('');
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10 pb-20">
      <SectionHeader
        overline="Selected Works"
        title="Engineering Projects & Systems"
        subtitle="Explore detailed case studies across cloud architecture, native mobile applications, and open-source developer tooling."
      />

      {/* Filter and Search Bar */}
      <div className="p-4 sm:p-6 rounded-3xl bg-[var(--md-sys-color-surface-container-low)] space-y-4 border border-[var(--md-sys-color-surface-container-highest)]">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--md-sys-color-on-surface-variant)]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search projects by title, stack, or keywords (e.g., Compose, WebSocket, Go)..."
            className="w-full pl-11 pr-10 py-2.5 rounded-full text-sm bg-[var(--md-sys-color-surface)] border border-[var(--md-sys-color-outline-variant)] text-[var(--md-sys-color-on-surface)] placeholder:text-[var(--md-sys-color-on-surface-variant)]/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--md-sys-color-primary)] transition-all"
            aria-label="Search projects"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[var(--md-sys-color-outline)] hover:text-[var(--md-sys-color-on-surface)]"
              aria-label="Clear search query"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Categories */}
        <div className="flex flex-wrap items-center gap-2 pt-1">
          <span className="text-xs font-semibold text-[var(--md-sys-color-on-surface-variant)] mr-1 hidden sm:inline">
            Domain:
          </span>
          {CATEGORIES.map((cat) => {
            const count =
              cat === 'All'
                ? profileData.projects.length
                : profileData.projects.filter((p) => p.category === cat).length;

            return (
              <M3FilterChip
                key={cat}
                label={cat}
                selected={selectedCategory === cat}
                onClick={() => setSelectedCategory(cat)}
                count={count}
              />
            );
          })}

          {(selectedCategory !== 'All' || searchQuery) && (
            <button
              type="button"
              onClick={clearFilters}
              className="ml-auto text-xs text-[var(--md-sys-color-primary)] hover:underline cursor-pointer"
            >
              Reset filters
            </button>
          )}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between text-xs text-[var(--md-sys-color-on-surface-variant)]">
          <span>
            Showing <strong className="text-[var(--md-sys-color-on-surface)]">{filteredProjects.length}</strong> {filteredProjects.length === 1 ? 'project' : 'projects'}
          </span>
        </div>

        {filteredProjects.length === 0 ? (
          <div className="p-12 text-center rounded-3xl bg-[var(--md-sys-color-surface-container-low)] space-y-3">
            <Filter className="w-8 h-8 mx-auto text-[var(--md-sys-color-outline)]" />
            <h3 className="text-base font-bold text-[var(--md-sys-color-on-surface)]">
              No projects found
            </h3>
            <p className="text-xs text-[var(--md-sys-color-on-surface-variant)]">
              Try adjusting your search criteria or category filter.
            </p>
            <button
              type="button"
              onClick={clearFilters}
              className="text-xs font-semibold text-[var(--md-sys-color-primary)] hover:underline pt-2"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={(p) => setActiveModalProject(p)}
              />
            ))}
          </div>
        )}
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </div>
  );
};
