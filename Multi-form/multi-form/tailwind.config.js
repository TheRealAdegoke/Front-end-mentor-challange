/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mobileDevice: { min: "300px", max: "767px" },
        Desktop: { min: "768px" },
      },
    },
  },
  plugins: [],
};
