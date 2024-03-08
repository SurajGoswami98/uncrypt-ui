/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', 'node_modules/preline/dist/*.js'],
  theme: {
    ...colors,
    colors: {
      blue: {
        DEFAULT: '#153457',
        50: '#eff6ff',
        100: '#dbeafe',
        200: '#bfdbfe',
        300: '#93c5fd',
        400: '#60a5fa',
        500: '#3b82f6',
        600: '#2563eb',
        700: '#1d4ed8',
        800: '#1e40af',
        900: '#1e3a8a',
        950: '#172554'
      },
      white: '#fff',
      black: '#000',
      red: '#ff0000'
    },
    fontFamily: {
      sans: ['Work Sans, sans-serif']
    },

    extend: {
      colors: {
        'custom-primary': {
          DEFAULT: '#111010'
        }
      }
    }
  },
  plugins: []
}
