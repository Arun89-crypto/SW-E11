module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Old: ["Old Standard TT", "cursive"],
        Roboto: ["Roboto", "cursive"],
        Staatliches: ["Staatliches", "cursive"],
       },
      colors: {
        'secondary': '#40BFFF',
        'border': '#c4c4c4',
        'text': '#666666'
      },
    },
  },
  plugins: [],
}