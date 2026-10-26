import React from 'react';
import { Link } from 'react-router-dom';

export interface M3ButtonProps {
  variant?: 'filled' | 'tonal' | 'outlined' | 'text' | 'elevated';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
  href?: string;
  to?: string;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  disabled?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'start' | 'end';
  'aria-label'?: string;
}

export const M3Button: React.FC<M3ButtonProps> = ({
  variant = 'filled',
  size = 'md',
  children,
  onClick,
  href,
  to,
  type = 'button',
  className = '',
  disabled = false,
  icon,
  iconPosition = 'start',
  'aria-label': ariaLabel,
}) => {
  const baseClasses =
    'inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 select-none cursor-pointer active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--md-sys-color-primary)] focus-visible:ring-offset-2';

  const sizeClasses = {
    sm: 'text-xs px-4 py-1.5 gap-1.5 min-h-[32px]',
    md: 'text-sm px-6 py-2.5 gap-2 min-h-[40px]',
    lg: 'text-base px-7 py-3 gap-2.5 min-h-[48px]',
  }[size];

  const variantClasses = {
    filled:
      'bg-[var(--md-sys-color-primary)] text-[var(--md-sys-color-on-primary)] hover:opacity-95 shadow-sm hover:shadow',
    tonal:
      'bg-[var(--md-sys-color-secondary-container)] text-[var(--md-sys-color-on-secondary-container)] hover:brightness-95 dark:hover:brightness-110',
    outlined:
      'border border-[var(--md-sys-color-outline)] text-[var(--md-sys-color-primary)] hover:bg-[var(--md-sys-color-surface-container-high)]',
    text:
      'text-[var(--md-sys-color-primary)] hover:bg-[var(--md-sys-color-surface-container-high)] px-3',
    elevated:
      'bg-[var(--md-sys-color-surface-container-lowest)] text-[var(--md-sys-color-primary)] shadow-[var(--md-elevation-1)] hover:shadow-[var(--md-elevation-2)]',
  }[variant];

  const combinedClasses = `${baseClasses} ${sizeClasses} ${variantClasses} ${className}`;

  const content = (
    <>
      {icon && iconPosition === 'start' && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'end' && <span className="shrink-0">{icon}</span>}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedClasses} aria-label={ariaLabel}>
        {content}
      </Link>
    );
  }

  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('mailto:');
    return (
      <a
        href={href}
        className={combinedClasses}
        aria-label={ariaLabel}
        {...(isExternal && !href.startsWith('mailto:')
          ? { target: '_blank', rel: 'noopener noreferrer' }
          : {})}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  );
};
