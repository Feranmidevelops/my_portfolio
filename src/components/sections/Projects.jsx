import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiExternalLink, FiSmartphone, FiArrowUpRight, FiLock } from "react-icons/fi";
import { SectionHeading } from "./About";
import { projects } from "../../data/content";

const accentMap = {
  indigo: "linear-gradient(135deg, #6366f1, #4f46e5)",
  purple: "linear-gradient(135deg, #a855f7, #7c3aed)",
  gold: "linear-gradient(135deg, #f5b301, #d97706)",
};

const ProjectCard = ({ project, index }) => {
  const cover = accentMap[project.accent] || accentMap.indigo;
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.45, delay: (index % 3) * 0.08 }}
      className="group flex flex-col rounded-2xl overflow-hidden border transition-all hover:-translate-y-1.5 hover:shadow-2xl"
      style={{ background: "var(--bg-elevated)", borderColor: "var(--border)" }}
    >
      {/* Cover */}
      <div className="relative h-44 overflow-hidden" style={{ background: cover }}>
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-script text-white/90 text-5xl drop-shadow-lg">
            {project.title.split(" ")[0]}
          </span>
        </div>
        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          {project.mobile && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-white/90 text-slate-900">
              <FiSmartphone size={12} /> Mobile
            </span>
          )}
          {project.status && (
            <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-black/40 text-white backdrop-blur-sm">
              {project.status}
            </span>
          )}
          {project.private && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-black/40 text-white backdrop-blur-sm">
              <FiLock size={11} /> Private · NDA
            </span>
          )}
        </div>
        <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-black/30 text-white backdrop-blur-sm">
          {project.year}
        </span>

        {/* Hover links */}
        {(project.githubUrl || project.liveUrl) && (
          <div className="absolute inset-0 bg-black/55 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="Source code"
                 className="p-2.5 bg-white rounded-full text-slate-900 hover:scale-110 transition">
                <FiGithub size={20} />
              </a>
            )}
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label="Live demo"
                 className="p-2.5 bg-white rounded-full text-slate-900 hover:scale-110 transition">
                <FiExternalLink size={20} />
              </a>
            )}
          </div>
        )}
      </div>

      {/* Body */}
      <div className="p-6 flex flex-col flex-1">
        <p className="text-xs font-semibold uppercase tracking-wider text-gold">{project.category}</p>
        <h3 className="text-xl font-display font-bold text-[var(--text-primary)] mt-1.5 flex items-center gap-1.5">
          {project.title}
          {(project.liveUrl || project.githubUrl) && (
            <FiArrowUpRight className="text-[var(--text-secondary)] opacity-0 group-hover:opacity-100 transition-opacity" size={16} />
          )}
        </h3>
        <p className="mt-3 text-sm text-[var(--text-secondary)] leading-relaxed">{project.description}</p>

        {project.highlights && (
          <ul className="mt-4 space-y-1.5">
            {project.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full shrink-0" style={{ background: "var(--accent)" }} />
                {h}
              </li>
            ))}
          </ul>
        )}

        <div className="flex flex-wrap gap-2 mt-5 pt-5 border-t" style={{ borderColor: "var(--border)" }}>
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs px-2.5 py-1 rounded-md font-medium"
              style={{ background: "var(--accent-soft)", color: "var(--accent)" }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
};

export const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);
  const shown = showAll ? [...featured, ...rest] : featured;

  return (
    <section id="projects" className="py-24" style={{ background: "var(--bg-secondary)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          eyebrow="Work"
          title="Featured Projects"
          subtitle="Real-world web, mobile, and automation products that solve actual business problems."
        />

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          <AnimatePresence mode="popLayout">
            {shown.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {rest.length > 0 && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll((s) => !s)}
              className="px-8 py-3 rounded-full font-semibold border transition-all hover:-translate-y-0.5"
              style={{ borderColor: "var(--accent)", color: "var(--text-primary)", background: "var(--bg-elevated)" }}
            >
              {showAll ? "Show Less" : `View All Projects (${projects.length})`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
