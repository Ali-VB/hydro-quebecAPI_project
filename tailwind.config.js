/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "darkBlue": "#282962",
        "darkGreen":"#3D6C88",
        "lightBackground":"rgba(126, 148, 165, 0.49)",
      }
    },
  },
  plugins: [],
}

