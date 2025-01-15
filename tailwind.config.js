/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Font modern
      },
      colors: {
        primary: "#1A73E8", // Warna biru untuk aksen
        neutral: "#F5F7FA", // Warna latar abu-abu terang
      },
    },
  },
  plugins: [],
};

  



