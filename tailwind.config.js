module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './data/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      'redBrand': '#e2026b',
      'pinkBrand': '#ff5294',
      'greenBrand': '#5cef72',
      'blueBrand': '#45d4de',
      'purpleBrand': '#a37aff',
      'grayBrand': '#EEEEEE',
      'darkGrayBrand': '#222222',
      'whiteBrand': '#FFFFFF',
      'blackBrand': '#000000'
    }),
    boxShadow: theme => ({
      'redShadow': '0px 0px 10px 0px #e2026b',
      'pinkShadow': '0px 0px 10px 0px #ff5294',
      'greenShadow': '0px 0px 10px 0px #5cef72',
      'blueShadow': '0px 0px 10px 0px #45d4de',
      'purpleShadow': '0px 0px 10px 0px #a37aff',
      'md': '0px 0px 5px 0px rgba(0, 0, 0, 0.2)',
      'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
    }),
    backgroundImage: theme => ({
      'bodyLight': 'repeating-linear-gradient(-55deg, rgba(238, 238, 238, 0.24), rgba(238, 238, 238, 0.24) 200px, rgba(255, 255, 255, 1) 200px, rgba(255, 255, 255, 1) 400px)',
      'bodyDark': 'repeating-linear-gradient(-55deg, rgba(23, 26, 35, 0.99), rgba(23, 26, 35, 0.99) 200px, rgba(23, 26, 35, 1) 200px, rgba(23, 26, 35, 1) 400px)',
      'cvDividerLight': 'repeating-linear-gradient(-55deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 20px, rgba(0, 0, 0, 1) 20px, rgba(0, 0, 0, 1) 40px)',
      'cvDividerDark': 'repeating-linear-gradient(-55deg, rgba(238, 238, 238, 0), rgba(238, 238, 238, 0) 20px, rgba(255, 255, 255, 1) 20px, rgba(255, 255, 255, 1) 40px)'
    }),
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
