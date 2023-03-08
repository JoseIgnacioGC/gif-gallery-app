/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{ts,tsx}', './frontend/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-gunmetal': '#181D31',
        'steel-teal': '#678983',
        pearl: '#E6DDC4',
        eggshell: '#F0E9D2'
      }
    }
  },
  plugins: []
}
