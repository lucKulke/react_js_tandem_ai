/** @type {import('tailwindcss').Config} */
export default {
  plugins: [require("daisyui")],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        middle: "990px",
        wide: "1440px",
      },
    },
  },
};
