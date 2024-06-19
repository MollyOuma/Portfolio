// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     './src/**/*.{js,jsx,ts,tsx}', 
//     './public/index.html',
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          800: '#2b2f38',
          900: '#10131a',
        },
        teal: {
          300: '#1d8aaf',
          400: '#2eb2d3',
        },
        customColor: 'rgb(15,42,55)',
        customColors: 'rgb(15,33,45)',
        customIntro: 'rgb(16,25,35)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

