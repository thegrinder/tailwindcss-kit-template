const { lightModeKey, darkModeKey } = require('../../../colors');
const linkLightTheme = require('./linkLightTheme');
const linkDarkTheme = require('./linkDarkTheme');

const linkVariants = {
  [darkModeKey]: linkDarkTheme,
  [lightModeKey]: linkLightTheme,
};

module.exports = {
  linkVariants,
};
