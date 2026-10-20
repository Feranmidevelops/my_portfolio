import React, { useState, useEffect, useLayoutEffect, useRef, useContext } from "react";
import { m, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";
import { ThemeContext } from "../../context/ThemeContext";
import { RoleToggle } from "./RoleToggle";

const navItems = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Stack" },
  { id: "contact", label: "Contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("about");
  const { theme, toggleTheme } = useContext(ThemeContext);
  const linksRef = useRef(null);
  const [pill, setPill] = useState(null);

  // The highlight behind the active link is one span that slides between
  // links, measured from the DOM. Re-measured on resize and once the fonts
  // have loaded, since both change the link widths.
  useLayoutEffect(() => {
    const place = () => {
      const link = linksRef.current?.querySelector(`[data-nav="${active}"]`);
      if (link) setPill({ left: link.offsetLeft, width: link.offsetWidth });
    };
    place();
    window.addEventListener("resize", place);
    document.fonts?.ready.then(place);
    return () => window.removeEventListener("resize", place);
  }, [active]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      for (const { id } of navItems) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 130 && rect.bottom >= 130) {
            setActive(id);
            break;
          }
        }
      }
    };
    // Scroll events can fire many times a frame; measure at most once per frame.
    let frame = 0;
    const onScrollFrame = () => {
      if (!frame) frame = requestAnimationFrame(() => { frame = 0; onScroll(); });
    };
    window.addEventListener("scroll", onScrollFrame, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScrollFrame);
      cancelAnimationFrame(frame);
    };
  }, []);

  const go = (e, id) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 90, behavior: "smooth" });
  };

  return (
    <m.nav
      initial={{ y: -70 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 inset-x-0 z-50"
    >
      <div className="max-w-3xl mx-auto px-4 pt-4">
        <div
          className={`flex items-center justify-between gap-3 rounded-full pl-4 pr-2 py-2 transition-all ${
            scrolled ? "backdrop-blur-xl border shadow-sm" : "border border-transparent"
          }`}
          style={{
            background: scrolled ? "color-mix(in srgb, var(--bg-elevated) 78%, transparent)" : "transparent",
            borderColor: scrolled ? "var(--border)" : "transparent",
          }}
        >
          {/* Desktop links */}
          <ul ref={linksRef} className="relative hidden md:flex items-center gap-0.5">
            {pill && pill.width > 0 && (
              <span
                aria-hidden="true"
                className="absolute top-0 bottom-0 left-0 rounded-full transition-[transform,width] duration-300 ease-out motion-reduce:transition-none"
                style={{ width: pill.width, transform: `translateX(${pill.left}px)`, background: "var(--accent-soft)" }}
              />
            )}
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  data-nav={item.id}
                  onClick={(e) => go(e, item.id)}
                  className={`relative px-3.5 py-1.5 text-sm font-medium rounded-full transition-colors ${
                    active === item.id ? "text-[var(--text-primary)]" : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile: brand */}
          <span className="md:hidden font-display font-bold text-[var(--text-primary)] pl-1">Feranmi O.</span>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            <div className="hidden sm:block">
              <RoleToggle size="sm" />
            </div>
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2.5 rounded-full border text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
              style={{ borderColor: "var(--border)", background: "var(--bg-elevated)" }}
            >
              {theme === "dark" ? <FiSun size={15} /> : <FiMoon size={15} />}
            </button>
            <button
              onClick={() => setMobileOpen((o) => !o)}
              aria-label="Toggle menu"
              className="md:hidden p-2.5 rounded-full border text-[var(--text-primary)]"
              style={{ borderColor: "var(--border)", background: "var(--bg-elevated)" }}
            >
              {mobileOpen ? <FiX size={15} /> : <FiMenu size={15} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <m.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="md:hidden mt-2 rounded-2xl border p-3"
              style={{ background: "var(--bg-elevated)", borderColor: "var(--border)" }}
            >
              <ul className="flex flex-col">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={(e) => go(e, item.id)}
                      className={`block px-3 py-2.5 rounded-lg font-medium ${
                        active === item.id ? "text-[var(--text-primary)] bg-[var(--accent-soft)]" : "text-[var(--text-secondary)]"
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
            </m.div>
          )}
        </AnimatePresence>
      </div>
    </m.nav>
  );
};
