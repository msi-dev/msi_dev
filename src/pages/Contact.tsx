import React, { useState } from 'react';
import { profileData } from '../data/profile.ts';
import { SectionHeader } from '../components/SectionHeader.tsx';
import { M3Button } from '../components/M3Button.tsx';
import {
  validateContactForm,
  buildMailtoUrl,
  ContactFormValues,
  ValidationErrors,
} from '../utils/profileHelpers.ts';
import {
  Mail,
  Copy,
  Check,
  Send,
  ExternalLink,
  MessageSquare,
  Sparkles,
  MapPin,
  Clock,
  Phone,
} from 'lucide-react';

const TOPIC_PRESETS = [
  'Graphic Design & Branding Project',
  'Full-Time / Office Position',
  'Packaging & Label Artwork',
  'Computer Operator & Documentation',
  'Digital Marketing Campaign',
  'General Inquiry',
];

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState<ContactFormValues>({
    name: '',
    email: '',
    subject: '',
    category: TOPIC_PRESETS[0],
    message: '',
  });
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [submittedStatus, setSubmittedStatus] = useState<'idle' | 'success'>('idle');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePresetSelect = (preset: string) => {
    setFormData((prev) => ({
      ...prev,
      category: preset,
      subject: prev.subject || `Inquiry regarding ${preset}`,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateContactForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Build mailto URL and trigger default client
      const mailtoUrl = buildMailtoUrl(formData, profileData.email);
      window.location.href = mailtoUrl;
      setSubmittedStatus('success');
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12 pb-20">
      <SectionHeader
        overline="Get In Touch"
        title="Contact & Employment Inquiry"
        subtitle="Let's discuss full-time graphic design & computer operator positions, packaging design projects, or digital marketing campaigns."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column: Direct Contacts & Status */}
        <div className="lg:col-span-5 space-y-6">
          {/* Phone / WhatsApp Action Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[var(--md-sys-color-surface-container-low)] border border-[var(--md-sys-color-surface-container-highest)] space-y-4">
            <div className="w-10 h-10 rounded-full bg-[var(--md-sys-color-secondary-container)] text-[var(--md-sys-color-on-secondary-container)] flex items-center justify-center">
              <Phone className="w-5 h-5" />
            </div>

            <div className="space-y-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-[var(--md-sys-color-primary)]">
                Direct Phone & WhatsApp
              </span>
              <p className="text-xl font-bold font-mono text-[var(--md-sys-color-on-surface)]">
                {profileData.phone}
              </p>
              <p className="text-xs text-[var(--md-sys-color-on-surface-variant)]">
                Direct phone number for quick calls, interviews, or WhatsApp messaging.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2 pt-1">
              <a
                href={`tel:${profileData.phone}`}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium bg-[var(--md-sys-color-primary)] text-[var(--md-sys-color-on-primary)] hover:opacity-90 transition-opacity"
              >
                <span>Call Now</span>
                <Phone className="w-3 h-3" />
              </a>

              <a
                href="https://wa.me/8801629744516"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium bg-[var(--md-sys-color-surface-container)] hover:bg-[var(--md-sys-color-surface-container-high)] text-[var(--md-sys-color-on-surface)] transition-colors border border-[var(--md-sys-color-outline-variant)]/60"
              >
                <span>WhatsApp Message</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Email Quick Action Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[var(--md-sys-color-surface-container-low)] border border-[var(--md-sys-color-surface-container-highest)] space-y-4">
            <div className="w-10 h-10 rounded-full bg-[var(--md-sys-color-primary-container)] text-[var(--md-sys-color-on-primary-container)] flex items-center justify-center">
              <Mail className="w-5 h-5" />
            </div>

            <div className="space-y-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-[var(--md-sys-color-primary)]">
                Direct Email
              </span>
              <p className="text-lg font-bold text-[var(--md-sys-color-on-surface)] break-all">
                {profileData.email}
              </p>
              <p className="text-xs text-[var(--md-sys-color-on-surface-variant)]">
                Official inbox with prompt turnaround on employment and freelance project inquiries.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2 pt-2">
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-medium bg-[var(--md-sys-color-surface-container)] hover:bg-[var(--md-sys-color-surface-container-high)] text-[var(--md-sys-color-on-surface)] transition-colors border border-[var(--md-sys-color-outline-variant)]/60 cursor-pointer"
                aria-label="Copy email address"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[var(--md-sys-color-primary)]" />
                    <span className="font-semibold text-[var(--md-sys-color-primary)]">
                      Copied to Clipboard!
                    </span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Address</span>
                  </>
                )}
              </button>

              <a
                href={`mailto:${profileData.email}`}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-medium bg-[var(--md-sys-color-surface-container-high)] text-[var(--md-sys-color-on-surface)] hover:bg-[var(--md-sys-color-surface-container-highest)] transition-colors"
              >
                <span>Open Mail App</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Availability & Location */}
          <div className="p-6 rounded-2xl bg-[var(--md-sys-color-surface-container-low)] border border-[var(--md-sys-color-surface-container-highest)] space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--md-sys-color-on-surface)]">
              Address & Availability
            </h3>
            <div className="space-y-2.5 text-xs text-[var(--md-sys-color-on-surface-variant)]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[var(--md-sys-color-primary)] shrink-0 mt-0.5" />
                <span>{profileData.address}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[var(--md-sys-color-primary)] shrink-0 mt-0.5" />
                <span>Bangladesh Standard Time (UTC+6)</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Sparkles className="w-4 h-4 text-[var(--md-sys-color-primary)] shrink-0 mt-0.5" />
                <span>{profileData.availability}</span>
              </div>
            </div>
          </div>

          {/* Quick Topics */}
          <div className="p-6 rounded-2xl bg-[var(--md-sys-color-surface-container-low)] border border-[var(--md-sys-color-surface-container-highest)] space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--md-sys-color-on-surface)]">
              Select an Inquiry Topic
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {TOPIC_PRESETS.map((topic) => (
                <button
                  key={topic}
                  type="button"
                  onClick={() => handlePresetSelect(topic)}
                  className={`text-xs px-2.5 py-1 rounded-md text-left transition-colors cursor-pointer ${
                    formData.category === topic
                      ? 'bg-[var(--md-sys-color-secondary-container)] text-[var(--md-sys-color-on-secondary-container)] font-semibold'
                      : 'bg-[var(--md-sys-color-surface-container)] text-[var(--md-sys-color-on-surface-variant)] hover:bg-[var(--md-sys-color-surface-container-high)]'
                  }`}
                >
                  {topic}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7">
          <div className="p-6 sm:p-10 rounded-3xl bg-[var(--md-sys-color-surface-container-low)] border border-[var(--md-sys-color-surface-container-highest)] space-y-6">
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-[var(--md-sys-color-on-surface)]">
                Send a Structured Message
              </h3>
              <p className="text-xs text-[var(--md-sys-color-on-surface-variant)] leading-relaxed">
                Submitting this form prepares your preferred email client with all inputs formatted for instantaneous dispatch.
              </p>
            </div>

            {submittedStatus === 'success' && (
              <div className="p-4 rounded-2xl bg-[var(--md-sys-color-tertiary-container)] text-[var(--md-sys-color-on-tertiary-container)] text-xs flex items-center justify-between gap-2">
                <span>
                  Thank you! Your default email client was opened with your message. If it didn't open automatically, you can write directly to {profileData.email}.
                </span>
                <button
                  type="button"
                  onClick={() => setSubmittedStatus('idle')}
                  className="font-bold underline"
                >
                  Dismiss
                </button>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              {/* Name & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-semibold text-[var(--md-sys-color-on-surface)]"
                  >
                    Your Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: undefined });
                    }}
                    placeholder="Jane Doe"
                    className={`w-full px-4 py-2.5 rounded-xl text-sm bg-[var(--md-sys-color-surface)] border ${
                      errors.name
                        ? 'border-[var(--md-sys-color-error)]'
                        : 'border-[var(--md-sys-color-outline-variant)]'
                    } text-[var(--md-sys-color-on-surface)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--md-sys-color-primary)]`}
                  />
                  {errors.name && (
                    <p className="text-[11px] text-[var(--md-sys-color-error)]">{errors.name}</p>
                  )}
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-semibold text-[var(--md-sys-color-on-surface)]"
                  >
                    Your Email *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: undefined });
                    }}
                    placeholder="jane@company.com"
                    className={`w-full px-4 py-2.5 rounded-xl text-sm bg-[var(--md-sys-color-surface)] border ${
                      errors.email
                        ? 'border-[var(--md-sys-color-error)]'
                        : 'border-[var(--md-sys-color-outline-variant)]'
                    } text-[var(--md-sys-color-on-surface)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--md-sys-color-primary)]`}
                  />
                  {errors.email && (
                    <p className="text-[11px] text-[var(--md-sys-color-error)]">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-1">
                <label
                  htmlFor="contact-subject"
                  className="block text-xs font-semibold text-[var(--md-sys-color-on-surface)]"
                >
                  Subject *
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  value={formData.subject}
                  onChange={(e) => {
                    setFormData({ ...formData, subject: e.target.value });
                    if (errors.subject) setErrors({ ...errors, subject: undefined });
                  }}
                  placeholder="e.g., Staff Engineer Role at..."
                  className={`w-full px-4 py-2.5 rounded-xl text-sm bg-[var(--md-sys-color-surface)] border ${
                    errors.subject
                      ? 'border-[var(--md-sys-color-error)]'
                      : 'border-[var(--md-sys-color-outline-variant)]'
                  } text-[var(--md-sys-color-on-surface)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--md-sys-color-primary)]`}
                />
                {errors.subject && (
                  <p className="text-[11px] text-[var(--md-sys-color-error)]">{errors.subject}</p>
                )}
              </div>

              {/* Message */}
              <div className="space-y-1">
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-semibold text-[var(--md-sys-color-on-surface)]"
                >
                  Message *
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value });
                    if (errors.message) setErrors({ ...errors, message: undefined });
                  }}
                  placeholder="Tell me about your team, technical objectives, or project requirements..."
                  className={`w-full px-4 py-2.5 rounded-xl text-sm bg-[var(--md-sys-color-surface)] border ${
                    errors.message
                      ? 'border-[var(--md-sys-color-error)]'
                      : 'border-[var(--md-sys-color-outline-variant)]'
                  } text-[var(--md-sys-color-on-surface)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--md-sys-color-primary)] resize-y`}
                />
                {errors.message && (
                  <p className="text-[11px] text-[var(--md-sys-color-error)]">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-2 flex items-center justify-between">
                <M3Button
                  type="submit"
                  variant="filled"
                  size="md"
                  icon={<Send className="w-4 h-4" />}
                  iconPosition="end"
                >
                  Compose & Send Message
                </M3Button>

                <span className="text-[11px] text-[var(--md-sys-color-outline)]">
                  * Required fields
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
