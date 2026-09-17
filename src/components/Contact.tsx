import React, { useState } from 'react';
import { Mail, Send, Copy, Check, ExternalLink, Globe, BookMarked, Github, Linkedin, MessageSquare } from 'lucide-react';
import { RESEARCHER_PROFILE } from '../data/portfolioData';
import { ContactFormData } from '../types';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(RESEARCHER_PROFILE.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const validate = () => {
    const newErrors: Partial<ContactFormData> = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = 'Please provide a message of at least 10 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Provide immediate client-side handling and fallback
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 600);
  };

  const handleSendViaMailto = () => {
    const subject = encodeURIComponent(formData.subject || 'Research Inquiry');
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${RESEARCHER_PROFILE.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#0D0F12] text-white relative overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#F39A24]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#2F6F73]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Top Heading inspired by reference CTA */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#F39A24] mb-3">
            COLLABORATION & INQUIRIES
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight uppercase">
            LET'S CONNECT
          </h2>

          <p className="mt-4 text-base sm:text-lg text-gray-300 font-light leading-relaxed">
            Interested in research collaboration, water resources, hydrologic modeling, or sustainable urban water management?
          </p>

          {/* Quick Email Direct Button (As styled in reference image CTA) */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${RESEARCHER_PROFILE.email}`}
              id="contact-email-me-btn"
              className="inline-flex items-center space-x-2 bg-[#F39A24] hover:bg-[#d87d10] text-[#111111] font-bold text-xs sm:text-sm uppercase tracking-widest px-8 py-3.5 rounded-full transition-all shadow-md transform hover:-translate-y-0.5"
            >
              <Mail className="w-4 h-4" />
              <span>EMAIL ME DIRECTLY</span>
            </a>

            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center space-x-2 bg-white/10 hover:bg-white/20 text-white font-medium text-xs uppercase tracking-wider px-5 py-3.5 rounded-full border border-white/20 transition-all"
            >
              {copiedEmail ? <Check className="w-4 h-4 text-[#F39A24]" /> : <Copy className="w-4 h-4" />}
              <span>{copiedEmail ? 'Copied to Clipboard' : 'Copy Email'}</span>
            </button>
          </div>
        </div>

        {/* Two-Column Grid: Left Profile & Scholarly Links, Right Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto items-start">
          
          {/* Left Column: Academic Contacts & Scholarly Repositories */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
              <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-2">
                Academic Affiliation
              </h3>
              <div className="text-xs text-gray-300">
                Department of Civil Engineering
              </div>
              <div className="text-xs text-gray-400 mt-0.5">
                Chittagong University of Engineering & Technology (CUET)
              </div>
              <div className="text-xs text-gray-400 mt-2 font-mono">
                {RESEARCHER_PROFILE.email}
              </div>
            </div>

            <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
              <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
                Research & Scholar Profiles
              </h3>
              <div className="space-y-3 text-xs">
                <a
                  href={RESEARCHER_PROFILE.links.googleScholar}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 hover:bg-white/15 transition-colors group"
                >
                  <span className="flex items-center space-x-2 text-gray-300 group-hover:text-white">
                    <BookMarked className="w-4 h-4 text-[#F39A24]" />
                    <span className="font-semibold">Google Scholar</span>
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-gray-500 group-hover:text-white" />
                </a>

                <a
                  href={RESEARCHER_PROFILE.links.orcid}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 hover:bg-white/15 transition-colors group"
                >
                  <span className="flex items-center space-x-2 text-gray-300 group-hover:text-white">
                    <Globe className="w-4 h-4 text-[#2F6F73]" />
                    <span className="font-semibold">ORCID Record</span>
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-gray-500 group-hover:text-white" />
                </a>

                <a
                  href={RESEARCHER_PROFILE.links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 hover:bg-white/15 transition-colors group"
                >
                  <span className="flex items-center space-x-2 text-gray-300 group-hover:text-white">
                    <Linkedin className="w-4 h-4 text-blue-400" />
                    <span className="font-semibold">LinkedIn Profile</span>
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-gray-500 group-hover:text-white" />
                </a>

                <a
                  href={RESEARCHER_PROFILE.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 hover:bg-white/15 transition-colors group"
                >
                  <span className="flex items-center space-x-2 text-gray-300 group-hover:text-white">
                    <Github className="w-4 h-4 text-gray-300" />
                    <span className="font-semibold">GitHub Models & Scripts</span>
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-gray-500 group-hover:text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7 bg-white/5 p-6 sm:p-8 rounded-2xl border border-white/10 backdrop-blur-xs">
            {formSubmitted ? (
              <div className="p-8 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#F39A24]/20 text-[#F39A24] flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-white">
                  Message Form Prepared!
                </h4>
                <p className="text-xs sm:text-sm text-gray-300 max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out, {formData.name}. To finalize delivery to Sadia's CUET mailbox, click below to open your preferred email client:
                </p>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={handleSendViaMailto}
                    className="inline-flex items-center space-x-2 bg-[#F39A24] hover:bg-[#d87d10] text-[#111111] font-bold text-xs uppercase tracking-widest px-6 py-3 rounded-full transition-all"
                  >
                    <Send className="w-4 h-4" />
                    <span>Launch Email Client ({RESEARCHER_PROFILE.email})</span>
                  </button>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormData({ name: '', email: '', subject: '', message: '' });
                  }}
                  className="text-xs text-gray-400 hover:text-white underline block mx-auto pt-4"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="text-sm font-bold uppercase tracking-wider text-white mb-2 flex items-center space-x-2">
                  <MessageSquare className="w-4 h-4 text-[#F39A24]" />
                  <span>Send Research Inquiry</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-[11px] font-bold uppercase tracking-wider text-gray-300 mb-1">
                      Your Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your Name / Organization"
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#F39A24] transition-colors"
                    />
                    {errors.name && <span className="text-[11px] text-red-400 mt-1 block">{errors.name}</span>}
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-[11px] font-bold uppercase tracking-wider text-gray-300 mb-1">
                      Your Email *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@university.edu"
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#F39A24] transition-colors"
                    />
                    {errors.email && <span className="text-[11px] text-red-400 mt-1 block">{errors.email}</span>}
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-subject" className="block text-[11px] font-bold uppercase tracking-wider text-gray-300 mb-1">
                    Subject / Topic *
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. PhD Opportunity / Research Collaboration / SWMM Modeling"
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#F39A24] transition-colors"
                  />
                  {errors.subject && <span className="text-[11px] text-red-400 mt-1 block">{errors.subject}</span>}
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-[11px] font-bold uppercase tracking-wider text-gray-300 mb-1">
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your academic inquiry, conference invitation, or collaboration proposal..."
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#F39A24] transition-colors resize-none"
                  />
                  {errors.message && <span className="text-[11px] text-red-400 mt-1 block">{errors.message}</span>}
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    id="contact-submit-btn"
                    className="w-full inline-flex items-center justify-center space-x-2 bg-white text-[#111111] hover:bg-[#F39A24] font-bold text-xs uppercase tracking-widest py-3.5 rounded-xl transition-all disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'PROCESSING...' : 'SEND MESSAGE'}</span>
                  </button>
                </div>

                <div className="text-[10px] text-gray-400 text-center pt-2">
                  Form inquiries are routed directly to <span className="text-[#F39A24]">{RESEARCHER_PROFILE.email}</span>. No third-party tracking.
                </div>
              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};
