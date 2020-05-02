const { darkTheme } = require('../../../colors');

const outlinedLabelDarkTheme = {
  base: {
    borderColor: darkTheme.neutral[600],
    color: darkTheme.neutral[900],
  },
  hover: {},
  active: {
    borderColor: darkTheme.primary[400],
  },
  disabled: {
    borderColor: darkTheme.neutral[600],
    color: darkTheme.neutral[500],
  },
  valid: {
    borderColor: darkTheme.success[400],
    color: darkTheme.neutral[900],
  },
  invalid: {
    borderColor: darkTheme.danger[500],
    color: darkTheme.danger[500],
  },
};

module.exports = outlinedLabelDarkTheme;
