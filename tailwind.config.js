module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        blue: "#2E5CF5",
        white: "#FFFFFF",
      },
      screens: {
        sm: "640px",
        lg: "1024px",
      },
      fontFamily: {
        "dm-sans": ['"DM Sans"'],
      },
      fontWeight: {
        normal: 400,
        medium: 500,
        bold: 700,
      },
    },
  },
  plugins: [],
};
