/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./components/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{md,mdx}",
    "./theme.config.tsx",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
