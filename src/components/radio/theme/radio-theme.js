const { lightModeKey, darkModeKey } = require('../../../colors');
const radioLightTheme = require('./radio-light-theme');
const radioDarkTheme = require('./radio-dark-theme');

const radioTheme = {
  [darkModeKey]: radioDarkTheme,
  [lightModeKey]: radioLightTheme,
};

module.exports = {
  radioTheme,
};
