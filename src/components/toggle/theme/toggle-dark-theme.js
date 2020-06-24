const { darkTheme } = require('../../../colors');

const toggleDarkTheme = {
  normal: {
    backgroundColor: darkTheme.neutral[300],
  },
  checked: {
    backgroundColor: darkTheme.primary[500],
  },
};

module.exports = toggleDarkTheme;
