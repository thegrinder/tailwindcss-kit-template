const { darkTheme } = require('../../../colors');

const inputDarkTheme = {
  base: {
    borderColor: darkTheme.neutral[600],
    color: darkTheme.neutral[900],
  },
  active: {
    borderColor: darkTheme.primary[500],
  },
  disabled: {
    color: darkTheme.neutral[500],
    backgroundColor: darkTheme.neutral[100],
    borderColor: darkTheme.neutral[600],
  },
  valid: {
    borderColor: darkTheme.success[400],
  },
  invalid: {
    color: darkTheme.danger[500],
    borderColor: darkTheme.danger[500],
  },
};

module.exports = inputDarkTheme;
