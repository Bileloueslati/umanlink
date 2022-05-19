module.exports = {
  plugins: [require("tailwind-scrollbar")],
  variants: {
    scrollbar: ['rounded']
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
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "6rem",
          "2xl": "8rem",
        },
      },
    },
  },
};
