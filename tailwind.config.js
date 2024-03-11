/** @type {import('tailwindcss').Config} */

//import plugin from 'tailwindcss';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'l': '1352px',
      },
      gridTemplateColumns: {
        "18": "repeat(18, minmax(0, 1fr))",
        "16": "repeat(16, minmax(0, 1fr))",
        "14": "repeat(14, minmax(0, 1fr))"
      },
      colors: {
        "main": "#312f33",
        "second": "#18171a",
        "third": "#545157",
        "fourth": "#45434a",
        "red1": "#d91623",
        "red2": "#c2131f",
        "blue1": "#3916c4",
        "blue2": "#3112b0"
      },
      zIndex: {
        "header": "30",
        "popup": "40",
        "modal": "50"
      },
      textColor: {
        "white1": "#fff",
        "white2": "#ffffff86"
      },
      borderColor: {
        "main": "#45434a",
      },
      // borderRadius: {

      // }
      height: {
        "header-height": "55px"
      },
      screens: {
        'xs': '768px',
        
        's': '960px',
  
        'm': '1200px',
  
        'l': '1416px',
  
        'xl': '1920px',
      },
    },
  },
  plugins: [
    // plugin(function({matchComponents, theme}) {
    //   matchComponents(
    //     {
    //       'btn':(value) => ({
    //         padding: value
    //       })
    //     },
    //     { values: theme('padding') }
    //   )
    // })
  ],
}
