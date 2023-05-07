/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'default': '#dddddd',
        'paleBlue': '#7695EC'
      }

    },
  },
  plugins: [],
}