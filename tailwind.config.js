/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        mega: "200px", // Nowy niestandardowy rozmiar (10px)
        giga: "500px", // Nowy niestandardowy rozmiar (40px)
        splashmega: "100px",
        splashgiga: "250px",
      },
      colors: {
        customRed: "#f11348",
        mainColor: "#130729",
      },
    },
  },
  plugins: [],
};
