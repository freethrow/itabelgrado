module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'itaRed': '#D52B1E',
      'itaGreen': '#007D57',
      'itaGray': '#75787B',
      'itaWhite': '#FFFFFF',
      'itaGgray':'#AAAAAA',
      'itaDarkGray': '#80B285',
      'itaLightGray': '#B1B3B6',
      'lightGray':'#AAAAAA',
      'ddarkGray':'#5f6269'
     
    },
    extend: {
      fontFamily: {
        sans: ['Roboto'],
        archivo: ['Archivo Narrow'],
      },
    },
  },
  plugins: [
    require("daisyui"),
    require('@tailwindcss/typography'),
  ],

  daisyui: {
    themes: [
      {
        mytheme: {
          secondary: "#007D57",
          primary: "#D52B1E",
          accent: "#80B285",
          neutral: "#B1B3B6",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },

}