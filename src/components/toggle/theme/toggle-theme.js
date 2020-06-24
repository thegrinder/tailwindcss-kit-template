const { lightModeKey, darkModeKey } = require('../../../colors');
const toggleLightTheme = require('./toggle-light-theme');
const toggleDarkTheme = require('./toggle-dark-theme');

const toggleTheme = {
  [darkModeKey]: toggleDarkTheme,
  [lightModeKey]: toggleLightTheme,
};

module.exports = {
  toggleTheme,
};
