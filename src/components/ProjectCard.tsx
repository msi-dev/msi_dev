import React from 'react';
import { ProjectItem } from '../types/profile.ts';
import { ArrowUpRight, Github, ExternalLink } from 'lucide-react';
import { M3Button } from './M3Button.tsx';

interface ProjectCardProps {
  project: ProjectItem;
  onSelect: (project: ProjectItem) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  return (
    <div className="group flex flex-col h-full bg-[var(--md-sys-color-surface-container-low)] hover:bg-[var(--md-sys-color-surface-container)] rounded-2xl overflow-hidden transition-all duration-200 border border-transparent hover:border-[var(--md-sys-color-surface-container-highest)]">
      {/* Cover image */}
      <div
        className="relative aspect-video w-full bg-[var(--md-sys-color-surface-container-high)] overflow-hidden cursor-pointer"
        onClick={() => onSelect(project)}
      >
        <img
          src={project.coverImage}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          onError={(e) => {
            (e.target as HTMLElement).style.display = 'none';
          }}
        />

        {/* Status chip over image */}
        <div className="absolute top-3 right-3">
          <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold tracking-wide bg-[var(--md-sys-color-surface)]/90 backdrop-blur-xs text-[var(--md-sys-color-on-surface)] shadow-xs">
            {project.status}
          </span>
        </div>
      </div>

      {/* Card body */}
      <div className="flex flex-col flex-grow p-5 sm:p-6 space-y-4">
        {/* Unboxed Metadata row */}
        <div className="flex items-center gap-2 text-xs text-[var(--md-sys-color-on-surface-variant)]">
          <span className="font-semibold text-[var(--md-sys-color-primary)]">{project.category}</span>
          <span aria-hidden="true">·</span>
          <span>{project.year}</span>
        </div>

        {/* Title */}
        <h3
          onClick={() => onSelect(project)}
          className="text-lg font-bold text-[var(--md-sys-color-on-surface)] group-hover:text-[var(--md-sys-color-primary)] transition-colors cursor-pointer"
        >
          {project.title}
        </h3>

        {/* Short description */}
        <p className="text-sm text-[var(--md-sys-color-on-surface-variant)] line-clamp-2 leading-relaxed flex-grow">
          {project.shortDescription}
        </p>

        {/* Technologies list */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded text-xs text-[var(--md-sys-color-on-surface-variant)] bg-[var(--md-sys-color-surface-container-high)]"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-0.5 rounded text-xs text-[var(--md-sys-color-outline)] bg-[var(--md-sys-color-surface-container-high)]">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* Actions row */}
        <div className="pt-3 border-t border-[var(--md-sys-color-surface-container-highest)]/60 flex items-center justify-between gap-2">
          <button
            type="button"
            onClick={() => onSelect(project)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--md-sys-color-primary)] hover:underline cursor-pointer py-1"
          >
            <span>Case Study</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          <div className="flex items-center gap-1.5">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-8 h-8 rounded-full text-[var(--md-sys-color-on-surface-variant)] hover:bg-[var(--md-sys-color-surface-container-high)] hover:text-[var(--md-sys-color-on-surface)] transition-colors"
                aria-label={`View ${project.title} repository`}
                title="View repository"
              >
                <Github className="w-4 h-4" />
              </a>
            )}

            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-8 h-8 rounded-full text-[var(--md-sys-color-on-surface-variant)] hover:bg-[var(--md-sys-color-surface-container-high)] hover:text-[var(--md-sys-color-on-surface)] transition-colors"
                aria-label={`Launch ${project.title} live demo`}
                title="Launch demo"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
