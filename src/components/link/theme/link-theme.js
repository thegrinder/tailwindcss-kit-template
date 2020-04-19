const { lightModeKey, darkModeKey } = require('../../../colors');
const linkLightTheme = require('./link-light-theme');
const linkDarkTheme = require('./link-dark-theme');

const linkVariants = {
  [darkModeKey]: linkDarkTheme,
  [lightModeKey]: linkLightTheme,
};

module.exports = {
  linkVariants,
};
