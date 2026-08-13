/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Jost', 'sans-serif'],
      },
    },
  },
  plugins: [],
  darkMode: "class"
}
