/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary': "#3A2216",
        'secondary': "#9E573D",
        'bg': "#EDE8C8",
        'darkBrown': "#110D0A",
        'text-white': "#DEDCDB"
      },
    },
  },
  plugins: [],
};