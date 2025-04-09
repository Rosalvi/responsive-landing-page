/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./styles/**/*.css",
    "./components/*.html",
    "./assets/**/*.js"],
  theme: {
    extend: {
      colors: {
        secondary: 'var(--color-secondary)',
      },
    },
  },
  plugins: [],
};
