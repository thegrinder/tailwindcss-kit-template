const { lightModeKey, darkModeKey } = require('../../../colors');
const iconLightTheme = require('./icon-light-theme');
const iconDarkTheme = require('./icon-dark-theme');

const iconVariants = {
  [darkModeKey]: iconDarkTheme,
  [lightModeKey]: iconLightTheme,
};

module.exports = {
  iconVariants,
};
