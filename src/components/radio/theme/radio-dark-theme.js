const { darkTheme } = require('../../../colors');
const { createBoxShadow } = require('../../../helpers');

const radioDarkTheme = {
  normal: {
    base: {
      borderColor: darkTheme.neutral[600],
    },
    active: {
      borderColor: darkTheme.primary[300],
      boxShadow: createBoxShadow(darkTheme.primary[100]),
    },
    checked: {
      borderColor: darkTheme.primary[300],
      backgroundColor: darkTheme.primary[300],
    },
    disabled: {
      backgroundColor: darkTheme.neutral[400],
      borderColor: darkTheme.neutral[400],
    },
  },
  valid: {
    base: {
      borderColor: darkTheme.success[300],
    },
    active: {
      boxShadow: createBoxShadow(darkTheme.success[100]),
    },
    checked: {
      backgroundColor: darkTheme.success[300],
    },
  },
  invalid: {
    base: {
      borderColor: darkTheme.danger[300],
    },
    active: {
      boxShadow: createBoxShadow(darkTheme.danger[100]),
    },
  },
};

module.exports = radioDarkTheme;
