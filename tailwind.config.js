/* eslint-disable @typescript-eslint/no-var-requires */
const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');
const colors = require('./colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{tsx,ts}'],
  darkMode: 'class',
  theme: {
    fontWeight: {
      regular: 400,
      medium: 500,
      semibold: 600,
    },
    fontFamily: {
      sans: 'var(--font-sans)',
      mono: 'var(--font-mono)',
    },
    fontSize: {
      xs: ['var(--font-size-xs)', { lineHeight: '1rem' }],
      sm: ['var(--font-size-sm)', { lineHeight: '1.25rem' }],
      base: ['var(--font-size-base)', { lineHeight: '1.5rem' }],
      lg: ['var(--font-size-lg)', { lineHeight: '1.75rem' }],
      xl: ['var(--font-size-xl)', { lineHeight: '1.75rem' }],
      '2xl': ['var(--font-size-2xl)', { lineHeight: '2rem' }],
      '3xl': ['var(--font-size-3xl)', { lineHeight: '2.25rem' }],
      '4xl': ['var(--font-size-4xl)', { lineHeight: '2.5rem' }],
      '5xl': ['var(--font-size-5xl)', { lineHeight: '1' }],
      '6xl': ['var(--font-size-6xl)', { lineHeight: '1' }],
    },
    extend: {
      colors,
      backgroundColor: { colors, ...defaultTheme.backgroundColor },
      borderColor: { colors, ...defaultTheme.colors },
      screens: {
        xs: '375px',
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
        '.focus-ui': {
          transitionProperty: theme('transitionProperty.colors'),
          transitionTimingFunction: theme('transitionTimingFunction.DEFAULT'),
          transitionDuration: theme('transitionDuration.500'),
        },
      });
    }),
  ],
};
