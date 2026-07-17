import React from "react";
import { motion } from "framer-motion";
import { useRole } from "../../context/RoleContext";

/**
 * Pill switch between the two career tracks. The active pill slides with a
 * shared layoutId for a smooth motion effect.
 */
export const RoleToggle = ({ size = "md" }) => {
  const { role, changeRole } = useRole();

  const options = [
    { key: "swe", label: "Software" },
    { key: "it", label: "IT / M365" },
  ];

  const pad = size === "sm" ? "px-3 py-1 text-xs" : "px-4 py-1.5 text-sm";

  return (
    <div
      className="relative inline-flex items-center rounded-full p-1 border"
      style={{ background: "var(--bg-secondary)", borderColor: "var(--border)" }}
      role="tablist"
      aria-label="Choose career track"
    >
      {options.map((opt) => {
        const active = role === opt.key;
        return (
          <button
            key={opt.key}
            role="tab"
            aria-selected={active}
            onClick={() => changeRole(opt.key)}
            className={`relative z-10 rounded-full font-semibold transition-colors ${pad} ${
              active ? "text-white" : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
            }`}
          >
            {active && (
              <motion.span
                layoutId="roleActivePill"
                className="absolute inset-0 rounded-full -z-10"
                style={{ background: "linear-gradient(120deg, var(--accent), var(--accent-2))" }}
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            {opt.label}
          </button>
        );
      })}
    </div>
  );
};
