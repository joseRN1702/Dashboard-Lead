/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./js/**/*.js",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary:{ 
          default:'#2692f0',
        light:"57aeff",
        dark:"0d47a1"
      }
    },
  },
},
variantes: {
  extend: {}
},
plugins: [],
}