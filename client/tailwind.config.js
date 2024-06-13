/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.{jsx,js}',
    
  ],
  theme: {
    extend: {},
  },
   plugins: [
        require('flowbite/plugin'),
        require('@tailwindcss/line-clamp')
  ],

  darkMode:"class"
}