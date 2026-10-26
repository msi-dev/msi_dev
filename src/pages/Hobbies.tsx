import React from 'react';
import { profileData } from '../data/profile.ts';
import { SectionHeader } from '../components/SectionHeader.tsx';
import { AiLogo } from '../components/AiModelLogos.tsx';
import { M3Button } from '../components/M3Button.tsx';
import {
  ExternalLink,
  Github,
  Sparkles,
  Cpu,
  Smartphone,
  Shield,
  Database,
  Terminal,
  Code2,
  Wrench,
  Layers,
  Flame,
  CheckCircle2,
} from 'lucide-react';

export const Hobbies: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-16 pb-20">
      <SectionHeader
        overline="Passions, Technologies & AI Lab"
        title="Hobbies, Technical Pursuits & AI Experience"
        subtitle="Exploring programming, Android development, system architecture, ethical hacking, IoT hardware, and frontier AI model integration."
      />

      {/* AI Experience Showcase */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[var(--md-sys-color-primary-container)] text-[var(--md-sys-color-on-primary-container)] flex items-center justify-center">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-[var(--md-sys-color-on-surface)]">
                AI Models & API Integration Experience
              </h2>
            </div>
          </div>
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[var(--md-sys-color-secondary-container)] text-[var(--md-sys-color-on-secondary-container)] w-fit">
            Expert Prompt Writer & API Support Integrator
          </span>
        </div>

        <p className="text-sm text-[var(--md-sys-color-on-surface-variant)] leading-relaxed max-w-3xl">
          Hands-on practical experience writing structured system instructions, crafting complex reasoning prompts, integrating API keys into modern applications, and orchestrating multi-model pipelines.
        </p>

        {/* AI Model Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {profileData.aiExperience.map((model) => (
            <div
              key={model.id}
              className="p-5 rounded-2xl bg-[var(--md-sys-color-surface-container-low)] border border-[var(--md-sys-color-surface-container-highest)]/80 hover:border-[var(--md-sys-color-primary)]/50 transition-all duration-200 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-[var(--md-sys-color-surface-container)] shrink-0 shadow-xs">
                      <AiLogo logoType={model.logoType} className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-[var(--md-sys-color-on-surface)]">
                        {model.name}
                      </h3>
                      <p className="text-[11px] text-[var(--md-sys-color-outline)]">
                        {model.provider}
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-[var(--md-sys-color-on-surface-variant)] leading-relaxed">
                  {model.description}
                </p>

                <div className="flex flex-wrap gap-1 pt-1">
                  {model.capabilities.map((cap) => (
                    <span
                      key={cap}
                      className="px-2 py-0.5 rounded text-[10px] font-medium bg-[var(--md-sys-color-surface-container-high)] text-[var(--md-sys-color-on-surface-variant)]"
                    >
                      {cap}
                    </span>
                  ))}
                </div>
              </div>

              {/* Real Open Action Button */}
              <div className="pt-3 border-t border-[var(--md-sys-color-surface-container-highest)]/60">
                <a
                  href={model.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 w-full py-2 px-3 rounded-xl text-xs font-semibold bg-[var(--md-sys-color-surface-container)] hover:bg-[var(--md-sys-color-primary)] text-[var(--md-sys-color-on-surface)] hover:text-[var(--md-sys-color-on-primary)] transition-all cursor-pointer shadow-2xs"
                  aria-label={`Open ${model.name} platform`}
                >
                  <span>Open {model.name}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* GitHub Developer Profiles Card */}
      <section className="p-6 sm:p-8 rounded-3xl bg-[var(--md-sys-color-surface-container-low)] border border-[var(--md-sys-color-surface-container-highest)] space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-[var(--md-sys-color-primary)]">
              Open Source & Code Repositories
            </span>
            <h3 className="text-xl font-bold text-[var(--md-sys-color-on-surface)]">
              GitHub Developer Profiles
            </h3>
            <p className="text-xs text-[var(--md-sys-color-on-surface-variant)]">
              Follow and review repositories, scripts, and software experiments across my official handles.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {profileData.devProfiles.map((dev) => (
              <a
                key={dev.username}
                href={dev.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold bg-[var(--md-sys-color-surface-container-high)] hover:bg-[var(--md-sys-color-secondary-container)] text-[var(--md-sys-color-on-surface)] hover:text-[var(--md-sys-color-on-secondary-container)] border border-[var(--md-sys-color-outline-variant)]/60 transition-colors shadow-xs"
              >
                <Github className="w-4 h-4 text-[var(--md-sys-color-primary)]" />
                <span>github.com/{dev.username}</span>
                <ExternalLink className="w-3 h-3 opacity-70" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Core Technical Hobbies Grid */}
      <section className="space-y-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[var(--md-sys-color-secondary-container)] text-[var(--md-sys-color-on-secondary-container)] flex items-center justify-center">
            <Flame className="w-4 h-4" />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-[var(--md-sys-color-on-surface)]">
            Core Engineering & Technical Hobbies
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {profileData.technicalHobbies.map((hobby, idx) => {
            let Icon = Code2;
            if (idx === 0) Icon = Smartphone;
            if (idx === 1) Icon = Database;
            if (idx === 2) Icon = Shield;
            if (idx === 3) Icon = Cpu;

            return (
              <div
                key={hobby.title}
                className="p-6 sm:p-8 rounded-3xl bg-[var(--md-sys-color-surface-container-low)] border border-[var(--md-sys-color-surface-container-highest)]/80 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-2xl bg-[var(--md-sys-color-surface-container)] text-[var(--md-sys-color-primary)]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-[var(--md-sys-color-outline)]">
                        {hobby.category}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-[var(--md-sys-color-on-surface)]">
                        {hobby.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[var(--md-sys-color-on-surface-variant)] leading-relaxed">
                    {hobby.description}
                  </p>
                </div>

                <div className="space-y-2 pt-3 border-t border-[var(--md-sys-color-surface-container-highest)]/60">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[var(--md-sys-color-outline)]">
                    Focus Areas & Tools
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {hobby.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-lg text-xs font-medium bg-[var(--md-sys-color-surface-container-high)] text-[var(--md-sys-color-on-surface)]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Full Experience Stack & Languages Matrix */}
      <section className="p-6 sm:p-10 rounded-3xl bg-[var(--md-sys-color-surface-container-low)] border border-[var(--md-sys-color-surface-container-highest)] space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-[var(--md-sys-color-primary)]">
            Technical Stack Inventory
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-[var(--md-sys-color-on-surface)]">
            Technologies & Scripting Experience
          </h2>
          <p className="text-xs sm:text-sm text-[var(--md-sys-color-on-surface-variant)]">
            Hands-on technical familiarity spanning backend hosting services, modern relational and real-time databases, programming languages, and automation scripts.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-2">
          {/* Databases & Hosting */}
          <div className="p-5 rounded-2xl bg-[var(--md-sys-color-surface-container)] border border-[var(--md-sys-color-surface-container-highest)]/80 space-y-3">
            <div className="flex items-center gap-2 text-[var(--md-sys-color-primary)]">
              <Database className="w-4 h-4" />
              <h3 className="text-xs font-bold uppercase tracking-wider">
                Hosting & Databases
              </h3>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {['Hosting', 'Supabase', 'Firebase', 'Nhost', 'SQL', 'PostgreSQL'].map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-[var(--md-sys-color-surface-container-high)] text-[var(--md-sys-color-on-surface)]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Programming Languages */}
          <div className="p-5 rounded-2xl bg-[var(--md-sys-color-surface-container)] border border-[var(--md-sys-color-surface-container-highest)]/80 space-y-3">
            <div className="flex items-center gap-2 text-[var(--md-sys-color-secondary)]">
              <Code2 className="w-4 h-4" />
              <h3 className="text-xs font-bold uppercase tracking-wider">
                Languages & Frameworks
              </h3>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {['Python', 'Java', 'C++', 'TypeScript', 'JavaScript', 'PHP', 'XML', 'CSS'].map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-[var(--md-sys-color-surface-container-high)] text-[var(--md-sys-color-on-surface)]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Automation & Scripting */}
          <div className="p-5 rounded-2xl bg-[var(--md-sys-color-surface-container)] border border-[var(--md-sys-color-surface-container-highest)]/80 space-y-3">
            <div className="flex items-center gap-2 text-[var(--md-sys-color-tertiary)]">
              <Terminal className="w-4 h-4" />
              <h3 className="text-xs font-bold uppercase tracking-wider">
                Scripting & Automation
              </h3>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {['Shell Script (.sh)', 'Batch Script (.bat)', 'Bash', 'Automation', 'CLI Workflows'].map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-[var(--md-sys-color-surface-container-high)] text-[var(--md-sys-color-on-surface)]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
