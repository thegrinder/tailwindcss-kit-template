const { darkTheme } = require('../../../colors');

const checkboxDarkTheme = {
  normal: {
    base: {
      borderColor: darkTheme.neutral[600],
    },
    active: {
      borderColor: darkTheme.primary[400],
      boxShadow: `0 0 0 3px ${darkTheme.primary[100]}`,
    },
    checked: {
      borderColor: darkTheme.primary[400],
      backgroundColor: darkTheme.primary[400],
    },
    disabled: {
      backgroundColor: darkTheme.neutral[400],
      borderColor: darkTheme.neutral[600],
    },
  },
  invalid: {
    base: {
      borderColor: darkTheme.danger[500],
    },
    active: {
      boxShadow: `0 0 0 3px ${darkTheme.danger[100]}`,
    },
  },
};

module.exports = checkboxDarkTheme;
