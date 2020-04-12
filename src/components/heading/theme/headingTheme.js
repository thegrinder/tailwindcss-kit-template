const headingDarkTheme = require('./headingDarkTheme');
const headingLightTheme = require('./headingLightTheme');

const headingColors = {
  dark: headingDarkTheme,
  light: headingLightTheme,
};

const headingSizes = {
  h1: {
    fontSize: '3rem',
  },
  h2: {
    fontSize: '2.5rem',
  },
  h3: {
    fontSize: '2rem',
  },
  h4: {
    fontSize: '1.75rem',
  },
  h5: {
    fontSize: '1.5rem',
  },
  h6: {
    fontSize: '1.25rem',
  },
};

module.exports = {
  headingColors,
  headingSizes,
};
