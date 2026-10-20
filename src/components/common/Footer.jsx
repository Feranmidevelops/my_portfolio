import React, { useEffect, useState } from "react";

export const Footer = () => {
  // Start from the build's year, which the prerendered HTML shows, then use
  // the visitor's clock in case the site was built last year.
  const [year, setYear] = useState(__BUILD_YEAR__);
  useEffect(() => setYear(new Date().getFullYear()), []);

  return (
    <footer className="py-10 mt-6 border-t" style={{ borderColor: "var(--border)" }}>
      <div className="max-w-3xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-[var(--text-tertiary)]">
        <span className="font-display font-semibold text-[var(--text-secondary)]">Feranmi Oyetunde</span>
        <span>© {year}</span>
      </div>
    </footer>
  );
};
