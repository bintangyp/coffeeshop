/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        myprimary: "#CB9363",
        mysecondary: "#EBEBEB",
        myaccent: "#FBFBFB",
        mytext: "#1B1B13",
      },
      fontFamily: {
        sans: ["Helvetica", "Arial", "sans-serif"],
        coffee: ["Coffee Latte"],
      },
    },
  },
  plugins: [require("daisyui")],
};
