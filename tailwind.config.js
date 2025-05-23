/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FF0000', // Red Dot Classroom primary red
        'secondary': '#1E3A8A',
      },
      fontFamily: {
        sans: ['Hind Siliguri', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
