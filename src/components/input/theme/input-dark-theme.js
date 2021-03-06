const { darkTheme } = require('../../../colors');
const { createBoxShadow } = require('../../../helpers');

const inputDarkTheme = {
  normal: {
    base: {
      color: darkTheme.neutral[1000],
      borderColor: darkTheme.neutral[300],
    },
    active: {
      borderColor: darkTheme.primary[300],
      boxShadow: createBoxShadow(darkTheme.primary[100]),
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
      boxShadow: createBoxShadow(darkTheme.success[100]),
    },
  },
  invalid: {
    base: {
      color: darkTheme.danger[500],
      borderColor: darkTheme.danger[300],
    },
    active: {
      boxShadow: createBoxShadow(darkTheme.danger[100]),
    },
  },
};

module.exports = inputDarkTheme;
