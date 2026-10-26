import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { profileData } from '../data/profile.ts';
import { ProjectItem } from '../types/profile.ts';
import { M3Button } from '../components/M3Button.tsx';
import { ProjectCard } from '../components/ProjectCard.tsx';
import { ProjectModal } from '../components/ProjectModal.tsx';
import { ResumeModal } from '../components/ResumeModal.tsx';
import { SectionHeader } from '../components/SectionHeader.tsx';
import {
  ArrowRight,
  FileText,
  Sparkles,
  Layers,
  GraduationCap,
  Award,
  CheckCircle2,
  Mail,
  MapPin,
  Cpu,
  ShieldCheck,
} from 'lucide-react';

export const Home: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [resumeOpen, setResumeOpen] = useState(false);

  const featuredProjects = profileData.projects.filter((p) => p.featured);
  const featuredSkills = profileData.skills.filter((s) => s.featured);

  return (
    <div className="space-y-20 sm:space-y-28 pb-16">
      {/* Hero Section */}
      <section className="pt-6 sm:pt-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Col: Typographic Hierarchy */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[var(--md-sys-color-secondary-container)] text-[var(--md-sys-color-on-secondary-container)]">
                <span>{profileData.availability}</span>
              </div>

              <div className="space-y-3">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--md-sys-color-on-surface)] leading-[1.1]">
                  {profileData.name}
                </h1>
                <p className="text-xl sm:text-2xl font-semibold text-[var(--md-sys-color-primary)]">
                  {profileData.title}
                </p>
              </div>

              <p className="text-base sm:text-lg text-[var(--md-sys-color-on-surface-variant)] leading-relaxed max-w-xl">
                {profileData.tagline}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <M3Button
                  to="/projects"
                  variant="filled"
                  size="lg"
                  icon={<ArrowRight className="w-4 h-4" />}
                  iconPosition="end"
                >
                  Explore My Work
                </M3Button>

                <M3Button to="/contact" variant="tonal" size="lg">
                  Contact Me
                </M3Button>

                <M3Button
                  variant="outlined"
                  size="lg"
                  onClick={() => setResumeOpen(true)}
                  icon={<FileText className="w-4 h-4" />}
                >
                  View Résumé
                </M3Button>
              </div>

              <div className="flex items-center gap-2 text-xs text-[var(--md-sys-color-outline)] pt-2">
                <MapPin className="w-3.5 h-3.5" />
                <span>{profileData.location}</span>
              </div>
            </div>

            {/* Right Col: Softly Rounded Presentation Portrait */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm aspect-square rounded-3xl bg-[var(--md-sys-color-surface-container)] p-3 shadow-[var(--md-elevation-1)]">
                <div className="w-full h-full rounded-2xl overflow-hidden bg-[var(--md-sys-color-surface-container-high)]">
                  <img
                    src={profileData.profileImage}
                    alt={profileData.name}
                    className="w-full h-full object-cover object-top"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Full-width Metric Strip below hero */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 sm:mt-16 pt-8 border-t border-[var(--md-sys-color-surface-container-highest)]">
            {profileData.stats.map((stat, i) => (
              <div
                key={i}
                className="p-4 sm:p-5 rounded-2xl bg-[var(--md-sys-color-surface-container-low)] space-y-1"
              >
                <div className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[var(--md-sys-color-primary)] font-mono tabular-nums">
                  {stat.value}
                </div>
                <div className="text-xs font-semibold text-[var(--md-sys-color-on-surface)]">
                  {stat.label}
                </div>
                {stat.description && (
                  <div className="text-[11px] text-[var(--md-sys-color-on-surface-variant)] line-clamp-2">
                    {stat.description}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Overview Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-[var(--md-sys-color-surface-container-low)] space-y-6">
          <SectionHeader
            overline="Background & Focus"
            title="Engineering Philosophy & Purpose"
            subtitle="Building enduring digital infrastructure through empathetic design and distributed reliability."
            className="mb-6!"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            {profileData.philosophy.map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-[var(--md-sys-color-surface-container)] border border-[var(--md-sys-color-surface-container-highest)]/60 space-y-3"
              >
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[var(--md-sys-color-primary-container)] text-[var(--md-sys-color-on-primary-container)]">
                  {i === 0 ? (
                    <Layers className="w-5 h-5" />
                  ) : i === 1 ? (
                    <Cpu className="w-5 h-5" />
                  ) : (
                    <ShieldCheck className="w-5 h-5" />
                  )}
                </div>
                <h3 className="text-base font-bold text-[var(--md-sys-color-on-surface)]">
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--md-sys-color-on-surface-variant)] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          overline="Selected Case Studies"
          title="Featured Engineering Projects"
          subtitle="Production systems, developer tooling, and native mobile applications built with Google design principles."
          action={
            <M3Button
              to="/projects"
              variant="text"
              icon={<ArrowRight className="w-4 h-4" />}
              iconPosition="end"
            >
              View All Projects
            </M3Button>
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={(p) => setSelectedProject(p)}
            />
          ))}
        </div>
      </section>

      {/* Featured Skills Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-[var(--md-sys-color-surface-container-low)] space-y-8">
          <SectionHeader
            overline="Core Proficiencies"
            title="Technical Expertise Highlights"
            subtitle="Specialized capabilities spanning modern frontends, reactive mobile, and distributed cloud services."
            action={
              <M3Button
                to="/skills"
                variant="outlined"
                size="sm"
                icon={<ArrowRight className="w-3.5 h-3.5" />}
                iconPosition="end"
              >
                Explore All Skills
              </M3Button>
            }
            className="mb-4!"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredSkills.map((skill) => (
              <div
                key={skill.id}
                className="p-5 rounded-2xl bg-[var(--md-sys-color-surface-container)] border border-[var(--md-sys-color-surface-container-highest)]/80 flex flex-col justify-between space-y-3"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-sm font-bold text-[var(--md-sys-color-on-surface)]">
                      {skill.name}
                    </span>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-[var(--md-sys-color-secondary-container)] text-[var(--md-sys-color-on-secondary-container)]">
                      {skill.proficiency}
                    </span>
                  </div>
                  <p className="text-xs text-[var(--md-sys-color-on-surface-variant)] line-clamp-2">
                    {skill.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-[var(--md-sys-color-outline-variant)]/30 text-[11px] text-[var(--md-sys-color-outline)]">
                  <span>{skill.category}</span>
                  {skill.yearsOfExperience && (
                    <span className="font-mono">{skill.yearsOfExperience} yrs exp</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Preview & Certifications */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Education Preview */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-[var(--md-sys-color-surface-container-low)] space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-[var(--md-sys-color-primary)]">
                  Academic Foundation
                </span>
                <h3 className="text-xl font-bold text-[var(--md-sys-color-on-surface)]">
                  Education Overview
                </h3>
              </div>
              <Link
                to="/education"
                className="text-xs font-medium text-[var(--md-sys-color-primary)] hover:underline inline-flex items-center gap-1"
              >
                <span>Full Timeline</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="space-y-4">
              {profileData.education.map((edu) => (
                <div
                  key={edu.id}
                  className="p-4 rounded-2xl bg-[var(--md-sys-color-surface-container)] border border-[var(--md-sys-color-surface-container-highest)]/60 space-y-2"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-sm font-bold text-[var(--md-sys-color-on-surface)]">
                          {edu.degree}
                        </h4>
                        {edu.status === 'Discontinued' && (
                          <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-700 dark:text-amber-300">
                            Discontinued
                          </span>
                        )}
                      </div>
                      <p className="text-xs font-medium text-[var(--md-sys-color-primary)]">
                        {edu.institution}
                      </p>
                    </div>
                    <span className="text-xs font-mono text-[var(--md-sys-color-on-surface-variant)] whitespace-nowrap">
                      {edu.startDate} - {edu.endDate}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-[var(--md-sys-color-on-surface-variant)]">
                    <span>{edu.fieldOfStudy}</span>
                    {edu.gpa && (
                      <span className="font-mono font-semibold text-[var(--md-sys-color-primary)]">
                        GPA {edu.gpa.split('/')[0].trim()}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Preview */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-[var(--md-sys-color-surface-container-low)] space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-[var(--md-sys-color-primary)]">
                  Verified Credentials
                </span>
                <h3 className="text-xl font-bold text-[var(--md-sys-color-on-surface)]">
                  Certifications
                </h3>
              </div>
              <Link
                to="/education"
                className="text-xs font-medium text-[var(--md-sys-color-primary)] hover:underline inline-flex items-center gap-1"
              >
                <span>View All</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="space-y-3">
              {profileData.training.slice(0, 3).map((item) => (
                <div
                  key={item.id}
                  className="p-4 rounded-2xl bg-[var(--md-sys-color-surface-container)] border border-[var(--md-sys-color-surface-container-highest)]/60 flex items-start gap-3"
                >
                  <Award className="w-5 h-5 text-[var(--md-sys-color-primary)] shrink-0 mt-0.5" />
                  <div className="space-y-1 min-w-0">
                    <h4 className="text-xs font-bold text-[var(--md-sys-color-on-surface)] truncate">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-[var(--md-sys-color-on-surface-variant)]">
                      {item.issuer} · {item.issueDate}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Card */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-[var(--md-sys-color-surface-container-high)] p-8 sm:p-12 border border-[var(--md-sys-color-surface-container-highest)]">
          <div className="max-w-2xl space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-[var(--md-sys-color-primary)]">
              Let's Collaborate
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--md-sys-color-on-surface)]">
              Looking for graphic design, computerized office operations, or tech skills?
            </h2>
            <p className="text-base text-[var(--md-sys-color-on-surface-variant)] leading-relaxed">
              Available for full-time professional positions, corporate office management, commercial packaging design, and tech integrations.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <M3Button to="/contact" variant="filled" size="md" icon={<Mail className="w-4 h-4" />}>
                Start a Conversation
              </M3Button>
              <M3Button
                href={`mailto:${profileData.email}`}
                variant="outlined"
                size="md"
              >
                Direct Email ({profileData.email})
              </M3Button>
              <M3Button to="/hobbies" variant="tonal" size="md">
                Explore Hobbies & AI Lab
              </M3Button>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />

      {/* Résumé Modal */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </div>
  );
};
