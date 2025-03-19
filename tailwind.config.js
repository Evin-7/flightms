/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        flightmspurple: "#5E56C7",
      },
      backgroundImage: {
        flightmspurplegradient:
          "linear-gradient(135deg, #1A103D, #3D348B, #5E56C7)",
      },
    },
  },
  plugins: [],
};
