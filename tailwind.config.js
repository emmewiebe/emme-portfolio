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
        primary: ['Defante', 'sans-serif'], // Add Defante font as primary
        headings: ['Playfair Display', 'serif'], // Use for headings
        secondary: ['Mulish', 'sans-serif'],
        hemis: ['Hemis', 'sans-serif'],
      },
    },
  },
  plugins: [],
};