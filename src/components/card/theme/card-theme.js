const { lightModeKey, darkModeKey } = require('../../../colors');
const cardDarkTheme = require('./card-dark-theme');
const cardLightTheme = require('./card-light-theme');

const cardElevations = {
  [darkModeKey]: cardDarkTheme,
  [lightModeKey]: cardLightTheme,
};

module.exports = {
  cardElevations,
};
