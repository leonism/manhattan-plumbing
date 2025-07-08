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
        strong: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
      },
      transitionDuration: {
        400: '400ms',
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            color: theme('colors.slate.700'),
            h1: {
              color: theme('colors.slate.900'),
              fontWeight: '800',
              fontSize: theme('fontSize.4xl'),
              lineHeight: '1.2',
              marginTop: '1.5em',
              marginBottom: '0.5em',
            },
            h2: {
              color: theme('colors.slate.900'),
              fontWeight: '700',
              fontSize: theme('fontSize.3xl'),
              lineHeight: '1.3',
              marginTop: '1.5em',
              marginBottom: '0.5em',
            },
            h3: {
              color: theme('colors.slate.900'),
              fontWeight: '600',
              fontSize: theme('fontSize.2xl'),
              lineHeight: '1.4',
              marginTop: '1.5em',
              marginBottom: '0.5em',
            },
            h4: {
              color: theme('colors.slate.900'),
              fontWeight: '500',
              fontSize: theme('fontSize.xl'),
              lineHeight: '1.5',
              marginTop: '1.5em',
              marginBottom: '0.5em',
            },
            p: {
              lineHeight: '1.75',
              marginBottom: '1.25em',
            },
            a: {
              color: theme('colors.blue.600'),
              textDecoration: 'none',
              '&:hover': {
                color: theme('colors.blue.800'),
                textDecoration: 'underline',
              },
            },
            blockquote: {
              borderLeftColor: theme('colors.blue.500'),
              borderLeftWidth: '4px',
              paddingLeft: '1em',
              fontStyle: 'italic',
              color: theme('colors.slate.600'),
            },
            'ol > li::marker': {
              color: theme('colors.blue.500'),
            },
            'ul > li::marker': {
              color: theme('colors.blue.500'),
            },
            code: {
              backgroundColor: theme('colors.slate.100'),
              padding: '0.2em 0.4em',
              borderRadius: '0.25em',
              color: theme('colors.slate.800'),
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            pre: {
              backgroundColor: theme('colors.slate.800'),
              color: theme('colors.slate.200'),
              borderRadius: '0.5em',
              padding: '1em',
              overflowX: 'auto',
            },
            table: {
              width: '100%',
              tableLayout: 'auto',
              borderCollapse: 'collapse',
              borderRadius: '0.5em',
              overflow: 'hidden',
              marginTop: '1.5em',
              marginBottom: '1.5em',
            },
            thead: {
              backgroundColor: theme('colors.slate.200'),
              color: theme('colors.slate.800'),
            },
            'th, td': {
              padding: '0.75em',
              borderBottom: `1px solid ${theme('colors.slate.200')}`,
              textAlign: 'left',
            },
            img: {
              borderRadius: '0.5em',
              boxShadow: theme('boxShadow.md'),
              marginTop: '2em',
              marginBottom: '2em',
            },
          },
        },
        invert: {
          css: {
            color: theme('colors.slate.200'),
            h1: {
              color: theme('colors.slate.50'),
            },
            h2: {
              color: theme('colors.slate.50'),
            },
            h3: {
              color: theme('colors.slate.50'),
            },
            h4: {
              color: theme('colors.slate.50'),
            },
            a: {
              color: theme('colors.blue.400'),
              '&:hover': {
                color: theme('colors.blue.200'),
              },
            },
            blockquote: {
              borderLeftColor: theme('colors.blue.400'),
              color: theme('colors.slate.300'),
            },
            'ol > li::marker': {
              color: theme('colors.blue.400'),
            },
            'ul > li::marker': {
              color: theme('colors.blue.400'),
            },
            code: {
              backgroundColor: theme('colors.slate.800'),
              color: theme('colors.slate.200'),
            },
            pre: {
              backgroundColor: theme('colors.slate.700'),
              color: theme('colors.slate.100'),
            },
            thead: {
              backgroundColor: theme('colors.slate.700'),
              color: theme('colors.slate.100'),
            },
            'th, td': {
              borderBottom: `1px solid ${theme('colors.slate.700')}`,
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
