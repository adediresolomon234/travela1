/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './layout/**/*.{js,ts,jsx.tsx}', 
  ],
  theme: {
    extend: {
      fontFamily:{
       Raleway:[
          "Raleway,Arial,Helvetica,san-sans-serif",
          {fontFeatureSettings: '"cv11","ss01'}
        ]
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
