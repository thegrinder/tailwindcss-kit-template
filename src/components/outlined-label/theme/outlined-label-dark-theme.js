const { darkTheme } = require('../../../colors');
const { createBoxShadow } = require('../../../helpers');

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
      boxShadow: createBoxShadow(darkTheme.primary[100]),
    },
    disabled: {
      borderColor: darkTheme.neutral[300],
      color: darkTheme.neutral[300],
    },
  },
  valid: {
    base: {
      borderColor: darkTheme.success[300],
      color: darkTheme.neutral[1000],
    },
    active: {
      boxShadow: createBoxShadow(darkTheme.success[100]),
    },
  },
  invalid: {
    base: {
      borderColor: darkTheme.danger[300],
      color: darkTheme.danger[500],
    },
    active: {
      boxShadow: createBoxShadow(darkTheme.danger[100]),
    },
  },
};

module.exports = outlinedLabelDarkTheme;
