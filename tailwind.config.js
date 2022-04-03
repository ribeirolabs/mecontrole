const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./app/**/*.{ts,tsx,jsx,js}'],
  theme: {
    fontFamily: {
      sans: ['Lato', 'sans-serif'],
    },
    extend: {
      colors: {
        background: {
          DEFAULT: colors.zinc['900'],
          contrast: colors.zinc['200'],
        },
      },
      typography: ({ theme }) => ({
        main: {
          css: {
            '--tw-prose-headings': theme('colors.background.contrast'),
            '--tw-prose-body': theme('colors.zinc.300'),
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
