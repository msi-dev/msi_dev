import React from 'react';
import { profileData } from '../data/profile.ts';
import { SectionHeader } from '../components/SectionHeader.tsx';
import {
  GraduationCap,
  Award,
  BookOpen,
  Calendar,
  MapPin,
  CheckCircle2,
  Briefcase,
  AlertCircle,
  Stethoscope,
  Languages,
  Clock,
  Sparkles,
} from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-16 pb-20">
      <SectionHeader
        overline="Qualifications & Background"
        title="Education, Training & Experience"
        subtitle="Formal academic degrees, medical nursing clinical background, verified 6-month specialized professional training programs, and practical workplace history."
      />

      {/* Educational Qualifications - Material Design 3 Timeline */}
      <section className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-[var(--md-sys-color-primary-container)] text-[var(--md-sys-color-on-primary-container)] flex items-center justify-center shadow-xs">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-[var(--md-sys-color-on-surface)]">
                Educational Qualifications & Academic Journey
              </h2>
              <p className="text-xs text-[var(--md-sys-color-on-surface-variant)]">
                Chronological academic record with degree concentrations, clinical internship, and coursework.
              </p>
            </div>
          </div>
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[var(--md-sys-color-surface-container-high)] text-[var(--md-sys-color-on-surface)] w-fit">
            3 Academic Programs
          </span>
        </div>

        {/* Vertical M3 Timeline Rail */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-[var(--md-sys-color-surface-container-highest)] space-y-10">
          {profileData.education.map((edu, index) => {
            const isDiscontinued = edu.status === 'Discontinued';

            return (
              <div key={edu.id} className="relative group">
                {/* Timeline Node Icon */}
                <div
                  className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-[var(--md-sys-color-surface)] flex items-center justify-center transition-transform group-hover:scale-110 shadow-xs ${
                    isDiscontinued
                      ? 'bg-[var(--md-sys-color-tertiary-container)] text-[var(--md-sys-color-on-tertiary-container)]'
                      : 'bg-[var(--md-sys-color-primary)] text-[var(--md-sys-color-on-primary)]'
                  }`}
                >
                  {isDiscontinued ? (
                    <Stethoscope className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  ) : (
                    <GraduationCap className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  )}
                </div>

                {/* Content Card */}
                <div className="p-6 sm:p-8 rounded-3xl bg-[var(--md-sys-color-surface-container-low)] border border-[var(--md-sys-color-surface-container-highest)]/80 hover:border-[var(--md-sys-color-primary)]/40 transition-all duration-200 space-y-5">
                  {/* Card Header & Status Badges */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-[var(--md-sys-color-primary)]">
                          {edu.degree}
                        </span>
                        {/* Status Chip */}
                        {isDiscontinued ? (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-500/30">
                            <AlertCircle className="w-3 h-3" />
                            Discontinued / Incomplete
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30">
                            <CheckCircle2 className="w-3 h-3" />
                            Completed
                          </span>
                        )}
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-[var(--md-sys-color-on-surface)]">
                        {edu.institution}
                      </h3>
                    </div>

                    {/* GPA Metric Badge */}
                    {edu.gpa && (
                      <div className="flex flex-col sm:items-end shrink-0">
                        <span className="px-3 py-1 rounded-xl text-xs sm:text-sm font-bold font-mono bg-[var(--md-sys-color-primary-container)] text-[var(--md-sys-color-on-primary-container)]">
                          GPA: {edu.gpa}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Program Metadata & Location */}
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-[var(--md-sys-color-on-surface-variant)]">
                    <span className="font-semibold text-[var(--md-sys-color-on-surface)]">
                      Concentration: {edu.fieldOfStudy}
                    </span>
                    {edu.board && (
                      <>
                        <span className="text-[var(--md-sys-color-outline)]">·</span>
                        <span>Board: {edu.board}</span>
                      </>
                    )}
                    {edu.durationYears && (
                      <>
                        <span className="text-[var(--md-sys-color-outline)]">·</span>
                        <span className="font-medium text-[var(--md-sys-color-primary)]">
                          {edu.durationYears}
                        </span>
                      </>
                    )}
                    <span className="text-[var(--md-sys-color-outline)]">·</span>
                    <span className="inline-flex items-center gap-1 text-[var(--md-sys-color-outline)]">
                      <Calendar className="w-3.5 h-3.5" />
                      {edu.startDate} – {edu.endDate}
                    </span>
                    <span className="text-[var(--md-sys-color-outline)]">·</span>
                    <span className="inline-flex items-center gap-1 text-[var(--md-sys-color-outline)]">
                      <MapPin className="w-3.5 h-3.5" />
                      {edu.location}
                    </span>
                  </div>

                  {/* Overview Description */}
                  <p className="text-xs sm:text-sm text-[var(--md-sys-color-on-surface-variant)] leading-relaxed">
                    {edu.description}
                  </p>

                  {/* Hospital Clinical Internship Highlight (for TMSS Nursing) */}
                  {edu.internshipExperience && (
                    <div className="p-4 rounded-2xl bg-[var(--md-sys-color-surface-container)] border border-[var(--md-sys-color-surface-container-highest)] space-y-1.5">
                      <div className="flex items-center gap-2 text-xs font-bold text-[var(--md-sys-color-primary)] uppercase tracking-wider">
                        <Stethoscope className="w-4 h-4" />
                        <span>Hospital Clinical & Patient Care Experience</span>
                      </div>
                      <p className="text-xs sm:text-sm text-[var(--md-sys-color-on-surface)] font-medium">
                        {edu.internshipExperience}
                      </p>
                    </div>
                  )}

                  {/* Year-by-Year Subjects (M3 Chips) */}
                  {edu.yearSubjects && edu.yearSubjects.length > 0 && (
                    <div className="space-y-3 pt-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-[var(--md-sys-color-outline)]">
                        Curriculum Coursework & Subjects Studied
                      </span>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {edu.yearSubjects.map((yr) => (
                          <div
                            key={yr.yearName}
                            className="p-4 rounded-2xl bg-[var(--md-sys-color-surface-container)] border border-[var(--md-sys-color-surface-container-highest)]/80 space-y-2.5"
                          >
                            <div className="flex items-center gap-1.5 text-xs font-bold text-[var(--md-sys-color-on-surface)]">
                              <BookOpen className="w-3.5 h-3.5 text-[var(--md-sys-color-primary)]" />
                              <span>{yr.yearName}</span>
                            </div>
                            <div className="flex flex-wrap gap-1.5">
                              {yr.subjects.map((subj) => (
                                <span
                                  key={subj}
                                  className="px-2.5 py-1 rounded-lg text-xs font-medium bg-[var(--md-sys-color-surface-container-high)] text-[var(--md-sys-color-on-surface)]"
                                >
                                  {subj}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Key Achievements Bullet Points */}
                  {edu.achievements && edu.achievements.length > 0 && (
                    <div className="pt-2 border-t border-[var(--md-sys-color-surface-container-highest)]/60 space-y-2">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-[var(--md-sys-color-outline)]">
                        Program Highlights & Academic Milestones
                      </span>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {edu.achievements.map((ach, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-xs text-[var(--md-sys-color-on-surface-variant)]"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-[var(--md-sys-color-primary)] shrink-0 mt-0.5" />
                            <span>{ach}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Professional Employment History */}
      <section className="space-y-6">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-full bg-[var(--md-sys-color-secondary-container)] text-[var(--md-sys-color-on-secondary-container)] flex items-center justify-center shadow-xs">
            <Briefcase className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-[var(--md-sys-color-on-surface)]">
              Professional Employment History
            </h2>
            <p className="text-xs text-[var(--md-sys-color-on-surface-variant)]">
              Hands-on commercial design and computerized data management roles.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {profileData.employment.map((job) => (
            <div
              key={job.id}
              className="p-6 sm:p-8 rounded-3xl bg-[var(--md-sys-color-surface-container-low)] border border-[var(--md-sys-color-surface-container-highest)]/80 space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                <div className="space-y-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[var(--md-sys-color-primary)]">
                    {job.position}
                  </span>
                  <h3 className="text-xl font-bold text-[var(--md-sys-color-on-surface)]">
                    {job.company}
                  </h3>
                </div>

                <div className="flex flex-col sm:items-end gap-1 text-xs text-[var(--md-sys-color-outline)]">
                  <span className="inline-flex items-center gap-1 font-mono">
                    <Calendar className="w-3.5 h-3.5" />
                    {job.period}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {job.location}
                  </span>
                </div>
              </div>

              <p className="text-sm text-[var(--md-sys-color-on-surface-variant)] leading-relaxed">
                {job.description}
              </p>

              <div className="pt-3 border-t border-[var(--md-sys-color-surface-container-highest)]/60 space-y-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-[var(--md-sys-color-on-surface)]">
                  Key Responsibilities & Deliverables
                </span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {job.responsibilities.map((resp, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-xs text-[var(--md-sys-color-on-surface-variant)]"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[var(--md-sys-color-primary)] shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Professional Training Section */}
      <section className="space-y-6">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-full bg-[var(--md-sys-color-tertiary-container)] text-[var(--md-sys-color-on-tertiary-container)] flex items-center justify-center shadow-xs">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-[var(--md-sys-color-on-surface)]">
              Professional Training & Certified Courses
            </h2>
            <p className="text-xs text-[var(--md-sys-color-on-surface-variant)]">
              Intensive, verified institutional training courses in graphic design, computer operations, and digital marketing.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {profileData.training.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl bg-[var(--md-sys-color-surface-container-low)] border border-[var(--md-sys-color-surface-container-highest)]/80 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[var(--md-sys-color-secondary-container)] text-[var(--md-sys-color-on-secondary-container)]">
                    {item.duration || '6 Months'}
                  </span>
                  <span className="text-xs font-mono text-[var(--md-sys-color-outline)]">
                    Year {item.issueDate}
                  </span>
                </div>

                <h3 className="text-base font-bold text-[var(--md-sys-color-on-surface)]">
                  {item.title}
                </h3>
                <p className="text-xs font-medium text-[var(--md-sys-color-primary)]">
                  {item.issuer}
                </p>

                {item.location && (
                  <p className="text-xs text-[var(--md-sys-color-outline)] flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {item.location}
                  </p>
                )}
              </div>

              <div className="space-y-2 pt-3 border-t border-[var(--md-sys-color-surface-container-highest)]/60">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[var(--md-sys-color-outline)]">
                  Core Modules & Tools
                </span>
                <div className="flex flex-wrap gap-1">
                  {item.skillsLearned.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 rounded text-[11px] bg-[var(--md-sys-color-surface-container-high)] text-[var(--md-sys-color-on-surface-variant)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Language Proficiencies Showcase */}
      <section className="space-y-6">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-full bg-[var(--md-sys-color-primary-container)] text-[var(--md-sys-color-on-primary-container)] flex items-center justify-center shadow-xs">
            <Languages className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-[var(--md-sys-color-on-surface)]">
              Language Proficiencies
            </h2>
            <p className="text-xs text-[var(--md-sys-color-on-surface-variant)]">
              Multilingual communication capabilities across international and regional dialects.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {profileData.languages.map((lang) => (
            <div
              key={lang.language}
              className="p-5 rounded-2xl bg-[var(--md-sys-color-surface-container-low)] border border-[var(--md-sys-color-surface-container-highest)]/80 flex flex-col justify-between space-y-3"
            >
              <div className="space-y-1.5">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-base font-bold text-[var(--md-sys-color-on-surface)]">
                    {lang.language}
                  </h3>
                  {lang.language === 'Gulf Arabic' && (
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-700 dark:text-amber-300">
                      Spoken Only
                    </span>
                  )}
                </div>
                <span className="text-xs font-semibold text-[var(--md-sys-color-primary)]">
                  {lang.proficiency}
                </span>
              </div>

              <p className="text-xs text-[var(--md-sys-color-on-surface-variant)] pt-2 border-t border-[var(--md-sys-color-surface-container-highest)]/60">
                {lang.skills}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
