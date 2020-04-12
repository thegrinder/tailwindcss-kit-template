const buttonLightTheme = require('./buttonLightTheme');
const buttonDarkTheme = require('./buttonDarkTheme');

const buttonTypes = {
  dark: buttonDarkTheme,
  light: buttonLightTheme,
};

const buttonSizes = {
  s: {
    padding: '0 1rem',
    height: '2rem',
    fontSize: '.875rem',
  },
  m: {
    padding: '0 1.25rem',
    height: '2.5rem',
    fontSize: '1rem',
  },
  l: {
    padding: '0 1.5rem',
    height: '3rem',
    fontSize: '1.25rem',
  },
};

module.exports = {
  buttonTypes,
  buttonSizes,
};
