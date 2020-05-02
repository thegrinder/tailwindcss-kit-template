const { lightTheme } = require('../../../colors');

const inputLightTheme = {
  normal: {
    base: {
      color: lightTheme.neutral[1000],
      borderColor: lightTheme.neutral[300],
    },
    active: {
      borderColor: lightTheme.primary[300],
      boxShadow: `0 0 1px 2px ${lightTheme.primary[100]}`,
    },
  },
  valid: {
    base: {
      borderColor: lightTheme.success[300],
    },
    active: {
      borderColor: lightTheme.success[300],
      boxShadow: `0 0 1px 2px ${lightTheme.success[100]}`,
    },
  },
  invalid: {
    base: {
      color: lightTheme.danger[500],
      borderColor: lightTheme.danger[300],
    },
    active: {
      borderColor: lightTheme.danger[300],
      boxShadow: `0 0 1px 2px ${lightTheme.danger[100]}`,
    },
  },
  disabled: {
    color: lightTheme.neutral[300],
    backgroundColor: lightTheme.neutral[50],
    borderColor: lightTheme.neutral[300],
  },
};

module.exports = inputLightTheme;
