module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Gilda Display',
      secondary: 'Barlow',
      tertiary: 'Barlow Condensed',
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      sxl:'1080px',
      xl: '1140px',
    },
    extend: {
      colors: {
        primary:'#0a0a0a',
        accent: {
          DEFAULT: '#a37d4c',
          hover: '#967142',
        },
        secondary:'#111a38',
        third:'#89B6A5',
        grey: '#a1a4b1',
        red: '#FF0000',
      },
      backgroundImage: {
        about: "url('/src/assets/img/1.jpg')",
        pages: "url('/src/assets/img/8.jpg')",
        room: "url('/src/assets/img/room.jpg')",
        roomBg: "url('/src/assets/img/8.jpg')",
        review: "url('/src/assets/img/reviewsBG.jpg')",
      },
    },
  },
  plugins: [],
};

