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
        mygreen: "#44AAB4",
      },
      fontFamily: {
        sans: ["Helvetica", "Arial", "sans-serif"],
        coffee: ["Coffee Latte"],
      },
      maxHeight: {
        "screen-min-220": "calc(100vh - 220px)",
      },
      height: {
        "screen-min-300": "calc(100vh - 300px)",
        "screen-min-350": "calc(100vh - 350px)",
      },
    },
  },
  plugins: [require("daisyui")],
};
