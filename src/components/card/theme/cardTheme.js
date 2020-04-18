const { lightModeKey, darkModeKey } = require('../../../colors');
const cardDarkTheme = require('./cardDarkTheme');
const cardLightTheme = require('./cardLightTheme');

const cardElevations = {
  [darkModeKey]: cardDarkTheme,
  [lightModeKey]: cardLightTheme,
};

module.exports = {
  cardElevations,
};
