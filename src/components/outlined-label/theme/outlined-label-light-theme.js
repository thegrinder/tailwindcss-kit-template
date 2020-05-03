const { lightTheme } = require('../../../colors');
const { createBoxShadow } = require('../../../helpers');

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
      boxShadow: createBoxShadow(lightTheme.primary[100]),
    },
    disabled: {
      borderColor: lightTheme.neutral[300],
      color: lightTheme.neutral[300],
    },
  },
  valid: {
    base: {
      borderColor: lightTheme.success[500],
      color: lightTheme.neutral[1000],
    },
    active: {
      boxShadow: createBoxShadow(lightTheme.success[100]),
    },
  },
  invalid: {
    base: {
      borderColor: lightTheme.danger[500],
      color: lightTheme.danger[500],
    },
    active: {
      boxShadow: createBoxShadow(lightTheme.danger[100]),
    },
  },
};

module.exports = outlinedLabelLightTheme;
