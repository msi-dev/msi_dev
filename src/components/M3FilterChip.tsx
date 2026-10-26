import React from 'react';
import { Check } from 'lucide-react';

export interface M3FilterChipProps {
  label: string;
  selected: boolean;
  onClick: () => void;
  count?: number;
  icon?: React.ReactNode;
}

export const M3FilterChip: React.FC<M3FilterChipProps> = ({
  label,
  selected,
  onClick,
  count,
  icon,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-150 select-none cursor-pointer whitespace-nowrap shrink-0 border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--md-sys-color-primary)] ${
        selected
          ? 'bg-[var(--md-sys-color-secondary-container)] text-[var(--md-sys-color-on-secondary-container)] border-transparent shadow-xs font-semibold'
          : 'bg-transparent text-[var(--md-sys-color-on-surface-variant)] border-[var(--md-sys-color-outline-variant)] hover:bg-[var(--md-sys-color-surface-container-high)] hover:text-[var(--md-sys-color-on-surface)]'
      }`}
      aria-pressed={selected}
    >
      {selected ? (
        <Check className="w-3.5 h-3.5 text-[var(--md-sys-color-primary)] shrink-0" />
      ) : (
        icon && <span className="w-3.5 h-3.5 shrink-0 opacity-70">{icon}</span>
      )}
      <span>{label}</span>
      {typeof count === 'number' && (
        <span
          className={`ml-1 text-[11px] tabular-nums font-mono opacity-80 ${
            selected ? 'font-bold' : ''
          }`}
        >
          {count}
        </span>
      )}
    </button>
  );
};
