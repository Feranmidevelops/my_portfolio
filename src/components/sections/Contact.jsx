import React, { useState } from "react";
import { FiMail, FiMapPin, FiSend, FiGithub, FiLinkedin, FiCopy, FiCheck } from "react-icons/fi";
import emailjs from "@emailjs/browser";
import { SectionHeading } from "./About";
import { profile } from "../../data/content";

export const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [copied, setCopied] = useState(false);

  const validate = () => {
    const e = {};
    if (!formData.name.trim()) e.name = "Name required";
    if (!formData.email.trim()) e.email = "Email required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) e.email = "Invalid email";
    if (!formData.message.trim()) e.message = "Message required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    setStatus("loading");
    try {
      const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
      const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
      if (!serviceId || !templateId || !publicKey) throw new Error("EmailJS config missing");
      await emailjs.send(
        serviceId, templateId,
        { from_name: formData.name, from_email: formData.email, message: formData.message, to_name: "Feranmi" },
        publicKey
      );
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: "" });
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch { /* clipboard unavailable */ }
  };

  const inputCls = (field) =>
    `w-full px-4 py-3 rounded-xl border bg-[var(--bg-secondary)] text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] ${
      errors[field] ? "border-red-500" : ""
    }`;

  return (
    <section id="contact" className="py-24" style={{ background: "var(--bg-primary)" }}>
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading eyebrow="Contact" title="Let's build something" subtitle="Have a role or a project in mind? I reply within 24 hours." />

        <div className="grid md:grid-cols-2 gap-10">
          {/* Info */}
          <div className="space-y-6">
            <p className="text-[var(--text-secondary)] leading-relaxed">
              Whether you want to hire me for software engineering or IT systems work, collaborate, or just say hi — my inbox is open.
            </p>

            <button
              onClick={copyEmail}
              className="group w-full flex items-center justify-between gap-4 p-4 rounded-xl border transition-all hover:-translate-y-0.5"
              style={{ background: "var(--bg-elevated)", borderColor: "var(--border)" }}
            >
              <span className="flex items-center gap-3 min-w-0">
                <span className="p-2.5 rounded-lg" style={{ background: "var(--accent-soft)", color: "var(--accent)" }}>
                  <FiMail size={18} />
                </span>
                <span className="text-left min-w-0">
                  <span className="block text-xs text-[var(--text-secondary)]">Email</span>
                  <span className="block text-sm font-medium text-[var(--text-primary)] truncate">{profile.email}</span>
                </span>
              </span>
              <span className="text-[var(--text-secondary)] group-hover:text-[var(--accent)] shrink-0">
                {copied ? <FiCheck className="text-green-500" /> : <FiCopy />}
              </span>
            </button>

            <div className="flex items-center gap-3 p-4 rounded-xl border" style={{ background: "var(--bg-elevated)", borderColor: "var(--border)" }}>
              <span className="p-2.5 rounded-lg" style={{ background: "var(--gold-soft)", color: "var(--gold)" }}>
                <FiMapPin size={18} />
              </span>
              <span>
                <span className="block text-xs text-[var(--text-secondary)]">Location</span>
                <span className="block text-sm font-medium text-[var(--text-primary)]">{profile.location}</span>
              </span>
            </div>

            <div className="flex gap-3 pt-2">
              <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                 className="p-3 rounded-full border transition hover:-translate-y-1"
                 style={{ background: "var(--bg-elevated)", borderColor: "var(--border)", color: "var(--accent)" }}>
                <FiGithub size={20} />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                 className="p-3 rounded-full border transition hover:-translate-y-1"
                 style={{ background: "var(--bg-elevated)", borderColor: "var(--border)", color: "var(--accent)" }}>
                <FiLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="rounded-2xl p-6 border space-y-4" style={{ background: "var(--bg-elevated)", borderColor: "var(--border)" }}>
            <div>
              <label className="block text-sm font-medium text-[var(--text-primary)] mb-1">Your name</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} className={inputCls("name")} placeholder="Jane Doe" />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-[var(--text-primary)] mb-1">Email address</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} className={inputCls("email")} placeholder="you@example.com" />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-[var(--text-primary)] mb-1">Message</label>
              <textarea name="message" rows={4} value={formData.message} onChange={handleChange} className={inputCls("message")} placeholder="Tell me about your role or project..." />
              {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
            </div>
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-white shadow-md transition-all disabled:opacity-70"
              style={{ background: "linear-gradient(120deg, var(--accent), var(--accent-2))" }}
            >
              {status === "loading" ? (
                <>Sending <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" /></>
              ) : (
                <>Send Message <FiSend /></>
              )}
            </button>
            {status === "success" && <p className="text-green-500 text-center text-sm">✓ Message sent! I'll reply soon.</p>}
            {status === "error" && <p className="text-red-500 text-center text-sm">✗ Failed. Please email me directly.</p>}
          </form>
        </div>
      </div>
    </section>
  );
};
