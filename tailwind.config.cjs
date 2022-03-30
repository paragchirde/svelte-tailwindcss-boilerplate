const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
        // Build your palette here
        transparent: 'transparent',
        current: 'currentColor',
        white: colors.white,
        grayTrue: colors.neutral,
        gray: colors.gray,
        red: colors.red,
        green: colors.emerald,
        yellow: colors.amber,
        purple: colors.violet,
        pink: colors.pink,
        blue: colors.blue,
        rose: colors.rose,
        indigo: colors.indigo,
        teal: colors.teal,

    },
    container: {
        center: true,
        padding: {
            DEFAULT: '0.5rem',
            sm: '1rem',
            md: '1rem',
            lg: '2rem',
            xl: '5rem',
            '2xl': '6rem',
            '3xl': '8rem',
        },
    },
    screens: {
        'xs': '340px',
        // => @media (min-width: 400px) { ... }

        'sm': '640px',
        // => @media (min-width: 640px) { ... }

        'md': '768px',
        // => @media (min-width: 768px) { ... }

        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }

        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
        '2xl': '1920px',
        '3xl': '2560px'
    },
    fontSize: {
        'xs': '.75rem',
        'sm': '.875rem',
        'tiny': '.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
        '8xl': '6rem',
        '9xl': '7rem',
        '10xl': '10rem',
    },
    extend: {
        colors: {
            primary: '#1f74ff',
            yellow: '#ffc800',
            darkPrimary: '#1c1d1f',
            darkPrimary2: '#242424'
        },
        fontFamily: {
            roboto: ['Roboto Condensed']
        },
        spacing: {
            '78': '20rem',
            '96': '24rem',
            '128': '32rem',
            '140': '40rem'
        }
    },
},
  plugins: []
};