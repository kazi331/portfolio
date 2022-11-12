/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#01F7C0"
      }
    },
  },

  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ]
}
