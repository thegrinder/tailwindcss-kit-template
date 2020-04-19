const { darkTheme } = require('../../../colors');
const { alpha } = require('../../../helpers');

const dividerDarkTheme = {
  barBackground: alpha(darkTheme.primary[500], '50%'),
  barColor: darkTheme.primary[500],
};

module.exports = dividerDarkTheme;
