/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,jsx,tsx}",
    "./src/components/*.{vue,js,jsx,tsx}",
    "./views/AboutView.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
    gridTemplateColumns: { 5: "repeat(5, minmax(0, 1fr))" },
  },
  plugins: [],
};
