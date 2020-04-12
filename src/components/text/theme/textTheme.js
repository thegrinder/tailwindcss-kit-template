const textDarkTheme = require('./textDarkTheme');
const textLightTheme = require('./textLightTheme');

const textColors = {
  dark: textDarkTheme,
  light: textLightTheme,
};

const textSizes = {
  xxl: {
    fontSize: '1.5rem',
  },
  xl: {
    fontSize: '1.25rem',
  },
  l: {
    fontSize: '1.125rem',
  },
  m: {
    fontSize: '1rem',
  },
  s: {
    fontSize: '.875rem',
  },
  xs: {
    fontSize: '.75rem',
  },
};

module.exports = {
  textColors,
  textSizes,
};
