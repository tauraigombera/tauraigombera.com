/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "selected-text": "#0d6da2",
        theme: "#0d6da2",
        gray: "#e5e7eb",
        mytext: "#575757",
        /* old theme color: #4f46e5; */
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
