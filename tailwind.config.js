/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'brz-black': '#0B0B0B',
        'brz-white': '#F8F8F8',
        'brz-gray': '#A1A1A1',
        'brz-accent': '#EA4A85',

        primary: {
          50: '#FAF7EF',
          100: '#F5F0E2',
          300: '#DDCAC4',
          500: '#B4887F',
          700: '#81544F',
          900: '#5E3E3D',
          950: '#331F1E',
        },
      },
    },
  },
  fontFamily: {
    noto: ["Noto Sans", 'sans-serif'],
  },
  bgImage: {
    heroImg: 'url("./src/assets/imgs-brz/hero-min.jpg")',
  },
  plugins: [],
};