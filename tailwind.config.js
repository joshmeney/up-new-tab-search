const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./components/**/*.js', './pages/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'orange-up': '#ff7a64',
        'yellow-up': '#ffef6b',
      },
    },
  },
  plugins: [require('@tailwindcss/ui')],
};
