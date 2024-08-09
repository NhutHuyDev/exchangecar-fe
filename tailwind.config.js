/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/**/**/**/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "primary-color": {
        DEFAULT: "#f97316",
        500: "#2c64a9",
      },
      "secondary-color": "#333",
      "grey-color": {
        DEFAULT: "#f4f6f8",
        200: "#a4a2a2",
      },
    },
    extend: {
      keyframes: {
        'fly-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translate3d(0, -1500px, 0)',
            transitionTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
          },
          '60%': {
            opacity: '1',
            transform: 'translate3d(0, 25px, 0)',
          },
          '75%': {
            transform: 'translate3d(0, -10px, 0)',
          },
          '90%': {
            transform: 'translate3d(0, 5px, 0)',
          },
          '100%': {
            transform: 'none',
          },
        },
        'fly-in': {
          '0%': {
            opacity: '0',
            transform: 'scale3d(0.3, 0.3, 0.3)',
            transitionTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
          },
          '20%': {
            transform: 'scale3d(1.1, 1.1, 1.1)',
          },
          '40%': {
            transform: 'scale3d(0.9, 0.9, 0.9)',
          },
          '60%': {
            opacity: '1',
            transform: 'scale3d(1.03, 1.03, 1.03)',
          },
          '80%': {
            transform: 'scale3d(0.97, 0.97, 0.97)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale3d(1, 1, 1)',
          },
        },
      },
      animation: {
        'fly-in-down': 'fly-in-down 2s ease-in-out',
        'fly-in': 'fly-in 2s ease-in-out',
      },
    },
  },
  plugins: [],
};
