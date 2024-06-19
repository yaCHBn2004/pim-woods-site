/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'header-pic': "url('/src/assets/images/intro.jpg')", // Adjust the path as necessary
      },
      colors: {
        'primary': "#3A2216",
        'secondary': "#9E573D",
        'bg': "#EDE8C8",
        'darkBrown': "#110D0A",
        'text-white': "#DEDCDB",
        "light-text": "#514537",
        "light-text-2": "#F1F1F0"
      },
    },
  },
  plugins: [],
};