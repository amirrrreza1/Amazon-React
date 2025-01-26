/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        firstColor: "#131921",
        secondColor: "#232F3F",
      },
    },
  },
  plugins: [],
};
