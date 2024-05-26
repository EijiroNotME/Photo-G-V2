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
        primaryDarker: "#EFEFEF",
        primaryDarker100: "#D3D3D3",

        secondaryLighter: "#0E0E0E",
        secondary: "#080808",
        secondaryDarker: "#000000",

        accent: "#0367FD",
      },
    },
  },
  plugins: [],
}

