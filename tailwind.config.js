module.exports = {
  content: ["templates/**/*.twig", "templates/partial/*.twig", "assets/**/*.{ts,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#007afb",
        secondary: "#032158",
      },
      fontFamily: {
        gotham: "Gotham, Arial, sans-serif",
        futura: "futura, Arial, sans-serif",
        futuraOblique: "futura-oblique, Arial, sans-serif"
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
  plugins: [],
};
