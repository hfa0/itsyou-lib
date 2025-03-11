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
        primary: '#121212',
        dark: "#121212",
        grey: "#2b2b2b",
        light: "#f4f2ed",
        secondary: "#cebd63",
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
