/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "boored-purple": '#8151ec',
      },
    },
  },
  plugins: [require("daisyui")],
};
