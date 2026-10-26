import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  overline?: string;
  action?: React.ReactNode;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  overline,
  action,
  align = 'left',
  className = '',
}) => {
  return (
    <div
      className={`flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-12 ${
        align === 'center' ? 'sm:text-center sm:justify-center' : ''
      } ${className}`}
    >
      <div className={`space-y-2 max-w-2xl ${align === 'center' ? 'mx-auto' : ''}`}>
        {overline && (
          <span className="text-xs font-semibold uppercase tracking-wider text-[var(--md-sys-color-primary)]">
            {overline}
          </span>
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

      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
};
