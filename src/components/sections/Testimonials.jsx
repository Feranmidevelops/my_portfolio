import React from "react";
import { motion } from "framer-motion";
import { FiMessageSquare } from "react-icons/fi";
import { SectionHeading } from "./About";
import { testimonials } from "../../data/content";

export const Testimonials = () => (
  <section id="testimonials" className="py-24" style={{ background: "var(--bg-secondary)" }}>
    <div className="max-w-6xl mx-auto px-6">
      <SectionHeading
        eyebrow="Kind Words"
        title="What people say"
        subtitle="Feedback from the teams I've built with."
      />

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, idx) => (
          <motion.figure
            key={t.name + idx}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="rounded-2xl p-7 border flex flex-col"
            style={{ background: "var(--bg-elevated)", borderColor: "var(--border)" }}
          >
            <FiMessageSquare className="text-gold mb-4" size={26} />
            <blockquote className="text-[var(--text-secondary)] leading-relaxed flex-1">
              "{t.quote}"
            </blockquote>
            <figcaption className="mt-6 pt-5 border-t" style={{ borderColor: "var(--border)" }}>
              <p className="font-bold text-[var(--text-primary)]">{t.name}</p>
              <p className="text-sm text-[var(--text-secondary)]">{t.role}</p>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </div>
  </section>
);
