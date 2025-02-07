/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {

    extend: {
      colors: {
        primry_purble: "#7F00FF",
        veryLight_purple: "#F2E5FF",
        primaryLight: '#E5CCFF',
        dark_gray: '#66666E'
      },
      fontFamily: {
        lato: ['Lato'],
        roboto: ['roboto']
      },
      backgroundImage: {
        'herobg': "url('./src/assets/images/landing/Shadow.svg')"
      }

    },
  },
  plugins: [],
}

