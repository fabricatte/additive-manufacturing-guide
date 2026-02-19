/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "content/**/*.md",
      "./layouts/**/*.{html,js}",
      "./themes/pehtheme-hugo/**/*.{html,js}"
    ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography')
    ],
}