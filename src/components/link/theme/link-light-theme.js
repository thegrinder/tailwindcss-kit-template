const { lightTheme } = require('../../../colors');

const linkLightTheme = {
  primary: {
    normal: {
      color: lightTheme.primary[400],
    },
    hover: {
      color: lightTheme.primary[600],
    },
  },
  muted: {
    normal: {
      color: lightTheme.neutral[400],
    },
    hover: {
      color: lightTheme.neutral[600],
    },
  },
};

module.exports = linkLightTheme;
