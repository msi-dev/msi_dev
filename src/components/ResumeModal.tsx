import React, { useEffect } from 'react';
import { profileData } from '../data/profile.ts';
import { X, Printer, Mail, MapPin, Phone, Globe, CheckCircle2, Briefcase, GraduationCap, Award } from 'lucide-react';
import { M3Button } from './M3Button.tsx';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const pd = profileData.personalDetails;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-xs animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-[var(--md-sys-color-surface-container-lowest)] rounded-3xl shadow-[var(--md-elevation-3)] border border-[var(--md-sys-color-surface-container-highest)] overflow-hidden">
        {/* Top toolbar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--md-sys-color-surface-container-highest)] bg-[var(--md-sys-color-surface-container-low)] shrink-0 print:hidden">
          <span className="text-sm font-semibold text-[var(--md-sys-color-on-surface)]">
            Curriculum Vitae — {profileData.name}
          </span>
          <div className="flex items-center gap-2">
            <M3Button
              variant="tonal"
              size="sm"
              onClick={handlePrint}
              icon={<Printer className="w-3.5 h-3.5" />}
            >
              Print / Save as PDF
            </M3Button>
            <button
              type="button"
              onClick={onClose}
              className="flex items-center justify-center w-8 h-8 rounded-full text-[var(--md-sys-color-on-surface-variant)] hover:bg-[var(--md-sys-color-surface-container-high)]"
              aria-label="Close résumé modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Document */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-7 print:p-0 print:m-0 text-[var(--md-sys-color-on-surface)]">
          {/* Header */}
          <div className="border-b-2 border-[var(--md-sys-color-primary)] pb-5 space-y-2">
            <h1 id="resume-modal-title" className="text-3xl font-extrabold tracking-tight text-[var(--md-sys-color-on-surface)] uppercase">
              {profileData.name}
            </h1>
            <p className="text-base font-semibold text-[var(--md-sys-color-primary)]">
              {profileData.title}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[var(--md-sys-color-on-surface-variant)] pt-2">
              <span className="flex items-start gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[var(--md-sys-color-primary)] shrink-0 mt-0.5" />
                <span>{pd.village}, {pd.postOffice}, {pd.policeStation}, {pd.district}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[var(--md-sys-color-primary)] shrink-0" />
                <span>Contact: {pd.contactNumber}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[var(--md-sys-color-primary)] shrink-0" />
                <span>Email: {profileData.email}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-[var(--md-sys-color-primary)] shrink-0" />
                <span>Nationality: {pd.nationality}</span>
              </span>
            </div>
          </div>

          {/* Career Objective */}
          <div className="space-y-1.5">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[var(--md-sys-color-primary)]">
              Career Objective
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed text-[var(--md-sys-color-on-surface)] bg-[var(--md-sys-color-surface-container)] p-3 rounded-xl border border-[var(--md-sys-color-surface-container-highest)]/80 italic">
              "To work in a challenging environment, achieve skills in the respective field and work for the simultaneous progression of organization and myself."
            </p>
          </div>

          {/* Career Summary */}
          <div className="space-y-1.5">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[var(--md-sys-color-primary)]">
              Career Summary
            </h2>
            <ul className="space-y-1 text-xs text-[var(--md-sys-color-on-surface)]">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[var(--md-sys-color-primary)] shrink-0 mt-0.5" />
                <span>Working experience as a Graphic Designer at Gazi Laboratories Unani Bangladesh.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[var(--md-sys-color-primary)] shrink-0 mt-0.5" />
                <span>Working experience as a Computer Operator at Current Media.</span>
              </li>
            </ul>
          </div>

          {/* Employment History */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[var(--md-sys-color-primary)]">
              Employment History
            </h2>
            <div className="space-y-3">
              {profileData.employment.map((job) => (
                <div
                  key={job.id}
                  className="p-3.5 rounded-xl bg-[var(--md-sys-color-surface-container)] border border-[var(--md-sys-color-surface-container-highest)] space-y-1.5"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="text-xs font-bold text-[var(--md-sys-color-on-surface)]">
                      {job.company} — <span className="text-[var(--md-sys-color-primary)]">{job.position}</span>
                    </span>
                    <span className="text-[11px] font-mono text-[var(--md-sys-color-outline)]">
                      {job.period}
                    </span>
                  </div>
                  <p className="text-[11px] text-[var(--md-sys-color-outline)]">
                    Location: {job.location}
                  </p>
                  <p className="text-xs text-[var(--md-sys-color-on-surface-variant)]">
                    {job.description}
                  </p>
                  <ul className="space-y-1 pt-1">
                    {job.responsibilities.slice(0, 2).map((resp, i) => (
                      <li key={i} className="text-[11px] text-[var(--md-sys-color-on-surface-variant)] flex items-start gap-1.5">
                        <span className="text-[var(--md-sys-color-primary)] font-bold">·</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Educational Qualifications */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[var(--md-sys-color-primary)]">
              Educational Qualifications
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left border-collapse border border-[var(--md-sys-color-surface-container-highest)]">
                <thead>
                  <tr className="bg-[var(--md-sys-color-surface-container-high)] text-[var(--md-sys-color-on-surface)] font-bold">
                    <th className="p-2 border border-[var(--md-sys-color-surface-container-highest)]">Exam</th>
                    <th className="p-2 border border-[var(--md-sys-color-surface-container-highest)]">Concentration</th>
                    <th className="p-2 border border-[var(--md-sys-color-surface-container-highest)]">School / College</th>
                    <th className="p-2 border border-[var(--md-sys-color-surface-container-highest)]">GPA</th>
                    <th className="p-2 border border-[var(--md-sys-color-surface-container-highest)]">Year</th>
                    <th className="p-2 border border-[var(--md-sys-color-surface-container-highest)]">Board</th>
                  </tr>
                </thead>
                <tbody>
                  {profileData.education.map((edu) => {
                    const examName = edu.degree.toLowerCase().includes('nursing')
                      ? 'Diploma (Nursing)'
                      : edu.degree.includes('HSC')
                      ? 'HSC'
                      : 'SSC';
                    const passingYear =
                      edu.status === 'Discontinued'
                        ? `${edu.endDate} (Discontinued)`
                        : edu.endDate;
                    const boardOrAuthority =
                      edu.board?.replace(' Board', '') || 'TMSS / Clinical Institute';

                    return (
                      <tr key={edu.id} className="border-t border-[var(--md-sys-color-surface-container-highest)]">
                        <td className="p-2 font-bold border border-[var(--md-sys-color-surface-container-highest)]">
                          {examName}
                        </td>
                        <td className="p-2 border border-[var(--md-sys-color-surface-container-highest)]">
                          {edu.fieldOfStudy}
                        </td>
                        <td className="p-2 border border-[var(--md-sys-color-surface-container-highest)]">
                          {edu.institution}
                        </td>
                        <td className="p-2 font-bold font-mono text-[var(--md-sys-color-primary)] border border-[var(--md-sys-color-surface-container-highest)]">
                          {edu.gpa?.split('/')[0].trim()}
                        </td>
                        <td className="p-2 font-mono border border-[var(--md-sys-color-surface-container-highest)]">
                          {passingYear}
                        </td>
                        <td className="p-2 border border-[var(--md-sys-color-surface-container-highest)]">
                          {boardOrAuthority}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <p className="text-[11px] text-[var(--md-sys-color-outline)] italic">
              * TMSS Nursing Institute: Completed 2 years 6 months hospital clinical internship & 1st year GPA 3.69/4.00 before discontinuation.
            </p>
          </div>

          {/* Training Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[var(--md-sys-color-primary)]">
              Training Summary
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left border-collapse border border-[var(--md-sys-color-surface-container-highest)]">
                <thead>
                  <tr className="bg-[var(--md-sys-color-surface-container-high)] text-[var(--md-sys-color-on-surface)] font-bold">
                    <th className="p-2 border border-[var(--md-sys-color-surface-container-highest)]">No.</th>
                    <th className="p-2 border border-[var(--md-sys-color-surface-container-highest)]">Training Topic</th>
                    <th className="p-2 border border-[var(--md-sys-color-surface-container-highest)]">Institute</th>
                    <th className="p-2 border border-[var(--md-sys-color-surface-container-highest)]">Location</th>
                    <th className="p-2 border border-[var(--md-sys-color-surface-container-highest)]">Year</th>
                    <th className="p-2 border border-[var(--md-sys-color-surface-container-highest)]">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  {profileData.training.map((tr, index) => (
                    <tr key={tr.id} className="border-t border-[var(--md-sys-color-surface-container-highest)]">
                      <td className="p-2 font-bold border border-[var(--md-sys-color-surface-container-highest)]">{index + 1}</td>
                      <td className="p-2 font-bold text-[var(--md-sys-color-primary)] border border-[var(--md-sys-color-surface-container-highest)]">{tr.title.replace(' Professional Training', '').replace(' Professional Course', '')}</td>
                      <td className="p-2 border border-[var(--md-sys-color-surface-container-highest)]">{tr.issuer}</td>
                      <td className="p-2 border border-[var(--md-sys-color-surface-container-highest)]">{tr.location}</td>
                      <td className="p-2 font-mono border border-[var(--md-sys-color-surface-container-highest)]">{tr.issueDate}</td>
                      <td className="p-2 border border-[var(--md-sys-color-surface-container-highest)]">{tr.duration}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Computer Skills & Languages */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <h2 className="text-xs font-bold uppercase tracking-wider text-[var(--md-sys-color-primary)]">
                Computer Skills
              </h2>
              <div className="p-3 rounded-xl bg-[var(--md-sys-color-surface-container)] text-xs space-y-1 border border-[var(--md-sys-color-surface-container-highest)]">
                <p><strong>Operating Systems:</strong> Windows, Linux, macOS</p>
                <p><strong>Office Applications:</strong> MS Word, MS Excel, MS PowerPoint</p>
                <p><strong>Graphic Design:</strong> Adobe Illustrator, Adobe Photoshop</p>
                <p><strong>Internet:</strong> Able to operate all functions of the Internet</p>
                <p><strong>Typing:</strong> English and Bengali (Avro & Bijoy)</p>
              </div>
            </div>

            <div className="space-y-1.5">
              <h2 className="text-xs font-bold uppercase tracking-wider text-[var(--md-sys-color-primary)]">
                Language Proficiency
              </h2>
              <div className="p-3 rounded-xl bg-[var(--md-sys-color-surface-container)] text-xs space-y-1.5 border border-[var(--md-sys-color-surface-container-highest)]">
                {profileData.languages.map((lang) => (
                  <p key={lang.language}>
                    <strong>{lang.language}:</strong> {lang.skills}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Personal Details Biodata */}
          <div className="space-y-2 pt-2 border-t border-[var(--md-sys-color-surface-container-highest)]">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[var(--md-sys-color-primary)]">
              Personal Details
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs p-3 rounded-xl bg-[var(--md-sys-color-surface-container)] border border-[var(--md-sys-color-surface-container-highest)]">
              <div><span className="text-[var(--md-sys-color-outline)]">Father's Name:</span> <br /><strong>{pd.fatherName}</strong></div>
              <div><span className="text-[var(--md-sys-color-outline)]">Mother's Name:</span> <br /><strong>{pd.motherName}</strong></div>
              <div><span className="text-[var(--md-sys-color-outline)]">Date of Birth:</span> <br /><strong className="font-mono">{pd.dateOfBirth}</strong></div>
              <div><span className="text-[var(--md-sys-color-outline)]">Gender:</span> <br /><strong>{pd.gender}</strong></div>
              <div><span className="text-[var(--md-sys-color-outline)]">Marital Status:</span> <br /><strong>{pd.maritalStatus}</strong></div>
              <div><span className="text-[var(--md-sys-color-outline)]">Nationality:</span> <br /><strong>{pd.nationality}</strong></div>
              <div><span className="text-[var(--md-sys-color-outline)]">National ID:</span> <br /><strong className="font-mono">{pd.nid}</strong></div>
              <div><span className="text-[var(--md-sys-color-outline)]">Religion:</span> <br /><strong>{pd.religion}</strong></div>
              <div><span className="text-[var(--md-sys-color-outline)]">Blood Group:</span> <br /><strong className="text-[var(--md-sys-color-primary)]">{pd.bloodGroup}</strong></div>
              <div><span className="text-[var(--md-sys-color-outline)]">Height & Weight:</span> <br /><strong>{pd.height}, {pd.weight}</strong></div>
              <div className="sm:col-span-2"><span className="text-[var(--md-sys-color-outline)]">Permanent Address:</span> <br /><span>{pd.village}, {pd.postOffice}, {pd.policeStation}, {pd.district}</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
