/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      screens: {
        sm: '540px',
        md: '720px',
        lg: '960px',
        xl: '1140px',
        '2xl': '1320px',
      },
    },
    extend: {
      backgroundImage: {
        cover: "url('/background2.jpg')",
      },
      backgroundPosition: {
        top: 'top',
        bottom: 'bottom',
        center: 'center',
      },
      colors: {
        dark: '#000',
        banana: '#ffe81f',
        fume: '#BAC1C0',
        gunmetal: '#22282D',
        upsdell: '#B3202C',
        ymared: '#C8102E',
      },
    },
  },
};
