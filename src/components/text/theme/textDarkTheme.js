const { darkTheme } = require('../../../colors');

const textDarkTheme = {
  neutral: {
    high: darkTheme.neutral[1000],
    medium: darkTheme.neutral[800],
    low: darkTheme.neutral[700],
  },
  primary: {
    high: darkTheme.primary[500],
  },
  success: {
    high: darkTheme.success[500],
  },
  warning: {
    high: darkTheme.warning[500],
  },
  danger: {
    high: darkTheme.danger[500],
  },
};

module.exports = textDarkTheme;
