/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        "90vh": "90vh",
        "85vh": "85vh",
      },
    },
    minHeight: {
      "[860px]": "860px",
      "[920px]": "92px",
      "[1100px]": "1100px",
      "[150px]": "150px",
    },
    fontSize: {
      xxs: ".50rem",
      xs: ".75rem",
      sm: ".875rem",
      base: "1rem",
      md: "1.100",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "2/5xl": "1.7rem",
      "3xl": "2rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
    },
    letterSpacing: {
      tightest: "-.075em",
      tighter: "-.05em",
      tight: "-.025em",
      normal: "0",
      wide: ".025em",
      wider: ".15em",
      widest: ".25em",
    },
    screens: {
      xxs: "560px",
      xs: "768px",
      sm: "1000px",
      md: "1360px",
      lg: "1240px",
      xl: "1860px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        xxs: "1rem",
        xs: "2rem",
        sm: "4rem",
        md: "5rem",
        lg: "10rem",
        xl: "18rem",
        "2xl": "20rem",
      },
    },
    fontFamily: {},
    borderColor: {
      ...colors,
      black: "#000000",
      primary: "#00A5DB",
      gold: "#EBD59D",
      secondary: "#0F2E5E",
      lightGray: "#dedede",
    },
    textColor: {
      ...colors,
      primary: "#00A5DB",
      secondary: "#0F2E5E",
      gold: "#EBD59D",
      lightGray: "#6C757D",
      darkGray: "#161616",
      flue: "#767676",
    },
    backgroundColor: {
      ...colors,
      primary: "#00A5DB",
      secondary: "#0F2E5E",
      lightGray: "#f8f9fd",
      darkGray: "#161616",
      dark: "#111",
    },
    fill: ({ theme }) => ({
      //primary: "var(--primary-color)",
      //secondary: "var(--secondary-color)",
      disabled: "#D6D6D6",
    }),
  },
  plugins: [],
};
