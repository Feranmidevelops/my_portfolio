import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "./About";
import { useRole } from "../../context/RoleContext";
import { roleContent } from "../../data/content";

export const Skills = () => {
  const { role } = useRole();
  const c = roleContent[role];

  return (
    <section id="skills" className="py-24" style={{ background: "var(--bg-primary)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          eyebrow="Stack"
          title="Technical Arsenal"
          subtitle={role === "swe"
            ? "The tools I reach for to design, build, and ship."
            : "The platforms I administer, automate, and extend."}
        />

        <AnimatePresence mode="wait">
          <motion.div
            key={role}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {c.skills.map((cat, idx) => (
              <motion.div
                key={cat.group}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.06 }}
                className="rounded-2xl p-6 border transition-all hover:-translate-y-1"
                style={{ background: "var(--bg-elevated)", borderColor: "var(--border)" }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="h-4 w-1 rounded-full" style={{ background: "linear-gradient(var(--accent), var(--accent-2))" }} />
                  <h4 className="font-display font-bold text-[var(--text-primary)]">{cat.group}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 text-sm rounded-lg border text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)] hover:border-[var(--accent)]"
                      style={{ background: "var(--bg-secondary)", borderColor: "var(--border)" }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
