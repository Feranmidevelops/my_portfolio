import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiChevronDown, FiExternalLink, FiGithub, FiLock, FiSmartphone } from "react-icons/fi";
import { SectionHeading } from "./About";
import { FadeIn } from "../animations/FadeIn";
import { projects } from "../../data/content";

const Row = ({ project, open, onToggle }) => {
  const hasLinks = project.liveUrl || project.githubUrl;
  return (
    <div className="border-b last:border-b-0" style={{ borderColor: "var(--border)" }}>
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-4 py-4 text-left group"
        aria-expanded={open}
      >
        {/* Monogram */}
        <span
          className="shrink-0 w-9 h-9 rounded-lg border flex items-center justify-center font-display font-bold text-sm text-[var(--text-secondary)]"
          style={{ borderColor: "var(--border)", background: "var(--bg-secondary)" }}
        >
          {project.title.charAt(0)}
        </span>

        <span className="flex-1 min-w-0">
          <span className="flex items-center gap-2 flex-wrap">
            <span className="font-semibold text-[var(--text-primary)]">{project.title}</span>
            {project.mobile && (
              <span className="inline-flex items-center gap-1 text-[10px] font-semibold px-1.5 py-0.5 rounded-full border text-[var(--text-secondary)]" style={{ borderColor: "var(--border)" }}>
                <FiSmartphone size={9} /> Mobile
              </span>
            )}
            {project.status && (
              <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded-full" style={{ background: "var(--accent-soft)", color: "var(--accent)" }}>
                {project.status}
              </span>
            )}
          </span>
          <span className="block text-xs text-[var(--text-tertiary)] mt-0.5">{project.category} · {project.year}</span>
        </span>

        {/* Right icons */}
        <span className="flex items-center gap-2 text-[var(--text-tertiary)]">
          {project.private && !hasLinks && <FiLock size={15} title="Private / NDA" />}
          <FiChevronDown
            size={18}
            className="transition-transform"
            style={{ transform: open ? "rotate(180deg)" : "none" }}
          />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28 }}
            className="overflow-hidden"
          >
            <div className="pb-6 pl-13 pr-1" style={{ paddingLeft: "3.25rem" }}>
              <p className="text-[var(--text-secondary)] leading-relaxed">{project.description}</p>

              {project.highlights && (
                <ul className="mt-3 space-y-1.5">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                      <span className="mt-2 h-1 w-1 rounded-full shrink-0" style={{ background: "var(--text-tertiary)" }} />
                      {h}
                    </li>
                  ))}
                </ul>
              )}

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-2.5 mt-4">
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                     className="inline-flex items-center gap-1.5 text-sm font-medium px-3.5 py-1.5 rounded-full border transition-colors hover:border-[var(--accent)]"
                     style={{ borderColor: "var(--border)", color: "var(--text-primary)" }}>
                    Live Demo <FiExternalLink size={13} />
                  </a>
                )}
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                     className="inline-flex items-center gap-1.5 text-sm font-medium px-3.5 py-1.5 rounded-full border transition-colors hover:border-[var(--accent)]"
                     style={{ borderColor: "var(--border)", color: "var(--text-primary)" }}>
                    Source <FiGithub size={13} />
                  </a>
                )}
                {project.private && !hasLinks && (
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full border text-[var(--text-secondary)]"
                        style={{ borderColor: "var(--border)" }}>
                    <FiLock size={12} /> Private · NDA — walkthrough on request
                  </span>
                )}
              </div>

              {/* Tech */}
              <div className="flex flex-wrap gap-1.5 mt-4">
                {project.tech.map((t) => (
                  <span key={t} className="text-[11px] px-2 py-1 rounded-md border text-[var(--text-secondary)]"
                        style={{ borderColor: "var(--border)", background: "var(--bg-secondary)" }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const Projects = () => {
  const [openId, setOpenId] = useState(projects[0]?.id);
  const [showAll, setShowAll] = useState(false);

  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);
  const shown = showAll ? [...featured, ...rest] : featured;

  return (
    <section id="projects" className="scroll-mt-24 py-10">
      <FadeIn>
        <SectionHeading title="Projects" description="Selected work across web, mobile, and automation." />
        <div className="rounded-2xl border px-5 md:px-6" style={{ background: "var(--bg-elevated)", borderColor: "var(--border)" }}>
          {shown.map((p) => (
            <Row key={p.id} project={p} open={openId === p.id} onToggle={() => setOpenId(openId === p.id ? null : p.id)} />
          ))}
        </div>

        {rest.length > 0 && (
          <div className="mt-5 flex justify-center">
            <button
              onClick={() => setShowAll((s) => !s)}
              className="inline-flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-full border transition-colors hover:border-[var(--accent)]"
              style={{ borderColor: "var(--border)", background: "var(--bg-elevated)", color: "var(--text-primary)" }}
            >
              {showAll ? "Show Less" : `Show More (${rest.length})`}
              <FiChevronDown size={15} style={{ transform: showAll ? "rotate(180deg)" : "none" }} className="transition-transform" />
            </button>
          </div>
        )}
      </FadeIn>
    </section>
  );
};
