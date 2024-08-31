import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', ...defaultTheme.fontFamily.sans],
        serif: ['DM Serif Display', ...defaultTheme.fontFamily.serif],
        macondo: ['Macondo', ...defaultTheme.fontFamily.sans],
        glory: ['Glory', ...defaultTheme.fontFamily.sans],
        merriweather: ['Merriweather Sans', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        asparagus: {
          50: '#f2f9ec',
          100: '#e2f0d7',
          200: '#c7e3b3',
          300: '#a4d086',
          400: '#84bc5f',
          500: '#60993e',
          600: '#4d7f31',
          700: '#3c6229',
          800: '#334f25',
          900: '#2d4423',
          950: '#15240f',
        },
        light: {
          50: '#fffffe',
          100: '#fdfefa',
          200: '#fcfdf5',
          300: '#fbfcee',
          400: '#f9fae8',
          500: '#fefefa',
          600: '#f6f4d4',
          700: '#e7de98',
          800: '#d5c36b',
          900: '#c5b143',
        },
        dark: {
          50: '#f2f2f3',
          100: '#e5e3e6',
          200: '#c4beca',
          300: '#8c8799',
          400: '#514c5a',
          500: '#28262c',
          600: '#211f24',
          700: '#1b191e',
          800: '#161519',
          900: '#141316',
          950: '#0e0d0f',
        },
      },
    },
  },
}
