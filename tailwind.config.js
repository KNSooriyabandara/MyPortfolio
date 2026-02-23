/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
            fontFamily: {
        hacked: ["Hacked-KerX", "sans-serif"],
        retro: ["Blockblueprint-LV7z5", "sans-serif"],
      },

      colors: {
        primary: "#000000",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        purple: "#7b5cf0",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};
