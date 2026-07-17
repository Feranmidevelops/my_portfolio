import React from "react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { profile } from "../../data/content";

export const Footer = () => (
  <footer className="py-10 border-t" style={{ background: "var(--bg-secondary)", borderColor: "var(--border)" }}>
    <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex items-baseline gap-0.5">
        <span className="font-script text-2xl text-gold">Feranmi</span>
        <span className="text-gradient font-display font-extrabold">.dev</span>
      </div>
      <p className="text-sm text-[var(--text-secondary)] text-center">
        © {new Date().getFullYear()} {profile.name}. Built with React & Tailwind.
      </p>
      <div className="flex gap-4 text-[var(--text-secondary)]">
        <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-[var(--accent)] transition-colors"><FiGithub size={18} /></a>
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-[var(--accent)] transition-colors"><FiLinkedin size={18} /></a>
        <a href={`mailto:${profile.email}`} aria-label="Email" className="hover:text-[var(--accent)] transition-colors"><FiMail size={18} /></a>
      </div>
    </div>
  </footer>
);
