/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // foreground: '#F8F6F0',
        // background: '#990D54',

        foreground: "#990D54",
        background: "#F8F6F0",
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        anton: ['Anton', 'sans-serif']
      },
      fontSize: {
        xxs: '0.6rem'
      }
    },
  },
  plugins: [],
}