import React from 'react';
import { Link } from 'react-router-dom';
import { profileData } from '../data/profile.ts';
import { Github, Linkedin, Twitter, Mail, ArrowUp } from 'lucide-react';

export const SiteFooter: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[var(--md-sys-color-surface-container-low)] border-t border-[var(--md-sys-color-surface-container-highest)] pt-12 pb-24 md:pb-12 text-[var(--md-sys-color-on-surface-variant)] transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10">
          {/* Identity col */}
          <div className="md:col-span-2 space-y-3">
            <span className="text-base font-bold text-[var(--md-sys-color-on-surface)] tracking-tight">
              {profileData.name}
            </span>
            <p className="text-sm max-w-md leading-relaxed text-[var(--md-sys-color-on-surface-variant)]">
              {profileData.tagline}
            </p>
            <div className="flex items-center gap-3 pt-2">
              {profileData.socialLinks.map((s) => {
                let Icon = Mail;
                if (s.platform === 'github') Icon = Github;
                if (s.platform === 'linkedin') Icon = Linkedin;
                if (s.platform === 'x') Icon = Twitter;

                return (
                  <a
                    key={s.url}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-9 h-9 rounded-full bg-[var(--md-sys-color-surface-container)] hover:bg-[var(--md-sys-color-secondary-container)] text-[var(--md-sys-color-on-surface-variant)] hover:text-[var(--md-sys-color-on-secondary-container)] transition-colors"
                    aria-label={s.label}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick links col */}
          <div className="space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[var(--md-sys-color-on-surface)]">
              Navigation
            </span>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-[var(--md-sys-color-primary)] transition-colors">
                  Overview
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-[var(--md-sys-color-primary)] transition-colors">
                  Featured Projects
                </Link>
              </li>
              <li>
                <Link to="/skills" className="hover:text-[var(--md-sys-color-primary)] transition-colors">
                  Technical Expertise
                </Link>
              </li>
              <li>
                <Link to="/education" className="hover:text-[var(--md-sys-color-primary)] transition-colors">
                  Education & Training
                </Link>
              </li>
              <li>
                <Link to="/hobbies" className="hover:text-[var(--md-sys-color-primary)] transition-colors">
                  Hobbies & AI Lab
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[var(--md-sys-color-primary)] transition-colors">
                  About Me
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Back to Top */}
          <div className="space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[var(--md-sys-color-on-surface)]">
              Connect
            </span>
            <p className="text-sm">
              {profileData.location}
            </p>
            <Link
              to="/contact"
              className="inline-block text-sm font-medium text-[var(--md-sys-color-primary)] hover:underline"
            >
              {profileData.email}
            </Link>
            <div className="pt-2">
              <button
                type="button"
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--md-sys-color-on-surface-variant)] hover:text-[var(--md-sys-color-primary)] transition-colors cursor-pointer py-1"
              >
                <ArrowUp className="w-3.5 h-3.5" /> Back to top
              </button>
            </div>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-6 border-t border-[var(--md-sys-color-outline-variant)]/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} {profileData.name}. All rights reserved.</p>
          <p className="text-[var(--md-sys-color-outline)]">
            Designed with Google Material Design 3 guidelines.
          </p>
        </div>
      </div>
    </footer>
  );
};
