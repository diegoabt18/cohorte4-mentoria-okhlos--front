module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily:{
      "GilroyLigth":["GilroyLigth", "sans-serif"],
      "Roboto":["Roboto", "sans-serif"]

    },
    extend: {
      colors:{
        'PrimarioColor1': '#92C149',
        'PrimarioColor2': '#FFCC02',
        'PrimarioColor3': '#FEFEFE',
        'PrimarioColor4': '#D7D7D7',
        'PrimarioColor5': '#010101',
        'SecundarioColor1': '#1A2818',
        'SecundarioColor2': '#7AC139'
      }
    },
  },
  plugins: [],
}
