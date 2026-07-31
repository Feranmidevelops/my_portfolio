import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  // Keep the existing REACT_APP_* env var names so the values already
  // configured in Netlify (and in .env.local) keep working after the
  // migration off Create React App. VITE_* is also accepted going forward.
  envPrefix: ["VITE_", "REACT_APP_"],

  build: {
    // Netlify publishes `build/` (see netlify.toml) — keep that contract
    // instead of Vite's default `dist/`.
    outDir: "build",
    sourcemap: false,
  },

  server: {
    port: 3000,
    open: false,
  },
});
