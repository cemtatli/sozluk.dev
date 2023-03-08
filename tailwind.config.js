const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        15: "3.75rem",
        4.5: "1.125rem",
      },
      colors: {
        ebony: {
          50: "#f3f6fc",
          100: "#e6ecf8",
          200: "#c7d7f0",
          300: "#96b6e3",
          400: "#5d90d3",
          500: "#3972be",
          600: "#2858a1",
          700: "#224782",
          800: "#1f3e6d",
          900: "#0e1829",
        },
        azure: {
          50: "#edfbff",
          100: "#d6f3ff",
          200: "#b5edff",
          300: "#83e4ff",
          400: "#48d2ff",
          500: "#1eb4ff",
          600: "#0698ff",
          700: "#0077e6",
          800: "#0864c5",
          900: "#0d569b",
        },
        flamingo: {
          50: "#fef3f2",
          100: "#ffe2e1",
          200: "#ffccc9",
          300: "#fea8a3",
          400: "#fb756e",
          500: "#f3473e",
          600: "#e02b22",
          700: "#bd2018",
          800: "#9c1f18",
          900: "#81201b",
        },
        "bright-sun": {
          50: "#fefbe8",
          100: "#fff8c2",
          200: "#ffed89",
          300: "#ffdc49",
          400: "#fdc612",
          500: "#ecac06",
          600: "#cc8402",
          700: "#a35d05",
          800: "#86490d",
          900: "#723c11",
        },
      },
      screens: {
        xs: "425px",
      },
      fontFamily: {
        sans: ['var(--font-inter)', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
