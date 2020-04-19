const { lightModeKey, darkModeKey } = require('../../../colors');
const dividerLightTheme = require('./dividerLightTheme');
const dividerDarkTheme = require('./dividerDarkTheme');

const dividerTheme = {
  [darkModeKey]: dividerDarkTheme,
  [lightModeKey]: dividerLightTheme,
};

module.exports = {
  dividerTheme,
};
