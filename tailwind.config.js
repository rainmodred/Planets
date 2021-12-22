module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
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
    },
  },
  plugins: [],
};
