module.exports = {
  content: ["./public/index.html", "./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    fontFamily: { 
      Montserrat: ["Monserrat", "sans-serif"],
    },
    textColor: {
      'primary': '#CC2D4A',
      'secondary': '#8FA206',
      'terciary': '#61AEC9',
      'black': '#0B0A0B',
      'gray-200': '#e5e7eb',
      'gray-300': '#d1d5db',
      'gray-500': '#6b7280',
      'white': '#F9F9F9',
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#CC2D4A',
      'secondary': '#8FA206',
      'terciary': '#61AEC9',
      'black': '#0B0A0B',
      'white': '#F9F9F9',
      'background-dark': '#191D1D',
      'background-light': '#F3FFFF',
    }),
    extend: {
      backgroundImage: {
        'sanFrancisco': "url('../img/sanFrancisco.jpg')",
			  'sanFranciscoDesktop': "url('../img/sanFranciscoDesktop.jpg')",
			  'yosemite': "url('../img/yosemite.jpg')",
			  'LA': "url('../img/LA.jpg')",
			  'seattle': "url('../img/seattle.jpg')",
			  'new_york': "url('../img/new_york.jpg')",
			  'norway': "url('../img/norway.jpg')",
			  'sydney': "url('../img/sydney.jpg')",
			  'miami': "url('../img/miami.jpg')",
			  'switzerland': "url('../img/switzerland.jpg')",
			  'bali': "url('../img/bali.jpg')",
			  'norway': "url('../img/norway.jpg')",
			  'chicago': "url('../img/chicago.jpg')",
			  'europe': "url('../img/europe.jpg')",
			  'iceland': "url('../img/iceland.jpg')",
      }
  },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
};