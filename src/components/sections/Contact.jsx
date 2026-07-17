import React, { useState } from "react";
import { FiSend, FiCopy, FiCheck } from "react-icons/fi";
import emailjs from "@emailjs/browser";
import { FadeIn } from "../animations/FadeIn";
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
        {
          // These keys MUST match the {{variables}} in the EmailJS template:
          name: formData.name,
          email: formData.email,
          message: formData.message,
          title: `New portfolio message from ${formData.name}`,
          time: new Date().toLocaleString(),
        },
        publicKey
      );
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      // Surface the exact EmailJS reason (status + text) in the console.
      console.error("EmailJS send failed:", err?.status, err?.text || err?.message || err);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 6000);
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
    `w-full px-4 py-3 rounded-xl border text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] ${errors[field] ? "border-red-500" : ""}`;

  return (
    <section id="contact" className="scroll-mt-24 py-10">
      <FadeIn>
        {/* Dark contrast panel */}
        <div
          className="rounded-2xl p-8 md:p-10"
          style={{ background: "var(--contrast-panel)", color: "var(--contrast-text)" }}
        >
          <p className="text-xs font-semibold tracking-[0.22em] uppercase opacity-60">Contact</p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2" style={{ color: "var(--contrast-text)" }}>
            Let's build something.
          </h2>
          <p className="mt-3 opacity-70 max-w-md">
            Have a role or a project in mind — software or IT? I reply within 24 hours.
          </p>
          <button
            onClick={copyEmail}
            className="mt-5 inline-flex items-center gap-2 text-sm font-medium opacity-90 hover:opacity-100 transition-opacity"
          >
            {profile.email}
            {copied ? <FiCheck size={15} style={{ color: "var(--ok)" }} /> : <FiCopy size={15} />}
          </button>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="mt-4 rounded-2xl border p-6 md:p-8 space-y-4"
          style={{ background: "var(--bg-elevated)", borderColor: "var(--border)" }}
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-[var(--text-primary)] mb-1">Name</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange}
                     className={inputCls("name")} placeholder="Jane Doe" style={{ background: "var(--bg-secondary)" }} />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-[var(--text-primary)] mb-1">Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange}
                     className={inputCls("email")} placeholder="you@example.com" style={{ background: "var(--bg-secondary)" }} />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-[var(--text-primary)] mb-1">Message</label>
            <textarea name="message" rows={4} value={formData.message} onChange={handleChange}
                      className={inputCls("message")} placeholder="Tell me about your role or project..." style={{ background: "var(--bg-secondary)" }} />
            {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
          </div>
          <button
            type="submit"
            disabled={status === "loading"}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold transition-opacity disabled:opacity-70"
            style={{ background: "var(--contrast-panel)", color: "var(--contrast-text)" }}
          >
            {status === "loading" ? (
              <>Sending <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" /></>
            ) : (
              <>Send message <FiSend size={15} /></>
            )}
          </button>
          {status === "success" && <p className="text-sm" style={{ color: "var(--ok)" }}>✓ Message sent! I'll reply soon.</p>}
          {status === "error" && <p className="text-red-500 text-sm">✗ Failed. Please email me directly.</p>}
        </form>
      </FadeIn>
    </section>
  );
};
