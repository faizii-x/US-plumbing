/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "8rem", 
          xl: "9rem",
          "2xl": "6rem",
        },
      },
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        customBlue: {
          light: "#4179E4",
          dark: "#004750",
          para: "#545454",
        },
      },
     
    },
  },
  plugins: [],
}

