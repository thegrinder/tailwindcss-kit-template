const { darkTheme } = require('../../../colors');

const inputDarkTheme = {
  normal: {
    base: {
      color: darkTheme.neutral[1000],
      borderColor: darkTheme.neutral[300],
    },
    active: {
      borderColor: darkTheme.primary[300],
      boxShadow: `0 0 0 3px ${darkTheme.primary[100]}`,
    },
    disabled: {
      color: darkTheme.neutral[300],
      backgroundColor: darkTheme.neutral[50],
      borderColor: darkTheme.neutral[300],
    },
  },
  valid: {
    base: {
      color: darkTheme.neutral[1000],
      borderColor: darkTheme.success[300],
    },
    active: {
      boxShadow: `0 0 0 3px ${darkTheme.success[100]}`,
    },
  },
  invalid: {
    base: {
      color: darkTheme.danger[500],
      borderColor: darkTheme.danger[300],
    },
    active: {
      boxShadow: `0 0 0 3px ${darkTheme.danger[100]}`,
    },
  },
};

module.exports = inputDarkTheme;
