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
    },
    extend: {
    },
},
  plugins: []
};