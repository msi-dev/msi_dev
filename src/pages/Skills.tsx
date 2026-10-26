import React, { useState, useMemo } from 'react';
import { profileData } from '../data/profile.ts';
import { SkillCategory, ProficiencyLevel } from '../types/profile.ts';
import { filterSkills } from '../utils/profileHelpers.ts';
import { SectionHeader } from '../components/SectionHeader.tsx';
import { M3FilterChip } from '../components/M3FilterChip.tsx';
import { Search, Sparkles, Filter, X } from 'lucide-react';

const CATEGORIES: Array<SkillCategory | 'All'> = [
  'All',
  'Graphic Design',
  'Office & Documentation',
  'Computer Operations',
  'Programming & Scripting',
  'Cloud & Backend',
  'Digital Marketing',
  'Operating Systems',
];

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProficiency, setSelectedProficiency] = useState<ProficiencyLevel | 'All'>('All');

  const filteredSkills = useMemo(() => {
    let result = filterSkills(profileData.skills, selectedCategory, searchQuery);
    if (selectedProficiency !== 'All') {
      result = result.filter((s) => s.proficiency === selectedProficiency);
    }
    return result;
  }, [selectedCategory, searchQuery, selectedProficiency]);

  const clearFilters = () => {
    setSelectedCategory('All');
    setSearchQuery('');
    setSelectedProficiency('All');
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10 pb-20">
      <SectionHeader
        overline="Technical Expertise"
        title="Skills & Engineering Capabilities"
        subtitle="A categorized inventory of design tools, computerized office suites, programming languages, cloud backends, and operating systems."
      />

      {/* Search and Filters Bar */}
      <div className="p-4 sm:p-6 rounded-3xl bg-[var(--md-sys-color-surface-container-low)] space-y-4 border border-[var(--md-sys-color-surface-container-highest)]">
        {/* Search input */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--md-sys-color-on-surface-variant)]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search skills by name, description, or related tools (e.g., React, Go, Kotlin)..."
            className="w-full pl-11 pr-10 py-2.5 rounded-full text-sm bg-[var(--md-sys-color-surface)] border border-[var(--md-sys-color-outline-variant)] text-[var(--md-sys-color-on-surface)] placeholder:text-[var(--md-sys-color-on-surface-variant)]/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--md-sys-color-primary)] transition-all"
            aria-label="Search skills"
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

        {/* Category Filter Chips */}
        <div className="flex flex-wrap items-center gap-2 pt-1">
          <span className="text-xs font-semibold text-[var(--md-sys-color-on-surface-variant)] mr-1 hidden sm:inline">
            Category:
          </span>
          {CATEGORIES.map((cat) => {
            const count =
              cat === 'All'
                ? profileData.skills.length
                : profileData.skills.filter((s) => s.category === cat).length;

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
        </div>

        {/* Proficiency Secondary Filter */}
        <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-[var(--md-sys-color-outline-variant)]/30 text-xs text-[var(--md-sys-color-on-surface-variant)]">
          <span className="font-semibold mr-1">Proficiency:</span>
          {(['All', 'Expert', 'Proficient', 'Familiar'] as const).map((level) => (
            <button
              key={level}
              type="button"
              onClick={() => setSelectedProficiency(level)}
              className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                selectedProficiency === level
                  ? 'bg-[var(--md-sys-color-primary-container)] text-[var(--md-sys-color-on-primary-container)] font-semibold'
                  : 'hover:bg-[var(--md-sys-color-surface-container-high)] text-[var(--md-sys-color-on-surface-variant)]'
              }`}
            >
              {level}
            </button>
          ))}

          {(selectedCategory !== 'All' || searchQuery || selectedProficiency !== 'All') && (
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

      {/* Results Count & Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between text-xs text-[var(--md-sys-color-on-surface-variant)]">
          <span>
            Showing <strong className="text-[var(--md-sys-color-on-surface)]">{filteredSkills.length}</strong> {filteredSkills.length === 1 ? 'skill' : 'skills'}
          </span>
        </div>

        {filteredSkills.length === 0 ? (
          <div className="p-12 text-center rounded-3xl bg-[var(--md-sys-color-surface-container-low)] space-y-3">
            <Filter className="w-8 h-8 mx-auto text-[var(--md-sys-color-outline)]" />
            <h3 className="text-base font-bold text-[var(--md-sys-color-on-surface)]">
              No skills match your filter
            </h3>
            <p className="text-xs text-[var(--md-sys-color-on-surface-variant)]">
              Try adjusting your search query or selecting a different category.
            </p>
            <button
              type="button"
              onClick={clearFilters}
              className="text-xs font-semibold text-[var(--md-sys-color-primary)] hover:underline pt-2"
            >
              Clear all filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredSkills.map((skill) => (
              <div
                key={skill.id}
                className="p-6 rounded-2xl bg-[var(--md-sys-color-surface-container-low)] hover:bg-[var(--md-sys-color-surface-container)] border border-[var(--md-sys-color-surface-container-highest)]/70 transition-all duration-200 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2.5">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-base font-bold text-[var(--md-sys-color-on-surface)]">
                      {skill.name}
                    </h3>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-[var(--md-sys-color-secondary-container)] text-[var(--md-sys-color-on-secondary-container)] shrink-0">
                      {skill.proficiency}
                    </span>
                  </div>

                  <p className="text-xs text-[var(--md-sys-color-on-surface-variant)] leading-relaxed">
                    {skill.description}
                  </p>
                </div>

                <div className="space-y-3 pt-2 border-t border-[var(--md-sys-color-outline-variant)]/30">
                  {skill.relatedTechnologies && skill.relatedTechnologies.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                      {skill.relatedTechnologies.map((item) => (
                        <span
                          key={item}
                          className="px-2 py-0.5 rounded text-[11px] bg-[var(--md-sys-color-surface-container-high)] text-[var(--md-sys-color-on-surface-variant)]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="flex items-center justify-between text-[11px] text-[var(--md-sys-color-outline)]">
                    <span className="font-medium text-[var(--md-sys-color-primary)]">
                      {skill.category}
                    </span>
                    {skill.yearsOfExperience && (
                      <span className="font-mono">{skill.yearsOfExperience} years active</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
