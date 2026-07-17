import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight, FiDownload, FiGithub, FiLinkedin } from "react-icons/fi";
import { useRole } from "../../context/RoleContext";
import { profile, roleContent } from "../../data/content";

export const Hero = () => {
  const { role } = useRole();
  const c = roleContent[role];

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
  };
  const item = {
    hidden: { y: 24, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", damping: 14, stiffness: 120 } },
  };

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = c.resume;
    link.download = c.resume.split("/").pop();
    link.click();
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-grid"
      style={{ background: "var(--bg-primary)" }}
    >
      {/* Ambient glow blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute -top-40 -left-32 w-[560px] h-[560px] rounded-full blur-[120px]"
          style={{ background: "radial-gradient(circle, rgba(99,102,241,0.35), transparent 70%)" }}
          animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-40 -right-24 w-[520px] h-[520px] rounded-full blur-[120px]"
          style={{ background: "radial-gradient(circle, rgba(168,85,247,0.28), transparent 70%)" }}
          animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
          transition={{ duration: 17, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full blur-[110px]"
          style={{ background: "radial-gradient(circle, rgba(245,179,1,0.18), transparent 70%)" }}
          animate={{ opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto px-6 pt-24 pb-16 text-center"
      >
        {/* Availability status */}
        <motion.div variants={item} className="flex justify-center">
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium border"
            style={{ background: "var(--bg-secondary)", borderColor: "var(--border)" }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            {profile.availability}
          </span>
        </motion.div>

        {/* Signature name */}
        <motion.div variants={item} className="mt-8">
          <p className="text-sm uppercase tracking-[0.35em] text-[var(--text-secondary)] mb-2">Hi, I'm</p>
          <h1 className="font-script text-gold text-6xl md:text-8xl leading-[0.9]">
            Feranmi Oyetunde
          </h1>
        </motion.div>

        {/* Role-aware headline */}
        <div className="mt-6 min-h-[3.5rem]">
          <AnimatePresence mode="wait">
            <motion.p
              key={role + "-tag"}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4 }}
              className="text-2xl md:text-4xl font-display font-bold text-[var(--text-primary)]"
            >
              {c.tagline} <span className="text-gradient">{c.taglineAccent}</span>
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Role label + stack */}
        <motion.div variants={item} className="mt-5 space-y-1">
          <AnimatePresence mode="wait">
            <motion.p
              key={role + "-intro"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="text-base md:text-lg text-[var(--text-secondary)] max-w-2xl mx-auto"
            >
              {c.intro}
            </motion.p>
          </AnimatePresence>
          <p className="text-sm font-medium text-[var(--text-secondary)] pt-2 tracking-wide">
            {c.stack}
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div variants={item} className="mt-9 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5"
            style={{ background: "linear-gradient(120deg, var(--accent), var(--accent-2))" }}
          >
            View Projects
            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>
          <button
            onClick={downloadResume}
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold border transition-all hover:-translate-y-0.5"
            style={{ borderColor: "var(--accent)", color: "var(--text-primary)", background: "var(--bg-secondary)" }}
          >
            <FiDownload /> Download Résumé
          </button>
        </motion.div>

        {/* Socials */}
        <motion.div variants={item} className="mt-10 flex gap-5 justify-center text-[var(--text-secondary)]">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"
             className="hover:text-[var(--accent)] transition-colors hover:-translate-y-0.5 transform">
            <FiGithub size={22} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
             className="hover:text-[var(--accent)] transition-colors hover:-translate-y-0.5 transform">
            <FiLinkedin size={22} />
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 flex justify-center" style={{ borderColor: "var(--border)" }}>
          <motion.div
            className="w-1.5 h-2.5 rounded-full mt-2"
            style={{ background: "var(--accent)" }}
            animate={{ y: [0, 10, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.6, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};
