const { lightTheme } = require('../../../colors');

const textLightTheme = {
  neutral: {
    high: lightTheme.neutral[900],
    medium: lightTheme.neutral[800],
    low: lightTheme.neutral[700],
  },
  primary: {
    high: lightTheme.primary[500],
  },
  success: {
    high: lightTheme.success[500],
  },
  warning: {
    high: lightTheme.warning700,
  },
  danger: {
    high: lightTheme.danger[500],
  },
};

module.exports = textLightTheme;
