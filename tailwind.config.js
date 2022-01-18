const { guessProductionMode } = require("@ngneat/tailwind");

module.exports = {
    prefix: '',
    purge: {
      enabled: guessProductionMode(),
      content: [
        './src/**/*.{html,ts}',
      ]
    },
    darkMode: 'class', // or 'media' or 'class'
    theme: {
      extend: {
        
        colors: {
          "wallet-bg-general": "#F5F5FA",
          "wallet-input-bg": "#F2F4FB",
          "wallet-mainText": "#240C40",
          "wallet-generalGreen": "#00C9B6",
          "wallet-sideBar-bg": "#5C2799",

        }
      },
    },
    variants: {
      extend: {},
    },
    plugins: [require('@tailwindcss/aspect-ratio'),require('@tailwindcss/forms'),require('@tailwindcss/line-clamp'),require('@tailwindcss/typography')],
};
