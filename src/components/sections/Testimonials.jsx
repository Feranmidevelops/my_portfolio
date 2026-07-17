import React from "react";
import { SectionHeading, Panel } from "./About";
import { FadeIn } from "../animations/FadeIn";
import { testimonials } from "../../data/content";

export const Testimonials = () => (
  <section id="testimonials" className="scroll-mt-24 py-10">
    <FadeIn>
      <SectionHeading title="Kind words" description="Feedback from teams I've worked with." />
      <div className="grid gap-4">
        {testimonials.map((t, i) => (
          <Panel key={i}>
            <blockquote className="text-[var(--text-secondary)] leading-relaxed">"{t.quote}"</blockquote>
            <figcaption className="mt-4 text-sm">
              <span className="font-semibold text-[var(--text-primary)]">{t.name}</span>
              <span className="text-[var(--text-tertiary)]"> · {t.role}</span>
            </figcaption>
          </Panel>
        ))}
      </div>
    </FadeIn>
  </section>
);
