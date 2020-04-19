const { lightModeKey, darkModeKey } = require('../../../colors');
const loadingBarLightTheme = require('./loadingBarLightTheme');
const loadingBarDarkTheme = require('./loadingBarDarkTheme');

const loadingBarTheme = {
  [darkModeKey]: loadingBarDarkTheme,
  [lightModeKey]: loadingBarLightTheme,
};

module.exports = {
  loadingBarTheme,
};
