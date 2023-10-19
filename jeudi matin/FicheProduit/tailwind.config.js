/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "clr--white":"var(--white)",
        "clr--black":"var(--black)",
        "clr--grey-light":"var(--grey-light)",
        "clr--grey":"var(--grey)",
        "clr--grey-dark":"var(--grey-dark)",
        "clr--grey-very-dark":"var(--grey-very-dark)",
      },
      fontSize: {
        extralight: '200px',
        semibold: "600px",
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
      },
      /*fontSize: {
        "extralight": "200",
        "light": "300",
        "regular": "400",
        "medium": "500",
        "semibold": "600",
        "bold": "700",
      },*/
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },

      backgroundImage: {
        'img_black_sleeve_1': "url('../asset/img_black_sleeve_1.png')",
        'img_black_sleeve_2': "url('../asset/img_black_sleeve_2.png')",
        'img_black_sleeve_mobile': "url('../asset/img_black_sleeve_mobile.png')",
      },
      
    },
  },
  plugins: [],
}