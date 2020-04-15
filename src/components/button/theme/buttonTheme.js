const buttonLightTheme = require('./buttonLightTheme');
const buttonDarkTheme = require('./buttonDarkTheme');

const buttonVariants = {
  dark: buttonDarkTheme,
  light: buttonLightTheme,
};

const buttonSizes = {
  sm: {
    padding: '0 1rem',
    height: '2rem',
    fontSize: '.875rem',
  },
  md: {
    padding: '0 1.25rem',
    height: '2.5rem',
    fontSize: '1rem',
  },
  lg: {
    padding: '0 1.5rem',
    height: '3rem',
    fontSize: '1.25rem',
  },
};

module.exports = {
  buttonVariants,
  buttonSizes,
};
