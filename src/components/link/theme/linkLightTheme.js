const { lightTheme } = require('../../../colors');

const linkLightTheme = {
  default: {
    normal: {
      color: lightTheme.primary400,
    },
    hover: {
      color: lightTheme.primary600,
    },
  },
  muted: {
    normal: {
      color: lightTheme.neutral400,
    },
    hover: {
      color: lightTheme.neutral600,
    },
  },
};

module.exports = linkLightTheme;
