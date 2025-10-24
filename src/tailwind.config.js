/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Optional: you can customize Figroot’s color palette here if you want
        primary: "#6750A4",
        secondary: "#625B71",
        background: "#FEF7FF",
      },
      fontFamily: {
        // Optional: add custom fonts if Figroot used specific ones
        sans: ["Inter", "sans-serif"],
      },
      borderRadius: {
        xl: "18px", // matches rounded-[18px] style Figroot sometimes uses
      },
    },
  },
  plugins: [],
}