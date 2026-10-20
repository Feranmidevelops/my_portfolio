import React, { useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { FiChevronDown, FiCode } from "react-icons/fi";
import { SectionHeading } from "./About";
import { FadeIn } from "../animations/FadeIn";
import { experience } from "../../data/content";

const Item = ({ exp, open, onToggle }) => {
  const r = exp.swe;
  const current = /present/i.test(exp.period);
  return (
    <div className="border-b last:border-b-0" style={{ borderColor: "var(--border)" }}>
      <div className="py-4">
        {/* Company line */}
        <div className="flex items-center gap-3">
          <span
            className="shrink-0 w-8 h-8 rounded-lg border flex items-center justify-center font-display font-bold text-xs text-[var(--text-secondary)]"
            style={{ borderColor: "var(--border)", background: "var(--bg-secondary)" }}
          >
            {exp.company.charAt(0)}
          </span>
          <span className="font-semibold text-[var(--text-primary)]">{exp.company}</span>
          {current && (
            <span className="inline-flex items-center gap-1.5 text-xs text-[var(--text-secondary)]">
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--ok)" }} /> Current
            </span>
          )}
        </div>

        {/* Job title line */}
        <button onClick={onToggle} className="w-full mt-2.5 flex items-center gap-3 text-left" aria-expanded={open}>
          <FiCode className="shrink-0 text-[var(--text-tertiary)]" size={16} />
          <span className="flex-1 min-w-0">
            <span className="block font-medium text-[var(--text-primary)]">{r.title}</span>
            <span className="block text-xs text-[var(--text-tertiary)] mt-0.5">{exp.period}</span>
          </span>
          <FiChevronDown size={18} className="transition-transform text-[var(--text-tertiary)]"
                         style={{ transform: open ? "rotate(180deg)" : "none" }} />
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <m.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.28 }}
              className="overflow-hidden"
            >
              <div className="pt-3" style={{ paddingLeft: "1.75rem" }}>
                <ul className="space-y-2">
                    {r.points.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-sm text-[var(--text-secondary)] leading-relaxed">
                        <span className="mt-2 h-1 w-1 rounded-full shrink-0" style={{ background: "var(--text-tertiary)" }} />
                        {p}
                      </li>
                    ))}
                </ul>
                <div className="flex flex-wrap gap-1.5 mt-3.5">
                  {r.tags.map((t) => (
                    <span key={t} className="text-[11px] px-2 py-1 rounded-md border text-[var(--text-secondary)]"
                          style={{ borderColor: "var(--border)", background: "var(--bg-secondary)" }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </m.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export const Experience = () => {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section id="experience" className="scroll-mt-24 py-10">
      <FadeIn>
        <SectionHeading title="Experience" description="Where I've shipped, supported, and automated." />
        <div className="rounded-2xl border px-5 md:px-6" style={{ background: "var(--bg-elevated)", borderColor: "var(--border)" }}>
          {experience.map((exp, idx) => (
            <Item
              key={exp.company}
              exp={exp}
              open={openIdx === idx}
              onToggle={() => setOpenIdx(openIdx === idx ? null : idx)}
            />
          ))}
        </div>
      </FadeIn>
    </section>
  );
};
