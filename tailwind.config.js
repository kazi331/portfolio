/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // primary: "#00ffc6",
        accent: "#00ffc6"
      }
    },
  },

  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ]
}
