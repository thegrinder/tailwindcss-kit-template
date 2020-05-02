const { lightTheme } = require('../../../colors');

const outlinedLabelLightTheme = {
  base: {
    borderColor: lightTheme.neutral[300],
    color: lightTheme.neutral[1000],
  },
  hover: {},
  active: {
    borderColor: lightTheme.primary[500],
  },
  disabled: {
    borderColor: lightTheme.neutral[300],
    color: lightTheme.neutral[300],
  },
  valid: {
    borderColor: lightTheme.success[500],
    color: lightTheme.neutral[1000],
  },
  invalid: {
    borderColor: lightTheme.danger[500],
    color: lightTheme.danger[500],
  },
};

module.exports = outlinedLabelLightTheme;
