import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  overline?: string;
  action?: React.ReactNode;
  align?: 'left' | 'center';
  className?: string;
  icon?: React.ReactNode;
  watermarkIcon?: React.ReactNode;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  overline,
  action,
  align = 'left',
  className = '',
  icon,
  watermarkIcon,
}) => {
  return (
    <div
      className={`relative flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-12 ${
        align === 'center' ? 'sm:text-center sm:justify-center' : ''
      } ${className}`}
    >
      {/* Decorative watermark icon positioned directly behind the heading text block */}
      {watermarkIcon && (
        <div
          aria-hidden="true"
          className="absolute -top-6 -left-3 sm:-top-8 sm:-left-4 text-[var(--md-sys-color-primary)] opacity-[0.08] dark:opacity-[0.14] pointer-events-none select-none -z-0"
        >
          {watermarkIcon}
        </div>
      )}

      <div className={`relative z-10 space-y-2 max-w-2xl ${align === 'center' ? 'mx-auto' : ''}`}>
        {overline && (
          <div className="flex items-center gap-2">
            {icon && (
              <div className="w-5 h-5 rounded-md bg-[var(--md-sys-color-primary-container)] text-[var(--md-sys-color-on-primary-container)] flex items-center justify-center shrink-0">
                {icon}
              </div>
            )}
            <span className="text-xs font-semibold uppercase tracking-wider text-[var(--md-sys-color-primary)]">
              {overline}
            </span>
          </div>
        )}
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--md-sys-color-on-surface)]">
          {title}
        </h2>
        {subtitle && (
          <p className="text-base text-[var(--md-sys-color-on-surface-variant)] leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>

      {action && <div className="relative z-10 shrink-0">{action}</div>}
    </div>
  );
};
