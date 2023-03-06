/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // Or if using `src` directory:
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
      },
      screens: {
        xs: "425px",
      },
    },
  },
  plugins: [],
};
