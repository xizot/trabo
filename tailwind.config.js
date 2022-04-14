module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sora: ["Sora", "sans-serif"],
      inter: ["Inter", "sans-serif"],
    },
    screens: {
      sm: "450px",
      md: "768px",
      lg: "900px",
      xl: "1440px",
    },
    extend: {
      colors: {
        mainColor: "#6347F9",
        pinkLinear:
          "linear-gradient(140.24deg, #FFF4F4 22.71%, #FFF2F2 94.78%)",
      },
      backgroundImage: {
        contact: "url('../public/assets/images/contact.jpg')",
      },
    },
  },
  plugins: [],
};
