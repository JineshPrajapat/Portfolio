/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        fontFamily: {
          inter: ['Inter'],
          league:['league-spartan'],
        },
      },
    },
    plugins: [
      require('tailwindcss'),
      require('autoprefixer'),
    ],
    style: {
      postcss: {
        plugins: [require('tailwindcss'), require('autoprefixer')],
      },
    },
  }