module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  safelist: [
    {
      pattern:
        /^(bg|border)-(mercury|venus|earth|mars|jupiter|saturn|uranus|neptune)$/,
      variants: ['md', 'after'],
    },
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Antonio', 'sans-serif'],
        serif: ['Spartan', 'sans-serif'],
      },
      fontSize: {
        navLink: '0.6875rem',
        '3xl': '1.75rem',
      },
      letterSpacing: {
        custom: '-1.05px',
      },
      colors: {
        'white-100': 'rgba(255, 255, 255, 0.1)',
        'white-700': 'rgba(255, 255, 255, 0.75)',
        blackMain: 'rgb(7, 7, 36)',
        darkGrey: 'rgb(56, 56, 79)',
        lightGrey: 'rgb(131, 131, 145)',
        mercury: 'hsl(196, 83%, 93%)',
        venus: 'hsl(39, 88%, 73%)',
        earth: 'hsl(238, 99%, 66%)',
        mars: 'hsl(12, 100%, 64%)',
        jupiter: 'hsl(27, 75%, 70%)',
        saturn: 'hsl(40, 96%, 70%)',
        uranus: 'hsl(168, 82%, 67%)',
        neptune: 'hsl(222, 95%, 63%)',
      },
      gridTemplateRows: {
        custom: 'min-content 1fr 1fr min-content',
        customMd: 'min-content 1fr min-content min-content',
      },
    },
  },
  plugins: [],
};
