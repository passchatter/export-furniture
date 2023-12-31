/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container:{
      center:true,
      padding:"1rem"
    },
    extend: {
      screens:{
        lg:"1124px",
        xl:"1224px"
      },
      colors:{
        primary:"#f9b82b"
      },
      backgroundImage: {
        'hero': "url(images/background.jpg)",
      },
    },
  },
  plugins: [],
}

