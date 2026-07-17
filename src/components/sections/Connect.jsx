import React from "react";
import { FiGithub, FiLinkedin, FiMail, FiArrowUpRight } from "react-icons/fi";
import { SectionHeading } from "./About";
import { FadeIn } from "../animations/FadeIn";
import { profile } from "../../data/content";

const links = [
  { label: "GitHub", value: profile.githubHandle, href: profile.github, Icon: FiGithub, external: true },
  { label: "LinkedIn", value: "feranmi-oyetunde", href: profile.linkedin, Icon: FiLinkedin, external: true },
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, Icon: FiMail, external: false },
];

export const Connect = () => (
  <section id="connect" className="scroll-mt-24 py-10">
    <FadeIn>
      <SectionHeading title="Connect" />
      <div className="rounded-2xl border overflow-hidden" style={{ background: "var(--bg-elevated)", borderColor: "var(--border)" }}>
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target={l.external ? "_blank" : undefined}
            rel={l.external ? "noopener noreferrer" : undefined}
            className="flex items-center gap-3 px-5 md:px-6 py-4 border-b last:border-b-0 group transition-colors hover:bg-[var(--bg-secondary)]"
            style={{ borderColor: "var(--border)" }}
          >
            <l.Icon className="text-[var(--text-secondary)]" size={18} />
            <span className="font-medium text-[var(--text-primary)]">{l.label}</span>
            <span className="text-sm text-[var(--text-tertiary)] truncate">{l.value}</span>
            <FiArrowUpRight className="ml-auto text-[var(--text-tertiary)] group-hover:text-[var(--accent)] transition-colors" size={16} />
          </a>
        ))}
      </div>
    </FadeIn>
  </section>
);
