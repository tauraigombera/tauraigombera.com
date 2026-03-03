/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        body: "#111827",
        primary: "#030712",
        "selected-text": "#A3A3FF",
        theme: "#4f46e5",
        gray: "#e5e7eb",
        nav: "#404053",
        secondary: "#9191A4",
        "input-border": "#565666",
        input: "#2A2A35",
      },
      screens: {
        tallscreen: { raw: "(min-aspect-ration: 13/20)" },
      },
      keyframes: {
        "open-menu": {
          "0%": { transform: "scaleY(0)" },
          "80%": { transform: "scaleY(1.2)" },
          "100%": { transform: "scaleY(1)" },
        },
      },
      animation: {
        "open-menu": "open-menu 0.5s ease-in-out forwards",
      },
      fontFamily: {
        atkinson: ["Atkinson Hyperlegible", "sans-serif"],
      },
    },
  },
  plugins: [],
  plugins: [require("@tailwindcss/typography")],
};
