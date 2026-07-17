import React, { useState, useEffect, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";
import { ThemeContext } from "../../context/ThemeContext";
import { RoleToggle } from "./RoleToggle";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Stack" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("home");
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      for (const { id } of navItems) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActive(id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (e, id) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl border-b shadow-lg"
          : "border-b border-transparent"
      }`}
      style={{
        background: scrolled ? "color-mix(in srgb, var(--bg-primary) 82%, transparent)" : "transparent",
        borderColor: scrolled ? "var(--border)" : "transparent",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-[72px] flex items-center justify-between gap-4">
        {/* Signature logo */}
        <a href="#home" onClick={(e) => go(e, "home")} className="flex items-baseline gap-0.5 shrink-0">
          <span className="font-script text-3xl leading-none text-gold">Feranmi</span>
          <span className="text-gradient font-display font-extrabold text-lg">.dev</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => go(e, item.id)}
                className={`relative px-3 py-2 text-sm font-medium rounded-full transition-colors ${
                  active === item.id
                    ? "text-[var(--text-primary)]"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                }`}
              >
                {item.label}
                {active === item.id && (
                  <motion.span
                    layoutId="navActive"
                    className="absolute inset-0 rounded-full -z-10"
                    style={{ background: "var(--accent-soft)" }}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden sm:block">
            <RoleToggle size="sm" />
          </div>
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2.5 rounded-full border text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            style={{ borderColor: "var(--border)", background: "var(--bg-secondary)" }}
          >
            {theme === "dark" ? <FiSun size={16} /> : <FiMoon size={16} />}
          </button>
          <button
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
            className="lg:hidden p-2.5 rounded-full border text-[var(--text-primary)]"
            style={{ borderColor: "var(--border)", background: "var(--bg-secondary)" }}
          >
            {mobileOpen ? <FiX size={16} /> : <FiMenu size={16} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden border-t"
            style={{ background: "var(--bg-primary)", borderColor: "var(--border)" }}
          >
            <ul className="px-6 py-4 flex flex-col gap-1">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => go(e, item.id)}
                    className={`block px-3 py-2.5 rounded-lg font-medium ${
                      active === item.id
                        ? "text-[var(--text-primary)] bg-[var(--accent-soft)]"
                        : "text-[var(--text-secondary)]"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="pt-3 sm:hidden">
                <RoleToggle />
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
