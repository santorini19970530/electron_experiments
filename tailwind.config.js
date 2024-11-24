/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // scan HTML files
    //"./src/**/*.{js,jsx,ts,tsx}", // scan JavaScript/TypeScript files if applicable
    "./styles/styles.css", // scan CSS files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
