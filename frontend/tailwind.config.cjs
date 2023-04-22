/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{html,js}',
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        // Dark
        primaryDark: '#1d1d1d',
        // Light
        primaryLight: '#eaeaea',
        // Standard pallette
        'gray-200': '#eaeaea',
        'gray-300': '#d1d1d1',
        'gray-400': '#888888',
        'gray-500': '#404040',
        'gray-600': '#333333',
        'gray-700': '#2d2d2d',
        'gray-800': '#1d1d1d',
        'gray-900': '#0f0f0f',
        white: '#ffffff',
        black: '#000000',
      },
      fontFamily: {
        primary: ['Poppins'],
        secondary: ['Inter'],
      },
      fontSize: {
        xs: '0.625rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.75rem',
        '3xl': '2.625rem',
        '4xl': '4rem',
      },
    },
  },

  plugins: [require('tw-elements/dist/plugin.cjs')],
  darkMode: 'class',
};
