module.exports = {
 purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
 darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      'redBrand': '#e2026b',
      'pinkBrand': '#ff5294',
      'greenBrand': '#5cef72',
      'blueBrand': '#45d4de',
      'purpleBrand': '#a37aff'
    }),
    boxShadow: {
      redShadow: '0px 0px 10px 0px #e2026b',
      pinkShadow: '0px 0px 10px 0px #ff5294',
      greenShadow: '0px 0px 10px 0px #5cef72',
      blueShadow: '0px 0px 10px 0px #45d4de',
      purpleShadow: '0px 0px 10px 0px #a37aff'
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
