/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{tsx,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        aqua: {
          50: 'rgb(var(--color-aqua) / 0.5)',
          100: 'rgb(var(--color-aqua) / 1)',
        },
        fuschia: {
          50: 'rgb(var(--color-fuschia) / 0.5)',
          100: 'rgb(var(--color-fuschia) / 1)',
        },
        primary: 'rgb(var(--text-primary) / 1)',
        'backg-primary': 'rgb(var(--backg-primary) / 1)',
      },
    },
  },
  plugins: [],
};
