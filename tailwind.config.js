const plugin = require('tailwindcss/plugin');
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'wwu': 'repeat(auto-fit, 28.8rem)'
      },
      dropShadow: {
        'light': [
          '0px 0px 5.760000228881836px #FFF',
          '0px 0px 11.520000457763672px #FFF',
          '0px 0px 40.31999969482422px #FFF',
          '0px 0px 80.63999938964844px #FFF', 
          '0px 0px 138.24000549316406px #FFF', 
          '0px 0px 241.9199981689453px #FFF;',
        ],
      },
      boxShadow: {
        'review-card': '0 4px 4px 2px rgba(0, 0, 0, 0.2)',
        'btn-highlight': 'inset 0 0 300px 2px #4CA230',
        'get_start': '0 0 6rem 1.2rem rgba(221, 123, 123, 0.4)'
      },
      animation: {
        'rotate': 'rotate 2s',
      },
    },
    fontFamily: {
      'rubik': 'Rubik',
    },
    screens: {
      'xs': '475px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    fontSize: {
      'h0': '6rem',
      'h1': '4.8rem',
      'h2': '4.4rem',
      'h3': '4rem',
      'h4': '3.6rem',
      'h5': '3.2rem',
      'h6': '2.8rem',
      'h7': '2.4rem',
      'h8': '2rem',
      'h9': '1.6rem',
      'h10': '1.2rem',
    },
    colors: {
      'orange-900': '#994A32',
      'orange-800': '#B3563B',
      'orange-700': '#CC6243',
      'orange-600': '#E66F4C',
      'orange-500': '#FF7B54',
      'orange-400': '#FF8865',
      'orange-300': '#FF9576',
      'orange-200': '#FFA387',
      'orange-100': '#FFB098',
      'neutral-900': '#2D2D2D',
      'neutral-800': '#424242',
      'neutral-700': '#575757',
      'neutral-600': '#6C6C6C',
      'neutral-500': '#817D7D',
      'neutral-400': '#969393',
      'neutral-300': '#ABA9A9',
      'neutral-200': '#D5D4D4',
      'neutral-100': '#FFFFFF',
      'blue-900': '#1D6199',
      'blue-800': '#2271B3',
      'blue-700': '#2682CC',
      'blue-600': '#2B92E6',
      'blue-500': '#30A2FF',
      'blue-400': '#45ABFF',
      'blue-300': '#59B5FF',
      'blue-200': '#6EBEFF',
      'blue-100': '#83C7FF',
      'green-900': '#326C20',
      'green-800': '#3B7E25',
      'green-700': '#43902A',
      'green-600': '#4CA230',
      'green-500': '#54B435',
      'green-400': '#65BC49',
      'green-300': '#76C35D',
      'green-200': '#87CB72',
      'green-100': '#98D286',
      'red-900': '#853232',
      'red-800': '#9B3A3A',
      'red-700': '#B14242',
      'red-600': '#C74B4B',
      'red-500': '#DD5353',
      'red-400': '#E06464',
      'red-300': '#E47575',
      'red-200': '#E78787',
      'red-100': '#EB9898',
      'primary-900': '#945252',
      'primary-800': '#AC6060',
      'primary-700': '#C56E6E',
      'primary-600': '#DD7B7B',
      'primary-500': '#F68989',
      'primary-400': '#F79595',
      'primary-300': '#F8A1A1',
      'primary-200': '#F9ACAC',
      'primary-100': '#FAB8B8',
    },
  },
  plugins: [
    plugin(function({addVariant}) {
      addVariant("current", "&.active")
    })
  ],
}

