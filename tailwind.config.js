
const plugin = require('tailwindcss/plugin');

const rotateX = plugin(function ({ addUtilities }) {
  addUtilities({
    ".rotate-x-20": {
      transform: "rotateX(20deg)",
    },
    ".rotate-x-40": {
      transform: "rotateX(40deg)",
    },
    ".rotate-x-60": {
      transform: "rotateX(60deg)",
    },
    ".rotate-y-180": {
      transform: "rotateY(180deg)",
    },
  });
});

module.exports = {
  plugins: [require("tailwind-scrollbar"), rotateX],
  variants: {
    scrollbar: ["rounded"],
  },
  content: [
    "templates/**/*.twig",
    "templates/partial/*.twig",
    "assets/**/*.{ts,js}",
    "assets/js/*.{ts,js}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#007afb",
        secondary: "#001846",
      },
      fontFamily: {
        gotham: "Gotham, Arial, sans-serif",
        futura: "futura, Arial, sans-serif",
        futuraOblique: "futura-oblique, Arial, sans-serif",
      },

      container: {
        padding: {
          DEFAULT: "2rem",
          sm: "2rem",
          lg: "4rem",
          xl: "6rem",
          "2xl": "8rem",
        },
      },
    },
  },
};
