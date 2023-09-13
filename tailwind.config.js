/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        userRed: "hsl(0, 100%, 74%)",
        userGreen: "hsl(154, 59%, 51%)",
        userBlue: "hsl(248, 32%, 49%)",
        userDarkBlue: "hsl(249, 10%, 26%)",
        userGrayishBlue: "hsl(246, 25%, 77%)"
      },
    },
  },
  plugins: [],
}