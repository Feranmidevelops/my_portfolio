import React, { createContext, useContext, useState, useEffect, useCallback } from "react";

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

export const RoleProvider = ({ children }) => {
  const [role, setRole] = useState("swe");

  useEffect(() => {
    const saved = localStorage.getItem("role");
    if (saved === "swe" || saved === "it") setRole(saved);
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
