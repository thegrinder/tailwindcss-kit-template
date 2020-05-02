const { lightTheme } = require('../../../colors');

const outlinedLabelLightTheme = {
  normal: {
    base: {
      borderColor: lightTheme.neutral[300],
      color: lightTheme.neutral[1000],
    },
    checked: {
      borderColor: lightTheme.primary[300],
    },
    active: {
      borderColor: lightTheme.primary[300],
      boxShadow: `0 0 0 3px ${lightTheme.primary[100]}`,
    },
  },
  valid: {
    base: {
      borderColor: lightTheme.success[500],
      color: lightTheme.neutral[1000],
    },
    active: {
      borderColor: lightTheme.success[500],
      boxShadow: `0 0 0 3px ${lightTheme.success[100]}`,
    },
  },
  invalid: {
    base: {
      borderColor: lightTheme.danger[500],
      color: lightTheme.danger[500],
    },
    active: {
      borderColor: lightTheme.danger[500],
      boxShadow: `0 0 0 3px ${lightTheme.danger[100]}`,
    },
  },
  disabled: {
    borderColor: lightTheme.neutral[300],
    color: lightTheme.neutral[300],
  },
};

module.exports = outlinedLabelLightTheme;
