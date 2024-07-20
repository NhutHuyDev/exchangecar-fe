/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/**/**/**/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "primary-color": {
        DEFAULT: "#f97316",
        500: "#2c64a9",
      },
      "secondary-color": "#173559",
      "grey-color": {
        DEFAULT: "#f4f6f8",
        200: "#a4a2a2",
      },
    },
    extend: {},
  },
  plugins: [],
};
