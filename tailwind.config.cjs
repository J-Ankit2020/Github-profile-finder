/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {},
    fontFamily: {
      mono: ['Space Mono', 'monospace']
    },
    colors: {
      white: '#ffff',
      lightPrimary: '#F7F8FE',
      darkBlue: '#0079FF',
      black: 'black',
      darkPrimary: '#151C2E',
      darkSecondary: '#1F2B47'
    }
  },
  plugins: [],
  darkMode: 'class'
}
