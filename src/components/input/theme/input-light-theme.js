const { lightTheme } = require('../../../colors');

const inputLightTheme = {
  base: {
    color: lightTheme.neutral[1000],
    borderColor: lightTheme.neutral[300],
  },
  active: {
    borderColor: lightTheme.primary[500],
  },
  disabled: {
    color: lightTheme.neutral[300],
    backgroundColor: lightTheme.neutral[50],
    borderColor: lightTheme.neutral[300],
  },
  valid: {
    borderColor: lightTheme.success[500],
  },
  invalid: {
    color: lightTheme.danger[500],
    borderColor: lightTheme.danger[500],
  },
};

module.exports = inputLightTheme;
