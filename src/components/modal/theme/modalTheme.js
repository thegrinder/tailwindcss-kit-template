const { lightModeKey, darkModeKey } = require('../../../colors');
const modalDarkTheme = require('./modalDarkTheme');
const modalLightTheme = require('./modalLightTheme');

const modalTheme = {
  [darkModeKey]: modalDarkTheme,
  [lightModeKey]: modalLightTheme,
};

module.exports = {
  modalTheme,
};
