import React from "react";
import { motion } from "framer-motion";
import "./Hero.css";

export const Hero = () => {
  const nameVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 12, stiffness: 200 },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 12, stiffness: 200 },
    },
  };

  const firstName = "Feranmi";
  const lastName = "Oyetunde";

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <motion.div
          variants={nameVariants}
          initial="hidden"
          animate="visible"
          className="hero-name"
        >
          {/* First Name */}
          <motion.span className="name-word" variants={wordVariants}>
            {firstName.split("").map((char, index) => (
              <motion.span
                key={`first-${index}`}
                variants={letterVariants}
                style={{ display: "inline-block" }}
              >
                {char}
              </motion.span>
            ))}
          </motion.span>

          {/* Space between names */}
          <span className="name-space"> </span>

          {/* Last Name */}
          <motion.span className="name-word" variants={wordVariants}>
            {lastName.split("").map((char, index) => (
              <motion.span
                key={`last-${index}`}
                variants={letterVariants}
                style={{ display: "inline-block" }}
              >
                {char}
              </motion.span>
            ))}
          </motion.span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="hero-tagline"
        >
          Full-Stack Developer building scalable, high quality and efficient
          digital solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="hero-cta"
        >
          <a href="#projects" className="cta-button">
            View My Work
            <span className="arrow">→</span>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="scroll-indicator"
        >
          <div className="mouse">
            <div className="wheel"></div>
          </div>
        </motion.div>
      </div>

      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
      </div>
    </section>
  );
};