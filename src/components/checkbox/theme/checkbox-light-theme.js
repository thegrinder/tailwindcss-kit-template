const { lightTheme } = require('../../../colors');
const { createBoxShadow } = require('../../../helpers');

const checkboxLightTheme = {
  normal: {
    base: {
      borderColor: lightTheme.neutral[300],
    },
    active: {
      borderColor: lightTheme.primary[500],
      boxShadow: createBoxShadow(lightTheme.primary[100]),
    },
    checked: {
      borderColor: lightTheme.primary[500],
      backgroundColor: lightTheme.primary[500],
    },
    disabled: {
      backgroundColor: lightTheme.neutral[300],
      borderColor: lightTheme.neutral[300],
    },
  },
  valid: {
    base: {
      borderColor: lightTheme.success[500],
    },
    active: {
      boxShadow: createBoxShadow(lightTheme.success[100]),
    },
    checked: {
      backgroundColor: lightTheme.success[500],
    },
  },
  invalid: {
    base: {
      borderColor: lightTheme.danger[500],
    },
    active: {
      boxShadow: createBoxShadow(lightTheme.danger[100]),
    },
  },
};

module.exports = checkboxLightTheme;
