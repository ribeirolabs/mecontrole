/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        emerald: {
          ...require("daisyui/src/colors/themes")["[data-theme=emerald]"],
          secondary: "#adb3bd",
          "secondary-content": "#282d34",
          accent: "#facc15",
          "accent-content": "#382d00",
        },
      },
    ],
  },
};
