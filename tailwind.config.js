/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: ['"Raleway"', "sans-serif"],
      },
      colors: {
        "better-black": "#383838",
        "light-white": "#FCFAF8",
        "white-text": "#E0E0E0",
      },
    },
  },
  plugins: [],
};
