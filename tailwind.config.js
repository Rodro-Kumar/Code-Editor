/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Roboto: "var(--Roboto)",
    },
    container: {
      center: true,
    },
    extend: {},
  },
  plugins: [],
};
