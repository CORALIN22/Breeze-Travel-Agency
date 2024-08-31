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

        primary: {
          50: '#FAF7EF',
          100: '#F5F0E2',
          300: '#DDCAC4',
          500: '#B4887F',
          700: '#81544F',
          900: '#5E3E3D',
          950: '#331F1E',
        },
        secondary: {
          100: '#F8ACCC',
          500: '#EA4A85',
        },
        
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  fontFamily: {
    noto: ['Noto Sans', 'sans-serif'],
  },
  bgImage: {
    heroImg: 'url("./src/assets/imgs-brz/hero-min.jpg")',
  },
  plugins: [],
};
