import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  SiReact, SiTypescript, SiJavascript, SiNextdotjs, SiNodedotjs, SiExpress,
  SiTailwindcss, SiVite, SiPostgresql, SiMongodb, SiSupabase, SiPython,
  SiJsonwebtokens, SiVitest, SiGit, SiGithub, SiPostman, SiSwagger,
  SiVercel, SiNetlify, SiExpo, SiAppwrite, SiWordpress, SiSelenium, SiDotnet,
} from "react-icons/si";
import { FiCloud, FiUsers, FiMail, FiWifi, FiShield, FiHardDrive, FiActivity, FiServer, FiRadio, FiDatabase } from "react-icons/fi";
import { SectionHeading } from "./About";
import { FadeIn } from "../animations/FadeIn";
import { useRole } from "../../context/RoleContext";

const stacks = {
  swe: [
    { label: "React", Icon: SiReact, c: "#61DAFB" },
    { label: "TypeScript", Icon: SiTypescript, c: "#3178C6" },
    { label: "JavaScript", Icon: SiJavascript, c: "#F7DF1E" },
    { label: "Next.js", Icon: SiNextdotjs },
    { label: "React Native / Expo", Icon: SiExpo },
    { label: "Node.js", Icon: SiNodedotjs, c: "#5FA04E" },
    { label: "Express", Icon: SiExpress },
    { label: ".NET", Icon: SiDotnet, c: "#512BD4" },
    { label: "C#", text: "C#", c: "#512BD4" },
    { label: "SignalR", Icon: FiRadio, c: "#0078D4" },
    { label: "EF Core", Icon: FiDatabase, c: "#512BD4" },
    { label: "Tailwind CSS", Icon: SiTailwindcss, c: "#06B6D4" },
    { label: "Vite", Icon: SiVite, c: "#646CFF" },
    { label: "PostgreSQL", Icon: SiPostgresql, c: "#4169E1" },
    { label: "MongoDB", Icon: SiMongodb, c: "#47A248" },
    { label: "Supabase", Icon: SiSupabase, c: "#3FCF8E" },
    { label: "Python", Icon: SiPython, c: "#3776AB" },
    { label: "JWT Auth", Icon: SiJsonwebtokens },
    { label: "Vitest", Icon: SiVitest, c: "#6E9F18" },
    { label: "Appwrite", Icon: SiAppwrite, c: "#FD366E" },
    { label: "Git", Icon: SiGit, c: "#F05032" },
    { label: "GitHub", Icon: SiGithub },
    { label: "Postman", Icon: SiPostman, c: "#FF6C37" },
    { label: "Swagger", Icon: SiSwagger, c: "#85EA2D" },
    { label: "Vercel", Icon: SiVercel },
    { label: "Netlify", Icon: SiNetlify, c: "#00C7B7" },
  ],
  it: [
    { label: "Microsoft 365", Icon: FiCloud, c: "#0F6CBD" },
    { label: "SharePoint", Icon: FiServer, c: "#038387" },
    { label: "Power Automate", Icon: FiActivity, c: "#0066FF" },
    { label: "Teams", Icon: FiUsers, c: "#5059C9" },
    { label: "Exchange", Icon: FiMail, c: "#0F6CBD" },
    { label: "Networking", Icon: FiWifi },
    { label: "Cybersecurity", Icon: FiShield },
    { label: "Data Backups", Icon: FiHardDrive },
    { label: "WordPress", Icon: SiWordpress, c: "#21759B" },
    { label: "Python", Icon: SiPython, c: "#3776AB" },
    { label: "Selenium", Icon: SiSelenium, c: "#43B02A" },
    { label: "React", Icon: SiReact, c: "#61DAFB" },
    { label: "Node.js", Icon: SiNodedotjs, c: "#5FA04E" },
    { label: "TypeScript", Icon: SiTypescript, c: "#3178C6" },
    { label: "Git", Icon: SiGit, c: "#F05032" },
    { label: "GitHub", Icon: SiGithub },
  ],
};

const Box = ({ item }) => (
  <div
    title={item.label}
    className="shrink-0 w-16 h-16 rounded-xl border flex items-center justify-center transition-transform hover:-translate-y-0.5"
    style={{ background: "var(--bg-elevated)", borderColor: "var(--border)" }}
  >
    {item.Icon ? (
      <item.Icon size={26} style={{ color: item.c || "var(--text-secondary)" }} />
    ) : (
      <span className="font-display font-bold text-lg" style={{ color: item.c || "var(--text-primary)" }}>
        {item.text}
      </span>
    )}
  </div>
);

const Row = ({ items, direction }) => (
  <div className="marquee-wrap overflow-hidden py-1.5"
       style={{ WebkitMaskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
                maskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)" }}>
    <div className={`marquee marquee--${direction}`}>
      {[...items, ...items].map((item, i) => (
        <Box key={item.label + i} item={item} />
      ))}
    </div>
  </div>
);

export const Skills = () => {
  const { role } = useRole();
  const items = stacks[role];
  const rowA = items.filter((_, i) => i % 2 === 0);
  const rowB = items.filter((_, i) => i % 2 === 1).reverse();

  return (
    <section id="skills" className="scroll-mt-24 py-10">
      <FadeIn>
        <SectionHeading title="Stack" description="Tools I reach for, day to day." />
        <AnimatePresence mode="wait">
          <motion.div
            key={role}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-3"
          >
            <Row items={[...rowA, ...rowB]} direction="left" />
            <Row items={[...rowB, ...rowA]} direction="right" />
          </motion.div>
        </AnimatePresence>
      </FadeIn>
    </section>
  );
};
