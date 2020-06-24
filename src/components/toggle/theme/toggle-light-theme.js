const { lightTheme } = require('../../../colors');

const toggleLightTheme = {
  normal: {
    backgroundColor: lightTheme.neutral[300],
  },
  checked: {
    backgroundColor: lightTheme.primary[500],
  },
};

module.exports = toggleLightTheme;
