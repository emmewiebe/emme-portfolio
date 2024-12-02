/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',               // Include your index.html
    './src/**/*.{js,jsx,ts,tsx}', // Include all components
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0E1112', // Custom primary color
        grey: '#484B4B',    // Custom grey color
        accent: '#EEF7F9',  // Custom accent color
      },
      fontFamily: {
        primary: ['Playfair Display', 'serif'],
        secondary: ['Mulish', 'sans-serif'],
        hemis: ['Hemis', 'sans-serif'], // Correctly add the Hemis font
      },
    },
  },
  plugins: [],
};