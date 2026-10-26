import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Flame, Sparkles, GraduationCap, User } from 'lucide-react';

const BOTTOM_NAV_ITEMS = [
  { label: 'Home', to: '/', icon: Home },
  { label: 'Hobbies', to: '/hobbies', icon: Flame },
  { label: 'Skills', to: '/skills', icon: Sparkles },
  { label: 'Education', to: '/education', icon: GraduationCap },
  { label: 'About', to: '/about', icon: User },
];

export const MobileBottomNav: React.FC = () => {
  return (
    <nav
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[var(--md-sys-color-surface-container)]/95 backdrop-blur-md border-t border-[var(--md-sys-color-surface-container-highest)] px-2 py-1.5 flex items-center justify-around"
      aria-label="Mobile navigation"
    >
      {BOTTOM_NAV_ITEMS.map((item) => {
        const Icon = item.icon;
        return (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === '/'}
            className={({ isActive }) =>
              `flex flex-col items-center justify-center min-w-[56px] py-1 transition-colors select-none focus-visible:outline-none ${
                isActive
                  ? 'text-[var(--md-sys-color-on-surface)]'
                  : 'text-[var(--md-sys-color-on-surface-variant)] hover:text-[var(--md-sys-color-on-surface)]'
              }`
            }
          >
            {({ isActive }) => (
              <>
                <div
                  className={`flex items-center justify-center w-12 h-7 rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-[var(--md-sys-color-secondary-container)] text-[var(--md-sys-color-on-secondary-container)]'
                      : 'bg-transparent'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <span
                  className={`text-[11px] mt-0.5 tracking-tight ${
                    isActive ? 'font-semibold text-[var(--md-sys-color-primary)]' : 'font-normal'
                  }`}
                >
                  {item.label}
                </span>
              </>
            )}
          </NavLink>
        );
      })}
    </nav>
  );
};
