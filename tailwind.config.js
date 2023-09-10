/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    screens: {
      sm: "320px",
      md: "375px",
      lg: "425px",
      "tablet-sm": "640px",
      tablet: "768px",
      laptop: "1024px",
      desktop: "1280px",
      "desktop-lg": "1536px",
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        main: "#FF7575",
        background: "#232830",
      },
    },
  },
  plugins: [],
};
