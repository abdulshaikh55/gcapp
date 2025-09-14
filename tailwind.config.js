/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary_bg: "#011936",
        buttonText: "#011936",
        buttonColor: "#ffd33d",
        secondary: '#151312',
        light: {
          100: "#d6c6ff",
          200: "#a8b5db",
          300: "#9ca4ab"
        },
        dark: {
          100: "#221f3d",
          200: "#0f0d23",
        },
        accent: "#ab8bff",
        text_light: "#FEF5EF",
        frame: "#3F88C5",
        list: "#37FF8B",
      },
      fontFamily: {
        lato: ['Lato-Regular'],
        lato_bold: ['Lato-Bold'],
        lato_italic: ['Lato-Italic'],
        lato_bolditalic: ['Lato-BoldItalic'],
        lato_black: ['Lato-Black'],
        lato_blackitalic: ['Lato-BlackItalic'],
        lato_light: ['Lato-Light'],
        lato_lightitalic: ['Lato-LightItalic'],
        lato_thin: ['Lato-Thin'],
        lato_thinitalic: ['Lato-ThinItalic'],
      }
    },
  },
  plugins: [],
}


