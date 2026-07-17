import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiDownload, FiArrowUpRight } from "react-icons/fi";
import { useRole } from "../../context/RoleContext";
import { profile, roleContent } from "../../data/content";

export const Hero = () => {
  const { role } = useRole();
  const c = roleContent[role];

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = c.resume;
    link.download = c.resume.split("/").pop();
    link.click();
  };

  return (
    <header className="pt-28 md:pt-32">
      {/* Monogram box */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="rounded-2xl border bg-grid h-28 md:h-36 flex items-center justify-center"
        style={{ background: "var(--bg-elevated)", borderColor: "var(--border)" }}
      >
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center font-display font-extrabold text-lg"
          style={{ background: "var(--contrast-panel)", color: "var(--contrast-text)" }}
        >
          FO
        </div>
      </motion.div>

      {/* Profile row */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.1 }}
        className="mt-6 flex flex-col sm:flex-row items-center sm:items-start gap-6"
      >
        {/* Avatar */}
        <div
          className="shrink-0 w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden border"
          style={{ borderColor: "var(--border)", background: "var(--bg-secondary)" }}
        >
          <img
            src={profile.photo}
            alt={profile.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.style.display = "none";
              e.target.parentElement.innerHTML =
                '<div class="w-full h-full flex items-center justify-center text-3xl font-bold" style="background:var(--contrast-panel);color:var(--contrast-text)">FO</div>';
            }}
          />
        </div>

        {/* Identity */}
        <div className="text-center sm:text-left flex-1 pt-1">
          <AnimatePresence mode="wait">
            <motion.p
              key={role + "-eyebrow"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="eyebrow"
            >
              {c.roleLabel}
            </motion.p>
          </AnimatePresence>

          <h1 className="text-3xl md:text-[2.75rem] font-bold text-[var(--text-primary)] mt-1.5">
            {profile.name}
          </h1>

          <AnimatePresence mode="wait">
            <motion.p
              key={role + "-tag"}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.3 }}
              className="mt-2 text-lg text-[var(--text-secondary)] max-w-xl"
            >
              {c.tagline} {c.taglineAccent}
            </motion.p>
          </AnimatePresence>

          {/* Status + actions */}
          <div className="mt-4 flex flex-wrap items-center justify-center sm:justify-start gap-x-5 gap-y-3">
            <span className="inline-flex items-center gap-2 text-sm text-[var(--text-secondary)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: "var(--ok)" }} />
                <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: "var(--ok)" }} />
              </span>
              {profile.availability}
            </span>

            <button
              onClick={downloadResume}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors"
            >
              <FiDownload size={15} /> Résumé
            </button>

            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
              className="inline-flex items-center gap-1 text-sm font-medium text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors"
            >
              Get in touch <FiArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </motion.div>
    </header>
  );
};
