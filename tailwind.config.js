/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,ts,jsx,tsx}',
    './src/pages/**/*.{html,js,ts,jsx,tsx}',
    './src/components/**/*.{html,js,ts,jsx,tsx}',
    './index.html'
  ],
  theme: {
    extend: {
      colors: {
        'txt-dadada': '#DADADA',
        'txt-c273ed': '#C273ED',
        'txt-ffffff': '#FFFFFF',
        'txt-ffffff80': 'hsla(0, 0%, 100%, 0.5)',
        'bg-9b4de0': '#9B4DE0',
        'sidebar-bg': 'hsl(0deg 0% 100% / 5%)',
        'bd-primary': 'hsl(0deg 0% 100% / 10%)'
      }
    }
  },
  plugins: []
}

