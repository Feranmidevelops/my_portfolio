import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiBriefcase, FiBook, FiAward, FiChevronDown, FiChevronUp, FiDownload } from "react-icons/fi";
import { SectionHeading } from "./About";
import { useRole } from "../../context/RoleContext";
import { roleContent, experience, education, certifications } from "../../data/content";

export const Resume = () => {
  const { role } = useRole();
  const c = roleContent[role];
  const [expanded, setExpanded] = useState(false);

  const download = () => {
    const link = document.createElement("a");
    link.href = c.resume;
    link.download = c.resume.split("/").pop();
    link.click();
  };

  return (
    <section id="resume" className="py-24" style={{ background: "var(--bg-primary)" }}>
      <div className="max-w-3xl mx-auto px-6">
        <SectionHeading
          eyebrow="Résumé"
          title={`${c.roleLabel} Résumé`}
          subtitle="Summary, experience, education & certifications — tailored to the selected track."
        />

        <div className="space-y-6">
          {/* Summary */}
          <div className="rounded-2xl p-6 border" style={{ background: "var(--bg-elevated)", borderColor: "var(--border)" }}>
            <h3 className="text-lg font-display font-bold text-[var(--text-primary)] flex items-center gap-2 mb-3">
              <FiBriefcase className="text-gold" /> Professional Summary
            </h3>
            <AnimatePresence mode="wait">
              <motion.p
                key={role}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-[var(--text-secondary)] leading-relaxed"
              >
                {c.summary}
              </motion.p>
            </AnimatePresence>
          </div>

          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="space-y-6 overflow-hidden"
              >
                {/* Experience */}
                <div className="rounded-2xl p-6 border" style={{ background: "var(--bg-elevated)", borderColor: "var(--border)" }}>
                  <h3 className="text-lg font-display font-bold text-[var(--text-primary)] flex items-center gap-2 mb-5">
                    <FiBriefcase className="text-gold" /> Experience
                  </h3>
                  <div className="space-y-6">
                    {experience.map((exp) => {
                      const r = exp[role];
                      return (
                        <div key={exp.company} className="pl-5 border-l-2" style={{ borderColor: "var(--accent)" }}>
                          <h4 className="font-bold text-[var(--text-primary)]">{r.title}</h4>
                          <p className="text-[var(--accent)] text-sm font-medium">{exp.company}</p>
                          <p className="text-xs text-[var(--text-secondary)] mb-2">{exp.period}</p>
                          <ul className="space-y-1">
                            {r.points.map((p) => (
                              <li key={p} className="text-sm text-[var(--text-secondary)] flex gap-2">
                                <span className="text-gold">•</span> {p}
                              </li>
                            ))}
                          </ul>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Education */}
                <div className="rounded-2xl p-6 border" style={{ background: "var(--bg-elevated)", borderColor: "var(--border)" }}>
                  <h3 className="text-lg font-display font-bold text-[var(--text-primary)] flex items-center gap-2 mb-3">
                    <FiBook className="text-gold" /> Education
                  </h3>
                  <h4 className="font-semibold text-[var(--text-primary)]">{education.degree}</h4>
                  <p className="text-[var(--text-secondary)] text-sm">{education.institution} • {education.year}</p>
                  <p className="text-sm text-gold">CGPA: {education.gpa}</p>
                </div>

                {/* Certifications */}
                <div className="rounded-2xl p-6 border" style={{ background: "var(--bg-elevated)", borderColor: "var(--border)" }}>
                  <h3 className="text-lg font-display font-bold text-[var(--text-primary)] flex items-center gap-2 mb-3">
                    <FiAward className="text-gold" /> Certifications
                  </h3>
                  <ul className="grid sm:grid-cols-2 gap-1.5">
                    {certifications.map((cert) => (
                      <li key={cert} className="text-sm text-[var(--text-secondary)] flex gap-2">
                        <span className="text-gold">•</span> {cert}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <button
              onClick={() => setExpanded((e) => !e)}
              className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold border transition-all hover:-translate-y-0.5"
              style={{ borderColor: "var(--border)", color: "var(--text-primary)", background: "var(--bg-elevated)" }}
            >
              {expanded ? <FiChevronUp /> : <FiChevronDown />}
              {expanded ? "Show Less" : "View Full Résumé"}
            </button>
            <button
              onClick={download}
              className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white shadow-md transition-all hover:-translate-y-0.5"
              style={{ background: "linear-gradient(120deg, var(--accent), var(--accent-2))" }}
            >
              <FiDownload /> Download PDF
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
