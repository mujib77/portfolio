/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        surface: "#0a0a0a",
        muted: "#a3a3a3",
        border: "#1f1f1f",
        accent: "#ffffff",
      },
      fontFamily: {
        sans: ["'Space Grotesk'", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 20px 60px rgba(255, 255, 255, 0.05)",
      },
    },
  },
  plugins: [],
};
