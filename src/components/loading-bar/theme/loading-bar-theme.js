const { lightModeKey, darkModeKey } = require('../../../colors');
const loadingBarLightTheme = require('./loading-bar-light-theme');
const loadingBarDarkTheme = require('./loading-bar-dark-theme');

const loadingBarTheme = {
  [darkModeKey]: loadingBarDarkTheme,
  [lightModeKey]: loadingBarLightTheme,
};

module.exports = {
  loadingBarTheme,
};
