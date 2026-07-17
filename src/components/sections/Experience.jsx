import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "./About";
import { useRole } from "../../context/RoleContext";
import { experience } from "../../data/content";

export const Experience = () => {
  const { role } = useRole();

  return (
    <section id="experience" className="py-24" style={{ background: "var(--bg-primary)" }}>
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading
          eyebrow="Career"
          title="Experience"
          subtitle="Where I've shipped, supported, and automated."
        />

        <div className="relative">
          {/* Timeline spine */}
          <div
            className="absolute left-[7px] top-2 bottom-2 w-px"
            style={{ background: "linear-gradient(var(--accent), var(--accent-2), transparent)" }}
          />

          <div className="space-y-10">
            {experience.map((exp, idx) => {
              const r = exp[role];
              return (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative pl-10"
                >
                  {/* Node */}
                  <span
                    className="absolute left-0 top-1.5 h-4 w-4 rounded-full border-2"
                    style={{ background: "var(--bg-primary)", borderColor: "var(--accent)" }}
                  >
                    <span className="absolute inset-1 rounded-full" style={{ background: "var(--accent)" }} />
                  </span>

                  <div
                    className="rounded-2xl p-6 border"
                    style={{ background: "var(--bg-elevated)", borderColor: "var(--border)" }}
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <AnimatePresence mode="wait">
                        <motion.h3
                          key={role + r.title}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-lg font-display font-bold text-[var(--text-primary)]"
                        >
                          {r.title}
                        </motion.h3>
                      </AnimatePresence>
                      <span className="text-sm font-medium text-gold">{exp.period}</span>
                    </div>
                    <p className="text-[var(--accent)] font-medium text-sm mt-0.5">{exp.company}</p>

                    <AnimatePresence mode="wait">
                      <motion.ul
                        key={role + exp.company}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 space-y-2"
                      >
                        {r.points.map((p) => (
                          <li key={p} className="flex items-start gap-2.5 text-sm text-[var(--text-secondary)] leading-relaxed">
                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full shrink-0" style={{ background: "var(--gold)" }} />
                            {p}
                          </li>
                        ))}
                      </motion.ul>
                    </AnimatePresence>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {r.tags.map((t) => (
                        <span
                          key={t}
                          className="text-xs px-2.5 py-1 rounded-md border text-[var(--text-secondary)]"
                          style={{ borderColor: "var(--border)", background: "var(--bg-secondary)" }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
