import type { Config } from 'tailwindcss';

export default {
  theme: {
    extend: {
      fontSize : {
        '5xl': '2.8rem',
      },
      maxWidth: {
        '8xl': '96rem',
      },
      colors: {
        primary: '#1a1a1a',
        secondary: '#ec7969',
        white: '#fff',
        dark: '#0d0d0d',
        light: '#e6e6e6',
        gray: {
          50: '#FAFAFA',
          200: '#E9EAEB',
          500: '#717680',
          600: '#535862',
          800: '#252B37',
          300: '#D5D7DA',
          400: '#A4A7AE',
          700: '#414651',
          900: '#181D27',
        },
        warning: {
          400: '#FDB022',
        },
        success: {
          100: '#DCFAE6',
          500: '#17B26A',
        },
      },
      fontFamily: {
        poppins: 'Poppins',
        tommy: 'Tommy',
        tommyOutline: 'Tommy Outline',
      },
      borderWidth: {
        '3': '3px',
      },
      lineHeight: {
        '11': '3.4rem',
      }
    },
  },
  safelist: [/grid-cols-[0-9]/] as any,
} satisfies Config;
