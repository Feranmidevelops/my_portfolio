import React from "react";
import { FadeIn } from "../animations/FadeIn";
import { intro } from "../../data/content";

/**
 * Shared minimalist section heading (saddine-style: left-aligned, bold, quiet).
 * Exported for reuse across sections.
 */
export const SectionHeading = ({ title, description }) => (
  <div className="mb-7">
    <h2 className="text-2xl md:text-[1.75rem] font-bold text-[var(--text-primary)]">{title}</h2>
    {description && <p className="mt-1.5 text-[var(--text-secondary)] text-[0.95rem]">{description}</p>}
  </div>
);

export const Panel = ({ children, className = "" }) => (
  <div
    className={`rounded-2xl border p-6 md:p-8 ${className}`}
    style={{ background: "var(--bg-elevated)", borderColor: "var(--border)" }}
  >
    {children}
  </div>
);

export const About = () => {
  return (
    <section id="about" className="scroll-mt-24 py-10">
      <FadeIn>
        <SectionHeading title="About" />
        <Panel>
          <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
            <p>{intro.summary}</p>
            <p>{intro.about2}</p>
          </div>
        </Panel>
      </FadeIn>
    </section>
  );
};
