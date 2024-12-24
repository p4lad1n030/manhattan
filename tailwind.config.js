/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        gvibes: ['Great Vibes', 'cursive'],//title h1
        ral: ['Raleway', 'sans-serif'],//title h2 - h6
        robotoc: ['Roboto Condensed', 'sans-serif'], // paragraph
      },
      colors: {
        'gcor': 'linear-gradient(to right, #FF00D9, #4B3265)',
        'vviolet': '#4B3265',
        'ppink': '#FF00D9'
      },
    },
  },
  plugins: [
    function ({ addUtilities }) { addUtilities({ '.bg-gcor': { background: 'linear-gradient(to right, #FF00D9, #4B3265)', }, }); },
  ],
}

