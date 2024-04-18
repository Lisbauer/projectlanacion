
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        suecaslab1: [ "SuecasLab", "sans-serif"],
        suecaslab2: ["SuecasLab-Bold", "sans-serif"],
      },
      boxShadow: {
        grey: '1px 1px 6px -1px rgba(65, 65, 65, 0.253)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

