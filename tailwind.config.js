/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          '100': 'rgb(201, 159, 122)',
          
          // ...otros niveles de opacidad
        },
        coolwhite: {
          '100': 'rgb(249, 247, 242)',
        }
      },
    },
    fontFamily:{
      stylish: ["Cabin"]
    }
  },
  plugins:  [],
}


