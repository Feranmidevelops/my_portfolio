import React from "react";
import { FiAward, FiBookOpen } from "react-icons/fi";
import { SectionHeading } from "./About";
import { FadeIn } from "../animations/FadeIn";
import { education, certifications } from "../../data/content";

export const Credentials = () => (
  <section id="credentials" className="scroll-mt-24 py-10">
    <FadeIn>
      <SectionHeading title="Education and certifications" />

      <div className="grid md:grid-cols-2 gap-4">
        {/* Education */}
        <div
          className="rounded-2xl border p-6 md:p-7"
          style={{ background: "var(--bg-elevated)", borderColor: "var(--border)" }}
        >
          <div className="flex items-center gap-2 mb-4 text-[var(--text-secondary)]">
            <FiBookOpen size={16} />
            <span className="text-xs font-semibold uppercase tracking-[0.18em]">Education</span>
          </div>
          <h3 className="font-semibold text-[var(--text-primary)]">{education.degree}</h3>
          <p className="text-sm text-[var(--text-secondary)] mt-1">{education.institution}</p>
          <p className="text-sm text-[var(--text-tertiary)] mt-0.5">
            Graduated {education.year} · CGPA {education.gpa}
          </p>
        </div>

        {/* Certifications */}
        <div
          className="rounded-2xl border p-6 md:p-7"
          style={{ background: "var(--bg-elevated)", borderColor: "var(--border)" }}
        >
          <div className="flex items-center gap-2 mb-4 text-[var(--text-secondary)]">
            <FiAward size={16} />
            <span className="text-xs font-semibold uppercase tracking-[0.18em]">Certifications</span>
          </div>
          <ul className="space-y-2">
            {certifications.map((cert) => (
              <li key={cert.name} className="text-sm text-[var(--text-secondary)] flex items-start gap-2">
                <span
                  className="mt-2 h-1 w-1 rounded-full shrink-0"
                  style={{ background: "var(--text-tertiary)" }}
                />
                <span>
                  {cert.name}
                  {cert.issuer && (
                    <span className="text-[var(--text-tertiary)]"> · {cert.issuer}</span>
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </FadeIn>
  </section>
);
