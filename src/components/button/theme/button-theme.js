const { lightModeKey, darkModeKey } = require('../../../colors');
const buttonLightTheme = require('./button-light-theme');
const buttonDarkTheme = require('./button-dark-theme');

const buttonVariants = {
  [darkModeKey]: buttonDarkTheme,
  [lightModeKey]: buttonLightTheme,
};

const buttonSizes = {
  sm: {
    padding: '0 1rem',
    height: '2rem',
    fontSize: '.875rem',
  },
  md: {
    padding: '0 1.25rem',
    height: '2.75rem',
    fontSize: '1rem',
  },
  lg: {
    padding: '0 1.5rem',
    height: '3.5rem',
    fontSize: '1.25rem',
  },
};

module.exports = {
  buttonVariants,
  buttonSizes,
};
