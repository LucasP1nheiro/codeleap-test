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
        'paleBlue': '#7695EC',
        'red': '#FF5151',
        'green': '#47B960'
      },
      textColor: {
        'strongGray': '#777777',
      }

    },
  },
  plugins: [],
}