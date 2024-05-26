/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryLighter: "#FFFFFF",
        primary: "#F8FCFF",
        primaryDarker: "##E4E4E4",

        secondaryLighter: "#0E0E0E",
        secondary: "#080808",
        secondaryDarker: "#000000",

        accent: "#0367FD",
      },
    },
  },
  plugins: [],
}

