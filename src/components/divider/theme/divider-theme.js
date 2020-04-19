const { lightModeKey, darkModeKey } = require('../../../colors');
const dividerLightTheme = require('./divider-light-theme');
const dividerDarkTheme = require('./divider-dark-theme');

const dividerTheme = {
  [darkModeKey]: dividerDarkTheme,
  [lightModeKey]: dividerLightTheme,
};

module.exports = {
  dividerTheme,
};
