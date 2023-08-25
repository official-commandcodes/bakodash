/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    extend: {
      gridTemplateColumns: {
        14: 'repeat(14, minmax(0, 1fr))',
        12: 'repeat(12, minmax(0, 1fr))',
        7: 'repeat(7, minmax(0, 1fr))',
      },

      gridTemplateRows: {
        14: 'repeat(14, minmax(0, 1fr))',
      },

      gridRow: {
        'span-14': 'span 14 / span 14',
        'span-13': 'span 13 / span 13',
        'span-12': 'span 12 / span 12',
      },
    },
  },

  plugins: [require('tailwind-scrollbar')],
};
