const { lightModeKey, darkModeKey } = require('../../../colors');
const modalDarkTheme = require('./modal-dark-theme');
const modalLightTheme = require('./modal-light-theme');

const modalTheme = {
  [darkModeKey]: modalDarkTheme,
  [lightModeKey]: modalLightTheme,
};

module.exports = {
  modalTheme,
};
