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
      height: {
        "screen-min-200": "calc(100vh - 200px)",
      },
    },
  },
  plugins: [require("daisyui")],
};
