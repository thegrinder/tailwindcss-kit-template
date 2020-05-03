const { lightTheme } = require('../../../colors');

const checkboxLightTheme = {
  normal: {
    base: {
      borderColor: lightTheme.neutral[300],
    },
    active: {
      borderColor: lightTheme.primary[500],
      boxShadow: `0 0 0 3px ${lightTheme.primary[100]}`,
    },
    checked: {
      borderColor: lightTheme.primary[500],
      backgroundColor: lightTheme.primary[500],
    },
    disabled: {
      backgroundColor: lightTheme.neutral[200],
      borderColor: lightTheme.neutral[300],
    },
  },
  invalid: {
    base: {
      borderColor: lightTheme.danger[500],
    },
    active: {
      boxShadow: `0 0 0 3px ${lightTheme.danger[100]}`,
    },
  },
};

module.exports = checkboxLightTheme;
