const { darkTheme } = require('../../../colors');

const linkDarkTheme = {
  primary: {
    base: {
      color: darkTheme.primary[400],
    },
    hover: {
      color: darkTheme.primary[600],
    },
  },
  muted: {
    base: {
      color: darkTheme.neutral[600],
    },
    hover: {
      color: darkTheme.neutral[700],
    },
  },
};

module.exports = linkDarkTheme;
