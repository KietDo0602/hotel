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
      xl: '1140px',
    },
    extend: {
      colors: {
        primary: '#0a0a0a',
        accent: {
          DEFAULT: '#a37d4c',
          hover: '#967142',
        },
      },
      backgroundImage: {
        about:"url('./assets/img/1.jpg')",
        pages:"url('./assets/img/8.jpg')",
        room: "url('./assets/img/room.jpg')",
        review:"url('./assets/img/reviewsBG.jpg')",
      },
    },
  },
  plugins: [],
};

