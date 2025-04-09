module.exports = {
  content: [
    "./index.html",
    "./styles/**/*.css",
    "./components/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        secondary: 'var(--color-secondary)',
      },
    },
  },
  plugins: [],
}