/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        flightmspurple: "#5E56C7",
        flightmsdarkpurple: "#1A103D",
        flightmsgray: "#808080",
        flightmsred: "#ff0000",
        flightmslightred: "#FFC1C3",
        flightmswhite: "#FFFFFF",
        flightmslightgray: "#f6f6f6",
      },
      fontFamily: {
        poppins: ["poppins", "Arial", "sans-serif"],
      },
      fontWeight: {
        light: "200",
        normal: "400",
        medium: "500",
        bold: "700",
      },
      backgroundImage: {
        flightmspurplegradient:
          "linear-gradient(135deg, #1A103D, #3D348B, #5E56C7)",
      },
    },
  },
  plugins: [],
};
