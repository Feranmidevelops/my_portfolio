import React, { createContext, useContext, useState, useLayoutEffect, useCallback } from "react";

/**
 * Feranmi targets two career tracks:
 *   - "swe" → Software Engineer
 *   - "it"  → IT Systems Engineer (Microsoft 365 / Power Automate)
 * The whole site (hero, summary, skills, experience, resume download) reframes
 * based on the active role. Projects stay shared across both.
 */
export const RoleContext = createContext();

export const ROLES = {
  swe: { key: "swe", label: "Software Engineer", short: "SWE" },
  it: { key: "it", label: "IT Systems Engineer", short: "IT / M365" },
};

/** The track this visitor picked last time, or "swe" (also on the server). */
export const readSavedRole = () => {
  try {
    return typeof window !== "undefined" && localStorage.getItem("role") === "it" ? "it" : "swe";
  } catch {
    return "swe";
  }
};

export const RoleProvider = ({ children }) => {
  // The prerendered HTML is the Software track, and main.jsx only hydrates it
  // for visitors whose saved track is "swe". Anyone who picked IT gets a fresh
  // client render, so the saved track can be used from the first render.
  const [role, setRole] = useState(readSavedRole);

  // public/theme-init.js hides the page for IT visitors until this point, so
  // they never see the Software track first. Before paint, hence layout effect.
  useLayoutEffect(() => {
    document.documentElement.classList.remove("role-pending");
  }, []);

  const changeRole = useCallback((next) => {
    setRole(next);
    localStorage.setItem("role", next);
  }, []);

  const toggleRole = useCallback(() => {
    setRole((prev) => {
      const next = prev === "swe" ? "it" : "swe";
      localStorage.setItem("role", next);
      return next;
    });
  }, []);

  return (
    <RoleContext.Provider value={{ role, changeRole, toggleRole, ROLES }}>
      {children}
    </RoleContext.Provider>
  );
};

export const useRole = () => useContext(RoleContext);
