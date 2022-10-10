/* eslint-disable @typescript-eslint/no-var-requires */
const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');
const colors = require('./colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{tsx,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors,
      fontFamily: {
        sans: ['"Arimo"', ...defaultTheme.fontFamily.sans],
      },
      backgroundColor: { colors, ...defaultTheme.backgroundColor },
      borderColor: { colors, ...defaultTheme.colors },
    },
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
        '.focus-ui': {
          borderWidth: theme('borderWidth.2'),
          outlineWidth: theme('outlineWidth.0'),
          borderColor: theme('colors.transparent'),
          transitionProperty: theme('transitionProperty.colors'),
          transitionTimingFunction: theme('transitionTimingFunction.DEFAULT'),
          transitionDuration: theme('transitionDuration.500'),
        },
      });
    }),
  ],
};
