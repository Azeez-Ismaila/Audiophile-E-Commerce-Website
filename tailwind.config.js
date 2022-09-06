/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Manrope: ["Manrope"],
      },
      backgroundImage: {
        image1: "url('../src/assets/home/mobile/image-header.jpg')",
        zx7Speaker: "url('../src/assets/home/mobile/image-speaker-zx7.jpg') ",
      },
      colors: {
        primary: "#F6AF85",
        offwhite: "#F1F1F1",
        secondary: {
          100: "#E2E2D5",
          200: "888883",
        },
      },
      images: {
        headphone:
          "url('./src/assets/product-xx99-mark-one-headphones/mobile/image-product.jpg')",
      },
    },
  },
  plugins: [],
};
