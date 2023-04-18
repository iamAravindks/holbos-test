/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        dim: "#f4f3f3",
      },
      keyframes: {
        "side-from-left": {
          from: { transform: "translateX(200px)" },
          to: { transform: "translateX(0)" },
        },
        "side-from-right": {
          from: { transform: "translateX(-200px)" },
          to: { transform: "translateX(0)" },
        },
      },
      animation: {
        "side-left": "side-from-left 300ms ease-in",
        "side-right": "side-from-right 300ms ease-in ",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["cmyk"],
  },
};
