/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      'sans': ['Montserrat', 'sans-serif'],
    },
  },
  plugins: [],
  darkMode: "class"
}



