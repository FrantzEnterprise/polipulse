/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // cover all file types you're using
    "./src/**/**/*.{js,jsx,ts,tsx}" // deeper nested paths just in case
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}