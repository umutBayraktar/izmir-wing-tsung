/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#031335',
        'custom-blue-hover': '#041a40',
      },
    },
  },
  plugins: [],
};
