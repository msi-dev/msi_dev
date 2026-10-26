import React, { useEffect } from 'react';
import { ProjectItem } from '../types/profile.ts';
import { X, ExternalLink, Github, CheckCircle2, Calendar } from 'lucide-react';
import { M3Button } from './M3Button.tsx';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[var(--md-sys-color-surface-container-lowest)] rounded-3xl shadow-[var(--md-elevation-3)] border border-[var(--md-sys-color-surface-container-highest)] focus:outline-none">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 flex items-center justify-center w-9 h-9 rounded-full bg-[var(--md-sys-color-surface-container)] text-[var(--md-sys-color-on-surface)] hover:bg-[var(--md-sys-color-surface-container-high)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--md-sys-color-primary)]"
          aria-label="Close project modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Project Cover Image */}
        <div className="relative aspect-video w-full bg-[var(--md-sys-color-surface-container)] overflow-hidden rounded-t-3xl">
          <img
            src={project.coverImage}
            alt={project.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLElement).style.display = 'none';
            }}
          />
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Metadata line */}
          <div className="flex flex-wrap items-center gap-2 text-xs text-[var(--md-sys-color-on-surface-variant)]">
            <span className="font-semibold text-[var(--md-sys-color-primary)]">{project.category}</span>
            <span aria-hidden="true">·</span>
            <span className="inline-flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {project.year}
            </span>
            <span aria-hidden="true">·</span>
            <span className="font-medium text-[var(--md-sys-color-on-surface)]">{project.status}</span>
          </div>

          <h2
            id="project-modal-title"
            className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--md-sys-color-on-surface)]"
          >
            {project.title}
          </h2>

          <p className="text-base text-[var(--md-sys-color-on-surface-variant)] leading-relaxed">
            {project.fullDescription}
          </p>

          {/* Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="space-y-3 pt-2">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--md-sys-color-on-surface)]">
                Key Technical Highlights
              </h3>
              <ul className="space-y-2">
                {project.highlights.map((highlight, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-sm text-[var(--md-sys-color-on-surface-variant)]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[var(--md-sys-color-primary)] shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Architecture Notes */}
          {project.architectureNotes && (
            <div className="p-4 rounded-2xl bg-[var(--md-sys-color-surface-container)] border border-[var(--md-sys-color-outline-variant)]/30 space-y-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-[var(--md-sys-color-primary)]">
                Architecture Notes
              </span>
              <p className="text-sm text-[var(--md-sys-color-on-surface-variant)]">
                {project.architectureNotes}
              </p>
            </div>
          )}

          {/* Tech Stack */}
          <div className="space-y-2 pt-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[var(--md-sys-color-on-surface)]">
              Technologies Used
            </span>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg text-xs font-medium bg-[var(--md-sys-color-surface-container-high)] text-[var(--md-sys-color-on-surface)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="pt-4 border-t border-[var(--md-sys-color-surface-container-highest)] flex flex-wrap items-center gap-3">
            {project.liveDemoUrl && (
              <M3Button
                href={project.liveDemoUrl}
                variant="filled"
                size="md"
                icon={<ExternalLink className="w-4 h-4" />}
                iconPosition="end"
              >
                Launch Demo
              </M3Button>
            )}

            {project.githubUrl && (
              <M3Button
                href={project.githubUrl}
                variant="outlined"
                size="md"
                icon={<Github className="w-4 h-4" />}
              >
                View Repository
              </M3Button>
            )}

            <M3Button variant="text" size="md" onClick={onClose} className="ml-auto">
              Close
            </M3Button>
          </div>
        </div>
      </div>
    </div>
  );
};
