import React, { useState } from "react";
import { motion } from "framer-motion";
import { FadeIn } from "../animations/FadeIn";
import "./Resume.css";

export const Resume = () => {
  const [expanded, setExpanded] = useState(false);

  const resumeData = {
    experience: [
      {
        title: "Full-Stack Developer",
        company: "University of Ilorin",
        period: "2023 – 2024",
        description:
          "Built an educational resource-sharing platform that allows lecturers to upload and manage materials, while students can view and comment in real time.",
        achievements: [
          "Developed CRUD-based lecturer admin interface for managing resources.",
          "Integrated role-based access control for lecturer and student permissions.",
          "Implemented real-time updates and responsive UI for seamless collaboration.",
        ],
      },
      {
        title: "Software Engineering Intern",
        company: "Drevad Ltd (UK)",
        period: "Jan 2025 – Mar 2025",
        description:
          "Assisted in backend and frontend development for live client projects in an agile environment.",
        achievements: [
          "Contributed to scalable full-stack features using React and Node.js.",
          "Enhanced API performance through testing and optimization.",
          "Collaborated with a remote international engineering team.",
        ],
      },
      {
        title: "Freelance Software Developer",
        company: "Selar.co",
        period: "2024",
        description:
          "Developed a Python-based web scraper that automated analytics and user segmentation using real-time data.",
        achievements: [
          "Built automation with Flask and Selenium to scrape social media follower data.",
          "Designed dynamic user classification logic based on engagement metrics.",
          "Optimized scraping performance and data integrity with smart error handling.",
        ],
      },
      {
        title: "Software Engineering Intern",
        company: "Flance",
        period: "Jul 2024 – Oct 2024",
        description:
          "Supported web app development and feature testing in a fast-paced startup environment.",
        achievements: [
          "Developed reusable UI components in React.",
          "Improved UX and component performance through debugging and code reviews.",
        ],
      },
      {
        title: "Web Developer",
        company: "BigMik Gadget Hub",
        period: "Feb 2024",
        description:
          "Designed and maintained a responsive e-commerce prototype for gadget sales.",
        achievements: [
          "Implemented dynamic product listings using React and Node.js.",
          "Built basic cart functionality and improved mobile responsiveness.",
        ],
      },
    ],
    education: [
      {
        degree: "B.Sc. Educational Technology",
        institution: "University of Ilorin, Kwara State",
        period: "2019 – 2024",
        gpa: "4.0 / 5.0",
      },
    ],
    certifications: [
      "CS50 Web Development with Python & JavaScript – Harvard University",
      "Responsive Web Design & OOP with Python – FreeCodeCamp",
      "Backend Web Development with Django – FreeCodeCamp",
      "Web Scraping with Python (BeautifulSoup, Selenium)",
      "React Full Course – Eudereka",
      "React Full Course - Udemy ",
      "HNG Internship – Backend Development (Stage 3)",
      "Microsoft Azure Fundamentals",
      "Cloud Security Fundamentals – Simplilearn",
    ],
  };

  const visibleExperiences = expanded
    ? resumeData.experience
    : resumeData.experience.slice(0, 2);

  return (
    <section id="resume" className="resume-section">
      <div className="container">
        <FadeIn>
          <div className="resume-header">
            <h2 className="section-title">Resume</h2>
            <p className="section-subtitle">
              Professional Experience, Education, and Certifications
            </p>
          </div>
        </FadeIn>

        <div className="resume-content-wrapper">
          <div className="resume-doc">
            {/* Experience */}
            {visibleExperiences.map((exp, index) => (
              <motion.div
                key={index}
                className="resume-entry"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3>{exp.title}</h3>
                <h4>{exp.company}</h4>
                <span className="period">{exp.period}</span>
                <p>{exp.description}</p>
                <ul>
                  {exp.achievements.map((ach, i) => (
                    <li key={i}>{ach}</li>
                  ))}
                </ul>
              </motion.div>
            ))}

            {/* Education */}
            <div className="resume-entry">
              <h3>Education</h3>
              {resumeData.education.map((edu, i) => (
                <div key={i}>
                  <h4>{edu.degree}</h4>
                  <p>{edu.institution}</p>
                  <span className="period">{edu.period}</span>
                  <p>CGPA: {edu.gpa}</p>
                </div>
              ))}
            </div>

            {/* Certifications (only visible when expanded) */}
            {expanded && (
              <div className="resume-entry">
                <h3>Certifications</h3>
                <ul>
                  {resumeData.certifications.map((cert, i) => (
                    <li key={i}>{cert}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Buttons */}
          <div className="toggle-wrapper">
            <motion.button
              className="toggle-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? "View Less" : "View More"}
            </motion.button>

            <motion.button
              className="download-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                // Force download
                const link = document.createElement("a");
                link.href = "/My_Resume.pdf";
                link.download = "Feranmi_Oyetunde_Resume.pdf"; // Custom filename
                link.click();
              }}
            >
              📄 Download PDF Format
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};
