/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        blue: {
          50: '#F0F7FF',
          100: '#E0EFFE',
          200: '#BAD9FB',
          300: '#90C2F9',
          400: '#61A5F6',
          500: '#3B88F3',
          600: '#1D6FE6',
          700: '#1454C2',
          800: '#0E3C99',
          900: '#0A2970',
        },
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
      },
    },
  },
  plugins: [],
};