const { darkTheme } = require('../../../colors');

const linkDarkTheme = {
  default: {
    normal: {
      color: darkTheme.primary400,
    },
    hover: {
      color: darkTheme.primary600,
    },
  },
  muted: {
    normal: {
      color: darkTheme.neutral600,
    },
    hover: {
      color: darkTheme.neutral700,
    },
  },
};

module.exports = linkDarkTheme;
