const { darkTheme } = require('../../../colors');
const { createBoxShadow } = require('../../../helpers');

const checkboxDarkTheme = {
  normal: {
    base: {
      borderColor: darkTheme.neutral[600],
    },
    active: {
      borderColor: darkTheme.primary[400],
      boxShadow: createBoxShadow(darkTheme.primary[100]),
    },
    checked: {
      borderColor: darkTheme.primary[400],
      backgroundColor: darkTheme.primary[400],
    },
    disabled: {
      backgroundColor: darkTheme.neutral[400],
      borderColor: darkTheme.neutral[600],
    },
  },
  invalid: {
    base: {
      borderColor: darkTheme.danger[500],
    },
    active: {
      boxShadow: createBoxShadow(darkTheme.danger[100]),
    },
  },
};

module.exports = checkboxDarkTheme;
