const { darkTheme } = require('../../../colors');

const linkDarkTheme = {
  default: {
    normal: {
      color: darkTheme.primary[400],
    },
    hover: {
      color: darkTheme.primary[600],
    },
  },
  muted: {
    normal: {
      color: darkTheme.neutral[600],
    },
    hover: {
      color: darkTheme.neutral[700],
    },
  },
};

module.exports = linkDarkTheme;
