const { lightModeKey, darkModeKey } = require('../../../colors');
const outlinedLabelLightTheme = require('./outlined-label-light-theme');
const outlinedLabelDarkTheme = require('./outlined-label-dark-theme');

const outlinedLabelTheme = {
  [darkModeKey]: outlinedLabelDarkTheme,
  [lightModeKey]: outlinedLabelLightTheme,
};

module.exports = {
  outlinedLabelTheme,
};
