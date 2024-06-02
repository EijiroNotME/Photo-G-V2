import daisyui from './node_modules/daisyui'


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

        success: "#28a745", // Suitable green for success
        successDark: "#218838", // Darker green for success
        error: "#dc3545", // Suitable red for error
        errorDark: "#c82333", // Darker red for error
        caution: "#ffc107", // Suitable yellow for caution
        cautionDark: "#e0a800", // Darker yellow for caution
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light"] // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
   
  },
}

