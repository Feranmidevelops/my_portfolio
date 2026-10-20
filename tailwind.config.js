/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class", '[data-theme="dark"]'],
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // `font-display` is used for monograms and labels; it reads the same
      // variable as the headings in globals.css.
      fontFamily: { display: ["var(--font-display)"] },
    },
  },
  plugins: [],
}
