import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "../animations/FadeIn";
import { FiMapPin } from "react-icons/fi";
import { useRole } from "../../context/RoleContext";
import { profile, roleContent } from "../../data/content";

const SectionHeading = ({ eyebrow, title, subtitle }) => (
  <FadeIn>
    <div className="text-center mb-14 max-w-2xl mx-auto">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold mb-3">{eyebrow}</p>
      <h2 className="text-3xl md:text-5xl font-display font-bold text-[var(--text-primary)]">{title}</h2>
      {subtitle && <p className="mt-4 text-lg text-[var(--text-secondary)]">{subtitle}</p>}
    </div>
  </FadeIn>
);

export { SectionHeading };

export const About = () => {
  const { role } = useRole();
  const c = roleContent[role];

  return (
    <section id="about" className="py-24" style={{ background: "var(--bg-secondary)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading eyebrow="About" title="Who I am" subtitle="Bridging design, engineering, and IT to ship things that work." />

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Profile card */}
          <FadeIn direction="right" className="lg:col-span-2">
            <div
              className="rounded-2xl p-8 border h-full"
              style={{ background: "var(--bg-elevated)", borderColor: "var(--border)" }}
            >
              <div className="relative mx-auto w-32 h-32 mb-6">
                <div
                  className="absolute inset-0 rounded-full blur-md opacity-70"
                  style={{ background: "linear-gradient(120deg, var(--accent), var(--accent-2))" }}
                />
                <div className="relative w-full h-full rounded-full overflow-hidden border-4" style={{ borderColor: "var(--bg-elevated)" }}>
                  <img
                    src={profile.photo}
                    alt={profile.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.parentElement.innerHTML =
                        '<div class="w-full h-full flex items-center justify-center text-white text-3xl font-bold" style="background:linear-gradient(120deg,var(--accent),var(--accent-2))">FO</div>';
                    }}
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[var(--text-primary)] text-center">{profile.name}</h3>
              <AnimatePresence mode="wait">
                <motion.p
                  key={role}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-gradient font-semibold text-center mt-1"
                >
                  {c.roleLabel}
                </motion.p>
              </AnimatePresence>
              <p className="flex items-center justify-center gap-1.5 text-[var(--text-secondary)] text-sm mt-2">
                <FiMapPin size={14} /> {profile.location}
              </p>

              <div className="grid grid-cols-3 gap-3 mt-7 pt-6 border-t" style={{ borderColor: "var(--border)" }}>
                {c.stats.map((s) => (
                  <div key={s.label} className="text-center">
                    <s.icon className="mx-auto text-gold mb-1.5" size={18} />
                    <div className="text-lg font-bold text-[var(--text-primary)]">{s.value}</div>
                    <div className="text-[11px] leading-tight text-[var(--text-secondary)]">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Bio */}
          <FadeIn direction="left" delay={0.15} className="lg:col-span-3">
            <div
              className="rounded-2xl p-8 border h-full flex flex-col justify-center"
              style={{ background: "var(--bg-elevated)", borderColor: "var(--border)" }}
            >
              <AnimatePresence mode="wait">
                <motion.p
                  key={role}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35 }}
                  className="text-[var(--text-secondary)] leading-relaxed text-lg"
                >
                  {c.summary}
                </motion.p>
              </AnimatePresence>
              <div className="flex flex-wrap gap-4 mt-8">
                <a
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
                  className="px-6 py-3 rounded-full font-semibold text-white shadow-md transition-all hover:-translate-y-0.5"
                  style={{ background: "linear-gradient(120deg, var(--accent), var(--accent-2))" }}
                >
                  Hire Me
                </a>
                <a
                  href="#experience"
                  onClick={(e) => { e.preventDefault(); document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" }); }}
                  className="px-6 py-3 rounded-full font-semibold border transition-all hover:-translate-y-0.5"
                  style={{ borderColor: "var(--border)", color: "var(--text-primary)" }}
                >
                  See Experience
                </a>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Focus / value cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
          <AnimatePresence mode="popLayout">
            {c.focus.map((f, i) => (
              <motion.div
                key={role + f.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="group rounded-2xl p-6 border transition-all hover:-translate-y-1"
                style={{ background: "var(--bg-elevated)", borderColor: "var(--border)" }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: "var(--accent-soft)", color: "var(--accent)" }}
                >
                  <f.icon size={20} />
                </div>
                <h4 className="font-bold text-[var(--text-primary)] mb-1.5">{f.title}</h4>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{f.text}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
