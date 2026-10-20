import React from "react";
import { useRole } from "../../context/RoleContext";

const options = [
  { key: "swe", label: "Software" },
  { key: "it", label: "IT / M365" },
];

/**
 * Pill switch between the two career tracks. The two options share the
 * width equally, so the active pill is one half-width span that slides
 * across with a CSS transform.
 */
export const RoleToggle = ({ size = "md" }) => {
  const { role, changeRole } = useRole();

  const pad = size === "sm" ? "px-3 py-1 text-xs" : "px-4 py-1.5 text-sm";
  const activeIndex = Math.max(0, options.findIndex((opt) => opt.key === role));

  return (
    <div
      className="relative inline-grid grid-cols-2 items-center rounded-full p-1 border"
      style={{ background: "var(--bg-secondary)", borderColor: "var(--border)" }}
      role="tablist"
      aria-label="Choose career track"
    >
      <span
        aria-hidden="true"
        className="absolute top-1 bottom-1 left-1 rounded-full transition-transform duration-300 ease-out motion-reduce:transition-none"
        style={{
          width: "calc(50% - 0.25rem)",
          background: "var(--contrast-panel)",
          transform: `translateX(${activeIndex * 100}%)`,
        }}
      />
      {options.map((opt) => {
        const active = role === opt.key;
        return (
          <button
            key={opt.key}
            role="tab"
            aria-selected={active}
            onClick={() => changeRole(opt.key)}
            className={`relative rounded-full font-semibold transition-colors whitespace-nowrap ${pad}`}
            style={{ color: active ? "var(--contrast-text)" : "var(--text-secondary)" }}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
};
