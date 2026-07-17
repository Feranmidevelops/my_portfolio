import React from "react";

export const Footer = () => (
  <footer className="py-10 mt-6 border-t" style={{ borderColor: "var(--border)" }}>
    <div className="max-w-3xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-[var(--text-tertiary)]">
      <span className="font-display font-semibold text-[var(--text-secondary)]">Feranmi Oyetunde</span>
      <span>© {new Date().getFullYear()} · Built with React &amp; Tailwind</span>
    </div>
  </footer>
);
