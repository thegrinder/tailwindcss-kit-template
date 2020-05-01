const { lightModeKey, darkModeKey } = require('../../../colors');
const inputLightTheme = require('./input-light-theme');
const inputDarkTheme = require('./input-dark-theme');

const inputTheme = {
  [darkModeKey]: inputDarkTheme,
  [lightModeKey]: inputLightTheme,
};

module.exports = {
  inputTheme,
};
