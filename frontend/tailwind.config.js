/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors:{
        "primary-blue": "#33BDFE",
        "secondary-blue": "#82D7FF",
        "light-light-blue": "#EBF8FF",
        "white-like": "#FAFBFC",
        "white": "#fff",
        "dark-grey": "#444A6D",
        "light-grey": "#96A5B8",
        "error": "#e7195a",
        "dark-blue": "#05004E",
        "scroller-bar": "#0095FF",
        "scroller-track": "#CDE7FF",
      },
      spacing: {
        "10px": "10px", 
        "20px": "20px", 
      },
      boxShadow: {
        'usual': '0px 0px 10px 0px rgba(0,0,0,0.1)',
      },
      gridTemplateColumns: {
        '17': 'repeat(17, minmax(0, 1fr))',
      },
    },
  },
  plugins: [],
}

