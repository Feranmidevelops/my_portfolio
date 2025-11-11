import React from "react";
import { motion } from "framer-motion";
import "./About.css";

export const About = () => {
  const skills = {
    Frontend: [
      "React",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "Bootstrap",
      "HTML5/CSS3",
    ],
    Backend: ["Node.js", "Express", "Python", "Flask", "RESTful APIs"],
    "Database & Tools": ["MongoDB", "Git", "Docker", "Vercel", "Postman"],
  };

  return (
    <section id="about" className="about-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="about-header"
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Full-Stack Developer passionate about building fast, scalable,
            elegant, and user-focused digital products.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="about-main">
          {/* Left: Profile Card */}
          <motion.div
            className="profile-card"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="profile-image-container">
              <div className="profile-image">
                {/* Add your image here */}
                <img
                  src="/profile.jpg"
                  alt="Feranmi"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.parentElement.innerHTML =
                      '<div class="profile-placeholder">FO</div>';
                  }}
                />
              </div>
              <div className="profile-decoration"></div>
            </div>

            <div className="profile-info">
              <h3>Feranmi Oyetunde</h3>
              <p className="profile-role">Full-Stack Developer</p>
              <p className="profile-location">📍 Lagos, Nigeria</p>

              <div className="profile-stats">
                <div className="stat">
                  <span className="stat-number">2+</span>
                  <span className="stat-label">Years Experience</span>
                </div>
                <div className="stat">
                  <span className="stat-number">100+</span>
                  <span className="stat-label">Projects Completed</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: About Text & Skills */}
          <motion.div
            className="about-details"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="about-text-section">
              <h3 className="about-subtitle">👋 Hey there!</h3>
              <p className="about-text">
                I'm <strong>Feranmi</strong>, a full-stack developer who loves
                turning ideas into real, working digital products. I work with{" "}
                <strong>React, Node.js, Python</strong>, and everything in
                between to build digital products that are efficient and scales well.
              </p>
              <p className="about-text">
                I'm all about problem solving, learning new technologies, and
                building impactful solutions. I enjoy the process of converting
                ideas to final digital experiences.
              </p>
            { /* <p className="about-text">
                When I'm not coding, I'm probably contributing to open source,
                helping other devs level up, or tinkering with some new
                technology.
              </p> */}
            </div>

            {/* Skills Grid */}
            <div className="skills-section">
              <h3 className="skills-title">🛠️ Technical Skills</h3>
              <div className="skills-categories">
                {Object.entries(skills).map(
                  ([category, techs], categoryIndex) => (
                    <motion.div
                      key={category}
                      className="skill-category"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 + categoryIndex * 0.1 }}
                    >
                      <h4 className="category-title">{category}</h4>
                      <div className="skill-tags">
                        {techs.map((tech, index) => (
                          <motion.span
                            key={tech}
                            className="skill-tag"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                              delay: 0.7 + categoryIndex * 0.1 + index * 0.05,
                            }}
                            whileHover={{ scale: 1.05, y: -2 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  )
                )}
              </div>
            </div>

            {/* Quick Links */}
            <div className="about-actions">
              <a href="#contact" className="about-btn primary">
               Reach Me
              </a>
              <a href="#resume" className="about-btn secondary">
                View My Resume
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
