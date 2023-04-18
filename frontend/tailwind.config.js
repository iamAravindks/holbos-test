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
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["cmyk"],
  },
};
