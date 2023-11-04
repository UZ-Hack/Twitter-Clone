/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      screens: {
        zero: '0px',
        'fold': '245px',
        'mobile': '370px',
        sm: '480px',
        sidebarMobile: '550px',
        md: '768px',
        recommended: '846px',
        lg: '976px',
        sidebar: '1050px',
        xl: '1440px',
      },
      colors: {
        'blue': '#1D9BF0',
      },
    },
  },
  plugins: [],
}

