const { lightTheme } = require('../../../colors');
const { alpha } = require('../../../helpers');

const dividerLightTheme = {
  barBackground: alpha(lightTheme.primary[500], '50%'),
  barColor: lightTheme.primary[500],
};

module.exports = dividerLightTheme;
