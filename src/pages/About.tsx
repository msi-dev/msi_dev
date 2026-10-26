import React, { useState } from 'react';
import { profileData } from '../data/profile.ts';
import { SectionHeader } from '../components/SectionHeader.tsx';
import { M3Button } from '../components/M3Button.tsx';
import { ResumeModal } from '../components/ResumeModal.tsx';
import {
  Mail,
  MapPin,
  Clock,
  Compass,
  Heart,
  FileText,
  CheckCircle2,
  Phone,
  Languages,
  UserCheck,
  Target,
  Palette,
  ExternalLink,
} from 'lucide-react';

export const About: React.FC = () => {
  const [resumeOpen, setResumeOpen] = useState(false);
  const pd = profileData.personalDetails;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-16 pb-20">
      <SectionHeader
        overline="Personal & Professional Profile"
        title={`About ${profileData.name}`}
        subtitle="Professional background, career objective, verified personal credentials, and language proficiencies."
      />

      {/* Main Split: Bio and Profile Presentation */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Portrait & Key Facts */}
        <div className="lg:col-span-4 space-y-6">
          <div className="rounded-3xl bg-[var(--md-sys-color-surface-container-low)] p-3 border border-[var(--md-sys-color-surface-container-highest)]">
            <div className="aspect-square w-full rounded-2xl overflow-hidden bg-[var(--md-sys-color-surface-container-high)]">
              <img
                src={profileData.profileImage}
                alt={profileData.name}
                className="w-full h-full object-cover object-top"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            </div>
            <div className="p-4 space-y-2">
              <h3 className="text-lg font-bold text-[var(--md-sys-color-on-surface)]">
                {profileData.name}
              </h3>
              <p className="text-xs font-medium text-[var(--md-sys-color-primary)]">
                {profileData.title}
              </p>
              <div className="pt-2 border-t border-[var(--md-sys-color-outline-variant)]/40 space-y-2 text-xs text-[var(--md-sys-color-on-surface-variant)]">
                <div className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[var(--md-sys-color-outline)] shrink-0 mt-0.5" />
                  <span>{profileData.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[var(--md-sys-color-outline)] shrink-0" />
                  <a href={`tel:${profileData.phone}`} className="hover:underline">
                    {profileData.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[var(--md-sys-color-outline)] shrink-0" />
                  <a href={`mailto:${profileData.email}`} className="hover:underline truncate">
                    {profileData.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Direct Action Card */}
          <div className="p-5 rounded-2xl bg-[var(--md-sys-color-surface-container-low)] border border-[var(--md-sys-color-surface-container-highest)] space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[var(--md-sys-color-on-surface)]">
              Curriculum Vitae
            </span>
            <p className="text-xs text-[var(--md-sys-color-on-surface-variant)] leading-relaxed">
              Access the complete printable CV with detailed employment dates, education, training records, and personal biodata.
            </p>
            <M3Button
              variant="filled"
              size="sm"
              onClick={() => setResumeOpen(true)}
              className="w-full"
              icon={<FileText className="w-3.5 h-3.5" />}
            >
              View & Print Full CV
            </M3Button>
          </div>

          {/* Languages Widget */}
          <div className="p-5 rounded-2xl bg-[var(--md-sys-color-surface-container-low)] border border-[var(--md-sys-color-surface-container-highest)] space-y-3">
            <div className="flex items-center gap-2">
              <Languages className="w-4 h-4 text-[var(--md-sys-color-primary)]" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[var(--md-sys-color-on-surface)]">
                Language Proficiency
              </span>
            </div>
            <div className="space-y-3">
              {profileData.languages.map((lang) => (
                <div key={lang.language} className="space-y-0.5 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-[var(--md-sys-color-on-surface)]">
                      {lang.language}
                    </span>
                    <span className="text-[11px] font-semibold text-[var(--md-sys-color-primary)]">
                      {lang.proficiency}
                    </span>
                  </div>
                  <p className="text-[11px] text-[var(--md-sys-color-on-surface-variant)]">
                    {lang.skills}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Detailed Narrative, Career Objective, and Personal Details */}
        <div className="lg:col-span-8 space-y-8">
          {/* Career Objective Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[var(--md-sys-color-surface-container-low)] border border-[var(--md-sys-color-surface-container-highest)] space-y-3">
            <div className="flex items-center gap-2">
              <Target className="w-5 h-5 text-[var(--md-sys-color-primary)]" />
              <h3 className="text-base font-bold text-[var(--md-sys-color-on-surface)]">
                Career Objective
              </h3>
            </div>
            <blockquote className="text-sm sm:text-base text-[var(--md-sys-color-on-surface-variant)] leading-relaxed italic border-l-2 border-[var(--md-sys-color-primary)] pl-4 py-1">
              "To work in a challenging environment, achieve skills in the respective field and work for the simultaneous progression of organization and myself."
            </blockquote>
          </div>

          {/* Narrative & Background */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[var(--md-sys-color-surface-container-low)] border border-[var(--md-sys-color-surface-container-highest)] space-y-4">
            <h3 className="text-lg font-bold text-[var(--md-sys-color-on-surface)]">
              Professional Overview
            </h3>
            <div className="space-y-3 text-sm text-[var(--md-sys-color-on-surface-variant)] leading-relaxed">
              {profileData.fullBio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="pt-4 border-t border-[var(--md-sys-color-surface-container-highest)]/80 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-[var(--md-sys-color-on-surface)]">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[var(--md-sys-color-primary)] shrink-0" />
                <span>Gazi Laboratories Experience</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[var(--md-sys-color-primary)] shrink-0" />
                <span>Current Media Experience</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[var(--md-sys-color-primary)] shrink-0" />
                <span>HSC (Business) & SSC (Science)</span>
              </div>
            </div>
          </div>

          {/* Personal Details Biodata Section */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[var(--md-sys-color-surface-container-low)] border border-[var(--md-sys-color-surface-container-highest)] space-y-5">
            <div className="flex items-center gap-2">
              <UserCheck className="w-5 h-5 text-[var(--md-sys-color-primary)]" />
              <h3 className="text-lg font-bold text-[var(--md-sys-color-on-surface)]">
                Personal Biodata & Details
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3.5 gap-x-6 text-xs">
              <div className="flex items-center justify-between border-b border-[var(--md-sys-color-surface-container-highest)] pb-2">
                <span className="text-[var(--md-sys-color-outline)] font-medium">Father's Name</span>
                <span className="font-semibold text-[var(--md-sys-color-on-surface)]">{pd.fatherName}</span>
              </div>
              <div className="flex items-center justify-between border-b border-[var(--md-sys-color-surface-container-highest)] pb-2">
                <span className="text-[var(--md-sys-color-outline)] font-medium">Mother's Name</span>
                <span className="font-semibold text-[var(--md-sys-color-on-surface)]">{pd.motherName}</span>
              </div>
              <div className="flex items-center justify-between border-b border-[var(--md-sys-color-surface-container-highest)] pb-2">
                <span className="text-[var(--md-sys-color-outline)] font-medium">Date of Birth</span>
                <span className="font-semibold text-[var(--md-sys-color-on-surface)] font-mono">{pd.dateOfBirth}</span>
              </div>
              <div className="flex items-center justify-between border-b border-[var(--md-sys-color-surface-container-highest)] pb-2">
                <span className="text-[var(--md-sys-color-outline)] font-medium">Gender</span>
                <span className="font-semibold text-[var(--md-sys-color-on-surface)]">{pd.gender}</span>
              </div>
              <div className="flex items-center justify-between border-b border-[var(--md-sys-color-surface-container-highest)] pb-2">
                <span className="text-[var(--md-sys-color-outline)] font-medium">Marital Status</span>
                <span className="font-semibold text-[var(--md-sys-color-on-surface)]">{pd.maritalStatus}</span>
              </div>
              <div className="flex items-center justify-between border-b border-[var(--md-sys-color-surface-container-highest)] pb-2">
                <span className="text-[var(--md-sys-color-outline)] font-medium">Nationality</span>
                <span className="font-semibold text-[var(--md-sys-color-on-surface)]">{pd.nationality}</span>
              </div>
              <div className="flex items-center justify-between border-b border-[var(--md-sys-color-surface-container-highest)] pb-2">
                <span className="text-[var(--md-sys-color-outline)] font-medium">National ID (NID)</span>
                <span className="font-semibold text-[var(--md-sys-color-on-surface)] font-mono">{pd.nid}</span>
              </div>
              <div className="flex items-center justify-between border-b border-[var(--md-sys-color-surface-container-highest)] pb-2">
                <span className="text-[var(--md-sys-color-outline)] font-medium">Religion</span>
                <span className="font-semibold text-[var(--md-sys-color-on-surface)]">{pd.religion}</span>
              </div>
              <div className="flex items-center justify-between border-b border-[var(--md-sys-color-surface-container-highest)] pb-2">
                <span className="text-[var(--md-sys-color-outline)] font-medium">Blood Group</span>
                <span className="font-semibold text-[var(--md-sys-color-primary)]">{pd.bloodGroup}</span>
              </div>
              <div className="flex items-center justify-between border-b border-[var(--md-sys-color-surface-container-highest)] pb-2">
                <span className="text-[var(--md-sys-color-outline)] font-medium">Height & Weight</span>
                <span className="font-semibold text-[var(--md-sys-color-on-surface)]">{pd.height}, {pd.weight}</span>
              </div>
            </div>

            {/* Address */}
            <div className="pt-3 border-t border-[var(--md-sys-color-surface-container-highest)] text-xs space-y-1.5">
              <span className="font-semibold text-[var(--md-sys-color-on-surface)]">
                Permanent & Present Address:
              </span>
              <p className="text-[var(--md-sys-color-on-surface-variant)] leading-relaxed">
                {pd.village}, {pd.postOffice}, {pd.policeStation}, {pd.district}, Bangladesh.
              </p>
            </div>
          </div>

          {/* Philosophy / Work Values */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Compass className="w-5 h-5 text-[var(--md-sys-color-primary)]" />
              <h3 className="text-lg font-bold text-[var(--md-sys-color-on-surface)]">
                Work Values & Principles
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {profileData.philosophy.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[var(--md-sys-color-surface-container-low)] border border-[var(--md-sys-color-surface-container-highest)] space-y-2"
                >
                  <h4 className="text-xs font-bold text-[var(--md-sys-color-on-surface)]">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[var(--md-sys-color-on-surface-variant)] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Hobbies & Interests */}
          <div className="p-6 rounded-3xl bg-[var(--md-sys-color-surface-container-low)] border border-[var(--md-sys-color-surface-container-highest)] space-y-3">
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-[var(--md-sys-color-error)]" />
              <h3 className="text-base font-bold text-[var(--md-sys-color-on-surface)]">
                Personal Interests & Hobbies
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {profileData.hobbies.map((hobby) => (
                <span
                  key={hobby}
                  className="px-3 py-1.5 rounded-full text-xs font-medium bg-[var(--md-sys-color-surface-container)] text-[var(--md-sys-color-on-surface)] border border-[var(--md-sys-color-surface-container-highest)]"
                >
                  {hobby}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </div>
  );
};
