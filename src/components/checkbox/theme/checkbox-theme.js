const { lightModeKey, darkModeKey } = require('../../../colors');
const checkboxLightTheme = require('./checkbox-light-theme');
const checkboxDarkTheme = require('./checkbox-dark-theme');

const checkboxTheme = {
  [darkModeKey]: checkboxDarkTheme,
  [lightModeKey]: checkboxLightTheme,
};

module.exports = {
  checkboxTheme,
};
