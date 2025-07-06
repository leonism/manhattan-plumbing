/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
        },
      },
      fontFamily: {
        sans: [
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      colors: {
        blue: {
          50: '#eef4ff',
          100: '#d9e6ff',
          200: '#bcd4ff',
          300: '#8cb6ff',
          400: '#578eff',
          500: '#2e66ff',
          600: '#1847f5',
          700: '#1335e1',
          800: '#172fb7',
          900: '#1a2c8f',
          950: '#141c54',
        },
      },
      boxShadow: {
        'strong': '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [],
};