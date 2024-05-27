/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // screens: {
    //   'tablet': '640px',
    //   'laptop': '1024px',
    //   'desktop': '1280px',
    
    // },
    extend: {
      colors: {
        primaryLighter: "#FFFFFF",
        primary: "#F8FCFF",
        primaryDarker: "#EEEEEE",
        primaryDarker100: "#DCDCDC",

        secondaryLighter: "#0E0E0E",
        secondary: "#080808",
        secondaryDarker: "#000000",

        accent: "#0367FD",
        google: "#F2F2F2",
      },
    },
  },
  plugins: [],
}

