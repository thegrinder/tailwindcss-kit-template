const { darkTheme } = require('../../../colors');

const outlinedLabelDarkTheme = {
  normal: {
    base: {
      borderColor: darkTheme.neutral[300],
      color: darkTheme.neutral[1000],
    },
    checked: {
      borderColor: darkTheme.primary[300],
    },
    active: {
      borderColor: darkTheme.primary[300],
      boxShadow: `0 0 0 3px ${darkTheme.primary[100]}`,
    },
  },
  valid: {
    base: {
      borderColor: darkTheme.success[500],
      color: darkTheme.neutral[1000],
    },
    active: {
      boxShadow: `0 0 0 3px ${darkTheme.success[100]}`,
    },
  },
  invalid: {
    base: {
      borderColor: darkTheme.danger[500],
      color: darkTheme.danger[500],
    },
    active: {
      boxShadow: `0 0 0 3px ${darkTheme.danger[100]}`,
    },
  },
  disabled: {
    borderColor: darkTheme.neutral[300],
    color: darkTheme.neutral[300],
  },
};

module.exports = outlinedLabelDarkTheme;
