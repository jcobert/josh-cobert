/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'theme-primary': 'rgb(33, 112, 196)',
      },
      fontFamily: {
        'quicksand': ['"Quicksand"', 'sans-serif'],
        'flamenco': ['"Flamenco"', 'cursive']
      },
    },
  },
  plugins: [],
};
