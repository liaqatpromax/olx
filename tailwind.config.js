/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          200: '#bfdbfe', // Or your preferred hex code for blue-200
        }
      }
    }
  },

  plugins: [],
}

