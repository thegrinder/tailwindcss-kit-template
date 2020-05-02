const { darkTheme } = require('../../../colors');

const inputDarkTheme = {
  normal: {
    base: {
      color: darkTheme.neutral[1000],
      borderColor: darkTheme.neutral[300],
    },
    active: {
      borderColor: darkTheme.primary[300],
      boxShadow: `0 0 1px 2px ${darkTheme.primary[100]}`,
    },
  },
  valid: {
    base: {
      borderColor: darkTheme.success[300],
    },
    active: {
      borderColor: darkTheme.success[300],
      boxShadow: `0 0 1px 2px ${darkTheme.success[100]}`,
    },
  },
  invalid: {
    base: {
      color: darkTheme.danger[500],
      borderColor: darkTheme.danger[300],
    },
    active: {
      borderColor: darkTheme.danger[300],
      boxShadow: `0 0 1px 2px ${darkTheme.danger[100]}`,
    },
  },
  disabled: {
    color: darkTheme.neutral[300],
    backgroundColor: darkTheme.neutral[50],
    borderColor: darkTheme.neutral[300],
  },
};

module.exports = inputDarkTheme;
