/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#9099FF',
        secondary:'#85F26C',
        tertiary:'#1C0544'
      },
      screens: {
        'xs': '475px',
      },
    },
  },
  plugins: [],
}

