/** @type {import('tailwindcss').Config} */
const theme = require("daisyui/src/colors/themes")["[data-theme=emerald]"];

module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Rubik, sans-serif",
    },
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        emerald: {
          ...theme,
          secondary: theme.neutral,
          "secondary-content": theme["neutral-content"],
          accent: "#facc15",
          "accent-content": "#382d00",
        },
      },
    ],
  },
};
